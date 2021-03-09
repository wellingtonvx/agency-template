import styles from '../styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerContainer}>
          <div className={styles.descContainer}>
            <h3 className={styles.footerTitle}>Agency</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque maiores nobis harum nemo beatae illum dolorum. Aliquam, repudiandae eos animi exercitationem ratione beatae laborum non neque distinctio numquam ullam corporis?
            </p>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.containerList}>
              <p className={styles.footerTitle}>Links</p>
              <ul>
                <li>
                  <a href="#">Base de Conhecimento</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
                <li>
                  <a href="#">Últimos Projetos</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Contatos</a>
                </li>
              </ul>
            </div>
            <div className={styles.containerList}>
              <p className={styles.footerTitle}>Links</p>
              <ul>
                <li>
                  <a href="#">Base de Conhecimento</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
                <li>
                  <a href="#">Últimos Projetos</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Contatos</a>
                </li>
              </ul>
            </div>
            <div className={styles.containerList}>
              <p className={styles.footerTitle}>Links</p>
              <ul>
                <li>
                  <a href="#">Base de Conhecimento</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
                <li>
                  <a href="#">Últimos Projetos</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Contatos</a>
                </li>
              </ul>
            </div>
           
          </div>
      </div>

      <div className={styles.copyRight}>
            <p>&copy; 221 Agency</p>
            <p>A melhor agência web para seus projetos</p>
          </div>
    </footer>
  )
}
