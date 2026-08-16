 import { UserRound, GraduationCap, CodeXml, Laptop, Target } from "lucide-react";

function About() {
  return (
    <div
      id="about"
      className="bg-white h-auto md:h-80 flex flex-col md:flex-row
      items-center md:justify-center justify-between px-3 py-6 md:py-0"
    >
      
      <div className="about-left px-4 w-full md:w-125">
        <div className="flex items-center gap-4">
          <UserRound className="w-5 h-10 text-emerald-400" />
          <h2 className="text-2xl font-bold">About Me</h2>
        </div>

        <p className="text-sm">
          I'm a computer science student at the University of the
          Fraser Valley, graduating in December 2026. I'm interested
          in software development and using technology to solve
          practical problems. Recently I have been working with React,
          Java, and distributed systems, while beginning to build
          mobile applications with React Native.
        </p>
      </div>

      <div className="about-right grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white py-8 px-4 border-1 rounded-lg border-gray-100">
          <GraduationCap className="w-6 h-6 text-emerald-400" />
          <p className="font-bold">Education</p>
          <p className="text-sm">BSc Computer Science UFV, 2026</p>
        </div>

        <div className="bg-white py-8 px-4 border-1 rounded-lg border-gray-100">
          <CodeXml className="w-6 h-6 text-emerald-400" />
          <p className="font-bold">Focus</p>
          <p className="text-sm">Software Development & Product Building</p>
        </div>

        <div className="bg-white py-8 px-4 border-1 rounded-lg border-gray-100">
          <Laptop className="w-6 h-6 text-emerald-400" />
          <p className="font-bold">Interested In</p>
          <p className="text-sm">Full-Stack, Mobile, AI & Systems</p>
        </div>

        <div className="bg-white py-8 px-4 border-1 rounded-lg border-gray-100">
          <Target className="w-6 h-6 text-emerald-400" />
          <p className="font-bold">Goal</p>
          <p className="text-sm">Build Impactful software products</p>
        </div>
      </div>
    </div>
  );
}

export default About;