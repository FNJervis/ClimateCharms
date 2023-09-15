//import reactLogo from './assets/react.svg'; {/*Aqui va el import del logo de la tienda*/}
import './Login.css'
import SignIn from './components/signInButton/signin'
import Boton from "./assets/Button.jsx"
function Login() {

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <br></br>
                        <h6 className="Auth-form-text">Ingresa con tu cuenta de Google</h6>
                        <div>
                        </div>
                        <SignIn />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
