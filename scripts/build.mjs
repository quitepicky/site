import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const source = path.join(root, "public");
const output = path.join(root, "dist");
const basePath = (process.env.SITE_BASE_PATH ?? "").replace(/\/$/, "");
if (!/^(\/[a-zA-Z0-9_-]+)*$/.test(basePath)) throw new Error("Invalid SITE_BASE_PATH");
const wordmark = await readFile(path.join(root, "assets/wordmark.svg"), "utf8");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
await cp(path.join(root, "assets/qp2.png"), path.join(output, "favicon.png"));
await cp(path.join(root, "assets/wordmark.svg"), path.join(output, "wordmark.svg"));
for (const page of ["index.html", "404.html"]) {
  const template = await readFile(path.join(source, page), "utf8");
  const html = template.replace("{{WORDMARK}}", () => wordmark.trim());
  if (html.includes("{{")) throw new Error(`Unresolved template in ${page}`);
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"?#]*)"/g)) {
    const target = path.join(output, url === "/" ? "index.html" : url);
    if (!(await stat(target)).isFile()) throw new Error(`Missing site asset: ${url}`);
  }
  await writeFile(path.join(output, page), html.replace(/((?:href|src)=")\/(?!\/)/g, `$1${basePath}/`));
}
console.log(`Static site built in dist/ for ${basePath || "/"}`);
