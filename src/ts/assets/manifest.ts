/**
 * Logical asset keys → relative paths (CDN-agnostic).
 * Keep paths relative so they can be served locally or via a CDN base URL.
 */
export const ASSET_MANIFEST = {
  papers: {
    trujillo2025: "assets/images/papers/trujillo2025_thumb.svg",
    landazuri2025: "assets/images/papers/landazuri2025_thumb.svg",
    zambrano2023: "assets/images/papers/zambrano2023_thumb.svg",
    landazuri2023: "assets/images/papers/landazuri2023_thumb.svg",
    zambrano2022: "assets/images/papers/zambrano2022_thumb.svg",
    usfq2019: "assets/images/papers/usfq2019_thumb.svg",
    cabrera2006: "assets/images/papers/cabrera2006_thumb.png",
    hosaka2006: "assets/images/papers/hosaka2006_thumb.svg"
  }
} as const;

export type PaperKey = keyof typeof ASSET_MANIFEST.papers;

