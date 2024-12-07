import React from 'react';
import { Wand2 } from 'lucide-react';

interface ValidatorCardProps {
  title: string;
  children: React.ReactNode;
  onValidate: () => void;
}

export function ValidatorCard({ title, children, onValidate }: ValidatorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <div className="flex items-center gap-2 mb-4">
        <Wand2 className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-4">
        {children}
      </div>
      <button
        onClick={onValidate}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        Generate
      </button>
    </div>
  );
}