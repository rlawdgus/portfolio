import ProjectTemplate from "../components/ProjectTemplate";

import "../stylesheets/Project.scss";

const Project = () => {
    return (
        <main>
            <h1>Works</h1>
            <ProjectTemplate
                title={"제 2회 6차산업 제주 국제 박람회 & 컨퍼런스"}
                thumbnail={"jeju"}
                tools={["html", "css", "js", "react"]}
                links={[
                    "https://github.com/rlawdgus/jeju-develop",
                    "http://6farming-plus-jeju.com/",
                ]}
                isWork={true}
            />
            <ProjectTemplate
                title={"모두의 주차장"}
                thumbnail={"parking"}
                tools={["html", "sass", "js", "react"]}
                links={[
                    "https://github.com/rlawdgus/everyones-parking-lot",
                    "https://intospace.kr/",
                ]}
                isWork={true}
            />

            <h1>Projects</h1>
            <ProjectTemplate
                title={"YouTube Renewal"}
                thumbnail={"youtube_renewal"}
                tools={["html", "sass", "js", "ts", "react"]}
                links={["https://github.com/rlawdgus/youtube-renewal"]}
                isWork={false}
            />
        </main>
    );
};

export default Project;
