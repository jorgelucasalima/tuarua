import Head from 'next/head'
import {ButtonPesquisarCep} from '../components/ButtonPesquisarCep'

export default function Home() {
  return (
    <>
      <Head>
        <title>TuaRua | Home</title>
      </Head>

      <ButtonPesquisarCep/>
    </>
  )
}
