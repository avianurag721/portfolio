import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [user, setUser] = useState({
        name: '',
        add: '',
        password: '',
        email: '',
        suggestion: ''
    });




    let name, value;
    const getdata = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
    }

    const postData = async (event) => {
        event.prevent.default();
        const { name, add, password, email, suggestion } = user;

        const res = await fetch(
            'https://form-10a95-default-rtdb.firebaseio.com/aviform.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    add,
                    password,
                    email,
                    suggestion
                }),
            }
            );
            alert('Submitted Successfully')
        }
    return (
        <>


            <div className="formContainer">
                <h1>Submit Your Query</h1>
                <form >
                    <div className="left">
                        <span>
                            <label htmlFor="Name"> Enter your Name</label>
                            <input type="text" value={user.name} name='name' onChange={getdata} />
                        </span>
                        <span>
                            <label htmlFor="E-mail">Enter Your E-mail</label>
                            <input type="email" value={user.email} name='email' onChange={getdata} />

                        </span>
                        <span>
                            <label htmlFor="password">Enter Your Password</label>
                            <input type="password" value={user.password} name='password' onChange={getdata} />
                        </span>
                    </div>
                    <div className="right">
                        <span>
                            <label htmlFor="Name"> Enter your Add.</label>
                            <input type="text" value={user.add} name='add' onChange={getdata} />
                        </span>

                        <span>
                            <label htmlFor="password">Suggestion</label>
                            <input type="text" value={user.suggestion} name='suggestion' onChange={getdata} />
                        </span>
                        <span>
                            <button type='submit' className="btn" onClick={postData}>Submit</button>
                        </span>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form
