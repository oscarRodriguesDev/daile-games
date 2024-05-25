'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import { FiSearch } from 'react-icons/fi'
export function Input() {

    const [input, setInput] = useState<string>('')
    const route =  useRouter()
    function handleSearch(event: FormEvent) {
        event.preventDefault()
        if (input === '') return;
        route.push(`/game/search/${input}`)


    }

    return (
        <form onSubmit={handleSearch}
            className='w-full bg-slate-200 my-5 flex justify-between items-center gap-2 rounded-lg p-2'>
            <input
                type="text"
                placeholder="Procurando algum jogo?"
                value={input}
                onChange={(event) => {
                    setInput(event.target.value)
                }}

                className='bg-slate-200 outline-none w-11/12'
            />
            <button type='submit'>{<FiSearch size={24} color="#ea580c" />}</button>
        </form>
    )
}