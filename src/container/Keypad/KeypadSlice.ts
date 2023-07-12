import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface KeypadState {
    value: string;
}

const initialState: KeypadState = {
    value: '',
};

export const keypadSlice = createSlice({
    name: 'keypad',
    initialState,
    reducers: {
        plus: (state, action: PayloadAction<string>) => {
            state.value += action.payload;
        },
    },
});

export const keypadReducer = keypadSlice.reducer;
export const {plus} = keypadSlice.actions;
