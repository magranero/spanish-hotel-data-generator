import React, { useState } from 'react';
import { generateSpanishName } from '../utils/generators';
import { ValidatorCard } from './ValidatorCard';

export function NameValidator() {
  const [fullName, setFullName] = useState('');

  const handleGenerate = () => {
    setFullName(generateSpanishName());
  };

  return (
    <ValidatorCard title="Spanish Name Generator" onValidate={handleGenerate}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Generated Name
        </label>
        <input
          type="text"
          value={fullName}
          readOnly
          className="w-full p-2 border rounded-md bg-gray-50"
        />
      </div>
    </ValidatorCard>
  );
}