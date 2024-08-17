import { Play, SpeakerHigh } from '@phosphor-icons/react'

import styles from './Discografia.module.css'

export default function Discografia() {
  return (
    <div className={styles.content}>
      <div className={styles.hero}></div>
      <div className={styles.discografia}>
        <div className={styles.panel}>
          <p>Oficial Website</p>
          <p>©</p>
          <p>2024</p>
          <p>Progressive Trance</p>
          <p>|</p>
          <p>Psy Trance</p>
        </div>

        <div className={styles.spotify}>
          <h2>Discografia</h2>

          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.fotoMusic}></div>
              <div className={styles.descMusic}>
                <h2>Nome da música</h2>
                <p>Produção</p>
              </div>
              <div className={styles.player}>
                <Play
                  size={24}
                  color={'#fff'}
                />
                <p>0:00/1:00:00</p>
                <div className={styles.bar}></div>
                <SpeakerHigh
                  size={24}
                  color={'#fff'}
                />
              </div>
              <div className={styles.cta}>
                <img src="../src/assets/images/spotify.png" />
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.fotoMusic}></div>
              <div className={styles.descMusic}>
                <h2>Nome da música</h2>
                <p>Produção</p>
              </div>
              <div className={styles.player}>
                <Play
                  size={24}
                  color={'#fff'}
                />
                <p>0:00/1:00:00</p>
                <div className={styles.bar}></div>
                <SpeakerHigh
                  size={24}
                  color={'#fff'}
                />
              </div>
              <div className={styles.cta}>
                <img src="../src/assets/images/spotify.png" />
              </div>
            </div>
            
            <div className={styles.card}>
              <div className={styles.fotoMusic}></div>
              <div className={styles.descMusic}>
                <h2>Nome da música</h2>
                <p>Produção</p>
              </div>
              <div className={styles.player}>
                <Play
                  size={24}
                  color={'#fff'}
                />
                <p>0:00/1:00:00</p>
                <div className={styles.bar}></div>
                <SpeakerHigh
                  size={24}
                  color={'#fff'}
                />
              </div>
              <div className={styles.cta}>
                <img src="../src/assets/images/spotify.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
