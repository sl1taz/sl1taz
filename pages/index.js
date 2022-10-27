import Head from 'next/head'
import Image from 'next/image'
export default function Home() {
  return (
    <div>
      <Head>
        <title>sl1taz</title>
        <link href='/logo.png' rel='shortcut icon' type='image/png' />
        <link href='/logo.png' rel='apple-touch-icon' />
      </Head>
      <div className='h-screen flex items-center justify-center bg-black'>
        <Image draggable="false" src='/logo.png' width="200" height="200" alt="sl1taz" />
      </div>
    </div>
  )
}
