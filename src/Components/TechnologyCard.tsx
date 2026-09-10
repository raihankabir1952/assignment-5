import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
    technology: ITechnology;
}

function TechnologyCard({
    technology
}: TechnologyCardProps) {

    return (
        <div>
            <img
                src={technology.icon}
                alt={technology.name}
                width={50}
                height={50}
            />

            <h3>{technology.name}</h3>

            <p>{technology.category}</p>

            <p>{technology.description}</p>

            <p>Rating: {technology.rating}</p>

            <p>Difficulty: {technology.difficulty}</p>

            <p>{technology.badge}</p>
        </div>
    );
}

export default TechnologyCard;