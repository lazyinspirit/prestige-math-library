#!/usr/bin/env node
// run-level.mjs — drive a level from step 0 to the owner pause, unattended.
//
//   node tools/run-level.mjs --run frontier-10 --level 10
//   node tools/run-level.mjs --run frontier-10 --status
//   node tools/run-level.mjs --run frontier-10 --level 10 --dry-run
//   node tools/run-level.mjs --run frontier-10 --level 10 --simulate fixture.json
//
// WHAT IT IS. The orchestrator has always been a session: it decided what ran
// next, and closing it ended the build. This is that decision procedure written
// down, so the run owns its own state on disk and a session becomes a client of
// it rather than its life support.
//
// WHAT IT IS NOT. It is not a substitute for judgement, and it does not publish.
// Step 10 is the workflow's sole owner pause and this halts there by design —
// `verification.audited`, deletions, id changes and reading-order changes are
// owner-reserved and no policy flag exposes them.
//
// HALT-AND-REPORT BEATS GUESS-AND-CONTINUE. Every halt records a reason, a code,
// and the exact command to resume. A driver that guesses at a failed gate is
// worse than one that stops, because the guess is discovered days later in
// published mathematics.
//
// TWO KINDS OF STEP.
//   * Mechanical — dispatch agents, run a tool, run gates. Fully autonomous.
//   * Judgement — steps 0, 3, 4 and 9 need an orchestrator decision that no gate
//     encodes. `--judgment autonomous` dispatches a headless orchestrator and
//     records what it decided; `--judgment halt` (the default) stops for you.
//     The default is halt because delegating judgement should be a thing you
//     switched on, not a thing you discovered.
//
// FATAL REPAIRS ARE NOT CAPPED. `--park-after` bounds how many step-8 fatal
// rounds the driver will take on ONE item WITHOUT you, then parks that item and
// carries on with the rest of the level. It is not a limit on how many attempts
// a defect may have; a parked item resumes with one command. R1 already makes
// nonfatal rounds impossible, so every round this counts is a confirmed fatal.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { spawnSync, spawn } from 'node:child_process';
import { join } from 'node:path';
import { REPO } from './paths.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dryRun = argv.includes('--dry-run');
const statusOnly = argv.includes('--status');
const option = (name, fallback = null) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : fallback; };

const run = option('--run');
const level = option('--level');
const fromStep = option('--from-step');
const judgment = option('--judgment', 'halt');
const parkAfter = Number(option('--park-after', '3'));
const judgeBudget = Number(option('--judge-budget', '0'));   // 0 = unbounded
const simulatePath = option('--simulate');

const usage = (message) => {
  if (message) console.error(`run-level: ${message}`);
  console.error('usage: node tools/run-level.mjs --run <name> --level <n> [--from-step N]');
  console.error('                                [--judgment halt|autonomous] [--park-after N]');
  console.error('                                [--judge-budget N] [--dry-run] [--json]');
  console.error('       node tools/run-level.mjs --run <name> --status');
  process.exit(2);
};

if (!run || !/^[A-Za-z0-9._-]+$/.test(run)) usage('--run is required and must be a plain run name');
if (!['halt', 'autonomous'].includes(judgment)) usage('--judgment must be halt or autonomous');

const statePath = join(REPO, 'research', `${run}-run-state.json`);
const controlPath = join(REPO, 'research', `${run}-run-control.json`);

// ---- state ------------------------------------------------------------------

const now = () => new Date().toISOString();

const loadState = () => {
  if (existsSync(statePath)) return JSON.parse(readFileSync(statePath, 'utf8'));
  return {
    run, level: level ? Number(level) : null,
    created_at: now(), updated_at: now(),
    status: 'pending', step: 0,
    policy: { judgment, park_after: parkAfter, judge_budget: judgeBudget },
    halt: null,
    parked: [],
    steps: {},
    journal: [],
  };
};

let state = loadState();

const journal = (event, detail = {}) => {
  state.journal.push({ at: now(), step: state.step, event, ...detail });
  // The journal is the audit trail for an unattended run; keep it whole.
};

const save = () => {
  if (dryRun) return;
  state.updated_at = now();
  mkdirSync(join(REPO, 'research'), { recursive: true });
  writeFileSync(statePath, JSON.stringify(state, null, 2) + '\n');
};

const halt = (code, reason, resume) => {
  state.status = 'halted';
  state.halt = { code, reason, resume, at: now() };
  journal('halt', { code, reason });
  save();
  report();
  process.exit(code === 'owner-pause' ? 0 : 1);
};

// ---- status -----------------------------------------------------------------

function report() {
  if (asJson) { console.log(JSON.stringify(state, null, 2)); return; }
  console.log(`run ${state.run}${state.level != null ? ` (level ${state.level})` : ''}: ${state.status.toUpperCase()} at step ${state.step}`);
  console.log(`  updated ${state.updated_at}`);
  console.log(`  policy  judgment=${state.policy.judgment} park-after=${state.policy.park_after} judge-budget=${state.policy.judge_budget || 'unbounded'}`);
  const done = Object.entries(state.steps).filter(([, s]) => s.status === 'complete').map(([n]) => n);
  if (done.length) console.log(`  done    steps ${done.join(', ')}`);
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
    for (const entry of tail) console.log(`    ${entry.at.slice(11, 19)}  step ${entry.step}  ${entry.event}${entry.reason ? ` — ${entry.reason}` : ''}${entry.detail ? ` — ${entry.detail}` : ''}`);
  }
}

if (statusOnly) {
  if (!existsSync(statePath)) { console.error(`run-level: no run state at ${statePath}`); process.exit(2); }
  report();
  process.exit(0);
}

if (!level && state.level == null) usage('--level is required to start a run');

// ---- execution layer (injectable, so the machine is testable) ---------------

/** In simulate mode, outcomes come from a fixture instead of real processes.
 *  This is how the transition logic gets tested without tsx, keys, or hours of
 *  agent time — the parts that cannot run on a developer checkout. */
const simulation = simulatePath ? JSON.parse(readFileSync(simulatePath, 'utf8')) : null;
let simIndex = 0;

const execute = (what, bin, args) => {
  if (simulation) {
    const next = simulation.outcomes[simIndex++] ?? { exit: 0, note: 'default' };
    return { code: next.exit ?? 0, out: next.note ?? '', simulated: true };
  }
  if (dryRun) {
    console.log(`  would run: ${bin} ${args.join(' ')}`);
    return { code: 0, out: '(dry run)', dryRun: true };
  }
  const child = spawnSync(bin, args, { cwd: REPO, encoding: 'utf8', timeout: 6 * 3600 * 1000 });
  const out = ((child.stdout ?? '') + (child.stderr ?? '')).trim();
  return { code: child.error ? null : child.status, out };
};

const runGates = (step) => execute(`gates step ${step}`, process.execPath,
  ['tools/gates.mjs', '--step', String(step), '--run', run, '--json']);

const dispatchArgs = (role, brief, agentLabel, vars = {}) => [
  'tools/dispatch.mjs', '--role', role, '--brief', brief, '--label', agentLabel, '--run', run,
  ...Object.entries(vars).flatMap(([k, v]) => ['--var', `${k}=${v}`]),
];
const dispatchAgent = (role, brief, agentLabel, vars = {}) =>
  execute(`dispatch ${role}/${agentLabel}`, process.execPath, dispatchArgs(role, brief, agentLabel, vars));

// Async twin, used only for the agent fan-out — see the parallel block below.
// Dry-run and simulation fall through to the sync path on purpose: a simulation
// consumes `outcomes` by index, so a shuffled completion order would silently
// reassign fixture outcomes to the wrong agents.
const executeAsync = (what, bin, args) => {
  if (simulation || dryRun) return Promise.resolve(execute(what, bin, args));
  return new Promise((resolve) => {
    const child = spawn(bin, args, { cwd: REPO });
    let out = '';
    let settled = false;
    const finish = (code) => { if (settled) return; settled = true; clearTimeout(timer); resolve({ code, out: out.trim() }); };
    const timer = setTimeout(() => child.kill('SIGTERM'), 6 * 3600 * 1000);
    child.stdout.on('data', (d) => { out += d; });
    child.stderr.on('data', (d) => { out += d; });
    child.on('error', (e) => { out += String(e); finish(null); });
    child.on('close', finish);
  });
};
const dispatchAgentAsync = (role, brief, agentLabel, vars = {}) =>
  executeAsync(`dispatch ${role}/${agentLabel}`, process.execPath, dispatchArgs(role, brief, agentLabel, vars));

// ---- control file -----------------------------------------------------------

/** Polled BETWEEN transitions only. A command never interrupts a step midway:
 *  a half-applied step is exactly the state that is expensive to reason about
 *  later, so the cost of a command landing seconds late is the cheaper side. */
const readControl = () => {
  if (!existsSync(controlPath)) return null;
  try {
    const control = JSON.parse(readFileSync(controlPath, 'utf8'));
    return control?.command ? control : null;
  } catch { return null; }
};

const applyControl = () => {
  const control = readControl();
  if (!control) return 'continue';
  journal('control', { detail: control.command });
  if (control.command === 'halt') {
    halt('operator-halt', 'halted by run-control.json', `node tools/run-level.mjs --run ${run} --level ${state.level}`);
  }
  if (control.command === 'pause') {
    state.status = 'paused';
    save();
    if (!asJson) console.log('run-level: paused by control file; delete or set command=resume to continue');
    process.exit(0);
  }
  if (control.command === 'park' && control.id) {
    state.parked.push({ id: control.id, reason: 'parked by operator', at: now() });
    save();
  }
  if (control.command === 'budget' && Number.isFinite(control.value)) {
    state.policy.judge_budget = control.value;
    save();
  }
  return 'continue';
};

// ---- the step table ---------------------------------------------------------

const manifests = () => {
  const dir = join(REPO, 'research');
  const pattern = new RegExp(`^${run.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}-batch-.*\\.pages\\.json$`);
  try { return readdirSync(dir).filter((n) => pattern.test(n)).sort(); } catch { return []; }
};
const batchLabels = () => manifests().map((name) => name.replace(/\.pages\.json$/, '').replace(`${run}-`, ''));

const OWNER_PAUSE = 'the sole owner pause: audit, then publish by flipping status. Nothing here may do that.';

const STEP_PLAN = {
  0: { name: 'Batch', judgment: true,
       note: 'compute the frontier FROM DISK (not from rounds.mjs, which ignores publication state), divide A-pages into batches of at most 2, report the cross-batch seam count' },
  1: { name: 'Scaffold', requiresBatches: true, agents: () => batchLabels().map((l, i) => ({ role: 'beta', brief: 'briefs/beta-scaffold.md', label: l, vars: { n: state.level, i: i + 1 } })) },
  2: { name: 'Resolve dependencies', requiresBatches: true, agents: () => batchLabels().map((l, i) => ({ role: 'beta', brief: 'briefs/beta-scaffold.md', label: `${l}-deps`, vars: { n: state.level, i: i + 1 } })) },
  3: { name: 'Adjudicate recommendations', judgment: true,
       note: 'verify each Beta recommendation from disk, then approve or decline. Priority: mathematical accuracy > minimize forward references > preserve richness' },
  4: { name: 'Apply and propagate', judgment: true,
       note: 'splice Beta outputs into plan-spec.json taking the UNION of requires, hard-fail on id clash, then spawn Alpha to propagate notes into the prose scaffolds' },
  5: { name: 'Author', requiresBatches: true, agents: () => batchLabels().map((l, i) => ({ role: 'beta', brief: 'briefs/authoring.md', label: `${l}-author`, vars: { n: state.level, i: i + 1 } })) },
  6: { name: 'Audit', requiresBatches: true, agents: () => [
         ...batchLabels().map((l, i) => ({ role: 'reader', brief: 'briefs/beta-step8-audit.md', label: `${l}-reader`, vars: { n: state.level, i: i + 1 } })),
         { role: 'alpha', brief: 'briefs/alpha.md', label: 'step6', vars: { n: state.level } },
       ] },
  7: { name: 'Judge', spends: true, tool: () => ['tools/judge-sweep.mjs',
         '--ledger', `research/${run}-judge.jsonl`, '--cost', `research/${run}-judge-cost.jsonl`,
         '--pages', 'ALL_A_PAGES'] },
  8: { name: 'Adjudicate judge rejections', snapshot: 'pre-step8',
       agents: () => [{ role: 'alpha', brief: 'briefs/alpha.md', label: 'step8', vars: { n: state.level } }] },
  9: { name: 'Scope-denial sweep', judgment: true,
       note: 'grep is the ENTRY POINT, never the sweep: negation is carried by neither/no item/lacks/absent from/silent on/nowhere. Check order-relative claims by position' },
  10: { name: 'Final rundown', terminal: true,
        note: 'produce the fatal-error report grouped by defect type and location, then stop' },
};

// ---- the machine ------------------------------------------------------------

state.level = state.level ?? Number(level);
if (fromStep != null) state.step = Number(fromStep);
if (state.status === 'halted' && fromStep == null && !dryRun && !simulation) {
  console.error(`run-level: run is halted (${state.halt?.code}). Fix the cause, then pass --from-step to resume.`);
  console.error(`  ${state.halt?.reason}`);
  process.exit(2);
}
state.status = 'running';
state.policy = { judgment, park_after: parkAfter, judge_budget: judgeBudget };
journal('start', { detail: `from step ${state.step}` });
save();

for (let step = state.step; step <= 10; step += 1) {
  state.step = step;
  const plan = STEP_PLAN[step];
  applyControl();
  journal('step-begin', { detail: plan.name });
  if (!asJson) console.log(`\n=== step ${step} — ${plan.name} ===`);
  save();

  // Step 10 is the terminus. Nothing past it is automatable by policy.
  if (plan.terminal) {
    journal('owner-pause');
    halt('owner-pause', `step 10 reached — ${OWNER_PAUSE}\n  ${plan.note}`,
      `review research/${run}-*, then audit and publish by hand`);
  }

  // A dedicated baseline snapshot, taken BEFORE the step that will be measured
  // against it. R1's guard reads exactly this.
  if (plan.snapshot && !dryRun) {
    const snap = execute('touchlog snap', process.execPath,
      ['tools/touchlog.mjs', 'snap', `research/${run}-touches.json`, plan.snapshot]);
    if (snap.code !== 0) halt('snapshot-failed', `could not take the "${plan.snapshot}" baseline: ${snap.out}`,
      `node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step}`);
    journal('snapshot', { detail: plan.snapshot });
  }

  // Judgement steps.
  if (plan.judgment) {
    if (state.policy.judgment === 'halt') {
      halt('judgment-required', `step ${step} (${plan.name}) needs an orchestrator decision.\n  ${plan.note}`,
        `do the step, then: node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step + 1}`);
    }
    const result = dispatchAgent('orchestrator', 'briefs/alpha.md', `step${step}-judgment`, { n: state.level });
    journal('judgment', { detail: `autonomous, exit ${result.code}` });
    if (result.code !== 0) {
      halt('judgment-failed', `the autonomous orchestrator failed at step ${step}: ${String(result.out).slice(-500)}`,
        `node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step}`);
    }
  }

  // A step whose whole purpose is agent work must not sail through having
  // dispatched nobody. With no batch manifests on disk, `agents()` is an empty
  // list and steps 1, 2, 5 and 6 would each "succeed" instantly — an unattended
  // run would reach step 7 with nothing authored and only the judge to notice.
  if (plan.requiresBatches && !batchLabels().length) {
    halt('no-batches', `step ${step} (${plan.name}) dispatches one agent per batch, but no batch manifest ` +
      `matches research/${run}-batch-*.pages.json. Step 0 produces them.`,
      `create the batch manifests, then: node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step}`);
  }

  // Agent work — PARALLEL (owner, 2026-08-05, binding on this and every future
  // session). This was a serial loop, which made the surrounding design inert:
  // `beta` and `reader` carry lane caps of 5 so a level's batches run at once,
  // but blocking on each dispatch meant the cap never bound.
  //
  // Concurrency is bounded by the ROLE, not here: dispatch.mjs acquires a
  // cross-process slot before spawning its model, so launching a step's agents
  // together is safe by construction, excess ones park cheaply waiting for a
  // slot, and a single-agent step (Alpha, cap 1) behaves exactly as before.
  //
  // Failure semantics change deliberately: every agent now completes and the
  // halt names ALL failures, because a broken brief or credential is usually
  // broken for every lane, and learning that in one run beats learning it in
  // four.
  const agents = plan.agents?.() ?? [];
  if (agents.length) {
    const results = await Promise.all(agents.map((agent) =>
      dispatchAgentAsync(agent.role, agent.brief, agent.label, agent.vars)
        .then((result) => ({ agent, result }))));
    for (const { agent, result } of results) {
      journal('agent', { detail: `${agent.role}/${agent.label} exit ${result.code}` });
    }
    const failed = results.filter(({ result }) => result.code !== 0);
    if (failed.length) {
      halt('agent-failed',
        `${failed.length} of ${results.length} agent(s) failed at step ${step}:\n`
        + failed.map(({ agent, result }) => `  ${agent.role}/${agent.label}: ${String(result.out).slice(-400)}`).join('\n'),
        `node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step}`);
    }
  }

  // Tools that spend.
  if (plan.spends) {
    const budget = state.policy.judge_budget;
    const spent = state.steps['7']?.judge_calls ?? 0;
    if (budget && spent >= budget) {
      halt('budget-exhausted', `judge budget of ${budget} call(s) is spent`,
        `raise it: node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step} --judge-budget <N>`);
    }
    if (dryRun || simulation) {
      journal('spend', { detail: 'judge sweep (not executed here)' });
    } else {
      halt('manual-step', `step 7 spends: run the judge sweep yourself, supplying every A page in the level.\n` +
        `  tools/judge-sweep.mjs --ledger research/${run}-judge.jsonl --cost research/${run}-judge-cost.jsonl --pages <every A page>`,
        `node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step}`);
    }
  }

  // Gates.
  const gates = runGates(step);
  journal('gates', { detail: `exit ${gates.code}` });
  if (gates.code !== 0) {
    let detail = String(gates.out);
    try {
      const parsed = JSON.parse(gates.out);
      detail = parsed.results.filter((r) => r.status === 'fail')
        .map((r) => `${r.tool}: ${r.code} — ${String(r.detail).split('\n')[0]}`).join('\n  ');
    } catch { /* not JSON: keep the raw output */ }
    halt('gate-failed', `step ${step} gates failed:\n  ${detail}`,
      `fix, then: node tools/run-level.mjs --run ${run} --level ${state.level} --from-step ${step}`);
  }

  state.steps[String(step)] = { status: 'complete', at: now() };
  journal('step-complete', { detail: plan.name });
  save();
}

state.status = 'complete';
save();
report();
