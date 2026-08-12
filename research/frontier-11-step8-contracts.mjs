// Re-quote the proof-contract citations whose cited source text moved under the
// step-8 fatal repairs. Each affected citation stored the WHOLE cited section
// verbatim, so a one-sentence repair to that section invalidates the stored
// quote even though the cited proposition is unchanged.
//
// Safety rail: a quote is rewritten only when its normalised form is exactly the
// normalised PRE-repair section (read from git HEAD). That proves the stored
// quote was the whole section and that replacing it with the whole current
// section changes no citation's scope.
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const REPO = new URL("..", import.meta.url).pathname;
const CHANGED = [
  "def-path-polygonal-length-and-rectifiability-in-rn",
  "thm-rectifiable-iff-coordinate-functions-have-bounded-variation",
  "thm-arc-length-is-invariant-under-monotone-reparametrization",
];
const BATCHES = [1, 2, 3, 4, 5].map((i) => `research/frontier-11-batch-${i}.proof-contracts.json`);

const normalise = (v) => v.replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
const body = (source) => {
  const m = source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?([\s\S]*)$/);
  return m ? m[1] : source;
};
const sectionText = (text, heading) => {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = text.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, "m"));
  return m?.[1] ?? "";
};

const now = new Map();
const was = new Map();
for (const id of CHANGED) {
  now.set(id, body(readFileSync(`${REPO}items/${id}.md`, "utf8")));
  was.set(id, body(execFileSync("git", ["show", `HEAD:items/${id}.md`], { cwd: REPO, encoding: "utf8" })));
}

let rewritten = 0;
const skipped = [];
for (const file of BATCHES) {
  const path = REPO + file;
  const data = JSON.parse(readFileSync(path, "utf8"));
  let dirty = false;
  for (const [id, contract] of Object.entries(data.contracts ?? {})) {
    for (const citation of contract.citations ?? []) {
      if (!CHANGED.includes(citation.source)) continue;
      const current = sectionText(now.get(citation.source), citation.source_section);
      if (normalise(current).includes(normalise(citation.quote))) continue; // still true of disk
      const previous = sectionText(was.get(citation.source), citation.source_section);
      if (normalise(citation.quote) !== normalise(previous)) {
        skipped.push(`${file} ${id} ${citation.fact} -> ${citation.source}: stale quote is not the whole pre-repair section; re-quote by hand`);
        continue;
      }
      citation.quote = current.trim();
      dirty = true;
      rewritten += 1;
      console.log(`re-quoted ${id} [${citation.fact}] -> ${citation.source} (${citation.source_section})`);
    }
  }
  if (dirty) writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
}
console.log(`\n${rewritten} citation quote(s) rewritten`);
if (skipped.length) { console.log("SKIPPED:\n  " + skipped.join("\n  ")); process.exit(1); }
