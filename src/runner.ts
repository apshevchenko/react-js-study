import { parser } from "./parser";

import {
  firstPrioritiesCalc,
  secondPrioritiesCalc,
  zeroPrioritiesCalc,
  unaryPrioritiesCalc,
} from "./engine";

export const runner = (line: string): number => {
  const stack = parser(line);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const unaryPrioritiesRes = unaryPrioritiesCalc(stack);

  if (unaryPrioritiesRes.length === 1) {
    return Number(unaryPrioritiesRes[0]);
  }

  const zeroPrioritiesRes = zeroPrioritiesCalc(unaryPrioritiesRes);

  if (zeroPrioritiesRes.length === 1) {
    return Number(zeroPrioritiesRes[0]);
  }
  const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
