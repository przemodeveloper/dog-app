import { useEffect, useState } from "react";
import DogCard from "../DogCard/DogCard";
import DogItem from "../DogItem/DogItem";
import { Breed, fetchDogs } from "../service";

const DogList = () => {
  const [dogs, setDogs] = useState<Breed[]>([]);
  const [chosenBreed, setChosenBreed] = useState("");
  const [isCardVisible, setIsCardVisible] = useState(false);

  const getChosenBreed = (breed: string) => {
    setChosenBreed(breed);
    setIsCardVisible(true);
  };

  const closeModal = () => {
    setIsCardVisible(false);
  };

  useEffect(() => {
    const fetch = async () => {
      setDogs((await fetchDogs()) as Breed[]);
    };

    fetch();
  }, []);

  return (
    <div>
      <div className="container">
        {dogs.map((dog, index) => {
          return (
            <DogItem
              key={index}
              breed={dog.breed}
              onBreedChoose={getChosenBreed}
            />
          );
        })}
        {isCardVisible && (
          <DogCard breed={chosenBreed} onModalClose={closeModal} />
        )}
      </div>
    </div>
  );
};

export default DogList;
