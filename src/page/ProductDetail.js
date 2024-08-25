import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap'

const apiUrl = process.env.NODE_ENV !== 'development'
    ? 'https://my-json-server.typicode.com/destiny891116/hnm-react-router-practice'
    : 'http://localhost:5000'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");

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

  const selectSize = (size) => {
    setSelectedSize(size);
  };

  useEffect(()=> {
    getProductDetail();
  }, []) 
  return <Container>
      <Row>
          <Col className="product-detail-card">
            <img src={product?.img} alt="product-detail-img" />
          </Col>
          <Col className="product-info">
            <div className="product-title">{product?.new === true ? "NEW" : ""} {product?.title}</div>
            <div className="con-price">
              <div className="price">₩{product?.price}</div>
              <div className="sp-price">회원 특별가 ₩{product?.price-4000}</div>
            </div>
            <div className="select-size">
              <DropdownButton variant="danger" title={selectedSize}>
                {product?.size.map((size, index) => (
                  <Dropdown.Item key={index} onClick={() => selectSize(size)}>
                    {size}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>

            <button className="add-btn">추가</button>
          </Col>
      </Row>
  </Container>
}

export default ProductDetail
