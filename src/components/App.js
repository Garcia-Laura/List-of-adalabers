// Fichero src/components/App.js

import "../styles/App.scss";
import contacts from "../data/contacts.json";
import { useEffect, useState } from "react";
// import getAdalabers from "../services/api";
// import ls from "../data/localstorage.js";

const App = () => {
  // Estados
  const [data, setData] = useState(contacts.results);

  const [newStudents, setNewStudents] = useState({
    id: crypto.randomUUID(),
    name: "",
    counselor: "",
    speciality: "",
    social_networks: [],
  });

  const [search, setSearch] = useState("");
  const [searchCounselor, setSearchCounselor] = useState("");

  //UseEffect
  // useEffect(() => {
  //   getAdalabers().then((da) => {
  //     setData(da.results);
  //   });
  // }, []);

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
  const handleSearch = (ev) => {
    setSearch(ev.target.value);
  };
  const handleChangeCounselor = (ev) => {
    setSearchCounselor(ev.target.value);
  };

  // Funciones de renderizado
  const htmlData = data
    .filter((students) =>
      students.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((students) =>
      students.counselor.toLowerCase().includes(searchCounselor.toLowerCase())
    )

    .map((students, id) => {
      return (
        <tr className="row" key={students.id}>
          <td className="column">{students.name}</td>
          <td className="column">{students.counselor}</td>
          <td className="column">{students.speciality}</td>
          <td className="column">
            {students.social_networks.map((red) => {
              return (
                <a className="netSocial" href={red.url}>
                  {red.name}
                </a>
              );
            })}
          </td>
        </tr>
      );
    });

  return (
    <div>
      <header>
        <h1 className="tittle"> Adalabers</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            autoComplete="off"
            type="search"
            name="search"
            placeholder=" Filtrar adalabers por nombre"
            onInput={handleSearch}
            value={search}
          />

          <select
            className="search"
            name="searchCounselor"
            id="seasearchCounselorrch"
            onChange={handleChangeCounselor}
            value={searchCounselor}
          >
            <option value="">Escoge a una tutora</option>
            <option value="iván">Iván</option>
            <option value="dayana"> Dayana</option>
            <option value="yanelis">Yanelis</option>
          </select>
        </form>
        <table className="table">
          <thead>
            <tr className="row">
              <th className="column list "> Nombre </th>
              <th className="column list"> Tutora </th>
              <th className="column list"> Especialidad </th>
              <th className="column list">Redes sociales</th>
            </tr>
          </thead>

          <tbody>{htmlData}</tbody>
        </table>

        <form className="new-contact__form" onSubmit={handleSubmit}>
          <h2 className="new-contact__title">Añade un nuevo contacto</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder=" Nombre"
            onInput={handleNewStudents}
            value={newStudents.name}
          />
          <input
            className="new-contact__input"
            type="text"
            name="counselor"
            id="counselor"
            placeholder=" Tutora"
            onInput={handleNewStudents}
            value={newStudents.counselor}
          />
          <input
            className="new-contact__input"
            type="text"
            name="speciality"
            id="speciality"
            placeholder=" Especialidad"
            onInput={handleNewStudents}
            value={newStudents.speciality}
          />
          <input
            className="new-contact__input"
            type="text"
            name="networks"
            id="networks"
            placeholder=" Redes sociales"
            onInput={handleNewStudents}
            value={newStudents.social_networks}
          />
          <button className="button" onClick={handleClick}>
            Añadir nueva adalaber
          </button>
        </form>
      </main>
    </div>
  );
};

export default App;
