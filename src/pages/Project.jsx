import img from '../img/projects/01-big.jpg'
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {useParams} from "react-router-dom";
import {projectList} from "../helpers/ProjectLists";

export default function Project() {
    const {id} = useParams();
    const project = projectList[id];
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

                    <div className="project-details__desc">
                        <p>{project.skills}</p>
                    </div>

                    {project.github && (
                        <BtnGitHub link={project.github}/>
                    )}


                </div>
            </div>
        </main>
    )
}