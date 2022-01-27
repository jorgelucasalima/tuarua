import styles from './styles.module.scss'
import {FiSearch} from 'react-icons/fi';

export function ButtonPesquisarCep() {
  return (
    <div className={styles.buttonContent}>
      <input type="text" placeholder="Digite seu CEP"/>
      <button type="button">
        <FiSearch/>
      </button>
    </div>
  )
}