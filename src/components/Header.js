import { ReactComponent as VsCode } from "../icons/vscode.svg";
import { ReactComponent as Xd } from "../icons/xd.svg";

import "../stylesheets/Header.scss";

const Header = () => {
    return (
        <header>
            <h1>김정현</h1>
            <h2>Front-End Developer</h2>
            <div className="tool">
                <VsCode className="tool-icon" />
                <Xd className="tool-icon" />
            </div>
        </header>
    );
};

export default Header;
