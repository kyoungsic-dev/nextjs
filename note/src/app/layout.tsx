import Link from 'next/link'
import './globals.css'
import styles from './layout.module.scss'
import { Metadata } from 'next'
import {Open_Sans} from '@next/font/google'
import {Nanum_Gothic} from '@next/font/google'

const sans = Open_Sans({subsets: ['latin']})
const gothic = Nanum_Gothic({subsets: ['latin'], weight: '700'})

export const metadata: Metadata = {
  title: 'Note',
  description: 'Note App',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={sans.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <Link href='/'>
            <h1 className={styles.headerTit}>Demo Note</h1>
          </Link>
          <nav className={styles.nav}>
            <Link href='/product'>Products</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
