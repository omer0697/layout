import Head from 'next/head';
import { CommonButton, onClickCallingPhone, DialogMenu, CommonLink } from './GeneralComponents';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';
import { GoogleMap, LoadScript, MarkerF} from "@react-google-maps/api";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const API_KEY="AIzaSyAVVH5sVXwi2-pZCPTbRwyRHOlGRusS4Rc";

function handleMarkerClick(){
    window.open('https://www.google.com/maps/dir/?api=1&destination=39.979286,32.741264')
  }

const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: 39.979286,
    lng: 32.741264,
  };

  const position = {
    lat: 39.979286,
    lng: 32.741264,
  };


const LinkData = [
    {
        name: 'Hakkımızda',
        href: '/about',
    },
    {
        name: 'Hizmetlerimiz',
        href: '/services',
    },
    {
        name: 'Ürünlerimiz',
        href: '/products',
    },
    {
        name: 'Referanslarımız',
        href: '/references',
    },
    {
        name: 'İletişim',
        href: '/contact',
    },
];

const Layout = ({ children, pageTitle, pageDescription }) => {
    const [diologMenuOpen, setDiologMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-50EHG23M10"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-50EHG23M10');
            `,
          }}
        />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
      </Head>
      <DialogMenu open={diologMenuOpen} handleClose={() => setDiologMenuOpen(false)}/>
      <div className='flex flex-col justify-between'>
        <header className='border-b-2 bg-[#1d2226] text-white'>
            <div className='absolute border-b-2 w-full flex justify-between px-10 h-10 items-center'>
                <div className=' text-xs font-bold flex items-center p-[0.17rem] gap-5'>
                    <div className='flex items-center gap-1 pl-28 '>
                        <AccessTimeIcon className='text-base' />
                        <p>Mesai Saatleri: Pazartesi - Cumartesi 08:00 - 19:00</p>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-green-500' onClick={onClickCallingPhone}>
                        <PhoneIphoneIcon className='text-base' />
                        <p>Telefon: 0535 423 16 62</p>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-green-500' onClick={() => window.open('mailto:info@ankarajeneratör.com')}>
                        <AttachEmailIcon className='text-base' />
                        <p>E-Posta: info@ankarajeneratör.com</p>
                    </div>
                </div>
                <div className='flex'>
                    <WhatsAppIcon className='text-2xl mx-2 cursor-pointer hover:text-green-500' onClick={() => window.open('https://wa.me/905354231662')}/>
                    <InstagramIcon className='text-2xl mx-2 cursor-pointer hover:text-red-500' onClick={() => window.open('https://www.instagram.com/ankarajeneratör/')}/>
                    <FacebookIcon className='text-2xl mx-2 cursor-pointer hover:text-blue-500' onClick={() => window.open('https://www.facebook.com/ankarajeneratör/')}/>
                    <LinkedInIcon className='text-2xl mx-2 cursor-pointer hover:text-blue-500' onClick={() => window.open('https://www.linkedin.com/company/ankarajeneratör/')}/>
                </div>
            </div>
            <nav className='flex pt-14 h-24 gap-3 justify-between mx-40 font-sans font-normal'>
                <CommonLink href="/" className='text-xl font-bold animate-pulse'>
                    Ankara Jeneratör
                </CommonLink>
                <div className='flex gap-7  font-sans text-sm font-bold'>
                    {LinkData.map((link, index) => (
                        <CommonLink href={link.href} key={index} className='hover:text-green-500'>
                            {link.name}
                        </CommonLink>
                    ))}
                </div>
                <div className="animate-bounce">
                    <CommonButton 
                        text="Teklif Al" 
                        endIcon={<ErrorOutlineIcon />}
                        size="small"
                        color="success"
                        style={{backgroundColor: "#00b140"}}
                        onClick={() => setDiologMenuOpen(true)}    
                    />
                </div>
            </nav>
        </header>
        <main className='w-full h-full'>
            {children}
            <div 
                className='cursor-pointer fixed z-20  bottom-44 right-14 flex flex-col items-center animate-bounce gap-2 text-green-500 hover:text-green-300' 
                onClick={() => window.open('https://wa.me/905354231662')}
            >
                <WhatsAppIcon style={{fontSize:"42px"}}/>
                <p className='text-xs'>Hızlı Teklif Almak İçin Tıklayın</p>
            </div>
        </main>
        <footer className=' flex flex-col items-center border-t-2 border-gray-300 h-72 bg-gray-900 text-white justify-end bottom-0 w-full'>
            <div className='w-full h-full flex flex-row'>
                <div className='w-full h-full basis-1/3 pr-4 border-l-2 border-white'>
                    <LoadScript googleMapsApiKey={API_KEY}>
                        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
                            <MarkerF position={position} onClick={handleMarkerClick} title="Ankara Jenerratör" />
                        </GoogleMap>
                    </LoadScript>
                </div>
                <div className='basis-1/3 pt-10 pl-10'>
                    <p className='text-2xl font-bold'>Ofisimiz</p>
                    <div className='flex items-center gap-1 '>
                        <LocationOnIcon className='text-base' />
                        <p>Adres: 06530 Ostim/Ankara</p>
                    </div>
               </div>
                <div className='basis-1/3 pl-10 pt-8'>
                    <p>Ankara Jeneratör</p>
                    <div className='flex items-center gap-1 '>
                        <AccessTimeIcon className='text-base' />
                        <p>Mesai Saatleri: Pazartesi - Cumartesi 08:00 - 19:00</p>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-green-500' onClick={onClickCallingPhone}>
                        <PhoneIphoneIcon className='text-base' />
                        <p>Telefon: 0535 423 16 62</p>
                    </div>
                    <div className='flex items-center gap-1 cursor-pointer hover:text-green-500' onClick={() => window.open('mailto:info@ankarajeneratör.com')}>
                        <AttachEmailIcon className='text-base' />
                        <p>E-Posta: info@ankarajeneratör.com</p>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-white w-full items-center justify-center text-center pb-3'>
                <p>&copy; 2021 Ankara Jeneratör Tüm Hakları Saklıdır | <a href="https://www.ankarajenerator.com.tr">Ankara Jeneratör</a></p>
            </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
