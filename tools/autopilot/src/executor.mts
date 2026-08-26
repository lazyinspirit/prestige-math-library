// The engine. This is the part that used to be a person, and then briefly was
// an LLM, and is now a loop.
//
// THE SHAPE OF THE WORK. A stage owes a set of units. Some are covered by
// successful dispatches; the rest are pending. The engine dispatches the
// pending ones up to a concurrency cap, waits, and when every unit is covered
// it runs the stage's gates and moves on. That is the entire control plane, and
// none of it needs a model: coverage is a set difference, and "is this stage
// finished" is a predicate over files on disk.
//
// WHY NOT A MODEL. The previous design detected a transition and then paid an
// agent to decide what to dispatch next. The agent read a stage table, followed
// its instruction, and fired a command — a deterministic function, priced per
// token and sampled. Worse, it could hallucinate a step, dispatch twice, or
// summarise instead of acting, and the last of those is the failure that
// actually happened, repeatedly. Determinism here is not an optimisation; it is
// the correctness property.
//
// WHERE A MODEL STILL EARNS ITS PLACE. Two spots, both genuinely undecidable
// from disk. A lane that died twice may be a transient or a real blocker, and
// telling those apart means reading the log. A stage whose gates fail may need
// a repair dispatch whose content depends on what failed. Both are `escalate`
// hooks, both are optional, and the default for both is to stop and record —
// never to guess.
//
// OVERLAP GROUPS, AND THE ONE THING THEY MAY NOT RELAX. Strict serial execution
// makes the slowest unit of a stage the start time of every unit of the next
// one: on a seven-batch level the slowest author (6h) gated all five readers
// (4h), for hours of nothing happening. A maximal run of consecutive stages
// sharing a `pipeline` name is therefore run with PER-UNIT progression — batch 3
// may enter its reader while batch 5 is still authoring.
//
// What per-unit progression is allowed to depend on is deliberately tiny: that
// unit's own coverage, and that unit's own declared artifact. NO GATE IS EVER
// EVALUATED PER UNIT. Every member stage's gates run at the group exit,
// together, once, with the group fully drained — the level join. This is not
// timidity; a gate that quietly becomes per-batch when it needed level scope
// reports success over a fraction of what it was asked to check, which is the
// vacuous-gate class this engine already exists to prevent, wearing a green
// tick. The cost is that a per-batch defect a level-wide gate would have found
// is found one stage later than it used to be; the level join still finds it,
// and it still blocks before the next barrier.

import { existsSync, writeFileSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

import { covered, pending, stageComplete } from './coverage.mts';
import { identityPlaceholders } from './doctor.mts';
import type { Config, Ctx, Stage, Plan, StageStatus, Snapshot, Adapter, Unit, RunningEntry, Gate, GateResult } from './types.mts';

/** Default clock for an outage-refunded repair round. Long enough that a
 *  session-limit window is not hammered, short enough that a lane back at
 *  half past recovers the run before anyone notices it paused. */
const OUTAGE_BACKOFF_MS = 20 * 60_000;
import { runGates } from './gates.mts';
import { takeCommand } from './control.mts';
import { humanDuration } from './reporter.mts';
import { assertCognitive } from './roles.mts';
import { validateStages, formatProblems } from './spec.mts';
import type { SpecProblem } from './spec.mts';
import { makeExecAdapter } from './adapters/exec.mts';

const sleep = (ms: number, signal?: AbortSignal) => new Promise<void>((resolve) => {
  const t = setTimeout(resolve, ms);
  signal?.addEventListener('abort', () => { clearTimeout(t); resolve(); }, { once: true });
});

/** Resolve a stage's result matcher for this run. Migration compatibility is
 * run-specific: a legacy result may cover an introduced stage only when the
 * run's hash-bound cutover receipt validates. */
const stagePattern = (stage: Stage, ctx: Ctx): RegExp => {
  const pattern = typeof stage.pattern === 'function' ? stage.pattern(ctx) : stage.pattern;
  if (!(pattern instanceof RegExp)) throw new TypeError(`${stage.id}: pattern(ctx) did not return a RegExp`);
  return pattern;
};

/** A durable gate pass licenses exactly the ordered prefix that produced it.
 * Future stages may be edited freely, but changing that prefix would make the
 * engine skip newly inserted work. Such a change needs an explicit migration. */
export function completedPrefixProblem(
  oldStages: Array<Pick<Stage, 'id'>>,
  newStages: Array<Pick<Stage, 'id'>>,
  stageState: Record<string, { gatesPassedAt?: string }> = {},
): string | null {
  const oldIds = oldStages.map((stage) => stage.id);
  const newIds = newStages.map((stage) => stage.id);
  for (const completedId of oldIds.filter((id) => stageState[id]?.gatesPassedAt)) {
    const oldIndex = oldIds.indexOf(completedId);
    const newIndex = newIds.indexOf(completedId);
    const oldPrefix = oldIds.slice(0, oldIndex + 1);
    const newPrefix = newIndex < 0 ? [] : newIds.slice(0, newIndex + 1);
    if (oldPrefix.length !== newPrefix.length || oldPrefix.some((id, index) => id !== newPrefix[index])) {
      return completedId;
    }
  }
  return null;
}

export class Executor {
  config: Config;
  stages: Stage[];
  adapter: Adapter;
  state: any;
  reporter: any;
  clock: { now(): number };
  signal?: AbortSignal;
  inflight: Map<string, { promise: Promise<unknown>; meta: any; startedAt: number }>;
  stopped: boolean;
  blockedTicks?: number;
  specProblems: SpecProblem[];
  stateVersion: number;
  lastBattery: Map<string, { version: number; ok: boolean; dirFp: string }>;
  stagesPath: string | null;
  stagesMtimeMs: number;
  _adoptStage?: string;
  _announcedAdoption?: Set<string>;
  _barrierFor?: string;
  /** Earliest wall-clock at which the next dispatch may SPAWN. See `start`. */
  nextSpawnAt: number;

  constructor({ config, stages, adapter, state, reporter, clock = Date, signal }:
    { config: Config; stages: Stage[]; adapter: Adapter; state: any; reporter: any; clock?: { now(): number }; signal?: AbortSignal }) {
    this.config = config;
    this.stages = stages;
    this.adapter = adapter;
    this.state = state;
    this.reporter = reporter;
    this.clock = clock;
    this.signal = signal;
    /** dispatchKey -> { promise, meta, startedAt } */
    this.inflight = new Map();
    this.stopped = false;
    // No dispatch has spawned yet, so the first one owes no wait.
    this.nextSpawnAt = 0;
    // EVENT-DRIVEN RE-VERIFICATION. A blocked stage's battery used to re-run
    // every tick against unchanged inputs: frontier-15 ran the 7-judge battery
    // 29 times during one account outage, re-probing archive.org each pass.
    // `stateVersion` counts state-changing events (a dispatch ends, a repair
    // round runs, a control command lands, adoption reconciles); a battery
    // that failed re-runs only when the version moves, the dispatch dir
    // changes, or a backoff clock expires. A hand edit is made explicit with
    // `autopilot retry`, which re-arms the battery; a wall-clock retry over
    // byte-identical inputs only repeats deterministic work.
    this.stateVersion = 0;
    this.lastBattery = new Map();
    // Hot-reload bookkeeping: the stage table's source path and its mtime at
    // load. `maybeReloadStages` swaps in an edited table at the next tick —
    // loading a fix used to cost a stop, a full battery drain and a restart,
    // twice in one day on frontier-15.
    this.stagesPath = (config as any).stagesPath ?? null;
    try { this.stagesMtimeMs = this.stagesPath ? statSync(this.stagesPath).mtimeMs : 0; } catch { this.stagesMtimeMs = 0; }
    // Validate the spec here rather than throwing: a bad stage table found by a
    // running engine should be a visible blocker, not a crash the watchdog
    // restarts into a loop at sixty-second intervals. `bin/autopilot` checks the
    // same thing before starting, so this is the belt to that braces.
    this.specProblems = validateStages(this.stages, this.ctx());
  }

  /** Something that can change a gate's verdict happened. */
  bumpState(): void { this.stateVersion += 1; }

  /** Cheap fingerprint of the dispatch dir, so a result file written by an
   *  ADOPTED external process (which ends no engine child and bumps nothing)
   *  still dirties the battery skip. Count plus newest mtime; any error is a
   *  changing fingerprint, which fails safe into re-running the battery. */
  dispatchDirFingerprint(): string {
    try {
      const dir = this.config.dispatchDir;
      const files = readdirSync(dir).filter((f: string) => f.endsWith('.result.json'));
      let newest = 0;
      for (const f of files) { const m = statSync(join(dir, f)).mtimeMs; if (m > newest) newest = m; }
      return `${files.length}:${newest}`;
    } catch { return `err:${Date.now()}`; }
  }

  /** Stamp `endedAt` on dispatch records whose work finished OUTSIDE this
   *  process — adopted after a restart, or recorded by a prior engine that
   *  died mid-flight. Their result files are on disk; the record staying open
   *  forever made every in-flight count a lie until someone checked disk by
   *  hand (frontier-15 carried three such records all night). */
  reconcileAdopted(): void {
    const dispatches = this.state.data.dispatches ?? {};
    let stamped = 0;
    for (const [key, rec] of Object.entries(dispatches) as Array<[string, any]>) {
      if (rec.endedAt || this.inflight.has(key)) continue;
      const file = join(this.config.dispatchDir, `${rec.role}-${rec.label}.result.json`);
      if (!existsSync(file)) continue;
      try {
        const result = JSON.parse(readFileSync(file, 'utf8'));
        rec.endedAt = typeof result.ended_at === 'string' ? result.ended_at : new Date(statSync(file).mtimeMs).toISOString();
        rec.lastExitOk = result.ok === true || result.exit_code === 0;
        stamped += 1;
      } catch { /* an unreadable result file is not this record's to guess at */ }
    }
    if (stamped) {
      this.state.save();
      this.bumpState();
      this.reporter.notify('adopted-reconciled', `${stamped} dispatch record(s) stamped from result files on disk`);
    }
  }

  /** Swap in an edited stage table at a tick boundary. A table that cannot
   *  fail validation is never loaded — the running table stays, the refusal is
   *  notified, and the edit can be fixed and saved again. Tools under
   *  `tools/*.mjs` always loaded fresh per invocation; the stage table was the
   *  one hot file that demanded a restart. */
  async maybeReloadStages(): Promise<void> {
    if (!this.stagesPath) return;
    let mtime = 0;
    try { mtime = statSync(this.stagesPath).mtimeMs; } catch { return; }
    if (mtime <= this.stagesMtimeMs) return;
    this.stagesMtimeMs = mtime;
    try {
      const mod = await import(`${pathToFileURL(this.stagesPath).href}?v=${mtime}`);
      const problems = validateStages(mod.stages, this.ctx());
      if (problems.length) {
        this.reporter.notify('stages-reload-refused',
          `edited stage table failed validation and was NOT loaded:\n${formatProblems(problems)}`);
        return;
      }
      // A durable gate pass is evidence about the stage order that produced it.
      // Hot reload may edit future work, but it may not insert, remove or move a
      // stage before anything already gate-complete: currentStage() would skip
      // the completed successor without rerunning the new predecessor. Compare
      // every completed prefix to the table currently driving this process.
      const changedPrefix = completedPrefixProblem(this.stages, mod.stages, this.state.data.stages);
      if (changedPrefix) {
        this.reporter.notify('stages-reload-refused',
          `edited stage table changes the immutable completed prefix ending at ${changedPrefix}; `
          + 'record an explicit migration instead of making durable gate evidence skip new work');
        return;
      }
      this.stages = mod.stages;
      this.specProblems = [];
      this.bumpState();
      this.reporter.notify('stages-reloaded', `stage table reloaded from ${this.stagesPath}`);
    } catch (err: any) {
      this.reporter.notify('stages-reload-refused', `edited stage table failed to import and was NOT loaded — ${err?.message ?? err}`);
    }
  }

  ctx(): Ctx {
    return {
      run: this.config.run,
      repo: this.config.repo,
      dispatchDir: this.config.dispatchDir,
      coversMap: this.config.coversMap ?? {},
      config: this.config,
    };
  }

  /** The first stage whose completion predicate is false. Everything before it
   *  is done; everything after has not started. Recomputed from disk on every
   *  tick, so an artifact appearing out of band (a hand-run dispatch, a manual
   *  repair) is picked up without restarting the engine. */
  currentStage(): { stage: Stage | null; status: StageStatus | null } {
    const ctx = this.ctx();
    for (const s of this.stages) {
      const st = this.stageStatus(s, ctx);
      if (!st.done) return { stage: s, status: st };
    }
    return { stage: null, status: null };
  }

  /**
   * A stage is finished when its units are covered AND its gates have passed.
   *
   * Both halves are load-bearing and the second was missing. With completion
   * defined as coverage alone, the moment the last unit landed the stage fell
   * out of `currentStage()` and the engine advanced — so the gate block, which
   * only runs for the CURRENT stage, was unreachable. Every gate in the
   * pipeline silently never ran, and the run looked perfect.
   *
   * Recording `gatesPassedAt` in state rather than re-running gates each tick
   * also makes the pass durable across a restart: gates are expensive, and
   * re-running a repo-wide sweep on every poll would dominate the run.
   */
  stageStatus(stage: Stage, ctx: Ctx = this.ctx()): StageStatus {
    if (this.state.data.stages[stage.id]?.skipped) {
      return { done: true, unitsDone: true, gatesPassed: true, why: 'skipped by owner', missing: [], mode: 'skip' };
    }
    const owed = (stage.units ? stage.units(ctx) : []).map(String);
    const units = stageComplete(ctx.dispatchDir, stagePattern(stage, ctx), owed, {
      coversMap: ctx.coversMap,
      fallbackCount: stage.fallbackCount ?? owed.length,
    });

    // A RESULT IS NOT AN ARTIFACT. `ok:true` says the process exited zero; it
    // says nothing about whether the work landed where it was supposed to.
    //
    // frontier-14: reader-7 audited its batch correctly, exited zero, and wrote
    // its report over reader-1's — because a copied task file carried the wrong
    // output path. Coverage saw seven successful results and cleared the stage,
    // with one report destroyed and another missing. The same shape as an
    // earlier run's seven refuters that produced prompt files and no results.
    //
    // A stage may name the file each unit owes. If it does, the file must exist.
    if (stage.artifacts) {
      const absent = owed.filter((u: any) => {
        const paths = [stage.artifacts(ctx, u)].flat().filter(Boolean);
        return !paths.every((f: any) => existsSync(join(ctx.repo, f)));
      });
      if (absent.length) {
        return {
          ...units,
          unitsDone: false,
          gatesPassed: false,
          done: false,
          missing: absent,
          why: `${units.why}; artifact missing for ${absent.join(', ')}`,
        };
      }
    }
    // A STAGE WITH NO GATE CANNOT FAIL.
    //
    // This line used to read `Boolean(stage.gates) && stage.gates(ctx).length > 0`,
    // so a stage whose gate list came back empty — declared `() => []`, or built
    // from a batch list that happened to be empty — was recorded as "gates
    // passed". `10-report` declared exactly that, which is why frontier-14
    // finished with its receipt gate red, two unrepaired fatal defects and
    // sixteen unread rejections: the terminal stage had no way to say no.
    //
    // Now only an explicit `gatesWaived` reason exempts a stage. An empty list
    // from a stage that declares gates is a vacuous gate, and is treated as NOT
    // passed — the gate block below turns it into a blocker naming the stage.
    const hasGates = Boolean(stage.gates) && !stage.gatesWaived;
    const gatesPassed = !hasGates || Boolean(this.state.data.stages[stage.id]?.gatesPassedAt);
    return {
      ...units,
      unitsDone: units.done,
      gatesPassed,
      done: units.done && gatesPassed,
      why: units.done && !gatesPassed ? `${units.why}; gates not yet run` : units.why,
    };
  }

  /**
   * The overlap group `stage` belongs to: the maximal run of CONSECUTIVE stages
   * carrying the same `pipeline` name, or `[stage]` for a stage with none.
   *
   * Maximal-and-consecutive is the whole definition, and it is why a pipeline
   * name reused non-contiguously silently means two groups rather than one —
   * `validateStages` refuses that outright rather than letting a table say
   * something it does not mean.
   */
  pipelineGroup(stage: Stage): Stage[] {
    if (!stage.pipeline) return [stage];
    const i = this.stages.indexOf(stage);
    if (i < 0) return [stage];
    let a = i; let b = i;
    while (a > 0 && this.stages[a - 1].pipeline === stage.pipeline) a -= 1;
    while (b < this.stages.length - 1 && this.stages[b + 1].pipeline === stage.pipeline) b += 1;
    return this.stages.slice(a, b + 1);
  }

  /**
   * The units of `stage` that are FINISHED — covered by a successful dispatch
   * and, where the stage names one, with their artifact on disk.
   *
   * This is `stageStatus` asked one unit at a time, and it carries the same
   * "a result is not an artifact" rule: reader-7 exited zero having written its
   * report over reader-1's, so coverage alone would let the next stage start on
   * a deliverable that does not exist.
   */
  unitsComplete(stage: Stage, ctx: Ctx = this.ctx()): Set<Unit> {
    const owed = (stage.units ? stage.units(ctx) : []).map(String);
    if (this.state.data.stages[stage.id]?.skipped) return new Set(owed);
    const cov = covered(ctx.dispatchDir, stagePattern(stage, ctx), ctx.coversMap);
    // A stage running in the legacy COUNT mode declares no coverage at all, so
    // there is no per-unit answer to give. Fall back to the only thing that mode
    // supports — the stage as a whole — rather than inventing a per-unit one.
    if (!cov.size) {
      const st = this.stageStatus(stage, ctx);
      if (st.mode === 'count') return new Set(st.unitsDone ? owed : []);
    }
    const out = new Set<Unit>();
    for (const u of owed) {
      if (!cov.has(u)) continue;
      if (stage.artifacts) {
        const paths = [stage.artifacts(ctx, u)].flat().filter(Boolean);
        if (!paths.every((f: any) => existsSync(join(ctx.repo, f)))) continue;
      }
      out.add(u);
    }
    return out;
  }

  /** Which of `candidates` may be dispatched at `stage`, given its predecessor
   *  inside the same overlap group. A unit whose stage has no predecessor in the
   *  group is ready by definition; the group's first stage is never held back.
   *
   *  `cohort` is what keeps a group Alpha honest: its one dispatch declares
   *  coverage of three batches, so all three must be finished at the previous
   *  stage or the coverage record would be a claim about work nobody did. */
  readyUnits(stage: Stage, prev: Stage | null, ctx: Ctx, candidates: Unit[]): Unit[] {
    if (!prev) return candidates;
    const done = this.unitsComplete(prev, ctx);
    const owedPrev = new Set((prev.units ? prev.units(ctx) : []).map(String));
    return candidates.filter((u: Unit) => {
      const cohort = (stage.cohort ? stage.cohort(ctx, u) : [u]).map(String);
      // A unit the predecessor does not owe cannot be waited for; only the ones
      // it owes are evidence either way.
      return cohort.every((c: string) => !owedPrev.has(c) || done.has(c));
    });
  }

  snapshot(): Snapshot {
    const ctx = this.ctx();
    const { stage } = this.currentStage();
    // Every unfinished member of the active overlap group is "current": with
    // per-unit progression three of them can genuinely be running at once, and
    // a status page naming only the first is the same lie as reporting nothing
    // in flight. For a stage with no `pipeline` the group is itself, so this is
    // the previous behaviour exactly.
    const activeIds = new Set(stage ? this.pipelineGroup(stage).map((s: any) => s.id) : []);
    const stages = this.stages.map((s: any) => {
      const st = this.stageStatus(s, ctx);
      return { id: s.id, label: s.label, done: st.done, why: st.why, current: activeIds.has(s.id) && !st.done };
    });
    const running: RunningEntry[] = [...this.inflight.values()].map((d: any) => ({
      label: d.meta.label,
      covers: d.meta.covers,
      attempt: d.meta.attempt,
      elapsed: humanDuration(this.clock.now() - d.startedAt),
    }));
    // A `status` invocation is a DIFFERENT PROCESS from the engine and has an
    // empty inflight map, so it reported "nothing running" while three agents
    // were working. Reading that at 3am, the honest conclusion is that the run
    // is stuck. Ask the operating system instead: live dispatches for this run
    // are visible whether or not this process started them.
    if (!running.length) {
      const live = this.liveDispatchLabels();
      for (const l of live) running.push({ label: l.label, covers: l.covers, attempt: 1, elapsed: '', external: true });
    }
    return {
      run: this.config.run,
      done: !stage,
      paused: this.state.paused,
      stage,
      stages,
      running,
      blockers: this.state.data.blockers,
      startedAt: this.state.data.startedAt,
      elapsed: this.state.data.startedAt ? humanDuration(this.clock.now() - Date.parse(this.state.data.startedAt)) : '',
      controlPath: `${this.config.stateDir}/control.json`,
    };
  }

  /** First existing candidate path, or the last candidate when none exists —
   *  so the caller's missing-file check names one concrete file. A stage may
   *  offer several candidates for a brief or task (specific first, generic
   *  fallback last); resolution lives HERE, on the one path every dispatch
   *  crosses, because it used to live only in the plan-dispatch loop and the
   *  repair hooks call start() directly: 3-recheck's scaffold-fix lanes
   *  reached dispatch.mjs with a comma-joined candidate ARRAY as --task and
   *  died on its usage check — twelve dispatches across three repair rounds,
   *  then repair-exhausted, on frontier-15's first live repair firing. */
  resolveInput(v: string | string[] | undefined, ctx: Ctx = this.ctx()): string | undefined {
    if (!v) return v as undefined;
    const cands = Array.isArray(v) ? v : [v];
    return cands.find((c: any) => existsSync(join(ctx.repo, c))) ?? cands[cands.length - 1];
  }

  /** Start one dispatch. Never awaited inline — the engine keeps ticking while
   *  agents run, which is what allows a slow lane and a fast lane to overlap. */
  start(stage: Stage, plan: Plan): void {
    const key = `${stage.id}:${plan.label}`;
    if (this.inflight.has(key)) return;
    // Candidate resolution + the preflight, for EVERY caller. A hook-started
    // dispatch with a missing input becomes a blocker here, not two spent
    // agent attempts discovering what existsSync answers instantly.
    plan.brief = this.resolveInput(plan.brief);
    plan.task = this.resolveInput(plan.task);
    const supplemental = [...(plan.images ?? []), plan.outputSchema].filter(Boolean) as string[];
    const absent = [plan.brief, plan.task, ...supplemental]
      .filter((f: any) => f && !existsSync(join(this.config.repo, f)));
    if (absent.length) {
      const msg = `stage ${stage.id}: missing input file(s) — ${plan.label} needs ${absent.join(', ')}`;
      if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
        this.state.addBlocker(stage.id, msg);
        this.reporter.notify('blocked', msg, { stage: stage.id, label: plan.label, missing: absent });
      }
      return;
    }
    // Identity placeholders fail here, as a blocker naming the file — not at
    // dispatch.mjs, three burned attempts later. The doctor scans only the
    // files plan() names, so a hook-referenced task file is invisible to it:
    // the class bit twice in one day, first in a brief's grammar example,
    // then in a repair task written hours after the doctor check landed.
    // This is the one chokepoint every dispatch path crosses.
    for (const f of [plan.brief, plan.task]) {
      if (!f) continue;
      const bad = identityPlaceholders(readFileSync(join(this.config.repo, f), 'utf8'));
      if (bad.length) {
        const msg = `stage ${stage.id}: ${f} contains ${bad.join(', ')} — dispatch.mjs refuses the prompt and the engine never passes --var n/k; fix the file`;
        if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
          this.state.addBlocker(stage.id, msg);
          this.reporter.notify('blocked', msg, { stage: stage.id, label: plan.label, file: f });
        }
        return;
      }
    }
    // Owner rule, 2026-08-16: a model is dispatched for cognitive work only.
    // Enforced at the point of dispatch rather than in review, because handing
    // a model a mechanical task does not error — it returns a plausible answer
    // and is wrong at a rate nobody measures.
    assertCognitive(plan.job, { stage: stage.id, label: plan.label });
    // The attempt number is computed in ONE place, by recordDispatchStart, and
    // read back from the record it wrote. Computing it here as well produced a
    // second copy of the same quantity that the owner's `retry` command could
    // desynchronise (`attempt: 2, attempts: 0`).
    const meta: any = { stage: stage.id, role: plan.role, label: plan.label, covers: plan.covers ?? [] };
    // Read the number back out of the record and carry it on `meta`, which is
    // what the in-flight status line renders. One computation, three readers.
    const attempt = this.state.recordDispatchStart(key, meta).attempt;
    meta.attempt = attempt;
    this.reporter.notify('dispatch', `${plan.role}/${plan.label}${plan.covers?.length ? ` covers ${plan.covers.join(',')}` : ''}${attempt > 1 ? ` (attempt ${attempt})` : ''}`, meta);

    // The engine DERIVES the unit and the output path and injects them; the
    // task file never transcribes either.
    //
    // dispatch.mjs has always substituted `--var k=v` into briefs and tasks
    // (`prompt.replaceAll('<k>', v)`). Not using it is why a task file copied
    // from batch 1 kept batch 1's OUTPUT PATH — reader-7 audited batch 7
    // correctly and wrote its report over reader-1's, destroying eleven fatal
    // findings. A path a template carries is a path that can be stale; a path
    // the engine computes cannot be.
    const unit = (plan.covers ?? []).length === 1 ? String(plan.covers[0]) : '';
    const artifactPaths = stage.artifacts && unit ? [stage.artifacts(this.ctx(), unit)].flat().filter(Boolean) : [];
    const vars = {
      role: plan.role, label: plan.label, run: this.config.run,
      brief: plan.brief, task: plan.task,
      covers: (plan.covers ?? []).join(','),
      timeout: plan.timeout ?? this.config.defaultTimeoutSec ?? 14400,
      unit,
      artifact: artifactPaths[0] ?? '',
      images: (plan.images ?? []).join(','),
      outputSchema: plan.outputSchema ?? '',
      resultArtifact: plan.resultArtifact ?? '',
      sessionHome: plan.sessionHome ?? '',
      resumeSession: plan.resumeSession ?? '',
    };
    // A stage may override the command entirely. Not every unit of work is an
    // agent: the judge sweep is a tool run, and forcing it through the agent
    // dispatcher would have produced a dispatch for a role that does not exist.
    // The override goes through the same adapter WITH a logger, so the rendered
    // command line lands in events.jsonl — a tool lane that failed used to
    // leave no diagnostic artifact of any kind.
    const adapter = plan.argv
      ? makeExecAdapter({ argv: plan.argv, cwd: this.config.repo,
        logger: (m: string) => this.reporter.event('exec', { label: plan.label, m }) })
      : this.adapter;
    // STAGGER THE SPAWN (owner, 2026-08-24). A stage fans out to its cap in one
    // millisecond — frontier-18's step 3 started four Alphas at .343, .345, .348
    // and .423 — so every agent boots, reads the repo and opens its first API
    // connection at the same instant. At the caps this run uses that is twelve
    // Betas at once, and a simultaneous boot is the shape that produces a 429
    // stampede and a lane of null verdicts.
    //
    // IT LIVES HERE, NOT IN THE FAN-OUT LOOP, for two reasons. The repair hooks
    // (`dispatchSourceScouts`, `dispatchDriftRereview`) call `start` directly
    // and would otherwise keep stampeding. And the delay must not sit between
    // the `inflight` registration and the cap arithmetic that reads it: the
    // registration below is synchronous and already done, so a staggered spawn
    // still counts against the cap from the moment it is decided. Delaying the
    // loop instead would leave the engine free to over-dispatch in the gap.
    //
    // The wait is per-engine, not per-stage: two overlapping pipeline stages
    // share one boot budget, because the API does not care which stage a
    // process belongs to.
    // 3s by default (owner, 2026-08-24), so a production path that forgets to
    // configure it is still paced. Test harnesses set `dispatchStaggerMs: 0`
    // explicitly: they drive stub adapters where there is nothing to pace, and
    // real sleeps there buy nothing but a slower suite.
    //
    // 2s -> 3s ON EVIDENCE, not taste. frontier-18's step 5 dispatched all ten
    // authors inside one millisecond — 05:29:51.794, .802, .805 — and every one
    // came back `API Error: 529 Overloaded`. Two full rounds of ten Opus[1m]
    // lanes were lost to a simultaneous boot before a single token of authoring
    // was written. The owner's standing instruction sets the separation at
    // three seconds, and a stampede is the one case that had already been
    // pre-authorised precisely because waiting to ask costs another round.
    const staggerMs = this.config.dispatchStaggerMs ?? 3000;
    const waitMs = Math.max(0, this.nextSpawnAt - this.clock.now());
    this.nextSpawnAt = this.clock.now() + waitMs + staggerMs;
    if (waitMs > 0) this.reporter.event('spawn-stagger', { label: plan.label, waitMs });

    // The adapter enforces the timeout; `plan.timeout` used to be only a
    // template variable, silently inert for every tool lane. The margin lets a
    // dispatcher that enforces the same budget on its agent finish its own
    // cleanup before the engine kills the group. The timeout clock starts when
    // the process does, after the stagger — an agent must not be charged for
    // time it spent queued.
    const promise = sleep(waitMs, this.signal)
      .then(() => adapter.invoke(vars, { signal: this.signal, timeoutMs: (Number(vars.timeout) + 120) * 1000 }))
      .then((r) => {
        // THE ENGINE WRITES THE RECEIPT, not the command.
        //
        // A stage whose work is a tool rather than an agent has no dispatcher to
        // write a result record, so the command used to append one with a shell
        // redirect. Two attempts at that failed: `echo` with embedded
        // JSON.stringify lost its double quotes, and `node -e` inside `sh -c`
        // broke on the tokenizer's lack of backslash-escape handling. Both
        // produced an unparseable file, so coverage never counted the stage and
        // the engine re-dispatched the sweep 33 times.
        //
        // Quoting JSON through a shell is a trap with no upside. The engine
        // already knows the label, the covered units and the exit status; it can
        // write the record itself, and it cannot get the quoting wrong.
        if (r.ok && plan.writeReceipt !== false) {
          const path = join(this.config.dispatchDir, `${plan.role}-${plan.label}.result.json`);
          if (!existsSync(path)) {
            try {
              writeFileSync(path, JSON.stringify({
                role: plan.role, label: plan.label, run: this.config.run,
                covers: plan.covers ?? [], ok: true, written_by: 'autopilot',
                ended_at: new Date().toISOString(),
              }, null, 2) + '\n');
              this.reporter.event('receipt', { label: plan.label, path });
            } catch (err: any) {
              this.reporter.notify('receipt-failed', `${plan.label}: could not write a result record — ${err?.message ?? err}`);
            }
          }
        }
        this.state.recordDispatchEnd(key, r.ok);
        this.bumpState();
        // A failed tool lane's stderr was read into memory and discarded; the
        // tail rides the event so nine hours of judge sweep leave more than
        // `exit=1` behind.
        const tail = !r.ok && r.stderr ? ` :: ${String(r.stderr).slice(-400).replace(/\s+/g, ' ').trim()}` : '';
        this.reporter.notify(r.ok ? 'dispatch-ok' : 'dispatch-failed',
          `${plan.role}/${plan.label} exit=${r.code}${r.error ? ` (${r.error})` : ''}${tail}`, { key, ok: r.ok });
        return r;
      })
      .catch((err: any) => {
        this.state.recordDispatchEnd(key, false);
        this.bumpState();
        this.reporter.notify('dispatch-failed', `${plan.role}/${plan.label} threw: ${err?.message ?? err}`, { key });
        return { ok: false, code: null, error: String(err?.message ?? err) };
      })
      .finally(() => { this.inflight.delete(key); });

    this.inflight.set(key, { promise, meta, startedAt: this.clock.now() });
  }

  /** Every live dispatch for this run, with its label and covered units. */
  liveDispatchLabels(): Array<{ label: string; covers: Unit[] }> {
    const cmd = this.config.adoptCommand;
    if (cmd === false) return [];
    const out: any[] = [];
    try {
      const r = spawnSync('sh', ['-c', cmd ?? "ps -eo pid,comm,args | awk '$2==\"node\" && /dispatch/'"], { encoding: 'utf8' });
      for (const line of (r.stdout ?? '').split('\n')) {
        if (!line.includes(`--run ${this.config.run}`)) continue;
        const lm = /--label\s+([^\s]+)/.exec(line);
        const cm = /--covers\s+([^\s]+)/.exec(line);
        if (lm) out.push({ label: lm[1], covers: cm ? cm[1].split(',').filter(Boolean) : [] });
      }
    } catch { /* best effort */ }
    return out;
  }

  /** Units claimed by live dispatch processes this engine did not start.
   *
   *  Reads `--covers` off the command line of any running dispatch for this
   *  run. The scan command is configurable because `ps` output is not portable;
   *  a platform without it simply adopts nothing, which degrades to the old
   *  duplicate-risk behaviour rather than to a crash. */
  adoptedUnits(stage: Stage | null = null): Set<Unit> {
    const cmd = this.config.adoptCommand;
    if (cmd === false) return new Set();
    const out = new Set<string>();
    try {
      const r = spawnSync('sh', ['-c', cmd ?? "ps -eo pid,comm,args | awk '$2==\"node\" && /dispatch/'"], { encoding: 'utf8' });
      // Exclude our own children: they are already in `inflight`, and counting
      // them as external makes the adoption notice fire on every tick for work
      // this engine started.
      const mine = new Set([...this.inflight.values()].map((d: any) => d.meta.label));
      for (const line of (r.stdout ?? '').split('\n')) {
        if (!line.includes(`--run ${this.config.run}`)) continue;
        const lm = /--label\s+([^\s]+)/.exec(line);
        if (lm && mine.has(lm[1])) continue;
        // Belongs to this stage? The result file a dispatch will write is
        // `<role>-<label>.result.json`, which is what the stage pattern matches.
        if (stage?.pattern && lm) {
          const rm = /--role\s+([^\s]+)/.exec(line);
          const resultName = `${rm ? rm[1] : ''}-${lm[1]}.result.json`;
          if (!stagePattern(stage, this.ctx()).test(resultName)) continue;
        }
        const m = /--covers\s+([^\s]+)/.exec(line);
        if (!m) continue;
        for (const u of m[1].split(',')) if (u.trim()) out.add(u.trim());
      }
    } catch { /* adoption is best-effort; never fatal */ }
    return out;
  }

  /** Owner commands. Read, acted on, never awaited. */
  handleControl(): void {
    const cmd = takeCommand(this.config.stateDir);
    if (!cmd) return;
    if (cmd.error) { this.reporter.notify('control-error', cmd.error); return; }
    // Any control command is a state-changing event: `retry` after a hand-edit
    // is the documented way to re-arm a battery the event-driven skip would
    // otherwise hold (UNATTENDED §signals).
    this.bumpState();
    switch (cmd.command) {
      case 'pause':
        this.state.paused = true;
        this.reporter.notify('paused', 'owner paused the run; in-flight dispatches continue, nothing new starts');
        break;
      case 'resume':
        this.state.paused = false;
        this.reporter.notify('resumed', 'owner resumed the run');
        break;
      case 'stop':
        this.stopped = true;
        this.reporter.notify('stopping', 'owner stopped the run; in-flight dispatches are left to finish');
        break;
      case 'report':
        this.reporter.report(this.snapshot(), { force: true });
        break;
      case 'skip': {
        const id = cmd.stage;
        if (!id || !this.stages.some((s: any) => s.id === id)) {
          this.reporter.notify('control-error', `skip: unknown stage ${JSON.stringify(id)}`);
          break;
        }
        this.state.stage(id).skipped = true;
        this.state.save();
        this.reporter.notify('skipped', `owner skipped stage ${id}`);
        break;
      }
      case 'retry': {
        const unit = cmd.unit ? String(cmd.unit) : null;
        let armed = 0;
        let unfinished = 0;
        for (const d of Object.values<any>(this.state.data.dispatches)) {
          if (unit && !d.covers?.map(String).includes(unit)) continue;
          // Only lanes that did NOT succeed: the notice always said "failed
          // lanes" while the loop reset every lane's attempt history, so later
          // status output misreported attempt counts on lanes that had
          // succeeded.
          //
          // `lastExitOk === null` is UNKNOWN, not failed — the engine died
          // while that dispatch was in flight, so nothing wrote its ending. It
          // is re-armed, because "we do not know it succeeded" is the right
          // reason to allow another try, but it is counted separately: calling
          // an unfinished lane a failed one is the same misreport in a new
          // place. Re-arming a lane whose work is in fact done is harmless —
          // coverage is recomputed from the repo's artifacts, so its unit is
          // already covered and nothing re-dispatches.
          if (d.lastExitOk === true) continue;
          if (d.lastExitOk === null) unfinished += 1;
          d.attempts = 0;                       // let the retry policy fire again
          d.attempt = 0;                        // and the status line agrees
          armed += 1;
        }
        // `retry` also re-arms the REPAIR LOOP of every unfinished stage. The
        // blocked-holding message has always pointed operators here ("autopilot
        // retry to re-arm"), but until frontier-15's closure drive it reset
        // only lane attempts — a stage whose rounds were burned by a since-
        // fixed hook defect still needed a stop, hand surgery on state.json
        // and a restart. Round budgets bound divergence; an operator's
        // explicit retry after a fix is the opposite of divergence.
        let repairArmed = 0;
        for (const [stageId, st] of Object.entries<any>(this.state.data.stages)) {
          if (st.doneAt) continue;
          const stage = this.stages.find((candidate: Stage) => candidate.id === stageId);
          // Step 8's two rejudge cycles are a lifetime ceiling. `retry` is
          // still useful after the owner/session resolves the terminal blocker:
          // it invalidates the battery cache and re-runs the gates, but it may
          // not quietly turn two cycles into more paid contexts.
          if (stage?.terminalFixBudget) {
            if (st.backoffUntil) {
              delete st.backoffUntil;
              repairArmed += 1;
            }
            continue;
          }
          if (st.fixRounds || st.repairExhaustedAt || st.backoffUntil) {
            st.fixRounds = 0;
            delete st.repairExhaustedAt;
            delete st.backoffUntil;
            repairArmed += 1;
          }
        }
        // ...and the PER-(GATE, ITEM) counters, for the same reason. Without
        // this an item that burned its three tries stays blocked by name
        // forever, and `retry` — the documented way to re-arm a battery after
        // a fix — would silently do nothing for the one budget that is
        // per-item. Scoped to unfinished stages so a closed stage's history is
        // left intact as evidence.
        let itemsArmed = 0;
        const doneStages = new Set(Object.entries(this.state.data.stages)
          .filter(([, st]: any) => st.doneAt).map(([id]) => id));
        for (const [k, rec] of Object.entries(this.state.data.gateAttempts ?? {})) {
          if (doneStages.has((rec as any).stage)) continue;
          delete this.state.data.gateAttempts![k];
          itemsArmed += 1;
        }
        if (itemsArmed) {
          this.state.data.blockers = this.state.data.blockers.filter((b: any) => !/^item:/.test(b.key ?? ''));
        }
        this.state.save();
        const how = unfinished ? ` (${armed - unfinished} failed, ${unfinished} unfinished)` : '';
        this.reporter.notify('retry-armed', unit
          ? `owner armed a retry for unit ${unit} (${armed} lane(s))${how}`
          : `owner armed a retry for ${armed} lane(s)${how}`
            + `${repairArmed ? `; repair rounds re-armed on ${repairArmed} stage(s)` : ''}`
            + `${itemsArmed ? `; ${itemsArmed} (gate, item) attempt counter(s) cleared` : ''}`);
        break;
      }
      default: break;
    }
  }

  /** One pass. Returns 'done' | 'working' | 'blocked' | 'stopped'. */
  async tick(): Promise<'done' | 'working' | 'blocked' | 'stopped'> {
    this.handleControl();
    if (this.stopped) return 'stopped';
    await this.maybeReloadStages();
    this.reconcileAdopted();

    // A spec that cannot be trusted must not drive a run. Reported every tick so
    // it cannot be missed, and nothing is dispatched until it is fixed.
    if (this.specProblems.length) {
      const msg = `stage spec is invalid:\n${formatProblems(this.specProblems)}`;
      if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
        this.state.addBlocker('(spec)', msg);
        this.reporter.notify('blocked', msg, { stage: '(spec)' });
      }
      this.reporter.report(this.snapshot(), { force: true });
      return 'blocked';
    }

    const ctx = this.ctx();
    const { stage } = this.currentStage();

    // A COMPLETED STAGE CANNOT HAVE A LIVE BLOCKER. Retiring them only when a
    // stage re-dispatches is not enough: a stage that blocked, was fixed, and
    // then finished never dispatches again, so its blocker sat on the status
    // page indefinitely. Anyone reading it sees a problem that no longer
    // exists, and cannot tell it from one that does.
    if (this.state.data.blockers.length) {
      const doneIds = new Set(this.stages.filter((s: any) => this.stageStatus(s, ctx).done).map((s: any) => s.id));
      const kept = this.state.data.blockers.filter((b: any) => !doneIds.has(b.stage));
      if (kept.length !== this.state.data.blockers.length) {
        const n = this.state.data.blockers.length - kept.length;
        this.state.data.blockers = kept;
        this.state.save();
        this.reporter.notify('unblocked', `retired ${n} blocker(s) belonging to stage(s) that have since completed`);
      }
    }

    if (!stage) {
      this.reporter.report(this.snapshot(), { force: true });
      return 'done';
    }

    this.state.stage(stage.id);
    if (this.state.data.stage !== stage.id) {
      this.state.data.stage = stage.id;
      this.state.save();
      this.reporter.notify('stage', `entering ${stage.id} — ${stage.label}`);
    }

    if (this.state.paused) {
      this.reporter.report(this.snapshot());
      return 'working';
    }

    // THE OVERLAP GROUP this stage belongs to. `[stage]` unless the table says
    // otherwise, in which case everything below reads exactly as it did before.
    const group = this.pipelineGroup(stage);
    const groupIds = new Set(group.map((s: any) => s.id));
    const groupKey = stage.pipeline ?? stage.id;

    // THE STAGE BARRIER. Nothing starts while an earlier stage is still working.
    //
    // A stage cleared its coverage the moment its last result file appeared —
    // but the process that wrote it could still be running, and often was. The
    // gate block below already waits for `inflight` to drain; DISPATCH did not,
    // so the engine would enter the next stage and start agents on top of live
    // work from the previous one.
    //
    // On frontier-14 that was not theoretical. `7-judge`'s sweep was still
    // running when `8-adjudicate` dispatched its Alpha. Every step-8 repair moved
    // a pair's context hash, which re-armed the sweep on the item's untouched
    // page-mates; the ledger grew from 676 rows to 773 DURING adjudication, 26 of
    // 29 fresh rejections were on items step 8 never touched, and 8 items flipped
    // pass to reject on byte-identical text from the same lane that had just
    // passed them. The engine manufactured the noise it then had to adjudicate.
    //
    // Draining is cheap here — stages are hours long and the barrier costs
    // seconds — and the alternative is two stages writing the same ledger.
    //
    // THE BARRIER IS NOW BETWEEN GROUPS, not between stages. Inside one group
    // the overlap is the point, and the ledger race above cannot arise there:
    // the stages that write a shared ledger — the judge sweep, the adjudicators,
    // the cross-level audit, both snapshots — carry no `pipeline` and so are each
    // their own group. Which stages may overlap is a claim the stage table makes
    // and the engine obeys; the engine does not infer it.
    const earlier = [...this.inflight.values()].filter((d: any) => !groupIds.has(d.meta.stage));
    if (earlier.length) {
      const labels = earlier.map((d: any) => `${d.meta.stage}/${d.meta.label}`);
      if (this._barrierFor !== groupKey) {
        this._barrierFor = groupKey;
        this.reporter.notify('barrier',
          `${stage.id} is ready but ${labels.length} dispatch(es) from an earlier stage are still running (${labels.join(', ')}); holding`);
      }
      this.reporter.report(this.snapshot());
      return 'working';
    }
    this._barrierFor = undefined;

    // ONE LANE CAP FOR THE WHOLE GROUP.
    //
    // `concurrency` mirrors the dispatcher's per-role lane cap. Serially that is
    // enough, because only one stage is ever live. In a group two stages using
    // the SAME role can be live together — `1-scaffold` and `3-fix` are both
    // Betas, `3-review` and `3-recheck` are both Alphas — and two stages at the
    // role's cap is twice the role's cap. The dispatcher's own slot pool would
    // absorb the excess by making the extra processes wait, so this is not a
    // correctness fix; it stops the engine from parking idle node processes on a
    // lane that cannot run them.
    const roleBudget = (role: string): number => {
      const caps = group.filter((s: any) => s.role === role)
        .map((s: any) => s.concurrency ?? this.config.concurrency ?? 5);
      return caps.length ? Math.max(...caps) : Infinity;
    };

    // PER-UNIT PROGRESSION. Each member of the group is offered the units whose
    // own work is finished at the member before it; a member with nothing ready
    // simply starts nothing this tick. Stage order, so the earliest work keeps
    // flowing rather than starving behind a later stage.
    for (const [i, member] of group.entries()) {
      if (this.state.data.stages[member.id]?.skipped) continue;
      if (this.stageStatus(member, ctx).unitsDone) continue;
      const firstEntry = !this.state.data.stages[member.id];
      this.state.stage(member.id);
      if (firstEntry && member.id !== stage.id) {
        this.reporter.notify('stage', `entering ${member.id} — ${member.label} (overlapping ${stage.id})`);
      }
      const outcome = await this.dispatchStage(member, ctx, {
        prev: i > 0 ? group[i - 1] : null, groupKey, roleBudget,
      });
      if (outcome === 'blocked') return 'blocked';
    }

    // THE GROUP EXIT — the level join.
    //
    // Every member's units are covered, every dispatch has drained, and only now
    // does any gate run: each member's own list, in stage order, once. A gate
    // that a member declared over the whole level therefore still sees the whole
    // level, which is the property per-unit progression is not allowed to cost.
    const active = group.filter((s: any) => !this.state.data.stages[s.id]?.skipped);
    const statuses = active.map((s: any) => ({ s, st: this.stageStatus(s, ctx) }));
    const unitsAllDone = statuses.every(({ st }: any) => st.unitsDone);
    const gatesPending = statuses.some(({ st }: any) => !st.gatesPassed);
    if (unitsAllDone && gatesPending && !this.inflight.size) {
      const outcome = await this.runGroupGates(statuses, ctx, group);
      if (outcome !== 'ok') return outcome;
    }

    // NO SILENT STALEMATES.
    //
    // frontier-15's splice lane succeeded declaring covers 1-7 while
    // withholding two batches' receipt artifacts: dispatch saw full coverage
    // (nothing to start), the join saw missing artifacts (gates may not run),
    // nothing was in flight — and the engine sat between the two predicates
    // in silence, ticking and emitting nothing, for as long as nobody looked.
    // A stage that is covered, undispatched and drained but still not
    // artifact-complete can make no progress on its own; that is a
    // first-class failure, not a wait state. It routes through the same
    // bounded repair loop as a gate failure (synthetic id `stage-stalemate`),
    // and a stage with no handler for it gets a VISIBLE blocker.
    if (!unitsAllDone && !this.inflight.size) {
      for (const { s, st } of statuses) {
        if (st.unitsDone) continue;
        const owed = (s.units ? s.units(ctx) : []).map(String);
        const cov = covered(ctx.dispatchDir, stagePattern(s, ctx), ctx.coversMap);
        if (pending(owed, cov).length) continue;   // dispatchable — not a stalemate
        const missing = owed.filter((u: string) => !this.unitsComplete(s, ctx).has(u));
        const failure = { id: 'stage-stalemate', ok: false, why: `unit(s) ${missing.join(', ')} covered but artifact-incomplete, nothing dispatchable` };
        const spent = await this.spendRepairRound(s, failure as any, ctx, `stalemate — ${failure.why}`);
        if (spent === 'spent') return 'working';
        if (spent === 'waiting') {
          this.reporter.report(this.snapshot(), { force: true });
          return 'blocked';
        }
        const msg = `stage ${s.id}: stalemate — ${failure.why}`;
        if (this.state.addBlocker(s.id, msg, 'stalemate')) {
          this.reporter.notify('blocked', msg, { stage: s.id });
        }
        this.reporter.report(this.snapshot(), { force: true });
        return 'blocked';
      }
    }

    this.reporter.report(this.snapshot(), { force: false });
    return 'working';
  }

  /**
   * Plan and start one stage's missing work. Extracted from `tick` unchanged in
   * behaviour; `prev` and `roleBudget` are the only additions, and both are
   * no-ops for a stage that is its own group.
   */
  async dispatchStage(stage: Stage, ctx: Ctx, { prev = null, groupKey = stage.id, roleBudget = () => Infinity }:
    { prev?: Stage | null; groupKey?: string; roleBudget?: (role: string) => number } = {}): Promise<'ok' | 'blocked'> {
    // Which units still need a successful dispatch.
    const owed = (stage.units ? stage.units(ctx) : []).map(String);
    const cov = covered(ctx.dispatchDir, stagePattern(stage, ctx), ctx.coversMap);
    let need = pending(owed, cov);

    // ...and, inside an overlap group, only those whose own work at the previous
    // member is finished. `prev` is null for a stage that is its own group and
    // for the first member of one, so this filter is the identity everywhere the
    // table has not asked for overlap.
    need = this.readyUnits(stage, prev, ctx, need);

    // Do not re-dispatch a unit whose lane is already running — including one
    // this engine did not start.
    //
    // ADOPTION. Taking over a run that is already in flight is the normal case,
    // not an exotic one: a build started by hand, or by an earlier driver, has
    // live agents at the moment of handover. Without this the engine sees an
    // uncovered unit, cannot see the agent working on it, and dispatches a
    // second one — two agents writing the same artifacts. The live process
    // already declares `--covers`, so the information is there for the asking.
    const runningUnits = new Set([...this.inflight.values()]
      .filter((d: any) => d.meta.stage === stage.id)
      .flatMap((d: any) => d.meta.covers.map(String)));
    // Adoption must be scoped to THIS stage. A live dispatch covering unit 7
    // for stage 6b says nothing about whether unit 7 is covered for stage 6a —
    // and treating it as coverage blocked a reader re-run behind an adjudicator
    // that was already working on the same batch. Match the live label against
    // the stage's own result pattern.
    const adopted = new Set([...this.adoptedUnits(stage)]);
    for (const u of adopted) runningUnits.add(u);
    if (adopted.size) {
      const news = [...adopted].filter((u: any) => need.includes(u));
      // Reset per GROUP, and key the message by stage: the set exists only to
      // avoid repeating one message, and keying it across the whole run made it
      // grow without bound on a long build. Resetting it per stage instead would
      // now clear it several times a tick, and the message would repeat forever.
      if (this._adoptStage !== groupKey) { this._adoptStage = groupKey; this._announcedAdoption = new Set(); }
      if (news.length && !this._announcedAdoption.has(`${stage.id}:${news.join(',')}`)) {
        this._announcedAdoption.add(`${stage.id}:${news.join(',')}`);
        this.reporter.notify('adopted', `unit(s) ${news.join(', ')} are already covered by a live external dispatch; not starting a second`);
      }
    }
    need = need.filter((u: any) => !runningUnits.has(u));

    // Retry policy: a unit whose lane failed gets `maxAttempts` tries, then
    // becomes a blocker. Unbounded retry of a deterministically failing lane
    // burns a budget silently; one retry catches the genuine transients.
    const maxAttempts = stage.maxAttempts ?? this.config.maxAttempts ?? 2;

    // Retry accounting is applied to PLANS, not to units, because the dispatch
    // key is `${stage.id}:${plan.label}` and only the plan knows the label.
    //
    // It used to derive the key from `stage.labelFor(unit)`, which NINE of
    // thirteen stages do not define — so `keyForUnit` returned null, `prior` was
    // null, and the cap could not engage for any of them. That is the real
    // reason frontier-14's judge sweep was re-dispatched 33 times: not the exit
    // code, which is what I first "fixed", but that its stage had no `labelFor`
    // and so had no retry accounting at all.
    //
    // Deriving the key from the plan removes the second source of truth.
    // Fan out, respecting the cap.
    // ONE CAP, and it is the real one.
    //
    // `stage.concurrency` mirrors the dispatcher's own lane cap for that role —
    // beta 12, reader 12, alpha 4 since 2026-08-24, verified against
    // tools/dispatch.mjs. Those are genuine constraints and the engine should
    // respect them. HOW MANY may run is this arithmetic; HOW FAST they may boot
    // is the per-spawn stagger in `start`, and the two are independent: raising
    // a cap without spacing the spawns is what turns width into a stampede.
    //
    // A second, GLOBAL cap used to sit on top (stageCap * 2). That was my
    // invention, not a constraint anything enforces, and it could only ever
    // throttle work the dispatcher was willing to run. Removed: the engine
    // should not impose a limit nobody asked for. Set `globalConcurrency` in
    // config if a machine genuinely needs one.
    //
    // The group's ROLE budget sits alongside it, and only bites inside a
    // pipeline: two stages of one group sharing a lane must not each fill it.
    const stageCap = stage.concurrency ?? this.config.concurrency ?? 5;
    const inStage = [...this.inflight.values()].filter((d: any) => d.meta.stage === stage.id).length;
    const globalCap = this.config.globalConcurrency ?? Infinity;
    const roleCap = stage.role ? roleBudget(stage.role) : Infinity;
    const inRole = stage.role
      ? [...this.inflight.values()].filter((d: any) => d.meta.role === stage.role).length
      : 0;
    const slots = Math.max(0, Math.min(stageCap - inStage, roleCap - inRole, globalCap - this.inflight.size));
    if (need.length && slots > 0) {
      let plans;
      try {
        plans = stage.plan(ctx, need.slice(0, slots));
        // Drop any plan whose own dispatch key has exhausted its attempts.
        const exhaustedPlans: any[] = [];
        plans = plans.filter((p: any) => {
          const prior = this.state.dispatch(`${stage.id}:${p.label}`);
          if (prior && prior.attempts >= maxAttempts) { exhaustedPlans.push(p); return false; }
          return true;
        });
        for (const p of exhaustedPlans) {
          const msg = `stage ${stage.id}: ${p.label} failed ${maxAttempts}x (covers ${(p.covers ?? []).join(', ') || 'n/a'})`;
          if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
            this.state.addBlocker(stage.id, msg);
            this.reporter.notify('blocked', msg, { stage: stage.id, label: p.label });
            if (stage.escalate) await stage.escalate({ ctx, units: p.covers ?? [], executor: this });
          }
        }
        if (!plans.length && exhaustedPlans.length && !this.inflight.size) {
          this.reporter.report(this.snapshot(), { force: true });
          return 'blocked';
        }
      } catch (err: any) {
        // A stage spec that throws used to propagate out of tick(), out of
        // run(), and exit the process — whereupon the watchdog restarted it and
        // it threw again, forever, at sixty-second intervals. A bad spec is a
        // blocker, not a crash loop.
        const msg = `stage ${stage.id}: plan() threw — ${err?.message ?? err}`;
        if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
          this.state.addBlocker(stage.id, msg);
          this.reporter.notify('blocked', msg, { stage: stage.id });
        }
        this.reporter.report(this.snapshot(), { force: true });
        return 'blocked';
      }

      // PREFLIGHT. A dispatch whose brief or task file does not exist will
      // fail, be retried, fail again, and only then block — two agent
      // invocations and their wall-clock spent discovering a missing file that
      // `existsSync` answers instantly. Check before spending. Candidate
      // resolution itself lives in `resolveInput`, on the path every dispatch
      // crosses — including hook-started repairs, which bypass this loop; it
      // is called here too so the whole-stage missing-file blocker below can
      // name every absent file at once rather than one per dispatch.
      const pick = (v) => this.resolveInput(v, ctx);
      for (const p of plans) { p.brief = pick(p.brief); p.task = pick(p.task); }

      const missing: any[] = [];
      for (const p of plans) {
        for (const f of [p.brief, p.task]) {
          if (f && !existsSync(join(ctx.repo, f))) missing.push({ label: p.label, file: f });
        }
      }
      if (missing.length) {
        const msg = `stage ${stage.id}: missing input file(s) — ${missing.map((m: any) => `${m.label} needs ${m.file}`).join('; ')}`;
        if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
          this.state.addBlocker(stage.id, msg);
          this.reporter.notify('blocked', msg, { stage: stage.id, missing });
        }
        this.reporter.report(this.snapshot(), { force: true });
        return 'blocked';
      }

      // Dispatching means the inputs are there now, so any earlier
      // missing-file blocker for this stage is history. A resolved blocker left
      // on the report is worse than no report: someone reading it at 3am cannot
      // tell it from a live one, and the whole value of the status page is that
      // what it shows is true right now.
      const before = this.state.data.blockers.length;
      this.state.data.blockers = this.state.data.blockers.filter(
        (b) => !(b.stage === stage.id && /missing input file/.test(b.message)));
      if (this.state.data.blockers.length !== before) {
        this.state.save();
        this.reporter.notify('unblocked', `${stage.id}: missing input file(s) now present`);
      }

      for (const p of plans) this.start(stage, p);
    }
    return 'ok';
  }

  /**
   * THE LEVEL JOIN. Run every gate the group's members declare, in stage order,
   * once, with nothing in flight — then stamp all of them.
   *
   * For a stage that is its own group this is the old per-stage gate block
   * verbatim, including the vacuous-empty-list refusal, the repair loop and the
   * blocker retirement. For a real group it is the property that makes per-unit
   * progression safe: a repo-wide gate declared by ANY member still runs over
   * the whole level, after all of it exists, before anything downstream starts.
   *
   * Exact duplicates are run once. `manifest-integrity` and `validate-plan` are
   * declared by all four scaffold stages and `precheck` by two read stages; the
   * same argv over the same disk in the same second cannot give two answers, and
   * a member that declares a STRONGER variant (`risk-report --require-reviewed`)
   * has a different argv and still runs on its own.
   */
  async runGroupGates(statuses: Array<{ s: Stage; st: StageStatus }>, ctx: Ctx, group: Stage[]): Promise<'ok' | 'working' | 'blocked'> {
    const list: Gate[] = [];
    const owners: Stage[] = [];
    const seen = new Set<string>();
    let n = 0;
    for (const { s } of statuses) {
      if (s.gatesWaived || !s.gates) continue;
      if (this.state.data.stages[s.id]?.gatesPassedAt) continue;   // already stamped on an earlier pass
      const gates = s.gates(ctx) ?? [];
      // A STAGE THAT DECLARES GATES MUST HAVE GATES. An empty list here is a
      // spec that says "check this" and supplies nothing to check with — the
      // vacuous-gate shape. Blocking is the only honest response; passing it
      // would be indistinguishable from having checked.
      if (!gates.length) {
        const msg = `stage ${s.id}: declares gates but produced an empty gate list — nothing was checked. `
          + 'Either the gate builders returned nothing for this run, or the stage should declare `gatesWaived`.';
        if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
          this.state.addBlocker(s.id, msg);
          this.reporter.notify('blocked', msg, { stage: s.id });
        }
        this.reporter.report(this.snapshot(), { force: true });
        return 'blocked';
      }
      for (const g of gates) {
        n += 1;
        const key = Array.isArray(g.argv) ? `${g.id}\u0000${JSON.stringify(g.argv)}` : `${g.id}\u0000fn-${n}`;
        if (seen.has(key)) continue;
        seen.add(key);
        list.push(g);
        owners.push(s);
      }
    }

    if (list.length) {
      const where = group.length > 1 ? `${group[0].id}..${group[group.length - 1].id}` : group[0].id;
      // EVENT-DRIVEN RE-VERIFICATION. A battery that failed re-runs only when
      // something that could change its verdict happened: a state event
      // (dispatch end, repair round, control command, adoption), a new or
      // changed result file from an EXTERNAL process, or an expired backoff
      // clock. frontier-15 ran the 7-judge battery 29 times against unchanged
      // inputs during one account outage, re-probing archive.org each pass.
      // There is deliberately no clock-only backstop. Frontier-18 spent five
      // hours re-running the same 22-gate Step-8 battery every 20 quiet ticks;
      // deterministic tools over unchanged bytes cannot produce a new answer.
      // A hand edit is re-armed by `autopilot retry`, and every engine-owned
      // mutation below already bumps state or the dispatch-dir fingerprint.
      const groupKey = statuses.map(({ s }: any) => s.id).join('+');
      const last = this.lastBattery.get(groupKey);
      const dirFp = this.dispatchDirFingerprint();
      const backoffDue = statuses.some(({ s }: any) => {
        const bu = this.state.data.stages[s.id]?.backoffUntil;
        return bu && new Date(bu).getTime() <= Date.now();
      });
      if (last && !last.ok && last.version === this.stateVersion && last.dirFp === dirFp
        && !backoffDue) return 'blocked';
      const versionAtStart = this.stateVersion;
      this.reporter.notify('gates', `${where}: running ${list.length} gate(s)`);
      const { ok, results } = await runGates(list, { cwd: ctx.repo, signal: this.signal, logger: () => {} });
      for (const r of results) this.reporter.event('gate', r);
      this.lastBattery.set(groupKey, { version: versionAtStart, ok, dirFp });
      if (!ok) {
        // `runGates` appends one result per gate and stops at the first failure,
        // so the failing gate is the last result and its owner is at the same
        // index. Looking the owner up by gate id would pick the wrong stage the
        // moment two members declare an id in common, which four of them do.
        const bad = results[results.length - 1];
        const stage = owners[results.length - 1] ?? group[0];
        const msg = `stage ${stage.id}: gate ${bad.id} failed — ${bad.why}`;
        // Dedupe by stage+gate, not by message: `bad.why` carries variable text
        // (counts, ids, timeouts), and a gate failing the same way with a
        // different number used to stack a fresh blocker each pass.
        if (this.state.addBlocker(stage.id, msg, `gate:${bad.id}`)) {
          this.reporter.notify('blocked', msg, { stage: stage.id, gate: bad.id });
        }

        // REPORT-ALL. The battery stops at the first failure and that failure
        // alone keeps its authority — but the remaining gates now run in an
        // ADVISORY pass so one battery names every failure it can reach. On
        // frontier-15, defect-ledger and risk-report failed at the same
        // 8-adjudicate join and were discovered SERIALLY: two repair
        // round-trips and an engine restart where one battery could have named
        // both. Advisory results feed the event log, a notify, and
        // `failure.advisory` for hooks; they never pass a stage and never
        // stamp anything.
        const advisory: any[] = [];
        {
          let rest = list.slice(results.length);
          let restOwners = owners.slice(results.length);
          while (rest.length) {
            const adv = await runGates(rest, { cwd: ctx.repo, signal: this.signal, logger: () => {} });
            for (const r of adv.results) this.reporter.event('gate-advisory', r);
            const failedAt = adv.results.findIndex((r: any) => !r.ok);
            if (failedAt === -1) break;
            const failure = adv.results[failedAt];
            const owner = restOwners[failedAt] ?? stage;
            advisory.push({ ...failure, stage: owner.id });
            this.reporter.notify('gate-advisory',
              `${owner.id}: gate ${failure.id} ALSO failing (advisory) — ${String(failure.why).slice(0, 200)}`);
            rest = rest.slice(failedAt + 1);
            restOwners = restOwners.slice(failedAt + 1);
          }
        }
        (bad as any).advisory = advisory;

        // THE REPAIR LOOP.
        //
        // `onGateFailure` was declared, called, and implemented by no stage;
        // `fixRounds` was initialised and never read. So the only thing a
        // failing gate could ever do was hold. On frontier-14 that meant two
        // confirmed-fatal proofs became a paragraph in a markdown report
        // instead of an authoring dispatch, and the run went to step 10 with
        // them open.
        //
        // The hook also could not have worked as written: it fired only when
        // the blocker MESSAGE was new, and a gate that keeps failing the same
        // way produces the same message every time. One round, then deadlock.
        //
        // It now fires whenever nothing is in flight and rounds remain, which
        // is the actual condition for "there is repair work to start". The cap
        // is what keeps a non-converging repair from spending forever: past it
        // the gate still blocks, and a person reads the blocker.
        //
        // The hook belongs to the stage that DECLARED the failing gate, not to
        // the group: a thin scaffold is `3-recheck`'s to re-open, whoever else
        // was overlapping it.
        const st = this.state.stage(stage.id);
        const maxRounds = stage.maxFixRounds ?? 0;
        const spent = await this.spendRepairRound(stage, bad, ctx, `gate ${bad.id} failed`);
        if (spent === 'spent') {
          // Dispatches started by the hook are in flight now; the gate re-runs
          // once they drain, because `gatesPassedAt` is still unset.
          return 'working';
        }
        if (spent === 'waiting') {
          // An external outage is being waited out. The round budget is intact
          // and the hook re-fires when the clock passes — not exhaustion.
          this.reporter.report(this.snapshot(), { force: true });
          return 'blocked';
        }
        // Said once, when the budget runs out — not on every tick thereafter.
        if (stage.onGateFailure && maxRounds > 0 && !st.repairExhaustedAt) {
          st.repairExhaustedAt = new Date().toISOString();
          this.state.save();
          this.reporter.notify('repair-exhausted',
            `${stage.id}: ${maxRounds} repair round(s) did not clear gate ${bad.id}; this needs a person`);
        }
        this.reporter.report(this.snapshot(), { force: true });
        return 'blocked';
      }
      // A gate that now passes retires its own blocker, so a transient does
      // not leave a permanent scar on the status report.
      const before = this.state.data.blockers.length;
      const ownerIds = new Set(statuses.map(({ s }: any) => s.id));
      this.state.data.blockers = this.state.data.blockers.filter((b: any) => !(ownerIds.has(b.stage) && /gate /.test(b.message)));
      if (this.state.data.blockers.length !== before) this.reporter.notify('unblocked', `${where}: gate blocker cleared on a later pass`);
      this.reporter.notify('gates-ok', `${where}: all gates green`);
    }

    // The group clears as one. A member that waived its gates is stamped here
    // too — it has been unit-complete since the join began.
    for (const { s, st } of statuses) {
      const ss = this.state.stage(s.id);
      ss.gatesPassedAt = ss.gatesPassedAt ?? new Date().toISOString();
      ss.doneAt = new Date().toISOString();
      this.reporter.notify('stage-clear', `${s.id} cleared — ${st.why}`);
    }
    this.state.save();
    return 'ok';
  }

  /** The dispatch key a unit would use, so the retry policy can find its prior
   *  attempts. Stages whose labels are not unit-derived return null and simply
   *  do not get per-unit retry accounting. */
  /** @deprecated Retry accounting derives its key from the plan's own label,
   *  which is what `start()` records. Keying it separately off `labelFor` gave
   *  nine of thirteen stages no retry accounting at all. */
  keyForUnit(stage: Stage, unit: Unit): string | null {
    if (!stage.labelFor) return null;
    return `${stage.id}:${stage.labelFor(unit)}`;
  }

  /**
   * Spend one repair round on `stage`'s hook, honouring outage backoff.
   *
   *  'spent'   — a round ran; repair work may be in flight; re-verify later.
   *  'waiting' — an earlier round reported an external outage and its clock
   *              has not elapsed; the hook was not fired, no round consumed.
   *  'none'    — no hook, or the round budget is exhausted.
   *
   * A hook that returns `{ outage }` gets its round REFUNDED and a clock set
   * instead. During the sonnet account limit on frontier-15, every judge
   * re-sweep was a guaranteed null yet each consumed a round, and 7-judge
   * exhausted on work that could never have succeeded — the budget bounds
   * divergence, and an outage is not divergence. Both round-spending sites
   * (the gate-failure branch and the stalemate branch) go through here, so
   * neither can drift back to burning rounds an outage already explains.
   */
  /**
   * The item ids a gate's own output names.
   *
   * Every subject-scoped gate in this repo prints `ERROR <code> [<id>]:` —
   * content-policy, proof-contract, finite-smoke, risk-report, boundary-audit
   * and citation-fidelity all do. The bracket form is also used for CITATION
   * labels (`[F1]`, `[L3]`, `[step 2.1]`), so the shape test is what separates
   * them: a real id is lower-case kebab with at least three segments
   * (`def-group`, `thm-zorn`, `compactness-page`). The line-anchored form
   * includes page subjects; the closed item-prefix fallback finds item ids in
   * older diagnostics without mistaking citation labels for subjects.
   *
   * Older plan and impact tools use either `  [code] <item>/page ...` or
   * `ERROR code: ... <item>` rather than the canonical bracketed subject. Those
   * concrete subjects still receive independent budgets. A genuinely level-
   * scoped failure returns no id and is keyed on the gate alone.
   */
  static itemsNamedBy(failure: GateResult): string[] {
    const text = `${failure?.output ?? ''}\n${failure?.why ?? ''}`;
    const ids = new Set<string>();
    const typed = /\b((?:def|thm|lem|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)*)\b/g;
    for (const line of text.split(/\r?\n/)) {
      if (/^\s{2}([a-z0-9]+(?:-[a-z0-9]+)+)\s+\([^)]*\.pages\.json\):/i.test(line)) {
        ids.add(line.match(/^\s{2}([a-z0-9]+(?:-[a-z0-9]+)+)/i)![1]);
        continue;
      }
      if (!/^ERROR\b|^\s*\[[a-z0-9-]+\]\s+/i.test(line)) continue;
      const bracketed = line.match(/^ERROR [^\n]*?\[([a-z0-9]+(?:-[a-z0-9]+)+)\]/);
      if (bracketed) { ids.add(bracketed[1]); continue; }
      for (const match of line.matchAll(typed)) ids.add(match[1]);
      for (const match of line.matchAll(/\bpage\s+([a-z0-9]+(?:-[a-z0-9]+)+)\b/gi)) ids.add(match[1]);
      for (const match of line.matchAll(/\bbatch\s+\d+\s+([a-z0-9]+(?:-[a-z0-9]+)+)\s+declares\b/gi)) ids.add(match[1]);
    }
    return [...ids];
  }

  /** `gateAttempts` key. Step 6b and 6c are separate reviews, so neither may
   * spend the other's allowance for the same gate and subject. */
  private static attemptKey(stageId: string, gateId: string, item: string): string {
    return `${stageId}\u0000${gateId}\u0000${item}`;
  }

  /**
   * Charge one try to every item the failing gate names, and report which of
   * them still have tries left.
   *
   * Owner, 2026-08-25: "each item must pass through the same gate within 3
   * tries, after which it becomes a blocker and requires intervention". The
   * counter increments per BATTERY, not per repair dispatch — an item repaired
   * on the first pass is not named by the next battery and never reaches two,
   * which is what makes three a real allowance rather than three ticks of a
   * clock.
   */
  private chargeItems(stage: Stage, failure: GateResult, budget: number): { live: string[]; spent: string[] } {
    const named = Executor.itemsNamedBy(failure);
    // A gate that names nothing is still bounded — on the gate alone.
    const keys = named.length ? named : ['*'];
    this.state.data.gateAttempts ??= {};
    const live: string[] = [], spent: string[] = [];
    for (const item of keys) {
      const k = Executor.attemptKey(stage.id, failure.id, item);
      const rec = this.state.data.gateAttempts[k] ??= { n: 0, stage: stage.id, lastAt: '' };
      rec.n += 1;
      rec.stage = stage.id;
      rec.lastAt = new Date().toISOString();
      (rec.n > budget ? spent : live).push(item);
    }
    this.state.save();
    for (const item of spent) {
      const msg = item === '*'
        ? `stage ${stage.id}: gate ${failure.id} failed ${budget}x and names no item — needs a person`
        : `stage ${stage.id}: gate ${failure.id} failed ${budget}x on ${item} — needs a person`;
      if (this.state.addBlocker(stage.id, msg, `item:${stage.id}:${failure.id}:${item}`)) {
        this.reporter.notify('blocked', msg, { stage: stage.id, gate: failure.id, item });
      }
    }
    return { live, spent };
  }

  private async spendRepairRound(stage: Stage, failure: GateResult, ctx: Ctx, describe: string): Promise<'spent' | 'waiting' | 'none'> {
    const st = this.state.stage(stage.id);
    const maxRounds = stage.maxFixRounds ?? 0;
    if (!stage.onGateFailure) return 'none';
    // PER-ITEM BUDGET, when the stage opts in. `fixRounds` is still stamped so
    // the report and the `retry` control keep working, but it no longer BOUNDS
    // the stage — the (gate, item) counters do. A stage without
    // `perItemFixBudget` is unchanged, which is every stage outside step 6.
    const perItem = stage.perItemFixBudget ?? 0;
    let repairFailure = failure;
    if (perItem > 0) {
      if (st.backoffUntil && new Date(st.backoffUntil).getTime() > Date.now()) return 'waiting';
      const { live, spent } = this.chargeItems(stage, failure, perItem);
      repairFailure = { ...failure, liveItems: live, exhaustedItems: spent };
      // Every item this gate names has burned its tries: nothing left to try,
      // and the blockers raised above name each one.
      if (!live.length) {
        // Stamped for the same reason the stage-wide path stamps it: the
        // notice is given once, and `retry` clears it. The tick-level
        // exhaustion notice is guarded on `maxRounds > 0`, which a per-item
        // stage need not set, so this branch owns the message.
        if (!st.repairExhaustedAt) {
          st.repairExhaustedAt = new Date().toISOString();
          this.state.save();
          this.reporter.notify('repair-exhausted',
            `${stage.id}: gate ${failure.id} — all ${spent.length} named item(s) exhausted ${perItem} tries; this needs a person`);
        }
        return 'none';
      }
      if (spent.length) {
        this.reporter.notify('repair-partial',
          `${stage.id}: gate ${failure.id} — ${spent.length} item(s) exhausted, continuing on ${live.length}`);
      }
    } else if (st.fixRounds >= maxRounds) return 'none';
    if (st.backoffUntil) {
      if (new Date(st.backoffUntil).getTime() > Date.now()) return 'waiting';
      st.backoffUntil = null;
      this.state.save();
    }
    const prevRoundAt = st.lastRepairAt ?? null;
    st.fixRounds += 1;
    st.lastRepairAt = new Date().toISOString();
    this.state.save();
    const budgetLabel = perItem > 0
      ? `repair cycle ${st.fixRounds}; ${perItem} tries per gate/item`
      : `repair round ${st.fixRounds}/${maxRounds}`;
    this.reporter.notify('repair', `${stage.id}: ${describe}; starting ${budgetLabel}`);
    let report: any;
    try {
      report = await stage.onGateFailure({ ctx, failure: repairFailure, executor: this, stage, round: st.fixRounds, prevRoundAt });
    } catch (err: any) {
      this.reporter.notify('repair-failed', `${stage.id}: repair round ${st.fixRounds} threw — ${err?.message ?? err}`);
    }
    if (report?.outage) {
      const waitMs = report.outage.retryAfterMs ?? OUTAGE_BACKOFF_MS;
      st.fixRounds -= 1;
      st.backoffUntil = new Date(Date.now() + waitMs).toISOString();
      this.state.save();
      this.reporter.notify('repair-outage',
        `${stage.id}: repair hit an external outage — ${report.outage.reason}; ` +
        `round refunded, retrying after ${Math.round(waitMs / 60_000)} min`);
    }
    // A repair round is a state-changing event whatever it did — it ran tools,
    // dispatched lanes, or set a clock — so the next battery must be live.
    this.bumpState();
    this.reporter.report(this.snapshot(), { force: true });
    return 'spent';
  }

  async run({ pollMs = 15000, maxTicks = Infinity }: { pollMs?: number; maxTicks?: number } = {}): Promise<string> {
    let ticks = 0;
    for (;;) {
      if (this.signal?.aborted) return 'aborted';
      const r = await this.tick();
      if (r === 'done' || r === 'stopped') return r;
      if (r === 'blocked') {
        // A blocker is not the end of the run. The first live takeover blocked
        // on a citation sweep hitting an HTTP/2 framing error against a host
        // that had answered 200 twice that hour — and the engine exited, ending
        // a build over a network blip. Keep ticking: a transient clears itself,
        // an owner can `retry`, and a genuinely stuck run is reported every
        // interval rather than silently dead.
        this.blockedTicks = (this.blockedTicks ?? 0) + 1;
        if (this.blockedTicks === 1 || this.blockedTicks % 20 === 0) {
          this.reporter.notify('blocked-holding',
            `still blocked after ${this.blockedTicks} tick(s); holding and re-checking. ` +
            `\`autopilot retry\` to re-arm, \`autopilot stop\` to end.`);
        }
        if (this.config.exitOnBlocked && this.blockedTicks >= (this.config.blockedTickLimit ?? 40)) return 'blocked';
      } else {
        this.blockedTicks = 0;
      }
      ticks += 1;
      if (ticks >= maxTicks) return 'working';
      await sleep(pollMs, this.signal);
    }
  }
}
