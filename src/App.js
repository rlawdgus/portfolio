import Header from "./components/Header";
import Contact from "./components/Contact";

import Project from "./containers/Project";

import "./stylesheets/reset.css";

const App = () => {
    return (
        <>
            <Header />
            <Project />
            <Contact />
        </>
    );
};

export default App;
