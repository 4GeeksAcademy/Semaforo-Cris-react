import { useState } from "react";
import Lights from "./Lights";
import PurpleLight from "./purpleLight";

const Semaforo = () => {

    const [luzActiva, setLuzActiva] = useState(null);
    const [mostrarPurple, setMostrarPurple] = useState(false);

    const activarMorado = () => {
        setMostrarPurple(true);
        setLuzActiva("morado");
    };

    const activarLuz = (color) => {
        setLuzActiva(color);
        setMostrarPurple(false);
    };

    return (
        <div className="semaforo">

            <Lights
                color="rojo"
                activa={luzActiva === "rojo"}
                onClick={() => activarLuz("rojo")}
            />

            <Lights
                color="amarillo"
                activa={luzActiva === "amarillo"}
                onClick={() => activarLuz("amarillo")}
            />

            <Lights
                color="verde"
                activa={luzActiva === "verde"}
                onClick={() => activarLuz("verde")}
            />

            <PurpleLight
                color="morado"
                activo={mostrarPurple}
                activoReal={luzActiva === "morado"}
                onClick={activarMorado}
            />

        </div>
    );
};

export default Semaforo;
