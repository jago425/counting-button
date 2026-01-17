import React from 'react'
import { determineNumberType } from '../../utils/doMath';
import './infoMessage.css';

const InfoMessage = ({ count }) => {
const getNumberType = (count) => {
  if (determineNumberType(count) === 'even') {
    return 'an even'
  }
  if (determineNumberType(count) === 'odd') {
    return 'an odd'
  }
  if (determineNumberType(count) === 'prime') {
    return 'a prime'
  } else {
    return ' a magic'
  }
};

    return (
        <div>
            <p className="info-message">
                You clicked the button {count} times. {count} is {getNumberType(count)} number.
            </p> 
        </div>
    )
};

export default InfoMessage;