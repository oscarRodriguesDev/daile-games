import logoImg from '../../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import {LiaGamepadSolid} from 'react-icons/lia'

const Header = () => {
    return (
        <header className="w-full h-28 bg-slate-100 text-black px2 "> 
         <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">

            <nav className='flex justify-center items-center gap-4 '>
                <Link href='/'>
                <Image 
                src={logoImg}
                alt='Logotipo do site dayle game'
                quality={100}
                priority={true}
                className='w-full'
                />
                </Link>

               <Link href='/'>
               Games
               </Link>
               <Link href='/profile'>
               Perfil
               </Link>
            </nav>
            <Link href='/profile' className='hidden sm:flex'>
            <LiaGamepadSolid  size={34} color='#475569'/>
            </Link>
         </div>

        </header>
    )
}

export default Header