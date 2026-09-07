# Build and operations

[CLAUDE.md](CLAUDE.md) defines repository rules; [SCHEMA.md](SCHEMA.md) defines
content. The TypeScript engine in `tools/autopilot/src/` owns dispatch,
retries, checks, and transitions. Agents perform assigned mathematical work;
there is no LLM orchestrator. Stage definitions in
[mathlib.mts](tools/autopilot/stages/mathlib.mts) and
[mathlib.step6.mts](tools/autopilot/stages/mathlib.step6.mts) are authoritative.

## Commands and run identity

Run from the repository root. In the examples, define this shell helper and
replace RUN with the actual run name:

```bash
autopilot() { node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts "$@"; }

autopilot frontier
autopilot frontier --next --max-pairs 27
autopilot plan --run RUN --pairs next --max-pairs 27 --state-dir .autopilot/RUN
autopilot doctor --run RUN --state-dir .autopilot/RUN
autopilot start --run RUN --state-dir .autopilot/RUN --detach
autopilot status --run RUN --state-dir .autopilot/RUN
```

Use the same `--state-dir` for every command targeting a run. Its default is
`.autopilot`; each state directory belongs to one run. An old root state file
or historical RESUME document may describe a different run. Verify the run
against the controller's command line/lock, state files, and Git history.

`start` validates the stages and runs doctor before dispatching. Doctor checks
command flags, tasks, placeholders, output schemas, scope, attempt arguments,
defect coverage, and judge-runner launch. It does not establish account quota
or mathematical correctness.

The selected state directory contains:

| File | Purpose |
|---|---|
| `state.json` | Attempts, stage/check timestamps, repair budgets, blockers, pause state |
| `events.jsonl` | Append-only events |
| `status.md` | Latest report; use `status` to recompute completion |
| `autopilot.log` | Detached controller output |
| `control.json` | Next control command, consumed by the controller |
| `controller.lock` | Controller ownership |
| `stopped` | Stop marker respected by the watchdog |

The bundled `bin/watchdog.sh` only targets the default `.autopilot` directory
and detects controllers without distinguishing runs. Do not use it for a
custom state directory or multiple concurrent runs.

### Selection and planning

`frontier` shows dependency waves from page publication status; it accepts
`--categories`. `frontier --next` selects unfinished pairs across categories
in plan order. Both A and B pages must independently have strictly more than
95% of same-category prerequisites published. Zero prerequisites qualify;
exactly 95% does not. Partner A/B edges and cross-category edges are excluded.

Planning caps the run at 27 pairs; preview can use a larger explicit cap.
Selection does not pull unpublished prerequisites into the run.
For an explicit `--pairs a-page-id,...` list, `--allow-in-run-dependencies`
permits missing prerequisites supplied by earlier pairs in that run. The scope
ledger records this exception and drift review rechecks it.
`--allow-unbuildable` records an intentional stop at Stage 1.

Planning generates manifests, covers, scope, tasks, and drift inputs.
Drift review may change prerequisite edges, order, or scope; `1-drift-apply`
materializes approved changes before scaffolding. Same-scope checkpoint recovery
preserves populated inventories and batch identities. Scope-changing recovery
refuses populated manifests. Use generators rather than editing their outputs;
`tools/run-tasks.mjs --run RUN` rewrites generic tasks from `briefs/tasks/`.

## Steps and stages

| Step | Stage IDs | Required result |
|---|---|---|
| 0 — plan | `1-drift`, `1-drift-apply` | Reviewed prerequisites and synchronized scope/tasks |
| 1 — scaffold | `1-scaffold` | Source-backed manifests, coverage, and fetch evidence |
| 2 — assign | `2-assign` | Disjoint Alpha groups covering every batch, at most three batches each |
| 3 — review | `3-review`, `3-fix`, `3-recheck` | Sufficient verdict for every pair |
| 4 — materialize | `4-splice`, `4-baseline` | Synchronized item inventory and pre-author snapshot |
| 5 — author | `5-author` | All items/pages/contracts; full checks pass at the Step 6A join |
| 6A — read | `6a-baseline`, `6a-read`, `6a-split`, `6a-refute`, `6a-collect` | Independent reading, refutation, and routed findings |
| 6B–D — close | `6b-prepare`, `6b-adjudicate`, `6b-baseline`, `6c-edges`, `6c-cross`, `6d-close` | Group/cross-group resolution, impact evidence, Step 6 receipt |
| 7 — judge | `7-scope`, `7-judge` | Frozen-text judgments and group reader digests |
| 8 — repair | `8-baseline`, `8-scope`, `8-adjudicate`, `8-preflight`, `8-rejudge`, `8-close`, `8-final`, `8-freeze` | Authorized fatal repairs and current certification |
| 9 — certify changes | `9-scope`, `9-scope-render`, `9-scope-freeze`, `9-changes-judge`, `9-close`, `9-changes-stamp`, `9-receipt` | Decline review, changed-content judgment, impact and coverage receipts |
| 10 — close run | `10-contract-close`, `10-snapshot-v2`, `10-pathway-sync-v2`, `10-pathway-seed-v2`, `10-pathway-author-v2`, `10-stamps-v2`, `10-readiness-v2`, `10-evidence-v2`, `10-report-baseline-v2`, `10-owner-report-v2`, `10-owner-report-render-v2`, `10-close-v2` | Contracts, pathways, stamps, readiness, report, obligations, commit |

## Roles, models, and limits

[tools/models.mjs](tools/models.mjs) owns model IDs and profiles;
[tools/dispatch.mjs](tools/dispatch.mjs) owns role defaults, permissions,
web access, sessions, and output capture. Stage profiles override role defaults.

| Assignment | Configured model / effort |
|---|---|
| Step 1 scaffolding; Step 9 `step9-lead` | Astra / medium |
| Step 5 authors and author recovery | Astra / medium |
| Group Alpha (`alpha`) | Sol / high |
| Step 8 adjudication | Sol / xhigh |
| Step 8 final adjudication | Astra / medium |
| Step 2 partition; Step 3 `alpha-high` recheck; Step 6 readers/refuters; Step 7 group readers; other Step 9/10 agents | Terra / high |
| Item judge | Terra / xhigh |

Other dispatches use their role defaults; for example, unprofiled Beta uses
Terra xhigh. Consult the stage-selected profile, not a role name alone.
Rate limits do not authorize a model change; substitution requires an owner
instruction.

Betas own their batches; readers audit another batch; refuters are read-only.
Group Alphas resolve assigned findings; Lead Alpha handles cross-group work
and receipts. Judges return frozen-text verdicts. Tools own mechanical work.
Every agent dispatch must declare a supported mathematical/review `job`.

Stage batch capacity is 27; group capacity is nine. Actual concurrency also
obeys role slots and the configured global limit, currently **24** in
`autopilot.config.json`. The judge sweep has a separate pool capped at 27.
Whole-run writes and ordered snapshots/receipts are serial.
Dispatch starts are staggered by three seconds; completion wakes the engine.
Controls/external work use the configured 30-second polling fallback.
Configured reports are every ten minutes. Supervisors also check every ten
minutes and intervene only on blockers or repairs that fail to finish.

Agents and judges currently compact at **200,000 total context tokens**.
This is a trigger, not a hard ceiling. Read complete relevant arguments in
bounded chunks. Writing agents checkpoint completed items in assigned notes;
after compaction, reread current proofs, dependencies, sources, and open
obligations. Read-only roles reread their supplied evidence and write no
checkpoints.

Dispatch receipts retain observed input, cached input, output, request peaks,
requests above 272k, and compactions. Cached input is part of input; missing
telemetry is unavailable, not zero. These counters are not billing estimates.
Logs retain bounded beginnings/ends with truncation markers.

## Completion and checks

A stage clears only when successful matching results cover every unit,
required artifacts exist, and its gates pass. Process exit alone is insufficient.
The engine recomputes coverage from disk, adopts compatible live dispatches,
and reconciles their eventual receipts.
Legacy results may use `coversMap`; when no result declares coverage, the
coverage helper falls back to a result count. Artifact and gate checks still apply.

Only these stage groups overlap by batch:

- `3-review → 3-fix → 3-recheck`
- `5-author → 6a-baseline → 6a-read → 6a-split → 6a-refute → 6a-collect`

A successor waits for its batch; group Alpha waits for its whole group.
Whole-run gates wait for the pipeline to drain. Other stages are barriers.
Before each reader baseline, the batch must pass precheck, render, provenance,
and strict contract checks. Failures return together to its Beta.

The complete Step 5 checks pass before `6b-prepare` freezes stabilized files.
Step 6B reviews original findings plus `post-reader:<batch>:<id>` changes
from join repairs; original review evidence is preserved.
Refutation covers reader-untouched and high/critical-risk items.
Group Alpha must supply item-specific `risk_review` for every high/critical item.

Checks cover plan/scope/splice consistency, dependencies, forward/external
references, rendering, prose, sources, pathways, provenance, contracts,
finite smoke tests, risk, boundaries, citation fidelity, and evidence liveness.
Passing structural checks or finite tests does not prove mathematics.

The Set Theory completion track has an additional bootstrap gate. Foundations
pages fail validation if their declared page prerequisites or authored logical
dependencies reach `deferred-set-theory-beyond-choice`, even transitively. That
catalogue is a target ledger, never a supplier page.

Source gates require harvest dispositions, fetched source evidence, live URLs,
and result backing. Recover URLs before replacing sources. Missing full text
blocks source closure; a source-scouting Beta handles work needing judgment.

Splicing preserves an existing complete same-page inventory when a run
manifest is empty; partial or missing inventories fail. Manifest items require
explicit `deps` arrays, normalized mechanically when absent.
Proof contracts recognize `deps`, `justified_by`, and `forward_refs`;
forward references still require their own ordering/cycle checks.

Manifest policy accepts an existing item only when the canonical plan already
homes it on that same page, or an owner-approved re-home receipt licenses the
move. An existing ID claimed by another page remains a fatal collision.

Snapshots track `pre-author → post-6b`, `post-6b → current`, and
`post-step8 → Step 9`. Impact receipts account for downstream consumers.
Every confirmed fatal requires one compatible row in
`research/defect-ledger.jsonl`; Step 10 renders `DEFECT-LEDGER.md` and
requires no open rows.

## Repairs and controls

```bash
autopilot pause --state-dir .autopilot/RUN
autopilot resume --state-dir .autopilot/RUN
autopilot report --state-dir .autopilot/RUN
autopilot retry --state-dir .autopilot/RUN
autopilot retry --unit 3 --state-dir .autopilot/RUN
autopilot stop --state-dir .autopilot/RUN
```

- `pause`: stop new dispatches; active work continues.
- `resume`: clear pause/stop marker. It does not launch a dead controller.
- `retry`: re-arm failed/unfinished dispatches and unfinished repair budgets
  after intervention; completed work remains covered. It cannot extend the
  lifetime judge cap. `--unit` filters dispatch resets, but unfinished-stage
  repair-budget resets are not unit-scoped.
- `stop`: exit the controller, leaving active work available for adoption.
- `skip --stage ID`: owner-only waiver of that stage's assurance.

To restart, stop the controller, verify it exited, then issue `resume` and
`start --run RUN --state-dir .autopilot/RUN --detach`. Wait for resume to be
consumed before sending retry: control.json holds one command, not a queue.
Controller locking rejects duplicate starts.

Stage files hot-reload after validation; completed stage order cannot change.
Configuration and imported model-registry changes require a controller restart.
Prompts already supplied to agents do not change; task-template edits require
regeneration for existing runs.

Launch preflight validates the complete dispatch arguments before any repair
group starts. Deterministic launch errors restore repair budgets.
Stages require gates or an explicit `gatesWaived` explanation; terminal gates
cannot be waived by the stage definition.

Failed dispatches stop at the stage/configured attempt limit (default config:
three). Missing artifacts become bounded `stage-stalemate` repairs.
Steps 5 and 6B repair all failures together, with three attempts per gate/item;
other stages use their declared budgets. Mechanical fixes run first, then
non-overlapping Alpha groups, or one reviewer for unknown ownership.
Identical failures after a repair that changed no relevant inputs stop further
calls. Final checks remain mandatory.

Step 6 artifact recovery repairs inputs with empty coverage; the split/collect
tool must still run. Refuter recovery must match its exact frozen scope.
A repair hook reporting an external outage refunds its round and defaults to
20-minute backoff. This does not guarantee that every failed provider dispatch
is recognized as an outage; inspect its result and log.

## Judgment and repair authority

Step 7 judges each item independently with the full item, direct-dependency
interfaces, and A/B-pair interfaces. Sibling proofs are judged separately.
Verdicts bind to item/model/context hashes. Old-model records or changed hashes
do not cover current judgment. The sweep stops new launches on rate limits.

Step 7 group readers produce frozen digests. Step 8 starts fresh adjudicators
from those digests and generated tasks. Every reader concern, cross-group alert,
and judge rejection requires an owning-group disposition; page concerns cannot
license unrelated item repairs.

Rejection outcomes are `confirmed_fatal`, `confirmed_nonfatal`, or
`false_positive`. Only confirmed fatal findings authorize mathematical repair.
Published-item repairs require their separate evidence and targeted verdict.
Verify uncertain mathematics against authoritative sources before deciding.

A licensed repair may add necessary supporting lemmas, registered before
consumers in pages, manifests, contracts, and group scope. Their dependency
chains must reach the licensed consumer. Each new lemma needs its first
engine-managed judgment; this does not grant another consumer rejudge.

`8-preflight` closes integrity checks before rejudging and retains the original
fatal repair authority. Frozen close stages do not inherit that edit authority.
Repair tasks retain complete relevant diagnostics and evidence hashes.
Unknown ownership gets one reviewer; repeated unchanged failures stop.

Each initially repaired item receives **one paid Terra rejudge**.
Rejection goes to a fresh Astra final adjudicator, which accepts or independently
repairs the item without another consumer judge call. A missing current verdict
after that paid attempt requires intervention, not a second attempt.
Final adjudicators resolve their frozen queues in order, recording exact-hash
terminal resolutions. These are closure evidence, not judge pass stamps.
`8-final` has no repair hook.

Step 9 reviews declined scope, judges the post-Step-8 mathematical changes,
closes impact obligations, and applies current pass stamps. Any separately
authorized mathematical review enters the same certification.
Receipt review includes reused items and missing contracts; contract recovery
requires reading the proof and passing the full checks, not editing mathematics.
Generated judge stamps are excluded from the corresponding attestation hashes.

## Final readiness and publication

Step 10 closes contracts, ledger, pathways, stamps, readiness, evidence, report,
obligations, and commit in order. New content must remain draft.
Reused published content may retain its status only if the same identity was
published at the scope ledger's pinned `baseline_commit`, an ancestor of HEAD.
Missing historical evidence blocks readiness.

Readiness and report receipts bind to the protected tree; runtime directories
named `.autopilot` or `.autopilot-*` are excluded. Do not edit protected files
between readiness and close-out. The report agent reads only the reconciled
evidence packet; tools render counts and the complete fatal ledger.

`10-close-v2` calls `tools/run-commit.mjs` on main, includes its final receipt
in the close-out commit, and requires clean-tree and terminal checks.
It does not publish or push. Completion means **publishable pending owner
approval**: the owner performs the personal audit, publication status changes,
and push/deployment.
