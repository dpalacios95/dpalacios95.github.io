import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillSection from "./SkillsSection";


const MainContent = () => {
    return (
        <div className="relative overflow-x-hidden overflow-y-scroll no-scrollbar sm:left-0 sm:right-[20vw] sm:w-[50vw]">
            <div className="page-wrapper bg-red-50 rounded-xl">
                <div className="m-10 p-10">
                    <AboutSection />

                    <SkillSection />

                    <ProjectsSection />

                </div>
            </div>
        </div>
    )
}


export default MainContent;