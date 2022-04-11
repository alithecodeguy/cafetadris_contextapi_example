import "./App.css";
import PersonsProvider from "./contexts/PersonsContext.js";
import Persons from "./components/Persons";

function App() {
  return (
    <PersonsProvider>
      <Persons />
    </PersonsProvider>
  );
}

export default App;
