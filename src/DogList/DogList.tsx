import { useContext, useEffect, useState } from "react";
import DogCard from "../DogCard/DogCard";
import DogItem from "../DogItem/DogItem";
import { fetchDogs } from "../service";
import { DogContext } from "../store/context";
import { Breed } from "../types";

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
      <div className="container">
        {dogs.map((dog, index) => {
          return <DogItem key={index} breed={dog.breed} />;
        })}
        {ctx.isCardVisible && <DogCard />}
      </div>
    </>
  );
};

export default DogList;
