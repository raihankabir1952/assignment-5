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
        <div>

            <h2>
                Available Technologies: {technologies.length}
            </h2>

            {
                technologies.map((tech) => (
                    <TechnologyCard
                        key={tech.id}
                        technology={tech}
                    />
                ))
            }

        </div>
    );
}

export default TechnologyList;