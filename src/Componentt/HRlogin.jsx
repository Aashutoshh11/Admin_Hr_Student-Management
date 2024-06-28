import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style/HRlogin.css';

const HRlogin = () => {
    let username = useRef()
    let password = useRef()
    let navigate = useNavigate()
    let handleHrlogin = (e) => {
        e.preventDefault()
        fetch("http://localhost:4000/hr")
            .then(res => { return res.json() })
            .then(hrs => {
               let hrObj = hrs.find((hr) => { return username.current.value === hr.name && password.current.value === hr.password })
                console.log(hrObj);
            
            if(hrObj===undefined){
                alert("No User found")
            }
            else if (hrObj.password!==password.current.value) {
                alert("Wrong Password")
            }
            else{
                navigate("/hrhome")
            }
        })
    }
    return (
        <div>
            <form >
                <h1>HR LOGIN</h1>
                <input type="text" ref={username} />
                <input type="password" ref={password} />
                <input type="submit" value="Login" onClick={handleHrlogin} />
            </form>
        </div>
    )
}

export default HRlogin;