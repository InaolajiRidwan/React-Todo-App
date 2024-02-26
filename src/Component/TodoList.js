import React from "react";
import { useState } from "react";
import { Task } from "./Task";
import "./style.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="">
      <div className="addTask bg-blue-800 h-60">
        <div className=" ">
          <h1 className="text-5xl pt-5 text-white font-extrabold italic ">
            TO DO DAILY
          </h1>
        </div>
        <input
          className="border-2 border-black rounded-lg h-20 w-5/12 mt-6 text-center text-lg italic"
          onChange={handleChange}
        />
        <button
          className="ms-5 text-white italic text-3xl w-56 hover:bg-green-500 md:h-20 bg-black h-10 mt-2 rounded-lg "
          onClick={addTask}
        >
          AddTask
        </button>
      </div>
      <div className="pt-60">
        {todoList.map((task) => {
          return (
            <div>
              <span>
                <Task
                  taskName={task.taskName}
                  id={task.id}
                  deleteTask={deleteTask}
                />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
