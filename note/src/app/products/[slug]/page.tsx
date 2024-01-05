import NotFound from '@/app/not-found'
import { getProduct, getProducts } from '@/service/products'

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
    </>
  )
}

export async function generateStaticParams() {
  const product = await getProducts()
  return product.map(product => ({ slug: product.id }))
}
