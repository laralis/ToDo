import { CheckBox } from './CheckBox'
import styles from './Task.module.css'
import {Trash,Check} from "phosphor-react"
export function Task() {
  return (
    <div className={styles.taskWrap}>
      <CheckBox/>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. </p>
      <button><Trash size={13} /></button>
    </div>
  )
}