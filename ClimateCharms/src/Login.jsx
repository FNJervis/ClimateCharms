import reactLogo from './assets/react.svg'; {/*Aqui va el import del logo de la tienda*/}
import './Login.css'

import { useEffect, useState } from "react";
import {auth,provider} from "./config";
import {signInWithPopup} from "firebase/auth";
import Home from "./Home";


function Login() {
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

    return (
        <>
        
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <br></br>
                        <h6 className="Auth-form-text">Ingresa con tu cuenta de Google</h6>
                        <div>
                            {/*Aqui va el logo de la tienda*/}
                            <img src={reactLogo} className="logo" />
                        </div>
                            {value?<Home/>:
                            <button onClick={handleClick}>Google</button>
                             }
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login


/** function SignIn(){
    const [value,setValue] = useState('')
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <div>
        {value?<Home/>:
        <button onClick={handleClick}>Iniciar Sesión con Google</button>
        }
    </div>
) }
export default SignIn; **/