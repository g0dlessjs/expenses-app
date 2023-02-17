import React from "react";

const NewExpense = ({ expense, setExpense }) => {

  const handleExpense = (e) => {
    e.preventDefault();

    console.log("Enviando Formulario")
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handleExpense} className="formulario">
        <div className="campo">
          <label>Definir Presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="text"
            placeholder="Añade tu puestupuesto.."
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
          />
        </div>

        <input type="submit" value="añadir" />
      </form>
    </div>
  );
};

export default NewExpense;
