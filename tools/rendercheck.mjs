#!/usr/bin/env node
// rendercheck.mjs — the gate for defects that survive every other gate because
// they are invisible in the source and only appear in the rendered page.
//
//   node tools/rendercheck.mjs [files...] [--json] [--quiet]
//
// Bare invocation checks every item and every page file. Exit 0 iff there are no
// hard errors.
//
// WHY THIS EXISTS. Two defects reached the owner's eye at level 8, both in text
// that was valid markdown, valid frontmatter, valid phase format, and
// mathematically correct:
//
//   (1) a wikilink inside math. `resolveWikilinks` (web/lib/math-library.ts)
//       rewrites `[[id]]` into a link BEFORE KaTeX runs, so a wikilink between
//       dollar signs replaces the math source with HTML and the whole block dies.
//   (2) `\tag{$\ast$}` inside a display block. The inner dollars terminate the
//       block early, so remark-math mis-parses everything from `\tag{` onward.
//
// Neither is visible to the existing gates, and that is structural rather than an
// oversight: precheck is line based and reads proof structure, depcheck /
// fwdcheck / extcheck / citecheck read frontmatter and wikilink targets, and the
// judge reads the SOURCE text, not the output. A formula that never renders looks
// perfect to all six. The owner found both by reading the live page.
//
// So the rule this tool encodes: the renderer must see what the author wrote.
// Every check below corresponds to a real defect or to a documented mis-render,
// and none of them needs a browser, so this runs with the other gates.
//
// WHAT IT CANNOT DO. It does not render anything. A formula that is well
// delimited but mathematically malformed (`\frac{1}` , an unknown macro) still
// needs an eye or a real KaTeX pass. Treat a clean run as "the delimiters are
// sound", never as "the page renders".

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const argv = process.argv.slice(2);
const asJson = argv.includes("--json");
const quiet = argv.includes("--quiet");
const files = argv.filter((a) => !a.startsWith("--"));

// ------------------------------------------------------------------ collect
const targets = [];
if (files.length) {
  for (const f of files) targets.push(f.startsWith("/") ? f : join(REPO, f));
} else {
  const itemsDir = join(REPO, "items");
  if (existsSync(itemsDir))
    for (const f of readdirSync(itemsDir).filter((f) => f.endsWith(".md")))
      targets.push(join(itemsDir, f));
  const libDir = join(REPO, "library");
  if (existsSync(libDir))
    for (const cat of readdirSync(libDir)) {
      const d = join(libDir, cat);
      let entries = [];
      try {
        entries = readdirSync(d);
      } catch {
        continue; // not a directory
      }
      for (const f of entries)
        if (f.endsWith(".md") && f !== "_category.md") targets.push(join(d, f));
    }
}

const errors = [];
const warnings = [];
const err = (file, code, msg, excerpt) =>
  errors.push({ file, code, msg, excerpt });
const warn = (file, code, msg, excerpt) =>
  warnings.push({ file, code, msg, excerpt });

// Strip frontmatter; a title may legitimately contain `$...$` and is checked
// separately, since it is de-TeXed by plainTitle for flowcharts and OG cards.
const splitFrontmatter = (src) => {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  return m ? { fm: m[1], body: m[2] } : { fm: "", body: src };
};

const clip = (s, n = 96) => {
  const one = s.replace(/\s+/g, " ").trim();
  return one.length > n ? one.slice(0, n) + "…" : one;
};

// ------------------------------------------------------------------ checks
for (const path of targets) {
  let src;
  try {
    src = readFileSync(path, "utf8");
  } catch {
    err(path, "unreadable", "cannot read file", "");
    continue;
  }
  const rel = relative(REPO, path);
  const { body } = splitFrontmatter(src);

  // Mask escaped dollars so they never count as delimiters.
  const masked = body.replace(/\\\$/g, "  ");

  // ---- display blocks: $$ ... $$
  const displays = [];
  const displayRe = /\$\$([\s\S]*?)\$\$/g;
  let m;
  while ((m = displayRe.exec(masked)) !== null) {
    displays.push({ inner: m[1], start: m.index, whole: m[0] });
  }

  for (const d of displays) {
    if (d.inner.includes("$"))
      err(
        rel,
        "nested-dollar-in-display",
        "a `$` inside a `$$…$$` block terminates it early; the rest of the block is mis-parsed",
        clip(d.whole),
      );
    if (/\[\[/.test(d.inner))
      err(
        rel,
        "wikilink-in-math",
        "wikilinks are resolved before KaTeX runs, so this kills the whole block",
        clip(d.whole),
      );
    if (/\r?\n/.test(d.inner.trim()))
      err(
        rel,
        "multiline-display",
        "display math must be one source line between `$$`; a hard line break mis-renders",
        clip(d.whole),
      );
  }

  // ---- `$` inside \tag{...}, wherever it appears
  for (const t of masked.matchAll(/\\tag\{[^}]*\}/g)) {
    if (t[0].includes("$"))
      err(
        rel,
        "dollar-in-tag",
        "`\\tag` takes math content directly; inner dollars break the enclosing block",
        t[0],
      );
  }

  // ---- inline math: pair the dollars in order, rather than regex-matching a
  // span. Matching `\$...\n...\$` finds the PROSE GAP between two adjacent
  // inline spans, not a span that crosses a line: on this corpus that produced
  // 40 false positives and zero true ones.
  const withoutDisplays = masked.replace(/\$\$[\s\S]*?\$\$/g, "\n");
  const parts = withoutDisplays.split("$");
  if (parts.length % 2 === 0)
    err(
      rel,
      "unbalanced-inline-dollar",
      `odd number of inline \`$\` delimiters (${parts.length - 1}) outside display blocks`,
      "",
    );
  for (let k = 1; k < parts.length - 1; k += 2) {
    const inner = parts[k];
    if (/\[\[/.test(inner))
      err(
        rel,
        "wikilink-in-math",
        "wikilinks are resolved before KaTeX runs, so this kills the formula",
        clip("$" + inner + "$"),
      );
    // A SOFT wrap inside inline math is fine and is used throughout this
    // corpus (45 occurrences on pages that render correctly), so it is not
    // flagged. A BLANK line is not: it ends the paragraph, so the closing
    // delimiter is orphaned and the dollars render literally.
    if (/\r?\n[ \t]*\r?\n/.test(inner))
      err(
        rel,
        "blank-line-in-inline-math",
        "a blank line inside `$…$` ends the paragraph; the delimiter is orphaned",
        clip("$" + inner + "$"),
      );
  }

  // ---- display delimiter balance
  const displayCount = (masked.match(/\$\$/g) || []).length;
  if (displayCount % 2 !== 0)
    err(
      rel,
      "unclosed-display",
      `odd number of \`$$\` delimiters (${displayCount})`,
      "",
    );
}

// ------------------------------------------------------------------ report
if (asJson) {
  console.log(JSON.stringify({ errors, warnings, checked: targets.length }, null, 2));
} else {
  if (!quiet) {
    for (const w of warnings)
      console.log(`  [${w.code}] ${w.file}: ${w.msg}${w.excerpt ? `\n      ${w.excerpt}` : ""}`);
    if (warnings.length) console.log("");
  }
  for (const e of errors)
    console.log(`  [${e.code}] ${e.file}: ${e.msg}${e.excerpt ? `\n      ${e.excerpt}` : ""}`);
  if (errors.length) {
    console.log(`\n${errors.length} ERROR(s) across ${targets.length} file(s)\n\nFAIL`);
  } else {
    console.log(
      `\nOK — ${targets.length} file(s): no wikilink inside math, no nested or unbalanced` +
        `\ndelimiters, no multiline display block. This checks DELIMITERS, not whether` +
        `\nthe mathematics inside them renders.`,
    );
  }
}

process.exit(errors.length ? 1 : 0);
