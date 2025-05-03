'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVarPrefix: 'mui', // optional
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-manrope)',
  },
});

export default theme;
