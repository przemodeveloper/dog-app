import { useContext, useEffect, useState } from "react";
import { Breed } from "../../models/dogs";
import { fetchDogs } from "../../service";
import { DogContext } from "../../store/context";
import DogCard from "../DogCard/DogCard";
import DogItem from "../DogItem/DogItem";

const DogList = () => {
  const [dogs, setDogs] = useState<Breed[]>([]);

  const ctx = useContext(DogContext);

  useEffect(() => {
    const fetch = async () => {
      setDogs((await fetchDogs()) as Breed[]);
    };

    fetch();
  }, []);

  return (
    <>
      <ul className="container">
        {dogs.map((dog, index) => {
          return <DogItem key={index} breed={dog.breed} />;
        })}
      </ul>
      {ctx.isCardVisible && <DogCard />}
    </>
  );
};

export default DogList;
