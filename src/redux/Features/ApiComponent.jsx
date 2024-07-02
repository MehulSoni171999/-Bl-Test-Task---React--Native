import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProductApi = createAsyncThunk('fetchproductapi', async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  // console.log(res)
  const final = res.data;
  console.log(final, 'final========');

  return final;
});
