import Image from "next/image"

const Projects = () => {
  return (
    <div className="min-h-full mt-16 flex flex-col gap-8 items-center justify-center">
    <h2 className="text-3xl lg:text-5xl font-semibold">Projects</h2>
 
 <div className="flex flex-col gap-2 text-center">
   <div className="border-2 border-zinc-400 rounded-xl shadow-lg">
   <Image src={"/project1.png"} width={1000} height={1000} alt="project1" className="rounded-lg"/>
   </div>
    <h3 className="text-2xl font-bold">Lyra - A postgresSQL data visualization tool</h3>
 </div>
  </div>
  )
}

export default Projects
