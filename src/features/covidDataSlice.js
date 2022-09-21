import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getData = createAsyncThunk("covidData/getData", async () => {
    try{
        const response = await fetch('https://covidnigeria.herokuapp.com/api');
         const data = await response.json();
         return data
        }catch(error) {
        console.log(error);
    }
});

const covidDataSlice = createSlice(({
    name: "covidData",
    initialState: {
        covidData: [],
        loading: false,
    },
    extraReducers: {
        [getData.pending]: (state, action) => {
            state.loading = true;
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = false;
            state.covidData = action.payload;
        },
        [getData.rejected]: (state, action) => {
            state.loading = false;
        },
    },
}));

export default covidDataSlice