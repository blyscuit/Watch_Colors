import Layout from "../sections/Layout";
import { colors } from "../data/data";
import Head from 'next/head'

export const getStaticProps = async () => {
  return {
    props: {
      colors: colors
    }
  }
}

export default function Home({ colors }) {
  return (
    <Layout>
      <Head>
        <title>Apple Watch Face Colors</title>
        <meta name="description" content="Color Palletes created from Apple Watch Face Colors" />
      </Head>
      {/* Hero Section  */}

      <section className="flex flex-col  space-y-10 mt-12 sm:mt-24 md:mt-32 pb-24">
        {/* Headlines */}
        
        <h2 className="text-3xl text-center leading-normal sm:text-6xl font-bold  ">Face Colors</h2>

        {colors.map((d) => (
          <>
            <p className="text-xl sm:text-md px-12 ">{d.name}</p>
            
            <div className="grid grid-cols-6 gap-12 pt-4 pb-8 px-12 overflow-x-auto hover:overflow-x-scroll">
            {d.colors.map((color) => (
                <div style={{backgroundColor: color }} className="rounded-full h-16 w-16"></div>
            ))}
              </div>

          </>
        ))}
      </section>
    </Layout>
  );
}