import React from 'react'

export default function TextoDescription(props) {
  let {description,evento}=props
  return (
    <p className="description" onClick={evento}>{description}</p>
  )
}
