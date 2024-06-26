"use client"
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound (){
    return(
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-3 flex-col">
                <FileSearch size={44} className="text-color-accent"/>
            <h1 className="text-color-accent text-4xl font-bold"> Not Found</h1>
            <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Kembali</Link>
            </div>
        </div>
    )
}