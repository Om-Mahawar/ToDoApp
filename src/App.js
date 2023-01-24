import React, {useState} from 'react';
import './App.css';

export default App = () => {
  const [items,setItems] = useState([]);
  return (
    <div>
      <input type="text" placeholder='Enter The Item' />
      <button>Add To List</button>
    </div>
  )
}


