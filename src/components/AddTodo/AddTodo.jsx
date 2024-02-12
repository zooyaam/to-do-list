import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");

  return (
    <div className="mt-8 p-5 bg-background w-[30rem] h-52 rounded-lg">
      <div className="grid gap-[23px] grid-rows-3 w-full">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="What needs to be done?"
          className="p-2 w-full outline-none border rounded-lg"
        />
        <button
          onClick={() => {
            setTitle("");
            onAddTodo(title);
          }}
          className="bg-tertiary w-full p-2 rounded-lg justify-self-end row-start-3 hover:bg-[#E6D4B8] transition-all duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
}
