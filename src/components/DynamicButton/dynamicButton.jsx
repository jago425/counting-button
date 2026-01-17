import React from "react";
import './dynamicButton.css';

const DynamicButton = ({ count, color, onClick }) => {
    const styles = {
    '--btn-color': color,
  }
    return (
        <button onClick={onClick} style={styles} className="jagos-button">
            I'm a button! Look at me!'
        </button>
    );
};
export default DynamicButton;