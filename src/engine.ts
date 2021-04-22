import { ParsedLineType } from "./parser";
import { isNumber, isPowMathOperator, isFactorial } from "./helpers";
import {
  mathOperators,
  mathPriorities,
  mathOperatorsPriorities,
  unaryMathOperators,
} from "./mathOperators";

const [ZERO, FIRST, SECOND] = mathPriorities;

export const unaryPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, item) => {
    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] !== SECOND &&
      mathOperatorsPriorities[item] !== FIRST &&
      mathOperatorsPriorities[item] !== ZERO
    ) {
      if (isFactorial(String(item))) {
        result = [
          ...result.slice(0, 1),
          unaryMathOperators["!"](Number(String(item).replace("!", ""))),
        ];
      } else if (isPowMathOperator(String(item))) {
        result = [
          ...result.slice(0, 1),
          unaryMathOperators["**"](Number(String(item).replace("**", ""))),
        ];
      }
    } else {
      result.push(item);
    }
    return result;
  }, []);

export const zeroPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === ZERO) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }

      if (mathOperators[item]) {
        result = [
          ...result.slice(0, -2),
          mathOperators[item](Number(prevItem), Number(nextItem)),
        ];
      }
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === FIRST) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [
        ...result.slice(0, -2),
        mathOperators[item](Number(prevItem), Number(nextItem)),
      ];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
