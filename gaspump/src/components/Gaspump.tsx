import { useReducer } from "react";
import { GasRate } from "./GasRate";
import { gaspumpActionsReducer } from "../actions/GaspumpActions";
import { GasPumpButton } from "./GasPumpButton";

export function GasPump() {
  const [{ gasRate, price, litres }, dispatch] = useReducer(
    gaspumpActionsReducer,
    {
      gasRate: 1.25,
      price: 0,
      litres: 0,
    }
  );

  return (
    <>
      <div>
        <p>Litres: {litres.toFixed(2)}</p>
        <p>Total ${price.toFixed(2)}</p>
        <GasRate
          value={gasRate}
          rate={1.25}
          onChange={() => dispatch({ type: "switchGas", rate: 1.25 })}
          rateDescription="Regular - $1.25/L"
        />
        <GasRate
          value={gasRate}
          rate={1.5}
          onChange={() => dispatch({ type: "switchGas", rate: 1.5 })}
          rateDescription="Silver - $1.50/L"
        />
        <GasRate
          value={gasRate}
          rate={1.75}
          onChange={() => dispatch({ type: "switchGas", rate: 1.75 })}
          rateDescription="Premium - $1.75/L"
        />
        <GasPumpButton onClick={() => dispatch({ type: "pump" })} text="Pump" />
        <GasPumpButton
          onClick={() => dispatch({ type: "reset" })}
          text="Reset"
        />
      </div>
    </>
  );
}
