import React from "react";
import './App.css'

function Home(){
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1>Pagina Principal</h1>
            <button onClick={logout}>Cerrar Sesión</button>
        </div>
    );
}
export default Home;