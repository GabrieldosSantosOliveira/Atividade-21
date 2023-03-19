import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { FC, HTMLAttributes, ReactNode } from 'react';
export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size: 'lg' | 'md' | 'sm';
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  asChild?: boolean;
  className?: string;
  children: ReactNode;
}
export const Heading: FC<HeadingProps> = ({
  size,
  asChild,
  className,
  children,
  level = 'h1',
  ...props
}) => {
  const Comp = level;
  return (
    <Comp
      className={clsx(
        {
          'text-2xl': size === 'lg',
          'text-xl': size === 'md',
          'text-lg': size === 'sm',
        },
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
