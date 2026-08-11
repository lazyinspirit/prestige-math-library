#!/usr/bin/env node
// step8-adj.mjs — append step-8 adjudication rows, hashing the item from disk.
//
//   node research/frontier-10-dispatch/step8-adj.mjs <<'EOF'
//   <id> <outcome> [defect_type] # note
//   EOF
//
// One line per ITEM. The script expands it into one row per rejecting model,
// reading which lanes actually rejected from the triage file and taking
// `context_sha256` from that lane's own verdict — an adjudication is per
// (item, model, context), so a hand-written row would have to repeat both.
// Write `<id>@ds` or `<id>@terra` to adjudicate one lane differently from the
// other; the two lanes often reject the same item for unrelated reasons, and
// only one of them may be fatal.
// `item_sha256` is always recomputed from the file on disk at write time, which
// is what step8-guard compares the pre-edit baseline hash against.

import { readFileSync, appendFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const TRIAGE = 'research/frontier-10-step8-triage.json';
const LEDGER = 'research/frontier-10-judge-adjudications.jsonl';
const OUTCOMES = new Set(['confirmed_fatal', 'confirmed_nonfatal', 'false_positive']);
const DEFECTS = new Set(['logic', 'dependency_citation', 'other']);

const stripVerification = (text) => {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!m) return text;
  return m[1].replace(/^verification:(?:\n(?:[ \t]+.*\n?)*|[^\n]*\n?)/m, '') + '\n---\n' + m[2];
};
const itemHash = (id) =>
  createHash('sha256').update(stripVerification(readFileSync(`items/${id}.md`, 'utf8'))).digest('hex');

const triage = JSON.parse(readFileSync(TRIAGE, 'utf8'));
const byId = new Map(triage.map((r) => [r.id, r]));
const already = new Set();
try {
  for (const line of readFileSync(LEDGER, 'utf8').split(/\r?\n/).filter(Boolean))
    { const r = JSON.parse(line); already.add(`${r.id}|${r.model}`); }
} catch { /* first write */ }

const input = readFileSync(0, 'utf8');
const out = [];
let n = 0;
for (const raw of input.split('\n')) {
  const line = raw.replace(/#.*$/, '').trim();
  if (!line) continue;
  const [target, outcome, defect] = line.split(/\s+/);
  const [id, lane] = target.split('@');
  if (lane && !['ds', 'terra'].includes(lane)) throw new Error(`bad lane ${lane} for ${id}`);
  if (!byId.has(id)) throw new Error(`no live rejection for ${id}`);
  if (!OUTCOMES.has(outcome)) throw new Error(`bad outcome ${outcome} for ${id}`);
  if (outcome === 'confirmed_fatal' && !DEFECTS.has(defect)) throw new Error(`confirmed_fatal ${id} needs a defect_type`);
  const r = byId.get(id);
  const hash = itemHash(id);
  for (const [model, ctx, rejected, tag] of [
    ['deepseek-v4-pro', r.ds_ctx, r.ds !== null, 'ds'],
    ['gpt-5.6-terra', r.terra_ctx, r.terra !== null, 'terra'],
  ]) {
    if (!rejected) continue;
    if (lane && lane !== tag) continue;
    if (already.has(`${id}|${model}`)) { console.error(`skip (already adjudicated): ${id} ${model}`); continue; }
    const row = { id, model, context_sha256: ctx, item_sha256: hash, outcome };
    if (outcome === 'confirmed_fatal') row.defect_type = defect;
    out.push(JSON.stringify(row));
    n++;
  }
}
if (out.length) appendFileSync(LEDGER, out.join('\n') + '\n');
console.log(`appended ${n} row(s) to ${LEDGER}`);
