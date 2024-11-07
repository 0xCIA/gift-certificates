// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CertificateList from './components/CertificateList';
import ContactForm from './components/ContactForm';
import PaymentPage from './components/PaymentPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CertificateList />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Router>
  );
};

export default App;
