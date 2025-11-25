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

    return (
        <div className="semaforo">

            <Lights
                color="rojo"
                activa={luzActiva === "rojo"}
                onClick={() => setLuzActiva("rojo")}
            />

            <Lights
                color="amarillo"
                activa={luzActiva === "amarillo"}
                onClick={() => setLuzActiva("amarillo")}
            />

            <Lights
                color="verde"
                activa={luzActiva === "verde"}
                onClick={() => setLuzActiva("verde")}
            />

            <PurpleLight
                activo={mostrarPurple}
                activoReal={luzActiva === 'morado'}
                onClick={activarMorado}
            />

        </div>
    );
};

export default Semaforo;
