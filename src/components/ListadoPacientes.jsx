import React, { useState } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ db, onRemove, setDataToEdit }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mb-5">
      <h1 className="font-black text-3xl text-center">Listado Pacientes</h1>
      <p className=" text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      {db.length === 0 ? (
        <p className="bg-rose-300 text-center font-bold p-3 rounded-md">
          Sin datos
        </p>
      ) : (
        db.map((item, index) => (
          <Paciente
            key={index}
            item={item}
            index={index}
            onRemove={onRemove}
            setDataToEdit={setDataToEdit}
          />
        ))
      )}
    </div>
  );
};

export default ListadoPacientes;
