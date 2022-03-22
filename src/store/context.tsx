import React, { FC, ReactNode, useState } from "react";
import { DogContextObject } from "../models/dogs";

export const DogContext = React.createContext<DogContextObject>({
  isCardVisible: false,
  closeModal: () => {},
  openModal: () => {},
  chooseBreed: () => {},
  chosenBreed: "",
});

const DogContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [chosenBreed, setChosenBreed] = useState("");

  const closeModal = () => {
    setIsCardVisible(false);
  };

  const openModal = () => {
    setIsCardVisible(true);
  };

  const chooseBreed = (breed: string) => {
    setChosenBreed(breed);
  };

  const contextValue = {
    isCardVisible,
    closeModal,
    openModal,
    chosenBreed,
    chooseBreed,
  };

  return (
    <DogContext.Provider value={contextValue}>{children}</DogContext.Provider>
  );
};

export default DogContextProvider;
