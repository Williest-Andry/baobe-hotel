import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-15 fixed top-10 w-full font-satoshi z-1000">
      <div className="flex gap-2.5 items-center">
        <img
          className="w-6.5 h-11.75"
          src={"/Union.svg"}
          alt="baobe icon"
        ></img>
        <p className="hidden sm:flex text-3xl font-medium">Baobé</p>
      </div>

      <div className="flex gap-4 items-center bg-black rounded-full w-55 justify-between px-2">
        <Link href={"#"} className="text-white text-xl ml-6">
          RÉSERVER
        </Link>
        <button className="bg-white rounded-full w-20 flex items-center justify-center">
          <Menu size={40} />
        </button>
      </div>
    </nav>
  );
}
