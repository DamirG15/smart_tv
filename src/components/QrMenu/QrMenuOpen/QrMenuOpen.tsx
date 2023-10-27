import { MouseEventHandler } from "react";
import qrcode from "../../../assets/images/qrcode.png";
import { Button } from "../..";
import { QrMenuData } from "../../../data/constants";
import cls from "./QrMenuOpen.module.scss";

interface QrMenuProps {
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}

const QrMenuOpen = ({ toggleMenu }: QrMenuProps) => {
  return (
    <div className={cls.Open}>
      <h2 className={cls.Title}>{QrMenuData.title}</h2>
      <img className={cls.QrcodeMedium} src={qrcode} alt="qrcode" />
      <p className={cls.Scan}>{QrMenuData.scan}</p>
      <Button onClick={toggleMenu} className={cls.OpenBtn}>
        ОК
      </Button>
    </div>
  );
};

export default QrMenuOpen;
