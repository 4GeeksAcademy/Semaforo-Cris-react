import React from "react";

const PurpleLight = ({ color, activo, activoReal, onClick }) => {
    const activoMostrar = activo ? "mostrar" : "oculto"
    const activoMostrarReal = activoReal ? "activo" : ""
    return (
        <button
            className={`luz ${color} ${activoMostrar} ${activoMostrarReal}`}
            onClick={onClick}
        >
        </button>
    );
};

export default PurpleLight;

