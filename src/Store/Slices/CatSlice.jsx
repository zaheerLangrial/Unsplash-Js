import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const catApiData = createAsyncThunk ('catApiData' ,  async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
        return response.data;
    } catch (error) {
        console.log('Error' , error)
    }
})

export const catSlice = createSlice ({
    name : 'CateData',
    initialState : {
        cats : [],
        loading : false,
        error : null
    },
    extraReducers : (builder) => {
        builder
        .addCase(catApiData.pending , (state) => {
            state.loading = true;
        })
        .addCase(catApiData.fulfilled , (state , action) => {
            state.loading = false;
            state.cats = action.payload
        })
        .addCase(catApiData.rejected , (state , action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default catSlice.reducer