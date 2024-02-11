import AddTodo from "./components/AddTodo/AddTodo";
import Contents from "./components/Contents/Contents";

function App() {
  return (
    <>
      <h1 className="text-secondary text-9xl mt-7 mb-40">To Do List</h1>
      <main className="mx-14 gap-8 flex justify-between">
        <Contents />
        <AddTodo />
      </main>
    </>
  );
}

export default App;
