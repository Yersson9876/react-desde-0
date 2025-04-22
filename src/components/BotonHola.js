import React from "react";

function BotonHola(){
    const saludar = () => {
        alert('¡Hola desde el botón! 😄');
    };

    return(
        <button onClick={saludar} style={{padding:'10px 20px', fontSize:'16px' }}>
            ¡Haz click aquí!
        </button>
    );
    
}

export default BotonHola;