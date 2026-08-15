## Stage transition on run `frontier-14`

The stage table reports **`1-2-scaffold` cleared**. The run is now on
**`3-review`**, and nothing has been dispatched for it yet.

You were dispatched by `run-drive.mjs` the moment the transition was
detected. No orchestrator reviewed this and none needs to. Your job is to
fire the next dispatch, not to report that it is time to fire it.

### What `run-supervisor.mjs --advance` says

```
1-2-scaffold complete, gates green.
  NEXT: orchestrator adjudicates step 3 — dispatch role=orchestrator with the step-3 decisions task
```

### ALREADY DISPATCHED — do not start a second copy of any of these

Some of this stage may already be in flight, dispatched by hand before the
driver took over. Check this list against what `--advance` tells you to do,
and dispatch only the remainder.

```
  alpha-step3-b                      finished ok=true
  beta-batch-1                       finished ok=true
  beta-batch-2                       finished ok=true
  beta-batch-3                       finished ok=true
  beta-batch-4                       finished ok=true
  beta-batch-5                       finished ok=true
  beta-batch-6                       finished ok=true
  beta-fix-batch-4                   RUNNING (prompt written, no result yet)
  beta-fix-batch-5                   RUNNING (prompt written, no result yet)
  beta-fix-batch-6                   RUNNING (prompt written, no result yet)

  live dispatch processes right now: 3
```

A `RUNNING` row means the agent is working and its result has not landed.
Zero live processes with a `RUNNING` row means that lane died without
writing a result — that is the one case worth a single retry.

### Task files written but not yet dispatched

These were prepared for a stage and never fired. If `--advance` calls for a
dispatch and a matching task file is sitting here, use it — do not write a
new one and do not re-derive the work it already specifies.

```
  research/frontier-14-alpha-a.task.md
  research/frontier-14-alpha-b.task.md
  research/frontier-14-beta-1.task.md
  research/frontier-14-beta-2.task.md
  research/frontier-14-beta-3.task.md
  research/frontier-14-beta-4-fix.task.md
  research/frontier-14-beta-4.task.md
  research/frontier-14-beta-5-fix.task.md
  research/frontier-14-beta-5.task.md
  research/frontier-14-beta-6-fix.task.md
  research/frontier-14-beta-6.task.md
```

### Your contract

Read `briefs/supervisor.md` — it is your full contract and it wins over
this file. In short: you judge only whether a stage is finished, whether a
blocker is real, and whether a dead lane is worth one retry. You never
judge mathematics, and you never touch `items/`, `library/` or
`plan-spec.json`.

Verify from disk before you dispatch. A result file counts only when it
parses and carries `ok: true` — on frontier-13, seven refuter dispatches
produced prompt files and no results while a report tabled all eleven as
dispatched, and 74 dispositions went silently unwritten. Count `ok:true`,
not prompt files, and not what a report claims.

**Pass `--covers` on every dispatch you fire** — the comma-separated units
of work it owns (batch numbers, or page ids where a stage is owed per page).
Stage completion is by coverage, not by agent count, so a dispatch that does
not declare its units leaves them missing and the stage will not advance. If
a dispatch genuinely cannot declare them, add the mapping to
`research/<run>-covers.json` in the same action.

If a lane is genuinely dead, retry it **once** and say so. If the stage is
not actually finished, say which artifact is missing and exit without
dispatching — a false advance is worse than a wait.

**No permission prompts of any kind**, from you or anything you dispatch,
including inside an `&&` chain. If something truly cannot proceed, record a
blocker in your report. That is the escape hatch.
