import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [expense, setExpense] = useState(0);

  return (
    <div>
      <Header expense={expense} setExpense={setExpense} />
    </div>
  );
}

export default App;
