import Image from 'next/image'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import Toolbox from '@/components/Toolbox'
import Board from '@/components/Board/Index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={'min-h-screen'}
    >
      <Menu />
      <Toolbox />
      <Board />
    </main>
  )
}
