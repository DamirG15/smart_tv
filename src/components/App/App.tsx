import { MouseEventHandler, useState } from "react";
import { Banner, QrMenu } from "../";
import "./App.scss";

export const App = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const toggleMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setMenu(!menu);
  };

  return (
    <div className="app">
      <div className="app-wrapper">
        <Banner menu={menu} />
        <QrMenu toggleMenu={toggleMenu} menu={menu} />
      </div>
    </div>
  );
};
