import classes from "./DogItem.module.scss";
import { FC, useContext } from "react";
import { DogContext } from "../store/context";

const DogItem: FC<{
  breed: String;
}> = ({ breed }) => {
  const ctx = useContext(DogContext);

  const setBreed = () => {
    ctx.chooseBreed(breed as string);
    ctx.openModal();
  };

  return (
    <div className={classes.dog}>
      <p>{breed}</p>
      <div>
        <button onClick={setBreed}>Show image</button>
      </div>
    </div>
  );
};

export default DogItem;
