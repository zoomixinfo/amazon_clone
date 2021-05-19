import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Login.css'
import {auth} from './firebase'
function Login() {
    const history = useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const login = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(e => alert(e.message))
    }
const register = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(e=> alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
            <img src="https://www.nwahomepage.com/wp-content/uploads/sites/90/2021/01/Amazon-logo.png" className="login__logo" alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                <h5>Email</h5>
                <input value={email} type="email" onChange={event => setEmail(event.target.value)}/>
                <h5>Password</h5>
                <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                <button type="submit" onClick={login} className="login__siginButton">Sign In</button>
                </form>
                <p>Accept out T&C</p>
                <button form="submit" onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
