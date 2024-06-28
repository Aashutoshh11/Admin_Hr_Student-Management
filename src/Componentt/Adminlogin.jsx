
import { useNavigate } from 'react-router-dom'
import React, { useRef } from 'react'
import '../Style/Adminlogin.css';


const Adminlogin = () => {
    let adminname = useRef()
    let password = useRef()
    let navigate = useNavigate()
    let handleAdminlogin = (e) => {
        e.preventDefault()
        if (adminname.current.value === "admin" && password.current.value ==="123") {
            navigate("/adminhome")
        }
        else if (adminname.current.value === "admin" && password.current.value !== "123") {
            alert("Password Incorrect")
        }
        else {
            alert("Admin Not Found!")
        }
    }

    return (
        <div>
            <form >
                <h1> Login</h1>
                <input type="text" placeholder='Username' ref={adminname} />
                <input type="text" placeholder='Password' ref={password} />
                <input onClick={handleAdminlogin} type="submit" value="Login" />
                
            </form>
        </div>
    )
}

export default Adminlogin;