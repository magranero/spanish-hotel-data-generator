import React from 'react';
import { IBANValidator } from './components/IBANValidator';
import { CreditCardValidator } from './components/CreditCardValidator';
import { DNIValidator } from './components/DNIValidator';
import { NameValidator } from './components/NameValidator';
import { Wand2 } from 'lucide-react';

function App() {
  const handleGenerateAll = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.click());
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Wand2 className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Spanish Data Generator</h1>
          </div>
          <button
            onClick={handleGenerateAll}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
          >
            Generate All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IBANValidator />
          <CreditCardValidator />
          <DNIValidator />
          <NameValidator />
        </div>
      </div>
    </div>
  );
}

export default App;