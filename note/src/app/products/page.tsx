import Link from 'next/link'
import styles from './page.module.scss'
import { getProducts } from '@/service/products'
import MeowArticle from '@/components/MeowArticle'

export default async function Products() {
  const products = await getProducts()

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <nav className={styles.nav}>
        {products.map((product, idx) => (
          <Link key={`id-${idx}`} href={`/products/${product.id}`}>
            {product.name} {product.price}
            {}
          </Link>
        ))}
      </nav>

      <MeowArticle />
    </>
  )
}
