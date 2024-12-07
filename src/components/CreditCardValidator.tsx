import React, { useState } from 'react';
import { generateCreditCard } from '../utils/generators';
import { ValidatorCard } from './ValidatorCard';

export function CreditCardValidator() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  const handleGenerate = () => {
    const card = generateCreditCard();
    setCardNumber(card.number);
    setExpiry(card.expiry);
  };

  return (
    <ValidatorCard title="Credit Card Generator" onValidate={handleGenerate}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Card Number
        </label>
        <input
          type="text"
          value={cardNumber}
          readOnly
          className="w-full p-2 border rounded-md bg-gray-50"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Expiry Date
        </label>
        <input
          type="text"
          value={expiry}
          readOnly
          className="w-full p-2 border rounded-md bg-gray-50"
        />
      </div>
    </ValidatorCard>
  );
}