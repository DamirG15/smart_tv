import { MouseEventHandler } from "react";
import QrMenuClosed from "./QrMenuClosed/QrMenuClosed";
import QrMenuOpen from "./QrMenuOpen/QrMenuOpen";
import cls from "./QrMenu.module.scss";

interface QrMenuProps {
  open: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}
const QrMenu = ({ toggleMenu, open }: QrMenuProps) => {
  return (
    <div className={cls.Menu}>
      {open ? (
        <QrMenuClosed toggleMenu={toggleMenu} />
      ) : (
        <QrMenuOpen toggleMenu={toggleMenu} />
      )}
    </div>
  );
};

export default QrMenu;
