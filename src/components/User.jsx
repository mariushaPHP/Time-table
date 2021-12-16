import React, {useEffect, useState} from 'react';
import {auth, logout} from "./services/AutServises";
import {Navbar, NavDropdown} from "react-bootstrap";
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import * as userService from '../components/services/UserServises'

const User = () => {
    const [userData, setUserData] = useState({})
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(loading) return
        if(!user) return navigate('/')
       // userService.getUserData(user, setUserData)
    }, [user, loading, userData])


    return (
        <Navbar.Collapse className='justify-content-end'>
            {user &&
            <NavDropdown title={userData.name}>
                <NavDropdown.Divider />
                <NavDropdown.Item  onClick={logout}>Atsijungti</NavDropdown.Item>
            </NavDropdown>}

        </Navbar.Collapse>
    )
};

export default User;