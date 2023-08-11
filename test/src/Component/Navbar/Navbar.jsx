import React, { useContext, useEffect, useState } from 'react'
import '../Navbar/Navbar.css';
import { redirect, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    const { state, Logout } = useContext(AuthContext)
    const [userData, setUserData] = useState({})
    const route = useNavigate();

    useEffect(() => {
        if (state) {
            setUserData(state.user)
        }
    }, [state])

    const logout = () => {
        Logout();
        route('/')
    }
    return (
        <div>
            <div id='navbar'>
                <div id='inner_nav'>
                    <div id='logo'>
                        <h1>TODO</h1>
                    </div>
                    <div id='other'>
                        <span>
                            <p onClick={()=>route('/addtodo')}>ADD TODO</p>
                            <p onClick={()=>route('/alltodo')}>SHOW TODO</p>
                            {userData ?
                            <div style={{width:'25%',display:'flex',justifyContent:'space-around'}}>
                                <p onClick={()=>route('/owntodo')}>Own Todo</p>
                                <p onClick={logout}>Logout</p>
                                
                                </div>
                                :
                                <p onClick={() => route('/login')}>Login</p>
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar