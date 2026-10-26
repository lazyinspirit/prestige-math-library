#!/usr/bin/env node
// autopilot — a deterministic control plane for multi-stage agent pipelines.
//
//   autopilot frontier [--categories a,b]      complete future schedule
//   autopilot frontier --next                  all-category >95%-published next set
//   autopilot plan --run <name> --pairs a,b    step 0: batch, manifest, drift-check
//   autopilot start --run <name> [--detach]    run steps 1..8 with nobody in the loop
//   autopilot status                           current state, human-readable
//   autopilot pause | resume | stop | report
//   autopilot retry [--unit N]
//   autopilot refresh --run RUN --stage 1-scaffold --unit N --reason TEXT
//   autopilot prerequisites register --run RUN --request FILE --state-dir DIR
//   autopilot prerequisites finish --run RUN --state-dir DIR
//
// The daily shape this is built for:
//   cd <repo> && autopilot frontier            # see what is buildable
//   autopilot plan --run frontier-15 --pairs …  # step 0, mechanical
//   autopilot start --run frontier-15 --detach  # steps 1..8, autonomous
//   autopilot status                            # any time, from anywhere

import { readFileSync, writeFileSync, existsSync, mkdirSync, mkdtempSync, appendFileSync, rmSync, openSync, closeSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

import { isStatusComputation, runStatus } from '../../autopilot-status.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const cmd = argv[0];
const opt = (n: string, d: any = null): any => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : d; };
const has = (n: string): boolean => argv.includes(`--${n}`);

const repo = resolve(opt('repo', join(HERE, '../../..', 'physics')));
process.env.PHYSICS_REPO = repo;
const stateDir = resolve(opt('state-dir', join(repo, '.physics-autopilot')));
if (repo === resolve(HERE, '../../..')) throw new Error('physics engine refuses the mathematics repository as --repo');
if (!stateDir.startsWith(repo + '/')) throw new Error('physics state-dir must be inside its workspace');
const CONFIG_PATH = join(repo, 'physics-autopilot.config.json');

// Acquire the shared, nonblocking status slot before importing the executor or
// stage graph. Waiting pollers must never build their own expensive snapshots.
if (cmd === 'status' && !isStatusComputation()) {
  process.exit(await runStatus({
    cli: fileURLToPath(import.meta.url), argv, repo, stateDir,
    guardDir: resolve(HERE, '../../..', '.autopilot'), configPath: CONFIG_PATH,
  }));
}

const { State, statePath } = await import('../src/state.mts');
const { assertWorkflowRevision } = await import('../src/workflow-revision.mts');
const { Reporter, renderStatus } = await import('../src/reporter.mts');
const { Executor } = await import('../src/executor.mts');
const { makeExecAdapter } = await import('../src/adapters/exec.mts');
const { writeCommand } = await import('../src/control.mts');
const { waves, nextBuildableSet, packBatches, writeManifests, driftEvidence, unsatisfiableEdges } = await import('../src/frontier.mts');
const { MAX_RUN_PAIRS } = await import('../src/capacity.mjs');
const { appendFrontier, assertNoAppendTransaction, scanAppendProcesses, authorizeAppendPbwRoleRepair } = await import('../src/frontier-append.mts');
const { registerStep2Prerequisites, finishStep2Prerequisites, repairStep2Prerequisites, assertNoPrerequisiteTransaction } = await import('../src/step2-prerequisites.mts');
const { doctor } = await import('../src/doctor.mts');
const { writeBatchDependencyLevels } = await import('../../physics-support/batch-dependency-levels.mjs');
const { formatProblems } = await import('../src/spec.mts');
const { acquireControllerLock } = await import('../src/controller-lock.mts');
const { reopenStep3 } = await import('../src/step3-reopen.mts');
const { inspectStep6PackagingRecovery, recoverStep6Packaging } = await import('../src/step6-packaging-recovery.mts');
import type { Config } from '../src/types.mts';
const { readStatementPolicy, isFreshStatementRun, writeStatementPolicy } = await import('../../statement-first-policy.mjs');

function loadConfig(): Config {
  const base: any = {
    repo,
    stateDir,
    dispatchDir: null,
    stages: join(HERE, '..', 'stages', 'mathlib.mts'),
    // The one platform-specific setting. Point it at whatever starts an agent.
    // An ARRAY, not a string: a string has to be parsed, and every attempt to
    // parse one here produced a quoting defect.
    argv: ['node', 'tools/physics-support/dispatch.mjs',
      '--role', '{role}', '--brief', '{brief}', '--task', '{task}',
      '--label', '{label}', '--run', '{run}', '--covers', '{covers}',
      '--timeout', '{timeout}', '--attempt', '{attempt}',
      '--image', '{images}', '--output-schema', '{outputSchema}',
      '--result-artifact', '{resultArtifact}',
      '--profile', '{profile}',
      // dispatch.mjs substitutes these into the brief and task as <run>, <i> and
      // <output>, so a generic template resolves to this run's real paths.
      // Each drops out entirely when empty.
      //
      // `run` is what makes a brief in `briefs/` reusable. Without it, every run
      // needed its own copy of every brief, and those copies diverged: this repo
      // carried a 409-line canonical Alpha brief covering steps 3/4/6/8 and a
      // 115-line per-run one covering step 3 only, and five stages dispatched
      // the step-3 one to Alphas doing review and closeout steps.
      '--var', 'run={run}', '--var', 'i={unit}', '--var', 'output={artifact}'],
    concurrency: 30,
    globalConcurrency: 30,
    maxAttempts: 2,
    reportIntervalMin: 10,
    pollSec: 30,
    defaultTimeoutSec: 14400,
    coversMap: {},
  };
  if (existsSync(CONFIG_PATH)) Object.assign(base, JSON.parse(readFileSync(CONFIG_PATH, 'utf8')));
  if (base.gateFailurePolicy != null && !['repair', 'owner', 'owner-recertify'].includes(base.gateFailurePolicy)) {
    throw new Error(`gateFailurePolicy must be "repair", "owner", or "owner-recertify"; got ${JSON.stringify(base.gateFailurePolicy)}`);
  }
  // A checkpoint continuation may select a run-local stage table without
  // changing other live runs or the global model/concurrency configuration.
  const localConfigPath = join(stateDir, 'config.json');
  if (existsSync(localConfigPath)) {
    const local = JSON.parse(readFileSync(localConfigPath, 'utf8'));
    if (!local || Object.keys(local).some(key => !['run', 'stages'].includes(key)))
      throw new Error(`unsupported run-local configuration: ${localConfigPath}`);
    if (typeof local.run !== 'string' || typeof local.stages !== 'string')
      throw new Error(`run-local configuration needs run and stages: ${localConfigPath}`);
    if (opt('run') && opt('run') !== local.run)
      throw new Error(`--run does not match run-local configuration: ${localConfigPath}`);
    base.run = local.run;
    base.stages = resolve(repo, local.stages);
  }
  // Mandatory production boundary; configuration cannot waive owner review.
  base.ownerGateRecertification = true;
  // Only newly planned namespaces opt in. Existing controllers and run-local
  // stage selections remain on their original table and revision.
  const editorialRun = opt('run') ?? base.run;
  const editorialPolicy = readStatementPolicy(repo, editorialRun, 'physics');
  if (editorialPolicy) {
    const selected = join(HERE, '..', 'stages', editorialPolicy.page_layout === 'compact-v1'
      ? 'mathlib.compact.mts' : 'mathlib.statement-first.mts');
    if (existsSync(localConfigPath) && resolve(base.stages) !== resolve(selected))
      throw new Error('Statement-first run cannot replace an explicit run-local stage table');
    base.stages = selected;
  }
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
 *  tools/physics-support/drift-review-check.mjs share the VERDICT contract; change them
 *  together. The grammar example writes `(order N)`, never an angle-bracketed
 *  n: dispatch.mjs hard-errors on a prompt carrying the identity placeholders,
 *  and the example is inside the dispatched prompt — the drift unit burned all
 *  three attempts and blocked stage 1 on exactly that.
 */
function writeDriftArtifacts(run: string, pages: string[], allowInRunDependencies = false) {
  const evidence = driftEvidence(repo, pages);
  const evPath = join(repo, 'research', `${run}-drift-evidence.json`);
  writeFileSync(evPath, JSON.stringify(evidence, null, 2) + '\n');
  const taskPath = join(repo, 'research', `${run}-alpha-step1-drift.task.md`);
  writeFileSync(taskPath, [
    `# Step 1a — prerequisite drift, ${run}`,
    '',
    '- Follow briefs/alpha-drift.md; respect the selected scope and explicit owner restrictions.',
    `- Read research/${run}-drift-evidence.json and the complete design sections it identifies.`,
    '- Apply authorized backward edges and ordering corrections; validate the plan.',
    '- Escalate new pairs, scope changes and unresolved prerequisites; do not mint or rescope without explicit authorization.',
    '- Each retained A and B page must have strictly more than 95% of same-category prerequisites available; partner and cross-category edges are excluded.',
    allowInRunDependencies
      ? '- This run counts published or lower-order in-run prerequisites as available.'
      : '- Only published prerequisites count as available.',
    `- Write research/${run}-alpha-step1-drift.md with one section per assigned A page.`,
    '- Use exactly one verdict per section, with concrete IDs and numeric orders:',
    '  - `### PAGE_ID` followed by evidence and `VERDICT: no-drift`.',
    '  - `VERDICT: drift-applied — added PAGE_ID (order N)`.',
    '  - `VERDICT: drift-reordered — PAGE_ID (order OLD -> NEW)`.',
    '  - `VERDICT: drift-blocked — exact prerequisite and required owner action`.',
    '  - Only for explicitly authorized plan changes: `VERDICT: drift-minted — PAGE_ID (order N)` or `VERDICT: drift-rescoped — build PAGE_ID (order N) instead`.',
    '- Write only the plan and report. The mechanical stage updates manifests and scope records.',
  ].join('\n') + '\n');
  console.log(`\nwrote ${evPath.replace(repo + '/', '')}`);
  console.log(`wrote ${taskPath.replace(repo + '/', '')}  <- the drift review; stage 1 dispatches it as the \`drift\` unit`);
}

async function buildExecutor(run?: string) {
  const config = loadConfig();
  config.run = run ?? config.run;
  if (!config.run) die('--run is required (or set "run" in physics-autopilot.config.json)');
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
  // The executor hot-reloads the table and its sibling stage modules at tick
  // boundaries (validated first, refused on problems). mathlib.step3.mts is a
  // composed part of the table, not a separately restart-bound configuration.
  (config as any).stagesPath = stagesPath;
  config.stagesWatch = readdirSync(dirname(stagesPath))
    .filter((name) => name.endsWith('.mts'))
    .map((name) => join(dirname(stagesPath), name));
  // Preparation/prose can discharge the optional author stage after startup.
  // Recompose through the existing guarded reload using file metadata only.
  config.stagesWatch.push(join(repo, 'research', `${config.run}-pathway-closure.json`));
  const state = new State(statePath(config.stateDir));
  const hasResults = existsSync(config.dispatchDir)
    && readdirSync(config.dispatchDir).some(name => name.endsWith('.result.json'));
  assertWorkflowRevision(state.data, mod.workflowRevision, hasResults);
  if (mod.workflowRevision) state.data.workflowRevision = mod.workflowRevision;
  state.init(config.run);
  const reporter = new Reporter({ dir: config.stateDir, intervalMs: config.reportIntervalMin * 60 * 1000 });
  const adapter = makeExecAdapter({ argv: config.argv, cwd: repo, env: { PRESTIGE_STEP6_STATE_DIR: config.stateDir }, logger: (m) => reporter.event('exec', { command: m }) });
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
  const stageTable = typeof mod.stagesForRun === 'function' ? mod.stagesForRun({ repo, run: config.run, config }) : mod.stages;
  return new Executor({ config, stages: stageTable, adapter, state, reporter, signal: controller.signal });
}

switch (cmd) {
  case 'authorize-append-pbw-role-repair': {
    const run = opt('run') ?? die('--run is required');
    try {
      console.log(JSON.stringify(authorizeAppendPbwRoleRepair({ repo, run,
        stateDir: opt('state-dir') ? stateDir : join(repo, '.physics-autopilot', run),
        requestPath: resolve(repo, opt('request') ?? die('--request is required')), inspect: has('inspect') }), null, 2));
    } catch (error: any) { console.error(String(error?.message ?? error)); process.exitCode = 1; }
    break;
  }
  case 'retire-unknown-step1-dispatch': {
    const { retireUnknownStep1Dispatch } = await import('../src/unknown-step1-dispatch.mts');
    const run = opt('run') ?? die('--run is required');
    try {
      console.log(JSON.stringify(retireUnknownStep1Dispatch({ repo, run,
        stateDir: opt('state-dir') ? stateDir : join(repo, '.physics-autopilot', run),
        key: opt('dispatch') ?? die('--dispatch is required'), reason: opt('reason'),
        inspect: has('inspect'), scan: scanAppendProcesses }), null, 2));
    } catch (error: any) { console.error(String(error?.message ?? error)); process.exitCode = 1; }
    break;
  }

  case 'recover-step6-packaging': {
    const run = opt('run') ?? die('--run is required');
    const authorization = opt('authorization') ?? die('--authorization is required');
    const config = loadConfig();
    const options = { repo, run, stateDir: opt('state-dir') ? stateDir : join(repo, '.physics-autopilot', run),
      dispatchDir: config.dispatchDir ?? join(repo, 'research', `${run}-dispatch`), authorizationPath: resolve(repo, authorization) };
    try {
      console.log(JSON.stringify(has('inspect') ? inspectStep6PackagingRecovery(options).guards : recoverStep6Packaging(options), null, 2));
    } catch (error: any) { console.error(String(error?.message ?? error)); process.exitCode = 1; }
    break;
  }
  case 'init': {
    const { importMathematics } = await import('../../physics-support/physics-imports.mjs');
    const receipt = importMathematics(repo, resolve(opt('math-repo', join(HERE, '../../..'))));
    console.log(`physics init: ${receipt.files.length} published mathematics files imported into ${repo}`);
    break;
  }
  case 'reopen-step3': {
    const run = opt('run') ?? die('--run is required');
    const authorization = opt('authorization') ?? die('--authorization is required');
    const config = loadConfig();
    // Runs live in `.physics-autopilot/<run>`; an explicit --state-dir still wins.
    const runStateDir = opt('state-dir') ? stateDir : join(repo, '.physics-autopilot', run);
    try {
      const result = reopenStep3({
        repo,
        run,
        stateDir: runStateDir,
        dispatchDir: config.dispatchDir ?? join(repo, 'research', `${run}-dispatch`),
        authorizationPath: resolve(repo, authorization),
        pauseAfter: opt('pause-after', '3a-close'),
      });
      console.log(`reopen-step3: ${result.reopenId} archived ${result.archived.length} file(s) and cleared `
        + `${result.clearedStages.length} Step-3 stage record(s)`);
      console.log(`  archive: ${result.archiveDir}`);
      console.log('  run remains paused; start the controller and resume to re-run Step 3 to its boundary');
    } catch (error: any) {
      console.error(String(error?.message ?? error));
      process.exitCode = 1;
    }
    break;
  }

  case 'frontier': {
    if (has('next')) {
      const maxPairs = Number(opt('max-pairs', String(MAX_RUN_PAIRS)));
      const next = nextBuildableSet(repo, { maxPairs });
      console.log(`${next.pages.length} A/B pair(s) selected from all categories for the next run (cap ${maxPairs})`);
      console.log('buildable means BOTH pages have strictly more than 95% of same-category dependencies already published');
      console.log('');
      next.waves.forEach((wave: any) => {
        console.log(`NEXT SET  (${wave.length} pair${wave.length === 1 ? '' : 's'})`);
        for (const p of wave) {
          console.log(`  ${String(p.order).padStart(8)}  [${p.category}]  ${p.id}`);
          console.log(`            ${p.title}`);
          console.log(`            published same-category dependencies: A ${p.buildability.A.publishedCount}/${p.buildability.A.dependencyCount}, B ${p.buildability.B.publishedCount}/${p.buildability.B.dependencyCount}`);
        }
        console.log('');
      });
      const bad = unsatisfiableEdges(repo, next.pages.map((p: any) => p.id));
      if (bad.length) die(`internal error: next-run selection has ${bad.length} below-threshold dependency finding(s)`);
      console.log('dependency check: every selected A and B page is strictly above the 95% same-category publication threshold');
      if (next.skipped.length) console.log(`${next.skipped.length} buildable pair(s) deferred by the cap`);
      if (next.ineligible.length) console.log(`${next.ineligible.length} unfinished pair(s) are not yet above the threshold on both pages`);
      break;
    }
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

  case 'prerequisites': {
    const run=opt('run')??die('--run is required');
    const action=argv[1], config=loadConfig();
    if(!['register','finish','repair-authorize','repair-complete','authored-metadata-adopt'].includes(action))die('prerequisites register|repair-authorize|repair-complete|authored-metadata-adopt --request FILE | finish --run RUN --state-dir DIR');
    if(action.startsWith('repair-')||action==='authored-metadata-adopt'){
      const result=repairStep2Prerequisites({repo,run,stateDir:config.stateDir,request:opt('request')??die('--request is required'),complete:action==='repair-complete',authored:action==='authored-metadata-adopt'});
      console.log(`Root prerequisite repair ${action}: generation ${result.generation}. Fresh owner preparation and full ordinary gates remain required.`);
      break;
    }
    const result=action==='register'
      ? registerStep2Prerequisites({repo,run,stateDir:config.stateDir,request:opt('request')??die('--request is required')})
      : finishStep2Prerequisites({repo,run,stateDir:config.stateDir});
    console.log(`Supplemental prerequisite generation ${result.number}: batches ${result.batches.join(', ') || '(owner additions only)'}. Registration grants no acceptance or original Step-1 coverage.`);
    break;
  }

  case 'plan': {
    const { spawnSync } = await import('node:child_process');
    const run = opt('run') ?? die('--run is required');
    const pairsArg = opt('pairs');
    if (has('append')) {
      if (has('force') || has('allow-unbuildable') || (opt('cap') && Number(opt('cap')) !== 1)) die('append refuses force, unbuildable waiver or repacking');
      if (!pairsArg || ['next','wave1'].includes(pairsArg)) die('append requires explicit new A-page IDs');
      const entry = appendFrontier({repo,run,stateDir:loadConfig().stateDir,pairs:pairsArg.split(',').map((id:string)=>id.trim()),
        priorPlan:opt('prior-plan')??die('--prior-plan is required'),baseDispositionReview:opt('base-disposition-review'),sourceEvidence:(opt('source-evidence')??'').split(',').filter(Boolean),evidence:driftEvidence,buildability:unsatisfiableEdges});
      console.log(`Physics native append ${entry.number}: batches ${entry.batches.join(', ')}; original history unchanged. Resume for fresh supplemental Alpha review.`);
      break;
    }
    const freshStatementRun = isFreshStatementRun(repo, run, stateDir);
    let pages;
    if (pairsArg === 'next') {
      const maxPairs = Number(opt('max-pairs', String(MAX_RUN_PAIRS)));
      if (maxPairs > MAX_RUN_PAIRS) die(`plan --pairs next: --max-pairs cannot exceed the pipeline ceiling of ${MAX_RUN_PAIRS}`);
      const next = nextBuildableSet(repo, { maxPairs });
      pages = next.pages.map((p: any) => p.id);
      if (!pages.length) die('nothing buildable');
      console.log(`using all-category >95%-published next-run selection (${pages.length} pair(s))\n`);
    } else if (pairsArg === 'wave1' || !pairsArg) {
      const cats = opt('categories');
      const { waves: w } = waves(repo, { categories: cats ? cats.split(',') : null });
      if (!w.length) die('nothing buildable');
      pages = w[0].map((p: any) => p.id);
      console.log(`no --pairs given; using wave 1 (${pages.length} pair(s))\n`);
    } else {
      pages = pairsArg.split(',').map((s: any) => s.trim()).filter(Boolean);
    }

    if (pages.length > MAX_RUN_PAIRS) die(`plan: ${pages.length} pairs exceed the pipeline ceiling of ${MAX_RUN_PAIRS}`);

    // REFUSE A PAIR SET THAT CANNOT BE BUILT, before a single agent starts.
    // This is the same >95%-already-published predicate `drift-review-check`
    // enforces at stage 1; running it here turns a three-hour discovery into a
    // two-second one. `--allow-unbuildable` exists so a deliberate experiment
    // is possible, and says on the record that it was deliberate.
    {
      const bad = unsatisfiableEdges(repo, pages, {
        allowInRunDependencies: has('allow-in-run-dependencies'),
      });
      if (bad.length && !has('allow-unbuildable')) {
        const shown = bad.slice(0, 12).map((b: any) => (b.requires
          ? `  ${b.page}\n      requires ${b.requires} — ${b.why}`
          : `  ${b.page} — ${b.why}`)).join('\n');
        die(`plan: ${bad.length} unpublished same-category dependency finding(s) on below-threshold pages.\n${shown}`
          + (bad.length > 12 ? `\n  … and ${bad.length - 12} more` : '')
          + '\n\nEach A and B page is buildable only when strictly more than 95% of its same-category'
          + '\ndependencies are already PUBLISHED. Partner and cross-category edges are excluded.'
          + '\nPublication state is the `status:` line in the file, never the git log —'
          + '\na predecessor run is commonly published on disk hours before it is committed.'
          + '\n\nRun `autopilot frontier --next`, or publish more predecessors first.'
          + '\nPass --allow-in-run-dependencies only when every missing prerequisite is an earlier pair'
          + '\nin this exact run, or --allow-unbuildable to deliberately own a stage-1 stop.');
      }
    }

    // Step 3 has one auditor/author per A/B pair. A one-pair batch makes the
    // required ascending item-level order achievable across its whole batch.
    const cap = Number(opt('cap', '1'));
    if (cap !== 1) die('plan: --cap must be 1 so each batch can be audited and authored in dependency-level order');
    const groups = packBatches(repo, pages, { cap });
    // Validate the exact proposed A/B frontier before writing any run artifacts.
    const spec = JSON.parse(readFileSync(join(repo, 'research/plan-spec.json'), 'utf8'));
    const selectedPages = pages.flatMap((id: string) => {
      const matches = spec.pages.filter((page: any) => page.id === id);
      if (matches.length !== 1) die(`plan: A page ${id} must occur exactly once`);
      return [id, matches[0].companion ?? `${id}-examples`];
    });
    const preflightDir = mkdtempSync(join(tmpdir(), 'physics-plan-preflight-'));
    let preflightFailure: string | null = null;
    try {
      const pagesFile = join(preflightDir, 'pages.json');
      writeFileSync(pagesFile, JSON.stringify(selectedPages));
      const check = spawnSync('node', ['tools/physics-support/physics-check.mjs', '--plan', 'research/plan-spec.json', '--pages-file', pagesFile], { cwd: repo, encoding: 'utf8', env: { ...process.env, PHYSICS_REPO: repo } });
      if (check.status !== 0) preflightFailure = check.stderr || check.stdout || 'physics plan validation failed';
    } finally { rmSync(preflightDir, { recursive: true, force: true }); }
    if (preflightFailure) die(preflightFailure);
    // Preserve the selected policy even if a later planning writer fails.
    if (freshStatementRun) writeStatementPolicy(repo, run, 'physics');
    const written = writeManifests(repo, run, groups, { force: has('force') });
    writeBatchDependencyLevels(repo, run);
    console.log(`step 0 for ${run}: ${pages.length} A/B pair(s) -> ${groups.length} batch(es), cap ${cap}\n`);
    for (const wr of written) console.log(`  batch ${wr.batch}: ${wr.pages.join(', ')}`);

    writeDriftArtifacts(run, pages, has('allow-in-run-dependencies'));

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
    // over a planning defect this line was in a position to name immediately.
    {
      const { spawnSync } = await import('node:child_process');
      const ledgerArgs = ['tools/physics-support/manifest-integrity.mjs', '--run', run, '--write-ledger'];
      if (has('force')) ledgerArgs.push('--force');
      if (has('allow-in-run-dependencies')) ledgerArgs.push('--allow-in-run-dependencies');
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
      const taskArgs = ['tools/physics-support/run-tasks.mjs', '--run', run];
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
    const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
    const owedA = (ledger.pages ?? [])
      .filter((p: any) => p.kind === 'A').map((p: any) => p.id);
    if (!owedA.length) die(`refresh-tasks: ${ledgerPath} owes no A pages`);
    writeDriftArtifacts(run, owedA, ledger.allow_in_run_dependencies === true);
    // The stage task files are generated too, from briefs/tasks/, so a template
    // defect found mid-run is fixed in the template and re-rendered here — the
    // whole point of this command. `--force` also re-renders the per-batch Beta
    // files, which are otherwise left alone in case a person enriched one.
    {
      const { spawnSync } = await import('node:child_process');
      const taskArgs = ['tools/physics-support/run-tasks.mjs', '--run', run];
      if (has('force')) taskArgs.push('--force');
      const r = spawnSync('node', taskArgs, { cwd: repo, encoding: 'utf8' });
      process.stdout.write((r.stdout ?? '').replace(/^/gm, '  '));
      process.stderr.write((r.stderr ?? '').replace(/^/gm, '  '));
      if (r.status !== 0) die(`refresh-tasks: rendering the task files failed (exit ${r.status})`);
    }
    break;
  }

  case 'start': {
    assertNoAppendTransaction(loadConfig().stateDir);
    assertNoPrerequisiteTransaction(loadConfig().stateDir);
    const run = opt('run');
    // Validate BEFORE detaching. A spec defect found by the detached child is a
    // blocker in a log nobody is reading yet; found here it is a message on the
    // terminal of the person who just typed `start`.
    const probe = await buildExecutor(run);
    {
      if (probe.specProblems.length) {
        console.error('autopilot: refusing to start — the stage table cannot fail:\n');
        console.error(formatProblems(probe.specProblems));
        console.error('\nA stage with no gate reports success unconditionally. Add gates, or declare');
        console.error('`gatesWaived: "<why>"` — except on the terminal stage, which may not waive.');
        process.exit(2);
      }
    }
    // Doctor is part of START, not an optional operator memory test. Every
    // problem it names is deterministic and cheaper to discover before detach
    // than after a stage has begun spending model calls.
    {
      const checked = await doctor({
        repo,
        run: probe.config.run,
        stagesPath: resolve(probe.config.stages),
        config: probe.config,
      });
      if (checked.problems.length) {
        console.error('autopilot: refusing to start — preflight found deterministic blocker(s):\n');
        for (const problem of checked.problems) console.error(`  - ${problem}`);
        console.error(`\nRun \`autopilot doctor --run ${probe.config.run}\` for the full report.`);
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
      // the child ran against <repo>/.physics-autopilot, and every later pause/stop
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
      // started with (by `tools/physics-support/tsx-run.mjs`), and is empty on a node that does
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
    let releaseController: () => void;
    try { releaseController = acquireControllerLock(stateDir, probe.config.run); }
    catch (error: any) { die(`autopilot: refusing duplicate start — ${error?.message ?? error}`, 1); }
    process.once('exit', releaseController);
    try {
      const ex = await buildExecutor(run);
      const cfg = loadConfig();
      ex.reporter.notify('start', `autopilot driving ${ex.config.run} from ${repo}`);
      const outcome = await ex.run({ pollMs: (Number(opt('poll', cfg.pollSec)) || 30) * 1000 });
      ex.reporter.notify('finish', `run loop exited: ${outcome}`);
      process.exitCode = outcome === 'blocked' ? 1 : 0;
    } finally {
      process.removeListener('exit', releaseController);
      releaseController();
    }
    break;
  }

  case 'doctor': {
    const cfg = loadConfig();
    const run = opt('run') ?? cfg.run;
    if (!run) die('--run is required (or set "run" in physics-autopilot.config.json)');
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
    // Only the shared status-lock holder reaches this computation. Briefly
    // cached or contended reads are explicitly dated by autopilot-status.mjs;
    // they cannot certify readiness or drive a transition.
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
    if (existsSync(p)) {
      console.error('(status not recomputed; showing the last controller report)');
      console.log(readFileSync(p, 'utf8')); break;
    }
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

  case 'refresh': {
    const refreshRun = opt('run') ?? die('--run is required');
    const stage = opt('stage') ?? die('--stage is required');
    const unit = opt('unit') ?? die('--unit is required');
    const reason = opt('reason') ?? die('--reason is required');
    if (!String(reason).trim()) die('--reason must be nonempty');
    const recorded = new State(statePath(stateDir)).data.run;
    if (recorded !== refreshRun) die('refresh requires the exact existing run state directory');
    writeCommand(stateDir, 'refresh', { run: refreshRun, stage, unit, reason, requestId: randomUUID() });
    console.log(`native refresh requested for ${stage}/${unit}; the controller validates it at the next tick`);
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
