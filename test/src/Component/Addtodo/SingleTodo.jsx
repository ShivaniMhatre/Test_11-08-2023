import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Addtodo/SingleTodo.css';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const SingleTodo = () => {
    const { id } = useParams();
    const [SingleTodo, setSingleTodo] = useState({});
    const [usertodo, setUserTodo] = useState();
    const [isTodoPresent, setIsTodoPresent] = useState(false);
    const[isUserLoggedIn,setISUserLoggedIn]=useState(false)
    const[CurrentUseremail,setCurrentUseremail]=useState()

    useEffect(() => {
        const todo_present = JSON.parse(localStorage.getItem('Todolist'))
        if (todo_present) {
            setUserTodo(todo_present);
            setIsTodoPresent(true)
        }
        else {
            setIsTodoPresent(false)
        }
    }, [])

    useEffect(() => {
        if (isTodoPresent) {
            if (id && usertodo.length) {
                const res = usertodo.find((todo) => todo.id == id)
                setSingleTodo(res)
            }
        }
    }, [id,usertodo])
    useEffect(()=>{
        const user=JSON.parse(localStorage.getItem('CurrentUser'));
        if(user){
            setISUserLoggedIn(true);
            setCurrentUseremail(user.email)
        }
        else{
            setISUserLoggedIn(false)
        }
    },[])
    function addowntodo(){
        if(isUserLoggedIn){
            const user=JSON.parse(localStorage.getItem('Users'));
            for(let i=0;i<user.length;i++){
                if(user[i].email==CurrentUseremail){
                    user[i].own.push(SingleTodo)
                    localStorage.setItem('Users',JSON.stringify(user))
                }
            }
                toast.success("Todo Added....")
            }

        }
    
    return (
        <div>
            <Navbar />
            <div id='singletodo'>
                <div id='inner_singletodo'>
                    <div id='todo'>
                        <h1>{SingleTodo.subject}</h1>
                        <h3>{SingleTodo.desc}</h3>
                        <div id='btns'>
                            <div className="btns">
                                <button onClick={addowntodo}>
                                    ADD Into Own Todo
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleTodo