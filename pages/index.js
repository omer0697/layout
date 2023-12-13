import Layout from '@/components/Layout'
import { Img } from 'react-image';
import Loading from '@/components/Loading';
import React from 'react';


export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }
  , []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Layout pageTitle="Ankara Jeneratör" pageDescription="Ankara Jeneratör Güçlü Hizmet">
          <div className='flex flex-col justify-between'>
            <Img 
              src='tr.png' alt='tr' 
              className='sticky w-full z-[-1]'
            />
            <div className='heading text-white z-10 text-5xl absolute gap-10 flex flex-col item-center font-bold'>
              <h1>Ankara Jeneratör</h1>
              Doğru güç Doğru Hizmet
            </div>
          </div>
      </Layout>
    </>
  )
}
