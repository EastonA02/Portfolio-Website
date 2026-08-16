import { useState } from "react";
import { Menu } from "lucide-react";

function Header(){
  //state whether nav bar is open for mobile
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-4 items-center
        bg-linear-to-r from-slate-950 via-blue-950 to-slate-950
        text-white h-20 font-semibold">
       
        <div className="div-left flex gap-2 items-center">
          <div className="text-emerald-400 font-bold
            text-2xl items-center">
            EA
          </div>
          <div>Easton Abel</div>
        </div>
    
        {/*Desktop NavBar*/}
        <div className="div-right">
          <ul className="hidden sm:flex items-center gap-2 list-none">
            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#about">About</a>
            </li>

            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#projects">Projects</a>
            </li>

            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#skills">Skills</a>
            </li>

            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/*Mobile Nav Bar*/}
          <ul className="sm:hidden">
            <button className="cursor-pointer" 
            onClick={()=>setOpen(!open)}>
              <Menu className="w-7 h-7 text-white" />
            </button>
          </ul>
        </div>
      </nav>

      {/*Mobile NavBar*/}
      {open && (
          <div className="flex flex-cols sm:hidden
          bg-linear-to-r from-slate-950 via-blue-950 to-slate-950
          text-white px-4">
            <ul className="ml-auto w-full">
              <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#about">About</a>
              <hr class="border-t border-gray-300 my-1" />
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#projects">Projects</a>
              <hr class="border-t border-gray-300 my-1" />
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#skills">Skills</a>
              <hr class="border-t border-gray-300 my-1" />
            </li>
            <li className="cursor-pointer hover:opacity-75 transition-all duration-200">
              <a href="#contact">Contact</a>
              <hr class="border-t border-gray-300 my-1" />
            </li>
            </ul>
          </div>
        )}

    </>
  )
}

export default Header;