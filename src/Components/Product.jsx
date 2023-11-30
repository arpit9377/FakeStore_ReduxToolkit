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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={selectedProduct.image} alt={selectedProduct.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">{selectedProduct.title}</h2>
          <p className="mb-4">{selectedProduct.description}</p>
          <p className="mb-4">Price: ${selectedProduct.price}</p>
          <Link to="/" className="btn btn-primary">Back to Products</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
