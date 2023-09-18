import { memo } from "react";

type ButtonProps = {
  onClick: () => void;
  text: string;
};

export const GasPumpButton = memo((props: ButtonProps) => {
  console.log("GasPumpButton Re-rendered.");
  return <button onClick={props.onClick}>{props.text}</button>;
});

GasPumpButton.displayName = "GasPumpButton";
