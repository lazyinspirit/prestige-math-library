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
  const mod = await import(resolve(config.stages));
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

    // Drift review is an AUDIT NODE, not a check. Determining what a design
    // document requires means reading it; the mechanical half is assembling the
    // evidence. Three heuristic versions of this each traded one error class
    // for another, and the last one reported four confident false candidates.
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
      'three mechanical versions each failed differently. The real drift found on the',
      'last run was `ascoli-arzela` missing `compactness`: the topology design says so',
      'in **prose** — it calls a metric-only restriction "forced, not stylistic"',
      '*because the compactness page was unbuilt*, and that page has since published —',
      'and never writes a `requires` line at all. No parser reaches that.',
      '',
      `**Evidence assembled for you:** \`research/${run}-drift-evidence.json\``,
      '',
      'Per page it gives the declared `requires`, the full transitive spec closure,',
      'every design-document line mentioning the page, and every plan page id',
      'appearing near those lines that is NOT already in the closure. The last list is',
      'raw and noisy on purpose — it is a reading list, not a finding list.',
      '',
      '### What to return',
      '',
      `Write \`research/${run}-alpha-step0-drift.md\`. Per page, one of:`,
      '',
      '- **no drift** — the design asks for nothing the closure lacks. Say what you read.',
      '- **drift** — name the exact prerequisite, quote the design line that requires it,',
      '  and say whether the edge points backward (lower `order`) so it is legal to add.',
      '',
      'An edge to a page with a HIGHER order is not addable — say so and stop; that is a',
      'reading-order change and it is the owner\'s alone.',
      '',
      'Read the design section, not just the evidence file. The evidence is a pointer.',
      '',
      '**No permission prompts of any kind**, including inside an `&&` chain.',
    ].join('\n') + '\n');
    console.log(`\nwrote ${evPath.replace(repo + '/', '')}`);
    console.log(`wrote ${taskPath.replace(repo + '/', '')}  <- drift review, dispatched as the first audit node`);

    const covers = {};
    written.forEach((wr: any) => { covers[`beta-batch-${wr.batch}`] = [String(wr.batch)]; });
    writeFileSync(join(repo, 'research', `${run}-covers.json`), JSON.stringify(covers, null, 2) + '\n');
    console.log(`\nwrote research/${run}-covers.json`);
    // The scope ledger: what this run owes. Without it, a page removed from a
    // manifest mid-run is invisible to every gate, because they all validate
    // what is present rather than what was promised.
    try {
      const { spawnSync } = await import('node:child_process');
      const r = spawnSync('node', ['tools/manifest-integrity.mjs', '--run', run, '--write-ledger'], { cwd: repo, encoding: 'utf8' });
      process.stdout.write((r.stdout ?? '').replace(/^/gm, '  '));
    } catch (err: any) { console.error(`  could not write the scope ledger: ${err?.message ?? err}`); }
    console.log(`\nNext: write the per-batch task files, then \`autopilot start --run ${run} --detach\``);
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
      const args = [self, 'start', '--repo', repo, ...(run ? ['--run', run] : [])];
      mkdirSync(stateDir, { recursive: true });
      const out = join(stateDir, 'autopilot.log');
      const fd = openSync(out, 'a');
      const child = spawn(process.execPath, args, { detached: true, stdio: ['ignore', fd, fd] });
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
