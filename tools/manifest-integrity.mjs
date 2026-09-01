#!/usr/bin/env node
// manifest-integrity — a page that entered a run must not leave it silently.
//
// WHY THIS EXISTS. On `frontier-14`, `stone-weierstrass-general` and its
// examples companion were batched at step 0, scaffolded in full (19 items, three
// verified sources, complete proof contracts), reviewed by a group Alpha, and
// then **disappeared**. Not deferred, not declined, not reported — removed from
// the batch manifest, the coverage harvest and the contract file, between the
// step-3 review and the step-4 splice.
//
// Every gate passed. That is the point: `coverage-checklist`, `content-policy`,
// `validate-plan`, `precheck` and the whole repo-wide sweep all validate what is
// **in** the artifacts. None of them can see a page that is no longer there. The
// run reported six of six batches complete and delivered eight A/B pairs where
// nine were planned, and the only reason it was caught is that a human counted
// the authored pages against the plan.
//
// The proximate cause was a real decision deadlock — a group Alpha marked the
// pair `not ready` pending a `requires`-edge decision that no role had authority
// to make, and the splice resolved the deadlock by dropping it. The general
// lesson is not about that decision. It is that **scope loss is invisible to
// every gate that reads the current state**, so it needs a gate that reads the
// intended state.
//
// So step 0 writes a scope ledger naming every page the run owes, and this
// compares the manifests against it. A page may legitimately move between
// batches, or be split into new pages; it may not simply cease to exist.
//
//   node tools/manifest-integrity.mjs --run <name> [--ledger <path>] [--json]
//   node tools/manifest-integrity.mjs --run <name> --write-ledger

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const opt = (n, d = null) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const run = opt('run');
const asJson = argv.includes('--json');
const write = argv.includes('write-ledger') || argv.includes('--write-ledger');

if (!run) {
  console.error('usage: node tools/manifest-integrity.mjs --run <name> [--ledger <path>] [--json] [--write-ledger [--force]]');
  process.exit(2);
}

const ledgerPath = opt('ledger', `research/${run}-scope-ledger.json`);

const manifestPages = () => {
  const out = new Map();
  for (const f of readdirSync('research')) {
    if (!f.startsWith(`${run}-batch-`) || !f.endsWith('.pages.json')) continue;
    const batch = f.replace(`${run}-batch-`, '').replace('.pages.json', '');
    let pages;
    try { pages = JSON.parse(readFileSync(join('research', f), 'utf8')); }
    catch { continue; }
    for (const p of pages) out.set(p.id, { batch, kind: p.kind, items: (p.items ?? []).length });
  }
  return out;
};

const current = manifestPages();

if (write) {
  // The ledger is the step-0 baseline the gate compares against. Overwriting
  // it re-baselines the anti-scope-loss check to whatever the manifests NOW
  // say — a degraded manifest set would be confirmed, not caught. Once, and
  // --force is the deliberate, on-the-record re-baseline.
  if (existsSync(ledgerPath) && !argv.includes('--force')) {
    console.error(`manifest-integrity: ${ledgerPath} already exists — refusing to re-baseline the scope ledger.`);
    console.error('  Pass --force only for a deliberate re-baseline, on the record.');
    process.exit(2);
  }
  const ledger = {
    run,
    written: new Date().toISOString(),
    note: 'Every page this run owes. A page here that is absent from every manifest later is scope loss, not a disposition.',
    allow_in_run_dependencies: argv.includes('--allow-in-run-dependencies'),
    pages: [...current.entries()].map(([id, v]) => ({ id, kind: v.kind, batch: v.batch })).sort((a, b) => a.id.localeCompare(b.id)),
  };
  writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + '\n');
  console.log(`manifest-integrity: wrote ${ledgerPath} — ${ledger.pages.length} page(s) owed`);
  process.exit(0);
}

if (!existsSync(ledgerPath)) {
  console.error(`manifest-integrity: no scope ledger at ${ledgerPath}. Run --write-ledger at step 0.`);
  console.error('  Refusing to report a clean run with nothing to compare against.');
  process.exit(2);
}

const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
const missing = [];
for (const p of ledger.pages) {
  if (!current.has(p.id)) missing.push(p);
}
const added = [...current.keys()].filter((id) => !ledger.pages.some((p) => p.id === id));

const summary = { run, owed: ledger.pages.length, present: current.size, missing: missing.length, added: added.length };

if (asJson) {
  console.log(JSON.stringify({ summary, missing, added }, null, 2));
} else {
  console.log(`manifest-integrity: ${summary.owed} page(s) owed, ${summary.present} in the manifests`);
  if (missing.length) {
    console.log(`\nSCOPE LOSS — ${missing.length} page(s) left the run without a disposition:`);
    for (const m of missing) console.log(`  ${m.id}  (${m.kind}, batched at ${m.batch})`);
    console.log('\nA page may move between batches or be split into new pages. It may not vanish.');
    console.log('If it was genuinely dropped, that is an owner decision and belongs in the step-10 report,');
    console.log('not in a silent manifest edit.');
  }
  if (added.length) {
    console.log(`\nADDED since the ledger — ${added.length} page(s). Expected after a split or a restore:`);
    for (const a of added) console.log(`  ${a}`);
  }
  if (!missing.length && !added.length) console.log('  no scope drift');
}

process.exit(missing.length ? 1 : 0);
