import ProjectCard from "../projects/ProjectCard";


const ProjectsSection = () => {
    const projects = [
        {
            name: "Polyominoes",
            url: import.meta.env.VITE_GITHUB_ACCOUNT + "polyominoes_exercise",
            description: "Python exercise to calculate unique fixed polyominoes."
        }
    ]

    return (
        <div className="projects mb-10">
            <h1 className="text-start border-solid border-gray-200 border-b-2">Projects</h1>
            {projects.map((project) => (
                <ProjectCard
                    projectTitle={project.name}
                    projectURL={project.url}
                    briefDescription={project.description} />
            ))}
        </div>
    )
}

export default ProjectsSection;