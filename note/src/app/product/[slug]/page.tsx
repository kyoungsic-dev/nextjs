import NotFound from '@/app/not-found'
import { getProduct, getProducts } from '@/service/products'
import Image from 'next/image'

interface Props {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: params.slug
  }
}

export const revalidate = 3

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug)
  if (!product) return <NotFound />

  return (
    <>
      <h1>{product.name} 제품 상세 페이지</h1>
      <div>
        <Image src={`/images/${product.image}`} alt={product.name} width={300} height={300}/>
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const product = await getProducts()
  return product.map(product => ({ slug: product.id }))
}
