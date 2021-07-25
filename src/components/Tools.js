import { ReactComponent as HtmlIcon } from "../icons/html.svg";
import { ReactComponent as CssIcon } from "../icons/css.svg";
import { ReactComponent as SassIcon } from "../icons/sass.svg";
import { ReactComponent as JsIcon } from "../icons/js.svg";
import { ReactComponent as TsIcon } from "../icons/ts.svg";
import { ReactComponent as ReactIcon } from "../icons/react.svg";

const Tools = ({ tools }) => {
    return (
        <>
            {tools.indexOf("html") !== -1 && (
                <li>
                    <HtmlIcon className="tool-icon" />
                </li>
            )}
            {tools.indexOf("css") !== -1 && (
                <li>
                    <CssIcon className="tool-icon" />
                </li>
            )}
            {tools.indexOf("sass") !== -1 && (
                <li>
                    <SassIcon className="tool-icon" />
                </li>
            )}
            {tools.indexOf("js") !== -1 && (
                <li>
                    <JsIcon className="tool-icon" />
                </li>
            )}
            {tools.indexOf("ts") !== -1 && (
                <li>
                    <TsIcon className="tool-icon" />
                </li>
            )}
            {tools.indexOf("react") !== -1 && (
                <li>
                    <ReactIcon className="tool-icon" />
                </li>
            )}
        </>
    );
};

export default Tools;
