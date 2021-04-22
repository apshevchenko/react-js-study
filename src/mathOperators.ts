export type ScalarOperationType = (first: number, second: number) => number;

export type UnaryOperationType = (first: number) => number;

export const mul: ScalarOperationType = (
  first: number,
  second: number
): number => first * second;

export const div: ScalarOperationType = (
  first: number,
  second: number
): number => first / second;

export const add: ScalarOperationType = (
  first: number,
  second: number
): number => first + second;

export const minus: ScalarOperationType = (
  first: number,
  second: number
): number => first - second;

export const exp: ScalarOperationType = (num: number, pow: number): number =>
  Math.pow(num, pow);

export const factorial: UnaryOperationType = (num: number): number =>
  num != 1 ? num * factorial(num - 1) : 1;

export const pow: UnaryOperationType = (num: number): number =>
  Math.pow(num, 2);

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": exp,
};

export const unaryMathOperators: {
  [key: string]: UnaryOperationType;
} = {
  "**": pow,
  "!": factorial,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "^": ZERO,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
