import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Connect() {
  return (
    <div id="contact" className="p-4 h-auto
    bg-slate-50"> 
      <div className="flex gap-2">
        <Mail className="w-6 h-6 text-emerald-600" />
        <div className="font-bold">
          Let's Connect
        </div>
      </div>

      <div className="flex-col gap-8 justify-between">
        <div className="left w-full md:w-2/5">
          I'm currently looking for new-grad
          software, technology, and analytical
          opportunities.
        </div>

        <div className="right grid grid-cols-1 
        md:grid-cols-3 w-full gap-4 py-4">

          <a 
            href="mailto:easton.abel@student.ufv.ca"
            className="flex gap-3 items-center"
          >
            <Mail className="text-2xl" />
            <div>
              <div>Email Me</div>
              <div className="text-sm">
                easton.abel@student.ufv.ca
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/easton-abel-02616422a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center"
          >
            <FaLinkedin className="text-2xl" />
            <div>
              <div>LinkedIn</div>
              <div className="text-sm">linkedin.com/in/easton-abel</div>
            </div>
          </a>

          <a
            href="https://github.com/EastonA02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-3 items-center"
          >
            <FaGithub className="text-2xl" />
            <div>
              <div>GitHub</div>
              <div className="text-sm">github.com/EastonA02</div>
            </div>
          </a>

        </div>
      </div>
    </div>
  )
}

export default Connect