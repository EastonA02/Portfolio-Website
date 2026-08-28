import { Rocket } from "lucide-react";
import motordeskImg from "../assets/motordesk-erd.png"

function Building(){
  return (
    <div className="flex justify-center h-auto md:h-80 pb-10 md:pb-0">
      <div className="h-auto md:h-60 p-4 w-4/5 bg-emerald-50 
        border-1 border-emerald-300 rounded-lg flex gap-2">

        <div className="left flex gap-2 w-1/2">
          <div className="left">
            <Rocket className="w-6 h-6 text-emerald-600" />
          </div>

          <div className="right flex flex-col pt-2">
            <div className="text-emerald-900 font-semibold">
              Currently Building
            </div>
            <div className="font-semibold">MotorDesk</div>
            <p className="text-sm pb-4">
              A full-stack shop-management platform for 
              automotive repair businesses.
            </p>
            <p className="text-sm">
              Currently building the Spring Boot/PostgreSQL 
              backend, with a React/TypeScript frontend, 
              Docker containerization, AWS deployment, and 
              CI/CD planned next.
            </p>
          </div>
        </div>

        <div className="right w-1/2 h-full flex items-center justify-center">
          <img 
            className="w-[90%] object-contain"
            src={motordeskImg}
            alt="MotorDesk entity relationship diagram"
          />
        </div>

      </div>
    </div>
  )
}

export default Building;