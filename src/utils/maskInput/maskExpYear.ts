export const maskExpYear = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{2})(\d)/g, '$1');
};
