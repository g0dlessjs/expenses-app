import React from "react";
import NewExpense from "./NewExpense";

const Header = ({ expense, setExpense }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      <NewExpense expense={expense} setExpense={setExpense} />
    </header>
  );
};

export default Header;
