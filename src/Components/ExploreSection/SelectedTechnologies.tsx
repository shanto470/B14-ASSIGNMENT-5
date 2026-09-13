// import React from 'react';

import type { Dispatch } from "react";
import type { Itechnology } from "../../Type/Technology";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

interface TechnologiesProps {
    selectedTechnologies: Itechnology[]
    setSelectedTechnologies: Dispatch<React.SetStateAction<Itechnology[]>>
}

const SelectedTechnologies = ({ selectedTechnologies, setSelectedTechnologies }: TechnologiesProps) => {

    console.log(selectedTechnologies, "from selected compo");

    const handleRemoveBtn = () => {

        setSelectedTechnologies([])

        toast.info("Removed All")

    }

    const handleRemoverCrossBtn = (id: string, name: string) => {

        setSelectedTechnologies(selectedTechnologies.filter(
            technology => technology.id !== id,
        ))

        toast.info(`Removed ${name}`)

    }

    return (

        <div className="border border-gray-200 rounded-2xl lg:ml-8 my-5 p-5">

            {

                selectedTechnologies.length ? (

                    <>

                        <h1 className="mb-2 text-lg font-semibold text-gray-900">Your Stack</h1>

                        <p className="mb-4 text-sm leading-relaxed text-[#94A3B8] line-clamp-3">{selectedTechnologies.length} Technology Selected</p>

                        {

                            selectedTechnologies.map((technology, ind) => (

                                <div key={ind} className="border border-gray-200 rounded-2xl p-5 flex mb-1 justify-between items-center">

                                    <div className="flex items-center gap-2">

                                        <img className="w-7 h-7" src={technology.icon} alt="" />

                                        <div>

                                            <h2 className="text-[10px] font-bold text-[#0F172A]">{technology.name}</h2>

                                            <p className="text-[6px] font-bold text-[#94A3B8] ">{technology.category}</p>

                                        </div>

                                    </div>

                                    <button onClick={() => handleRemoverCrossBtn(technology.id, technology.name)}>

                                        <ImCross />

                                    </button>

                                </div>

                            ))

                        }

                        <div>

                            <button onClick={() => handleRemoveBtn()} className="btn btn-outline btn-secondary w-full text-[#D82C20] rounded-lg mt-12 mb-3 border border-[#D82C20] hover:bg-[#edd7d6] hover:border-[#edd7d6] " >Remove All</button>

                        </div>

                    </>

                ) : (

                    <>

                        <div>

                            <h1 className="mb-2 text-lg font-semibold text-gray-900">Your Stack</h1>

                            <p className="mb-4 text-sm leading-relaxed text-[#94A3B8] line-clamp-3">No technologies selected yet.</p>

                            <p className="border border-gray-200 rounded-2xl p-5 mb-1 justify-between items-center text-center">Your stack is empty.</p>

                        </div>

                    </>

                )

            }

        </div>

    );

};

export default SelectedTechnologies;