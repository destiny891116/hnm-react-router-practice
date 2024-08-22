import React, { useState } from 'react'
import { Form, Button, Container} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    
    event.preventDefault(); // Form 일 경우 리로드 막아줌.
    console.log("login clik!");
    setAuthenticate(true);
    navigate("/");
    
  };

  return (
  <Container className='login-container'>
     <Form onSubmit={(event)=>loginUser(event)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="이메일" required/>
        <Form.Text className="text-muted">
          다양한 할인 혜택과 이벤트 보너스 쿠폰을 놓치지 마세요.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="비밀번호" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="로그인 상태 유지" />
      </Form.Group>
      <Button className="login-btn" variant="danger" type="submit">
        로그인
      </Button>
      <Button variant="danger" type="button">
        회원 가입하기
      </Button>
    </Form>
  </Container>
  );
}

export default Login
