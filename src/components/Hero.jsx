import heroImage from "../assets/hero.png";
import { CodeXml } from "lucide-react";

function Hero () {
  return (
    <div className="bg-linear-to-r from-slate-950 via-blue-950 to-slate-950
    py-10 flex justify-between px-5 md:px-10 items-center">
      
      <div className="hero-left">
        <p className="px-2 text-emerald-400 font-semibold
        text-lg">
          Hi, I'm
        </p>
        <h1 className="text-4xl md:text-5xl font-bold px-2
        text-white">
          Easton Abel
        </h1>
        <h4 className="px-2 mt-3 text-white">
          Computer Science Student & Software Developer
          </h4>

        <div className="hero-buttons flex gap-2 px-2
         text-sm mt-3">
          <a href="#projects" 
          className="bg-emerald-400 p-2 md:p-3 
          flex items-center gap-2
          rounded-lg cursor-pointer 
          hover:opacity-75 transition-all 
          duration-200
          w-36">
            <CodeXml className="w-6 h-6 text-black" />View Projects
          </a>

          <a href="https://github.com/EastonA02"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-slate-950 via-blue-950 to-slate-950
          text-white p-2 md:p-3 rounded-lg cursor-pointer w-22
          border-1 border-white hover:opacity-75 transition-all duration-200">
            GitHub
          </a>
          
          <a href="https://www.linkedin.com/in/easton-abel-02616422a/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-linear-to-r from-slate-950 via-blue-950 to-slate-950
          text-white p-2 md:p-3 rounded-lg cursor-pointer w-22
          border-1 border-white hover:opacity-75 transition-all duration-200">
            LinkedIn
          </a>

        </div>
        
      </div>

      <div className="hero-right hidden md:block">
        <img className="w-90 rounded-lg" src={heroImage}/>
      </div>

    </div>
  )
}

export default Hero