import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import styles from '../styles/pages/Services.module.css'

export default function services() {
  return (
    <>
      <Head>
        <title>Agency | Services</title>
      </Head>
      <Header/>
        <main className={styles.servicesContainer}>
          <h1>O que fazemos</h1>

          <div className={styles.cardContainer}>
            <div className={styles.card}>
              <i className="fab fa-buffer"></i>
              <h3>Desenvolvimento full stack</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe harum amet, quia similique quam, aliquam possimus accusantium ipsum consequuntur error architecto obcaecati maiores commodi. Facere modi nemo optio deserunt! Labore!
              </p>
            </div>

            <div className={styles.card}>
              <i className="fas fa-bolt"></i>
              <h3>Sites leves e rápidos</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe harum amet, quia similique quam, aliquam possimus accusantium ipsum consequuntur error architecto obcaecati maiores commodi. Facere modi nemo optio deserunt! Labore!
              </p>
            </div>

            <div className={styles.card}>
              <i className="fas fa-cart-plus"></i>
              <h3>E-comerce</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe harum amet, quia similique quam, aliquam possimus accusantium ipsum consequuntur error architecto obcaecati maiores commodi. Facere modi nemo optio deserunt! Labore!
              </p>
            </div>

            <div className={styles.card}>
              <i className="fas fa-chart-line"></i>
              <h3>SEO</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe harum amet, quia similique quam, aliquam possimus accusantium ipsum consequuntur error architecto obcaecati maiores commodi. Facere modi nemo optio deserunt! Labore!
              </p>
            </div>

            <div className={styles.card}>
              <i className="fas fa-chess-pawn"></i>
              <h3>Estratégias de Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe harum amet, quia similique quam, aliquam possimus accusantium ipsum consequuntur error architecto obcaecati maiores commodi. Facere modi nemo optio deserunt! Labore!
              </p>
            </div>

            <div className={styles.card}>
              <i className="fas fa-cloud"></i>
              <h3>Hospedagem AWS/Azure</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe harum amet, quia similique quam, aliquam possimus accusantium ipsum consequuntur error architecto obcaecati maiores commodi. Facere modi nemo optio deserunt! Labore!
              </p>
            </div>
          </div>
        </main>

      <Footer/>
    </>
  )
}
 