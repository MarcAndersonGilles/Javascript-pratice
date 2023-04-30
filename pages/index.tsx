import Image from 'next/image'
import { Inter } from 'next/font/google'
import Input from '../components/Input'
import Map from '../components/Map'
import States from '../components/useState/States'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Map />
      <States />
    </main>
  )
}
