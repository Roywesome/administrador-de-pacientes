import React from "react";
import {NavLink} from 'react-router-dom'

const Register = ({user, onChange, onRegister}) => {
  return <div className="container mx-auto md:grid grid-cols-2 mt-12 gap-10 p-5 items-center">
      <div>
          <h1 className="text-lime-600 font-black text-5xl mb-3">Crea una nueva cuenta</h1>
          <p className="text-2xl">Create tu cuenta con tu usuario, correo electrónico y contraseña.</p>
      </div>
      <form
          onSubmit={(e) => {
            e.preventDefault();
            onRegister();
          }}
        >
          <div className="mb-4">
            <label
              htmlFor="userNamer"
              className="block text-gray-700 uppercase font-bold"
            >
              Usuario
            </label>{" "}
            <input
              type="text"
              placeholder="Hook"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="userNamer"
              name="userNamer"
              value={user?.name}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="emailUser"
              className="block text-gray-700 uppercase font-bold"
            >
              Email
            </label>{" "}
            <input
              type="text"
              placeholder="admin@admin.com"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="emailUser"
              name="emailUser"
              value={user?.email}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="passwordUser"
              className="block text-gray-700 uppercase font-bold"
            >
              Password
            </label>{" "}
            <input
              type="passwordUser"
              placeholder="Password"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="passwordUser"
              name="passwordUser"
              value={user?.password}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="passwordUser"
              className="block text-gray-700 uppercase font-bold"
            >
              Repetir Password
            </label>{" "}
            <input
              type="passwordUser"
              placeholder="repite tu Password"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              id="passwordUser"
              name="passwordUser"
              value={user?.password}
              onChange={onChange}
            />
          </div>

          <input
            type="submit"
            value="Registrarme"
            className="block bg-indigo-600 md:w-auto py-3 px-10 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-all rounded-md"
          />
          <div className="mt-10 lg:flex lg:justify-between">
          <NavLink
            to="/"
            className="block text-center my-2 text-gray-500"
          >
            ¿ Ya tienes una cuenta ? <span className="font-bold">Iniciar Sesion</span>
          </NavLink>
        </div>
        </form>

        
  </div>;
};

export default Register;
