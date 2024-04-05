import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import SkillSection from "./SkillsSection";
//lg:overflow-x-hidden lg:overflow-y-scroll lg:no-scrollbar 

const MainContent = () => {
    return (
        <div className="relative sm:left-0 sm:right-[20vw] sm:w-[50vw]">
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