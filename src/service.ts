import axios from "axios";
import { Breed } from "./models/dogs";

export const fetchDogs = async () => {
    try {
        const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
        const dogsArray: Breed[] = []
    
        for(const dog in data.message) {
            dogsArray.push({ breed: dog })
        }
    
        return dogsArray;
    } catch(error) {
        let message = "Error"
        if(error instanceof Error) message = error.message
        throw new Error(message)
    }
}

export const fetchDogImage = async (breed: string) => {
    try {
        const { data } = await axios.get(
            `https://dog.ceo/api/breed/${breed}/images/random`
          );
    
        return data.message;
    } catch(error) {
        let message = "Error"
        if(error instanceof Error) message = error.message
        throw new Error(message)
    }
}