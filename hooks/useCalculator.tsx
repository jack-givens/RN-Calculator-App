import { useReducer } from "react"
import { ButtonType } from "../components/CalculatorButton";

type State = {
  previous: string,
  current: string,
  operand?: string,
}

const onNumber = (state: State, value: string) =>
  state.current === '0' && value !== '.'
    ? { ...state, current: value}
    : { ...state, current: `${state.current}${value}`}

const calculate = (state: State): number => {
  const previous = parseFloat(state.previous);
  const current = parseFloat(state.current);
  switch(state.operand){
    case '/':
      return previous / current;
    case 'x':
      return previous * current;
    case '+':
      return previous + current;
    case '-':
      return previous - current;
    default:
      return current;
  }
}

const onOperator = (state: State, value: string): State => {
  switch(value){
    case '=':
      const result = calculate(state);
      return {
        previous: result === 0 ? '0' : state.current,
        current: `${calculate(state)}`,
        operand: undefined,
      };
    default:
      return {
        previous: `${calculate(state)}`,
        current: '0',
        operand: value
      }
  }
}

const onUtility = (state: State, value: string): State => {
  switch(value){
    case '%':
      return {...state, current: `${parseFloat(state.current) / 100}`};
    case '+/-':
      return {...state, current: `${parseFloat(state.current) * -1}`};
    default:
      return { previous: '0', current: '0'}
  }
}

const reducer = (state: State, action: { type: ButtonType, value: string }): State => {
  switch(action.type){
    case 'number':
      return onNumber(state, action.value);
    case 'operator':
      return onOperator(state, action.value);
    case 'utility':
      return onUtility(state, action.value);
  }
}

export const useCalculator = (initialState: State = {current: '0', previous: '0'}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const displayedValue = state.current === '0' && state.previous !== '0' ? state.previous : state.current;
  return {
    state,
    dispatch,
    value: displayedValue !== '0.' ? parseFloat(displayedValue).toLocaleString() : displayedValue
  }
}