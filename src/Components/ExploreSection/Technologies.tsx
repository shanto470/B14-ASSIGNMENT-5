import { use } from "react";
import type { Itechnology } from "../../Type/Technology";
import TechnologyCards from "./AvailableTechnologies";
interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}


const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise)
    return (
        <section className="container m-auto border border-amber-600 mb-10 -mt-15">
            <div>
                <h2 className="text-[#0F172A] font-extrabold text-4xl ">Explore the <span className="gradient-tech">Technologies</span></h2>
                <p className="text-[#64748B] my-2">Pick one technology per category to build your ideal stack.</p>
            </div>
            <div>
                {
                    <TechnologyCards technologies={technologies} ></TechnologyCards>
                }
            </div>
        </section>
    );
};

export default Technologies;