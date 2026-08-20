#!/usr/bin/env node
// autopilot — a deterministic control plane for multi-stage agent pipelines.
//
//   autopilot frontier [--categories a,b]      what is buildable now, in waves
//   autopilot plan --run <name> --pairs a,b    step 0: batch, manifest, drift-check
//   autopilot start --run <name> [--detach]    run steps 1..10 with nobody in the loop
//   autopilot status                           current state, human-readable
//   autopilot pause | resume | stop | report
//   autopilot retry [--unit N]
//
// The daily shape this is built for:
//   cd <repo> && autopilot frontier            # see what is buildable
//   autopilot plan --run frontier-15 --pairs …  # step 0, mechanical
//   autopilot start --run frontier-15 --detach  # steps 1..10, autonomous
//   autopilot status                            # any time, from anywhere

import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync, rmSync, openSync, closeSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { State, statePath } from '../src/state.mts';
import { Reporter, renderStatus } from '../src/reporter.mts';
import { Executor } from '../src/executor.mts';
import { makeExecAdapter } from '../src/adapters/exec.mts';
import { writeCommand } from '../src/control.mts';
import { waves, packBatches, writeManifests, driftEvidence } from '../src/frontier.mts';
import { doctor } from '../src/doctor.mts';
import { formatProblems } from '../src/spec.mts';
import type { Config } from '../src/types.mts';

const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n: string, d: any = null): any => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const has = (n: string): boolean => argv.includes(`--${n}`);

const repo = resolve(opt('repo', process.cwd()));
const stateDir = resolve(opt('state-dir', join(repo, '.autopilot')));
const CONFIG_PATH = join(repo, 'autopilot.config.json');

function loadConfig(): Config {
  const base: any = {
    repo,
    stateDir,
    dispatchDir: null,
    stages: join(HERE, '..', 'stages', 'mathlib.mts'),
    // The one platform-specific setting. Point it at whatever starts an agent.
    // An ARRAY, not a string: a string has to be parsed, and every attempt to
    // parse one here produced a quoting defect.
    argv: ['node', 'tools/dispatch.mjs',
      '--role', '{role}', '--brief', '{brief}', '--task', '{task}',
      '--label', '{label}', '--run', '{run}', '--covers', '{covers}',
      '--timeout', '{timeout}',
      // dispatch.mjs substitutes these into the brief and task as <run>, <i> and
      // <output>, so a generic template resolves to this run's real paths.
      // Each drops out entirely when empty.
      //
      // `run` is what makes a brief in `briefs/` reusable. Without it, every run
      // needed its own copy of every brief, and those copies diverged: this repo
      // carried a 409-line canonical Alpha brief covering steps 3/4/6/8 and a
      // 115-line per-run one covering step 3 only, and five stages dispatched
      // the step-3 one to Alphas doing steps 8, 9 and 10.
      '--var', 'run={run}', '--var', 'i={unit}', '--var', 'output={artifact}'],
    concurrency: 5,
    maxAttempts: 2,
    reportIntervalMin: 20,
    pollSec: 30,
    defaultTimeoutSec: 14400,
    coversMap: {},
  };
  if (existsSync(CONFIG_PATH)) Object.assign(base, JSON.parse(readFileSync(CONFIG_PATH, 'utf8')));
  base.repo = repo;
  base.stateDir = stateDir;
  return base;
}

const die = (msg: string, code = 2): never => { console.error(msg); process.exit(code); };

/** The run's GENERATED prompt artifacts: the drift evidence and the drift
 *  review task. ONE generator with two callers — `plan` at step 0 and
 *  `refresh-tasks` after a template fix — so a generated file is never edited
 *  by hand: on frontier-15 a template defect (an identity placeholder inside
 *  the verdict-grammar example) was first repaired by hand-editing the
 *  generated task file, which fixes the instance and leaves the template to
 *  regenerate the defect on the next run. The template is the source; this is
 *  its only writer.
 *
 *  Drift review is an AUDIT NODE, not a check. Determining what a design
 *  document requires means reading it; the mechanical half is assembling the
 *  evidence. Three heuristic versions of this each traded one error class for
 *  another, and the last one reported four confident false candidates.
 *
 *  The engine dispatches the task as the `drift` unit of stage 1, and the
 *  `drift-review` gate parses the report — this template and
 *  tools/drift-review-check.mjs share the VERDICT contract; change them
 *  together. The grammar example writes `(order N)`, never an angle-bracketed
 *  n: dispatch.mjs hard-errors on a prompt carrying the identity placeholders,
 *  and the example is inside the dispatched prompt — the drift unit burned all
 *  three attempts and blocked stage 1 on exactly that.
 */
function writeDriftArtifacts(run: string, pages: string[]) {
  const evidence = driftEvidence(repo, pages);
  const evPath = join(repo, 'research', `${run}-drift-evidence.json`);
  writeFileSync(evPath, JSON.stringify(evidence, null, 2) + '\n');
  const taskPath = join(repo, 'research', `${run}-alpha-step0-drift.task.md`);
  writeFileSync(taskPath, [
    `## Step-0 prerequisite drift review — run \`${run}\``,
    '',
    'A track design states what a page needs; `plan-spec.json` declares it. When',
    'they disagree the scaffold is built against the design and step 4 fails with',
    '`undeclared-prereq` — after the citation has been written. Caught here it is a',
    'one-line spec edit.',
    '',
    'This is a reading task and it is given to you rather than to a regex because',
    'three mechanical versions each failed differently. Real drift is usually in',
    'prose that never writes a `requires` line: on frontier-14 the topology design',
    'called a metric-only restriction "forced, not stylistic" *because the',
    'compactness page was unbuilt* — and it had since published. On frontier-15,',
    'step 0 found a design (§II.8 of the algebra track) that had re-routed a whole',
    'proof through pages the spec never declared. No parser reaches either.',
    '',
    `**Evidence assembled for you:** \`research/${run}-drift-evidence.json\``,
    '',
    'Per page it gives the declared `requires`, the full transitive spec closure,',
    'every design-document line mentioning the page, and every plan page id',
    'appearing near those lines that is NOT already in the closure. The last list is',
    'raw and noisy on purpose — it is a reading list, not a finding list. Read the',
    'design section it points into, not just the evidence.',
    '',
    '### What to do with a finding',
    '',
    '- **Backward edge** (the missing prerequisite has a LOWER `order`): apply it',
    '  yourself — edit that page\'s `requires` in `research/plan-spec.json`, run',
    '  `node tools/validate-plan.mjs research/plan-spec.json`, record the exact edit.',
    '- **Higher-order or out-of-spec target:** a reading-order change, owner-only.',
    '  Record it as blocked; edit nothing.',
    '',
    '### Report contract — the gate parses this',
    '',
    `Write \`research/${run}-alpha-step0-drift.md\`, one section per A page:`,
    '',
    '    ### <a-page-id>',
    '    ...what you read: doc, section, the design\'s stated prerequisites...',
    '    VERDICT: no-drift',
    '    VERDICT: drift-applied — added <page-id> (order N)[, ...]',
    '    VERDICT: drift-blocked — <the exact edge and why it is not addable>',
    '',
    'Exactly one VERDICT line per section. `tools/drift-review-check.mjs` fails the',
    'stage on a missing section, a malformed verdict, or any drift-blocked — a',
    'blocked edge stops the run for the owner, which is the point.',
    '',
    '**No permission prompts of any kind**, including inside an `&&` chain.',
  ].join('\n') + '\n');
  console.log(`\nwrote ${evPath.replace(repo + '/', '')}`);
  console.log(`wrote ${taskPath.replace(repo + '/', '')}  <- the drift review; stage 1 dispatches it as the \`drift\` unit`);
}

async function buildExecutor(run?: string) {
  const config = loadConfig();
  config.run = run ?? config.run;
  if (!config.run) die('--run is required (or set "run" in autopilot.config.json)');
  config.dispatchDir = config.dispatchDir ?? join(repo, 'research', `${config.run}-dispatch`);
  const coversPath = join(repo, 'research', `${config.run}-covers.json`);
  if (existsSync(coversPath)) {
    // A malformed covers map is NOT optional. Swallowing the parse error leaves
    // every lane it should have annotated uncovered, so the run re-dispatches
    // work that is already done and nothing says why.
    try {
      config.coversMap = { ...JSON.parse(readFileSync(coversPath, 'utf8')), ...config.coversMap };
    } catch (err: any) {
      console.error(`WARNING: ${coversPath} is unreadable (${err?.message ?? err}).`);
      console.error('  Lanes it would have annotated will read as uncovered, and the engine will');
      console.error('  re-dispatch them. Fix or delete the file.');
    }
  }
  const stagesPath = resolve(config.stages);
  const mod = await import(stagesPath);
  // The executor hot-reloads this file at tick boundaries (validated first,
  // refused on problems) — an edited stage table no longer costs a stop, a
  // full battery drain and a restart.
  (config as any).stagesPath = stagesPath;
  const state = new State(statePath(config.stateDir)).init(config.run);
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: config.reportIntervalMin * 60 * 1000 });
  const adapter = makeExecAdapter({ argv: config.argv, cwd: repo, logger: (m) => reporter.event('exec', { command: m }) });
  // The abort signal is deliberately NOT wired to SIGTERM.
  //
  // The handler used to call controller.abort(), which propagates to every
  // running agent and kills it. The message said the opposite — "in-flight
  // dispatches are left to finish" — and the code was the lie. Restarting the
  // engine mid-stage therefore destroyed three Beta fix passes and re-dispatched
  // them as attempt 2 of 2, one failure away from blocking the stage.
  //
  // An agent that has been thinking for forty minutes is expensive and its work
  // is nearly done; the engine restarting is not a reason to throw it away.
  // State is on disk, the result record lands whenever the agent finishes, and
  // the next engine adopts it. So exit the loop and leave the children alone.
  const controller = new AbortController();
  for (const sig of ['SIGINT', 'SIGTERM']) {
    process.on(sig, () => {
      reporter.notify('signal', `${sig} received; leaving ${'in-flight dispatches'} to finish — their results will be adopted on restart`);
      process.exit(0);
    });
  }
  return new Executor({ config, stages: mod.stages, adapter, state, reporter, signal: controller.signal });
}

switch (cmd) {
  case 'frontier': {
    const cats = opt('categories');
    const { waves: w, blocked } = waves(repo, { categories: cats ? cats.split(',') : null });
    if (!w.length) { console.log('nothing buildable — every planned page in scope is built or blocked'); }
    const total = w.reduce((n: any, x: any) => n + x.length, 0);
    console.log(`${total} A/B pair(s) buildable across ${w.length} wave(s)${cats ? ` in ${cats}` : ''}\n`);
    w.forEach((wave: any, i: any) => {
      console.log(`WAVE ${i + 1}  (${wave.length} pair${wave.length === 1 ? '' : 's'})${i === 0 ? '  <- buildable NOW' : ''}`);
      for (const p of wave.sort((a: any, b: any) => String(a.category).localeCompare(String(b.category)))) {
        console.log(`  ${String(p.order).padStart(8)}  [${p.category}]  ${p.id}`);
        console.log(`            ${p.title}`);
      }
      console.log('');
    });
    if (blocked.length) {
      console.log(`BLOCKED OUTSIDE SCOPE — ${blocked.length} pair(s) need a page this scope does not build:`);
      for (const b of blocked) console.log(`  ${b.id}  <- ${b.blockedBy.join(', ')}`);
    }
    break;
  }

  case 'plan': {
    const run = opt('run') ?? die('--run is required');
    const pairsArg = opt('pairs');
    let pages;
    if (pairsArg === 'wave1' || !pairsArg) {
      const cats = opt('categories');
      const { waves: w } = waves(repo, { categories: cats ? cats.split(',') : null });
      if (!w.length) die('nothing buildable');
      pages = w[0].map((p: any) => p.id);
      console.log(`no --pairs given; using wave 1 (${pages.length} pair(s))\n`);
    } else {
      pages = pairsArg.split(',').map((s: any) => s.trim()).filter(Boolean);
    }

    const cap = Number(opt('cap', '2'));
    const groups = packBatches(repo, pages, { cap });
    const written = writeManifests(repo, run, groups, { force: has('force') });
    console.log(`step 0 for ${run}: ${pages.length} A/B pair(s) -> ${groups.length} batch(es), cap ${cap}\n`);
    for (const wr of written) console.log(`  batch ${wr.batch}: ${wr.pages.join(', ')}`);

    writeDriftArtifacts(run, pages);

    const covers = {};
    written.forEach((wr: any) => { covers[`beta-batch-${wr.batch}`] = [String(wr.batch)]; });
    writeFileSync(join(repo, 'research', `${run}-covers.json`), JSON.stringify(covers, null, 2) + '\n');
    console.log(`\nwrote research/${run}-covers.json`);
    // The scope ledger: what this run owes. Without it, a page removed from a
    // manifest mid-run is invisible to every gate, because they all validate
    // what is present rather than what was promised.
    //
    // `--force` is FORWARDED, and a failure here fails `plan`. The old shape
    // forwarded nothing, printed stdout only, and swallowed the writer's
    // stderr refusal — so a `plan --force` re-scope rewrote every manifest,
    // left the ledger owing pages the run no longer builds, and reported
    // success. The scope gate would then have blocked stage 1 hours later,
    // over a step-0 defect this line was in a position to name immediately.
    {
      const { spawnSync } = await import('node:child_process');
      const ledgerArgs = ['tools/manifest-integrity.mjs', '--run', run, '--write-ledger'];
      if (has('force')) ledgerArgs.push('--force');
      const r = spawnSync('node', ledgerArgs, { cwd: repo, encoding: 'utf8' });
      process.stdout.write((r.stdout ?? '').replace(/^/gm, '  '));
      process.stderr.write((r.stderr ?? '').replace(/^/gm, '  '));
      if (r.status !== 0) {
        die(`plan: the scope-ledger step failed (exit ${r.status}). The ledger is what makes scope loss visible; not printing "Next:" over a stale one.`);
      }
    }
    // The run's task files. These used to be a hand-written step that `plan`
    // could only REMIND you to do — "Next: write the per-batch task files" —
    // and the reminder is not a gate. Two things went wrong with that and both
    // are now impossible: a file a REPAIR ROUND needs could be absent with
    // doctor green (doctor never reached those dispatches), and the cheapest
    // way to produce a set was to copy the previous run's and rename, which
    // carries that run's MATHEMATICS into this one's prompts. `run-tasks.mjs`
    // renders them from `briefs/tasks/`, deriving only what plan-spec and the
    // manifests actually say, and its failure fails `plan` for the same reason
    // the ledger step above does.
    {
      const { spawnSync } = await import('node:child_process');
      const taskArgs = ['tools/run-tasks.mjs', '--run', run];
      if (has('force')) taskArgs.push('--force');
      const r = spawnSync('node', taskArgs, { cwd: repo, encoding: 'utf8' });
      process.stdout.write((r.stdout ?? '').replace(/^/gm, '  '));
      process.stderr.write((r.stderr ?? '').replace(/^/gm, '  '));
      if (r.status !== 0) {
        die(`plan: rendering the run's task files failed (exit ${r.status}). A stage with no task file blocks the run when it dispatches, not now.`);
      }
    }
    console.log(`\nNext: \`autopilot doctor --run ${run}\`, then \`autopilot start --run ${run} --detach\``);
    break;
  }

  case 'refresh-tasks': {
    // Regenerate the run's GENERATED prompt artifacts from the current
    // templates — nothing else: no manifests, no covers, no ledger, no
    // re-baseline. This is the repair path for a template defect found
    // mid-run; the alternative is hand-editing a generated file, which fixes
    // one run and leaves the template broken for every later one. Scope comes
    // from the ledger, which is what the run owes.
    const run = opt('run') ?? die('--run is required');
    const ledgerPath = join(repo, 'research', `${run}-scope-ledger.json`);
    if (!existsSync(ledgerPath)) die(`refresh-tasks: no ${ledgerPath} — run \`plan\` first; there is nothing to refresh`);
    const owedA = (JSON.parse(readFileSync(ledgerPath, 'utf8')).pages ?? [])
      .filter((p: any) => p.kind === 'A').map((p: any) => p.id);
    if (!owedA.length) die(`refresh-tasks: ${ledgerPath} owes no A pages`);
    writeDriftArtifacts(run, owedA);
    // The stage task files are generated too, from briefs/tasks/, so a template
    // defect found mid-run is fixed in the template and re-rendered here — the
    // whole point of this command. `--force` also re-renders the per-batch Beta
    // files, which are otherwise left alone in case a person enriched one.
    {
      const { spawnSync } = await import('node:child_process');
      const taskArgs = ['tools/run-tasks.mjs', '--run', run];
      if (has('force')) taskArgs.push('--force');
      const r = spawnSync('node', taskArgs, { cwd: repo, encoding: 'utf8' });
      process.stdout.write((r.stdout ?? '').replace(/^/gm, '  '));
      process.stderr.write((r.stderr ?? '').replace(/^/gm, '  '));
      if (r.status !== 0) die(`refresh-tasks: rendering the task files failed (exit ${r.status})`);
    }
    break;
  }

  case 'start': {
    const run = opt('run');
    // Validate BEFORE detaching. A spec defect found by the detached child is a
    // blocker in a log nobody is reading yet; found here it is a message on the
    // terminal of the person who just typed `start`.
    {
      const probe = await buildExecutor(run);
      if (probe.specProblems.length) {
        console.error('autopilot: refusing to start — the stage table cannot fail:\n');
        console.error(formatProblems(probe.specProblems));
        console.error('\nA stage with no gate reports success unconditionally. Add gates, or declare');
        console.error('`gatesWaived: "<why>"` — except on the terminal stage, which may not waive.');
        process.exit(2);
      }
    }
    if (has('detach')) {
      // Spawn THIS script, by its own resolved path — a hardcoded sibling name
      // once pointed at a file that did not exist, and with stdio ignored the
      // child died instantly while this parent printed a pid and "running".
      // The child's stdio goes to the log so a failed start leaves evidence.
      const self = fileURLToPath(import.meta.url);
      // Forward EVERY relevant option. Dropping --state-dir split the brain:
      // the parent's stop marker and control.json landed under one dir while
      // the child ran against <repo>/.autopilot, and every later pause/stop
      // "succeeded" where the engine was not looking.
      const args = [self, 'start', '--repo', repo,
        ...(run ? ['--run', run] : []),
        ...(opt('state-dir') ? ['--state-dir', opt('state-dir')] : []),
        ...(opt('poll') ? ['--poll', opt('poll')] : [])];
      // AND FORWARD THE LOADER THAT MADE THIS PROCESS RUNNABLE. This file is
      // `.mts`; `node file.mts` only works on a node compiled with TypeScript
      // support. On a node without it — a distro build, which is what this repo
      // ran on — the child dies instantly with ERR_UNKNOWN_FILE_EXTENSION while
      // the parent prints "running detached, pid N", so the operator is told the
      // run started and the log holds a stack trace nobody is reading yet.
      // `process.execArgv` is exactly the `--import <loader>` the parent was
      // started with (by `tools/tsx-run.mjs`), and is empty on a node that does
      // not need one, so this is correct in both worlds rather than a guess
      // about which one we are in. Inspector flags are dropped: a detached
      // daemon inheriting a fixed debug port cannot bind it twice.
      const execArgv = process.execArgv.filter((a: string) => !a.startsWith('--inspect'));
      mkdirSync(stateDir, { recursive: true });
      const out = join(stateDir, 'autopilot.log');
      const fd = openSync(out, 'a');
      const child = spawn(process.execPath, [...execArgv, ...args], { detached: true, stdio: ['ignore', fd, fd] });
      child.unref();
      closeSync(fd);
      appendFileSync(out, `[${new Date().toISOString()}] detached pid ${child.pid}\n`);
      console.log(`autopilot running detached, pid ${child.pid}`);
      console.log(`  status:  autopilot status --repo ${repo}`);
      console.log(`  pause:   autopilot pause --repo ${repo}`);
      console.log(`  log:     ${out}`);
      break;
    }
    const ex = await buildExecutor(run);
    const cfg = loadConfig();
    ex.reporter.notify('start', `autopilot driving ${ex.config.run} from ${repo}`);
    const outcome = await ex.run({ pollMs: (Number(opt('poll', cfg.pollSec)) || 30) * 1000 });
    ex.reporter.notify('finish', `run loop exited: ${outcome}`);
    process.exit(outcome === 'blocked' ? 1 : 0);
  }

  case 'doctor': {
    const cfg = loadConfig();
    const run = opt('run') ?? cfg.run;
    if (!run) die('--run is required (or set "run" in autopilot.config.json)');
    const { problems, notes, ok } = await doctor({ repo, run, stagesPath: resolve(cfg.stages), config: cfg });
    console.log(`autopilot doctor — ${run} in ${repo}\n`);
    for (const o of ok) console.log(`  ok        ${o}`);
    for (const n of notes) console.log(`  note      ${n}`);
    for (const p of problems) console.log(`  PROBLEM   ${p}`);
    console.log(problems.length
      ? `\n${problems.length} problem(s). Each of these fails silently hours into a run; fix before starting.`
      : '\nNo problems. Every check here corresponds to something that has actually gone wrong before.');
    process.exit(problems.length ? 1 : 0);
  }

  case 'status': {
    // RECOMPUTE, don't print the last report.
    //
    // Printing status.md showed a stage as current thirty minutes after it had
    // cleared, because the file is only rewritten on the report interval. Someone
    // reading it at 3am would have concluded the run was stuck when it was three
    // stages further on. Coverage is a set difference over files on disk — it is
    // cheap to recompute and always true, so compute it.
    //
    // The stored file remains the fallback for the case where the run name
    // cannot be resolved (no config, no --run), which is the only situation
    // where recomputation is impossible.
    try {
      const cfg = loadConfig();
      const run = opt('run') ?? cfg.run;
      if (run) {
        const ex = await buildExecutor(run);
        console.log(renderStatus(ex.snapshot(), new Date().toISOString()));
        break;
      }
    } catch (err: any) {
      console.error(`(live status unavailable: ${err?.message ?? err}; showing the last report)`);
    }
    const p = join(stateDir, 'status.md');
    if (existsSync(p)) { console.log(readFileSync(p, 'utf8')); break; }
    die('no run configured and no status.md yet; pass --run');
    break;
  }

  case 'pause': case 'resume': case 'stop': case 'report': {
    // `stop` must also stop the watchdog, or the two fight: the engine exits,
    // the watchdog sees it gone and starts it again, forever.
    if (cmd === 'stop') { mkdirSync(stateDir, { recursive: true }); writeFileSync(join(stateDir, 'stopped'), new Date().toISOString() + '\n'); }
    if (cmd === 'resume') { try { rmSync(join(stateDir, 'stopped')); } catch { /* not stopped */ } }
    writeCommand(stateDir, cmd);
    console.log(`${cmd} requested; the engine acts on it at the next tick`);
    break;
  }

  case 'retry': {
    writeCommand(stateDir, 'retry', opt('unit') ? { unit: opt('unit') } : {});
    console.log('retry armed');
    break;
  }

  case 'skip': {
    const stage = opt('stage') ?? die('--stage is required');
    writeCommand(stateDir, 'skip', { stage });
    console.log(`skip requested for ${stage}`);
    break;
  }

  default:
    console.log(readFileSync(join(HERE, '..', 'README.md'), 'utf8').split('\n').slice(0, 60).join('\n'));
    process.exit(cmd ? 2 : 0);
}
