import { count } from "./page";

export const Sidebar = () => {
  return (
    <div>
      <div>Sidebar Count : {count}</div>
      <div>
        <button onClick={() => count.value++}>Increase count</button>
      </div>
    </div>
  );
};

// export const Sidebar = () => {
//   return (
//     <div className="border border-black h-[1000px] m-1 w-[300px] text-center">
//       <div>Sidebar Count : {count}</div>
//       <div>
//         <button
//           className="bg-slate-200 p-1 border border-black"
//           onClick={() => count.value++}
//         >
//           Increase count
//         </button>
//       </div>
//     </div>
//   );
// };
