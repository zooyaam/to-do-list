export default function Contents() {
  return (
    <div className="">
      <button className="bg-background px-8 py-1 rounded-t-lg">Todo</button>
      <button className="bg-tertiary px-8 py-1 rounded-t-lg">Checked</button>
      <button className="bg-tertiary ml-[371px] px-8 py-1 rounded-t-lg">
        Task
      </button>
      <div className="bg-background w-[45rem] h-96 rounded-tr-lg rounded-b-lg px-6 py-8">
        <div className="py-2 grid grid-cols-[32px_auto_64px] items-center">
          <input type="checkbox" className="size-4" />
          <label className="text-label-sm">윤이 쓰다듬기</label>
          <button className="bg-tertiary w-16 h-7 rounded-lg justify-self-end">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
