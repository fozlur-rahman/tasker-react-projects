import { useState } from "react";

function AddTaskModal({ onSave }) {
    const [newTask, setNewTask] = useState({
        id: crypto.randomUUID(),
        title: " ",
        description: " ",
        tags: [],
        priority: " ",
        isFavorite: false,
    });

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "tags") {
            value = value.split(",");
        }
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };
    return (
        <>
            <div className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 z-10"></div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="mx-auto my-10 absolute left-1/3 top-10 z-10 shadow-lg w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
            >
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    Add New Task
                </h2>

                {/* <!-- inputs --> */}
                <div className="space-y-9 text-white lg:space-y-10">
                    {/* <!-- title --> */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            onChange={handleChange}
                            value={newTask.title}
                            required
                        />
                    </div>
                    {/* <!-- description --> */}
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            onChange={handleChange}
                            value={newTask.description}
                            required
                        ></textarea>
                    </div>
                    {/* <!-- input group --> */}
                    <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                        {/* <!-- tags --> */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                onChange={handleChange}
                                value={newTask.tags}
                                required
                            />
                        </div>
                        {/* <!-- priority --> */}
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                onChange={handleChange}
                                value={newTask.priority}
                                required
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <!-- inputs ends --> */}
                <div className="mt-16 flex justify-center lg:mt-20">
                    <button
                        onClick={() => onSave(newTask)}
                        type="submit"
                        className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
                    >
                        Create new Task
                    </button>
                </div>
            </form>
        </>
    );
}

export default AddTaskModal;
