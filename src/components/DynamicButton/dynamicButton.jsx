import React from "react";
import './dynamicButton.css';

const DynamicButton = ({ onClick }) => {

    return (
        <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px' }} className="jagos-button">
            I'm a button! Look at me!'
        </button>
    );
};
export default DynamicButton;