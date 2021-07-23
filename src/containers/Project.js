import Jeju from "../components/Jeju";
import Parking from "../components/Parking";
import YouTubeRenewal from "../components/YouTubeRenewal";

import "../stylesheets/Project.scss";

const Project = () => {
    return (
        <main>
            <h1>Works</h1>
            <Jeju />
            <Parking />

            <h1>Projects</h1>
            <YouTubeRenewal />
        </main>
    );
};

export default Project;
