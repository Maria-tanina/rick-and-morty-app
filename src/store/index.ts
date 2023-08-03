import {configureStore} from "@reduxjs/toolkit";
import {heroesApi} from "../services/heroesApi";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import heroesSlice from "../features/heroes/heroesSlice";

const store = configureStore({
    reducer: {
        [heroesApi.reducerPath]: heroesApi.reducer,
        heroes: heroesSlice
    },
    middleware: gDM => gDM().concat(heroesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;