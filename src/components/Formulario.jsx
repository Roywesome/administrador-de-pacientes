import React from "react";

const Formulario = ({ defaultValues, onChange, onSubmit }) => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
      <p className="text-lg mt-5">
        Añade pacientes de y{" "}
        <span className="text-indigo-600 font-bold">Administrarlos</span>
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="mascota"
            name="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={defaultValues?.mascota}
            onChange={onChange}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={defaultValues?.name}
            onChange={onChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="user@user.com"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={defaultValues?.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fechaAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            id="fechaAlta"
            name="fechaAlta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={defaultValues?.alta}
            onChange={onChange}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            name="sintomas"
            placeholder="Describe las sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={defaultValues?.sintomas}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all  "
          value={defaultValues.id ? "Editar paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
