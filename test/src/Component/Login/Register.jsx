import React, { useState } from 'react'
import '../Login/Login.css'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Register = () => {
    const [userData, setUserData] = useState({ name: '', email: '', password: '' })
    const route = useNavigate();

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setUserData({...userData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(userData.name&&userData.email&&userData.password){
            const array=JSON.parse(localStorage.getItem('Users'))||[];
            const array_obj={
                name:userData.name,
                email:userData.email,
                password:userData.password,
                own:[]
            };
            var flag=false;
            for(let i=0;i<array.length;i++){
                if(array[i].email==userData.email){
                    toast.error("Already Exist!!!!");
                    route('/register')
                }
            }
            if(flag==false){
                array.push(array_obj);
                localStorage.setItem('Users',JSON.stringify(array));
                setUserData({});
                toast.success("Register Successfull....");
                route('/login')
            }
        }
        else{
            toast.error("Fill Your Data!!!!")
        }
    }
    return (
        <div>
            <Navbar />
            <div id='login'>
                <div id='inner_login'>
                    <form onSubmit={handleSubmit}>
                        <div className='input'>
                            <label>Name : </label><br />
                            <input type='text' name='name' placeholder='Enter Your Name Here....' onChange={handleChange} /><br />
                        </div>
                        <div className='input'>
                            <label>Email : </label><br />
                            <input type='email' name='email' placeholder='Enter Your Email Here....' onChange={handleChange} /><br />
                        </div>
                        <div className='input'>
                            <label>Password : </label><br />
                            <input type='password' name='password' placeholder='Enter Your Password Here...' onChange={handleChange} /><br />
                        </div>
                        <div id='btn'>
                            <input type='submit' value='Register' />
                        </div>
                    </form>
                    <p onClick={() => route('/login')}>Already Have An Account?</p>
                </div>
            </div>
        </div>
    )
}

export default Register