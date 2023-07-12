import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface KeypadState {
    pinCode: string;
    usersCode: string;
    correctPin: boolean;
    color: string;
    textPin:string;
}

const initialState: KeypadState = {
    pinCode: '2552',
    usersCode: '',
    correctPin: false,
    color: '',
    textPin:''
};

export const keypadSlice = createSlice({
    name: 'keypad',
    initialState,
    reducers: {
        enterNumber: (state, action: PayloadAction<string>) => {
            if (state.usersCode.length < 4) {
                state.usersCode += action.payload;
            }
        },
        removeNumber: (state) => {
            state.usersCode = state.usersCode.slice(0, -1);
            state.color = 'white';
            state.textPin = '';
        },
        checkCode: (state) => {
            state.correctPin = state.pinCode === state.usersCode;
            if (state.correctPin) {
                state.color = 'lightgreen';
                state.textPin = 'Access Granted';
            } else {
                state.color = 'coral';
                state.textPin = 'Access Denied';
            }
        },
    },
});

export const keypadReducer = keypadSlice.reducer;
export const {enterNumber, removeNumber, checkCode} = keypadSlice.actions;
