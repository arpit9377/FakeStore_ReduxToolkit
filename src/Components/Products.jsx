import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts, selectProducts, fetchProductById } from '../Redux/ProductSlice'; 
import './Products.css';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = async (product) => {
    await dispatch(fetchProductById(product.id));
  };

  return (
    <>
      <div className='heading'>Product List</div>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <Link to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
              <h3>{product.title}</h3>
              <img src={product.image} alt={product.title} className="product-image" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
