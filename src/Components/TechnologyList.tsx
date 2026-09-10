import { useEffect, useState } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";

function TechnologyList() {

    const [technologies, setTechnologies] = useState<ITechnology[]>([]);

    useEffect(() => {

        fetch("/data.json")
            .then((response) => {
                return response.json();
            })
            .then((data: ITechnology[]) => {
                setTechnologies(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

return (
    <div className="mx-auto w-[90%] max-w-7xl py-10">

        <button className="mb-8 text-3xl font-bold text-gray-800">
            Available Technologies : {technologies.length} 
        </button><br />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]">

            {/* Technology Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {
                    technologies.map((tech) => (
                        <TechnologyCard
                            key={tech.id}
                            technology={tech}
                        />
                    ))
                }
            </div>


            {/* Your Stack */}
            <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

                <h2 className="text-xl font-bold text-gray-800">
                    Your Stack
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    No technologies select yet
                </p>

                <div className="my-5 border-t border-gray-100"></div>

                <div className="rounded-xl bg-gray-50 px-4 py-6 text-center">

                    <p className="text-sm font-medium text-gray-500">
                        Your stack is empty
                    </p>

                </div>

            </div>

        </div>

    </div>
);
}

export default TechnologyList;