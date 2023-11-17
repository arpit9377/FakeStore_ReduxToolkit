import React from 'react';
import { useSelector } from 'react-redux';
import { selectSelectedProduct } from '../Redux/ProductSlice';
import './Product.css'; 

const ProductDetail = () => {
  const selectedProduct = useSelector(selectSelectedProduct);

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
