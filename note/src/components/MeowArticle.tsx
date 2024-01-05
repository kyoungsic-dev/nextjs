'use client'

import { useEffect, useState } from 'react'
import styles from './MeowArticle.module.scss'

export default function MeowArticle() {
  const [text, setText] = useState('데이터 준비 중!')

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com', { next: { revalidate: 0 } })
      .then(res => res.json())
      .then(result => setText(result.data[0]))
  }, [])

  return (
    <>
      <article className={styles.article}>{text}</article>
    </>
  )
}
