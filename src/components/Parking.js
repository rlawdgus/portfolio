import Thumb from "../images/parking.png";

import { ReactComponent as HtmlIcon } from "../icons/html.svg";
import { ReactComponent as SassIcon } from "../icons/sass.svg";
import { ReactComponent as JsIcon } from "../icons/js.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as LinkIcon } from "../icons/link.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

import "../stylesheets/ProjectTemplate.scss";

const Parking = () => {
    return (
        <section>
            <h2>모두의 주차장</h2>
            <img src={Thumb} alt="" />
            <div className="tool">
                <HtmlIcon className="tool-icon" />
                <SassIcon className="tool-icon" />
                <JsIcon className="tool-icon" />
                <ReactIcon className="tool-icon" />
            </div>
            <ul className="link">
                <li>
                    <a href="https://intospace.kr/">
                        <LinkIcon className="tool-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rlawdgus/everyones-parking-lot">
                        <GithubIcon className="tool-icon" />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Parking;
