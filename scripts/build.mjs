import { cp, mkdir, readFile, rm, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(root, "public");
const output = path.join(root, "dist");
const html = await readFile(path.join(source, "index.html"), "utf8");
for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"?#]*)"/g)) {
  const target = path.join(source, url === "/" ? "index.html" : url);
  if (!(await stat(target)).isFile()) throw new Error(`Missing site asset: ${url}`);
}
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log("Static site built in dist/");
