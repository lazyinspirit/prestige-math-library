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

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
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

const node = (args) => execute(args[0], process.execPath, args);
const runGates = (step) => execute(`gates ${step}`, process.execPath,
  ['tools/gates.mjs', '--audit', '--step', step, '--run', run, '--json']);
const dispatchAgent = (role, brief, label, vars = {}) => execute(`dispatch ${role}/${label}`, process.execPath, [
  'tools/dispatch.mjs', '--role', role, '--brief', brief, '--label', label, '--run', run,
  ...Object.entries(vars).flatMap(([k, v]) => ['--var', `${k}=${v}`]),
]);

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
      + 'The driver has already checked every URL — read the liveness table before trusting a Beta\'s own report of it.',
  },

  A4: {
    name: 'Apply approved retags and repairs',
    requiresBatches: true,
    snapshot: 'pre-A4',
    agents: () => batchLabels().map((label) => ({
      role: 'audit-beta', brief: 'briefs/audit-beta.md', label: `${label}-apply`,
      vars: { k: state.wave, category: label },
    })),
    afterAgents: () => [['tools/touchlog.mjs', 'snap', `${DIR}/${run}-touches.json`, 'post-A4']],
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
state.status = 'running';
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
    const result = dispatchAgent('orchestrator', 'briefs/audit-alpha.md', `${step}-judgment`, { k: state.wave });
    journal('judgment', { detail: `autonomous, exit ${result.code}` });
    if (result.code !== 0) halt('judgment-failed', `the autonomous orchestrator failed at ${step}: ${String(result.out).slice(-500)}`, resumeCmd(step));
  }

  if (plan.requiresBatches && !batchLabels().length && !dryRun && !simulation) {
    halt('no-batches', `${step} (${plan.name}) needs one agent per batch, but no manifest matches ${DIR}/${run}-*.pages.json. A0 produces them.`,
      resumeCmd('A0'));
  }

  // The A6 precompute: URL liveness, the pure/material split, the impact
  // template. All deterministic, all driver-side, none of it Alpha's to redo.
  if (plan.precompute) {
    const split = node(['tools/audit-split.mjs', '--scope', manifests().map((n) => `${DIR}/${n}`).join(','), '--json']);
    if (split.code !== 0) halt('action-failed', `audit-split failed: ${String(split.out).slice(-400)}`, resumeCmd(step));
    if (!dryRun && !simulation) writeFileSync(join(REPO, DIR, `${run}-split.json`), split.out + '\n');
    journal('precompute', { detail: 'audit-split written' });

    const tmpl = node(['tools/impact-audit.mjs', '--touches', `${DIR}/${run}-touches.json`,
      '--from', 'pre-A4', '--to', 'post-A4', '--template', `${DIR}/${run}-impact-template.json`]);
    journal('precompute', { detail: `impact template exit ${tmpl.code}` });
  }

  for (const agent of plan.agents?.() ?? []) {
    const result = dispatchAgent(agent.role, agent.brief, agent.label, agent.vars);
    journal('agent', { detail: `${agent.role}/${agent.label} exit ${result.code}` });
    if (result.code !== 0) halt('agent-failed', `${agent.role}/${agent.label} failed at ${step}: ${String(result.out).slice(-500)}`, resumeCmd(step));
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
    ], { env: { ...process.env, JUDGE_LINEUP: 'deepseek+terra' } });
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
