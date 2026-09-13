// import React from 'react';

import { useState } from "react";
import type { Itechnology } from "../../Type/Technology";
import TechnologyCard from "./TechnologyCard";
import SelectedTechnologies from "./SelectedTechnologies";

interface TechnologiesProps {
    technologies: Itechnology[]
}

const AvailableTechnologies = ({ technologies }: TechnologiesProps) => {

    const [selectedTechnologies, setSelectedTechnologies] = useState<Itechnology[]>([])

    return (

        <div className="grid grid-cols-1 lg:grid-cols-4 my-10">

            <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">

                {

                    technologies.map((technology: Itechnology, ind: number) => {

                        return (

                            <TechnologyCard key={ind} technology={technology} selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></TechnologyCard>

                        )

                    })

                }

            </div>

            <div className="col-span-1">

                <SelectedTechnologies selectedTechnologies={selectedTechnologies} setSelectedTechnologies={setSelectedTechnologies}></SelectedTechnologies>

            </div>

        </div>
    );
};

export default AvailableTechnologies;