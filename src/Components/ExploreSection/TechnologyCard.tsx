// // import React from 'react'

// import type { Itechnology } from "../../Type/Technology";

// interface TechnologiesProps {
//     technology: Itechnology
// }

// const TechnologyCard = ({ technology }: TechnologiesProps) => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default TechnologyCard;

import type { Itechnology } from "../../Type/Technology";

interface TechnologiesProps {
    technology: Itechnology;
}

const TechnologyCard = ({ technology }: TechnologiesProps) => {
    // const {
    //     name,
    //     description,
    //     icon,
    //     badge,
    //     category,
    //     difficulty,
    //     rating,
    // } = technology;

    return (
        <div className="border border-gray-200 rounded-2xl p-5">
            {/* logo */}
            <div className="mb-4 flex items-start justify-between">
                <img
                    className="w-10 h-10"
                    src={technology.icon}
                    alt=""
                />

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    {technology.badge}
                </span>
            </div>
            {/* Title */}
            <h3 className="mb-2 text-lg font-semibold text-gray-900">{technology.name}</h3>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-gray-500 line-clamp-3">
                {technology.description}
            </p>
            {/* category ------ */}
            <div className="mb-4 flex justify-between items-center text-sm">
                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                    {technology.category}
                </span>
                <span className="text-xs text-gray-500 ">{technology.difficulty}</span>
                <span className=" flex items-center gap-1 text-xs font-medium text-gray-700">
                    <span className="text-yellow-500">★</span>
                    {technology.rating}
                </span>
            </div>

            {/* Add to Stack button */}
            <button className="w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
            >
                Add to Stack
            </button>


        </div >



    );
};

export default TechnologyCard;