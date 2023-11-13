import { useCountContext } from "./CountContext";

export const Sidebar = () => {
  const { count, incrementCount } = useCountContext();

  return (
    <div className="border border-black h-[1000px] m-1 w-[300px] text-center">
      <div>Count : {count}</div>
      <div>
        <button
          className="bg-slate-200 p-1 border border-black"
          onClick={() => incrementCount()}
        >
          Increase count
        </button>
      </div>
    </div>
  );
};
