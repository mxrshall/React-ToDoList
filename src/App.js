import ToDo from "./ToDo";
import { useState, useEffect } from "react";

const App = () => {

const [ulohy, setUlohy] = useState([])

const getData = (data) => {
  setUlohy([data, ...ulohy])
  console.log(data)
}

useEffect(() => {
  const data = localStorage.getItem("Ulohy")
  if(data){
    setUlohy([JSON.parse(data)])  
  }
}, [])

useEffect(() => {
localStorage.setItem("Ulohy", JSON.stringify(ulohy))

}, [ulohy])

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
