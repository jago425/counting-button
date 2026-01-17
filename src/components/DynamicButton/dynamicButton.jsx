import React from "react";
import './dynamicButton.css';

const DynamicButton = ({ onClick, color }) => {
const styles = {
    '--btn-color': color,
  } 
    return (
        <button onClick={onClick} 
        style={styles}className="jagos-button">
             Click me and see <br></br>what happens next!
        </button>
    );
};
export default DynamicButton;