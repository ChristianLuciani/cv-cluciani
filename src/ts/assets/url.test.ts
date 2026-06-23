import { describe, it, expect } from "vitest";
import { assetUrl } from "./url";

describe("assetUrl", () => {
  it("returns relative path when VITE_ASSET_BASE_URL is not set", () => {
    expect(assetUrl("assets/images/papers/foo.svg")).toBe(
      "assets/images/papers/foo.svg"
    );
  });

  it("resolves a paper key via manifest when kind is papers", () => {
    const url = assetUrl("trujillo2025", "papers");
    expect(url).toContain("assets/images/papers/");
    expect(url).toContain("trujillo2025_thumb.svg");
  });
});

