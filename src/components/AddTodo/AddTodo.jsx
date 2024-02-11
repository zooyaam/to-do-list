export default function AddTodo() {
  return (
    <div className="mt-8 p-5 bg-background w-[30rem] h-52 rounded-lg">
      <div className="grid gap-[23px] grid-rows-3 w-full">
        <input
          type="text"
          placeholder="AddTodo"
          className="p-2 w-full outline-none border rounded-lg"
        />
        <button className="bg-tertiary w-full p-2 rounded-lg justify-self-end row-start-3">
          Add
        </button>
      </div>
    </div>
  );
}
