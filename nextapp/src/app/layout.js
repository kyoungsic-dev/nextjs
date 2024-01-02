import Link from 'next/link'
import './globals.css'
import { Control } from './Control'

export const metadata = {
  title: 'Web Tutorial',
  description: 'by Marco'
}

export default async function RootLayout({ children }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + 'topics', { cache: 'no-store' })
  const topics = await res.json()

  return (
    <html lang='ko'>
      <body>
        <h1>
          <Link href='/'>WEB</Link>
        </h1>
        <ol>
          {topics.map(topic => (
            <li key={topic.id}>
              <Link href={`/read/${topic.id}`}>{topic.title}</Link>
            </li>
          ))}
        </ol>
        {children}
        <Control />
      </body>
    </html>
  )
}
