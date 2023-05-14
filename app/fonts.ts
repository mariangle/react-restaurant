import { Cormorant_Upright, Cormorant_Garamond } from 'next/font/google';
 
export const upright = Cormorant_Upright({
  subsets: ['latin'],
  display: 'swap',
  weight: "700",
  variable: "--font-upright"
});

export const garamond = Cormorant_Garamond({
    subsets: ['latin'],
    display: 'swap',
    weight: "500",
    variable: "--font-garamond"
  });