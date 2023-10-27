import { ChangeEventHandler } from "react";
import cls from "./Input.module.scss";
import InputMask from "react-input-mask";

interface InputProps {
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  type: string;
  value?: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
  mask?: string;
  maskChar?: string;
  checked?: boolean;
}

const Input = ({ className, onValueChange, mask, ...other }: InputProps) => {
  return mask ? (
    <InputMask
      className={`${cls.Input}${className ? ` ${className}` : ""}`}
      onChange={onValueChange}
      mask={mask}
      {...other}
    />
  ) : (
    <input
      className={`${cls.Input}${className ? ` ${className}` : ""}`}
      onChange={onValueChange}
      {...other}
    />
  );
};

export default Input;
