import { type Dispatch } from "react";

import type { Itechnology } from "../../Type/Technology";
import { MdOutlineDone } from "react-icons/md";
import { toast } from "react-toastify";

interface TechnologiesProps {

    technology: Itechnology;
    selectedTechnologies: Itechnology[]
    setSelectedTechnologies: Dispatch<React.SetStateAction<Itechnology[]>>

}

const TechnologyCard = ({ technology, selectedTechnologies, setSelectedTechnologies }: TechnologiesProps) => {

    const isAdded = selectedTechnologies.some(
        selectedTechnology => selectedTechnology.id === technology.id
    );

    const handleAddStackBtn = () => {

        // console.log("btn clicked");

        if (isAdded) {

            toast.info("Duplicate add attempt");

            // alert("Already added to stack")

            return;

        }

        setSelectedTechnologies([
            ...selectedTechnologies,
            technology
        ]);

        toast.success("Added successfully")

    }

    return (

        <div className={`border ${isAdded ? "border border-pink-700" : "border-gray-200"} rounded-2xl p-4 md:p-5`}>

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

            <h3 className="mb-2 text-lg font-semibold text-gray-900">{technology.name}</h3>

            <p className="mb-4 text-sm leading-relaxed text-gray-500 line-clamp-3">

                {technology.description}

            </p>

            <div className="mb-4 flex justify-between items-center text-sm">

                <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">

                    {technology.category}

                </span>

                <span className="text-xs text-gray-500 ">{technology.difficulty}</span>

                <span className="flex items-center gap-1 text-xs font-medium text-gray-700">

                    <span className="text-yellow-500">★</span>

                    {technology.rating}

                </span>

            </div>

            <button onClick={() => handleAddStackBtn()} className={`w-full rounded-lg py-2.5 text-sm font-medium btn ${isAdded ? "text-pink-700 bg-pink-100" : "text-white bg-gray-900"}`}>

                {

                    isAdded ? (

                        <>

                            <MdOutlineDone /> Added to Stack

                        </>

                    ) : (

                        <>

                            Add to Stack

                        </>

                    )

                }

            </button>

        </div>

    );

};

export default TechnologyCard;