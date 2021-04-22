import { isNumber, isFactorial, isPowMathOperator } from "./helpers";
import { mathOperators } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      (isFactorial(prevItem) ||
        isPowMathOperator(prevItem) ||
        isNumber(prevItem)) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);

    const isValidUnaryOperatorPush =
      !isNumber(prevItem) &&
      !isNumber(item) &&
      (isFactorial(item) || isPowMathOperator(item));

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else if (isValidUnaryOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
