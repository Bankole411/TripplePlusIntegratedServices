import React from 'react'
import { projectsData } from '../components/data'
import {Link} from "react-router-dom"

export default function Projects() {
    const projects = projectsData.map(project => {
        const projectClass = `project-bg-${project.id}`;
        return(
            <Link to={project.route} className={`container ${project.id === 1 ? 'lg:col-span-2 lg:row-span-2' : ''} ${project.id === 1 ? 'lg:h-[550px]' : ''}`} key={project.id}>
                <div className={`image ${projectClass}`}>
                <span className="project-homepage-title-span rounded font-bold flex flex-column justify-between px-4 items-center text-white">
                    <h2>{project.project_name}</h2>
                    <p>{project.location}</p>
                </span>
                </div>
            </Link>
        )
        })
  return (
    <section>
              <div className='mb-20 mx-5 md:ml-10 mt-20'>
                <div className="lg:mt-20 mt-5 m-auto text-center max-w-[600px]">
                    <h1 className='mb-5 font text-4xl font-extrabold'>Projects</h1>
                    <p className='mb-10 text-1xl font-bold'>Our design services starts and ends with a best-in-class experience strategy that builds brands.</p>
                </div>

                <div className='max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:mr-10 mt-10 md:mt-20'>
                    {projects}
                </div>
            </div>
    </section>
  )
}
