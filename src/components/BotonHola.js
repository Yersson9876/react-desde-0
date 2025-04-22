import React from "react";
import "./BotonHola.css";

function BotonHola(){
    const saludar = () => {
        alert('¡Hola desde el botón! 😄');
    };

    return(
        <button className="boton-saludo" onClick={saludar}>
            ¡Haz click aquí!
        </button>
    );
    
}

export default BotonHola;