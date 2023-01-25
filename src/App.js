import React , {useEffect, useState} from "react";
import './App.css';
import Item from "./Item";
function App() {

  const [inputText , setInputText] = useState("");
  const [items , setItems] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  const addItem = () => {
    setItems((prevItems) => {
      return [...prevItems , inputText];
    })
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return <li><Item item={item} /></li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;