import styles from './Textarea.module.scss';
import {useRef} from "react";

export const Textarea = ({ label, value, setValue, rows, placeholder = ' ' }) => {
  const inputRef = useRef(null);

  const onFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div className={styles.textarea_wrapper}>
      <textarea
        aria-label={label}
        rows={rows}
        ref={inputRef}
        className={styles.textarea}
        value={value}
        onInput={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <label onClick={onFocus} className={styles.label}>{label}</label>
    </div>
  )
}
