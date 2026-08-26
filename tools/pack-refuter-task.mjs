#!/usr/bin/env node
// pack-refuter-task.mjs — assemble a tool-less refuter's whole context into one task file.
//
//   node tools/pack-refuter-task.mjs --run frontier-15 --label rr-1 \
//     --contracts research/frontier-15-proof-contracts.json \
//     --items a,b,c --out /tmp/rr-1.task.md
//
// Every item, its contract entry, and the full text of every declared dependency
// travels inside --task. Dependency bodies are deduplicated and printed once.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const argv = process.argv.slice(2);
const option = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : undefined; };

const run = option('--run');
const label = option('--label');
const out = option('--out');
const contractPath = option('--contracts');
const ids = (option('--items') ?? '').split(',').map((v) => v.trim()).filter(Boolean);
if (!run || !label || !out || !contractPath || !ids.length) {
  console.error('usage: --run <name> --label <name> --contracts <file> --items <id> --out <file> [--allow-multi]');
  process.exit(2);
}
// ONE item per dispatch. Measured on frontier-15: 7-item packs died
// `finish_reason: length` with no report 5 times in 6; at 3 items 40 of 92
// items still could not fit a reading in the output budget; a single item
// (31 KB task) ran to exit 0 comfortably. A refuter that runs out of output
// budget mid-list is a refuter whose remaining items were silently unread —
// the packing ratio loses READS, not tokens. `--allow-multi` exists for a
// deliberate, recorded exception, not as a convenience.
if (ids.length > 1 && !argv.includes('--allow-multi')) {
  console.error(`pack-refuter-task: ${ids.length} items in one pack loses reads to the output budget `
    + `(frontier-15: 5 of 6 multi-item packs returned no report). Pack one item per dispatch, `
    + `or pass --allow-multi with the reason recorded in your report.`);
  process.exit(2);
}

const contracts = JSON.parse(readFileSync(join(REPO, contractPath), 'utf8')).contracts ?? {};
const itemText = (id) => {
  const path = join(REPO, 'items', `${id}.md`);
  return existsSync(path) ? readFileSync(path, 'utf8') : null;
};
const deps = (source) => {
  const match = source.match(/^deps:[ \t]*\[([\s\S]*?)\]/m);
  return match ? match[1].split(',').map((v) => v.trim()).filter(Boolean) : [];
};

const parts = [];
parts.push(`run: ${run}\nrole: refuter\nlabel: ${label}\n`);
parts.push(`# Risk-review refutation — ${ids.length} high/critical-tier items\n`);
parts.push(`You have **no tools**: every file you need is reproduced below in full.
Do not ask to read anything; if something you need is genuinely absent, say so.

These items were scored high or critical risk by structural triage (many
dependencies, biconditionals, existence/uniqueness/well-definedness claims,
boundary language, induction, quotients). Your job is to attack the specific
risk, not to survey.

For **every** item below, report: is the Statement true as written; does each
numbered step follow from the facts, hypotheses and earlier steps it cites; does
any \`[L#]\`/\`[F#]\`/\`[A#]\` restate its cited item inaccurately (the cited item's
own text is reproduced under DEPENDENCY TEXT — check against it, and if a
dependency's text is not reproduced, say that rather than guessing); is a
hypothesis silently used (characteristic, finiteness, nonzero, coprimality, a
choice principle); does the **title** claim more than the proof delivers.

Actively instantiate the degenerate cases: n = 0, n = 1, the empty family, the
zero module/ring, the trivial group, a degenerate parameter, and BOTH directions
of every iff. Two contract rows marked \`not_applicable\` each hid a
confirmed-fatal defect on earlier runs.

Rank a genuine falsehood above a wording defect. A gap a competent reader closes
in 30 seconds is nonfatal — say so and move on. Do not manufacture findings:
"no defect in these N items, here is what I checked" is a valuable result.

Structure each finding as: item id | exact location (Statement, step 1.2, [L3],
title, Remark) | what is wrong | the evidence | fatal or nonfatal.
`);

const seen = new Set(ids);
const depQueue = [];
parts.push(`\n---\n\n# ITEMS UNDER REVIEW\n`);
for (const id of ids) {
  const source = itemText(id);
  if (!source) { parts.push(`\n## ${id}\n\nMISSING FROM DISK.\n`); continue; }
  parts.push(`\n## ITEM: ${id}\n\n\`\`\`markdown\n${source}\n\`\`\`\n`);
  const contract = contracts[id];
  if (contract) parts.push(`\n### Recorded proof contract for ${id}\n\n\`\`\`json\n${JSON.stringify(contract, null, 1)}\n\`\`\`\n`);
  else parts.push(`\n### Recorded proof contract for ${id}\n\nNONE RECORDED.\n`);
  for (const dep of deps(source)) if (!seen.has(dep)) { seen.add(dep); depQueue.push(dep); }
}

// --trim-deps keeps only what a citation check reads: the title and the claim
// sections.  A tool-less lane has a finite output budget, and a 200KB prompt
// spends it on transcription instead of refutation — five of six oversized
// dispatches came back `finish_reason: length` with no report at all.
const trimDeps = argv.includes('--trim-deps');
const claimOf = (source) => {
  const title = source.match(/^title:[ \t]*(.*)$/m)?.[1] ?? '';
  const sections = ['Statement', 'Statement refuted', 'Definition', 'Example', 'Construction'];
  const found = sections
    .map((heading) => {
      const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const body = source.match(new RegExp(`^##\\s+${escaped}\\s*$\\r?\\n([\\s\\S]*?)(?=^##\\s+|(?![\\s\\S]))`, 'm'))?.[1];
      return body ? `## ${heading}\n${body.trim()}` : null;
    })
    .filter(Boolean);
  return `title: ${title}\n\n${found.join('\n\n') || '(no claim section found — the full file may be needed)'}`;
};

parts.push(`\n---\n\n# DEPENDENCY TEXT — the cited items${trimDeps ? ', title and claim section only' : ', in full'}\n`);
for (const dep of depQueue) {
  const source = itemText(dep);
  const shown = source ? (trimDeps ? claimOf(source) : source) : null;
  parts.push(`\n## DEPENDENCY: ${dep}\n\n${shown ? `\`\`\`markdown\n${shown}\n\`\`\`` : 'NOT PRESENT ON DISK — treat a citation of it as unverifiable.'}\n`);
}

writeFileSync(out, parts.join(''));
console.log(JSON.stringify({ out, items: ids.length, dependencies: depQueue.length, bytes: parts.join('').length }));
