import { useState } from "react";
import ActionTask from "./ActionTask";
import AddTaskModal from "./AddTaskModal";
import NoTaskFound from "./NoTaskFound";
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
        isFavorite: false,
    };

    const [tasks, setTasks] = useState([defaultTask]);
    const [addTaskModal, setAddTaskModal] = useState(false);
    const [taskToUpdate, setTaskToUpdate] = useState(null);

    // add task================================================
    const handleAddTask = (newTask, isAdd) => {
        if (isAdd) {
            setTasks([...tasks, newTask]);
            setAddTaskModal(false);
        } else {
            setTasks(
                tasks.map((task) => {
                    if (task.id === newTask.id) {
                        return newTask;
                    }
                    return task;
                })
            );
            setAddTaskModal(false);
        }
    };

    // update / edit task=======================================
    const handleEditTask = (task) => {
        console.log("clicked", task);
        setTaskToUpdate(task);
        setAddTaskModal(true);
    };

    const handleCloseModal = () => {
        setAddTaskModal(false);
        setTaskToUpdate(null);
    };

    // delete task ============================
    const handleDeleteTask = (id) => {
        const deleteAfterTask = tasks.filter((task) => task.id !== id);
        setTasks(deleteAfterTask);
    };

    // delete all ===========
    const handleDeleteALLTask = () => {
        tasks.length = 0;
        setTasks([...tasks]);
    };
    // handle favorite ===========
    const handleFavoriteTask = (id) => {
        const newTasks = [...tasks];
        const favIndex = newTasks.findIndex((task) => task.id === id);
        newTasks[favIndex].isFavorite = !newTasks[favIndex].isFavorite;
        setTasks(newTasks);
    };

    // handle search
    const handleSearchTask = (searchTerm) => {
        // console.log(searchTerm);
        const filtered = tasks.filter((task) =>
            task.title
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        );
        setTasks([...filtered]);
    };
    return (
        <section className="mb-20" id="tasks">
            {addTaskModal && (
                <AddTaskModal
                    onSave={handleAddTask}
                    taskToUpdate={taskToUpdate}
                    handleCloseModal={handleCloseModal}
                ></AddTaskModal>
            )}
            <div className="container">
                {/* task search  */}
                <SearchTask onSearch={handleSearchTask}></SearchTask>
                {/* <!-- Search Box Ends --> */}

                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    {/* task action  */}
                    <ActionTask
                        setAddTaskModal={setAddTaskModal}
                        onDeleteAll={handleDeleteALLTask}
                    ></ActionTask>
                    {/* task list  */}
                    {tasks.length > 0 ? (
                        <TaskList
                            tasks={tasks}
                            onEdit={handleEditTask}
                            onDelete={handleDeleteTask}
                            onFavorite={handleFavoriteTask}
                        ></TaskList>
                    ) : (
                        <NoTaskFound></NoTaskFound>
                    )}
                </div>
            </div>
        </section>
    );
}

export default TaskBoard;
