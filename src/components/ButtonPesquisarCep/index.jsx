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

  // função de consulta ao cep
  async function consultarCep(e) {
    e.preventDefault();

    //resposta do cep de acordo api 
    const response = await api.get(`${seuCep}/json/`)

    //objeto com os dados do cep
    const dados = {
      endereco: response.data.logradouro,
      bairro: response.data.bairro,
      cidade: response.data.localidade,
      estado: response.data.uf
    }

    setDadosCep(dados);
    
  }


  function mudarCep(e) {
    setSeuCep(e.target.value)
    
  }

  //jsx
  return (
    <div className={styles.buttonContent}>
      <form onSubmit={consultarCep}>
        <input 
          type="number" 
          placeholder="Digite seu CEP"
          value={seuCep}
          onChange={mudarCep}
        />
        
        <button 
          type="submit"
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
            
            <h1>Você mora em:</h1>
            <p>Endereço: {dadosCep.endereco}</p>
            <p>Bairro: {dadosCep.bairro}</p>
            <p>Cidade: {dadosCep.cidade}</p>
            <p>Estado: {dadosCep.estado}</p>

          </div>
        </Modal>
      </form>
      
    </div>
  )
}