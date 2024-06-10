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
    images: ['https://cdn.discordapp.com/attachments/1132817220611866745/1249652238964621352/4FA039F4-92BC-44F0-B51F-1B7C253F4527.png?ex=666814d7&is=6666c357&hm=213c2dda6882a7ae3d101fc9ab592d30d9c070f1574b82cf37a8854619f3f720&']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexium',
    description: 'Nexium is your go-to platform for finding skilled moderators and expert developers who can elevate your Discord server to new heights. Whether you’re building a thriving community or developing a groundbreaking project, Nexium bridges the gap between your needs and the perfect professionals to fulfill them.',
    images: ['https://cdn.discordapp.com/attachments/1132817220611866745/1249823665915166751/C4A82D25-2A20-406F-994B-BED4FC6DDEB9.png?ex=6668b47e&is=666762fe&hm=a8a5a876db5e5237ba45268801c06f0f83722cccc387f91a4335b871e43a5070&'],
    site: '@NexiumApp',
    creator: '@TheRealToxicDev'
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
