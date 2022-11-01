import React from 'react'

export default function TituloNombre(props) {
    let {categoria,imagen}=props
  return (
    <>
    <h2 className="titulo white flex j-center a-center">{categoria}</h2>
    <img src={imagen} alt="sujeto1" className="photo" />
    </>
  )
}
