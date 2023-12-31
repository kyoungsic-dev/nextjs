export default async function Read(props) {
  const res = await fetch(`${procss.env.NEXT_PUBLIC_API_URL}topics/${props.params.id}`, { cache: 'no-store' })
  const topic = await res.json()
  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  )
}
