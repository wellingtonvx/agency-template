import Head from 'next/head'
import Footer from '../components/Footer'
import MainBanner from '../components/MainBanner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agency | Home</title>
      </Head>
      
      <MainBanner/>
      <Footer/>
    </div>
  )
}
