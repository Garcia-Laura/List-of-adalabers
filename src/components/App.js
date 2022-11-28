// Fichero src/components/App.js

import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";
// import ls from "../data/localstorage.js";

const App = () => {
  // Estados
  const [data, setData] = useState(contacts);
  console.log(data);
  const [newStudents, setNewStudents] = useState({
    name: "",
    counselor: "",
    speciality: "",
    id: crypto.randomUUID(),
  });

  // funciones Handle
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleNewStudents = (ev) => {
    setNewStudents({ ...newStudents, [ev.target.id]: ev.target.value });
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newStudents]);
  };

  // Funciones de renderizado
  const htmlData = data.map((students, id) => {
    return (
      <tr key={id}>
        <td className="students">{students.name}</td>
        <td className="teacher">{students.counselor}</td>
        <td className="speciality">{students.speciality}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1 className="tittle"> Adalabers</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>

        <tbody> {htmlData}</tbody>
      </table>

      <form className="new-contact__form" onSubmit={handleSubmit}>
        <h2 className="new-contact__title">Añade un nuevo contacto</h2>
        <input
          className="new-contact__input"
          type="text"
          name="name"
          id="name"
          placeholder="Nombre"
          onInput={handleNewStudents}
          value={newStudents.name}
        />
        <input
          className="new-contact__input"
          type="text"
          name="counselor"
          id="counselor"
          placeholder="Tutora"
          onInput={handleNewStudents}
          value={newStudents.counselor}
        />
        <input
          className="new-contact__input"
          type="text"
          name="speciality"
          id="speciality"
          placeholder="especialidad"
          onInput={handleNewStudents}
          value={newStudents.speciality}
        />
      </form>
      <button className="button" onClick={handleClick}>
        Añadir
      </button>
    </div>
  );
};

export default App;
