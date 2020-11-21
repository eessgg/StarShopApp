import React from 'react';
import products from '../productsDataset';
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';


const ProductScreen = () => {
  console.log(products)
  return (
    <div>
      <h1>ProductScreen</h1>
    </div>
  );
}

export default ProductScreen;