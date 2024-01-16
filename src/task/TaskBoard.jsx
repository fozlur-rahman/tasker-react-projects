import { useState } from "react";
import ActionTask from "./ActionTask";
import SearchTask from "./SearchTask";
import TaskList from "./TaskList";

function TaskBoard() {
    const defaultTask = {
        id: crypto.randomUUID(),
        title: "learn eith sumit",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, nihil!",
        tags: ["web", "app", "backend"],
        priority: "high",
        isFavorite: true,
    };

    const [tasks, setTasks] = useState([defaultTask]);
    return (
        <section className="mb-20" id="tasks">
            <div className="container">
                {/* task search  */}
                <SearchTask></SearchTask>
                {/* <!-- Search Box Ends --> */}

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/* task action  */}
                    <ActionTask></ActionTask>
                    {/* task list  */}
                    <TaskList tasks={tasks}></TaskList>
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
