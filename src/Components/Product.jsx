import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; 
import { fetchProductById, selectSelectedProduct } from '../Redux/ProductSlice';
import './Product.css';

const ProductDetail = () => {
  const { id } = useParams(); // Get the id from route
  const dispatch = useDispatch();
  const selectedProduct = useSelector(selectSelectedProduct);

  useEffect(() => {
    // Dispatch the action to fetch product data based on the id parameter
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='heading'>Product Details</div>
      <div className="product-detail-container">
        <h2 className="product-detail-title">{selectedProduct.title}</h2>
        <img src={selectedProduct.image} alt={selectedProduct.title} className="product-detail-image" />
        <p className="product-detail-description">{selectedProduct.description}</p>
        <p className="product-detail-price">Price: ${selectedProduct.price}</p>
      </div>
    </>
  );
};

export default ProductDetail;
