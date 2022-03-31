export interface Breed {
    breed: string
    id: number
}

export interface DogContextObject {
    isCardVisible: boolean;
    closeModal: () => void;
    openModal: () => void;
    chooseBreed: (breed: string) => void;
    chosenBreed: string;
  }