import styles from './Nav.module.scss'
import {useState} from "react";
import {Burger} from "@/components/atoms/Burger/Burger";

export const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onCloseMenu = () => {
    setOpenMenu(false)
  }

  return (
    <>
      <Burger setOpen={setOpenMenu} open={openMenu} />

      <nav className={openMenu ? `${styles.nav} ${styles.nav_active}` : styles.nav}>
        <ul className={styles.nav_list}>
          <li className={styles.link}>
            <a href='#portfolio' onClick={onCloseMenu}>
              Портфолио
            </a>
          </li>
          <li className={styles.link}>
            <a href='#about' onClick={onCloseMenu}>
              О компании
            </a>
          </li>
          <li className={styles.link}>
            <a href='#feedback' onClick={onCloseMenu}>
              Контакты
            </a>
          </li>
          <li className={`${styles.link_application} ${styles.link}`}>
            <a href='#feedback' onClick={onCloseMenu}>
              Оставить заявку
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}
