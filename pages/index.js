import Layout from '@/components/Layout'

export default function Home() {
  return (
    <>
      <Layout pageTitle="Home Page" pageDescription="This is the home page">
          <div className='flex flex-col justify-between'>
            <img src='tr.png' alt='tr' className='sticky w-full z-[-1]'/>
            <div className='heading text-white z-10 text-5xl absolute gap-10 flex flex-col item-center font-bold'>
              <h1>Ankara Jeneratör</h1>
              Doğru güç Doğru Hizmet
            </div>
          </div>
      </Layout>
    </>
  )
}
