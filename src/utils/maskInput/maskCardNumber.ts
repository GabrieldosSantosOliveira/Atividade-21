export const maskCardNumber = (value: string) => {
  return value
    .replace(/[^0-9]/g, ' ')
    .replace(/(\d{4})(\d)/g, '$1 $2')
    .replace(/(\d{4})(\d)/g, '$1 $2')
    .replace(/(\d{4})(\d)/g, '$1 $2')
    .replace(/(\d{4})(\d)/g, '$1');
};
