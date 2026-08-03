#!/usr/bin/env node
// gates.mjs — run the gates of record for one build step, deterministically.
//
//   node tools/gates.mjs --step <0..10> --run <name> [--json] [--list]
//
//   node tools/gates.mjs --step 6 --run frontier-10
//   node tools/gates.mjs --list                      # the whole table, no execution
//
// WHY. LEVELS.md names the gates for each step in prose, and the orchestrator has
// been assembling those invocations by hand every time. That is fine while a
// human is reading the output and remembering which of nineteen tools belongs to
// step 6; it is not fine unattended, where "I ran the gates" has to mean exactly
// one thing and be checkable afterwards. This is that one thing.
//
// TWO RULES THIS FILE KEEPS.
//
// 1. A GATE NEVER MODIFIES CONTENT. `reflow.mts`, `adopt-repair.mjs` and
//    `merge-proof-contracts.mjs` all write, so none of them is a gate — they are
//    repair or prepare actions the driver runs BEFORE this. What this checks, it
//    only reads. That is what makes re-running it free and its verdict stable.
//
// 2. A GATE NEVER SPENDS. No judge call happens here. `judge-sweep.mjs` is an
//    action with a bill attached; `level-coverage.mjs` is the receipt gate that
//    checks what the sweep produced. Keeping them apart is what lets a driver
//    re-gate a step after a crash without re-buying its verdicts.
//
// A MISSING RECEIPT IS A FAILURE, NOT A SKIP. If step 7's coverage gate has no
// judge ledger to read, that is the single most dangerous thing an unattended run
// could shrug at, so `needs` files are checked first and their absence fails the
// step with `missing-receipt`.
//
// Exit 0 = every required gate passed. 1 = at least one failed. 2 = usage.

import { existsSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const listOnly = argv.includes('--list');
const option = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
};
const step = option('--step');
const run = option('--run');

/** A gate: a tool, its arguments, and whether the step fails without it.
 *  `mts: true` routes through tsx-run.mjs. `needs` are files that must exist
 *  before the gate can mean anything. */
const g = (tool, args = [], { required = true, mts = false, needs = [], why = '' } = {}) =>
  ({ tool, args, required, mts, needs, why });

const MANIFESTS = '{manifests}';
const CONTRACTS = 'research/{run}-proof-contracts.json';
const TOUCHES = 'research/{run}-touches.json';
const JUDGE_LEDGER = 'research/{run}-judge.jsonl';
const ADJUDICATIONS = 'research/{run}-judge-adjudications.jsonl';
const COVERAGE_RECEIPT = 'research/{run}-audit-coverage.json';
// The docs all name one shared `research/dependency-spine-audit.json`, but on
// disk every receipt has been run-scoped, under two different spellings
// (frontier-7-dependency-spine-audit.json, frontier-8-spine-audit.json). Accept
// what exists rather than what was written down; the shared path stays last so a
// run that adopts the documented layout still works.
const SPINE_RECEIPT = '{spine}';

// The base gates, run wherever content exists on disk. LEVELS.md §"The base
// gates and future-scope closures" is the source; citecheck is advisory because
// it is an explicitly heuristic mis-attribution screen that always exits 0.
const BASE = () => [
  g('precheck.mts', [], { mts: true, why: 'phase-proof format' }),
  g('depcheck.mjs', [], { why: 'ids, kinds, cycles, page/publish state' }),
  g('fwdcheck.mjs', [], { why: 'forward references' }),
  g('extcheck.mjs', [], { why: 'the ‡ not-proved-here tier' }),
  g('rendercheck.mjs', [], { why: 'defects visible only when rendered' }),
  g('prosecheck.mjs', [], { why: 'the prose defect class' }),
  g('citecheck.mjs', [], { required: false, why: 'mis-attribution heuristic (advisory)' }),
  g('depsource.mjs', ['research/plan-spec.json'], { why: 'where each dep actually lives' }),
];

// The proof-obligation trio. All three read the MERGED contract, which
// merge-proof-contracts.mjs must have written first — hence `needs`.
const CONTRACT_TRIO = () => [
  g('proof-contract.mjs', [CONTRACTS, '--strict'], { needs: [CONTRACTS], why: 'obligation/citation/boundary worksheet' }),
  g('finite-smoke.mjs', [CONTRACTS], { needs: [CONTRACTS], why: 'bounded countermodel search' }),
  g('risk-report.mjs', [CONTRACTS, '--require-reviewed'], { needs: [CONTRACTS], why: 'high/critical routing needs an Alpha risk_review' }),
];

const COVERAGE = () => g('level-coverage.mjs', [
  '--contracts', CONTRACTS,
  '--judge-ledger', JUDGE_LEDGER,
  '--judge-adjudications', ADJUDICATIONS,
  '--spine-receipt', SPINE_RECEIPT,
  '--audit-receipt', COVERAGE_RECEIPT,
  '--verify-current-context', MANIFESTS,
], { needs: [CONTRACTS, JUDGE_LEDGER, COVERAGE_RECEIPT, SPINE_RECEIPT], why: 'the hard receipt gate' });

const STEPS = {
  0: [
    g('validate-plan.mjs', ['research/plan-spec.json'], { why: 'the spec is sane before batching' }),
    g('content-policy.mjs', [MANIFESTS, '--manifest-only'], { needs: [MANIFESTS], why: 'the two-A-page batch cap' }),
  ],
  1: [],   // Betas are scaffolding; nothing of theirs is on disk to gate yet.
  2: [
    g('validate-plan.mjs', ['research/plan-spec.json'], { why: 'scaffold structure and ordering' }),
    g('depsource.mjs', ['research/plan-spec.json'], { why: 'every dep resolves somewhere' }),
  ],
  3: [],   // Orchestrator adjudication of Beta recommendations. Judgment, not a gate.
  4: [
    g('validate-plan.mjs', ['research/plan-spec.json'], { why: 'the spliced spec still validates' }),
    g('content-policy.mjs', [MANIFESTS], { needs: [MANIFESTS], why: 'future-scope containment' }),
  ],
  5: [
    ...BASE(),
    ...CONTRACT_TRIO(),
    g('content-policy.mjs', [MANIFESTS], { needs: [MANIFESTS], why: 'provenance and generated-claim containment' }),
  ],
  6: [
    ...BASE(),
    ...CONTRACT_TRIO(),
    g('content-policy.mjs', [MANIFESTS], { needs: [MANIFESTS] }),
    g('audit-manifest.mjs', [MANIFESTS], { needs: [MANIFESTS], why: 'the full relationship checklist' }),
    g('impact-audit.mjs', ['--touches', TOUCHES, '--from', 'after-authoring'], { needs: [TOUCHES], why: 'downstream consumers of a changed interface' }),
  ],
  // Step 7 is the judge sweep itself, which SPENDS. The driver runs
  // judge-sweep.mjs as an action; this gate only checks what it produced.
  7: [COVERAGE()],
  8: [
    g('step8-guard.mjs', ['--touches', TOUCHES, '--baseline', 'pre-step8', '--adjudications', ADJUDICATIONS],
      { needs: [TOUCHES, ADJUDICATIONS], why: 'R1 — step 8 is fatal-only' }),
    g('impact-audit.mjs', ['--touches', TOUCHES, '--from', 'pre-step8'], { needs: [TOUCHES] }),
    COVERAGE(),
  ],
  // Step 9's mechanical half is the DECIDABLE check only. `--strict` also fails
  // on prosecheck's heuristic warnings, of which the published corpus carries
  // 589 with legitimate cases — making it required would block every run forever
  // on legacy content. The warning list is the sweep's candidate set, which an
  // agent or human reads; it is advisory here by design.
  9: [
    g('prosecheck.mjs', [], { why: 'position-contradiction: decidable, no judgement' }),
    g('prosecheck.mjs', ['--warnings'], { required: false, why: 'scope-denial candidates for the sweep to read' }),
  ],
  10: [
    ...BASE(),
    COVERAGE(),
  ],
};

const usage = (message) => {
  if (message) console.error(`gates: ${message}`);
  console.error('usage: node tools/gates.mjs --step <0..10> --run <name> [--json]');
  console.error('       node tools/gates.mjs --list');
  process.exit(2);
};

// ---- the table, without running anything -----------------------------------

if (listOnly) {
  for (const [number, gates] of Object.entries(STEPS)) {
    console.log(`\nstep ${number}${gates.length ? '' : '  (no mechanical gate — judgment or agent work)'}`);
    for (const gate of gates) {
      console.log(`  ${gate.required ? ' ' : '~'} ${gate.tool.padEnd(22)} ${gate.why ?? ''}`);
    }
  }
  console.log('\n  ~ = advisory, does not fail the step');
  console.log('  Step 7 additionally requires judge-sweep.mjs to have RUN; that action spends and is not a gate.');
  process.exit(0);
}

if (step === null) usage('--step is required');
if (!Object.prototype.hasOwnProperty.call(STEPS, step)) usage(`--step must be one of ${Object.keys(STEPS).join(', ')}`);
if (!run) usage('--run is required (the run name, e.g. frontier-10)');
if (!/^[A-Za-z0-9._-]+$/.test(run)) usage('--run must be a plain run name, not a path');

// ---- path expansion ---------------------------------------------------------

/** Batch manifests for this run, discovered from disk rather than assumed. */
const manifests = () => {
  const dir = join(REPO, 'research');
  const pattern = new RegExp(`^${run.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-.*\\.pages\\.json$`);
  try {
    return readdirSync(dir).filter((name) => pattern.test(name)).sort().map((name) => `research/${name}`);
  } catch { return []; }
};

/** The spine receipt, by whichever name this run actually uses. */
const spineReceipt = () => {
  const candidates = [
    `research/${run}-spine-audit.json`,
    `research/${run}-dependency-spine-audit.json`,
    'research/dependency-spine-audit.json',
  ];
  return candidates.find((path) => existsSync(join(REPO, path))) ?? candidates[0];
};

const expand = (value) => {
  if (value === MANIFESTS) return manifests();
  if (value === SPINE_RECEIPT) return [spineReceipt()];
  return [value.replaceAll('{run}', run)];
};
const expandAll = (values) => values.flatMap(expand);

// ---- run --------------------------------------------------------------------

const results = [];
const gates = STEPS[step];

for (const gate of gates) {
  const args = expandAll(gate.args);
  const needs = expandAll(gate.needs);
  const missing = needs.filter((path) => !existsSync(join(REPO, path)));
  // A manifest glob that matched nothing is itself a missing receipt.
  if (gate.needs.includes(MANIFESTS) && !manifests().length) missing.push('research/{run}-*.pages.json (no match)');

  if (missing.length) {
    results.push({
      tool: gate.tool, required: gate.required, status: gate.required ? 'fail' : 'warn',
      code: 'missing-receipt', detail: `missing: ${missing.join(', ')}`, ms: 0,
    });
    continue;
  }

  const started = Date.now();
  const command = gate.mts
    ? [process.execPath, ['tools/tsx-run.mjs', `tools/${gate.tool}`, ...args]]
    : [process.execPath, [`tools/${gate.tool}`, ...args]];
  const child = spawnSync(command[0], command[1], { cwd: REPO, encoding: 'utf8', timeout: 1_800_000 });
  const ms = Date.now() - started;

  const output = ((child.stdout ?? '') + (child.stderr ?? '')).trim();
  const tail = output.split('\n').slice(-6).join('\n');
  if (child.error) {
    results.push({ tool: gate.tool, required: gate.required, status: gate.required ? 'fail' : 'warn', code: 'spawn-error', detail: child.error.message, ms });
  } else if (child.status === 0) {
    results.push({ tool: gate.tool, required: gate.required, status: 'pass', code: null, detail: tail.split('\n').at(-1) ?? '', ms });
  } else {
    results.push({
      tool: gate.tool, required: gate.required,
      status: gate.required ? 'fail' : 'warn',
      code: child.status === 2 ? 'usage-or-input' : 'gate-failed',
      detail: tail, ms,
    });
  }
}

const failed = results.filter((r) => r.status === 'fail');
const warned = results.filter((r) => r.status === 'warn');

if (asJson) {
  console.log(JSON.stringify({
    step: Number(step), run,
    summary: { gates: results.length, failed: failed.length, warned: warned.length },
    results,
  }, null, 2));
} else {
  console.log(`gates: step ${step}, run ${run} — ${results.length} gate(s)`);
  if (!results.length) console.log('  (no mechanical gate at this step — judgment or agent work)');
  for (const r of results) {
    const mark = { pass: ' ok ', fail: 'FAIL', warn: 'warn' }[r.status];
    console.log(`[${mark}] ${r.tool.padEnd(22)} ${String(r.ms).padStart(6)}ms  ${(r.detail ?? '').split('\n')[0]}`);
    if (r.status !== 'pass' && (r.detail ?? '').includes('\n')) {
      for (const line of r.detail.split('\n').slice(1)) console.log(`         ${line}`);
    }
  }
  console.log(failed.length
    ? `\nSTEP ${step} BLOCKED — ${failed.length} required gate(s) failed${warned.length ? `, ${warned.length} advisory` : ''}`
    : `\nSTEP ${step} CLEAR${warned.length ? ` — ${warned.length} advisory warning(s)` : ''}`);
}
process.exit(failed.length ? 1 : 0);
