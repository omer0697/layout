import { Button } from '@mui/material';
import {Dialog} from '@mui/material';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';
import { LoadingButton } from '@mui/lab';

export function CommonButton({text, ...props }) {
  return (
    <LoadingButton
      variant="contained"
      {...props}
      color="success"
    >
      {text}
    </LoadingButton>
  );
}

export function onClickCallingPhone() {
  window.open('tel:05354231662');
}

export function TextFieldForm({value,label,setFunction, ...props }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      size="small"
      onChange={(e) => setFunction(e.target.value)}
      {...props}
    />
  );
}

export function DialogMenu({open,handleClose,children, ...props }) {
  const [formData, setFormData] = useState({
    name: '',
    eposte: '',
    telefon: '',
    mesaj: '',
    onay: true,
  });

  return (
    <Dialog
      variant="contained"
      open={open}
      onClose={handleClose}
      {...props}
    >
      <div className='flex flex-col'>
        <div className='border-b-2 bg-green-500 text-white flex flex-col gap-2 pt-5 pb-6 pl-7 pr-7'>
          <p>Projenize Uygın Jeneratörü Bulmak İçin Lütfen Bize Ulaşın.</p>
          <p>Size Uygun Fiyatlarla En Kısa Sürede Teslimat.</p>
        </div>
        <div className='flex flex-col gap-6 p-7'>
          <TextFieldForm
            label="Ad Soyad"
            value={formData.name}
            setFunction={(value) => setFormData({ ...formData, name: value })}
          />
          <TextFieldForm
            label="E-Posta"
            value={formData.eposte}
            setFunction={(value) => setFormData({ ...formData, eposte: value })}
          />
          <TextFieldForm
            label="Telefon"
            value={formData.telefon}
            setFunction={(value) => setFormData({ ...formData, telefon: value })}
          />
          <TextFieldForm
            label="Mesaj"
            multiline
            rows={4}
            value={formData.mesaj}
            setFunction={(value) => setFormData({ ...formData, mesaj: value })}
          />
        </div>
        <div className='flex flex-col  pl-7 mt-2 pb-6 gap-3'>
          <div className='flex items-center pr-5'>
            <Checkbox 
              checked={formData.onay}
              onChange={(e) => setFormData({ ...formData, onay: e.target.checked })}
              inputProps={{ 'aria-label': 'controlled' }}
              color="success"
            />
            <p className='text-xs font-sans text-[#bebfc3]'>Bilgilenme ve İletişim Formu Kapsamında Kişisel Verilerimi İşleyebilirsiniz.</p>
          </div>
          <CommonButton
            text="Gönder"
            color="success"
            sx={{backgroundColor: "#00b140"}}
            disabled={formData.name === '' || formData.eposte === '' || formData.telefon === '' || formData.mesaj === '' || formData.onay === false}
            className='w-36 bg-green-600 hover:bg-green-400'
            onClick={() => {
              console.log(formData);
              handleClose();
              setFormData({
                name: '',
                eposte: '',
                telefon: '',
                mesaj: '',
                onay: true,
              });
            }}
          />
        </div>
      </div>
      
    </Dialog>
  );
}

export function CommonLink({href, children,  ...props}){
  return (
    <Link href={href} className="hover:text-green-500" {...props}>
      {children}
    </Link>
  )
}


