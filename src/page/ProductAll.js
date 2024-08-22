import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const apiUrl = process.env.NODE_ENV !== 'development'
    ? 'https://master--lucky-croissant-a60c31.netlify.app/'
    : 'http://localhost:5000'


const ProductAll = () => {
  console.log(process.env.NODE_ENV);
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = `${apiUrl}/products`;
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
