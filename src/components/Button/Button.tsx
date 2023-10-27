import { FormEventHandler, MouseEventHandler, ReactNode } from "react";
import cls from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode | ReactNode[];
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  onSubmit?: FormEventHandler<HTMLButtonElement>;
  value?: string;
  disabled?: boolean;
  tabIndex?: number;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({ children, className, ...other }: ButtonProps) => {
  return (
    <button
      className={`${cls.Button}${className ? ` ${className}` : ""}`}
      {...other}
    >
      {children}
    </button>
  );
};

export default Button;
