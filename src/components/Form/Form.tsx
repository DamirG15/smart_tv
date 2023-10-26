/* eslint-disable no-lone-blocks */
import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
import { Button, Input } from "../";
import { formData } from "../../data/constants";
import cls from "./Form.module.scss";

interface FormProps {
  onFormSubmit: Function;
}

const buttons = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "-1", label: "Стереть" },
  { value: "0", label: "0" },
];

const Form = ({ onFormSubmit }: FormProps) => {
  const [tel, setTel] = useState("+7");
  const [checkbox, setCheckbox] = useState(false);

  const onNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let newValue = event.target.value;
    if (newValue.length >= 12) {
      newValue = newValue.slice(0, 12);
    } else if (newValue.length === 0) {
      newValue = "+";
    }
    setTel(newValue);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const newValue = (event.target as HTMLButtonElement).value;
    if (newValue === "-1") {
      {
        tel.length > 1 && setTel((prev) => prev.slice(0, -1));
      }
    } else {
      {
        tel.length <= 11 && setTel((prev) => prev + newValue);
      }
    }
  };

  const onCheckboxChecked = () => {
    setCheckbox((prev) => !prev);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    setTel("+7");
    setCheckbox(false);
    onFormSubmit();
  };

  return (
    <form method="POST" onSubmit={onSubmit} className={cls.Form}>
      <h2 className={cls.Title}>{formData.title}</h2>
      <Input
        className={cls.Input}
        type="tel"
        value={tel}
        placeholder="+7(___)___-__-__"
        onValueChange={onNumberChange}
      />
      <p className={cls.Descr}>{formData.descr}</p>
      <ul className={cls.Buttons}>
        {buttons.map((item, index) => {
          return (
            <li
              key={index}
              className={item.value === "-1" ? cls.ItemMedium : cls.ItemSmall}
            >
              <Button
                tabIndex={0}
                className={cls.Button}
                value={item.value}
                onClick={onButtonClick}
              >
                {item.label}
              </Button>
            </li>
          );
        })}
      </ul>
      <Input
        className={cls.Checkbox}
        onValueChange={onCheckboxChecked}
        type="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className={cls.Label} tabIndex={0}>
        {formData.consent}
      </label>
      <Button
        type="submit"
        className={cls.Submit}
        disabled={checkbox && tel.length === 12 ? false : true}
      >
        Подтвердить номер
      </Button>
    </form>
  );
};

export default Form;
