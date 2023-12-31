'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Update() {
  const [title, setTitle] = useState()
  const [body, setBody] = useState()
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    fetch(`${procss.env.NEXT_PUBLIC_API_URL}topics/${params.id}`)
      .then(res => res.json())
      .then(result => {
        setTitle(result.title)
        setBody(result.body)
      })
  }, [params.id])

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
        const options = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, body })
        }

        fetch(procss.env.NEXT_PUBLIC_API_URL + 'topics/' + params.id, options)
          .then(res => res.json())
          .then(result => {
            const lastId = result.id
            router.push(`/read/${lastId}`)
            router.refresh()
          })
      }}
    >
      <p>
        <input type='text' name='title' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
      </p>
      <p>
        <textarea name='body' placeholder='Body' value={body} onChange={e => setBody(e.target.value)}></textarea>
      </p>
      <p>
        <button type='submit'>Update</button>
      </p>
    </form>
  )
}
