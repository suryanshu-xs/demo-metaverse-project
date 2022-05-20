import Head from 'next/head'
import { useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Dashboard from '../components/Dashboard'

const styles = {
  wrapper: "bg-black-rgba min-h-screen flex flex-col",
  bodyContainer: 'relative flex-1 md:flex'
}

const Home = () => {

  const [isMenuOn, setIsMenuOn] = useState(false)

  return (
    <div className={styles.wrapper} >
      <Head>
        <title>Portfolio Dashboard</title>
        <meta name="description" content="A Dashboard App for Crypto & NFT Holders." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header setIsMenuOn={setIsMenuOn} isMenuOn={isMenuOn} />

      <div className={styles.bodyContainer} >
        <Navbar isMenuOn={isMenuOn} />
        <Dashboard />
      </div>



    </div>
  )
}

export default Home