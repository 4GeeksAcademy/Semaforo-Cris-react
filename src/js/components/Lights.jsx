import { useState } from "react";

export default function Semaforo() {
  const [luzActiva, setLuzActiva] = useState(null);

  return (
    <div className="semaforo">
      <button
        className={luzActiva === "rojo" ? "luz rojo activo" : "luz rojo"}
        onClick={() => setLuzActiva("rojo")}
      ></button>

      <button
        className={luzActiva === "amarillo" ? "luz amarillo activo" : "luz amarillo"}
        onClick={() => setLuzActiva("amarillo")}
      ></button>

      <button
        className={luzActiva === "verde" ? "luz verde activo" : "luz verde"}
        onClick={() => setLuzActiva("verde")}
      ></button>
    </div>
  );
}
