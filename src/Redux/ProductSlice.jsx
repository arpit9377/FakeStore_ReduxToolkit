import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    selectedProduct: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { selectProduct, setProducts } = productSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const fetchProductById = (productId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    dispatch(selectProduct(response.data));
  } catch (error) {
    console.error('Error fetching product details:', error);
  }
};

export const selectProducts = (state) => state.product.products;
export const selectSelectedProduct = (state) => state.product.selectedProduct;

export default productSlice.reducer;
