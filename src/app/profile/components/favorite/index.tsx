'use client'
import { FiEdit, FiX } from 'react-icons/fi'
import { useState } from 'react'

export function FavoriteCards() {
    const [edit, setEdit] = useState(false)
    return (
        <div className="w-full bg-gray-900 p-4 h-44 text-white rounded-lg flex justify-between flex-col">

            <div className='flex justify-between'>
            <button className='self-start hover: scale-110 duration-200 transition-all'
                onClick={() => setEdit(!edit)}>
                <FiEdit size={24} color="#fff" />
            </button>

            {edit && (
                <input type="text" placeholder='Digite seu jogo preferido' />
            )}

            </div>
          

            <FiX size={24} color="#fff" />
            
          
        </div>
    )
}