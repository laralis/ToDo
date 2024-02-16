import styles from './Button.module.css'

export function Button({text,color}) {
  return (
    <button className={color == "purple" ? styles.buttonPurple : styles.button} >{text}<span>0</span></button>
  )
}