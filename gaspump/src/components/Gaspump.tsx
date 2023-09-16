import { useReducer } from "react";
import { GasRate } from "./GasRate";

type GasPumpState = {
  gasRate: number;
  price: number;
  litres: number;
};

type GasPumpAction =
  | {
      type: "switchGas";
      rate: number;
    }
  | {
      type: "pump";
    };

function reducer(state: GasPumpState, action: GasPumpAction): GasPumpState {
  switch (action.type) {
    case "switchGas":
      return { ...state, gasRate: action.rate };
    case "pump":
      return {
        ...state,
        price: state.gasRate * (state.litres + 0.5),
        litres: state.litres + 0.5,
      };
    default:
      return state;
  }
}

export function GasPump() {
  const [{ gasRate, price, litres }, dispatch] = useReducer(reducer, {
    gasRate: 1.25,
    price: 0,
    litres: 0,
  });

  return (
    <>
      <div>
        <p>Litres: {litres.toFixed(2)}</p>
        <p>Total ${price.toFixed(2)}</p>
        <input
          type="radio"
          name="gasRate"
          value={gasRate}
          checked={gasRate === 1.25}
          onChange={() => dispatch({ type: "switchGas", rate: 1.25 })}
        />
        Regular - $1.25/L
        <input
          type="radio"
          name="gasRate"
          value={gasRate}
          checked={gasRate === 1.5}
          onChange={() => dispatch({ type: "switchGas", rate: 1.5 })}
        />
        Silver - $1.50/L
        <input
          type="radio"
          name="gasRate"
          value={gasRate}
          checked={gasRate === 1.75}
          onChange={() => dispatch({ type: "switchGas", rate: 1.75 })}
        />
        Premium - $1.75/L
        <button onClick={() => dispatch({ type: "pump" })}>Pump</button>
      </div>
    </>
  );
}
