import React, { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import ListadoPacientes from "../components/ListadoPacientes";

const initialForm = {
  id: null,
  mascota: "",
  name: "",
  email: "",
  fechaAlta: new Date().toLocaleDateString(),
  sintomas: "",
};

const getData = () => {
  let pacientes;
  const data = localStorage.getItem("pacientes");
  if (!data) {
    pacientes = [];
  } else {
    pacientes = JSON.parse(data);
  }
  return pacientes;
};

const Dashboard = () => {
  const [form, setForm] = useState(initialForm);
  //const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [pacientes, setPacientes] = useState(getData()); //LocalStorage

  //useEffect --> SE VA EJECUTAR CUANDO DATATOEDIT HA CAMBIADO
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  useEffect(() => {
    if (pacientes) {
      setPacientes(pacientes);
    }
  }, []);

  const handleOnChange = ({ target: { name, value } }) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = () => {
    if (
      !form.mascota ||
      !form.email ||
      !form.name ||
      !form.fechaAlta ||
      !form.sintomas
    ) {
      alert("Completa todo los datos.");
      return;
    }

    if (form.id === null) {
      form.id = Date.now();
      setPacientes([...pacientes, form]); //CreateData
    } else {
      let newData = pacientes.map((item, index) =>
        item.id === form.id ? form : item
      );
      setPacientes(newData); //UpdateData
    }

    handleReset();

    /*
    if([form.mascota, form.email, form.name, form.fechaAlta, form.sintomas].includes('')){
      alert('Completa todo los datos.');
      setError(true)
      return;
    }

     */
  };

  const removeData = (position) => {
    const newData = pacientes.filter((item, index) => index !== position);
    setPacientes(newData);
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div className='container mx-auto mt-10"'>
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          defaultValues={form}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        <ListadoPacientes
          db={pacientes}
          onRemove={removeData}
          setDataToEdit={setDataToEdit}
        />
      </div>
    </div>
  );
};

export default Dashboard;
