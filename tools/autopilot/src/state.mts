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

  recordDispatchStart(key: string, meta: Partial<DispatchRecord>): DispatchRecord {
    const prior = this.data.dispatches[key];
    this.data.dispatches[key] = {
      ...(meta as DispatchRecord),
      attempts: (prior?.attempts ?? 0) + 1,
      startedAt: new Date().toISOString(),
      endedAt: null,
      lastExitOk: null,
    };
    this.save();
    return this.data.dispatches[key];
  }

  recordDispatchEnd(key: string, ok: boolean): void {
    if (!this.data.dispatches[key]) return;
    this.data.dispatches[key].endedAt = new Date().toISOString();
    this.data.dispatches[key].lastExitOk = ok;
    this.save();
  }

  addBlocker(stageId: string, message: string): void {
    this.data.blockers.push({ stage: stageId, message, at: new Date().toISOString() });
    this.save();
  }

  get paused() { return this.data.paused === true; }
  set paused(v) { this.data.paused = Boolean(v); this.save(); }
}

export const statePath = (dir: string): string => join(dir, 'state.json');
