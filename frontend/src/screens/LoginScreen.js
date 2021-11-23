import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import FormContainer from '../Components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const submitHandler = (e) => {
        e.preventDefault()
        // DISPATCH LOGIN
    }


    return (
        <FormContainer>
            <h1>Sign In</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <br></br>
                <Button type='submit' variant='secondary'>
                    Sign In
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginScreen
