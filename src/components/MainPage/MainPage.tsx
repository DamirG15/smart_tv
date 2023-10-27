import { MouseEventHandler, useState } from "react";
import { Banner, QrMenu, Form, AcceptedMessage } from "../";
import cls from "./MainPage.module.scss";

const MainPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [submit, setSubmit] = useState(false);

  const toggleMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setOpen((prev) => !prev);
  };

  const onFormSubmit = () => {
    setSubmit(true);

    setTimeout(() => {
      setOpen(false);
      setSubmit(false);
    }, 3000);
  };

  return (
    <div className={cls.Wrapper}>
      <Banner open={open} />
      {open && (
        <div className={cls.FormWrapper}>
          {submit ? <AcceptedMessage /> : <Form onFormSubmit={onFormSubmit} />}
        </div>
      )}
      <QrMenu toggleMenu={toggleMenu} open={open} />
    </div>
  );
};

export default MainPage;
