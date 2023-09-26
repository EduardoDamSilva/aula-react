import React from 'react'
import styles from './Button.module.css'

const Button = () => {
  console.log(styles)
  return (
    
    <button className={styles.button}>
      Enviar
    </button>
  )
}

export default Button
