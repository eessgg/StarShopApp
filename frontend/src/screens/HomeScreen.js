import React from 'react';
import products from '../productsDataset';
import { Row, Col } from "react-bootstrap";
import Product from '../components/Product';


const HomeScreen = () => {
  console.log(products)
  return (
    <div>
      <h1>Home Screen / Products</h1>      
      <Row>
         {products && products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;