// IBAN Generator
export const generateIBAN = (): string => {
  // Generate random account numbers
  const bank = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
  const branch = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
  const control = String(Math.floor(Math.random() * 99)).padStart(2, '0');
  const account = String(Math.floor(Math.random() * 9999999999)).padStart(10, '0');
  
  // Calculate check digits for ES
  const base = `${bank}${branch}${control}${account}142800`;
  let remainder = 0;
  for (let i = 0; i < base.length; i++) {
    remainder = (remainder * 10 + parseInt(base[i])) % 97;
  }
  const checkDigits = String(98 - remainder).padStart(2, '0');
  
  return `ES${checkDigits} ${bank} ${branch} ${control}${account}`;
};

// Credit Card Generator
export const generateCreditCard = (): { number: string; expiry: string } => {
  // Generate random digits (Visa-like)
  let number = '4'; // Start with 4 for Visa
  for (let i = 0; i < 14; i++) {
    number += Math.floor(Math.random() * 10);
  }
  
  // Calculate Luhn check digit
  let sum = 0;
  let isEven = false;
  for (let i = number.length - 1; i >= 0; i--) {
    let digit = parseInt(number[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  const checkDigit = ((Math.floor(sum / 10) + 1) * 10 - sum) % 10;
  number += checkDigit;
  
  // Generate expiry date (between 1-3 years from now)
  const now = new Date();
  const monthsToAdd = Math.floor(Math.random() * 24) + 12; // 1-3 years
  const expiryDate = new Date(now.setMonth(now.getMonth() + monthsToAdd));
  const expiry = `${String(expiryDate.getMonth() + 1).padStart(2, '0')}/${String(expiryDate.getFullYear()).slice(-2)}`;
  
  // Format card number in groups of 4
  const formatted = number.match(/.{1,4}/g)?.join(' ') || number;
  
  return { number: formatted, expiry };
};

// DNI Generator
export const generateDNI = (): string => {
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const number = Math.floor(Math.random() * 100000000);
  const paddedNumber = String(number).padStart(8, '0');
  const letter = letters[number % 23];
  
  return `${paddedNumber}${letter}`;
};

// Spanish Name Generator
export const generateSpanishName = (): string => {
  const firstNames = [
    "Antonio", "María", "Manuel", "Ana", "José", "Isabel", "Francisco", "Carmen",
    "David", "Laura", "Juan", "Cristina", "Javier", "Marta", "Carlos", "Lucía"
  ];
  
  const surnames = [
    "García", "Rodríguez", "González", "Fernández", "López", "Martínez",
    "Sánchez", "Pérez", "Gómez", "Martín", "Jiménez", "Ruiz", "Hernández",
    "Díaz", "Moreno", "Muñoz", "Álvarez", "Romero", "Alonso", "Gutiérrez"
  ];
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const surname1 = surnames[Math.floor(Math.random() * surnames.length)];
  const surname2 = surnames[Math.floor(Math.random() * surnames.length)];
  
  return `${firstName} ${surname1} ${surname2}`;
};