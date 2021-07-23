import Thumb from "../images/jeju.png";

import { ReactComponent as HtmlIcon } from "../icons/html.svg";
import { ReactComponent as CssIcon } from "../icons/css.svg";
import { ReactComponent as JsIcon } from "../icons/js.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";
import { ReactComponent as LinkIcon } from "../icons/link.svg";
import { ReactComponent as GithubIcon } from "../icons/github.svg";

import "../stylesheets/ProjectTemplate.scss";

const Jeju = () => {
    return (
        <section>
            <h2>제 2회 6차산업 제주 국제 박람회 & 컨퍼런스</h2>
            <img src={Thumb} alt="" />
            <div className="tool">
                <HtmlIcon className="tool-icon" />
                <CssIcon className="tool-icon" />
                <JsIcon className="tool-icon" />
                <ReactIcon className="tool-icon" />
            </div>
            <ul className="link">
                <li>
                    <a href="http://6farming-plus-jeju.com/">
                        <LinkIcon className="tool-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/rlawdgus/jeju-develop">
                        <GithubIcon className="tool-icon" />
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Jeju;
