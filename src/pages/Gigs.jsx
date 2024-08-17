import styles from './Gigs.module.css'
import { Ticket } from '@phosphor-icons/react'

export default function Gigs() {
  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <h2>ACOMPANHE · GIGS</h2>

        <div className={styles.lista}>
          <div className={styles.gigs}>
            <div className={styles.fotoGigs}>
              <img
                src=""
                alt=""
              />
            </div>

            <div className={styles.info}>
              <div className={styles.dataGigs}>
                <p>20 ABRIL</p>
                <h2>NOME DO FESTIVAL</h2>
              </div>

              <div className={styles.localGigs}>
                <p>Curitiba-PR 🇧🇷</p>
              </div>

              <button className={styles.ticketGigs}>
                <a href="#">
                  Ingressos <Ticket size={32} />
                </a>
              </button>
            </div>
          </div>

          <div className={styles.gigs}>
            <div className={styles.fotoGigs}>
              <img
                src=""
                alt=""
              />
            </div>
            <div className={styles.info}>
              <div className={styles.dataGigs}>
                <p>20 ABRIL</p>
                <h2>NOME DO FESTIVAL</h2>
              </div>
              <div className={styles.localGigs}>
                <p>Curitiba-PR 🇧🇷</p>
              </div>
              <button className={styles.ticketGigs}>
                <a href="#">
                  Ingressos <Ticket size={24} />
                </a>
              </button>
            </div>
          </div>
          <div className={styles.gigs}>
            <div className={styles.fotoGigs}>
              <img
                src=""
                alt=""
              />
            </div>
            <div className={styles.info}>
              <div className={styles.dataGigs}>
                <p>20 ABRIL</p>
                <h2>NOME DO FESTIVAL</h2>
              </div>
              <div className={styles.localGigs}>
                <p>Curitiba-PR 🇧🇷</p>
              </div>
              <button className={styles.ticketGigs}>
                <a href="#">
                  Ingressos <Ticket size={24} />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
