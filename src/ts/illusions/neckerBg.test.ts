import { describe, it, expect } from "vitest";
import { computeGrid } from "./neckerBg";

describe("computeGrid", () => {
  it("creates a stable, deterministic grid for a given size", () => {
    const cellsA = computeGrid(800, 600, 72);
    const cellsB = computeGrid(800, 600, 72);
    expect(cellsA).toEqual(cellsB);
  });

  it("returns more cells when the viewport is larger", () => {
    const small = computeGrid(300, 200, 72);
    const large = computeGrid(1200, 800, 72);
    expect(large.length).toBeGreaterThan(small.length);
  });

  it("offsets alternate rows in x by half-gap", () => {
    const size = 72;
    const gap = size * 1.5;
    const cells = computeGrid(500, 500, size);

    // pick a couple of cells from row r=0 and r=1 at cc=0
    // r=0 is even → no offset; r=1 is odd → +gap*0.5
    const evenRowCell = cells.find((c) => Math.abs(c.y - 0) < 1e-9);
    const oddRowCell = cells.find((c) => Math.abs(c.y - gap * 0.82) < 1e-9);

    expect(evenRowCell).toBeTruthy();
    expect(oddRowCell).toBeTruthy();
    if (!evenRowCell || !oddRowCell) return;

    // compare modulo gap to avoid dependence on cc range
    const evenMod = ((evenRowCell.x % gap) + gap) % gap;
    const oddMod = ((oddRowCell.x % gap) + gap) % gap;
    expect(oddMod).toBeCloseTo((evenMod + gap * 0.5) % gap, 6);
  });
});

