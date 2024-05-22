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
    var item_value = sessionStorage.getItem("item_key").split(',')[0];
  

    const res = await axios.get(`http://192.168.26.15/scanner/api/get-price/${value}`, {
      params: {
        "rms_id": item_value
      }

    });
    console.log(res);
    const dataRes = await res.data
    console.log(dataRes)
    return dataRes

  }
)


export const productSlice = createSlice({
  name: 'x',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
      state.error = null

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

export default productSlice.reducer