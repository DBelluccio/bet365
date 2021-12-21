import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../LoginScreen/ErrorMessage";
import Loading from "../LoginScreen/Loading";
import axios from "axios";

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

     const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmpassword){
            setMessage("Las contraseñas no coinciden");
        } else {
            setMessage(null);
            try {
                
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    },
                };

                setLoading(true);

                const { data } = await axios.post(
                    "http://localhost:8090/api/v1/users/register",
                    {name, email, password},
                    config
                );
            
                setLoading(false);
                // localStorage.setItem("userInfo", JSON.stringify(data));
                navigate("/login");
            } catch (error) {
                setError(error.response.data.message);
            }
        }
    }


    return (
        <div className="loginContainer">
         {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
         {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
         {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

           <Form.Group controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

           <Form.Group controlId="formBasicPassword">
             <Form.Label>Password</Form.Label>
             <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

           <Form.Group controlId="confirmPassword">
             <Form.Label>Confirm Password</Form.Label>
             <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    )
}

export default RegisterScreen;