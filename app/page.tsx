import Image from 'next/image'
import logo from '@/assets/logo.svg'

export default function Home() {
  return (
    <main>
      <div className="container">
        <Image src={logo} width={350} height={27} alt="logo" />

        <h1>Next.js + TypeScript + Tailwind CSS</h1>

        <button className="button">Click me</button>
      </div>
    </main>
  )
}
