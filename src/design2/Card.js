import React from 'react'
import style from './Card.module.css'
export default function Card( {children}) {
    return <div classname={style.Card}>{children}</div>
}