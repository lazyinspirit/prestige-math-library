# Native Step2 retry sequence — read-only inspection

Actual snapshot: `state.stage=2-scope-review`, `paused=true`, `pauseAfter=2-scope-review`, `gatesPassedAt=null`, `doneAt=null`, `fixRounds=0`, no per-item gate-attempt records and no failed/unfinished dispatch records. The controller lock PID existed during inspection. No new controller start is needed for that observed live process.

The current owner request is `58faf7a7-3dae-45b8-9396-e4bae832b9f7`, group `2-scope-review`. The previous permission belongs to `9be89281-7f6f-4a9a-885d-2a2badf5c406` and was consumed at `2026-10-21T04:45:58.189Z`; it cannot authorize another battery. The new request was written automatically after failure. The misleadingly named `inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json` explicitly has `stage=2-scope-review`, records the actual first failure plus advisories, and is written by the shared `holdStep1` hook. Its name/reason does NOT mean Step1 must be rerun or its history reset.

First integrate every source/tool/metadata/contract/boundary repair and let all actual writers drain. Recompute the current exact proof mirrors/metadata under root ownership. Do not reuse old permission, gate passes or source bindings. The native group still defines133 gates; the full next battery must run from its beginning, including merge-contracts, rather than rerunning only proof-contract.

The strictly smallest supported execution for THIS observed owner-terminal state is a fresh preparation followed by one native resume:

```sh
node tools/owner-gate-supervision.mjs --run inverse-problems-knot-theory-all-109-2026-10-19 --state-dir .autopilot/inverse-problems-knot-theory-all-109-2026-10-19 --escalations-resolved
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts resume --run inverse-problems-knot-theory-all-109-2026-10-19 --state-dir .autopilot/inverse-problems-knot-theory-all-109-2026-10-19
```

The first command is the actual fresh dependency-ordered formatting/metadata/current-input preparation and writes a new permission for the current request. It must succeed while paused and after all integration. The second command is handled on the next engine tick; every control command increments `stateVersion`, so native resume itself invalidates the cached failed-battery version and rearms the full battery. No repair budget is spent or exhausted here, so an explicit retry is not necessary for this state.

If root wants the documented explicit retry event, use this conservative native variant instead:

```sh
node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts retry --run inverse-problems-knot-theory-all-109-2026-10-19 --state-dir .autopilot/inverse-problems-knot-theory-all-109-2026-10-19
```

Wait until the controller consumes that command and records `retry-armed` while the state remains paused. Then perform the same fresh preparation command above, then the same resume command. There are currently zero nonsuccess dispatches/repair-round/per-item records to reset; successful dispatch history is skipped by the native retry handler. The retry command does not unpause or clear `pauseAfter`. Do NOT issue retry and resume back-to-back without consumption: both write the single `control.json` slot, so the latter can overwrite the former.

Keep `pauseAfter=2-scope-review` armed throughout. On actual successful group completion the native engine stamps the stage and fires its pause before any next-stage dispatch, clearing the one-shot marker only as it enters the paused state. Do not send another resume after the successful Step2 pause: that would authorize Step3. Do not edit state, manually mark gates passed, delete failure records or buy another native review/repair round.

Source inspection: `owner-gate-supervision.mjs` hold/consume/recertify; `executor.mts` handleControl/retry, failed-battery cache, owner-recertify branch and pause-after handling; CLI control-command writer; shared control single-slot consume logic; live wrapper and current Step2 gate definition. No commands in this note were executed by this reviewer.
