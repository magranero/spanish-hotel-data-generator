import React, { useState } from 'react';
import { generateIBAN } from '../utils/generators';
import { ValidatorCard } from './ValidatorCard';

export function IBANValidator() {
  const [iban, setIban] = useState('');

  const handleGenerate = () => {
    setIban(generateIBAN());
  };

  return (
    <ValidatorCard title="IBAN Generator" onValidate={handleGenerate}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Generated IBAN
        </label>
        <input
          type="text"
          value={iban}
          readOnly
          className="w-full p-2 border rounded-md bg-gray-50"
        />
      </div>
    </ValidatorCard>
  );
}