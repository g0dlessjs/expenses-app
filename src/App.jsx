import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [expense, setExpense] = useState(0);
  const [isValidExpense, setIsValidExpense] = useState(false);

  return (
    <div>
      <Header
        expense={expense}
        setExpense={setExpense}
        isValidExpense={isValidExpense}
        setIsValidExpense={setIsValidExpense}
      />
    </div>
  );
}

export default App;
