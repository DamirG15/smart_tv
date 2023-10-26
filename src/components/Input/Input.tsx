import { ChangeEventHandler } from "react";
import cls from "./Input.module.scss";

interface InputProps {
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  type: string;
  value?: string;
  onValueChange: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ className, onValueChange, ...other }: InputProps) => {
  return (
    <input
      className={`${cls.Input}${className ? ` ${className}` : ""}`}
      onChange={onValueChange}
      {...other}
    />
  );
};

export default Input;
