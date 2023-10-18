import clsx from 'clsx'
import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/src/theme/ThemeProvider'
import { Inter } from 'next/font/google'
import { Header } from '@/src/feature/layout/Header'
import { Footer } from '@/src/feature/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Githread',
  description: 'The social network for developer.',
}

type LayoutProps = { 
  children: React.ReactNode,
  modal?: React.ReactNode
}

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en" className='h-full'>
      <body className={clsx(inter.className, 'bg-background h-full')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='flex flex-col h-full'>
            <Header />
            <div className='flex-1 max-w-lg m-auto py-14 w-full'>{children}</div>
            <Footer />
          </div>
          {modal}
        </ThemeProvider>
      </body>
    </html>
  )
}
