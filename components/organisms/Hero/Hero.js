import styles from './Hero.module.scss';
import heroImg from '@/public/hero.webp';
import Image from "next/image";
import {Arrow} from "@/components/atoms/icons/Arrow";
import Link from "next/link";
import {Whatsapp} from "@/components/atoms/icons/Whatsapp";
import {Telegram} from "@/components/atoms/icons/Telegram";

export const Hero = () => {
  return (
    <section id='hero' className={styles.hero}>
      <div className={styles.hero_wrapper}>
        <Image
          className={styles.hero_img}
          alt="фоновое изображение"
          src={heroImg}
        />

        <div className={styles.hero_slogan}>
          <h1 className={styles.header}>
            Маркетинговое агентство.
          </h1>
          <p>
            С нами вы растете как на дрожжах
          </p>
        </div>

        <div className={styles.hero_arrow}>
          <a href='#portfolio' aria-label="Просмотр раздела портфолио">
            <Arrow width={22} height={22} />
          </a>
        </div>

        <div className={styles.hero_messengers}>
          <Link
            aria-label="Написать сообщение в whatsapp"
            href='https://api.whatsapp.com/send/?phone=79505188881&text=Добрый+день, '
            target='_blank'
            className={styles.hero_link_wrapper}
          >
            <Whatsapp />
            <span>whatsapp</span>
          </Link>
          <Link
            aria-label="Написать сообщение в telegram"
            href='https://t.me/korytovaf'
            target='_blank'
            className={styles.hero_link_wrapper}
          >
            <Telegram />
            <span>telegram</span>
            </Link>
        </div>
        </div>
    </section>
  )
}
