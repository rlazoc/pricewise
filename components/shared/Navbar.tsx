import { navIcons } from "@/consts"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/icons/logo.svg" width={27} height={27} alt="pricewise logo" />
          <p className="nav-logo">Price<span className="text-primary">Wise</span></p>
        </Link>
        <div className="flex items-center gap-8">
          {navIcons.map((icon) => {
            return (
              <Image key={icon.alt} src={icon.src} width={28} height={28} className="object-contain cursor-pointer" alt={icon.alt} />
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar