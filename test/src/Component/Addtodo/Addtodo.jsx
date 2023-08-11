import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Addtodo/Addtodo.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import { AuthContext } from '../Context/AuthContext';

const Addtodo = () => {
    const [usertodo, setUserTodo] = useState({ subject: '', desc: '' });
    const [userData, setUserData] = useState({})
    const [isuserLoggedIn, setIsUserLoggedIn] = useState(false);
    const { state } = useContext(AuthContext)
    const route = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('CurrentUser'))
        if (user) {
            setUserData(state.user)
        }
    }, [])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserTodo({ ...usertodo, [name]: value })
    }

    useEffect(() => {
        const user = localStorage.getItem('CurrentUser')
        if (user) {
            setIsUserLoggedIn(true)
        } else {
            setIsUserLoggedIn(false)
        }

    }, [])
    const handleSubmit = (e) => {
        // toast.error('click')
        e.preventDefault();
        if (isuserLoggedIn) {
            console.log(isuserLoggedIn, "user")
            if (usertodo.subject && usertodo.desc) {
                const todo_array = JSON.parse(localStorage.getItem('Todolist')) || [];
                const randomID = uuidv4();
                usertodo["id"] = randomID
                todo_array.push(usertodo)
                console.log(todo_array, "array")
                localStorage.setItem('Todolist', JSON.stringify(todo_array));
                setUserTodo({});
                toast.success("Todo Added Successfully");
                route('/alltodo')
            }
            else {
                toast.error("Fill Your Data")
            }
        }
        else {
            toast.error("Login")
        }


    }
    return (
        <div>
            <Navbar />
            <div id='addtodo'>
                <div id='inner_addtodo'>
                    <form onSubmit={handleSubmit}>
                        <div className='input'>
                            <label>Subject : </label><br />
                            <input type='text' name='subject' placeholder='Enter Your Name Here....' onChange={handleChange} /><br />
                        </div>
                        <div className='input'>
                            <label>Description : </label><br />
                            <input type='text' name='desc' placeholder='Enter Your Name Here....' onChange={handleChange} /><br />
                            {/* <textarea cols='20' row='20' name='todo' onChange={handleChange} /> */}
                        </div>
                        <div id='btn'>
                            <input type='submit' value='ADD TODO' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addtodo