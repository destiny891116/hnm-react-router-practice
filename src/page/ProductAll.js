import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';


const ProductAll = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = 'https://lucky-croissant-a60c31.netlify.app/products';
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    
  }

  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div>
      <Container>
       <Row>
        {productList.map((menu) => (
          <Col lg={3} key={menu.id}>
            <ProductCard item={menu}/>
          </Col>
        ))};
        
        </Row>
      </Container>
    </div>
  );
}

export default ProductAll
