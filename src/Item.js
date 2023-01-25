import React from "react";
import './item.css';
const Item = ({item}) => {
    return (
        <div className="list-container">
            {item}
            <button className="list-button">
                Delete
            </button>
        </div>
    )
};

export default Item;