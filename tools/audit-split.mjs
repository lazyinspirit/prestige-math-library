#!/usr/bin/env node
// audit-split.mjs — classify changed items as PURE RETAG or MATERIAL, so the
// audit Alpha at A6 spends its context on mathematics instead of bookkeeping.
//
// Why this exists (measured, audit wave 3, 2026-08-04). A4 changes every scoped
// item, because a provenance retag rewrites frontmatter. Wave 3: 224 changed
// items, of which only 26 changed anything a reader could see. Alpha had been
// re-deriving that split by hand, and the orchestrator's first attempt at
// automating it was WRONG in a way that hid a confirmed fatal defect — see
// below. This tool is the correct version.
//
// THE TRAP, and why the classification is field-aware rather than line-based.
// The obvious implementation compares `git diff` hunk line ranges against the
// length of the frontmatter block: a hunk reaching past the closing `---` is
// material, everything else is a retag. That is wrong. `title`, `deps`,
// `forward_refs`, `justified_by`, `external_refs`, `proved_here` and `kind` all
// live INSIDE the frontmatter, and every one of them is public mathematical
// interface. In wave 3 that mistake classified
// `thm-product-of-connected-spaces` as a pure retag when its TITLE had been
// changed — and the audit Alpha had confirmed that title as a fatal defect,
// because it contradicted the item's own Statement about the Axiom of Choice.
// Classify by FIELD, never by line position.
//
//   node tools/audit-split.mjs                       # working tree vs HEAD
//   node tools/audit-split.mjs --base <git-ref>      # vs another commit
//   node tools/audit-split.mjs --scope <a.pages.json>[,<b.pages.json>...]
//   node tools/audit-split.mjs --json                # machine-readable
//
// Exit 0 always: this is a classifier, not a gate. It prints the material list,
// which is the list Alpha must read as mathematics.

import { execSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const flag = (f, d = null) => { const i = args.indexOf(f); return i >= 0 && args[i + 1] ? args[i + 1] : d; };

const base = flag('--base', 'HEAD');
const asJson = has('--json');

// Frontmatter keys whose change a reader, a judge, or a dependent item can see.
// `title` is here because a title asserting more than the proof gives is fatal
// (LEVELS.md step 6) and the judge never sees a title it can compare.
const MATERIAL_KEYS = new Set([
  'title', 'kind', 'status', 'deps', 'justified_by', 'forward_refs', 'external_refs',
  'aliases', 'landmark', 'proved_here', 'short', 'proof_strategy', 'id',
]);
// Keys the retro-audit writes by design. A change confined to these, with the
// body byte-identical, is a pure retag: no mathematical claim moved.
const RETAG_KEYS = new Set([
  'provenance', 'sources', 'authorship', 'verification', 'pipeline_run', 'generation',
]);

const splitDoc = (text) => {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { fm: '', body: text };
  return { fm: m[1], body: text.slice(m[0].length) };
};

// Top-level key -> its full block, including continuation lines.
const fmBlocks = (fm) => {
  const out = new Map();
  let key = null, buf = [];
  for (const line of fm.split('\n')) {
    const m = line.match(/^([A-Za-z_][\w-]*):(.*)$/);
    if (m) { if (key !== null) out.set(key, buf.join('\n')); key = m[1]; buf = [m[2]]; }
    else if (key !== null) buf.push(line);
  }
  if (key !== null) out.set(key, buf.join('\n'));
  return out;
};

const gitShow = (ref, path) => {
  try { return execSync(`git show ${ref}:${JSON.stringify(path)}`, { encoding: 'utf8', maxBuffer: 1e9 }); }
  catch { return null; }
};

let changed = execSync(`git diff --name-only ${base} -- items/`, { encoding: 'utf8', maxBuffer: 1e9 })
  .trim().split('\n').filter(Boolean);

const scopeArg = flag('--scope', null);
if (scopeArg) {
  const ids = new Set();
  for (const f of scopeArg.split(',')) {
    if (!existsSync(f)) { console.error(`audit-split: scope file not found: ${f}`); process.exit(2); }
    for (const p of JSON.parse(readFileSync(f, 'utf8'))) for (const it of p.items) ids.add(it.id);
  }
  changed = changed.filter((f) => ids.has(f.replace(/^items\//, '').replace(/\.md$/, '')));
}

const pure = [], material = [], created = [];
for (const path of changed) {
  const id = path.replace(/^items\//, '').replace(/\.md$/, '');
  const before = gitShow(base, path);
  if (before === null) { created.push({ id, reasons: ['new file'] }); continue; }
  const now = readFileSync(path, 'utf8');
  const a = splitDoc(before), b = splitDoc(now);
  const reasons = [];
  if (a.body !== b.body) reasons.push('body text');
  const ka = fmBlocks(a.fm), kb = fmBlocks(b.fm);
  for (const k of new Set([...ka.keys(), ...kb.keys()])) {
    if ((ka.get(k) ?? null) === (kb.get(k) ?? null)) continue;
    if (MATERIAL_KEYS.has(k)) reasons.push(k);
    else if (!RETAG_KEYS.has(k)) reasons.push(`${k} (unclassified key — treated as material)`);
  }
  if (reasons.length) material.push({ id, reasons }); else pure.push({ id, reasons: [] });
}

if (asJson) {
  console.log(JSON.stringify({ base, counts: { pure: pure.length, material: material.length, created: created.length }, pure: pure.map((x) => x.id), material, created }, null, 2));
  process.exit(0);
}

console.log(`audit-split: ${changed.length} changed item(s) vs ${base}`);
console.log(`  pure retag (provenance/sources/verification only, body byte-identical): ${pure.length}`);
console.log(`  MATERIAL (a reader, judge or dependent item can see the change):        ${material.length}`);
if (created.length) console.log(`  created since ${base}: ${created.length}`);
if (material.length) {
  console.log('\nMATERIAL — this is the list to read as mathematics:');
  for (const m of material.sort((x, y) => x.id.localeCompare(y.id))) console.log(`  ${m.id}  [${m.reasons.join(', ')}]`);
}
if (created.length) { console.log('\ncreated:'); for (const c of created) console.log(`  ${c.id}`); }
