import styles from "./Burger.module.scss";

export const Burger = ({ open, setOpen }) => {
  return (
    <button
      onClick={() => setOpen(!open)}
      className={open ? `${styles.burger_btn} ${styles.burger_btn_active}` : styles.burger_btn}
    >
      <span />
    </button>
  )
}
