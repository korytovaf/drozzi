import styles from './Button.module.scss'

export const Button = ({ children, transition, onClick, type = 'button', disabled }) => {

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={transition
        ? `${styles.button} ${styles.button_transition}`
        : `${styles.button} ${styles.button_default}`
      }
    >
      {children}
    </button>
  )
}
