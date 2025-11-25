import React from "react";

const PurpleLight = ({ activo, activoReal, onClick }) => {
    const activoMostrar = activo ? "mostrar" : "oculto"
    const activoMostrarReal = activoReal ? "activo" : ""
    return (
        <button
            className={`luz ${activoMostrar} ${activoMostrarReal}`}
            onClick={onClick}
        >
        </button>
    );
};

export default PurpleLight;

