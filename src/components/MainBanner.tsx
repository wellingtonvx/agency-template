import styles from '../styles/components/Header.module.css'
import Header from './Header'

export default function MainBanner() {

  return (
    <header className={styles.mainBanner}>
      <Header/>
      <div className={styles.titleContainer}>
          <h2>Nós Desenvolvemos</h2>
          <h1>Poderosas Experiências</h1>
          <a href="#" > Fazer Orçamento </a>
        </div>
    </header>
  )
}

