import { createContext, useState } from "react";

export const PersonsContext = createContext(null);

const PersonsProvider = ({ children }) => {
  const [persons, setPersons] = useState([
    { id: 1, fullName: "Ali", age: 30 },
    { id: 2, fullName: "Hasan", age: 40 },
  ]);

  const incrementAge = (id) => {
    const newPersons = JSON.parse(JSON.stringify(persons));
    const targetPerson = newPersons.find((person) => person.id == id);
    targetPerson.age = targetPerson.age + 1;
    setPersons(newPersons);
  };
  return (
    <PersonsContext.Provider value={{ persons, incrementAge }}>
      {children}
    </PersonsContext.Provider>
  );
};

export default PersonsProvider;
