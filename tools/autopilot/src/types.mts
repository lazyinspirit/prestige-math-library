// The domain, declared once.
//
// WHY THIS FILE EXISTS. The engine was written in plain JavaScript and every
// object was whatever its literal happened to infer. Two of the four defects
// found in the line-by-line audit are ones a type checker rejects outright:
//
//   .filter((p: any) => !p.exists)        // p is a string; `exists` is not a property
//   prior.lastExitOk === false       // lastExitOk is boolean | null, and the
//                                    // null case was the one that mattered
//
// Neither could be caught by a test, because both are about a shape rather than
// a behaviour, and both looked correct in isolation. Declaring the shapes moves
// that whole class from "found at 3am on a live run" to "found before the file
// is saved".

/** A unit of work a stage owes — a batch number, a page id, or 'all'. */
export type Unit = string;

/** Everything a stage is told about the run it is planning for. */
export interface Ctx {
  run: string;
  repo: string;
  dispatchDir: string;
  coversMap?: Record<string, Unit[]>;
  config?: Config;
}

/**
 * One dispatch a stage wants to start.
 *
 * `job` is checked at dispatch: it must be a cognitive job, or end in
 * `-mechanical` to declare that no model is involved.
 */
export interface Plan {
  role: string;
  label: string;
  job: string;
  covers?: Unit[];
  /** Path, or candidates tried in order — the first that exists wins. */
  brief?: string | string[];
  task?: string | string[];
  /** An argv ARRAY. Never a command string: every attempt to parse one
   *  produced a quoting defect. */
  argv?: string[];
  timeout?: number;
  /** Set false when the command writes its own result record. */
  writeReceipt?: boolean;
}

export interface Liveness {
  /** Regex source with one capture group: the count of things examined. */
  pattern: string;
  min?: number;
  unit?: string;
}

export interface Gate {
  id: string;
  argv: string[] | (() => string[]);
  /** Paths that must exist for this gate to be meaningful. */
  needs?: string[] | (() => string[]);
  /** A gate reporting success over an empty scope is not a gate that passed. */
  liveness?: Liveness;
  required?: boolean;
}

export interface GateResult {
  id: string;
  ok: boolean;
  why?: string;
  skipped?: boolean;
  checked?: number;
  code?: number | null;
  output?: string;
}

export interface Stage {
  id: string;
  label: string;
  /**
   * OVERLAP GROUP. A maximal run of CONSECUTIVE stages carrying the same
   * `pipeline` name is executed with per-unit progression: a unit may be
   * dispatched for stage k+1 as soon as ITS OWN work is finished at stage k,
   * while other units are still at stage k.
   *
   * What this does NOT relax: gates. Every member stage's gates run at the
   * GROUP EXIT, together, once, with nothing in flight — the level join. A
   * gate never becomes per-unit, because a gate that silently narrows its
   * scope is indistinguishable from a gate that passed.
   *
   * The stage barrier still applies between different groups and around every
   * stage that declares no `pipeline`.
   */
  pipeline?: string;
  /**
   * The dispatcher lane this stage's plans use. REQUIRED on a pipelined stage
   * and unused elsewhere: two stages of one group can be live at the same
   * moment, and `concurrency` alone would then admit twice the lane's real
   * cap (two alpha stages at 3 each = 6 Alphas against a dispatcher cap of 3).
   * The group budget for a role is the largest `concurrency` any member
   * declares for it — they mirror one cap, so the max IS the cap.
   */
  role?: string;
  /**
   * Units that must advance TOGETHER, for a stage whose dispatch covers several
   * at once. A group Alpha owns up to three batches and its single dispatch
   * claims all of them, so it may not start until every batch it will cover is
   * finished at the previous stage — otherwise it declares coverage of work
   * that has not happened.
   */
  cohort?: (ctx: Ctx, u: Unit) => Unit[];
  /** The units this stage owes. */
  units?: (ctx: Ctx) => Unit[];
  /** Which result files belong to this stage. Build it with `resultPattern`
   *  rather than by hand — thirteen hand-written regexes drifted from the
   *  dispatcher's naming rule. */
  pattern: RegExp;
  labelFor?: (u: Unit) => string;
  /** The file each unit owes. A result is not an artifact: a lane can exit zero
   *  having written its output to the wrong path. */
  artifacts?: (ctx: Ctx, u: Unit) => string | string[] | null;
  concurrency?: number;
  maxAttempts?: number;
  fallbackCount?: number;
  plan?: (ctx: Ctx, pending: Unit[]) => Plan[];
  gates?: (ctx: Ctx) => Gate[];
  /** Why this stage needs no gate, and what checks it instead. A stage with no
   *  gate cannot fail; saying so has to be deliberate. The terminal stage may
   *  not waive — see `validateStages`. */
  gatesWaived?: string;
  escalate?: (args: { ctx: Ctx; units: Unit[]; executor: unknown }) => Promise<void> | void;
  /**
   * Turn a gate failure into repair work.
   *
   * This is the loop that closes a build. A gate says what is wrong; this hook
   * dispatches whoever can fix it; the gate re-runs when the dispatches finish
   * and either passes or names what is still wrong. Bounded by `maxFixRounds`,
   * because a repair that never converges must become a blocker a person reads,
   * not an infinite spend.
   */
  onGateFailure?: (args: { ctx: Ctx; failure: GateResult; executor: any; stage: Stage; round: number }) => Promise<void> | void;
  /** Repair rounds allowed before a failing gate becomes a hard blocker. */
  maxFixRounds?: number;
}

export interface Config {
  run: string;
  repo: string;
  stateDir: string;
  dispatchDir: string;
  stages?: string;
  argv: string[];
  concurrency?: number;
  /** Absent means no global limit. The per-stage caps mirror the dispatcher's
   *  own lane caps, which are the real constraint. */
  globalConcurrency?: number;
  maxAttempts?: number;
  reportIntervalMin?: number;
  pollSec?: number;
  defaultTimeoutSec?: number;
  coversMap?: Record<string, Unit[]>;
  /** Shell command listing live dispatches, or false to disable adoption. */
  adoptCommand?: string | false;
  exitOnBlocked?: boolean;
  blockedTickLimit?: number;
}

export interface DispatchRecord {
  stage: string;
  role: string;
  label: string;
  covers: Unit[];
  /** The retry-policy counter. `State.recordDispatchStart` is the only thing
   *  that increments it, and the owner's `retry` command is the only thing that
   *  resets it. */
  attempts: number;
  /** `null` when the dispatch never recorded an end — the engine process died
   *  while it was in flight. That case is why a retry cap must key on attempts,
   *  not on exit status, and why `null` must never be read as "failed". */
  lastExitOk: boolean | null;
  startedAt: string | null;
  endedAt: string | null;
  /** The same number as `attempts`, stamped at start for the status line.
   *  Written only by `recordDispatchStart`, from the value it computes, so the
   *  two cannot disagree at the moment a dispatch begins. */
  attempt: number;
}

export interface StageState {
  enteredAt: string;
  gatesPassedAt: string | null;
  doneAt: string | null;
  /** Repair rounds spent on a failing gate. Bounded by `Stage.maxFixRounds`. */
  fixRounds: number;
  /** Set once the repair budget is spent, so the notice is given once. */
  repairExhaustedAt?: string | null;
  skipped?: boolean;
}

export interface Blocker { stage: string; message: string; at: string; }

export interface StateData {
  version: number;
  run: string | null;
  startedAt: string | null;
  finishedAt: string | null;
  stage: string | null;
  dispatches: Record<string, DispatchRecord>;
  stages: Record<string, StageState>;
  blockers: Blocker[];
  lastReportAt: string | null;
  paused: boolean;
}

export interface StageStatus {
  done: boolean;
  unitsDone?: boolean;
  gatesPassed?: boolean;
  why: string;
  missing: Unit[];
  mode?: 'coverage' | 'count' | 'skip';
}

export interface RunningEntry {
  label: string;
  covers?: Unit[];
  attempt?: number;
  elapsed?: string;
  external?: boolean;
}

export interface Snapshot {
  run: string;
  done: boolean;
  paused: boolean;
  stage: Stage | null;
  stages: Array<{ id: string; label: string; done: boolean; why: string; current: boolean }>;
  running: RunningEntry[];
  blockers: Blocker[];
  startedAt: string | null;
  elapsed: string;
  controlPath: string;
}

export interface InvokeResult {
  ok: boolean;
  code: number | null;
  stdout?: string;
  stderr?: string;
  error: string | null;
}

export interface Adapter {
  name: string;
  describe: (vars: Record<string, unknown>) => string;
  /** `timeoutMs` is enforced by the adapter (SIGTERM the process group, then
   *  SIGKILL after `killGraceMs`); it resolves ok:false rather than hanging.
   *  An adapter that ignores it recreates the hung-lane-forever failure. */
  invoke: (vars: Record<string, unknown>,
    opts?: { signal?: AbortSignal; timeoutMs?: number; killGraceMs?: number }) => Promise<InvokeResult>;
}

export type ControlCommand = 'pause' | 'resume' | 'skip' | 'retry' | 'stop' | 'report';
export interface Control { command: ControlCommand | null; stage?: string; unit?: string; error?: string; }
