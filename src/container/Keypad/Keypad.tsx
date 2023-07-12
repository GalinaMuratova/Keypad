import React from 'react';
import './Keypad.css';
import {RootState} from "../../app/store";
import {useDispatch, useSelector} from "react-redux";
import {plus} from "./KeypadSlice";

const Keypad = () => {
    const keypadValue = useSelector((state: RootState) => state.keypad.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{keypadValue}</h1>
            <div>
                <button onClick={() => dispatch(plus('1'))}>1</button>
                <button onClick={() => dispatch(plus('2'))}>2</button>
                <button onClick={() => dispatch(plus('3'))}>3</button>
            </div>
            <div>
                <button onClick={() => dispatch(plus('4'))}>4</button>
                <button onClick={() => dispatch(plus('5'))}>5</button>
                <button onClick={() => dispatch(plus('6'))}>6</button>
            </div>
            <div>
                <button onClick={() => dispatch(plus('7'))}>7</button>
                <button onClick={() => dispatch(plus('8'))}>8</button>
                <button onClick={() => dispatch(plus('9'))}>9</button>
            </div>
            <div>
                <button onClick={() => dispatch(plus('1'))}> {'<'} </button>
                <button onClick={() => dispatch(plus('0'))}>0</button>
                <button onClick={() => dispatch(plus('3'))}>E</button>
            </div>
        </div>
    );
};

export default Keypad;