import { describe, it, expect } from "vitest";
import { computeGeometry, flipFactor } from "./neckerIll";

describe("flipFactor", () => {
  it("stays within [0, 1]", () => {
    for (const t of [0, 1, 10, 100, 1000, -50]) {
      const f = flipFactor(t);
      expect(f).toBeGreaterThanOrEqual(0);
      expect(f).toBeLessThanOrEqual(1);
    }
  });

  it("is 0.5 at t=0", () => {
    expect(flipFactor(0)).toBeCloseTo(0.5, 10);
  });
});

describe("computeGeometry", () => {
  it("computes center and scaled sizes deterministically", () => {
    const g = computeGeometry(200, 100);
    expect(g.cx).toBe(100);
    expect(g.cy).toBe(50);
    // min dimension = 100 => s = 42
    expect(g.s).toBeCloseTo(42, 6);
    expect(g.off).toBeCloseTo(42 * 0.42, 6);
  });
});

