'use client'

import React, { useState } from 'react'

export default function Counter() {
  console.log('안녕! - Client')

  const [count, setCount] = useState(0)
  return (
    <>
      <p>{count}</p>
      <button
        type='button'
        onClick={() => {
          setCount(prev => prev + 1)
        }}
      >
        숫자 증가 시키기
      </button>
    </>
  )
}
