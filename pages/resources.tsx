import Head from 'next/head';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import pink_strip from './pink_strip.png'

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});
export default function Resources() {
  return (
    <>
      <Head>
        <title>Dignity</title>
        <meta name="description" content="Send a shoutout to your friends, coworkers, and community. Build strong communities and positive workplace culture by spreading gratitude." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${open_sans.variable} font-sans flex flex-col justify-evenly bg-gradient-to-b from-white to-pink-100`}>
        <div className={`flex items-center justify-evenly flex-row h-fit bg-gradient-to-r from-white to-yellow-100`}>
          <Link href='/'>
            <div className={`flex flex-1 flex-row items-center text-4xl pl-10 p-5`}>
              <h1 className={`text-left flex-1 text-4xl font-bold`}>Dignity</h1>
            </div>
          </Link>
          <div className={`flex flex-grow flex-1 flex-row items-right pr-10 p-5 justify-end`}>
            <Link href='/resources' className={`pl-10 w-fit`}>
              <h1 className={`font-semibold text-l text-right`}>RESOURCES</h1>
            </Link>
            <Link href='/donate' className={`w-fit pl-10`}>
              <h1 className={`font-semibold text-l text-right`}>DONATE</h1>
            </Link>
          </div>
        </div>

        {/* <div className={`flex text-zinc-900 flex-col w-full pl-10 pr-10`}>
          <h1 className={`text-4xl pl-10 pr-10 pt-10 pb-7 font-medium`}>What We Do</h1>
          <h2 className={`text-2xl pl-10 w-6/12`}>At Dignity, we are committed to providing menstrual products, education, and advocacy to support women and girls. Since our inception in 2024, we have partnered with various local organizations to distribute dignity bags filled with sanitary pads, tampons, and educational materials.</h2>
          <Image src={pink_strip} alt="None" className={`align-center w-full h-10 mb-10 mt-10`}></Image>
        </div>
        <div className={`flex text-zinc-900 flex-col w-full pl-10 pr-10`}>
          <h1 className={`text-4xl pl-10 pr-10 pt-10 pb-7 font-medium`}>Our Goals</h1>
          <Image src={pink_strip} alt="None" className={`align-center w-full h-10 mb-10 mt-10`}></Image>
        </div>
        <div className={`flex flex-grow text-zinc-900 flex-col w-full pr-10 pl-10`}>
          <h1 className={`text-4xl pl-10 pr-10 pb-7 text-right font-medium`}>EVENTS</h1>
          <h2 className={`text-2xl pr-10 text-right`}>Coming soon...</h2>
          <Image src={pink_strip} alt="None" className={`align-center w-full h-10 mb-10 mt-10`}></Image>
        </div>
        <div className={`flex justify-center items-center flex-row bg-zinc-900`}>
        </div>
        <div className={`flex flex-grow text-zinc-900 flex-col w-full pl-10 pr-10 mb-10`}>
          <h1 className={`text-4xl pr-10 pb-7 pl-10 font-medium`}>JOIN US</h1>
          <h2 className={`text-2xl pl-10`}>Contact us with your inquiries or requests!</h2>
        </div>
        <div className={`flex justify-center items-center flex-row bg-zinc-900`}>
        </div> */}
      </main>
    </>
  )
}