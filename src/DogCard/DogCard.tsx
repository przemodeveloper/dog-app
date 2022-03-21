import { FC, useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import { fetchDogImage } from "../service";

import classes from "./DogCard.module.scss";

const DogCard: FC<{ breed: string; onModalClose: () => void }> = ({
  breed,
  onModalClose,
}) => {
  const [breedSRC, setBreedSRC] = useState("");
  const [isImageLoading, setIsImageLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setIsImageLoading(true);
      setBreedSRC(await fetchDogImage(breed));
      setIsImageLoading(false);
    };

    fetch();
  }, [breed]);

  const changeRandomImage = async () => {
    setIsImageLoading(true);
    setBreedSRC(await fetchDogImage(breed));
    setIsImageLoading(false);
  };

  const closeModal = () => {
    onModalClose();
  };

  return (
    <Modal>
      <div className={classes["card-container"]}>
        <div className={classes["img-container"]}>
          {!isImageLoading ? (
            <img src={breedSRC} alt={breed} className={classes["img"]} />
          ) : (
            <Loader />
          )}
        </div>
        <div className={classes["btns-container"]}>
          <button onClick={changeRandomImage}>Change image</button>
          <button onClick={closeModal} className="ml-4">
            Close card
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DogCard;
