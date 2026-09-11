import { useEffect, useState } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

function TechnologyList() {

    const [technologies, setTechnologies] = useState<ITechnology[]>([]);
    const [stack, setStack] = useState<ITechnology[]>([])

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

    //add
    const handleAddToStack = (technology: ITechnology) => {
        const alreadyExists = stack.some((item) =>
            item.id === technology.id);

        if (alreadyExists) {
            return;
        }
        setStack((previousStack) => [
            ...previousStack,
            technology
        ])

        toast.success(`${technology.name} added to your stack!`)
    };


    //remove
    const handleRemoveFromStack = (technologyId: string) => {

        const removedTechnology = stack.find(
            (technology) => technology.id === technologyId
        );

        setStack((previousStack) =>
            previousStack.filter(
                (technology) => technology.id !== technologyId
            )
        );

        if (removedTechnology) {
            toast.success(
                `${removedTechnology.name} removed from your stack!`
            );
        }
    };

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
                                onAddToStack={handleAddToStack}
                                isAdded={stack.some((item) => item.id === tech.id)}
                            />
                        ))
                    }
                </div>


                {/* Your Stack */}
                <YourStack
                    stack={stack}
                    onRemove={handleRemoveFromStack}
                />

            </div>

        </div>
    );
}

export default TechnologyList;