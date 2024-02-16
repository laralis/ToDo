import styles from './Button.module.css'

export function Button({text,count,color}) {
  return (
    <button className={color == "purple" ? styles.buttonPurple : styles.button} >{text}<span>{count}</span></button>
  )
}