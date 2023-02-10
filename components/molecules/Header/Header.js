import styles from './Header.module.scss'
import {Logo} from "@/components/atoms/icons/Logo";
import {Nav} from "@/components/molecules/Nav/Nav";
import Link from "next/link";


export const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
          <Logo height={45} width={100} />
        </Link>
        <Nav />
      </div>
    </header>
  )
}
