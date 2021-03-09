import Link from 'next/link'
import React from 'react'

import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <div className={styles.navContainer}>
    <Link href="/">
      <i className="fas fa-brain">
        Agency
      </i>
    </Link>
    
    <nav >
      <ul className={styles.navbarContainer}> 
          <li><Link href="/">Home</Link></li>
          <li><Link href="services">Serviços</Link></li>
          <li><Link href="jobs">Projetos</Link></li>
          <li><Link href="#">Contato</Link></li>
          <li>
            <button className={styles.btn}>
              <Link href="login">Entrar</Link>
            </button>
          </li>
          <li>
            <button className={styles.btn}>
              <Link href="register">Registrar</Link>
            </button>
          </li>
      </ul>
    </nav>

  </div>
  )
}
