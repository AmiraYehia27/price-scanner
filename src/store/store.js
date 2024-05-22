import { configureStore } from '@reduxjs/toolkit'
import  productReducer  from './lookupSlice'
import branchSlice from './branchSlice'
import  connectionSlice  from './connectionStringSlice'

export const store = configureStore({
  reducer: {
    product : productReducer,
    branch: branchSlice,
    connection : connectionSlice
  },
})