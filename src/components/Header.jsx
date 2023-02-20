import React from "react";
import NewExpense from "./NewExpense";

const Header = ({ expense, setExpense, isValidExpense, setIsValidExpense }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidExpense ? (
        <p>Control de Presupuesto</p>
      ) : (
        <NewExpense
          expense={expense}
          setExpense={setExpense}
          setIsValidExpense={setIsValidExpense}
        />
      )}
    </header>
  );
};

export default Header;
