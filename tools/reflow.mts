// Reflow proof-body paragraphs to single physical lines, because the precheck
// checker (tools/precheck.mts) is line-based: a step's justification tags are
// read off the END of a physical line, and generators sometimes hard-wrap a
// long step across several lines.
//
// ONE EXCEPTION, because joining can DESTROY that credit. Many authored batches
// (all of phase-2-next-18's batch 1, among others) end a step's FIRST physical
// line with its bracketed justification group and continue the step on the
// following lines. Joining such a paragraph moves the tag off the end and
// replaces it with whatever the step happens to end in — a content bracket such
// as "[finite counting]" (precheck: bad-tag) or nothing at all (precheck:
// untagged-steps) — turning an item that passes into one that fails. A line
// that starts a numbered step AND already ends with a bracketed group is
// therefore emitted as its own logical line, and only its continuation is
// joined. A paragraph whose step tag is not yet at the end of a physical line
// (the wrapped-tag shape) is still joined exactly as before, which is the case
// this tool exists for.
//
// Only touches text from the '## Facts & Assumptions' marker onward, and only
// joins soft-wrapped lines WITHIN a paragraph. Frontmatter, the prose above the
// marker, '## ' headings, and blank-line paragraph breaks are left intact.
// Idempotent and purely syntactic: it never changes the mathematics.
//
//   node tools/tsx-run.mjs tools/reflow.mts items/<id>.md [more.md ...]
import { readFileSync, writeFileSync } from "node:fs";

/** A bracketed tag group at the end of a line, optionally followed by "." and
 *  a QED glyph — the shape the line-based checker credits. */
const ENDS_IN_BRACKET = /\]\s*(?:∎|□|■|\\square|\\blacksquare)?\s*\.?\s*$/;

function reflow(md: string): string {
  const marker = "\n## Facts & Assumptions\n";
  const i = md.indexOf(marker);
  if (i < 0) return md; // no phase-format body (pure definition / remark)
  const head = md.slice(0, i + marker.length);
  const tail = md.slice(i + marker.length);
  const paras = tail.split("\n\n").map((para) => {
    // Preserve Markdown math mode and code boundaries. Joining separate-line
    // $$ delimiters makes display-only \tag fail in the actual renderer.
    if (para.includes('$$') || /^\s*(?:```|~~~)/m.test(para)) return para;
    const merged: string[] = [];
    let buf: string[] = [];
    const flush = (): void => {
      if (buf.length) { merged.push(buf.map((x) => x.trim()).join(" ")); buf = []; }
    };
    for (const ln of para.split("\n")) {
      const s = ln.trim();
      if (s.startsWith("## ") || s === "") { flush(); merged.push(ln); }
      // A markdown list item starts a new logical line. Without this, a Remarks
      // list written in the repo style (bullets with no blank line between them)
      // was collapsed into ONE line, silently turning four bullets into one
      // paragraph; and a continuation line could be left starting with something
      // like "2.2 ...", which precheck then read as a numbered step after the
      // QED. Continuation lines still join onto their own bullet.
      else if (/^([-*+]|\d+[.)])\s+/.test(s)) { flush(); buf.push(ln); }
      // The tagged-step exception described in the header: keep this line as a
      // logical line of its own, so the checker still reads its trailing tag.
      else if (buf.length === 0 && /^\d+\.\d+\s/.test(s) && ENDS_IN_BRACKET.test(s)) {
        flush(); merged.push(ln);
      }
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
