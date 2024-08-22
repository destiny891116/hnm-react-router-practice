import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const apiUrl = process.env.NODE_ENV !== 'development'
    ? 'https://my-json-server.typicode.com/destiny891116/hnm-react-router-practice'
    : 'http://localhost:5000'


const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    try {
      let searchQuery = query.get('q') || "";
      let url = `${apiUrl}/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data = await response.json();
      setProductList(data);
    } catch(error) {
      console.error(error);
    }    
  }

  useEffect(()=>{
    getProducts();
  },[query]);

  return (
    <div>
      <Container className="product-all">
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
