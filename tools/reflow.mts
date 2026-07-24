// Reflow proof-body paragraphs to single physical lines, because the precheck
// checker (tools/precheck.mts) is line-based: each numbered step must sit on one
// physical line. Generators sometimes hard-wrap a long step across several lines;
// run this before precheck to join them back.
//
// Only touches text from the '## Facts & Assumptions' marker onward, and only
// joins soft-wrapped lines WITHIN a paragraph. Frontmatter, the prose above the
// marker, '## ' headings, and blank-line paragraph breaks are left intact.
// Idempotent and purely syntactic: it never changes the mathematics.
//
//   npx --prefix /root/Projects/prestige-intelligence/worker tsx tools/reflow.mts items/<id>.md [more.md ...]
import { readFileSync, writeFileSync } from "node:fs";

function reflow(md: string): string {
  const marker = "\n## Facts & Assumptions\n";
  const i = md.indexOf(marker);
  if (i < 0) return md; // no phase-format body (pure definition / remark)
  const head = md.slice(0, i + marker.length);
  const tail = md.slice(i + marker.length);
  const paras = tail.split("\n\n").map((para) => {
    const merged: string[] = [];
    let buf: string[] = [];
    const flush = (): void => {
      if (buf.length) { merged.push(buf.map((x) => x.trim()).join(" ")); buf = []; }
    };
    for (const ln of para.split("\n")) {
      const s = ln.trim();
      if (s.startsWith("## ") || s === "") { flush(); merged.push(ln); }
      else buf.push(ln);
    }
    flush();
    return merged.join("\n");
  });
  return head + paras.join("\n\n");
}

const files = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!files.length) {
  console.error("usage: tsx tools/reflow.mts items/<id>.md [more.md ...]");
  process.exit(2);
}
for (const f of files) {
  const src = readFileSync(f, "utf8");
  const out = reflow(src);
  if (out !== src) { writeFileSync(f, out); console.log("reflowed " + f); }
  else console.log("unchanged " + f);
}
