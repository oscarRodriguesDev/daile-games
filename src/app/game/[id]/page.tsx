import { gameProps } from "@/utils/types/game";
import { redirect } from "next/navigation";
import Image from 'next/image'
import Container from "@/components/container/page";
import { Label } from "./labels";
import { GameCard } from "@/components/cards";
import { Metadata } from "next";


interface PropsParams{
    params:{
        id: string;
    }
}


//recupera dados da api
async function getData(id: string) {
    //https://sujeitoprogramador.com/next-api/?api=game&id=15

    try {
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,{cache:"no-store"
        })
        return res.json();
    } catch (err) {
        throw new Error("Failed to fetch data")
    }
}

//recupera dados da api
async function getGameDay() {
   //https://sujeitoprogramador.com/next-api/?api=game_day
   try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, { cache: "no-store" })
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data")
  }
    }


    //gerando metadata dinamicamente


    export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {
        try {
          const response: gameProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, { next: { revalidate: 60 } })
            .then((res) => res.json())
            .catch(() => {
              return {
                title: "DalyGames - Descubra jogos incríveis para se divertir."
              
              }
            })
      
          return {
            title: response.title,
            description: `${response.description.slice(0, 100)}...`,
            openGraph: {
              title: response.title,
              images: [response.image_url]
            },
            robots: {
              index: true,
              follow: true,
              nocache: true,
              googleBot: {
                index: true,
                follow: true,
                noimageindex: true,
              }
            }
          }
      
      
      
        } catch (err) {
          return {
            title: "DalyGames - Descubra jogos incríveis para se divertir."
          }
        }
      }
      



//componente que utiliza os dados da api
export default async function Game({
    params: { id }
}: {
    params: { id: string }
}) {


    const data: gameProps = await getData(id)
    const sugest = await getGameDay() 



    if (!data) { 
        redirect("/")
    }

    return (
        <main className="w-full text-black">
            <div className="bg-black h-80 sm:h-96 w-full relative">
                <Image
                    className="object-cover w-full h-80 sm:h-96 opacity-75"
                    src={data.image_url}
                    alt={data.title}
                    priority={true}
                    fill={true}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
                />
            </div>

            <Container>
                <h2 className="font-bold text-xl my-4">Plataformas</h2>
                <p>{data.description}</p>

                <div className="flex gap-3 flex-wrap">
                    {data.categories.map((item) => (
                        <Label name={item} key={item} />
                    ))}

                </div>
                <h2 className="font-bold text-xl my-4">Categorias</h2>
                <p>{data.description}</p>

                <div className="flex gap-3 flex-wrap">
                    {data.categories.map((item) => (
                        <Label name={item} key={item} />
                    ))}
                </div>

                <p className="mt-7 mb-2"><strong>Data de lançamento:</strong> {data.release}</p>
                        <div>
                    <h2  className="font-bold text-xl my-4"> Jogo Recomendado </h2>
                    <div className=" flex-grow">
                        <GameCard game={sugest} />
                    </div>

                        </div>

            </Container>
        </main>
    )
}