import Head from 'next/head';
import { Open_Sans, Lato } from '@next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import pink_strip from './pink_strip.png'

const open_sans = Open_Sans({subsets: ['latin'], variable: '--font-open-sans'});
export default function Home() {
  return (
    <>
      <Head>
        <title>Dignity</title>
        <meta name="description" content="Send a shoutout to your friends, coworkers, and community. Build strong communities and positive workplace culture by spreading gratitude." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${open_sans.variable} font-sans flex flex-col justify-evenly bg-gradient-to-b from-white to-pink-200`}>
        <div className={`flex items-center justify-evenly flex-row h-fit bg-gradient-to-r from-white to-yellow-100`}>
          <div className={`flex flex-1 flex-row items-center text-4xl pl-10 p-5`}>
            <h1 className={`text-left flex-1 text-4xl font-bold`}>Dignity</h1>
          </div>
          <div className={`flex flex-grow flex-1 flex-row items-right pr-10 p-5 justify-end`}>
            <Link href='/resources' className={`pl-10 w-fit`}>
              <h1 className={`font-semibold text-l text-right`}>RESOURCES</h1>
            </Link>
            <Link href='/donate' className={`w-fit pl-10`}>
              <h1 className={`font-semibold text-l text-right`}>DONATE</h1>
            </Link>
          </div>
        </div>

        <div className={`flex text-zinc-900 flex-col w-full pl-10 pr-10`}>
          <h1 className={`text-4xl pl-10 pr-10 pt-10 pb-7 font-medium`}>WHAT WE DO</h1>
          <h2 className={`text-2xl pl-10 w-6/12`}>At Dignity, we are committed to providing menstrual products, education, and advocacy to support women and girls. Since our inception in 2024, we have partnered with various local organizations to distribute dignity bags filled with sanitary pads, tampons, and educational materials.</h2>
          <Link href='/mission'>
            <h1 className={`pl-10 pt-8 font-bold text-2xl underline text-pink-600`}>LEARN MORE</h1>
          </Link>
          <Image src={pink_strip} alt="None" className={`align-center w-full h-10 mb-10 mt-10`}></Image>
        </div>
        <div className={`flex text-zinc-900 flex-col w-full pl-10 pr-10`}>
          <h1 className={`text-4xl pl-10 pr-10 pt-10 pb-7 font-medium text-center`}>OUR GOALS</h1>
          <div className={`flex flex-row`}>
            <div className={`flex-1 m-8 bg-pink-300 rounded-xl`}>
              <h1 className={`text-2xl text-center font-bold p-5`}>PROVIDE</h1>
              <h2 className={`text-xl p-5`}>Supply menstrual products to those in need.</h2>
              <Link href='/donate'>
                <h1 className={`pb-5 pr-5 pl-5 font-bold text-2xl underline text-center text-pink-600`}>DONATE</h1> 
              </Link>
            </div>
            <div className={`flex-1 m-8 bg-pink-300 rounded-xl`}>
              <h1 className={`text-2xl text-center font-bold p-5`}>EDUCATE</h1>
              <h2 className={`text-xl p-5`}>Raise awareness and reduce the stigma surrounding menstruation.</h2>
              <Link href='/resources'>
                <h1 className={`pb-5 pr-5 pl-5 font-bold text-2xl underline text-center text-pink-600`}>LEARN MORE</h1> 
              </Link>
            </div>
            <div className={`flex-1 m-8 bg-pink-300 rounded-xl`}>
              <h1 className={`text-2xl text-center font-bold p-5`}>ADVOCATE</h1>
              <h2 className={`text-xl p-5`}>Push for policy changes to ensure menstrual products are accessible and affordable for all.</h2>
            </div>
          </div>
          <Image src={pink_strip} alt="None" className={`align-center w-full h-10 mb-10 mt-10`}></Image>
        </div>
        <div className={`flex flex-grow text-zinc-900 flex-col w-full pr-10 pl-10`}>
          <h1 className={`text-4xl pt-10 pl-10 pr-10 pb-7 text-right font-medium`}>EVENTS</h1>
          <h2 className={`text-2xl pr-10 text-right`}>Coming soon...</h2>
          <Image src={pink_strip} alt="None" className={`align-center w-full h-10 mb-10 mt-10`}></Image>
        </div>
        <div className={`flex justify-center items-center flex-row bg-zinc-900`}>
        </div>
        <div className={`flex flex-grow text-zinc-900 flex-col w-full pl-10 pr-10 pb-10`}>
          <h1 className={`text-4xl pr-10 pb-7 pl-10 font-medium`}>JOIN US</h1>
          <h2 className={`text-2xl pl-10`}>Contact us with your inquiries or requests!</h2>
          <h2 className={`text-2xl pl-10 font-medium mt-10`}>Email: <Link href='mailto:shudignity@gmail.com' className={`underline text-pink-600`}>shudignity@gmail.com</Link></h2>
          <h2 className={`text-2xl pl-10 font-medium mt-10`}>Phone: <Link href='tel:6692045592' className={`underline text-pink-600`}>+1 (669)-204-5592</Link></h2>
          <h2 className={`text-2xl pl-10 font-medium mt-10`}>Insta: <Link href='https://instagram.com/dignitysanjose/' className={`underline text-pink-600`}>@DignitySanJose</Link></h2>
        </div>
        <div className={`flex justify-center items-center flex-row bg-zinc-900`}>
        </div>
      </main>
    </>
  )
}
