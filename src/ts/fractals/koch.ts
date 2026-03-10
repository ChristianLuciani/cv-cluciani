export interface Point {
  x: number;
  y: number;
}

export function kochPoint(p1: Point, p2: Point) {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;

  return {
    a: { x: p1.x + dx / 3, y: p1.y + dy / 3 },
    b: {
      x: p1.x + dx / 2 - (dy * Math.sqrt(3)) / 6,
      y: p1.y + dy / 2 + (dx * Math.sqrt(3)) / 6
    },
    c: { x: p1.x + (2 * dx) / 3, y: p1.y + (2 * dy) / 3 }
  };
}

export function kochSegments(pts: Point[], depth: number): Point[] {
  if (depth <= 0) return pts;

  const result: Point[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const { a, b, c } = kochPoint(pts[i], pts[i + 1]);
    result.push(pts[i], a, b, c);
  }
  result.push(pts[pts.length - 1]);

  return kochSegments(result, depth - 1);
}


