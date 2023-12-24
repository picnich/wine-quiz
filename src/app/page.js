import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='container'>
        <Link href="/">
          <h1>Wine Quiz</h1>
        </Link>
        <Link href="/quiz"><button>Start Quiz</button></Link>
      </div>
    </main>
  )
}
