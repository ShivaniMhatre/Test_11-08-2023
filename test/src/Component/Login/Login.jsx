import React, { useContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
    const[userData,setUserData]=useState({email:'',password:''})
    const{Login}=useContext(AuthContext)
    const route=useNavigate();

    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;

        setUserData({...userData,[name]:value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(userData.email&&userData.password){
            const allusers=JSON.parse(localStorage.getItem('Users'));
            var falg=false;
            for(let i=0;i<allusers.length;i++){
                if(allusers[i].email==userData.email&&allusers[i].password==userData.password){
                    localStorage.setItem('CurrentUser',JSON.stringify(allusers[i]));
                    Login(allusers[i])
                    setUserData({})
                    toast.success("Login Successfull...")
                    route('/')
                }
                else{
                    toast.error("Please Check Your Credential....")
                }
            
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
                            <label>Email : </label><br />
                            <input type='email' name='email' placeholder='Enter Your Email Here....' onChange={handleChange}/><br />
                        </div>
                        <div className='input'>
                            <label>Password : </label><br />
                            <input type='password' name='password' placeholder='Enter Your Password Here...' onChange={handleChange}/><br />
                        </div>
                        <div id='btn'>
                            <input type='submit' value='LOGIN' />
                        </div>
                    </form>
                    <p onClick={()=>route('/register')}>NEW USER?</p>
                </div>
            </div>
        </div>
    )
}

export default Login