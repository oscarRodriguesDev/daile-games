import Container from '@/components/container/page'
import { gameProps } from '@/utils/types/game'
import Link from 'next/link'
import Image from 'next/image'
import { BsArrowRightSquare } from 'react-icons/bs'
import { Input } from '@/components/input'
import { GameCard } from '@/components/cards'

const apiUrl =  'https://sujeitoprogramador.com'

//função para buscar treaer os games do bd
async function getDalyGame() {
  try {
    const response = await fetch(`${apiUrl}/next-api/?api=game_day`, { next: { revalidate: 320 } })
    return response.json()
  } catch (erro) {
    throw new Error('Failed to fetch data') 
  }
}
//função para buscar treaer os games do bd
async function getGames() {

  try {
    const response = await fetch(`${apiUrl}/next-api/?api=games`, { next: { revalidate: 320 } })
    return response.json()
  } catch (erro) {
   throw new Error('Failed to fetch data') 
  }
}


export default async function Home() {
  const dalyGame: gameProps = await getDalyGame()
  const games: gameProps[] = await getGames()



  return (
    <main className="w-fuyll">
      <Container>
        <h1 className='text-center font-bold text-x1 mt-8 mb-5'>Separamos um jogo exclusivo pra você</h1>
        <Link href={`/game/${dalyGame.id}`}>
          <section className='w-full bg-black rounded-lg'>

            <div className='w-full max-h-96 h-96 relative rounded-lg'>
              <div className='flex justify-center items-center gap-2 absolute z-20 bottom-0'>
                <p className='font-bold text-x1 text-white'>{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>
              <Image
                src={dalyGame.image_url}
                priority={true}
                quality={100}
                fill={true}
                className='max-h-96 object-cover  rounded-lg opacity-50 hover:opacity-100 transition-all duration-200'
                sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw"
                alt='imagem do jogo'
              />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className='text-lg font-bold mt-8 mb-5 text-center'>
          Jogos para Conhecer
        </h2>
        <section className='grid gap-7 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>
          {games.map((item) => (
            <GameCard key={item.id} game={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
