import { useNavigate } from 'react-router-dom'
import styles from './Header.module.css'
import { List } from '@phosphor-icons/react'

export default function Header() {
  const navigate = useNavigate()

  function handleHome() {
    navigate('/')
  }
  function handleGigs() {
    navigate('/gigs')
  }
  function handleDiscografia() {
    navigate('/discografia')
  }
  function handleContato() {
    navigate('/contato')
  }

  return (
    <header>
      <div className={styles.header}>
        <img src="../src/assets/images/logoH.svg" />
        <div className={styles.nav}>
          <button onClick={handleHome}>Inicío</button>
          <button onClick={handleGigs}>Gigs</button>
          <button onClick={handleDiscografia}>Discografia</button>
          <button onClick={handleContato}>Contato</button>
          <div className={styles.list}>
            <List size={32} />
          </div>
        </div>
      </div>
    </header>
  )
}
