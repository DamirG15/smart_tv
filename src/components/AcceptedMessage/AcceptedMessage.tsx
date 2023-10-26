import cls from "./AcceptedMessage.module.scss";
import { accepted } from "../../data/constants";

interface AcceptedMessageProps {
  className?: string;
}

const AcceptedMessage = ({ className }: AcceptedMessageProps) => {
  return (
    <div className={`${cls.Wrapper}${className ? ` ${className}` : ""}`}>
      <h2 className={cls.Title}>{accepted.title}</h2>
      <p className={cls.Descr}>{accepted.descr}</p>
    </div>
  );
};

export default AcceptedMessage;
