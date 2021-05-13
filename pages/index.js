import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App + Tailwind</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className="flex justify-center pt-10">
        <Image
          className="transform skew-y-12"
          src="https://via.placeholder.com/150"
          width={150}
          height={150} 
        />
      </div>

      <div className="text-center pt-20">
        <span className="text-8xl text-white decoration-clone bg-gradient-to-b from-yellow-400 to-red-500">
            Hello World!
        </span>
      </div>
    </div>
  )
}
