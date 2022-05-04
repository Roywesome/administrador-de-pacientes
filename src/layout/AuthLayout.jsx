import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <nav className="grid grid-cols-2 mb-3 mt-2">
        <div>
          <NavLink className=" mx-3 font-bold text-2xl p-3" to="dashboard">
            Dashboard
          </NavLink>{" "}
          <NavLink className=" mr-3 font-bold text-2xl p-3" to="profile">
            Profile
          </NavLink>{" "}
        </div>
        <div className="flex justify-end mr-2">
          <NavLink
            className=" font-bold bg-indigo-700 p-2 rounded-md hover:bg-indigo-400 text-white uppercase"
            to="profile"
          >
            Cerrar sesión
          </NavLink>{" "}
        </div>
      </nav>

      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
