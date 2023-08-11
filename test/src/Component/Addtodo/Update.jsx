import React from 'react'
import Navbar from '../Navbar/Navbar'

const Update = () => {
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
                            <input type='submit' value='Update TODO' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update