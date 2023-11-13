import { count } from "./page";

export const Header = () => {
  return (
    <div className="border m-1 border-black h-[100px] w-vw text-5xl flex items-center justify-center">
      <div className="absolute left-2 text-green-500">Signals demo</div>
      <h1>Header</h1>
      <div className="absolute left-[75vw]">count: {count}</div>
    </div>
  );
};
