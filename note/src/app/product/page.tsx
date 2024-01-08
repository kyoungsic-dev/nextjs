import Link from 'next/link'
import styles from './page.module.scss'
import { getProducts } from '@/service/products'
import MeowArticle from '@/components/MeowArticle'
import clothesImage from '../../../public/images/clothes.jpg'
import Image from 'next/image'

export default async function Products() {
  // throw new Error();
  const products = await getProducts()


  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt='Clothes' />

      <nav className={styles.nav}>
        {products.map((product, idx) => (
          <Link key={`id-${idx}`} href={`/product/${product.id}`}>
            {product.name} {product.price}
            {}
          </Link>
        ))}
      </nav>

      <MeowArticle />
    </>
  )
}
