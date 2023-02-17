import { useState } from "react";
import Message from "./Message";

const NewExpense = ({ expense, setExpense }) => {
  const [message, setMessage] = useState("");

  const handleExpense = (e) => {
    e.preventDefault();

    // Validación
    if (!Number(expense) || Number(expense) < 0) {
      setMessage("No es un Presupuesto Valido");
    } else {
      console.log("Si es un presupuesto valido");
    }
  };

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
        {message && <Message type="error">{message}</Message>}
      </form>
    </div>
  );
};

export default NewExpense;
