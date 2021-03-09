import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from '../styles/pages/Jobs.module.css'

export default function jobs() {
  return (
    <>
       <Head>
        <title>Agency | Projetos</title>
      </Head>

      <Header/>

      <div className={styles.jobsContainer}>

        <h2>Alguns de nossos trabalhos</h2>

        <div className={styles.jobList}>

            <div className={styles.firstJob} id="job1">
              <div className={styles.cardCover}>
                <p className={styles.cardTitle}>Projeto 1</p>
                <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum earum consectetur eveniet iure minus sunt aspernatur iusto quisquam porro ratione aliquid sapiente nulla sit voluptate enim at, aliquam harum?
                </p>
              </div>
            </div>

            <div className={styles.otherJobsContainer}>
              <div className={styles.card} id="job2">
              <div className={styles.cardCover}>
                <p className={styles.cardTitle}>Projeto 2</p>
                <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum earum consectetur eveniet iure minus sunt aspernatur iusto quisquam porro ratione aliquid sapiente nulla sit voluptate enim at, aliquam harum?
                </p>
                </div>
              </div>

              <div className={styles.card} id="job3">
              <div className={styles.cardCover}>
                <p className={styles.cardTitle}>Projeto 3</p>
                <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum earum consectetur eveniet iure minus sunt aspernatur iusto quisquam porro ratione aliquid sapiente nulla sit voluptate enim at, aliquam harum?
                </p>
                </div>
              </div>

              <div className={styles.card} id="job4">
              <div className={styles.cardCover}>
                <p className={styles.cardTitle}>Projeto 4</p>
                <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum earum consectetur eveniet iure minus sunt aspernatur iusto quisquam porro ratione aliquid sapiente nulla sit voluptate enim at, aliquam harum?
                </p>
                </div>
              </div>

              <div className={styles.card} id="job5">
              <div className={styles.cardCover}>
                <p className={styles.cardTitle}>Projeto 5</p>
                <p className={styles.cardDescription}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nostrum earum consectetur eveniet iure minus sunt aspernatur iusto quisquam porro ratione aliquid sapiente nulla sit voluptate enim at, aliquam harum?
                </p>
                </div>
              </div>
            </div>
        </div>
      </div>

      <Footer/>
      
    </>
  )
}
