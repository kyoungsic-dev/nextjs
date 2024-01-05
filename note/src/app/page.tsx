import Counter from '@/components/Counter'
import os from 'os' // Node APIs

export default function Home() {
  console.log('안녕! - SERVER')
  console.log(os.hostname())
  return (
    <main>
      <h1>Homepage!</h1>
      <Counter />
    </main>
  )
}
