import { ASSET_MANIFEST, type PaperKey } from "./manifest";

const BASE =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_ASSET_BASE_URL
    ? String(import.meta.env.VITE_ASSET_BASE_URL).replace(/\/$/, "")
    : "";

function normalizeRelative(path: string) {
  return path.replace(/^\/+/, "");
}

export function assetUrl(path: string): string;
export function assetUrl(key: PaperKey, kind: "papers"): string;
export function assetUrl(pathOrKey: string, kind?: "papers"): string {
  const path =
    kind === "papers" && pathOrKey in ASSET_MANIFEST.papers
      ? ASSET_MANIFEST.papers[pathOrKey as PaperKey]
      : pathOrKey;

  const rel = normalizeRelative(path);
  if (!BASE) return rel;
  return `${BASE}/${rel}`;
}

