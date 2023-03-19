import clsx from 'clsx';
import { ButtonHTMLAttributes, FC } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={clsx(
        'outline-none focus:ring-2 focus:ring-[#6448fe] bg-[#21092F] rounded w-full py-3 flex items-center justify-center text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
