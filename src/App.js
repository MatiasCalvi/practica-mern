import "./index.css";
import TituloNombre from "./components/TituloNombre";
import Flecha from "./components/Flecha";
import TextoDescription from "./components/TextoDescription";
import data from "./events1";
import { useState } from "react";

function App() {
  let [numeroAcambiar, setNumeroAcambiar] = useState(0);
  let [mostrarOcultar,setMostrarOcultar] = useState(false)

  let clickPosterior = () => {
    if (numeroAcambiar < data.length - 1) {
      setNumeroAcambiar(++numeroAcambiar);
    } else {
      setNumeroAcambiar(0);
    }
  };
  let clickAnterior = () => {
    if (numeroAcambiar < data.length - 1) {
      setNumeroAcambiar(++numeroAcambiar);
    } else {
      setNumeroAcambiar(0);
    }
  };
  let ocultar=()=>{
    setMostrarOcultar(!mostrarOcultar)
  }
  return (
    <div className="card black">
      <TituloNombre categoria={data[numeroAcambiar].category} imagen={data[numeroAcambiar].image}></TituloNombre>
    { mostrarOcultar ?
    (<>
      <div className="d-flex">
        <Flecha tipoFlecha="flecha" proporcion="r25" icono="&#129044;" evento={clickAnterior}></Flecha>
        <Flecha tipoFlecha="flecha-center" icono="&#129045;" evento={ocultar}></Flecha>
        <Flecha tipoFlecha="flecha" proporcion="l25" icono="&#129046;" evento={clickPosterior}></Flecha>
      </div>
      <h5 className="titulo white flex j-center a-center">{data[numeroAcambiar].name}</h5>
      <TextoDescription description={data[numeroAcambiar].description}></TextoDescription></>)
      :
      (<>
      <div className="d-flex">
        <Flecha tipoFlecha="flecha" proporcion="r25" icono="&#129044;" evento={clickAnterior}></Flecha>
        <Flecha tipoFlecha="flecha-center" icono="&#129047;" evento={ocultar}></Flecha>
        <Flecha tipoFlecha="flecha" proporcion="l25" icono="&#129046;" evento={clickPosterior}></Flecha>
      </div>
      </>)
      }
    </div>
  );
}

export default App;
