// IBAN Validator
export const validateIBAN = (iban: string): boolean => {
  const cleanIBAN = iban.replace(/\s/g, '').toUpperCase();
  if (!/^ES\d{22}$/.test(cleanIBAN)) return false;
  
  // Move first 4 chars to end and convert letters to numbers
  const rearrangedIBAN = (cleanIBAN.substring(4) + cleanIBAN.substring(0, 4)).split('')
    .map(char => isNaN(parseInt(char)) ? (char.charCodeAt(0) - 55).toString() : char)
    .join('');
  
  // Calculate MOD 97
  let remainder = 0;
  for (let i = 0; i < rearrangedIBAN.length; i++) {
    remainder = (remainder * 10 + parseInt(rearrangedIBAN[i])) % 97;
  }
  
  return remainder === 1;
};

// Credit Card Validator (Luhn algorithm)
export const validateCreditCard = (number: string, expiry: string): boolean => {
  const cleanNumber = number.replace(/\s/g, '');
  if (!/^\d{16}$/.test(cleanNumber)) return false;
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  // Validate expiry date (MM/YY)
  if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiry)) return false;
  const [month, year] = expiry.split('/').map(n => parseInt(n));
  const now = new Date();
  const expiryDate = new Date(2000 + year, month - 1);
  
  return sum % 10 === 0 && expiryDate > now;
};

// Spanish DNI Validator
export const validateDNI = (dni: string): boolean => {
  const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
  const cleanDNI = dni.trim().toUpperCase();
  
  if (!/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(cleanDNI)) return false;
  
  const number = parseInt(cleanDNI.substring(0, 8));
  const letter = cleanDNI.charAt(8);
  
  return letters.charAt(number % 23) === letter;
};

// Spanish Name Validator
export const validateSpanishName = (fullName: string): boolean => {
  const parts = fullName.trim().split(/\s+/);
  
  if (parts.length !== 3) return false;
  
  // Check each part has at least 2 characters and contains only letters
  return parts.every(part => 
    part.length >= 2 && /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+$/.test(part)
  );
};