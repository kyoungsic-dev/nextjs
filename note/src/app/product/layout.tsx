import Link from 'next/link'
import styles from './layout.module.scss'

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href='/product/women'>여성옷</Link>
        <Link href='/product/men'>남성옷</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  )
}
