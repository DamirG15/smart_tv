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
  const [tel, setTel] = useState("7");
  const [checkbox, setCheckbox] = useState(false);
  const [valid, setValid] = useState(true);

  const onNumberChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    let newValue = event.target.value;
    if (newValue.length === 0) {
      newValue = "7";
    }
    setTel(newValue);
    validateTel(newValue);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    const buttonValue = (event.target as HTMLButtonElement).value;
    let newValue = tel.replace(/[^0-9a-zA-Z]+/g, "");
    if (buttonValue === "-1") {
      {
        newValue = newValue.length >= 2 ? newValue.slice(0, -1) : newValue;
      }
    } else {
      {
        newValue = newValue.length < 11 ? newValue + buttonValue : newValue;
      }
    }
    setTel(newValue);
    validateTel(newValue);
  };

  const onCheckboxChecked = () => {
    setCheckbox((prev) => !prev);
  };

  const validateTel = (number: string) => {
    setValid(
      number.replace(/[^0-9a-zA-Z]+/g, "").match(/[\d]{11}/) ? true : false
    );
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
        mask="+7(999)999-99-99"
        maskChar="_"
        className={cls.Input}
        type="tel"
        value={tel}
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
      {valid ? (
        <>
          <Input
            className={cls.Checkbox}
            onValueChange={onCheckboxChecked}
            type="checkbox"
            id="checkbox"
            checked={checkbox}
          />
          <label htmlFor="checkbox" className={cls.Label} tabIndex={0}>
            {formData.consent}
          </label>
        </>
      ) : (
        <span className={cls.Error}>{formData.error}</span>
      )}
      <Button
        type="submit"
        className={cls.Submit}
        disabled={checkbox && valid ? false : true}
      >
        Подтвердить номер
      </Button>
    </form>
  );
};

export default Form;
