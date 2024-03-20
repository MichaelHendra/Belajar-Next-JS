import Image from "next/image";
import Link from "next/link";

export default function AnimeList ({title, images, id}){
    return(
            <Link href={`/${id}`} className="cursor-pointer">
                <Image src={images} alt="..." width={600} height={400} className="w-full max-h-64 object-cover"/>
                <h3 className="font-bold md:text-xl text-md p-4">{title}</h3>
            </Link>
    )
}