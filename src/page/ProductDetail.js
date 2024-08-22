import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const apiUrl = process.env.NODE_ENV !== 'development'
    ? 'https://master--lucky-croissant-a60c31.netlify.app/'
    : 'http://localhost:5000'

const ProductDetail = () => {
  const {id} = useParams();
  const [product, setProduct] = useState([]);

  const getProductDetail = async () => {
    try {
      let url = `${apiUrl}/products/${id}`;
      let response = await fetch(url);
      let data = await response.json();
      setProduct(data);
    } catch(error){
      console.error(error);
    }

  }

  useEffect(()=> {
    getProductDetail();
  }, []) 
  return <Container>
      <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div>{product?.title}</div>
            <div>₩{product?.price}</div>
            <div>
              <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
                {product.size.map((size, index) => (
                  <Dropdown.Item href="#">{size}</Dropdown.Item>
                  // <button
                  //   key={index}
                  //   className={`size-button ${
                  //     selectedSize === size ? "selected" : ""
                  //   }`}
                  //   onClick={() => handleSizeClick(size)}
                  // >
                  //   {size}
                  // </button>
                ))}
              </DropdownButton>
            </div>
          
          </Col>
      </Row>
  </Container>
}

export default ProductDetail
