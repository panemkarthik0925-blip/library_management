import React, { useRef } from 'react'
import '../assets/Styles/landingpagstyle.css'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    let fromdata=useRef()

    let navigate=useNavigate()

    let handlelogin=(e)=>{
        e.preventDefault()

        let emailfiled=fromdata.current[0]
        let passwordfield=fromdata.current[1]

        let credientials={
            email:'admin@gmail.com',
            password:'admin123'
        }
        let {email,password}=credientials

        let emailbool=emailfiled.value===email
        let passwordbool=passwordfield.value===password

        if(emailbool && passwordbool){
           navigate('/portal')

        }
        else{
            let  errBorder ='solid 2px red'
            emailfiled.style.border= errBorder
            passwordfield.style.border= errBorder
        }

    }
  return (
    <>
    <div className="landingpage">
        <div className="container">
            <h1>LOGIN PAGE</h1>
            <form ref={fromdata} onSubmit={handlelogin}>
            
                <input type="email" placeholder='Enter your Email Address' />
                <input type="password" placeholder='Enter your Password' />
                <button>Login</button>
            </form>

        </div>

    </div>
    
    </>
  )
}

export default Landingpage

// C:\REACTJS\library_management\src\assets\landingpagstyle.css