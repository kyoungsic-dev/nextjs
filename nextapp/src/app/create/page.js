'use client'

import { useRouter } from 'next/navigation'

export default function Create() {
  const router = useRouter()
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, body })
        }

        fetch(process.env.API_URL + 'topics', options)
          .then(res => res.json())
          .then(result => {
            const lastId = result.id
            router.push(`/read/${lastId}`)
            router.refresh()
          })
      }}
    >
      <p>
        <input type='text' name='title' placeholder='Title' />
      </p>
      <p>
        <textarea name='body' placeholder='Body'></textarea>
      </p>
      <p>
        <button type='submit'>CREATE</button>
      </p>
    </form>
  )
}
