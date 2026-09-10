import type { ITechnology } from "../types/technology";

interface TechnologyCardProps {
    technology: ITechnology;
}

function TechnologyCard({ technology }: TechnologyCardProps) {
    return (
        <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 p-3">
                    <img
                        src={technology.icon}
                        alt={technology.name}
                        className="h-full w-full object-contain"
                    />
                </div>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                    {technology.badge}
                </span>

            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-800">
                {technology.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-blue-500">
                {technology.category}
            </p>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                {technology.description}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">

                <div>
                    <p className="text-xs text-gray-400">Rating</p>
                    <p className="font-semibold text-gray-700">
                        ⭐ {technology.rating}
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-xs text-gray-400">Difficulty</p>
                    <p className="font-semibold text-gray-700">
                        {technology.difficulty}
                    </p>
                </div>

            </div>

            {/* Add to Stack Button */}
            <button
                className="mt-5 w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
                Add to Stack
            </button>

        </div>
    );
}

export default TechnologyCard;