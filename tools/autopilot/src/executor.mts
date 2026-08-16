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

import { existsSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';

import { covered, pending, stageComplete } from './coverage.mts';
import type { Config, Ctx, Stage, Plan, StageStatus, Snapshot, Adapter, Unit, RunningEntry } from './types.mts';
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
  _adoptStage?: string;
  _announcedAdoption?: Set<string>;
  _barrierFor?: string;

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
    // Validate the spec here rather than throwing: a bad stage table found by a
    // running engine should be a visible blocker, not a crash the watchdog
    // restarts into a loop at sixty-second intervals. `bin/autopilot` checks the
    // same thing before starting, so this is the belt to that braces.
    this.specProblems = validateStages(this.stages, this.ctx());
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
    const units = stageComplete(ctx.dispatchDir, stage.pattern, owed, {
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

  snapshot(): Snapshot {
    const ctx = this.ctx();
    const { stage } = this.currentStage();
    const stages = this.stages.map((s: any) => {
      const st = this.stageStatus(s, ctx);
      return { id: s.id, label: s.label, done: st.done, why: st.why, current: stage && s.id === stage.id };
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

  /** Start one dispatch. Never awaited inline — the engine keeps ticking while
   *  agents run, which is what allows a slow lane and a fast lane to overlap. */
  start(stage: Stage, plan: Plan): void {
    const key = `${stage.id}:${plan.label}`;
    if (this.inflight.has(key)) return;
    // Owner rule, 2026-08-16: a model is dispatched for cognitive work only.
    // Enforced at the point of dispatch rather than in review, because handing
    // a model a mechanical task does not error — it returns a plausible answer
    // and is wrong at a rate nobody measures.
    assertCognitive(plan.job, { stage: stage.id, label: plan.label });
    const prior = this.state.dispatch(key);
    const attempt = (prior?.attempts ?? 0) + 1;
    const meta = { stage: stage.id, role: plan.role, label: plan.label, covers: plan.covers ?? [], attempt };
    this.state.recordDispatchStart(key, meta);
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
    // The adapter enforces the timeout; `plan.timeout` used to be only a
    // template variable, silently inert for every tool lane. The margin lets a
    // dispatcher that enforces the same budget on its agent finish its own
    // cleanup before the engine kills the group.
    const promise = adapter.invoke(vars, { signal: this.signal, timeoutMs: (Number(vars.timeout) + 120) * 1000 })
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
          if (!stage.pattern.test(resultName)) continue;
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
        for (const d of Object.values<any>(this.state.data.dispatches)) {
          if (unit && !d.covers?.map(String).includes(unit)) continue;
          d.attempts = 0;                       // let the retry policy fire again
        }
        this.state.save();
        this.reporter.notify('retry-armed', unit ? `owner armed a retry for unit ${unit}` : 'owner armed a retry for all failed lanes');
        break;
      }
      default: break;
    }
  }

  /** One pass. Returns 'done' | 'working' | 'blocked' | 'stopped'. */
  async tick(): Promise<'done' | 'working' | 'blocked' | 'stopped'> {
    this.handleControl();
    if (this.stopped) return 'stopped';

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
    const earlier = [...this.inflight.values()].filter((d: any) => d.meta.stage !== stage.id);
    if (earlier.length) {
      const labels = earlier.map((d: any) => `${d.meta.stage}/${d.meta.label}`);
      if (this._barrierFor !== stage.id) {
        this._barrierFor = stage.id;
        this.reporter.notify('barrier',
          `${stage.id} is ready but ${labels.length} dispatch(es) from an earlier stage are still running (${labels.join(', ')}); holding`);
      }
      this.reporter.report(this.snapshot());
      return 'working';
    }
    this._barrierFor = undefined;

    // Which units still need a successful dispatch.
    const owed = (stage.units ? stage.units(ctx) : []).map(String);
    const cov = covered(ctx.dispatchDir, stage.pattern, ctx.coversMap);
    let need = pending(owed, cov);

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
      // Reset per stage: the set exists only to avoid repeating one message
      // within a stage, and keying it across the whole run made it grow without
      // bound on a long build.
      if (this._adoptStage !== stage.id) { this._adoptStage = stage.id; this._announcedAdoption = new Set(); }
      if (news.length && !this._announcedAdoption.has(news.join(','))) {
        this._announcedAdoption.add(news.join(','));
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
    // beta 9, reader 9, alpha 3, verified against tools/dispatch.mjs. Those are
    // genuine constraints and the engine should respect them.
    //
    // A second, GLOBAL cap used to sit on top (stageCap * 2). That was my
    // invention, not a constraint anything enforces, and it could only ever
    // throttle work the dispatcher was willing to run. Removed: the engine
    // should not impose a limit nobody asked for. Set `globalConcurrency` in
    // config if a machine genuinely needs one.
    const stageCap = stage.concurrency ?? this.config.concurrency ?? 5;
    const inStage = [...this.inflight.values()].filter((d: any) => d.meta.stage === stage.id).length;
    const globalCap = this.config.globalConcurrency ?? Infinity;
    const slots = Math.max(0, Math.min(stageCap - inStage, globalCap - this.inflight.size));
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
      // `existsSync` answers instantly. Check before spending.
      // A stage may offer several candidate paths for a brief or task; the
      // first that exists wins. This exists because a run whose batch count
      // crosses a grouping boundary needs a task file nobody wrote — seven
      // batches make three Alpha groups where six made two — and blocking a
      // fourteen-hour build at 2am for a file that a generic fallback would
      // have covered is a poor trade. A specific file still wins when present.
      const pick = (v) => {
        if (!v) return v;
        const cands = Array.isArray(v) ? v : [v];
        return cands.find((c: any) => existsSync(join(ctx.repo, c))) ?? cands[cands.length - 1];
      };
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

    // Every unit covered: gate, then let currentStage() move on next tick.
    const recheck = this.stageStatus(stage, ctx);
    if (recheck.unitsDone && !recheck.gatesPassed && !this.inflight.size) {
      const gates = stage.gates ? stage.gates(ctx) : [];
      // A STAGE THAT DECLARES GATES MUST HAVE GATES. An empty list here is a
      // spec that says "check this" and supplies nothing to check with — the
      // vacuous-gate shape. Blocking is the only honest response; passing it
      // would be indistinguishable from having checked.
      if (!gates.length) {
        const msg = `stage ${stage.id}: declares gates but produced an empty gate list — nothing was checked. `
          + 'Either the gate builders returned nothing for this run, or the stage should declare `gatesWaived`.';
        if (!this.state.data.blockers.some((b: any) => b.message === msg)) {
          this.state.addBlocker(stage.id, msg);
          this.reporter.notify('blocked', msg, { stage: stage.id });
        }
        this.reporter.report(this.snapshot(), { force: true });
        return 'blocked';
      }
      {
        this.reporter.notify('gates', `${stage.id}: running ${gates.length} gate(s)`);
        const { ok, results } = await runGates(gates, { cwd: ctx.repo, signal: this.signal, logger: () => {} });
        for (const r of results) this.reporter.event('gate', r);
        if (!ok) {
          const bad = results.find((r: any) => !r.ok);
          const msg = `stage ${stage.id}: gate ${bad.id} failed — ${bad.why}`;
          const isNew = !this.state.data.blockers.some((b: any) => b.message === msg);
          if (isNew) {
            this.state.addBlocker(stage.id, msg);
            this.reporter.notify('blocked', msg, { stage: stage.id, gate: bad.id });
          }

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
          const st = this.state.stage(stage.id);
          const maxRounds = stage.maxFixRounds ?? 0;
          if (stage.onGateFailure && st.fixRounds < maxRounds) {
            st.fixRounds += 1;
            this.state.save();
            this.reporter.notify('repair',
              `${stage.id}: gate ${bad.id} failed; starting repair round ${st.fixRounds}/${maxRounds}`);
            try {
              await stage.onGateFailure({ ctx, failure: bad, executor: this, stage, round: st.fixRounds });
            } catch (err: any) {
              this.reporter.notify('repair-failed', `${stage.id}: repair round ${st.fixRounds} threw — ${err?.message ?? err}`);
            }
            // Dispatches started by the hook are in flight now; the gate re-runs
            // once they drain, because `gatesPassedAt` is still unset.
            this.reporter.report(this.snapshot(), { force: true });
            return 'working';
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
        this.state.stage(stage.id).gatesPassedAt = new Date().toISOString();
        // A gate that now passes retires its own blocker, so a transient does
        // not leave a permanent scar on the status report.
        const before = this.state.data.blockers.length;
        this.state.data.blockers = this.state.data.blockers.filter((b: any) => !(b.stage === stage.id && /gate /.test(b.message)));
        if (this.state.data.blockers.length !== before) this.reporter.notify('unblocked', `${stage.id}: gate blocker cleared on a later pass`);
        this.state.save();
        this.reporter.notify('gates-ok', `${stage.id}: all gates green`);
      }
      this.state.stage(stage.id).doneAt = new Date().toISOString();
      this.state.save();
      this.reporter.notify('stage-clear', `${stage.id} cleared — ${recheck.why}`);
    }

    this.reporter.report(this.snapshot());
    return 'working';
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
