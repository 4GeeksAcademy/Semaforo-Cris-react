const Lights = ({ color, activa, onClick }) => {


  return (
    <>
    <button
      className={`luz ${color} ${activa ? "activo" : ""}`}
      onClick={onClick}
      ></button>
    
    </>
  );
};


export default Lights;