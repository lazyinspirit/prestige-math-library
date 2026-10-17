# Read-only scheduler performance diagnosis

Run: `numerical-optimization-dynamics-2026-10-16`. Investigation: 2026-10-16 UTC. No engine, source, item, manifest or runtime edits; no gates, tests, restarts or process controls. Only this evidence file was written.

## Confirmed synchronous work

The own controller PID 536719 was observed at elapsed `02:30:13`, accumulated CPU `01:31:07` (60.6%). Root observed genuine result 49 preceding its state end stamp and slow full-status/refill. The source explains how filesystem-visible results can precede controller bookkeeping: `start()` runs `recordDispatchEnd` in the adapter promise continuation; `adapters/exec.mts` resolves from the child close callback. Synchronous scans prevent those callbacks/continuations and launch timers from receiving an event-loop turn. This is a source-based mechanism, not a sampled CPU profile attributing every minute.

- `Executor.stageStatus` evaluates `stage.artifacts` for **every owed unit**. At this stage that means all 107 pairs, including live/uncovered pairs. Each calls `scaffoldArtifacts`, which calls `scaffoldSnapshot`.
- Each `scaffoldSnapshot` rereads the research directory (about 140,669 files in the observed tree), selects and sorts current run manifests/coverage, and stats those files. If any manifest/coverage stamp changes it reloads the full frontier and resets all readiness/input caches. Otherwise it restats every accumulated consumed item.
- When an alias index exists, every snapshot lookup also calls `scaffoldAliasStamp`: enumerate/sort/stat the entire item inventory (about 31,616 files observed). An unrelated new carrier/alias can invalidate the index. This cost is conditional; the measured samples below did **not** exercise this branch, so it is not claimed as their dominant expense.
- After global invalidation, `step1Decision` rehashes actual transitive item inputs through strict YAML parsing. Even one batch may consume over a thousand current item carriers. Mutating unrelated live manifests can force that work again on the next unit.
- Normal Step-1 tick paths include full `stageStatus` in `currentStage`, before `dispatchStage`, and at the post-dispatch join. Stalemate recovery additionally invokes `unitsComplete`; prerequisite validation can invoke it again. These calls do not share a short-lived status-pass result.
- `snapshot()` calls `currentStage()` and then `stageStatus()` again for the active stage. `reporter.report(this.snapshot(), {force:false})` eagerly builds both even when `Reporter.report` immediately returns because its timer is not due. The run-loop boundary can call `currentStage()` once more before waiting. The exact number varies with blockers and state changes; this is not an assertion that every branch runs each tick.
- A separate CLI `status` process starts cold and invokes `ex.snapshot()`, explaining why status itself pays repeated full active-stage scans. It shares no warmed controller cache.

## Isolated measurements

A separate read-only child process imported the native stage, instrumented its own `node:fs` synchronous calls, and evaluated only three individual artifact predicates. It did not construct an Executor or control the live run.

| Predicate | Wall time | Research reads | Item reads | Research stats | Item stats |
| --- | ---: | ---: | ---: | ---: | ---: |
| batch 3, first call | 1,460 ms | 188 | 1,352 | 175 | 1,352 |
| batch 3, immediately repeated | 1,893 ms | 188 | 1,352 | 175 | 1,352 |
| batch 6, next call | 1,114 ms | 44 | 257 | 185 | 1,609 |

Both batch-3 calls performed two research-directory enumerations, consistent with a fresh frontier reload after intervening live manifest/coverage changes. Batch 6 performed one. All three returned no missing artifacts. These samples demonstrate expensive repeated synchronous work even without a global alias scan. They do not extrapolate a guaranteed duration for all 107 units or substitute for a CPU profile.

## Smallest safe optimization proposal

1. Guard optional reporting **before** constructing `snapshot()`: call it only when forced or `reporter.due()`. The reporter retains its own due check. Explicit status, forced blocker reports and gate decisions remain current. This removes work that presently produces no report and changes no completion predicate.
2. Give each synchronous artifact evaluation pass an explicit short-lived generation. `stageStatus` and `unitsComplete` each create a new pass; never reuse a token across an await, timer, worker-completion boundary, later status call, CLI process or run. Within that pass, share the freshly loaded manifest snapshot, consumed-item stamp scan and conditional global alias inventory stamp, rather than repeating them for each batch. Keep actual per-item readiness record identity/receipt stamps and every actual dependency/alias check.
3. Because other processes can write during a synchronous pass, **a token alone is insufficient**. Bind the exact manifest/coverage/plan, consumed carrier and readiness receipt stamps plus the whole canonical/alias inventory when alias resolution is used. At the pass boundary compare those bindings again. A changed/missing/new input invalidates all affected cached decisions: discard/defer that completion answer and reevaluate with a fresh generation. Never stamp a stage complete, release completion-dependent consumers or retire a substantive blocker using an unstable binding. No time-to-live or watch-event-only shortcut is adequate. Current code already observes a mixed sequence of per-unit snapshots; the proposed coherent pass must improve that behavior rather than grant stale success. Status-only display may report a transient changing-input condition without certification.
4. Optional narrow pruning: in coverage mode, an uncovered unit already fails completion; evaluate artifacts only for covered units and retain uncovered units in the missing set. `unitsComplete` already filters by coverage before its artifact walk. Keep legacy count-mode behavior unchanged. A dead worker with a genuine success receipt remains covered, so its missing artifacts still enter normal stalemate detection. Do not skip covered units merely because they have a live writer; receipt/artifact integrity and writer guards remain independent conditions.

Start with (1), which has the least semantic surface, and one explicit artifact-pass implementation rather than several ad hoc long-lived caches. Completion/repair readiness, missing canonical suppliers, alias ambiguity, canonical supersession, all writer/adoption guards, strict post-drain metadata and all gates remain mandatory. No implementation or validation result is claimed here; root owns any authorized fix and native reload.
