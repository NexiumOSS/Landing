import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './theme-provider'

import Head from 'next/head'

const inter = Inter({ 
  weight: ['100', '200', '300', '600', '400', '700', '900'],
  subsets: ['latin'] 
})

export const metadata = {
  title: "Home - Nexium",
  description: 'Nexium is your go-to platform for finding skilled moderators and expert developers who can elevate your Discord server to new heights. Whether you’re building a thriving community or developing a groundbreaking project, Nexium bridges the gap between your needs and the perfect professionals to fulfill them.',
  openGraph: {
    title: 'Nexium',
    description: 'Nexium is your go-to platform for finding skilled moderators and expert developers who can elevate your Discord server to new heights. Whether you’re building a thriving community or developing a groundbreaking project, Nexium bridges the gap between your needs and the perfect professionals to fulfill them.',
    type: 'website',
    locale: 'en_US',
    url: 'https://nexisite.xyz',
    images: [{
      url: '/logo.png'
    }]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />        
      </Head>
      <body className={ `${inter.className} bg-gray-200	min-h-screen dark:bg-[#0d1117] `}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>          
          <main className='main'>{children}</main>
        </ThemeProvider>          
      </body>
    </html>
  )
}
