import { CodeXml } from "lucide-react"
import SkillTag from "./SkillTag"

function Skills(){
  return (
    <div id="skills" className="h-auto p-4">
      <div className="flex gap-2 items-center">
        <CodeXml className="w-6 h-6 text-emerald-400" />
        <div className="font-bold text-2xl">Skills</div>
      </div>

      <div className="flex pt-2">
        <div className="grid grid-cols-1 min-[600px]:grid-cols-2
        min-[1000px]:grid-cols-4
        w-full gap-6">
          
          <div className="front-end">
            <div className="font-semibold">Frontend</div>
            <div className="flex flex-wrap text-sm gap-2">
              <SkillTag>React</SkillTag>
              <SkillTag>JavaScript</SkillTag>
              <SkillTag>HTML</SkillTag>
              <SkillTag>CSS</SkillTag>
              <SkillTag>Tailwind CSS</SkillTag>
            </div>
          </div>
         
          <div className="back-end">
            <div className="font-semibold">
              Backend
            </div>
            <div className="flex flex-wrap text-sm gap-2">
              <SkillTag>Java</SkillTag>
              <SkillTag>Spring Boot</SkillTag>
              <SkillTag>Spring Data JPA/Hibernate</SkillTag>
              <SkillTag>REST APIs</SkillTag>
              <SkillTag>Python</SkillTag>
            </div>
          </div>

          <div className="mobile">
            <div className="font-semibold">Database</div>
            <div className="flex flex-wrap text-sm gap-2">
              <SkillTag>PostgreSQL</SkillTag>
              <SkillTag>SQL</SkillTag>
            </div>
          </div>
          
          <div className="tools">
            <div className="font-semibold">Tools</div>
            <div className="flex flex-wrap text-sm gap-2">
              <SkillTag>Git</SkillTag>
              <SkillTag>GitHub</SkillTag>
              <SkillTag>IntelliJ</SkillTag>
              <SkillTag>VS Code</SkillTag>
              <SkillTag>Postman</SkillTag>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills