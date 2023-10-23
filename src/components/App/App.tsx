import { useState } from "react";
import { Banner } from "../Banner/Banner";
import "./App.scss";

export const App = () => {
  const [pause, setPause] = useState<boolean>(false);

  return (
    <div className="app">
      <div className="app-wrapper">
        <Banner pause={pause} />
      </div>
    </div>
  );
};
