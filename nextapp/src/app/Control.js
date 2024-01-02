'use client'

import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

export function Control() {
  const params = useParams()
  const router = useRouter()
  const id = params.id

  return (
    <ul>
      <li>
        <Link href='/create'>Create</Link>
      </li>
      {id && (
        <>
          <li>
            <Link href={`/update/${id}`}>Update</Link>
          </li>
          <li>
            <button
              type='button'
              onClick={() => {
                const options = { method: 'DELETE' }
                fetch(procss.env.NEXT_PUBLIC_API_URL + 'topics/' + id, options)
                  .then(res => res.json())
                  .then(result => {
                    router.push('/')
                    router.refresh()
                  })
              }}
            >
              Delete{' '}
            </button>
          </li>
        </>
      )}
    </ul>
  )
}
