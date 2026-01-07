// src/lib/config.ts

// ✅ Canonical category keys (as requested)
export const CATEGORY_KEYS = [
  "10K Men",
  "10K Women",
  "30K Men",
  "30K Women",
  "45K Men",
  "45K Women",
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

export const DEFAULT_EVENT_TITLE = "IMR 2025 Timing By IZT Race Technology";

// LocalStorage keys
export const LS_EVENT_TITLE = "imr_event_title";
export const LS_DATA_VERSION = "imr_data_version"; // used to force refresh across tabs

// IndexedDB keys (for CSV file contents)
export const DB_NAME = "imr_timing_db";
export const DB_STORE = "files";

export type CsvKind = "master" | "start" | "finish" | "checkpoint";

export const CSV_KINDS: CsvKind[] = ["master", "start", "finish", "checkpoint"];
