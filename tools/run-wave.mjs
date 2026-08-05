#!/usr/bin/env node
// run-wave.mjs — drive one published-page audit wave from A0 to the owner pause.
//
//   node tools/run-wave.mjs --wave 4
//   node tools/run-wave.mjs --wave 4 --status
//   node tools/run-wave.mjs --wave 4 --dry-run
//   node tools/run-wave.mjs --wave 4 --from-step A6
//
// This is `run-level.mjs` for `AUDIT-WORKFLOW.md`. Same shape deliberately: same
// halt-and-report discipline, same durable state, same control file, same
// "commands land at step boundaries" rule. Where it differs, it differs because
// the audit differs, and each difference is commented where it happens.
//
// WHAT IT IS NOT. It does not publish. `verification.audited`, flipping
// `status: published`, deletions, id changes and reading-order changes are
// owner-reserved and no flag here exposes them. A10 is the terminus, exactly as
// step 10 is for a build.
//
// THE ONE THING THE BUILD DRIVER DOES NOT DO: this one COMMITS at A10, on the
// current branch, never pushing (owner, 2026-08-04). A finished wave is then a
// reviewable diff instead of two hundred loose files, and the owner still owns
// the push and the publish.
//
// SCOPE IS ONE WAVE. Reaching A10 stops. Chaining waves was considered and
// declined: audited-but-uncleared waves would stack up, and a systematic defect
// would propagate through several of them before anyone looked.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { spawnSync, spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dryRun = argv.includes('--dry-run');
const statusOnly = argv.includes('--status');
const option = (name, fallback = null) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : fallback; };

const wave = option('--wave');
const fromStep = option('--from-step');
const judgment = option('--judgment', 'halt');
const judgeBudget = Number(option('--judge-budget', '0'));   // 0 = do not spend
const parkAfter = Number(option('--park-after', '3'));
const simulatePath = option('--simulate');

const usage = (message) => {
  if (message) console.error(`run-wave: ${message}`);
  console.error('usage: node tools/run-wave.mjs --wave <k> [--from-step A0|A2|A3|A4|A6|A7|A8|A9|A10]');
  console.error('                               [--judgment halt|autonomous] [--judge-budget N]');
  console.error('                               [--park-after N] [--dry-run] [--json]');
  console.error('       node tools/run-wave.mjs --wave <k> --status');
  process.exit(2);
};

if (!statusOnly && (wave === null || !/^\d+[a-z]?$/.test(String(wave)))) usage('--wave is required, e.g. --wave 4');
if (!['halt', 'autonomous'].includes(judgment)) usage('--judgment must be halt or autonomous');

const run = `wave${wave ?? option('--run', '')}`;
const DIR = 'research/audit';
const statePath = join(REPO, DIR, `${run}-run-state.json`);
const controlPath = join(REPO, DIR, `${run}-run-control.json`);

// ---- state ------------------------------------------------------------------

const now = () => new Date().toISOString();

const loadState = () => {
  // A simulated run starts fresh and writes nothing: it is testing transitions,
  // not continuing a wave. Reading a real state file here would make the test
  // depend on whatever a previous run happened to leave behind.
  if (existsSync(statePath) && !simulatePath) return JSON.parse(readFileSync(statePath, 'utf8'));
  return {
    run, wave: wave ?? null, workflow: 'audit',
    created_at: now(), updated_at: now(),
    status: 'pending', step: 'A0',
    policy: { judgment, park_after: parkAfter, judge_budget: judgeBudget },
    halt: null, parked: [], steps: {}, journal: [],
  };
};

let state = loadState();

const journal = (event, detail = {}) => { state.journal.push({ at: now(), step: state.step, event, ...detail }); };

const save = () => {
  // A simulated run must not leave state on disk. Without this, a test that
  // walks to A10 writes a "complete" state file, and the NEXT simulated run
  // loads it, starts at A10 and exits 0 having tested nothing — the failure
  // mode where a green suite means the tests stopped running.
  if (dryRun || simulation) return;
  state.updated_at = now();
  mkdirSync(join(REPO, DIR), { recursive: true });
  writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
};

const resumeCmd = (step) => `node tools/run-wave.mjs --wave ${state.wave} --from-step ${step}`;

const halt = (code, reason, resume) => {
  state.status = 'halted';
  state.halt = { code, reason, resume, at: now() };
  journal('halt', { code, reason });
  save();
  report();
  // owner-pause and wave-empty are SUCCESSES: the first is the workflow's
  // designed terminus, the second means every page in the wave was already
  // tagged and there is nothing to audit. Exiting nonzero for either would make
  // a systemd unit report a failed run for doing exactly what it should.
  process.exit(['owner-pause', 'wave-empty'].includes(code) ? 0 : 1);
};

// ---- status -----------------------------------------------------------------

function report() {
  if (asJson) { console.log(JSON.stringify(state, null, 2)); return; }
  console.log(`audit ${state.run}: ${state.status.toUpperCase()} at ${state.step}`);
  console.log(`  updated ${state.updated_at}`);
  console.log(`  policy  judgment=${state.policy.judgment} judge-budget=${state.policy.judge_budget || 'HALTS (no budget set)'} park-after=${state.policy.park_after}`);
  const done = Object.entries(state.steps).filter(([, s]) => s.status === 'complete').map(([n]) => n);
  if (done.length) console.log(`  done    ${done.join(', ')}`);
  if (state.parked.length) {
    console.log(`  parked  ${state.parked.length} item(s):`);
    for (const p of state.parked) console.log(`            ${p.id} — ${p.reason}`);
  }
  if (state.halt) {
    console.log(`\n  HALTED: ${state.halt.code}`);
    console.log(`  ${state.halt.reason}`);
    if (state.halt.resume) console.log(`\n  resume with:\n    ${state.halt.resume}`);
  }
  const tail = state.journal.slice(-8);
  if (tail.length) {
    console.log('\n  recent:');
    for (const e of tail) console.log(`    ${e.at.slice(11, 19)}  ${e.step}  ${e.event}${e.reason ? ` — ${e.reason}` : ''}${e.detail ? ` — ${e.detail}` : ''}`);
  }
}

if (statusOnly) {
  if (!existsSync(statePath)) { console.error(`run-wave: no run state at ${statePath}`); process.exit(2); }
  report();
  process.exit(0);
}

// ---- execution layer (injectable, so the machine is testable) ---------------

const simulation = simulatePath ? JSON.parse(readFileSync(simulatePath, 'utf8')) : null;
let simIndex = 0;

const execute = (what, bin, args, opts = {}) => {
  if (simulation) {
    const next = simulation.outcomes[simIndex++] ?? { exit: 0, note: 'default' };
    return { code: next.exit ?? 0, out: next.note ?? '', simulated: true };
  }
  if (dryRun) {
    console.log(`  would run [${what}]: ${bin} ${args.join(' ')}`);
    return { code: 0, out: '(dry run)', dryRun: true };
  }
  const child = spawnSync(bin, args, { cwd: REPO, encoding: 'utf8', timeout: 8 * 3600 * 1000, ...opts });
  const out = ((child.stdout ?? '') + (child.stderr ?? '')).trim();
  return { code: child.error ? null : child.status, out };
};

// The async twin of `execute`, used only for the agent fan-out (owner,
// 2026-08-05: run batch agents in parallel, this session and every future one).
// Everything else in this driver stays synchronous on purpose — a state machine
// that mutates `state` and calls `halt()` is far easier to reason about when one
// thing happens at a time, and no other step benefits.
//
// Dry-run and simulation deliberately fall through to the SYNC path: both must
// stay deterministic and ordered, since a simulation consumes `outcomes` by
// index and a shuffled order would silently reassign outcomes to agents.
const executeAsync = (what, bin, args, opts = {}) => {
  if (simulation || dryRun) return Promise.resolve(execute(what, bin, args, opts));
  return new Promise((resolve) => {
    const child = spawn(bin, args, { cwd: REPO, ...opts });
    let out = '';
    let settled = false;
    const finish = (code) => { if (settled) return; settled = true; clearTimeout(timer); resolve({ code, out: out.trim() }); };
    const timer = setTimeout(() => child.kill('SIGTERM'), 8 * 3600 * 1000);
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { out += d; });
    child.on('error', (e) => { out += String(e); finish(null); });
    child.on('close', finish);
  });
};

const node = (args) => execute(args[0], process.execPath, args);
const runGates = (step) => execute(`gates ${step}`, process.execPath,
  ['tools/gates.mjs', '--audit', '--step', step, '--run', run, '--json']);
const dispatchArgs = (role, brief, label, vars = {}, task = null) => [
  'tools/dispatch.mjs', '--role', role, '--brief', brief, '--label', label, '--run', run,
  ...Object.entries(vars).flatMap(([k, v]) => ['--var', `${k}=${v}`]),
  ...(task ? ['--task', task] : []),
];
const dispatchAgent = (role, brief, label, vars = {}, task = null) =>
  execute(`dispatch ${role}/${label}`, process.execPath, dispatchArgs(role, brief, label, vars, task));
const dispatchAgentAsync = (role, brief, label, vars = {}, task = null) =>
  executeAsync(`dispatch ${role}/${label}`, process.execPath, dispatchArgs(role, brief, label, vars, task));

// ---- control file -----------------------------------------------------------

const readControl = () => {
  if (!existsSync(controlPath)) return null;
  try { const c = JSON.parse(readFileSync(controlPath, 'utf8')); return c?.command ? c : null; } catch { return null; }
};

const applyControl = () => {
  const control = readControl();
  if (!control) return;
  journal('control', { detail: control.command });
  if (control.command === 'halt') halt('operator-halt', 'halted by run-control.json', resumeCmd(state.step));
  if (control.command === 'pause') {
    state.status = 'paused'; save();
    if (!asJson) console.log('run-wave: paused by control file; delete it or set command=resume to continue');
    process.exit(0);
  }
  if (control.command === 'park' && control.id) { state.parked.push({ id: control.id, reason: 'parked by operator', at: now() }); save(); }
  if (control.command === 'budget' && Number.isFinite(control.value)) { state.policy.judge_budget = control.value; save(); }
};

// ---- wave scope from disk ----------------------------------------------------

const manifests = () => {
  try {
    return readdirSync(join(REPO, DIR))
      .filter((n) => n.startsWith(`${run}-`) && n.endsWith('.pages.json')).sort();
  } catch { return []; }
};
/** Batch labels are the category slugs: wave4-topology.pages.json -> topology. */
const batchLabels = () => manifests().map((n) => n.replace(/\.pages\.json$/, '').replace(`${run}-`, ''));

// ---- the injection-test gate -------------------------------------------------
//
// `briefs/judge-conventions.txt` enters the frozen judge prompt byte-for-byte,
// so editing it is a judge-lane CONTEXT change, and ARCHITECTURE.md §5 requires
// an injection test before the next production sweep. The risk it guards is
// specific and silent: a line telling a judge what is NOT a defect can make it
// credulous exactly there, and a credulous lane returns keep:true and looks
// like a clean sweep. Wave 3 added the sigma line and tested it; both lanes got
// sharper, not softer.

const conventionsFingerprint = () => {
  const parts = ['briefs/judge-conventions.txt', 'tools/judge.mts']
    .map((p) => (existsSync(join(REPO, p)) ? readFileSync(join(REPO, p)) : Buffer.alloc(0)));
  return createHash('sha256').update(Buffer.concat(parts)).digest('hex');
};

const injectionRecordPath = join(REPO, DIR, 'judge-injection-tests.jsonl');

const lastPassingInjection = () => {
  if (!existsSync(injectionRecordPath)) return null;
  const rows = readFileSync(injectionRecordPath, 'utf8').trim().split('\n')
    .map((l) => { try { return JSON.parse(l); } catch { return null; } }).filter(Boolean);
  return rows.filter((r) => r.result === 'pass').at(-1) ?? null;
};

// ---- the step plan -----------------------------------------------------------

const OWNER_PAUSE = 'A10 is the sole owner pause: audit, then publish by flipping status. Nothing here may do that.';

const ORDER = ['A0', 'A2', 'A3', 'A4', 'A6', 'A7', 'A8', 'A9', 'A10'];

const PLAN = {
  A0: {
    name: 'Batch, baseline and seams',
    // Deterministic: computed entirely from disk, so it is NOT a judgement step
    // even though the build's step 0 is. rounds.mjs --audit-batches reads
    // published page files and excludes already-tagged items mechanically.
    actions: () => [
      ['tools/rounds.mjs', '--audit-batches', '--wave', String(state.wave), '--outdir', DIR],
      // rounds.mjs emits one manifest per category, which is SCOPE, not an
      // assignment: a category with more than two A/B pairs exceeds the Beta
      // capacity rule and no gate catches it (content-policy --audit
      // deliberately does not raise batch-a-pair-cap). Splitting used to be a
      // manual pre-launch step, which this very action then regenerated over.
      // Declaring it as <run>-batch-split.json and applying it here means A0 is
      // re-runnable and the split cannot be silently undone. A wave with no
      // declaration is unaffected.
      ['tools/audit-batch-split.mjs', '--run', run, '--dir', DIR],
      ['tools/touchlog.mjs', 'snap', `${DIR}/${run}-touches.json`, 'baseline'],
      ['tools/genrisk.mjs', '--out', `${DIR}/genrisk.json`],
    ],
    afterActions: () => {
      // An empty wave is a SUCCESS: every page at this dependency level is
      // already tagged and permanently out of scope by the owner rule of
      // 2026-08-02. Waves 0 and 1 emit nothing for exactly this reason.
      // Skipped in dry-run/simulate: nothing was actually generated, so an
      // empty scope there says nothing about the wave. A dry run's whole
      // purpose is to walk the remaining plan.
      if (!manifests().length && !dryRun && !simulation) {
        halt('wave-empty', `wave ${state.wave} produced no batch manifest: every page at this dependency level is already tagged and out of audit scope.`,
          `nothing to do — try the next wave: node tools/run-wave.mjs --wave ${Number(state.wave) + 1}`);
      }
      const m = execute('audit-manifest', process.execPath,
        ['tools/audit-manifest.mjs', ...manifests().map((n) => `${DIR}/${n}`), '--json']);
      if (m.code === 0 && !dryRun && !simulation) writeFileSync(join(REPO, DIR, `${run}-audit-manifest.json`), m.out + '\n');
    },
  },

  A2: {
    name: 'Provenance determination and citation audit',
    requiresBatches: true,
    agents: () => batchLabels().map((label) => ({
      role: 'audit-beta', brief: 'briefs/audit-beta.md', label,
      vars: { k: state.wave, category: label },
    })),
  },

  A3: {
    name: 'Adjudicate Beta recommendations',
    judgment: true,
    note: 'verify every load-bearing Beta claim FROM DISK, then approve or decline each proposal with a logged rationale. '
      + 'Priority: mathematical accuracy and citation precision are non-negotiable, then minimise AI-generated load-bearing surface, then preserve richness. '
      + 'NOTHING has checked the ledger URLs — no liveness sweep exists in this driver, and wave 3 measured 6 of 63 ledger URLs dead. '
      + 'Treat a Beta\'s own report that a source resolves as unverified, and spot-check the URLs carrying an exact-source determination yourself.',
  },

  A4: {
    name: 'Apply approved retags and repairs',
    requiresBatches: true,
    snapshot: 'pre-A4',
    agents: () => batchLabels().map((label) => ({
      role: 'audit-beta', brief: 'briefs/audit-beta.md', label: `${label}-apply`,
      vars: { k: state.wave, category: label },
    })),
    // The merge is the single-writer handoff the CONTRACT_TRIO gates depend on:
    // each Beta owns only its namespaced batch contract, and proof-contract.mjs,
    // finite-smoke.mjs and risk-report.mjs all read the MERGED file. Wave 4 found
    // it missing — the driver never ran it, so A4's gates failed three times over
    // with `missing-receipt` on a file no step produced. It runs before the
    // snapshot so the gate and the touchlog see the same instant.
    afterAgents: () => [
      ['tools/merge-proof-contracts.mjs', '--level', `audit-${run}`, `${DIR}/${run}-proof-contracts.json`,
        ...batchLabels().map((label) => `${DIR}/${run}-${label}.proof-contracts.json`)],
      ['tools/touchlog.mjs', 'snap', `${DIR}/${run}-touches.json`, 'post-A4'],
    ],
  },

  A6: {
    name: 'Alpha audit',
    requiresBatches: true,
    // The precompute is the A6 efficiency protocol (AUDIT-WORKFLOW.md §7). It is
    // driver work, not Alpha work: the driver's shell has outbound network and
    // the agent sandboxes do not, and none of it needs judgement.
    precompute: true,
    agents: () => [{ role: 'audit-alpha', brief: 'briefs/audit-alpha.md', label: 'a6', vars: { k: state.wave } }],
  },

  A7: {
    name: 'Paired judge sweep',
    spends: true,
    requiresBatches: true,
  },

  A8: {
    name: 'Adjudicate judge rejections',
    snapshot: 'pre-a8',
    agents: () => [{ role: 'audit-alpha', brief: 'briefs/audit-alpha.md', label: 'a8', vars: { k: state.wave } }],
  },

  A9: {
    name: 'Scope-denial re-grep',
    judgment: true,
    note: 'grep is the ENTRY POINT, never the sweep: negation is carried by neither / no item / lacks / absent from / silent on / nowhere. '
      + 'Re-read every repaired file, and flag published-claim decay noticed in passing — the sweep no other gate performs.',
  },

  A10: { name: 'Rundown and owner pause', terminal: true },
};

// ---- the machine -------------------------------------------------------------

state.wave = state.wave ?? wave;
if (fromStep != null) {
  if (!ORDER.includes(fromStep)) usage(`--from-step must be one of ${ORDER.join(', ')}`);
  state.step = fromStep;
}
if (state.status === 'halted' && fromStep == null && !dryRun && !simulation) {
  console.error(`run-wave: run is halted (${state.halt?.code}). Fix the cause, then pass --from-step to resume.`);
  console.error(`  ${state.halt?.reason}`);
  process.exit(2);
}
// Clear the halt on a successful restart. It is a record of why the run STOPPED,
// so keeping it alongside status:running makes every later `--status` print a
// live run and a halt reason together — wave 5 spent its whole A2 reporting a
// depcheck failure that had been fixed hours earlier. The journal keeps the
// history; this field is meant to describe the present.
state.status = 'running';
delete state.halt;
state.policy = { judgment, park_after: parkAfter, judge_budget: judgeBudget };
journal('start', { detail: `from ${state.step}` });
save();

for (const step of ORDER.slice(ORDER.indexOf(state.step))) {
  state.step = step;
  const plan = PLAN[step];
  applyControl();
  journal('step-begin', { detail: plan.name });
  if (!asJson) console.log(`\n=== ${step} — ${plan.name} ===`);
  save();

  if (plan.terminal) {
    // GATES FIRST, THEN COMMIT, THEN PAUSE. This block used to commit and halt
    // without running A10's gates at all, so the gate-table entry for A10 —
    // level-coverage, the hard receipt gate — was dead code that `--list`
    // advertised and no run executed.
    //
    // Wave 4 is the cost of that: its A8 gate failed, the run was resumed past
    // it at A9, no later step re-ran depcheck, and A10 committed and reported a
    // clean owner-pause over five items left published with no verification
    // stamp. The next wave's very first gate refused to start on them. Running
    // the terminal gates here turns that into a halt at the end of the wave that
    // caused it, which is where it is cheapest to fix.
    //
    // Ordering matters: gate BEFORE the commit, so a failing wave does not leave
    // a commit whose message says "awaiting owner audit".
    const terminalGates = runGates(step);
    journal('gates', { detail: `exit ${terminalGates.code}` });
    if (terminalGates.code !== 0) {
      let detail = String(terminalGates.out);
      try {
        const parsed = JSON.parse(terminalGates.out);
        detail = parsed.results.filter((r) => r.status === 'fail')
          .map((r) => `${r.tool}: ${r.code} — ${String(r.detail).split('\n')[0]}`).join('\n  ');
      } catch { /* not JSON: keep the raw output */ }
      halt('gate-failed', `${step} gates failed — NOT an owner pause, and nothing was committed:\n  ${detail}`,
        resumeCmd(step));
    }
    // Commit, never push. A crash before here leaves a dirty tree, which is
    // recoverable; a push before the owner has read the diff is not.
    if (!dryRun && !simulation) {
      const add = execute('git add', 'git', ['add', '-A']);
      if (add.code === 0) {
        const msg = `feat(audit): wave ${state.wave} A0-A10 — unattended run, awaiting owner audit`;
        const commit = execute('git commit', 'git', ['commit', '-m', msg]);
        journal('commit', { detail: `exit ${commit.code}` });
      }
    }
    journal('owner-pause');
    halt('owner-pause', `A10 reached — ${OWNER_PAUSE}`,
      `review ${DIR}/${run}-A10.md and the commit, then audit and publish by hand`);
  }

  if (plan.snapshot && !dryRun) {
    const snap = node(['tools/touchlog.mjs', 'snap', `${DIR}/${run}-touches.json`, plan.snapshot]);
    if (snap.code !== 0) halt('snapshot-failed', `could not take the "${plan.snapshot}" baseline: ${snap.out}`, resumeCmd(step));
    journal('snapshot', { detail: plan.snapshot });
  }

  for (const args of plan.actions?.() ?? []) {
    const result = node(args);
    journal('action', { detail: `${args[0]} exit ${result.code}` });
    if (result.code !== 0) halt('action-failed', `${args[0]} failed at ${step}: ${String(result.out).slice(-500)}`, resumeCmd(step));
  }
  plan.afterActions?.();

  if (plan.judgment) {
    if (state.policy.judgment === 'halt') {
      halt('judgment-required', `${step} (${plan.name}) needs an orchestrator decision.\n  ${plan.note}`,
        `do the step, then: ${resumeCmd(ORDER[ORDER.indexOf(step) + 1])}`);
    }
    // Wave 4 found this lane broken in three ways at once, and all three had the
    // same shape: the autonomous path silently lacked what the halt path gets for
    // free. It was handed briefs/audit-alpha.md — Alpha's A6/A8 duties, not this
    // step's — while plan.note, the actual instructions, was read only by the
    // halt() above and so reached nobody. Then exit 0 was recorded as a decision,
    // and an agent that correctly refused a misrouted dispatch looked exactly like
    // one that had adjudicated: the wave advanced to A4 with 91 provenance
    // determinations and 13 repairs approved by no one. Three Betas refused to
    // apply them, which is luck, not a mechanism. So: the step's own brief, the
    // note delivered through dispatch.mjs's --task channel, and a receipt on disk
    // that a no-op cannot produce.
    const receiptRel = `${DIR}/${run}-${step}.md`;
    const receipt = join(REPO, receiptRel);
    const before = existsSync(receipt) ? statSync(receipt).mtimeMs : 0;
    const taskRel = `${DIR}/${run}-${step}-task.md`;
    if (!dryRun && !simulation) {
      writeFileSync(join(REPO, taskRel), [
        `# ${step} — ${plan.name} (wave ${state.wave})`, '',
        'You are the orchestrator, dispatched by the unattended audit driver. This step is yours alone:',
        'the Betas propose and apply, Alpha adjudicates judges, and neither may stand in for the decision below.', '',
        `**The step:** ${plan.note}`, '',
        `**Your receipt:** write the decision to \`${receiptRel}\` — every proposal, approved or declined,`,
        'the evidence you read from disk, and a one-line rationale. The driver halts if that file is missing or',
        'unchanged, because this step is the only gate between a Beta proposal and its application.', '',
        '**If the dispatch is wrong** — wrong brief, missing artifacts, a step whose prerequisites are not on disk —',
        'write that to the receipt and exit nonzero. Do not exit 0 on work you did not do.', '',
      ].join('\n'));
    }
    const result = dispatchAgent('orchestrator', 'briefs/audit-orchestrator.md', `${step}-judgment`,
      { k: state.wave }, taskRel);
    journal('judgment', { detail: `autonomous, exit ${result.code}` });
    if (result.code !== 0) halt('judgment-failed', `the autonomous orchestrator failed at ${step}: ${String(result.out).slice(-500)}`, resumeCmd(step));
    const after = existsSync(receipt) ? statSync(receipt).mtimeMs : 0;
    if (!dryRun && !simulation && after <= before) {
      halt('judgment-empty',
        `${step} exited 0 but wrote no decision to ${receiptRel}.\n`
        + '  An agent that could not do the step exits 0 exactly like one that did; the receipt is the only difference.\n'
        + `  Agent said: ${String(result.out).slice(-400)}`,
        resumeCmd(step));
    }
  }

  if (plan.requiresBatches && !batchLabels().length && !dryRun && !simulation) {
    halt('no-batches', `${step} (${plan.name}) needs one agent per batch, but no manifest matches ${DIR}/${run}-*.pages.json. A0 produces them.`,
      resumeCmd('A0'));
  }

  // The A6 precompute: the pure/material split and the impact template. Both
  // deterministic, both driver-side, neither Alpha's to redo. NOT the URL
  // liveness sweep — this comment claimed it for three waves and no code here
  // ever did it (wave 4). AUDIT-WORKFLOW.md §7 leaves that sweep with the
  // orchestrator, and A3's note now says so instead of promising a table that
  // does not exist.
  if (plan.precompute) {
    const split = node(['tools/audit-split.mjs', '--scope', manifests().map((n) => `${DIR}/${n}`).join(','), '--json']);
    if (split.code !== 0) halt('action-failed', `audit-split failed: ${String(split.out).slice(-400)}`, resumeCmd(step));
    if (!dryRun && !simulation) writeFileSync(join(REPO, DIR, `${run}-split.json`), split.out + '\n');
    journal('precompute', { detail: 'audit-split written' });

    const tmpl = node(['tools/impact-audit.mjs', '--touches', `${DIR}/${run}-touches.json`,
      '--from', 'pre-A4', '--to', 'post-A4', '--template', `${DIR}/${run}-impact-template.json`]);
    journal('precompute', { detail: `impact template exit ${tmpl.code}` });
  }

  // AGENT FAN-OUT IS PARALLEL (owner, 2026-08-05, binding on this and every
  // future session). This was a serial `for` loop, which made the whole design
  // around it inert: `audit-beta` carries a lane cap of 5 precisely so a wave's
  // batches run at once, and AUDIT-WORKFLOW.md §7 justifies the fan-out by the
  // batches' disjoint write sets — but the loop blocked on each dispatch, so the
  // cap never bound and wave 5's four batches were quoted at ~2 hours of
  // strictly sequential reading.
  //
  // CONCURRENCY IS BOUNDED BY THE ROLE, NOT HERE. dispatch.mjs acquires a
  // cross-process slot before spawning its model, so the real limit is the role
  // cap (audit-beta 5, audit-alpha 1). Launching every agent of a step at once
  // is therefore safe by construction: excess ones park cheaply in a node
  // process waiting for a slot, and a single-agent step (A6, A8) behaves exactly
  // as before.
  //
  // FAILURE SEMANTICS CHANGE, DELIBERATELY. Serially, the first failure halted
  // and the remaining agents never ran, so an operator learned about one broken
  // lane per run. Now every agent completes and the halt names ALL of them —
  // when a brief or a credential is wrong it is usually wrong for all four, and
  // discovering that in one run instead of four is the point.
  const agents = plan.agents?.() ?? [];
  if (agents.length) {
    const results = await Promise.all(agents.map((agent) =>
      dispatchAgentAsync(agent.role, agent.brief, agent.label, agent.vars, agent.task ?? null)
        .then((result) => ({ agent, result }))));
    for (const { agent, result } of results) {
      journal('agent', { detail: `${agent.role}/${agent.label} exit ${result.code}` });
    }
    const failed = results.filter(({ result }) => result.code !== 0);
    if (failed.length) {
      halt('agent-failed',
        `${failed.length} of ${results.length} agent(s) failed at ${step}:\n`
        + failed.map(({ agent, result }) => `  ${agent.role}/${agent.label}: ${String(result.out).slice(-400)}`).join('\n'),
        resumeCmd(step));
    }
  }
  for (const args of plan.afterAgents?.() ?? []) {
    const result = node(args);
    if (result.code !== 0) halt('action-failed', `${args[0]} failed after ${step}: ${String(result.out).slice(-400)}`, resumeCmd(step));
  }

  if (plan.spends) {
    const fingerprint = conventionsFingerprint();
    const lastPass = lastPassingInjection();
    if (!lastPass || lastPass.fingerprint !== fingerprint) {
      halt('injection-test-required',
        'the judge prompt context changed (briefs/judge-conventions.txt or tools/judge.mts) and no passing injection test '
        + `records fingerprint ${fingerprint.slice(0, 12)}.\n`
        + '  ARCHITECTURE.md §5: inject a defect known false under this library\'s conventions and verify BOTH lanes catch it.\n'
        + `  Record the result in ${DIR}/judge-injection-tests.jsonl as {"fingerprint":"…","result":"pass","at":"…"}.`,
        resumeCmd(step));
    }
    const budget = state.policy.judge_budget;
    if (!budget) {
      halt('manual-step', 'A7 spends and no --judge-budget was given, so the driver will not sweep.\n'
        + `  Either run it yourself, or resume with a budget:\n`
        + `  node tools/run-wave.mjs --wave ${state.wave} --from-step A7 --judge-budget <N>`,
        resumeCmd('A7'));
    }
    const spent = state.steps.A7?.judge_calls ?? 0;
    if (spent >= budget) halt('budget-exhausted', `judge budget of ${budget} call(s) is spent`,
      `raise it: node tools/run-wave.mjs --wave ${state.wave} --from-step A7 --judge-budget <N>`);

    const sweep = execute('judge-sweep', process.execPath, [
      'tools/judge-sweep.mjs',
      '--ledger', `${DIR}/${run}-judge.jsonl`,
      '--cost', `${DIR}/${run}-judge-cost.jsonl`,
      '--manifests', manifests().map((n) => `${DIR}/${n}`).join(','),
      // The lineup is the owner's to set and the sweep's child judges inherit
      // whatever lands here, so an explicit env wins and the default follows
      // tools/judge.mts rather than pinning a lineup the tools have moved off.
    ], { env: { ...process.env, JUDGE_LINEUP: process.env.JUDGE_LINEUP ?? 'deepseek+sonnet' } });
    journal('spend', { detail: `judge sweep exit ${sweep.code}` });
    if (sweep.code !== 0) halt('sweep-failed', `the judge sweep failed: ${String(sweep.out).slice(-500)}`, resumeCmd(step));
  }

  const gates = runGates(step);
  journal('gates', { detail: `exit ${gates.code}` });
  if (gates.code !== 0) {
    let detail = String(gates.out);
    try {
      const parsed = JSON.parse(gates.out);
      detail = parsed.results.filter((r) => r.status === 'fail')
        .map((r) => `${r.tool}: ${r.code} — ${String(r.detail).split('\n')[0]}`).join('\n  ');
    } catch { /* not JSON: keep the raw output */ }
    halt('gate-failed', `${step} gates failed:\n  ${detail}`, resumeCmd(step));
  }

  state.steps[step] = { status: 'complete', at: now() };
  journal('step-complete', { detail: plan.name });
  save();
}

state.status = 'complete';
save();
report();
