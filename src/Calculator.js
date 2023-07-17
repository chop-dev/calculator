import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [storedValue, setStoredValue] = useState(null);
    const [operator, setOperator] = useState(null);

    const handleNumberClick = (number) => {
        setDisplayValue((prevDisplayValue) =>
            prevDisplayValue === '0' ? number : prevDisplayValue + number
        );
    };

    const handleOperatorClick = (op) => {
        setOperator(op);
        setStoredValue(displayValue);
        setDisplayValue('0');
    };

    const handleEqualsClick = () => {
        const currentValue = parseFloat(displayValue);
        const stored = parseFloat(storedValue);

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

    const handleClearClick = () => {
        setDisplayValue('0');
        setStoredValue(null);
        setOperator(null);
    };

    return (
        <div className='calculator'>
            <div className='display'>{displayValue}</div>
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