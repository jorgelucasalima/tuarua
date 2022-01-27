import styles from './styles.module.scss'
import {FiSearch, FiXSquare} from 'react-icons/fi';

//import api from '../../../services/api';
import { useState } from 'react';
import Modal from 'react-modal';


export function ButtonPesquisarCep() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cep, setCep] = useState([]);

  function abrirModal(params) {
    setModalIsOpen(true);
  }

  function fecharModal() {
    setModalIsOpen(false);
  }




  return (
    <div className={styles.buttonContent}>
      <input type="text" placeholder="Digite seu CEP"/>
      
      <button 
        type="button"
        onClick={abrirModal}
      >
          <FiSearch/>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <button onClick={fecharModal}><FiXSquare/></button>
          <h1>Endereço:</h1>
          <p>Rua uruguaiana</p>
        </div>
      </Modal>
      
    </div>
  )
}