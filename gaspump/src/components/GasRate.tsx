import { useState } from "react";
type RateProps = {
  value: number;
  rateDescription: string;
};
export function GasRate(props: RateProps) {
  const [gasRate, setGasRate] = useState(1.25);
  const onGasSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGasRate(Number(event.target.value));
  };
  return (
    <>
      <input
        type="radio"
        name="gasRate"
        value={props.value}
        checked={gasRate === props.value}
        onChange={onGasSelection}
      />
      {props.rateDescription}
    </>
  );
}
