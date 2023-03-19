import clsx from 'clsx';
import {
  InputHTMLAttributes,
  memo,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, ...props },
  ref,
) => {
  return (
    <input
      ref={ref}
      className={clsx(
        'h-11 rounded-lg px-2 w-full outline-none border  focus:border-[#600594]',
        className,
      )}
      {...props}
    />
  );
};
export const Input = memo(forwardRef(InputBase));
