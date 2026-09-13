// import React from 'react';

import type { Itechnology } from "../../Type/Technology";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
    technologies: Itechnology[]
}

const AvailableTechnologies = ({ technologies }: TechnologiesProps) => {
    return (
        <div className=" grid grid-cols-4 my-10">

            <div className="col-span-3 grid grid-cols-3 gap-5 my-5 ">
                {
                    technologies.map((technology: Itechnology, ind: number) => {
                        return (
                            <TechnologyCard key={ind} technology={technology}></TechnologyCard>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AvailableTechnologies;