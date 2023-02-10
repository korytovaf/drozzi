import styles from './Header.module.scss'
import {Logo} from "@/components/atoms/icons/Logo";
import {Nav} from "@/components/molecules/Nav/Nav";


export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo height={45} width={100} />
        </div>
        <Nav />
      </div>
    </header>
  )
}
