import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { FC, ReactNode } from 'react';
export interface TextProps {
  size: 'lg' | 'md' | 'sm';
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}
export const Text: FC<TextProps> = ({ size, asChild, className, children }) => {
  const Comp = asChild ? Slot : 'span';
  return (
    <Comp
      className={clsx(className, {
        'text-base': size === 'lg',
        'text-sm': size === 'md',
        'text-xs': size === 'sm',
      })}
    >
      {children}
    </Comp>
  );
};
