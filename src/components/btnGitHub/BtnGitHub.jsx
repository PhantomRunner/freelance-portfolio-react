import img from "../../img/projects/01-big.jpg";
import gitHub from "../../img/icons/gitHub-black.svg";

export default function BtnGitHub({link}) {
    return (
        <a href={link} className="btn-outline">
            <img src={gitHub} alt=""/>
            GitHub repo
        </a>
    )
}