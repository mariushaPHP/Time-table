import React, {useState, useEffect} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {Form, Button} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom'
import {auth, registerWithEmailPassword} from "./services/AutServises";
import firebase from "firebase";



const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(!name) alert('Ivesk varda!!!')
        registerWithEmailPassword(name, email, password)
    }

    useEffect(() => {
        if(loading) return;
        if(user) navigate('/works')
    })

    return (
        <>
            <h2 className='mt-3 text-center'>Sukurti vartotoja</h2>
            <Form onSubmit={submitHandler}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='Jusu vardas'
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='email'
                        placeholder='Jusu el. pastas'
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Control
                        type='password'
                        placeholder='Jusu slaptazodis'
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Registruotis
                </Button>
            </Form>
        </>
    );
};

export default Register;