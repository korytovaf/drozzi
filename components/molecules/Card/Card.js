import styles from './Card.module.scss'
import {useRouter} from "next/router";

export const Card = ({ card }) => {
  const router = useRouter();

  const goToCard = async () => {
    await router.push('/')
  }

  const goToTag = async (e) => {
    e.stopPropagation();
    await router.push(`#${card.tag}`);
  }

  return (
    <div onClick={goToCard} className={styles.card}>
      <div className={styles.card_img}>
        <span onClick={goToTag} className={styles.card_teg}>{ card.tag }</span>
      </div>
      <div>
        <h3 className={styles.card_title}>{ card.title }</h3>
        <p className={styles.card_description}>{ card.description }</p>
      </div>
    </div>
  )
}
