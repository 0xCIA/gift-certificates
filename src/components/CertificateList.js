import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const CertificateDropdown = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // get sertifikaty
  const fetchCertificates = async () => {
    const url = new URL('https://sycret.ru/service/api/api');
    const params = {
      ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
      MethodName: 'OSGetGoodList',
    };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    try {

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Certificates Data:', data);

        // save
        if (data.result === 0) {
          setCertificates(data.data);
        } else {
          console.error('API Error:', data.resultdescription);
        }
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Request failed', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const selected = certificates.find(certificate => certificate.ID === selectedId);
    setSelectedCertificate(selected);
  };

  if (loading) {
    return <div>Загрузка доступных сертификатов..</div>;
  }

  return (
    <div className="certificate-container">
      <div className="certificate-select">
        <h1>Уважаемый пользователь</h1>
        <p>Выберите один из предложенных сертификатов из списка ниже</p>

        <select onChange={handleSelectChange} value={selectedCertificate?.ID || ''}>
          <option value="" disabled>Выберите сертификат</option>
          {certificates.map((certificate) => (
            <option key={certificate.ID} value={certificate.ID}>
              {certificate.NAME}
            </option>
          ))}
        </select>

        {selectedCertificate && (
          <div className="certificate-details">
            <h2>Детали:</h2>
            <p>Цена: {selectedCertificate.PRICE} рублей</p>
            <p>Скидка: {selectedCertificate.DISCOUNT}%</p>
            <p>Итого: {selectedCertificate.SUMMA} руб</p>

            <button className='button-main'
              onClick={() => {
                navigate('/contact', { state: { selectedCertificate } });
              }}
            >
              Перейти к оплате
            </button>
          </div>
        )}
      </div>

      <div className="certificate-image">
      </div>
    </div>
  );
};

export default CertificateDropdown;
