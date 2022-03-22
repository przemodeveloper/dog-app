import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";
import { FC, ReactNode, useContext } from "react";
import { DogContext } from "../store/context";

const Backdrop = () => {
  const ctx = useContext(DogContext);
  return (
    <div className={classes.backdrop} onClick={() => ctx.closeModal()}></div>
  );
};

const Overlay: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};

const portalElement = document.getElementById("overlays") as HTMLDivElement;

const Modal: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<Overlay>{children}</Overlay>, portalElement)}
    </>
  );
};

export default Modal;
