import React from "react";
import {NavLink} from 'react-router-dom'

const ForgotPassword = ({user, onChange, onSubmit }) => {
    return (
        <div className="container mx-auto md:grid grid-cols-2 mt-12 gap-10 p-5 items-center">
          <div>
            <h1 className="text-lime-600 font-black text-5xl">
              Recupera tu acceso y no pierdas{" "}
              <span className="text-black">tus Pacientes</span>
            </h1>
          </div>
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="emailUser"
                  className="block text-gray-700 uppercase font-bold"
                >
                  Email
                </label>{" "}
                <input
                  type="text"
                  placeholder="Email de registro"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  id="emailUser"
                  name="emailUser"
                  value={user?.email}
                  onChange={onChange}
                />
              </div>

              <input
            type="submit"
            value="Enviar instrcciones"
            className="block bg-indigo-600 md:w-auto py-3 px-10 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-all rounded-md"
          />

          <nav className="mt-10 lg:flex lg:justify-between">
          <NavLink
            to="/"
            className="block text-center my-2 text-gray-500"
          >
            ¿ Ya tienes una cuenta ? <span className="font-bold">Inicia Sesión.</span>
          </NavLink>
          <NavLink
            to="/register"
            className="block text-center my-2 text-gray-500"
          >
             ¿ No tienes una cuenta ? <span className="font-bold">Regístrate</span>
          </NavLink>
        </nav>
            </form>
          </div>
        </div>
      );
}

export default ForgotPassword;
