import React from 'react';
import './Keypad.css';
import {RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {enterNumber, removeNumber, checkCode} from "./KeypadSlice";

const Keypad = () => {
    const keypadValue = useSelector((state: RootState) => state.keypad.usersCode);
    const bgColor = useSelector((state: RootState) => state.keypad.color);
    const pinText = useSelector((state: RootState) => state.keypad.textPin);
    const dispatch = useDispatch();

    return (
        <div>
            <div style={{backgroundColor: bgColor }}>
                <p>{pinText}</p>
                <h1>{keypadValue}</h1>
            </div>
            <div>
                <button onClick={() => dispatch(enterNumber('1'))}>1</button>
                <button onClick={() => dispatch(enterNumber('2'))}>2</button>
                <button onClick={() => dispatch(enterNumber('3'))}>3</button>
            </div>
            <div>
                <button onClick={() => dispatch(enterNumber('4'))}>4</button>
                <button onClick={() => dispatch(enterNumber('5'))}>5</button>
                <button onClick={() => dispatch(enterNumber('6'))}>6</button>
            </div>
            <div>
                <button onClick={() => dispatch(enterNumber('7'))}>7</button>
                <button onClick={() => dispatch(enterNumber('8'))}>8</button>
                <button onClick={() => dispatch(enterNumber('9'))}>9</button>
            </div>
            <div>
                <button onClick={() => dispatch(removeNumber())}> {'<'} </button>
                <button onClick={() => dispatch(enterNumber('0'))}>0</button>
                <button onClick={() => dispatch(checkCode())}>E</button>
            </div>
        </div>
    );
};

export default Keypad;