import React from 'react';
import '../style.css';

const PaymentPage = () => {
  return (
    <div className="payment-container">
      <div className="payment-content">
        <h2>Payment in Progress...</h2>
        <p>Your payment is being processed. Please wait.</p>
        <div className="loading-spinner"></div>
      </div>
    </div>
  );
};

export default PaymentPage;
