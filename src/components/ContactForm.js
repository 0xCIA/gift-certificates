import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../style.css';

const ContactForm = () => {
  const location = useLocation();
  const { selectedCertificate } = location.state || {};
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const { name, phone, email } = formData;
    const phoneRegex = /^\+7\d{10}$/;
    const nameValid = name.trim().split(/\s+/).length >= 1;
    const emailValid = email.includes('@');
    const phoneValid = phoneRegex.test(phone);

    setIsFormValid(nameValid && phoneValid && emailValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      validateForm(updatedData);
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      const params = {
        ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
        MethodName: 'OSSale',
        certificateId: selectedCertificate.ID,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      };
      const query = new URLSearchParams(params).toString();
      try {
        const response = await fetch(`https://sycret.ru/service/api/api?${query}`);
        const data = await response.json();
        if (data.result === 0) {
          navigate('/payment');
        } else {
          console.error('OSSale Error:', data.resultdescription);
        }
      } catch (error) {
        console.error('Failed to send data:', error);
      }
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <h2>Введите контактную информацию</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label htmlFor="name">ФИО*</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Иван Иванович Иванов"
            />
          </div>
          <div className="input-field">
            <label htmlFor="phone">Телефон*</label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              pattern="^\+7\d{10}$"
              placeholder="+7(___)_______"
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Почта:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              placeholder="ivan@example.ru"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="button" onClick={handleBackClick}>
            Назад
          </button>
          <button type="submit">
            Оплатить
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
