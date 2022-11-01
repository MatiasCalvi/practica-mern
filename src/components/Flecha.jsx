import React from 'react'

export default function Flecha(props) {
  let {icono,proporcion,tipoFlecha,evento}=props
  return (
    <div className={`gray ${tipoFlecha} ${proporcion} flex j-center a-center`} onClick={evento}>{icono}</div>
  )
}
