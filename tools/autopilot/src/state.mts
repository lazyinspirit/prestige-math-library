// Durable run state.
//
// The engine must survive its own process dying. A build runs for many hours
// across dozens of agent dispatches; if a crash or a laptop sleep loses the
// record of what already ran, the recovery is either "redo everything" (hours
// of tokens) or "guess" (worse). So every state change is written through to
// disk immediately, atomically, and the engine reconstructs itself from that
// file plus the target repo's own artifacts on restart.
//
// The file is a cache, never the authority. Coverage, gate results and stage
// completion are always recomputed from the target repo's disk state — this
// only records what the ENGINE did: which dispatches it started, which it
// retried, when it last reported. If the two ever disagree, disk wins.

import { readFileSync, writeFileSync, renameSync, mkdirSync, existsSync } from 'node:fs';
import type { StateData, DispatchRecord, StageState } from './types.mts';
import { dirname, join } from 'node:path';

/** A FUNCTION, not a constant.
 *
 *  This was a frozen-looking object literal spread with `{ ...EMPTY }`, which
 *  is a shallow copy: every State instance shared one `blockers` array and one
 *  `dispatches` object. Two runs in the same process saw each other's failed
 *  lanes and each other's retry counts, and the symptom was a stage blocking on
 *  a unit that belonged to a different run entirely. Returning a fresh object
 *  each call is the whole fix, and the reason to write it as a function is that
 *  a future field will be a container too and nobody will remember this. */
const empty = (): StateData => ({
  version: 1,
  run: null,
  startedAt: null,
  finishedAt: null,
  stage: null,
  /** dispatchKey -> { stage, role, label, covers, attempts, lastExitOk, startedAt, endedAt } */
  dispatches: {},
  /** stageId -> { enteredAt, gatesPassedAt, doneAt, fixRounds } */
  stages: {},
  /** append-only human-readable trail; the full record is events.jsonl */
  blockers: [],
  lastReportAt: null,
  paused: false,
  /** `<gateId>\0<itemId>` -> tries that (gate, item) pair has had. See
   *  StateData.gateAttempts. A container, so it is created fresh per instance
   *  for the same reason `blockers` and `dispatches` are. */
  gateAttempts: {},
});

export class State {
  path: string;
  data: StateData;

  constructor(path: string) {
    this.path = path;
    this.data = existsSync(path) ? this.#load() : empty();
  }

  #load(): StateData {
    try {
      const parsed = JSON.parse(readFileSync(this.path, 'utf8'));
      // A truncated write from a hard kill must not take the run down with it.
      // An unreadable state file costs re-derivation from disk, not correctness.
      return { ...empty(), ...parsed };
    } catch {
      return empty();
    }
  }

  /** Write through a temp file so a kill mid-write cannot leave a half-parsed
   *  state file. rename(2) is atomic within a filesystem. */
  save() {
    mkdirSync(dirname(this.path), { recursive: true });
    const tmp = `${this.path}.tmp`;
    writeFileSync(tmp, JSON.stringify(this.data, null, 2) + '\n');
    renameSync(tmp, this.path);
  }

  init(run) {
    // A state dir belongs to ONE run. Without this check, `start --run
    // frontier-15` against a dir carrying frontier-14 inherited the finished
    // run's stage records — gatesPassedAt included — and read as already done.
    if (this.data.run && run && this.data.run !== run) {
      throw new Error(`state dir ${this.path} belongs to run "${this.data.run}", not "${run}" — `
        + 'archive .autopilot/ or pass a fresh --state-dir; resuming another run\'s state '
        + 'reads its cleared stages as this run\'s progress');
    }
    if (!this.data.run) {
      this.data.run = run;
      this.data.startedAt = new Date().toISOString();
    }
    this.save();
    return this;
  }

  stage(id: string): StageState {
    if (!this.data.stages[id]) {
      this.data.stages[id] = { enteredAt: new Date().toISOString(), gatesPassedAt: null, doneAt: null, fixRounds: 0 };
      this.save();
    }
    return this.data.stages[id];
  }

  dispatch(key: string): DispatchRecord | null { return this.data.dispatches[key] ?? null; }

  /** `attempts` is the RETRY-POLICY counter and `attempt` is what a human reads
   *  in the status line. They are one number, and it is computed HERE.
   *
   *  The caller used to compute `attempt = (prior?.attempts ?? 0) + 1` for its
   *  own meta and this method computed `attempts` again from the same prior —
   *  two spellings of one quantity, one letter apart. They agreed until the
   *  owner's `retry` command reset `attempts` to 0 to re-arm a lane, at which
   *  point the record read `attempt: 2, attempts: 0` and the next dispatch
   *  announced itself as "attempt 1" of what was really a third try. Stamping
   *  both from the value this method computes makes them unable to disagree. */
  recordDispatchStart(key: string, meta: Partial<DispatchRecord>): DispatchRecord {
    const prior = this.data.dispatches[key];
    const attempts = (prior?.attempts ?? 0) + 1;
    this.data.dispatches[key] = {
      ...(meta as DispatchRecord),
      attempt: attempts,
      attempts,
      startedAt: new Date().toISOString(),
      endedAt: null,
      lastExitOk: null,
    };
    this.save();
    return this.data.dispatches[key];
  }

  /** ALWAYS stamps both fields, on both the success and the failure path — the
   *  executor calls this from `.then` AND `.catch`, before it notifies.
   *
   *  A record left at `endedAt: null, lastExitOk: null` therefore means one
   *  thing only: the engine process died while that dispatch was in flight, so
   *  nothing was alive to write the ending. That state is not repairable from
   *  inside a process that no longer exists, and it is harmless — nothing reads
   *  `endedAt`, and `lastExitOk: null` is the honest value for "unknown". On
   *  restart the agent is adopted and completion is recomputed from the repo's
   *  own artifacts, which is the authority this file explicitly is not. */
  recordDispatchEnd(key: string, ok: boolean): void {
    if (!this.data.dispatches[key]) return;
    this.data.dispatches[key].endedAt = new Date().toISOString();
    this.data.dispatches[key].lastExitOk = ok;
    this.save();
  }

  /** Add a blocker unless one with the same stage+key is already live.
   *  Returns whether it was added, so the caller notifies exactly when the
   *  trail grew. `key` defaults to the message; pass a stable key when the
   *  message embeds variable text (counts, ids, timeouts) — a gate failing
   *  the same way with a different number used to stack a fresh blocker
   *  each pass. */
  addBlocker(stageId: string, message: string, key?: string): boolean {
    const k = key ?? message;
    if (this.data.blockers.some((b: any) => b.stage === stageId && (b.key ?? b.message) === k)) return false;
    this.data.blockers.push({ stage: stageId, message, key: k, at: new Date().toISOString() });
    this.save();
    return true;
  }

  get paused() { return this.data.paused === true; }
  set paused(v) { this.data.paused = Boolean(v); this.save(); }
}

export const statePath = (dir: string): string => join(dir, 'state.json');
