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
// IT ALSO RENDERS. Every math span is passed through the real KaTeX, loaded from
// the app repo, with the same options the renderer uses (MathMarkdown.tsx calls
// rehype-katex with NO options, so plain defaults and no custom macros). This
// was added after a delimiter-clean formula still failed to render: KaTeX parses
// `\tag{...}` in TEXT mode, where `\ast` is undefined, while the `$\ast$` form
// that KaTeX wants is broken by markdown before KaTeX ever sees it. Two layers,
// two different failures, and only an actual render pass sees both.
//
// WHAT IT STILL CANNOT DO. It checks that each span PARSES, not that the page
// looks right: spacing, line breaking, a formula that parses but says the wrong
// thing. If KaTeX cannot be loaded the parse pass is skipped and reported as
// skipped, never as passed.
//
// IT ALSO PARSES THE FRONTMATTER, with the renderer's own YAML parser. Added
// 2026-08-04 after two published pages were found returning 404 to the public
// since the day each was published. The corpus loader wraps its parse in a bare
// `catch {}`, so a frontmatter YAML error does not break the item — it deletes
// it, and the page that lists it then refuses to render. Nine files, two
// defects: a duplicate `verification:` key, and an unescaped apostrophe inside a
// single-quoted title. Every gate passed, because every other gate reads
// frontmatter with a regex that takes the first matching line.
//
// Canonical delimiters are `$…$` and `$$…$$`. Common TeX delimiters `\(…\)`
// and `\[…\]` are NOT parsed by remark-math, so they are literal source text
// in the rendered library; flag them before they reach a reader.

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { katexCandidates, yamlCandidates } from "./paths.mjs";

const REPO = join(fileURLToPath(new URL(".", import.meta.url)), "..");

// KaTeX lives in the app repo; this repo has no node_modules of its own. Same
// sibling-repo pattern the precheck runner uses for tsx.
const require_ = createRequire(import.meta.url);
let katex = null;
let katexWhy = "";
for (const cand of katexCandidates()) {
  try {
    katex = require_(cand);
    break;
  } catch (e) {
    katexWhy = e.message;
  }
}
// The renderer's YAML parser, for the strict-frontmatter check below.
let YAML = null;
let yamlWhy = "";
for (const cand of yamlCandidates()) {
  try {
    YAML = require_(cand);
    break;
  } catch (e) {
    yamlWhy = e.message;
  }
}

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

const tryKatex = (rel, tex, displayMode) => {
  if (!katex) return;
  if (/\[\[/.test(tex)) return; // already reported; KaTeX would only echo it
  try {
    katex.renderToString(tex, { displayMode, throwOnError: true });
  } catch (e) {
    err(
      rel,
      "katex-parse-error",
      String(e.message).replace(/\s+/g, " ").slice(0, 160),
      clip(tex),
    );
  }
};

// ItemBody renders phase-format sections through ProofBlock, not the prose
// diagram extractor. A TikZ fence there therefore reaches MathMarkdown as raw
// code even when its TeX itself is valid. Keep this structural check here with
// the other source-to-renderer mismatches.
const proofRenderedSections = new Set([
  "Facts & Assumptions",
  "Proof",
  "Refutation",
  "Counterexample",
  "Verification",
]);

const proofSectionTikzFences = (body) => {
  const out = [];
  let section = "(preamble)";
  for (const [index, line] of body.split("\n").entries()) {
    const heading = line.match(/^## (.+)$/);
    if (heading) section = heading[1].trim();
    if (/^```tikz(?:cd)?\s*$/.test(line) && proofRenderedSections.has(section))
      out.push({ line: index + 1, section });
  }
  return out;
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
  const { fm, body } = splitFrontmatter(src);

  // ---- the frontmatter must parse under the RENDERER's YAML parser
  //
  // `loadItemsUncached` / `walkPages` in web/lib/math-library.ts wrap the parse
  // in a bare `catch {}`: a file whose frontmatter throws is silently absent
  // from the corpus. The consequence is not a broken item but a dead PAGE —
  // `[...path]/page.tsx` treats a listed-but-unloadable item as `missing` and
  // calls `notFound()`, so the public gets a 404 on a page that is `published`,
  // fully audited, and perfect on disk.
  //
  // Every other gate here reads frontmatter with a hand-rolled regex that takes
  // the FIRST `key:` line, so all of them see a file the renderer cannot load.
  // depcheck's `page-item-missing` and `draft-on-published-page` are the right
  // rules and were blind for exactly this reason: "exists" has to mean "the
  // renderer can load it", which is only true if the same parser decides.
  //
  // Measured when this was added (2026-08-04): 9 items, both defects invisible
  // to every gate, two published pages 404 to the public since the day they
  // were published — `power-series-and-real-analytic-functions` (8 items with a
  // duplicate `verification:` key) and `ideals-and-quotient-rings-examples`
  // (`title: '...the library's unital convention'`, an unescaped apostrophe
  // inside a single-quoted scalar, which must be doubled as `''`).
  if (YAML && fm) {
    try {
      YAML.parse(fm);
    } catch (e) {
      // Name the duplicate key when that is the cause: the strict parser reports
      // only the position, and the lenient reading a human does in their head
      // silently keeps the LAST block, losing whatever the first one carried.
      let dup = null;
      try {
        const seen = new Set();
        for (const node of YAML.parseDocument(fm, { uniqueKeys: false }).contents?.items ?? []) {
          const k = node.key?.value;
          if (typeof k !== "string") continue;
          if (seen.has(k)) { dup = k; break; }
          seen.add(k);
        }
      } catch { /* the lenient parse is a nicety; the strict failure already stands */ }
      err(
        rel,
        dup ? "frontmatter-duplicate-key" : "frontmatter-unparsable",
        dup
          ? `duplicate top-level key \`${dup}\` — the renderer's YAML parser throws and drops this file from the corpus, so every published page listing it 404s`
          : `frontmatter does not parse under the renderer's YAML parser, so the file is dropped from the corpus and every published page listing it 404s: ${String(e.message).replace(/\s+/g, " ").slice(0, 120)}`,
        "",
      );
    }
  }

  for (const fence of proofSectionTikzFences(body))
    err(
      rel,
      "tikz-in-proof-section",
      `a TikZ fence in ## ${fence.section} bypasses the prose diagram renderer and displays as raw code; move it to a non-proof prose section`,
      `line ${fence.line}`,
    );

  // ---- unsupported TeX delimiters
  // The negative lookbehind deliberately excludes TeX line-break spacing such
  // as `\\\\[6pt]`: that has two source backslashes, whereas an unsupported
  // display delimiter has one (`\\[`).
  const proseBody = body
    .split(/(```[\s\S]*?```)/g)
    .filter((_, index) => index % 2 === 0)
    .join("");
  for (const alt of proseBody.matchAll(/(?<!\\)\\(?:\[|\]|\(|\))/g))
    err(
      rel,
      "unsupported-tex-delimiter",
      "remark-math renders \\(…\\) and \\[…\\] literally; use `$…$` or `$$…$$`",
      clip(proseBody.slice(Math.max(0, alt.index - 40), (alt.index ?? 0) + 80)),
    );

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
    tryKatex(rel, d.inner, true);
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
    tryKatex(rel, inner, false);
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
        `\ndelimiters, no multiline display block, every math span parses under the real` +
        `\nKaTeX${katex ? "" : " (SKIPPED: " + katexWhy.slice(0, 60) + ")"}, and every frontmatter block parses under the renderer's` +
        `\nYAML parser${YAML ? "" : " (SKIPPED: " + yamlWhy.slice(0, 60) + ")"}.`,
    );
  }
}

process.exit(errors.length ? 1 : 0);
