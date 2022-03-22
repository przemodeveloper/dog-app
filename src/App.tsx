import DogList from "./components/DogList/DogList";
import DogContextProvider from "./store/context";

const App = () => {
  return (
    <DogContextProvider>
      <DogList />
    </DogContextProvider>
  );
};

export default App;
