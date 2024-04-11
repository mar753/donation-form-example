import styles from './Header.module.scss'
import logo from '/logo.svg'

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} className="logo" alt="Logo" />
    </header>
  )
}

export default Header
