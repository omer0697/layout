import Layout from '@/components/Layout'
import React from 'react'

function about() {
  return (
    <Layout
        pageTitle='Hakkımızda'
        pageDescription='Ankara Jeneratör, Ankara ve çevresindeki müşterilerine, 24 saat kesintisiz elektrik sağlamak için jeneratör hizmeti vermektedir.'
    >
        <div className='inline-block animate-slide-in-right w-full'>
            <div className='flex flex-col items-center mx-20'>
                <h1 className='text-4xl font-bold pb-2'>Hakkımızda</h1>
                <h2 className='text-3xl pb-4'>Şirket Tarihi</h2>
                <p className='text-center leading-relaxed'>
                    Ankara jenerator, 2013 yılında kurulan bir jenerator imalat şirketidir. O zamandan beri, müşterilerimizin ihtiyaçlarını karşılayan güvenilir ve verimli jeneratörler üretmeye odaklandık. Ankara jenerator marka adı 2013'de benimsendi ve o zamandan beri, yüksek kaliteli, dayanıklı jeneratörlerle eş anlamlı hale geldi.
                </p>
                <div className='flex flex-col gap-2 mt-2 items-center'>
                    <h2 className='text-3xl pb-4'>Misyonumuz</h2>
                    <p className='text-center leading-relaxed'>Ankara jenerator, müşterilerinin ihtiyaçlarını karşılamak için en iyi jeneratörleri üretmek ve müşterilerimize en iyi hizmeti sunmak için çalışmaktadır.</p>
                    <p className='text-center leading-relaxed'>Ankara jenerator olarak, müşterilerimize en iyi ürünleri ve hizmetleri sunmaya inanıyoruz. Jeneratörlerimizin güvenilir, verimli ve uzun ömürlü olması için sıkı kalite kontrol prosedürleri uyguluyoruz ve müşteri hizmetlerimizle müşterilerimizin ihtiyaçlarına cevap veriyoruz. Ayrıca, yenilikçi tasarımlarımız ve en son teknolojileri kullanarak ürünlerimizi sürekli olarak geliştiriyoruz.</p>
                    <p className='text-center leading-relaxed'>Ankara jenerator olarak, müşteri tabanımız oldukça geniştir. Ev kullanıcılarından büyük ölçekli endüstriyel tesislere kadar, jeneratörlerimiz çeşitli sektörlere hitap ediyor. İşletmelerin sürekliliğini sağlamak için jeneratörlere ihtiyaç duyan herkes müşterilerimiz arasındadır.</p>
                    <p className='text-center leading-relaxed'>Ankara jenerator olarak, yüksek kaliteli jeneratörlerimiz ve müşteri hizmetlerimizle rakiplerimizden ayrılıyoruz. Jeneratörlerimizin dayanıklılığı, güvenilirliği ve verimliliği, müşterilerimizin ihtiyaçlarını karşılamak için tasarlanmıştır. Ayrıca, müşterilerimize özel ihtiyaçlarına uygun jeneratörler sunarak onların ihtiyaçlarını tam olarak karşılamaya çalışıyoruz.</p>
                </div>
                <div className='flex flex-col gap-2 mt-2 items-center'>
                    <h2 className='text-3xl pb-40'>Ürün Hattı</h2>
                    <p>
                    Ankara jenerator olarak, ev kullanımı için taşınabilir modellerden büyük ölçekli uygulamalar için endüstriyel jeneratörlere kadar geniş bir yelpazede jeneratörler sunuyoruz. Jeneratörlerimiz 1 kW ile 2500 kW arasında güç çıkışına sahip olup, dizel, benzinli ve doğal gazlı modellerde mevcuttur. Jeneratörlerimizin güvenilir, verimli ve kullanımı kolay olması için en son teknolojiyi kullanıyoruz.
                    </p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default about
