#!/usr/bin/env node
// apply-wave5-fs-retag.mjs — A4 bulk pure-retag for the wave-5
// topology-function-spaces batch (33 items), per research/audit/wave5-A3.md §3/§9.
//
// Writes ONLY `provenance.statement` / `provenance.proof`, from the batch ledger,
// inserted directly after the `origin:` line so it sits before `deps:` as SCHEMA §3
// shows. Touches no mathematical text, no `sources`, and no `verification` stamp:
// a pure retag is not a material rewrite (AUDIT-WORKFLOW D5), so it rides the
// single pre-A4/post-A4 stage snapshot and voids no judge verdict.
//
// No `generation:` block is written. The batch's one ai-generated statement is a
// page-conventions remark, and `generation.role` admits only corollary/example/
// counterexample; content-policy.mjs errors `generation-on-non-generated-statement`
// on a role that does not apply. This follows the six retro-tag precedents named
// in the A3 receipt, which carry no generation block either.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const LEDGER = 'research/audit/wave5-topology-function-spaces.provenance.jsonl';
const apply = !process.argv.includes('--dry-run');

const rows = readFileSync(LEDGER, 'utf8').trim().split('\n').map((l) => JSON.parse(l));
const changed = [];
const skipped = [];
const errors = [];

for (const row of rows) {
  const path = `items/${row.id}.md`;
  if (!existsSync(path)) { errors.push(`${row.id}: no such file`); continue; }
  const text = readFileSync(path, 'utf8');
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(text);
  if (!match) { errors.push(`${row.id}: no frontmatter`); continue; }
  const fm = match[1];

  if (/^provenance:/m.test(fm)) { skipped.push(`${row.id}: already tagged`); continue; }
  if (/^authorship:/m.test(fm)) { errors.push(`${row.id}: legacy authorship present, needs D5 deletion`); continue; }

  const origin = /^origin:[ \t]*.*$/m.exec(fm);
  if (!origin) { errors.push(`${row.id}: no origin: line to anchor the insert`); continue; }

  const block = `\nprovenance:\n  statement: ${row.statement}\n  proof: ${row.proof}`;
  const newFm = fm.slice(0, origin.index + origin[0].length) + block + fm.slice(origin.index + origin[0].length);
  const out = text.slice(0, match.index) + `---\n${newFm}\n---\n` + text.slice(match.index + match[0].length);

  if (apply) writeFileSync(path, out);
  changed.push(`${row.id}: ${row.statement} / ${row.proof}`);
}

console.log(`${apply ? 'applied' : 'dry run'}: ${changed.length} tagged, ${skipped.length} skipped, ${errors.length} error(s)`);
for (const s of skipped) console.log('  skip  ', s);
for (const e of errors) console.log('  ERROR ', e);
if (errors.length) process.exit(1);
