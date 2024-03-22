"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch(){
    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        event.preventDefault()
        const keyword = searchRef.current.value
        router.push(`/search/${keyword}`)
    }
    const enterHandleSearch = (e) => {
       if(e.keyCode = 13 ){
           const keyword = searchRef.current.value
           router.push(`/search/${keyword}`)
       }
    }
    return(
        <div className="relative">
            <input  placeholder="Golek O" className="w-full p-2 rounded" ref={searchRef} onKeyDown={enterHandleSearch}/>
            <button className="absolute top-2 end-1" onClick={handleSearch} >
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}