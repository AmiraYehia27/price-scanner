import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    contents: [],
    isLoading: false,
    error: null,
}

export const fetchContent = createAsyncThunk(
    'content/fetchContent',
    async () => {
        const res = await axios(`http://192.168.26.15/comviva/api/get-stores`)
        console.log(res.data['Store Data'])
        return res.data['Store Data']
    }
)

export const branchSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false
            state.contents = action.payload
        })
        builder.addCase(fetchContent.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    },
})

export default branchSlice.reducer