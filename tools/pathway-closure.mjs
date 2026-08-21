#!/usr/bin/env node
// Mechanical contract for Step 10's pathway-prose closer.
//
// `pathway-sync` decides placement, not prose. This receipt turns each brief it
// says gained material into an exact obligation: Lead Alpha rewrites that
// section, records its current section hash, and the checker refuses pending,
// stale, duplicated, or invented rows.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO } from './paths.mjs';
import { sha256 } from './step10-lib.mjs';

const argv = process.argv.slice(2);
const command = argv[0];
const value = (flag) => { const i = argv.indexOf(flag); return i >= 0 ? argv[i + 1] : null; };
const run = value('--run');
if (!['seed', 'check'].includes(command) || !run) {
  console.error('usage: node tools/pathway-closure.mjs seed|check --run <run>');
  process.exit(2);
}

const pathReceiptFile = join(REPO, 'research', `${run}-pathway.json`);
const closureFile = join(REPO, 'research', `${run}-pathway-closure.json`);
if (!existsSync(pathReceiptFile)) throw new Error(`missing research/${run}-pathway.json`);
const pathway = JSON.parse(readFileSync(pathReceiptFile, 'utf8'));
if (pathway.run !== run) throw new Error(`pathway receipt run is ${pathway.run}, expected ${run}`);

function section(category, part) {
  const file = `library/${category}/_pathway.md`;
  const text = readFileSync(join(REPO, file), 'utf8');
  const start = text.search(new RegExp(`^## ${part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm'));
  if (start < 0) throw new Error(`${file}: no ## ${part} section`);
  const bodyStart = text.indexOf('\n', start) + 1;
  const next = text.slice(bodyStart).search(/^##\s+/m);
  const body = text.slice(bodyStart, next < 0 ? undefined : bodyStart + next).trim();
  if (!body) throw new Error(`${file}: ## ${part} has an empty brief`);
  return { file, hash: sha256(body), bytes: Buffer.byteLength(body) };
}

const obligations = (pathway.briefsToRevisit ?? []).map((r) => ({
  category: String(r.category), part: String(r.part), gained: [...new Set(r.gained ?? [])].map(String).sort(),
})).sort((a, b) => a.category.localeCompare(b.category) || a.part.localeCompare(b.part));

if (command === 'seed') {
  const seen = new Set();
  const briefs = obligations.map((row) => {
    const key = `${row.category}\0${row.part}`;
    if (seen.has(key)) throw new Error(`duplicate pathway obligation ${row.category}/${row.part}`);
    seen.add(key);
    const before = section(row.category, row.part);
    return { ...row, file: before.file, status: 'pending', reviewer: null,
      disposition: null, rationale: null, baseline_section_sha256: before.hash,
      final_section_sha256: null };
  });
  const receipt = { schema: 1, run, generated_at: new Date().toISOString(), briefs };
  writeFileSync(closureFile, JSON.stringify(receipt, null, 2) + '\n');
  console.log(`pathway-closure: seeded ${briefs.length} brief obligation(s)`);
  process.exit(0);
}

if (!existsSync(closureFile)) throw new Error(`missing research/${run}-pathway-closure.json`);
const receipt = JSON.parse(readFileSync(closureFile, 'utf8'));
const problems = [];
if (receipt.run !== run) problems.push(`receipt run is ${receipt.run}, expected ${run}`);
const rows = Array.isArray(receipt.briefs) ? receipt.briefs : [];
const expected = new Map(obligations.map((r) => [`${r.category}\0${r.part}`, r]));
const actual = new Map();
for (const row of rows) {
  const key = `${row.category}\0${row.part}`;
  if (actual.has(key)) problems.push(`duplicate closure row ${row.category}/${row.part}`);
  actual.set(key, row);
}
for (const [key, owed] of expected) {
  const row = actual.get(key);
  if (!row) { problems.push(`missing closure row ${owed.category}/${owed.part}`); continue; }
  if (JSON.stringify([...(row.gained ?? [])].sort()) !== JSON.stringify(owed.gained))
    problems.push(`${owed.category}/${owed.part}: gained pages drifted`);
  let now;
  try { now = section(owed.category, owed.part); } catch (error) { problems.push(String(error.message)); continue; }
  if (row.file !== now.file) problems.push(`${owed.category}/${owed.part}: file must be ${now.file}`);
  if (row.status !== 'closed') problems.push(`${owed.category}/${owed.part}: status is not closed`);
  if (row.reviewer !== 'Lead Alpha') problems.push(`${owed.category}/${owed.part}: reviewer must be Lead Alpha`);
  if (row.disposition !== 'rewritten') problems.push(`${owed.category}/${owed.part}: disposition must be rewritten`);
  if (!String(row.rationale ?? '').trim()) problems.push(`${owed.category}/${owed.part}: rationale is empty`);
  if (row.final_section_sha256 !== now.hash) problems.push(`${owed.category}/${owed.part}: final section hash is stale`);
  if (row.baseline_section_sha256 === now.hash) problems.push(`${owed.category}/${owed.part}: section was not rewritten`);
}
for (const [key, row] of actual) if (!expected.has(key)) problems.push(`invented closure row ${row.category}/${row.part}`);
for (const problem of problems) console.error(`pathway-closure: ${problem}`);
if (problems.length) process.exit(1);
console.log(`pathway-closure: ${expected.size} brief obligation(s) closed and current`);
