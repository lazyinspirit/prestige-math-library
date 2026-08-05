#!/usr/bin/env node
// apply-wave5-sep-retag.mjs — A4 applier for the wave-5 `topology-separation`
// batch's approved pure retag (A3 receipt §3, §5c, §9).
//
// It writes exactly two things into an item's frontmatter and nothing else:
//
//   1. the `provenance:` block (statement/proof) from the batch evidence ledger,
//      inserted after `origin:` where every already-tagged item in the corpus
//      carries it;
//   2. any ledger URL not already present in `sources.references`, appended to
//      the existing list with a title in the corpus's own convention.
//
// It never touches `verification:`, the body, `deps`, or any other key, because
// a pure retag must not void a judge stamp (AUDIT-WORKFLOW.md §9 / brief A4).
// It is idempotent: a second run over an already-tagged item is a no-op, so the
// three material-repair items can be retagged in the same pass that repairs
// them without being written twice.
//
//   node research/audit/apply-wave5-sep-retag.mjs --dry-run
//   node research/audit/apply-wave5-sep-retag.mjs --only id1,id2
//   node research/audit/apply-wave5-sep-retag.mjs --exclude id1,id2

import { readFileSync, writeFileSync, existsSync } from "node:fs";

const LEDGER = "research/audit/wave5-topology-separation.provenance.jsonl";
const argv = process.argv.slice(2);
const dryRun = argv.includes("--dry-run");
const listArg = (flag) => {
  const i = argv.indexOf(flag);
  return i === -1 ? null : new Set(argv[i + 1].split(",").map((s) => s.trim()).filter(Boolean));
};
const only = listArg("--only");
const exclude = listArg("--exclude") ?? new Set();

// Reference titles. Wikipedia and nLab derive mechanically from the slug, which
// is how the corpus already titles them ("Kolmogorov space (Wikipedia)").
// Everything else is named explicitly rather than guessed from a URL path.
const EXPLICIT = {
  "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-13.pdf":
    "R. Gardner, Introduction to Topology, notes on Munkres Section 13: Basis for a Topology (East Tennessee State University)",
  "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf":
    "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)",
  "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf":
    "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)",
  "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf":
    "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)",
  "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-33.pdf":
    "R. Gardner, Introduction to Topology, notes on Munkres Section 33: The Urysohn Lemma (East Tennessee State University)",
  "https://dantopology.wordpress.com/2015/07/01/a-note-on-products-of-sequential-fans/":
    "D. Ma, A note on products of sequential fans (Dan Ma's Topology Blog)",
  "https://dantopology.wordpress.com/2010/08/18/a-note-about-the-arens-space/":
    "D. Ma, A note about the Arens space (Dan Ma's Topology Blog)",
  "https://dantopology.wordpress.com/2010/06/21/sequential-spaces-i/":
    "D. Ma, Sequential spaces, I (Dan Ma's Topology Blog)",
};

const titleFor = (url) => {
  if (EXPLICIT[url]) return EXPLICIT[url];
  if (url.includes("en.wikipedia.org/wiki/"))
    return `${decodeURIComponent(url.split("/wiki/")[1]).replace(/_/g, " ")} (Wikipedia)`;
  if (url.includes("ncatlab.org/nlab/show/"))
    return `${decodeURIComponent(url.split("/show/")[1]).replace(/[+_]/g, " ")} (nLab)`;
  throw new Error(`no title rule for ${url} — add it to EXPLICIT rather than guessing`);
};

// A YAML double-quoted scalar: only \ and " need escaping, and none of these
// titles carries a control character.
const yamlQuote = (s) => `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
const sameUrl = (a, b) => {
  const norm = (u) => { try { return decodeURIComponent(u); } catch { return u; } };
  return a === b || norm(a) === norm(b);
};

const rows = readFileSync(LEDGER, "utf8").trim().split("\n").filter(Boolean).map((l) => JSON.parse(l));

let tagged = 0, urlsAdded = 0, skipped = 0, untouched = 0;
const report = [];

for (const row of rows) {
  if (only && !only.has(row.id)) continue;
  if (exclude.has(row.id)) continue;

  const path = `items/${row.id}.md`;
  if (!existsSync(path)) throw new Error(`missing item file ${path}`);
  const text = readFileSync(path, "utf8");
  const fmMatch = /^---\n([\s\S]*?\n)---\n/.exec(text);
  if (!fmMatch) throw new Error(`${path}: no frontmatter`);

  const lines = fmMatch[1].split("\n");
  const changes = [];

  // 1. provenance block, after `origin:`, where the corpus keeps it.
  if (lines.some((l) => /^provenance:/.test(l))) {
    skipped++;
  } else {
    const originAt = lines.findIndex((l) => /^origin:/.test(l));
    if (originAt === -1) throw new Error(`${path}: no origin: line to anchor provenance after`);
    lines.splice(originAt + 1, 0,
      "provenance:",
      `  statement: ${row.statement}`,
      `  proof: ${row.proof}`);
    tagged++;
    changes.push(`provenance ${row.statement}/${row.proof}`);
  }

  // 2. missing ledger URLs, appended to the existing references list.
  const refsAt = lines.findIndex((l) => /^ {2}references:\s*$/.test(l));
  if (refsAt === -1) throw new Error(`${path}: no block-form "  references:" list`);
  let end = refsAt;
  while (end + 1 < lines.length && /^ {4,}\S/.test(lines[end + 1])) end++;
  const present = lines
    .slice(refsAt, end + 1)
    .map((l) => /^\s*(?:- )?url:\s*"?([^"\s]+)"?\s*$/.exec(l))
    .filter(Boolean)
    .map((m) => m[1]);

  const missing = (row.urls ?? []).filter((u) => !present.some((p) => sameUrl(p, u)));
  if (missing.length) {
    const add = missing.flatMap((u) => [`    - title: ${yamlQuote(titleFor(u))}`, `      url: ${yamlQuote(u)}`]);
    lines.splice(end + 1, 0, ...add);
    urlsAdded += missing.length;
    changes.push(`+${missing.length} url${missing.length === 1 ? "" : "s"}`);
  }

  if (!changes.length) { untouched++; continue; }
  report.push(`${row.id}: ${changes.join(", ")}`);
  if (!dryRun) writeFileSync(path, `---\n${lines.join("\n")}---\n${text.slice(fmMatch[0].length)}`);
}

for (const line of report) console.log(line);
console.log(`\n${dryRun ? "[dry run] " : ""}${report.length} item(s) changed — ` +
            `${tagged} newly tagged, ${urlsAdded} url(s) added, ` +
            `${skipped} already tagged, ${untouched} needed nothing`);
