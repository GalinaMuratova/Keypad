import { configureStore } from '@reduxjs/toolkit';
import {keypadReducer} from "../container/Keypad/KeypadSlice";

export const store = configureStore({
    reducer: {
        keypad: keypadReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
