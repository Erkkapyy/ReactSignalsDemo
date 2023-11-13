export const DummyElement = ({ index }: { index: number }) => (
  <div key={index} className="border p-1 m-1">
    E {index + 1}
  </div>
);
