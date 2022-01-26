import '../../styles/global.scss'
import { Header } from '../components/Header'
import {ButtonPesquisarCep} from '../components/ButtonPesquisarCep'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <ButtonPesquisarCep/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
