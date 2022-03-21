import axios from "axios";

export interface Breed {
    breed: string
}

export const fetchDogs = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
    const dogsArray: Breed[] = []

    for(const dog in data.message) {
        dogsArray.push({ breed: dog })
    }

    return dogsArray;
}

export const fetchDogImage = async (breed: string) => {
    const { data } = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random`
      );

    return data.message;
}