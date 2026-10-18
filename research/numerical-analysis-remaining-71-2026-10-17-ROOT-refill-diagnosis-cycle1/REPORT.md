# Native Step-1 refill diagnosis — cycle 1

Observed 2026-10-17 12:47–12:48 UTC. Read-only diagnosis; no control files, canonical sources, native state, dispatch evidence, sessions or processes changed. No tests, hashing, recertification, gates or acceptance performed.

## Finding

The controller is alive and ticking. Refill is silently deferred because the actual scheduling graph encounters malformed JSON in `research/numerical-analysis-remaining-71-2026-10-17-batch-49.pages.json`, line 151, column 198. The statement contains unescaped LaTeX backslashes (including `\mathcal`). Python JSON parsing reports `Invalid \escape`; the actual native `prerequisiteBatches` call reports `SyntaxError: Bad escaped character in JSON at position 10746 (line 151 column 199)` from `frontier-snapshot.mjs:107`.

The read-only actual graph call took 72 ms before failing. This is not an expensive preflight or process-reconciliation wait. At 12:48:23.972 the native controller emitted a normal report with 25 running workers. PID 1366306 remained alive in epoll wait; paused=false. Its only current blocker is the historical Step-1 owner battery hold, not a current unit-prerequisite blocker.

## Exact native path

`dispatchStage` obtains the full pending list, removes native/adopted running units and applies exclusive-cohort protection. It calls `unitReadiness` before slicing slots. `unitReadiness` constructs a fresh shared projected scheduling context and calls `prerequisiteBatches` for all 71 owed units. `loadStep3` JSON-parses every current page manifest, so invalid batch49 input stops the graph before selection. `executor.mts:731–737` catches any SyntaxError while `active.size > 0` and returns `{ready: [], problem: null, deferred: true}`. `dispatchStage` then returns at its deferred check, before slot accounting and planning. Thus there is no new blocker or dispatch event. This guard intentionally protects concurrent writes, but malformed persisted JSON receives the same treatment as a brief truncate/write race.

## Capacity and pending work

Native stage concurrency is MAX_RUN_BATCHES=128. The default globalConcurrency is 30; run-local config only selects `owner-supervised-construction.mts` and does not override that cap. The stage/role budget is 128; the global cap controls this run at 30. At the native 12:48:23 report, 25 workers were running: 23 initial authors and two native refresh continuations, leaving five global slots. All live native author processes have disjoint own-batch author assignments; Step1 does not declare an exclusiveCohort callback. The graph must nevertheless remain valid before selecting them.

Thirteen initial units have never been attempted: 36, 37, 42, 43, 57, 59, 60, 64, 67, 68, 69, 70, 71. The last genuine scheduling-level artifact is dated 12:40:18.993 UTC. Its historical pending order is:

- Level 3: 42, 43, 57, 60, 67, 68, 69, 70.
- Level 4: 36, 37, 64, 71.
- Level 5: 59.

That order is historical context only. Current native selection must recompute from all actual current manifest/carrier dependencies after JSON repair; the diagnosis grants no authorization to reuse stale scheduling evidence.

## Smallest resolution

Notify the genuine active batch49 author of the exact invalid JSON statement and require valid JSON escaping in its exclusively owned manifest. Do not race that writer with owner edits. Once the author repairs the input, the existing controller will recompute the graph on its next normal tick and can fill all five free slots. No code change or reload is needed for this input defect. Preserve strict record/readiness parsing, native result evidence, exclusive writers and every full gate. If silent persistent-deferral observability is later improved, keep the same fail-closed scheduling decision and merely expose the underlying parse diagnostic; that is not needed to unblock current authoring.
