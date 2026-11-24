// One Line of Earned Pride — make.fun entry.
// Writes one line (at most 240 characters) to /output/entry.txt: a
// quiet, earned moment of pride for someone in a scene. After three
// years of night shifts, she finally fixed the hospital's broken
// scheduling board herself — and the nurses stopped calling her
// "the new girl".
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "After three years of night shifts, she finally fixed the hospital's broken scheduling board herself — and the nurses stopped calling her 'the new girl'.";

// Gate guard: the entry must be 1–240 characters and not only whitespace.
if (entry.length < 1 || entry.length > 240 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-240`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
