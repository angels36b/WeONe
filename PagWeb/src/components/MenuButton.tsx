import React, { useState } from "react";


const Menu: React.FC = () => {
    const [isOpen, setIsOPen] = useState(false);

    const toggleMenu = () => {
        setIsOPen(!isOpen);
    };

    return (
        <div className={`menu ${isOpen ? 'open' : ''}`}
        >
            <button className="cpu-button" onClick={toggleMenu}>

                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    {/* <!-- Fondo del botón: un círculo gris --> */}
                    <circle cx="50" cy="50" r="40" fill="#888" />

                    {/* <!-- Borde del botón: un círculo negro --> */}
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#000" stroke-width="4" />

                    {/* <!-- Icono de encendido/apagado: un círculo blanco o negro -->  <!-- Para el estado "encendido" --> */}
                    <circle cx="50" cy="50" r="20" fill="#fff" /> 
                    {/* <!-- O -->  Para el estado "apagado" -->*/}
                    <circle cx="50" cy="50" r="20" fill="#000" /> 
                </svg>
            </button>
            {isOpen && (<ul className="menu-items">
                <li>Inicio</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>
            )}

        </div>
    );
};

export default Menu;