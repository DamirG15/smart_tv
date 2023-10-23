import { MouseEventHandler } from "react";
import qrcode from "../../../assets/images/qrcode.png";
import CloseIcon from "../../../assets/images/closeIcone.svg";
import { Button } from "../..";
import { QrMenuData } from "../../../data/constants";
import cls from "./QrMenuClosed.module.scss";

const QrMenuClosed = ({
  toggleMenu,
}: {
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <div className={cls.Closed}>
      <Button className={cls.CloseBtn} onClick={toggleMenu}>
        {/* <CloseIcon className={cls.CloseIcon} /> */}
      </Button>
      <div className={cls.ClosedWrapper}>
        <p className={cls.Descr}>{QrMenuData.descr}</p>
        <img className={cls.QrcodeSmall} src={qrcode} alt="qrcode" />
      </div>
    </div>
  );
};

export default QrMenuClosed;
