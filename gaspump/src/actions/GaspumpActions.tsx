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
    }
  | {
      type: "reset";
    };

export function gaspumpActionsReducer(
  state: GasPumpState,
  action: GasPumpAction
): GasPumpState {
  switch (action.type) {
    case "switchGas":
      return { ...state, gasRate: action.rate };
    case "pump":
      return {
        ...state,
        price: state.gasRate * (state.litres + 0.5),
        litres: state.litres + 0.5,
      };
    case "reset":
      return {
        ...state,
        gasRate: 1.25,
        price: 0,
        litres: 0,
      };
    default:
      return state;
  }
}
