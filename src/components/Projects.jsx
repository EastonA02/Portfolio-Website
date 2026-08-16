import { Folder } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import appImg from "../assets/project1.png"
import project2Img from "../assets/project2.png"
import project3Img from "../assets/project3.png"
import ProjectTag from "./ProjectTag"

function Projects(){
  return (
    <div id="projects" className="h-auto lg:h-100 bg-slate-50 
      pt-4 pb-10 lg:pb-0">
      <div className="text-center">
        <div className="flex text-center justify-center
        gap-2">
          <Folder className="w-6 h-6 text-emerald-500" />
          <h2 className="font-bold text-xl">
            Featured Projects
          </h2>
        </div>
        <h3 className="text-sm text-gray-500">
          A selection of projects I've built and am building.
        </h3>
      </div>

      <div className="flex justify-center mt-2 px-2">
        <div className="grid grid-cols-1
          min-[900px]:grid-cols-2 lg:grid-cols-3
          gap-6 lg:gap-20">
 
            <div className="left border-1 w-60
            border-gray-300 border-solid rounded-lg">
                <img className="rounded-lg
                w-full h-full" 
                src={appImg}/>
            </div>

            <div className="middle w-60
            border-1 rounded-lg border-gray-300
            flex flex-col">
              <img className="rounded-t-lg
              w-full h-32 object-cover" src={project2Img} />
              <div className="text-sm font-bold
              px-2">
                Distributed File Sharing System
              </div>
              <p className="text-xs px-2">
                A distributed file sharing system 
                built with Java, implements web
                services, sockets, and database
                persistence.
              </p>
              <div className="flex justify-between
              text-xs py-2 px-1">
                <ProjectTag>Java</ProjectTag>
                <ProjectTag>REST Learning</ProjectTag>
                <ProjectTag>JDBC</ProjectTag>
                <ProjectTag>Sockets</ProjectTag>
              </div>
              <a
                href="https://github.com/EastonA02/Distributed-File-Sharing-System"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold flex gap-2 
                items-center px-2 py-1 mt-auto">
              <FaGithub className="text-xl" />
              View on Github →
            </a>
            </div>

            <div className="middle w-60
            border-1 rounded-lg border-gray-300
            flex flex-col">
              <img className="rounded-t-lg
              w-full h-32 object-cover" src={project3Img} />
              <div className="text-sm font-bold
              px-2">
                Machine Learning From Scratch
              </div>
              <p className="text-xs px-2">
                Implemented core machine learning algorithms
                including decision trees, information gain,
                and neural networks without using ML libraries.
              </p>
              <div className="flex justify-between
              text-xs py-2 px-1">
                <ProjectTag>Java</ProjectTag>
                <ProjectTag>Machine Learning</ProjectTag>
                <ProjectTag>AI</ProjectTag>
              </div>
              <a
                href="https://github.com/EastonA02/machine-learning-from-scratch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold flex gap-2 items-center px-2 py-1 mt-auto"
              >
                <FaGithub className="text-xl" />
                View on Github →
              </a>
            </div>

          </div>
          
      </div>

    </div>
  )
}

export default Projects