import { FC, useCallback, useContext, useEffect, useState } from "react";

import { fetchDogImage } from "../../service";
import { DogContext } from "../../store/context";
import Loader from "../UI/Loader/Loader";
import Modal from "../UI/Modal/Modal";

import classes from "./DogCard.module.scss";

const DogCard: FC = () => {
  const [breedSRC, setBreedSRC] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);

  const ctx = useContext(DogContext);

  const changeRandomImage = useCallback(async () => {
    setIsImageLoading(true);
    setBreedSRC(await fetchDogImage(ctx.chosenBreed));
    setIsImageLoading(false);
  }, [ctx.chosenBreed]);

  useEffect(() => {
    changeRandomImage();
  }, [changeRandomImage]);

  return (
    <Modal>
      <div className={classes["card-container"]}>
        <div className={classes["img-container"]}>
          {!isImageLoading ? (
            <img
              src={breedSRC}
              alt={ctx.chosenBreed}
              className={classes["img"]}
            />
          ) : (
            <Loader />
          )}
        </div>
        <div className={classes["btns-container"]}>
          <button onClick={changeRandomImage}>Change image</button>
          <button onClick={() => ctx.closeModal()} className="ml-4">
            Close card
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DogCard;
