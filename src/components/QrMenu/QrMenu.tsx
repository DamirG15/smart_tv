import { MouseEventHandler } from "react";
import QrMenuClosed from "./QrMenuClosed/QrMenuClosed";
import QrMenuOpen from "./QrMenuOpen/QrMenuOpen";
import cls from "./QrMenu.module.scss";

interface QrMenuProps {
  menu: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>;
}

export const QrMenu = ({ toggleMenu, menu }: QrMenuProps) => {
  return (
    <div className={cls.Menu}>
      {menu ? (
        <QrMenuClosed toggleMenu={toggleMenu} />
      ) : (
        <QrMenuOpen toggleMenu={toggleMenu} />
      )}
    </div>
  );
};
