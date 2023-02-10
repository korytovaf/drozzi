import styles from './About.module.scss'
import {Button} from "@/components/atoms/Button/Button";
import Image from "next/image";
import imgStaff from '@/public/Frame 92.webp';
import {useState} from "react";
import {Close} from "@/components/atoms/icons/Close";

export const About = () => {

  const [bigView, setBigView] = useState(false);

  const onShowBigImg = () => {
    const body = document.querySelector('body');
    const img = document.getElementById('img');
    const posTop = window.scrollY;

    if (bigView) {
      setBigView(false);
      body.style.overflow = 'scroll';
      return;
    }
    setBigView(true);
    body.style.overflow = 'hidden';
    img.style.top = `${posTop}px`;
  }

  return (
    <section id='about' className={styles.about_container}>
      <div className={styles.about_header}>
        <h2>О компании</h2>
      </div>

      <ul className={styles.about_staff_list}>
        <li className={styles.about_staff_item}>
          <span>5</span>
          <span>отделов</span>
        </li>
        <li className={styles.about_staff_item}>
          <span>5</span>
          <span>маркетологов</span>
        </li>
        <li className={styles.about_staff_item}>
          <span>3</span>
          <span>дизайнера</span>
        </li>
        <li className={styles.about_staff_item}>
          <span>3</span>
          <span>копирайтера</span>
        </li>
        <li className={styles.about_staff_item}>
          <span>7</span>
          <span>разработчиков</span>
        </li>
      </ul>

      <div className={styles.about_staff_wrapper}>
        <div className={styles.about_staff_description}>
          <p>
            Мы — команда специалистов с опытом, энтузиазмом и лёгким недосыпом. Маркетинговое агентство «Дрожжи» было основано
            в 2015 году, как компания, где можно получить комплексное интернет- и oффлайн-продвижение. На сегодняшний день мы не зависим ни от ниши, ни от географии, ни от специфики продукта.
            В портфолио компании сотни успешных кейсов, способных помочь вам в реализации своей идеи.
          </p>

          <ul className={styles.about_staff_achievements}>
            <li>
              <span>1000+</span>
              <span>реализованных проектов</span>
            </li>
            <li>
              <span>92</span>
              <span>клиента доверили нам свои проекты</span>
            </li>
            <li>
              <span>5+</span>
              <span>лет успешной работы</span>
            </li>
          </ul>

          <div className={styles.about_staff_btn}>
            <Button transition>
              подробнее
            </Button>
          </div>

        </div>
        <div
          id='img'
          onClick={onShowBigImg}
          className={bigView ? `${styles.about_staff_img} ${styles.about_staff_img_view}` : styles.about_staff_img}
        >
          <button onClick={onShowBigImg} className={bigView ? `${styles.staff_img_btm} ${styles.staff_img_btm_visible}` : styles.staff_img_btm}>
            <Close height={22} width={22} />
          </button>
          <Image src={imgStaff} alt='Команда агентства «Дрожжи»' />
          <span>Команда агентства «Дрожжи»</span>
        </div>
      </div>

    </section>
  )
}
