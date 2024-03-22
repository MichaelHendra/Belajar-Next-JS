import Link from "next/link";
export default function Header ({title, linkHref, linkTitle}){
    return(
    <div className="p-4 flex justify-between items-center gap-2">
      <h1 className="font-bold text-2xl text-color-primary">{title}</h1>
      {
      linkHref && linkTitle 
      ?
      <Link href={linkHref} className="md:text-xl text-md underline text-color-primary hover:text-color-accent transition-all">{linkTitle}</Link>
      : 
      null
      }
    </div>
    )
}