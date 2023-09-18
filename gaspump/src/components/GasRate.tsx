import { memo } from "react";

type RateProps = {
  value: number;
  rate: number;
  rateDescription: string;
  onChange: () => void;
};
export const GasRate = memo((props: RateProps) => {
  console.log("Gas Rate Re-Rendered.");
  return (
    <>
      <input
        type="radio"
        name="gasRate"
        value={props.value}
        checked={props.rate === props.value}
        onChange={props.onChange}
      />
      {props.rateDescription}
    </>
  );
});
GasRate.displayName = "GasRate";
