import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IFilters {
    gender: string;
    status: string;
}

interface IInitialState {
    activeFilters: IFilters;
    page: number;
}

const initialState: IInitialState = {
    activeFilters: {
        gender: '',
        status: ''
    },
    page: 1
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        changeActiveFilter(state, action: PayloadAction<{filterName: keyof IFilters, value: string}>) {
            state.activeFilters[action.payload.filterName] = action.payload.value;
        },
        changePage(state, actions: PayloadAction<number>) {
            state.page = actions.payload;
        }
    }
})

export default heroesSlice.reducer;

export const {changeActiveFilter, changePage} = heroesSlice.actions;