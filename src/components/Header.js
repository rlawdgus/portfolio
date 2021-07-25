import { ReactComponent as VsCode } from "../icons/vscode.svg";
import { ReactComponent as Xd } from "../icons/xd.svg";
import { ReactComponent as GitHub } from "../icons/github.svg";

import "../stylesheets/Header.scss";

const Header = () => {
    const toolsWidth = 40 * 3 + 30 + "px";

    return (
        <header>
            <h1>김정현</h1>
            <h2>Front-End Developer</h2>
            <div className="tool" style={{ width: toolsWidth }}>
                <VsCode className="tool-icon" />
                <Xd className="tool-icon" />
                <a href="https://github.com/rlawdgus">
                    <GitHub className="tool-icon" />
                </a>
            </div>
        </header>
    );
};

export default Header;
