import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <h1>Wine Quiz</h1>
        <Link href="/quiz"><button>Start Quiz</button></Link>
      </div>
    </main>
  )
}
