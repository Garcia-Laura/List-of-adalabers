// Fichero src/components/App.js

import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useState } from "react";
// import ls from "../data/localstorage.js";

const App = () => {
  // Estados
  const [data, setData] = useState(contacts);
  console.log(data);

  // Eventos

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
      <h1 className="tittle"> Alumnas Adalabers</h1>
      <table className="table">
        {/* <!-- Fila de cabecera --> */}
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especialidad</th>
          </tr>
        </thead>
        {/* <!-- Fin fila de cabecera --> */}
        <tbody> {htmlData}</tbody>
      </table>
    </div>
  );
};

export default App;
