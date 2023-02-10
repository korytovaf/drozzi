import styles from './Input.module.scss';
import {useRef} from "react";

export const Input = ({ label, value, setValue, placeholder = ' ' }) => {
  const inputRef = useRef(null);

  const onFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div className={styles.input_wrapper}>
      <input
        ref={inputRef}
        type="text"
        className={styles.input}
        value={value}
        onInput={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <label onClick={onFocus} className={styles.label}>{label}</label>
    </div>
  )
}
