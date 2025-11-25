const Lights = ({ color, activa, onClick }) => {
  const activarLuz = activa ? "activo" : ""

  return (
    <>
    <button
      className={`luz ${color} ${activarLuz}`}
      onClick={onClick}
      ></button>
    
    </>
  );
};


export default Lights;