import styles from './styles.module.scss'
import {FiSearch, FiXSquare} from 'react-icons/fi';

import api from '../../services/api';
import { useState } from 'react';
import Modal from 'react-modal';


export function ButtonPesquisarCep() {


  //stados
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [seuCep, setSeuCep] = useState('');
  const [dadosCep, setDadosCep] = useState([]);

  //funções
  function abrirModal() {
    setModalIsOpen(true);
  }

  function fecharModal() {
    setModalIsOpen(false);
  }

  async function consultarCep() {
    e.preventDefault();

    const response = await api.get(`${seuCep}/json/`)

    const dadosApiViaCep = {
      endereco: response.data.logradouro,
      bairro: response.data.bairro,
      cidade: response.data.localidade,
      estado: response.data.uf
    }

    setSalvarCep(dadosApiViaCep);
    setSeuCep('')
  }


  function mudarCep(e) {
    setSeuCep(e.target.value)
  }

  //jsx
  return (
    <div className={styles.buttonContent}>
      <input 
        type="number" 
        placeholder="Digite seu CEP"
        value={seuCep}
        onChange={mudarCep}
      />
      
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
          <h1>Endereço</h1>
          <p>Rua uruguaiana</p>
        </div>
      </Modal>
      
    </div>
  )
}