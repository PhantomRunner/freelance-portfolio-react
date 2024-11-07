import Header from "../components/header/Header";
import Project from "../components/project/Project"

import {projectList} from "../helpers/ProjectLists";

export default function Projects() {
    return (
        <>
            <Header/>

            <main className="section">
                <div className="container">
                    <h2 className="title-1">Projects</h2>
                    <ul className="projects">

                        {projectList.map((project,index)=>{
                            // Указывать ключ через индекс массива хуйня идея, в идеале нужен ункикальный ключ в массиве проектов. Но тут похуй в этом проекте
                            return(
                                <Project
                                    key={index}
                                    title={project.title}
                                    img={project.img}
                                    index={index}

                                />
                            )
                        })}

                    </ul>
                </div>
            </main>
        </>
    )
}