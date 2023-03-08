import React from 'react'
import "./button.css"

export default function Button({text,onClick}) {
  return (
    <button id="button" onClick={onClick}>
        {text}
    </button>
  )
}
