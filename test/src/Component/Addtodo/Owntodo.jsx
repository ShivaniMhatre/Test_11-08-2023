import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import '../Addtodo/Owntodo.css'
import { useNavigate } from 'react-router-dom';

const Owntodo = () => {
    const [userown, setUserOwn] = useState([]);
    const [usertodo,setUserTodo]=useState({subject:'',desc:''})
    const route = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('CurrentUser'));
        if (user.email) {
            const alluser = JSON.parse(localStorage.getItem('Users'))
            for (let i = 0; i < alluser.length; i++) {
                setUserOwn(alluser[i].own)
                localStorage.setItem('Users', JSON.stringify(alluser));

            }
        }

    }, [])

    function remove(index) {
        const user = JSON.parse(localStorage.getItem('CurrentUser'));
        if (user?.email) {
            const alluser = JSON.parse(localStorage.getItem('Users'))
            for (let i = 0; i < alluser.length; i++) {
                if (alluser[i].email == user.email) {
                    alluser[i].own.splice(index, 1);
                    localStorage.setItem('Users', JSON.stringify('alluser'))
                    setUserOwn(alluser[i].own)
                }
            }
        }
    }
    return (


        <div>
            <div id='update'>
                <form>
                    <div className=''>

                    </div>
                </form>
            </div>
            <Navbar />
            <div id='owntodo'>
                <div id='inner_owntodo'>
                    {userown && userown.map((todo, index) => (
                        <div className='owntodolist' >
                            <h1>{todo.subject}</h1>
                            <h3>{todo.desc}</h3>
                            <div className='btns'>
                                <button style={{position:'relative'}}>Update</button>
                                <button onClick={() => remove(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Owntodo