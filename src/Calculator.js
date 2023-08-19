import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    // Declare useStates for the calculator
    const [displayValue, setDisplayValue] = useState('0');
    const [storedValue, setStoredValue] = useState(null);
    const [operator, setOperator] = useState(null);

    // Handle the number button click
    const handleNumberClick = (number) => {
        setDisplayValue((prevDisplayValue) =>
            prevDisplayValue === '0' ? number : prevDisplayValue + number
        );
    };

    // Handle the operator button click 
    const handleOperatorClick = (op) => {
        setOperator(op);
        setStoredValue(displayValue);
        setDisplayValue('0');
    };

    // Handle the equal button click
    const handleEqualsClick = () => {
        const currentValue = parseFloat(displayValue);
        const stored = parseFloat(storedValue);

        // Determine the output
        if (operator === '+') {
            setDisplayValue((stored + currentValue).toString());
        } else if (operator === '-') {
            setDisplayValue((stored - currentValue).toString());
        } else if (operator === 'x') {
            setDisplayValue((stored * currentValue).toString());
        } else if (operator === '/') {
            setDisplayValue((stored / currentValue).toString());
        }

        setStoredValue(null);
        setOperator(null);
    };

    // Handle clear button click 
    const handleClearClick = () => {
        setDisplayValue('0');
        setStoredValue(null);
        setOperator(null);
    };

    return (
        <div className='calculator'>

            {/* Generate the display for the calculator */}
            <div className='display'>{displayValue}</div>
            
            {/* Generate the buttons for the calculator*/}
            <div className='buttons'>

                <div className='column'>
                    <button onClick={() => handleNumberClick('7')}>7</button>
                    <button onClick={() => handleNumberClick('4')}>4</button>
                    <button onClick={() => handleNumberClick('1')}>1</button>
                    <button onClick={() => handleNumberClick('0')}>0</button>
                </div>
                <div className='column'>
                    <button onClick={() => handleNumberClick('8')}>8</button>
                    <button onClick={() => handleNumberClick('5')}>5</button>
                    <button onClick={() => handleNumberClick('2')}>2</button>
                    <button onClick={() => handleNumberClick('.')}>.</button>
                </div>
                <div className='column'>
                    <button onClick={() => handleNumberClick('9')}>9</button>
                    <button onClick={() => handleNumberClick('6')}>6</button>
                    <button onClick={() => handleNumberClick('3')}>3</button>
                    <button onClick={handleEqualsClick}>=</button>
                </div>
                <div className='column'>
                    <button className='symbol' onClick={() => handleOperatorClick('/')}>÷</button>
                    <button className='symbol' onClick={() => handleOperatorClick('x')}>x</button>
                    <button className='symbol' onClick={() => handleOperatorClick('-')}>-</button>
                    <button className='symbol' onClick={() => handleOperatorClick('+')}>+</button>
                </div>
                <div className='column'>
                    <button onClick={handleClearClick} className='clear-button'>AC</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;