import styles from './Portfolio.module.scss'
import {Arrow} from "@/components/atoms/icons/Arrow";
import {Card} from "@/components/molecules/Card/Card";
import {Button} from "@/components/atoms/Button/Button";


const cards = [
  {
    link: '/',
    title: '«Натали» — Ивановский трикотаж оптом',
    description: 'Редизайн сайта, поддержка сайта',
    tag: 'МАРКЕТИНГ'
  },
  {
    link: '/',
    title: 'Podium — эротический массаж',
    description: 'Разработка, редизайн',
    tag: 'ВЕБ РАЗРАБОТКА'
  },
  {
    link: '/',
    title: 'Аудит отдела маркетинга и продаж для Название бренда длинное название',
    description: 'Аудит, маркетинг сюда кратко теги',
    tag: 'ВЕДЕНИЕ РЕКЛАМНОЙ КОМПАНИИ'
  },
  {
    link: '/',
    title: 'Аудит отдела маркетинга и продаж для Название бренда',
    description: 'Аудит, маркетинг сюда кратко теги',
    tag: 'ВЕДЕНИЕ ГРУПП В СОЦ СЕТЯХ'
  },
]

export const Portfolio = () => {
  return (
    <section id='portfolio' className={styles.portfolio_container}>

      <div className={styles.portfolio_header}>
        <h2>Портфолио</h2>
        <button className={styles.portfolio_header_btn}>
          <span>Смотреть все</span>
          <Arrow height={16} />
        </button>
      </div>

      <div className={styles.cards_wrapper}>
        {cards.map(card => (
          <Card key={card.title} card={card} />
        ))}
      </div>

      <div className={styles.portfolio_btn}>
        <Button transition>
          Все кейсы
        </Button>
      </div>

    </section>
  )
}
