import classes from "./DogItem.module.scss";
import { FC } from "react";

const DogItem: FC<{
  breed: String;
  onBreedChoose: (breed: string) => void;
}> = ({ breed, onBreedChoose }) => {
  const setBreed = () => {
    onBreedChoose(breed as string);
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
