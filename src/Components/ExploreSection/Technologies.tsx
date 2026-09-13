import { use } from "react";

import type { Itechnology } from "../../Type/Technology";
import AvailableTechnologies from "./AvailableTechnologies";

interface TechnologiesProps {
    technologiesPromise: Promise<Itechnology[]>
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {

    const technologies = use(technologiesPromise)

    return (

        <section className="container m-auto  mb-10 mt-15 px-4 md:px-6 lg:px-0">

            <div>

                <h2 className="text-[#0F172A] text-center font-extrabold text-2xl md:text-3xl md:text-start lg:text-4xl lg:text-start ">
                    Explore the <span className="gradient-tech">Technologies</span>
                </h2>

                <p className="text-[#64748B] text-center md:text-start lg:text-start my-2 text-sm md:text-base">
                    Pick one technology per category to build your ideal stack.
                </p>

            </div>

            <div>

                {
                    <AvailableTechnologies technologies={technologies}></AvailableTechnologies>
                }

            </div>

        </section>

    );

};

export default Technologies;