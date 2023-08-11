import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Addtodo/Alltodo.css'
import { useNavigate } from 'react-router-dom';

const Alltodo = () => {
    const[usertodo,setUserTodo]=useState();
    const[isTodoPresent,setIsTodoPresent]=useState(false)
    const route=useNavigate();

    useEffect(()=>{
        const todo_present=JSON.parse(localStorage.getItem('Todolist'));
        if(todo_present){
            setIsTodoPresent(true)
            setUserTodo(todo_present)
        }
        else{
            setIsTodoPresent(false)
            setUserTodo({})
        }
    },[])

    const redirect=(id)=>{
        route(`/singletodo/${id}`)
    }
    // console.log(usertodo,"todo")
  return (
    <div>
        <Navbar/>
        <div id='alltodo'>
            <div id='inner_alltodo'>
                {usertodo && usertodo.map((todo)=>( 
                <div className='list' onClick={()=>redirect(todo.id)}>
                    <h1>{todo.subject}</h1>
                    <h3>{todo.desc}</h3>
                </div>))
               }
            </div>
        </div>
    </div>
  )
}

export default Alltodo