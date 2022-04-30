import React from "react";

const Paciente = ({ item, index, onRemove, setDataToEdit }) => {
  let { mascota, name, email, fechaAlta, sintomas } = item;
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{mascota}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: <span className="font-normal normal-case">{fechaAlta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => setDataToEdit(item)}
          type="button"
          className="rounded-full bg-sky-600 w-40 p-2 uppercase text-white font-bold"
        >
          Editar
        </button>
        <button
          onClick={() => onRemove(index)}
          type="button"
          className="rounded-full bg-rose-500 w-40 p-2 text-white uppercase font-bold"
        >
          {" "}
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
