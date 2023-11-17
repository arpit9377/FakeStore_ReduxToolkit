import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await axios.get('https://fakestoreapi.com/products');
  return response.data;
});

export const fetchProductById = createAsyncThunk('product/fetchProductById', async (productId) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
  return response.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    selectedProduct: null,
  },
  reducers: {
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export const { selectProduct } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;
