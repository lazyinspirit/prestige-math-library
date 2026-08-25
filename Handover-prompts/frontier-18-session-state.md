# frontier-18 — session state at 2026-08-24T15:58Z

`.autopilot/events.jsonl` and `.autopilot/status.md` are the authority for run
state. This records what is NOT recoverable from disk.

## Where the run is

**Step 7, judging.** Steps 0–6 all closed with gates green (6c's 31 gates passed
at 14:50:24). 6,947+ items on disk, 796 in this level's scope.

**The engine is PAUSED and must stay paused while the manual sweep runs.**

```
manual sweep: pid 166311
  node tools/judge-sweep.mjs --ledger research/frontier-18-judge.jsonl \
    --cost research/frontier-18-judge-cost.jsonl --items <741 ids>
  item list: <scratchpad>/both-todo.txt, regenerate with <scratchpad>/todo.mjs
```

Both lanes, 741 items that still owe a verdict. Terra owes 716, DeepSeek 661.
Each lane skips what it already has. Expect a ~15–20 min serial context-hash
pre-pass before any call is spent.

**WHY THE ENGINE IS PAUSED.** `7-judge` has no result file — attempts 1, 2 and 3
were all killed — so on resume it dispatches its own
`judge-sweep --pages <all A pages>`, a second process sharing the same 14-slot
lane pools, and it would judge items already judged. Decide how to handle that
stage before resuming.

## The judge lineup, and the Sonnet rows

`DEFAULT_LINEUP = 'deepseek+terra'` (owner, 2026-08-25). Terra runs at `xhigh`
with the explicit 1M window; no transport change was needed because `judge.mts`
routes by runner. Caps are **14 per lane, 28 combined**.

The ledger holds **116 `claude-sonnet-4-6` rows from the previous lineup**. Under
the unchanged workflow they are append-only evidence and satisfy no coverage, so
Terra is judging those items too — the owner agreed to that (76 items, ~10%
extra) rather than change the workflow.

Rejection rates so far, too small to conclude from: Sonnet 4%, DeepSeek ~18%,
Terra ~17%.

## Owner corrections this session — these bind

- **Answer size matches question size.** A yes/no question gets one line. Added
  to `~/.claude/CLAUDE.md` under Response style at the owner's instruction, after
  a wall of text in reply to a binary question. The owner has since had to repeat
  it: *"I want straight, direct answers, not walls of text."*
- **A run-scoped ask is not a workflow change.** The owner said "do not discard
  verdicts from sonnet 4.6"; I built `LANE_CREDIT` into the registry and three
  tools. Response: *"applies to this run only, i never wanted you to alter the
  workflow"*, then *"revert all changes"*. All of it is reverted — no residue,
  370 tests pass. Memory: `run-scoped-asks-are-not-workflow-changes`.
- **Monitor means report, not act** (standing, from earlier). Diagnose fully,
  bring options, stop.
- Pre-authorised without asking: lower caps on a breaking concurrency defect
  (alpha 4→3, beta 12→9); stagger dispatches 3s on a stampede.

## The step-6 rebuild — BUILT, TESTED, NOT LIVE

Owner-specified redesign. Nothing imports it; `mathlib.mts` is untouched because
it hot-reloads. **Cutover instructions: `tools/autopilot/stages/STEP6-CUTOVER.md`.**

New routing: reader-touched → group Alpha; untouched-and-refuter-flagged → group
Alpha; untouched-and-clean → straight to the gates. Refuters become a real stage
with computed scope and a gated JSON artifact. 6c narrows to cross-group edges
plus a build-or-drop decision on every forward reference. Repair budgets become
per (gate, item), three tries. No batch waits on a sibling between step 5 and 6b.

Files: `tools/autopilot/stages/mathlib.step6.mts`, `tools/step6-scope.mjs`,
`tools/cross-group-edges.mjs`, `briefs/refuter.md` (rewritten),
`briefs/reader.md` (rewritten), `briefs/schemas/refute-report.json`, three task
files under `briefs/tasks/`, `tools/autopilot/test/step6-routing.test.mts`
(11 tests). `executor.mts` carries `perItemFixBudget`, opt-in and inert for this
run.

Measured on frontier-18: **zero** cross-group edges, 8 forward references. Of
6,060 dependency edges, 2,246 are inside their own batch and 3,814 point at
published content — the last group moves to the 6a reader, which is the one place
coverage thins.

## Uncommitted

Nothing is committed. ~25 modified tools/docs plus the step-6 files above, the
`1-drift` stage work, `drift-apply.mjs`, `plan-manifests.mjs`, and this run's
research artifacts and items.

## Next action

Watch the sweep. When it finishes, decide the `7-judge` stage question above
before resuming the engine.
