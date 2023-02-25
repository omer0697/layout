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
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DialogMenu open={diologMenuOpen} handleClose={() => setDiologMenuOpen(false)}/>
      <div className='flex flex-col min-h-screen justify-between'>
        <header className='border-b-2 bg-gray-100'>
            <div className='absolute border-2 w-full flex justify-between px-10 h-10 items-center'>
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
                        className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-full"
                        endIcon={<ErrorOutlineIcon />}
                        size="small"
                        onClick={() => setDiologMenuOpen(true)}    
                    />
                </div>
            </nav>
        </header>
        <main className='container m-auto mt-4'>
            {children}
            <div className='cursor-pointer fixed z-20  bottom-20 right-14 flex flex-col items-center animate-bounce gap-2 text-green-500 hover:text-green-300'>
                <WhatsAppIcon style={{fontSize:"42px"}} onClick={() => window.open('https://wa.me/905354231662')}/>
                <p className='text-xs'>Hızlı Teklif Almak İçin Tıklayın</p>
            </div>
        </main>
        <footer className='flex justify-center border-t-2 border-gray-300 h-20'>
            <p>&copy; 2023 My Website, Inc.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;