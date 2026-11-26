import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "You're not in my tool list, yet you're the only call I keep making — and I don't even need a schema to know what you want.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
