
const ProjectCard = ({ projectTitle, briefDescription, projectURL }: { projectTitle: string, briefDescription: string, projectURL: string }) => {
    return (
        <div className="project-card pt-10">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="md:flex">
                    <a href={projectURL} target="_blank">
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{projectTitle}</div>
                            <p className="mt-2 text-gray-600">
                                {briefDescription}
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;