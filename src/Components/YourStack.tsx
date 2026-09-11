import type { ITechnology } from "../types/technology";

interface YourStackProps {
    stack: ITechnology[];
    onRemove: (techlonogyId: string) => void
}

function YourStack({ stack, onRemove }: YourStackProps) {

    return (
        <div className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

            <h2 className="text-xl font-bold text-gray-800">
                Your Stack
            </h2>

            <p className="mt-2 text-sm text-gray-500">
                {stack.length} technologies selected
            </p>

            <div className="my-5 border-t border-gray-100"></div>

            <div className="rounded-xl bg-gray-50 px-4 py-6">

                {stack.length === 0 ? (
                    <p className="text-center text-sm font-medium text-gray-500">
                        Your stack is empty
                    </p>
                ) : (
                    <div className="space-y-3">
                        {stack.map((technology) => (
                            <div
                                key={technology.id}
                                className="flex items-center justify-between rounded-lg bg-white p-3 shadow-sm"
                            >

                                <div className="flex items-center gap-3">

                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="h-8 w-8 object-contain"
                                    />

                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {technology.name}
                                        </p>

                                        <p className="text-xs text-gray-500">
                                            {technology.category}
                                        </p>
                                        <strong>
                                            ⭐{technology.rating}
                                        </strong>
                                    </div>

                                </div>

                                <button
                                    onClick={() => onRemove(technology.id)}
                                    className="text-sm text-red-500 hover:text-red-700"
                                >
                                    ❌
                                </button>

                            </div>
                        ))}
                    </div>
                )}

            </div>

        </div>
    );
}

export default YourStack;