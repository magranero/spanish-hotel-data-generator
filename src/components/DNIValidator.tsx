import React, { useState } from 'react';
import { generateDNI } from '../utils/generators';
import { ValidatorCard } from './ValidatorCard';

export function DNIValidator() {
  const [dni, setDni] = useState('');

  const handleGenerate = () => {
    setDni(generateDNI());
  };

  return (
    <ValidatorCard title="DNI Generator" onValidate={handleGenerate}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Generated DNI
        </label>
        <input
          type="text"
          value={dni}
          readOnly
          className="w-full p-2 border rounded-md bg-gray-50"
        />
      </div>
    </ValidatorCard>
  );
}