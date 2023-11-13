import { useCountContext } from "./CountContext";
import { DummyElement } from "./DummyElement";

export const Content = () => {
  const { count } = useCountContext();

  const elements = Array.from({ length: 2000 }, (_, index) => (
    <DummyElement key={index} index={index} />
  ));

  return (
    <div
      style={{ width: "calc(100vw - 328px)" }}
      className="border border-b-0 border-black m-1 absolute left-[304px] top-[104px] text-center"
    >
      <div>Content</div>
      <div>We do not care about count!</div>
      <div className="flex flex-wrap">{elements}</div>
      <div className="border border-black m-1">
        <big>I care about count! It is {count}</big>
      </div>
    </div>
  );
};
