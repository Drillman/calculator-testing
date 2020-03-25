export class Calculator {
  public static add(a: number, b: number): number {
    return a+b;
  }

  public static sub(a: number, b: number): number {
    return a-b;
  }

  public static mul(a: number, b: number): number {
    return a*b;
  }

  public static div(a: number, b: number): number {
    return a/b;
  }

  public static avg(arr: number[]): number {
    const sum = arr.reduce((prev, curr) => prev + curr);
    return sum/arr.length;
  }
}
