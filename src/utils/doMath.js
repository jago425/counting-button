import React from "react";

export const isEven = (count) => count % 2 === 0;

export const isOdd = (count) => count % 2 !== 0;

export const isPrimeNumber = (count) => {
        // Check if count is 1 or less, which cannot be prime, return false
    if (count <= 1) return false;
    // Check count is 2 or 3, which are prime countbers, return true
    if (count === 2 || count === 3) return true;
    // Check if count can be divided by 2 or 3 because prime countbers greater than 3 cannot be even or divisible by 3, return false 
    if (count % 2 === 0 || count % 3 === 0) return false;
    // Check when count is 5 to sqrt of whatever count is and iterate i by (i+6). If count is divisible by i or (i+2), return false
    for (let i = 5; i <= Math.sqrt(count); i += 6) {
        if (count % i === 0 || count % (i + 2) === 0) return false;
    }
    // If none of the above conditions are met, count is prime, return true
    return true;
};

export const isOddAndNotPrime = (count) => {
    return isOdd(count) && !isPrimeNumber(count);
}

export const determineButtonColor = (count) => {
    if (isEven(count)) {
        return 'blue';
    } else if (isOddAndNotPrime(count)) {
        return 'purple';
    } else if (isPrimeNumber(count)) {
        return 'green';
    } else {
        return 'teal'; 
    }  
};   