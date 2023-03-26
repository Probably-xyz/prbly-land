import Head from 'next/head'
import Nav from '@/components/Nav'
import Marquee from '@/components/Marquee'
import Boxes from '@/components/Boxes'

export default function Home() {
  return (
    <>
      <Head>
        <title> Prbly </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="./logo.png"/>
      </Head>
  
    <Nav/> 

   
    <div className="mx-auto flex align-middle max-w-screen-2xl">
        <h1 className="text-8xl leading-tight text-prbly-black mx-auto align-middle p-52 pb-36 text-center font-Display font-Main font-extralight"> lorem ipsum <span className="text-prbly-main"> lorem </span> ipsum <br/> lorem  </h1>
    </div>


    <Marquee />


    <div className="mx-auto flex flex-col max-w-screen-2xl p-40 pb-36">
          <h1 className="text-prbly-main text-base font-Sub mx-auto"> Solutions </h1>
          <h1 className='text-7xl leading-tight font-Main font-extralight text-prbly-black mx-auto ml-20'>
            Simple yet effective
          </h1>
          <h1 className='text-7xl leading-tight font-Main font-extralight text-prbly-black mx-auto pl-80 mt-5'>
            prbly tagline yes
          </h1>
          <Boxes/>
    </div>

   

    <br/>
    <br/>
    <br/>
   

    </>
  )
}


