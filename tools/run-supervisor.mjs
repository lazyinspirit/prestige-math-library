#!/usr/bin/env node
// run-supervisor.mjs — the stage-transition engine for a hand-orchestrated build.
//
//   node tools/run-supervisor.mjs --run frontier-13 --state
//   node tools/run-supervisor.mjs --run frontier-13 --advance
//   node tools/run-supervisor.mjs --run frontier-13 --verify-scope
//
// WHICH FAILURE THIS PREVENTS (owner, 2026-08-15).
//
// A stage completing produces artifacts. Someone has to notice and fire the next
// dispatch. On every hand-orchestrated run that someone has been the
// orchestrator, and it is measurably the slowest component in the system:
// frontier-13 ran ~14h wall-clock of which roughly 5h was the orchestrator
// writing a status report at a cleared stage instead of dispatching the next
// one. Three times, against an explicit standing instruction not to pause, with
// the same failure already recorded in session memory from two earlier runs.
//
// The one stretch of frontier-13 with NO idle gap was step 4 -> step 5, where a
// splice receipt landing auto-released that batch's author through a shell
// watcher. Nothing about that needed a model. This generalises it.
//
// DIVISION OF LABOUR. This file owns what is decidable from disk: does the
// stage's artifact set exist, do its gates pass, what is the next command. The
// `supervisor` AGENT (briefs/supervisor.md, Sonnet 5) owns what is not: is a
// report actually complete or did the agent stop early, is a blocker real, does
// a dead lane deserve a retry. Neither owns any mathematical judgment.
//
// WHY A PREDICATE AND NOT A REPORT. A stage is complete when its artifacts exist
// and its gates pass — never when an agent's closing message says so.
// frontier-13 had seven refuter dispatches produce prompt files and no results
// while a group's report tabled all eleven as dispatched; 74 risk_review
// dispositions were silently absent until a later stage happened to count them.
// Every predicate here reads disk.

import { existsSync, readFileSync, appendFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const option = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const run = option('--run');
const asJson = argv.includes('--json');

if (!run) {
  console.error('usage: node tools/run-supervisor.mjs --run <run> (--state | --advance | --verify-scope) [--json]');
  process.exit(2);
}

const R = (p) => join(REPO, p);
const D = `research/${run}-dispatch`;
const has = (p) => existsSync(R(p));
const results = (glob) => {
  if (!existsSync(R(D))) return [];
  return readdirSync(R(D)).filter((f) => f.endsWith('.result.json') && new RegExp(glob).test(f));
};
/** A result file only counts when the dispatch actually succeeded. An `ok:false`
 *  row is a dead lane, which is a retry decision, not a completed stage. */
const okResults = (glob) => results(glob).filter((f) => {
  try { return JSON.parse(readFileSync(join(R(D), f), 'utf8')).ok === true; } catch { return false; }
});
const batches = () => {
  if (!existsSync(R('research'))) return [];
  return readdirSync(R('research'))
    .filter((f) => f.startsWith(`${run}-batch-`) && f.endsWith('.pages.json'))
    .map((f) => Number(f.replace(`${run}-batch-`, '').replace('.pages.json', '')))
    .filter((n) => Number.isInteger(n)).sort((a, b) => a - b);
};

// COMPLETION BY COVERAGE, NOT BY COUNT.
//
// Every "N agents returned" predicate encodes the shape of one run. `3-review`
// hardcoded three group Alphas because frontier-13 had seven batches; frontier-14
// has six and two groups, so the predicate could never fire and the driver
// polled a finished stage forever, with nothing wrong in any log.
//
// Deriving the count — ceil(batches/3) — fixes that instance and leaves the
// class intact. It still hardcodes the grouping RULE, so it breaks again when
// the alpha cap changes, when a run deliberately uses one Alpha for everything,
// or when a lane is retried and returns a fourth result. Worse, a count cannot
// distinguish three Alphas covering two batches each from three Alphas that all
// covered the same batch and left two unreviewed: 3/3, green, and a hole.
//
// So a stage declares the UNITS OF WORK it owes, each dispatch declares the
// units it covers, and the stage is done when the covered union contains the
// owed set. The number of agents becomes irrelevant — which is the point,
// because it is the thing that changes every cycle.

/** A run-level `label -> units` map, for dispatches that could not declare
 *  `covers` themselves.
 *
 *  Needed because a run can be MIXED. frontier-14 hand-dispatched group Alpha b
 *  before `--covers` existed; had Alpha a then declared covers, the run would
 *  have flipped to the coverage path with b's three batches permanently
 *  uncovered and the stage unable to complete — a stall created by the fix for
 *  stalls. An out-of-band map lets an already-running dispatch be annotated
 *  without touching its result file, which nothing should rewrite.
 *
 *  research/<run>-covers.json:  { "alpha-step3-b": ["4","5","6"] } */
const coversMap = () => {
  try { return JSON.parse(readFileSync(R(`research/${run}-covers.json`), 'utf8')); }
  catch { return {}; }
};

/** Units covered by successful dispatches whose label matches `glob`. */
const coveredBy = (glob) => {
  const covered = new Set();
  const map = coversMap();
  for (const f of okResults(glob)) {
    const stem = f.replace('.result.json', '');
    let declared = [];
    try { declared = JSON.parse(readFileSync(join(R(D), f), 'utf8')).covers ?? []; }
    catch { /* an unreadable record declares nothing */ }
    const units = declared.length ? declared : (map[stem] ?? []);
    for (const u of units) covered.add(String(u));
  }
  return covered;
};

/** Does every owed unit have a successful dispatch claiming it?
 *
 *  `fallbackCount` is used only when NO result carries `covers` — runs authored
 *  before the field existed, which must keep reporting correctly. A run with
 *  even one `covers` row is read by coverage, so a partially-migrated run
 *  reports a real gap rather than a spurious pass. */
const coverageDone = (glob, owed, fallbackCount) => {
  const rows = okResults(glob);
  const covered = coveredBy(glob);
  if (covered.size === 0) {
    const map = coversMap();
    const anyDeclared = rows.some((f) => {
      if (map[f.replace('.result.json', '')]) return true;
      try {
        const c = JSON.parse(readFileSync(join(R(D), f), 'utf8')).covers;
        return Array.isArray(c) && c.length > 0;
      } catch { return false; }
    });
    if (!anyDeclared) {
      const need = fallbackCount ?? 1;
      return { done: rows.length >= need, why: `${rows.length}/${need} result(s) — no \`covers\` declared, counting` };
    }
  }
  const missing = owed.filter((u) => !covered.has(String(u)));
  return {
    done: owed.length > 0 && missing.length === 0,
    why: missing.length
      ? `${owed.length - missing.length}/${owed.length} unit(s) covered; missing ${missing.slice(0, 6).join(', ')}${missing.length > 6 ? ` +${missing.length - 6}` : ''}`
      : `${owed.length}/${owed.length} unit(s) covered by ${rows.length} dispatch(es)`,
  };
};

/** Judge coverage: every A page's items carry a current verdict from BOTH lanes. */
const judgeComplete = () => {
  const led = R(`research/${run}-judge.jsonl`);
  if (!existsSync(led)) return { done: false, why: 'no judge ledger' };
  const rows = readFileSync(led, 'utf8').trim().split('\n').filter(Boolean)
    .map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
  const byId = new Map();
  for (const r of rows) {
    if (!byId.has(r.id)) byId.set(r.id, new Set());
    byId.get(r.id).add(r.model);
  }
  let scoped = 0, complete = 0;
  for (const b of batches()) {
    const pj = JSON.parse(readFileSync(R(`research/${run}-batch-${b}.pages.json`), 'utf8'));
    for (const p of pj) for (const it of p.items ?? []) {
      scoped += 1;
      if ((byId.get(it.id)?.size ?? 0) >= 2) complete += 1;
    }
  }
  return { done: scoped > 0 && complete === scoped, why: `${complete}/${scoped} items with both lanes` };
};

// THE STAGE TABLE. `done` reads disk. `next` is the command that advances.
// `gates` run before advancing; a gate failure blocks and is reported.
const STAGES = [
  {
    id: '1-2-scaffold', label: 'Betas scaffolding',
    done: () => coverageDone('^beta-batch-', batches(), batches().length),
    gates: ['coverage', 'policy'],
    next: () => `orchestrator adjudicates step 3 — dispatch role=orchestrator with the step-3 decisions task`,
  },
  {
    id: '3-review', label: 'Alpha scaffold review',
    done: () => coverageDone('^alpha-.*step3|^alpha-recheck', batches(), Math.max(1, Math.ceil(batches().length / 3))),
    gates: ['validate-plan'],
    next: () => `dispatch role=alpha label=step4-lead — pipelined splice, one receipt per batch`,
  },
  {
    id: '4-splice', label: 'splice, per-batch release',
    done: () => { const b = batches(); const n = b.filter((i) => has(`research/${run}-splice-${i}.json`)).length; return { done: b.length > 0 && n >= b.length, why: `${n}/${b.length} splice receipts` }; },
    gates: ['validate-plan'],
    next: () => `release each batch's author as its receipt lands (do NOT wait for all)`,
  },
  {
    id: '5-author', label: 'authoring',
    done: () => coverageDone('^beta-author-batch-', batches(), batches().length),
    gates: ['repo-wide'],
    next: () => `dispatch one role=reader per batch — step 6a independent audit`,
  },
  {
    id: '6a-read', label: 'independent readers',
    done: () => { const b = batches(); const n = b.filter((i) => has(`research/${run}-reader-${i}.md`)).length; return { done: b.length > 0 && n >= b.length, why: `${n}/${b.length} reader reports` }; },
    gates: [],
    next: () => `dispatch role=alpha group adjudicators covering every batch — step 6b (any number of agents; each declares --covers)`,
  },
  {
    id: '6b-adjudicate', label: 'group Alpha adjudication',
    done: () => coverageDone('^alpha-6b-', batches(), Math.max(1, Math.ceil(batches().length / 3))),
    gates: ['repo-wide'],
    next: () => `dispatch role=alpha label=6c-lead — cross-batch and cross-level citations`,
  },
  {
    id: '6c-cross', label: 'cross-level citation audit',
    done: () => ({ done: okResults('^alpha-6c-').length >= 1, why: `${okResults('^alpha-6c-').length}/1` }),
    gates: ['step6'],
    next: () => `run the paired judge sweep over every A page — step 7`,
  },
  {
    id: '7-judge', label: 'paired judge sweep',
    done: judgeComplete,
    gates: [],
    next: () => `snapshot pre-step8, then dispatch role=alpha label=step8-lead — fatal-only adjudication`,
  },
  {
    id: '8-adjudicate', label: 'judge adjudication',
    done: () => ({ done: has(`research/${run}-judge-adjudications.jsonl`) && okResults('^alpha-step8').length >= 1, why: 'ledger + result' }),
    gates: ['step8-guard'],
    next: () => `rejudge every repaired item, then dispatch role=orchestrator for the step-9 scope sweep`,
  },
  {
    id: '9-scope', label: 'scope-denial sweep',
    done: () => ({ done: okResults('^alpha-step9|^orchestrator-step9').length >= 1, why: 'step-9 result' }),
    gates: ['repo-wide'],
    next: () => `dispatch the step-10 report DRAFT, then hand to the orchestrator to deliver`,
  },
];

const GATES = {
  'validate-plan': ['node', ['tools/validate-plan.mjs', 'research/plan-spec.json']],
  coverage: ['sh', ['-c', `for f in research/${run}-batch-*.coverage.json; do node tools/coverage-checklist.mjs "$f" || exit 1; done`]],
  policy: ['sh', ['-c', `for f in research/${run}-batch-*.pages.json; do node tools/content-policy.mjs "$f" --manifest-only || exit 1; done`]],
  'repo-wide': ['sh', ['-c', 'node tools/tsx-run.mjs tools/precheck.mts >/dev/null && node tools/depcheck.mjs >/dev/null && node tools/fwdcheck.mjs >/dev/null && node tools/rendercheck.mjs >/dev/null']],
  step6: ['node', ['tools/gates.mjs', '--step', '6', '--run', run]],
  'step8-guard': ['sh', ['-c', `node tools/step8-guard.mjs --touches research/${run}-touches.json --baseline pre-step8 --adjudications research/${run}-judge-adjudications.jsonl`]],
};

const runGate = (name) => {
  const g = GATES[name];
  if (!g) return { name, ok: true, note: 'unknown gate, skipped' };
  const r = spawnSync(g[0], g[1], { cwd: REPO, encoding: 'utf8' });
  return { name, ok: r.status === 0, tail: String(r.stdout || r.stderr).trim().split('\n').slice(-2).join(' | ') };
};

/** The scope boundary, checked rather than asked for.
 *
 *  This CANNOT be raw `git status`: during a build the run's own agents
 *  legitimately create hundreds of items and pages, so an unbaselined check
 *  reports 490 dirty paths and means nothing. The question is narrower — did
 *  anything under `items/`, `library/` or `plan-spec.json` change *while the
 *  supervisor was the only thing running*. So it diffs against a touchlog
 *  snapshot the supervisor takes when it starts a watch.
 *
 *      node tools/run-supervisor.mjs --run <run> --scope-baseline
 *      ... supervisor watches, dispatches, waits ...
 *      node tools/run-supervisor.mjs --run <run> --verify-scope
 *
 *  A violation means the supervisor edited content, which is a hard failure of
 *  the role regardless of whether the edit was an improvement. */
const SCOPE_SNAP = R(`research/${run}-supervisor-scope.json`);
if (argv.includes('--scope-baseline')) {
  const r = spawnSync('git', ['status', '--short', '--', 'items/', 'library/', 'research/plan-spec.json'], { cwd: REPO, encoding: 'utf8' });
  const snap = { at: new Date().toISOString(), paths: String(r.stdout).trim().split('\n').filter(Boolean).sort() };
  writeFileSync(SCOPE_SNAP, JSON.stringify(snap, null, 1) + '\n');
  console.log(`supervisor-scope: baseline recorded — ${snap.paths.length} path(s) already dirty before the watch`);
  process.exit(0);
}
if (argv.includes('--verify-scope')) {
  if (!existsSync(SCOPE_SNAP)) {
    console.log('supervisor-scope: NO BASELINE — run --scope-baseline when the watch starts, or this check is vacuous');
    process.exit(2);
  }
  const before = new Set(JSON.parse(readFileSync(SCOPE_SNAP, 'utf8')).paths);
  const r = spawnSync('git', ['status', '--short', '--', 'items/', 'library/', 'research/plan-spec.json'], { cwd: REPO, encoding: 'utf8' });
  const now = String(r.stdout).trim().split('\n').filter(Boolean);
  const added = now.filter((p) => !before.has(p));
  console.log(added.length
    ? `supervisor-scope: VIOLATION — ${added.length} content path(s) changed during the watch:\n  ${added.slice(0, 10).join('\n  ')}`
    : `supervisor-scope: clean — no content path changed during the watch (${before.size} were already dirty from the run's own agents)`);
  process.exit(added.length ? 1 : 0);
}

// Current stage = the first whose predicate is unsatisfied.
let current = null;
const trail = [];
for (const s of STAGES) {
  const d = s.done();
  trail.push({ id: s.id, label: s.label, done: d.done, why: d.why });
  if (!d.done) { current = s; break; }
}

if (argv.includes('--state') || (!argv.includes('--advance'))) {
  const out = { run, complete: !current, current: current?.id ?? null, trail };
  if (asJson) { console.log(JSON.stringify(out, null, 1)); process.exit(0); }
  for (const t of trail) console.log(`  [${t.done ? 'x' : ' '}] ${t.id.padEnd(16)} ${t.label.padEnd(34)} ${t.why}`);
  console.log(current ? `\n  CURRENT: ${current.id} — ${current.label}` : '\n  ALL STAGES COMPLETE — step 10 report is owed to the owner');
  process.exit(0);
}

// --advance: the previous stage is done; report its gates and the next command.
const idx = STAGES.findIndex((s) => s === current);
const prev = idx > 0 ? STAGES[idx - 1] : null;
const log = (entry) => appendFileSync(R(`research/${run}-supervisor.log.jsonl`), JSON.stringify(entry) + '\n');

if (!prev) { console.log('  no completed stage to advance from'); process.exit(0); }
const gateResults = (prev.gates ?? []).map(runGate);
const blocked = gateResults.filter((g) => !g.ok);
const entry = { at: new Date().toISOString(), run, completed: prev.id, gates: gateResults, blocked: blocked.length > 0, next: blocked.length ? null : prev.next() };
log(entry);

if (blocked.length) {
  console.log(`  BLOCKED after ${prev.id} — ${blocked.length} gate(s) failed:`);
  for (const g of blocked) console.log(`    ${g.name}: ${g.tail}`);
  process.exit(1);
}
console.log(`  ${prev.id} complete, gates green.`);
console.log(`  NEXT: ${prev.next()}`);
