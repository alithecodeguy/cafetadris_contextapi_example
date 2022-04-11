import { useContext } from "react";
import { PersonsContext } from "../contexts/PersonsContext";
import SinglePerson from "./SinglePerson";

export default function Persons() {
  const { persons } = useContext(PersonsContext);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {persons.map((person) => (
        <SinglePerson key={person.id} person={person} />
      ))}
    </div>
  );
}
