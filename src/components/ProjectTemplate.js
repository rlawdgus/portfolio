import { ReactComponent as LinkIcon } from "../icons/link.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

import Tools from "./Tools";

import "../stylesheets/ProjectTemplate.scss";

const ProjectTemplate = ({ title, thumbnail, tools, links, isWork }) => {
    const toolsWidth =
        tools.length > 1
            ? tools.length * 40 + 30 + "px"
            : tools.length * 40 + "px";
    const linksWidth =
        links.length > 1
            ? links.length * 40 + 30 + "px"
            : links.length * 40 + "px";

    return (
        <section>
            <h2>{title}</h2>
            <img
                src={`${process.env.PUBLIC_URL}/images/${thumbnail}.png`}
                alt=""
            />
            <ul className="tool" style={{ width: toolsWidth }}>
                <Tools tools={tools} />
            </ul>
            <ul className="link" style={{ width: linksWidth }}>
                <li>
                    <a href={links[0]}>
                        <GithubIcon className="tool-icon" />
                    </a>
                </li>

                {isWork && (
                    <li>
                        <a href={links[1]}>
                            <LinkIcon className="tool-icon" />
                        </a>
                    </li>
                )}
            </ul>
        </section>
    );
};

export default ProjectTemplate;
