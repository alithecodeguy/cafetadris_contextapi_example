import { useContext } from "react";

import { PersonsContext } from "../contexts/PersonsContext";

export default function SinglePerson({ person }) {
  const { incrementAge } = useContext(PersonsContext);

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <div>{person.fullName}</div>
      <div>{person.age}</div>
      <button onClick={() => incrementAge(person.id)}>
        click to increment age
      </button>
    </div>
  );
}
