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
    reducers : {
        addCat (state , action) {
            state.cats.push(action.payload)
        }, 
        deleteCat (state , action) {
            state.cats = state.cats.filter((cat) => cat.id !== action.payload)
        },
        searchCat (state , action){
            state.cats = state.cats.filter((cat) => {
                if(cat.tags) {
                    cat.tags.filter((tag) => tag === action.payload)
                }
            })
        }    
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
export const {addCat , deleteCat , searchCat } = catSlice.actions
export default catSlice.reducer