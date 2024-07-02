import {configureStore} from '@reduxjs/toolkit';
import {fetchProductApi} from '../Features/ApiComponent';
import CartReducer from '../Slice/CartSlice';
export const store = configureStore({
  reducer: {
    ProductApi: fetchProductApi,
    cart: CartReducer,
  },
});
