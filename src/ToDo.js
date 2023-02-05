import { useState } from "react"

const ToDo = (props) => {

const [uloha, setUloha] = useState("");

const pridat = (e) => {
    e.preventDefault();
    const todo = {uloha}
    props.onSubmit(todo)
}

  return (
    <div className="todo">T
        <form onSubmit={pridat}>
            <input type="text" placeholder="Zadaj ulohu" value={uloha} onChange={(e) => setUloha(e.target.value)}></input>
            <button>Pridat</button>
        </form>
    </div>
  )
}

export default ToDo
