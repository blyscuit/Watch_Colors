import Layout from "../sections/Layout";
import { colors } from "../data/data";
import Head from 'next/head';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';
import { motion } from 'framer-motion';

export const getStaticProps = async () => {
  return {
    props: {
      colors: colors
    }
  }
}

export default function Home({ colors }) {
  const notify = () => toast("Copied "+likes, { autoClose: 2000, className:"bg-gray-900" });
  
  const [likes, setLikes] = React.useState("");
  

  const cardVariants = {
    offscreen: {
      opacity: 0.2,
      scale: 0.9
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const textVariants = {
    offscreen: {
      opacity: 0.2,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  function handleClick(color) {
    setLikes(color)
  }

  function handleCopy() {
    navigator.clipboard.writeText(likes)
    notify()
  }

  return (
    <div>
      <Head>
        <title>Apple Watch Face Colors</title>
        <meta name="description" content="Color Palletes created from Apple Watch Face Colors" />
        <meta name="google-site-verification" content="_ucuBoWtz2ZuQc_hhg2xFtORliTaRhAesQ5-YP4MnOY" />
      </Head>
      {/* Hero Section  */}

      <div style={{height: "100vh", overflowY: "auto"}} className="snap-y w-full absolute overflow-x-hidden " >
      <section className="flex flex-col space-y-10 mt-12 sm:mt-24 md:mt-32">
        {/* Headlines */}

        <h2 className="text-3xl text-center leading-normal sm:text-6xl font-thin  ">Face Colors</h2>

      <div className="snap-y pb-64 ">
        {colors.map((d) => (

    <motion.div
    key={d}
    className="card-container "
    initial="offscreen"
    whileInView="onscreen"
    margin="-200px 0px -200px 0px"
    viewport={{ once: false, amount: 0.8 }}
  >
      <div className="snap-center py-12" key={d.id}>
        <motion.div variants={textVariants}>
            <p className="text-xl sm:text-md px-4 sm:px-12 pb-8 ">{d.name}</p>
        </motion.div>

            <motion.div variants={cardVariants} className="grid grid-cols-4 sm:grid-cols-6 gap-12 pt-4 pb-8 px-4 sm:px-12 overflow-x-auto hover:overflow-x-scroll">
            {d.colors.map((color) => (
              color == likes ?
                <button onClick={() => handleClick(color)} key={color} style={{borderColor: color, backgroundColor: "transparent" }} className="rounded-full h-16 w-16 border border-8"></button>
                :
                <button onClick={() => handleClick(color)} key={color} style={{backgroundColor: color }} className="rounded-full h-16 w-16"></button>
            ))}
            </motion.div>

      </div>
    </motion.div>
        ))}
        <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="text-center mb-2 text-gray-500">
        <a href="https://github.com/blyscuit/Watch_Colors" target="_blank" rel="noreferrer">Github</a>
        <span> </span>
        <a href="https://twitter.com/blyscuit" target="_blank" rel="noreferrer">Twitter</a>
      </div>

      <div className="text-center mb-2 text-gray-500">
        <a href="https://raw.githubusercontent.com/blyscuit/Watch_Colors/main/data.json" rel="noreferrer" target="_blank">JSON</a>
      </div>
      
      <div className="text-center text-sm text-gray-500">
         &copy; {new Date().getFullYear()}   All Rights Reserved
      </div>
    </footer>
        </div>
      </section>
      <div className={
        (likes.length > 0 ? "visible " : "invisible " )+
        (likes.length > 0 ? "translate-y-0 " : "translate-y-96 " )+
      "transition ease-in-out  flex items-center flex-row fixed bottom-0 bg-gray-900 left-0 right-0 px-8 py-2 "}>
              <div className="h-8 w-8 rounded-lg" style={{backgroundColor: likes }}></div>
              <button onClick={handleCopy} className="px-6 grow text-left" >{likes}</button>
              <button onClick={handleCopy} className="btn justify-self-end">Copy</button>
      </div>
      </div>
      <ToastContainer transition={Slide} theme="dark" position="bottom-right" />
      


    </div>

  );
}