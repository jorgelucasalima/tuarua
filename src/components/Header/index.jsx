import styles from './styles.module.scss';
import { FiMapPin } from "react-icons/fi"

export function Header() {

  return(
    <header className={styles.headerContent}>
        <nav className={styles.navContent}>
            <FiMapPin size={28}/> 
            <h1>TuaRua</h1>
        </nav>
    </header>
  )

}