import ToDo from "./ToDo";
import { useState } from "react";

const App = () => {

const [ulohy, setUlohy] = useState([])

const getData = (data) => {
  setUlohy([data, ...ulohy])
  console.log(data)
}

  return (
    <div className="App">
      <header>
        <ToDo onSubmit={getData}></ToDo>
      </header>
      <main>
        {ulohy.map((uloha) => {
          return <div className="object">{uloha.uloha}</div>
        })}
      </main>
    </div>
  );
}

export default App;
