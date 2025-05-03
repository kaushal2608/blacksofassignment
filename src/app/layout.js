import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Manrope } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import StoreProvider from "@/components/globalfiles/storeprovider";
import AuthInitializer from "@/components/globalfiles/authInitializer";
import NavigationBar from "@/components/globalfiles/uifiles/Navbar";
import Footer from "@/components/globalfiles/uifiles/footer";

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});


export const metadata = {
  title: "BlackSof",
  description: "Just a assignmet of Blacksof.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.variable} suppressHydrationWarning>
      <StoreProvider>
      <AuthInitializer />
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
       <ThemeProvider theme={theme}>
        <NavigationBar/>
        {children}
        <Footer/>
        </ThemeProvider>
       </AppRouterCacheProvider>
       </StoreProvider>
      </body>
    </html>
  );
}
