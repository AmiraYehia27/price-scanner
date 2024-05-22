import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
}

export const fetchContent = createAsyncThunk(
  'content/fetchContent',
  async (value) => {
    const res = await axios.post(` http://192.168.26.15/scanner/api/set-store`, {

      "rms_id": value

    });
    const dataRes = await res.data
    console.log(dataRes)
    return dataRes
  }
)

export const connectionSlice = createSlice({
  name: 'x',
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

export default connectionSlice.reducer