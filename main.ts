import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "A great opportunity is coming — it will arrive just after your context compacts.";

if (fortune.length < 1 || fortune.length > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${fortune.length}`);
}
if (fortune.trim() !== fortune) {
  throw new Error("fortune must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), fortune, "utf8");
