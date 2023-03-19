export const maskCvc = (value: string) => {
  return value.replace(/\D/g, '').replace(/^(\d{3})(\d)/g, '$1');
};
