import {FiSearch} from 'react-icons/fi';

export function ButtonPesquisarCep() {
  return (
    <>
      <input type="text" placeholder="Digite seu CEP"/>
      <button type="button">
        <FiSearch/>
      </button>
    </>
  )
}