import styles from "./Feedback.module.scss";
import Image from "next/image";
import yuliaDija from '@/public/YulaDija.webp';
import {FormFeedback} from "@/components/molecules/FormFeedback/FormFeedback";
import Link from "next/link";
import {ArrowLink} from "@/components/atoms/icons/ArrowLink";

export const Feedback = () => {
  return (
    <section id='feedback' className={styles.feedback_container} >
      <div className={styles.feedback_header}>
        <h2>Оставьте заявку</h2>
      </div>

      <div className={styles.feedback_content}>
        <div className={styles.feedback_manager}>
          <Image src={yuliaDija} alt='Юлия Дижа' />
          <h3 className={styles.feedback_manager_name}>Юлия Дижа</h3>
          <p>Поможет запустить ваш проект</p>
        </div>

        <div className={styles.feedback_form}>
          <FormFeedback />
        </div>

        <div className={styles.feedback_brief}>
          <h3 className={styles.feedback_brief_title}>Скачать брифинги на:</h3>
          <Link href='/pages' className={styles.feedback_brief_link}>
            разработку логотипа
            <ArrowLink height={12} width={12} />
          </Link>
          <Link href='/pages' className={styles.feedback_brief_link}>
            разработку сайта
            <ArrowLink height={12} width={12} />
          </Link>
          <Link href='/pages' className={styles.feedback_brief_link}>
            разработку лендинга
            <ArrowLink height={12} width={12} />
          </Link>
        </div>
      </div>

    </section>
  )
}
