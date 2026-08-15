#!/usr/bin/env node
// step8 adjudication helper. Prints each requested item's body in full, then a
// DEDUPED appendix holding only the Statement/Definition/Construction section of
// every item those bodies cite — the text an "inflated restatement" finding has
// to be checked against. Deduping matters: the same dependency is cited by many
// rejected items and re-printing it is the whole cost of this stage.
import fs from "node:fs";
import path from "node:path";

const read = (id) => {
  const p = path.join("items", id + ".md");
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : null;
};
const cited = (t) => [...new Set([...t.matchAll(/\[\[([^\]|]+)\]\]/g)].map((m) => m[1].trim()))];
const body = (t) => t.split(/\n---\n/).slice(1).join("\n---\n").trim();
const front = (t) => {
  const m = /^---\n([\s\S]*?)\n---\n/.exec(t);
  if (!m) return "";
  return m[1].split("\n").filter((l) => /^(id|kind|title|status|deps|proved_here|forward_refs|provenance|  statement|  proof|landmark):/.test(l)).join("\n");
};
const claimSections = (t) => {
  const secs = body(t).split(/^## /m).slice(1);
  const keep = secs.filter((s) => /^(Statement|Definition|Construction|Refutation|Example|Counterexample|Remark)/.test(s));
  return (keep.length ? keep : secs.slice(0, 1)).map((s) => "## " + s.trimEnd()).join("\n\n");
};

const args = process.argv.slice(2);
const noDeps = args.includes("--no-deps");
const ids = args.filter((a) => !a.startsWith("--"));
const seen = new Set(ids);
const depQueue = [];

for (const id of ids) {
  const t = read(id);
  if (!t) { console.log(`\n@@@@ MISSING ITEM ${id}`); continue; }
  console.log(`\n@@@@@@@@@@@@@@@@@@@@ ITEM ${id}\n`);
  console.log(front(t));
  console.log("");
  console.log(body(t));
  for (const d of cited(t)) if (!seen.has(d)) { seen.add(d); depQueue.push(d); }
}

if (!noDeps && depQueue.length) {
  console.log(`\n\n%%%%%%%%%%%%%%%%%%%% DEPENDENCY STATEMENTS (${depQueue.length})`);
  for (const d of depQueue) {
    const t = read(d);
    console.log(`\n>>>> ${d}`);
    if (!t) { console.log("  MISSING FILE"); continue; }
    const c = claimSections(t);
    console.log(c.length > 6000 ? c.slice(0, 6000) + "\n  …[truncated]" : c);
  }
}
