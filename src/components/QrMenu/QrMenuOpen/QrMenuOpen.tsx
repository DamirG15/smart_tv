import { MouseEventHandler } from "react";
import qrcode from "../../../assets/images/qrcode.png";
import { Button } from "../..";
import { QrMenuData } from "../../../data/constants";
import cls from "./QrMenuOpen.module.scss";

const QrMenuOpen = ({
  toggleMenu,
}: {
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={cls.Open}>
      <p className={cls.Title}>{QrMenuData.title}</p>
      <img className={cls.QrcodeMedium} src={qrcode} alt="qrcode" />
      <p className={cls.Scan}>{QrMenuData.scan}</p>
      <Button onClick={toggleMenu} className={cls.OpenBtn}>
        ОК
      </Button>
    </div>
  );
};

export default QrMenuOpen;
