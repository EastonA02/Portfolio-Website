import { Rocket } from "lucide-react";
import buildingImg from "../assets/building.png"

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
            <div className="font-semibold">Safe to Spend</div>
            <p className="text-sm">
              A simple personal finance app designed to
              answer one question:
            </p>
            <p className="text-sm">
              "How much can I acutally spend today?"
            </p>
          </div>
        </div>

        <div className="right w-1/2 h-full flex justify-center">
          <img 
            className="h-full object-contain"
            src={buildingImg} 
          />
        </div>

      </div>
    </div>
  )
}

export default Building;