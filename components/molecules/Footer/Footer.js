import styles from './Footer.module.scss';
import Link from "next/link";
import {Logo} from "@/components/atoms/icons/Logo";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_content}>
        <div>2015-2021 © Дрожжи™</div>
        <div>ООО «РВБ-Маркетинг»</div>
        <Link href='/' className={styles.footer_content_link}>Политика конфиденциальности</Link>
      </div>

      <div className={styles.footer_logo}>
        <Logo width={106} height={48} />
      </div>
    </footer>
  )
}
