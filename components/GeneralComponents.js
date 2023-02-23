import { Button } from '@mui/material';

export function CommonButton({text, ...props }) {
  return (
    <Button
      variant="contained"
      {...props}
    >
      {text}
    </Button>
  );
}

export function onClickCallingPhone() {
  window.open('tel:05354231662');
}
