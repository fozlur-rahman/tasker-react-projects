import { useState } from "react";
import ActionTask from "./ActionTask";
import AddTaskModal from "./AddTaskModal";
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
    const [addTaskModal, setAddTaskModal] = useState(false);
    console.log(tasks);
    const handleAddTask = (newTask) => {
        // console.log("adding a task", newTask);

        setTasks([...tasks, newTask]);
        setAddTaskModal(false);
    };
    return (
        <section className="mb-20" id="tasks">
            {addTaskModal && (
                <AddTaskModal onSave={handleAddTask}></AddTaskModal>
            )}
            <div className="container">
                {/* task search  */}
                <SearchTask></SearchTask>
                {/* <!-- Search Box Ends --> */}

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/* task action  */}
                    <ActionTask setAddTaskModal={setAddTaskModal}></ActionTask>
                    {/* task list  */}
                    <TaskList tasks={tasks}></TaskList>
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
