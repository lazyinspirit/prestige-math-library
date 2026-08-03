#!/usr/bin/env node
// adopt-repair.mjs — apply precheck's canonical stratification back into items.
//
//   node tools/adopt-repair.mjs items/foo.md [items/bar.md ...]
//   node tools/adopt-repair.mjs --all
//
// `precheck.mts` re-stratifies proofs so that a step citing phase-k steps sits in
// phase k+1, and prints the canonical numbering as a REPAIR block. The repo
// stores the strictly stratified form, so that block has to be adopted by hand,
// every time, for every proof. This does it mechanically.
//
// It renumbers the step lines AND rewrites stale prose references ("step 3.2")
// elsewhere in the body, which is the part that is easy to miss by eye and which
// precheck does not catch, since prose is not a step.
//
// Safe by construction: it only touches lines that begin with a step number, and
// it refuses to write anything if the repaired proof does not have exactly as
// many steps as the original.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { REPO, workerPrefix } from './paths.mjs';

let PRECHECK;
try { PRECHECK = ['--prefix', workerPrefix(), 'tsx', 'tools/precheck.mts']; }
catch (cause) { console.error(`adopt-repair: ${cause.message}`); process.exit(2); }
const STEP = /^(\d+\.\d+)\s/;

const args = process.argv.slice(2);
const files = args.includes('--all')
  ? readdirSync(join(REPO, 'items')).filter((f) => f.endsWith('.md')).map((f) => `items/${f}`)
  : args;
if (!files.length) { console.error('usage: adopt-repair.mjs items/foo.md [...] | --all'); process.exit(2); }

function precheck(file) {
  try {
    return execFileSync('npx', [...PRECHECK, file], { cwd: REPO, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    return (e.stdout ?? '') + (e.stderr ?? '');
  }
}

let fixed = 0, clean = 0, stuck = 0;

for (const file of files) {
  const out = precheck(file);
  if (/^PASS /m.test(out)) { clean++; continue; }
  if (!/^REPAIR /m.test(out)) {
    console.log(`SKIP  ${file} — fails for a reason auto-repair cannot fix:`);
    for (const l of out.split('\n').filter((l) => /^(FAIL|\s+-)/.test(l)).slice(0, 6)) console.log(`      ${l.trim()}`);
    stuck++;
    continue;
  }

  // canonical step lines, in order, from the "  | " quoted repair block
  const repaired = out.split('\n')
    .map((l) => l.match(/^\s*\|\s?(.*)$/)?.[1] ?? null)
    .filter((l) => l !== null && STEP.test(l));

  const src = readFileSync(join(REPO, file), 'utf8').split('\n');
  const idx = src.map((l, i) => (STEP.test(l) ? i : -1)).filter((i) => i >= 0);

  if (idx.length !== repaired.length) {
    console.log(`SKIP  ${file} — ${idx.length} steps in file but ${repaired.length} in the repair block; fix by hand`);
    stuck++;
    continue;
  }

  // old -> new numbering, matched by step TEXT rather than by position. Precheck
  // does not merely renumber: it REORDERS, hoisting `assume-case` steps into an
  // earlier phase. A positional map therefore mislabels prose references, which
  // is silent corruption, since precheck never reads prose.
  // Compare on the step PROSE only. The trailing justification tag cannot be
  // used as identity: a repair renumbers the `step k.j` citations inside it, so
  // the tag legitimately differs between the original and the repaired form.
  const body = (l) => l
    .replace(STEP, '')
    .replace(/\s*\[[^\]]*\]\s*∎?\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();
  const newByText = new Map();
  for (const l of repaired) {
    const k = body(l);
    if (!newByText.has(k)) newByText.set(k, []);
    newByText.get(k).push(l.match(STEP)[1]);
  }
  const map = new Map();
  let ambiguous = false;
  for (const line of idx) {
    const hits = newByText.get(body(src[line]));
    if (!hits || !hits.length) { ambiguous = true; break; }
    map.set(src[line].match(STEP)[1], hits.shift());
  }
  if (ambiguous) {
    console.log(`SKIP  ${file} — repaired steps do not match the originals by text; fix by hand`);
    stuck++;
    continue;
  }

  idx.forEach((line, k) => { src[line] = repaired[k]; });

  // Stale prose references, on non-step lines only; single pass so a renumbering
  // chain (2.1 -> 3.1 -> 4.1) cannot be applied twice to the same reference.
  //
  // A line carrying a wikilink is LEFT ALONE and reported instead. "Step 4.1 of
  // [[thm-zorn]]" refers to a step in a DIFFERENT item, and this item's map says
  // nothing about that item's numbering; rewriting it silently produces a
  // confident, wrong cross-reference that no mechanical check will ever catch.
  const stepSet = new Set(idx);
  for (let i = 0; i < src.length; i++) {
    if (stepSet.has(i)) continue;
    if (!/\b(step|Step)\s+\d+\.\d+\b/.test(src[i])) continue;
    if (src[i].includes('[[')) {
      console.log(`      NOTE ${file}:${i + 1} step reference on a line with a wikilink, left unchanged; check by hand:`);
      console.log(`           ${src[i].trim().slice(0, 100)}`);
      continue;
    }
    src[i] = src[i].replace(/\b(step|Step)\s+(\d+\.\d+)\b/g, (m, w, n) => (map.has(n) ? `${w} ${map.get(n)}` : m));
  }

  writeFileSync(join(REPO, file), src.join('\n'));
  const after = precheck(file);
  if (/^PASS /m.test(after)) { console.log(`FIXED ${file}`); fixed++; }
  else { console.log(`STILL FAILING ${file} after adopting the repair; inspect by hand`); stuck++; }
}

console.log(`\n${fixed} repaired, ${clean} already clean, ${stuck} needing hand work`);
process.exit(stuck ? 1 : 0);
