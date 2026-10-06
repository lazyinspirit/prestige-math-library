# Autopilot

A deterministic TypeScript engine. Read the repository's WORKFLOW.md for its
operating contract and CLAUDE.md for agent instructions.

- stages/mathlib.mts: Steps1–4, 6, 8–9, shared gates and scoped recovery.
- stages/mathlib.step5.mts: independent reader/refuter pass, routed group adjudication, cross-group audit and closure.
- stages/mathlib.step7.mts: batch adjudication, three-owner impact repair, stable certification and both explicit repeat loops.
- src/executor.mts: barriers, dispatch/adoption, owner escalation and hot reload.
- src/spec.mts: stage validation.
- src/coverage.mts: successful result and artifact accounting.
- src/doctor.mts: command/task preflight.
- src/state.mts and src/control.mts: durable state and controls.

Blocker retirement evaluates completion only for stages named by current
blockers. It uses the ordinary artifact and gate predicates for those stages;
future-stage artifact scans must not delay queued worker launches.
Immediate state-change passes yield to the event loop before the next scan,
allowing queued dispatch timers to launch ready workers.

Step1 scaffold batches declare their same-stage in-run prerequisites to the
executor. Their consumers wait for artifact-complete, stable transitive
suppliers. Step3 pair authors can start across batches while an in-run supplier
is unfinished; they flag exact missing items, author consumers, and leave
unresolved item decisions escalated for reconciliation. Step3b audits each
scaffold for authoring readiness, writes complete arguments and clears the
required integrity gates. Thorough independent mathematical audit and defect
repair follow in Steps 5–8. Step3 authors sharing a batch still serialize
because their manifests are shared. The planner now places one A/B pair in
each batch. Step1 scaffolders label every manifest item with its in-run
dependency level; the Step1 gate recomputes the
labels from the item DAG. Step3 author tasks list their items from the lowest
level upward, and the Step3 gate checks labels again after local additions.
The pre-author snapshot precedes them. A dependency read sampled while a stage
writer is replacing a manifest defers scheduling until the next tick; the same
read failure after all stage writers drain is a persistent owner blocker. Step4
still splices the plan and snapshots
content. Step5a reviews authored arguments; Step5b reconciles and closes them.
Step5a group adjudicators receive a generated queue of routed items ordered by
in-run dependency level across their assigned batches. Step7 batch adjudication
packs and tasks order rejected items the same way within each batch.
When a run-local owner authoring direction exists, the Step1 Beta brief and
generated per-batch task both name it as a binding input. If it is added after
`plan`, run `refresh-tasks` before any Beta dispatch so materialized prompts do
not omit it.
Step7 runs batch Sol 6.1 high adjudicators, three Sol 6.1 high owner agents for all
relevant downstream repairs (including published items), then one stable
orchestrator certification pass. Sol 6.1 high rejudgment, Sol 6.1 high adjudication, three-owner
downstream repair and recertification repeat until the latest round's unique
fatal original-frontier count is strictly below 5% of the frozen original scope.
All confirmed defects, including nonfatal defects, require repair. New downstream
work continues in the repair phase with fresh disjoint assignments until complete
before certification; fatal classification controls only the threshold.
Adjudicators and all three owner agents may author new items solely for genuine
unmet prerequisites, with unique IDs, complete registry/index registration and
mathematical evidence. All dependency/downstream effects must close before new
items enter central certification and the complete gates; the frozen denominator
does not change.
The complete gate battery then repeats with owner repair and recertification
until green. The threshold never permits unresolved defects or missing evidence.
Coverage, artifacts and gates are independently required. Every agent must be
honest about uncertainty and read authoritative sources when unsure. Logical
validity governs decisions; authoritative sources can also contain mistakes.
An artifact-complete unit retires its own stale stalemate blocker on the next
controller tick, even while sibling units in that stage are still writing.
Outside the explicitly authorized Step7 gate-repair loop, Step 1–9 failures are
owner-recertification holds: no failing gate invokes a stage repair hook or
spends a repair budget. The owner/operator must repair every rejected item,
refresh every certification invalidated by that repair, and retry the same gate;
the stage cannot transition until the repaired, recertified carrier passes.
This does not suppress the workflow's normal first-pass dispatches.

Step 9 includes any run-local `deferred-pairs.json` and `deferred-items.json`
records in its sealed evidence packet. It rejects a deferred page or item that
is still active in the run scope, and the rendered owner report names each
documented deferral and its reason separately from the built inventory.
Its final readiness gates check proof-step separation and 100% blue-tag
coverage with one shared renderer pass. A hash-bound proof-layout receipt is
included in report evidence and verified before the close-out commit. These
are deterministic tools, with no additional agent stage or repeated render.

Standalone stages can declare a read-only `route({ctx, outcome, failure})`
callback and explicit `routeTargets`. The engine evaluates it only after the
complete battery and all writers drain. Forward branches bypass intervening
stages; backward branches reopen the inclusive stage span and increment its
durable `ctx.stageRounds` identities (initially 1). Repeated stage labels,
result patterns and artifact paths must use those identities. The engine rejects
unchanged matchers or matchers which still accept the previous round's receipts.
One atomic state write records each transition, resets completion stamps and
preserves failure diagnostics in `ctx.stageFailures` and the transition history.
Routed failures and bypassed gates never receive a gate-pass stamp. A pending
`pause-at` boundary also takes effect before a repeated round starts.

Use tools/tsx-run.mjs from the repository root for status, doctor and tests.
Status recomputes the active stage and its overlapping group from disk. Later
stages show as waiting until they become active; their expensive per-item
artifact predicates are checked at their own stage boundary. This keeps
status reporting from delaying worker launches on a large frontier.
Step-1 scaffold artifact checks reuse one manifest snapshot across batches in
a status pass. Manifest, plan, coverage, and item-body changes invalidate the
corresponding cached data; readiness receipts are read afresh for each item.
Tests use temporary fixtures and fake dispatches, never live state. Do not
install a renumbered stage table or regenerate prompts under an active run.
Historical receipts are not migration aliases; cutover requires a fresh run
and owner coordination. The verified checkpoint procedure in WORKFLOW.md preserves
original evidence, creates no model-success receipts, and runs current gates
before fresh cross-group closure and judgment.

The active model boundary is stage-owned; see WORKFLOW.md and tools/models.mjs.
Step7 adjudicators, owner repair agents and item rejudgments use Sol 6.1 high.
If a provider becomes unavailable during a run, the operator may place
`.autopilot/<run>.profile-overrides.json` with version 1 and a `profiles` map
from requested registered profile names to effective registered profile names.
The dispatcher applies it only to that run's new processes; result receipts
record both `requested_profile` and the effective `profile`. Existing agents
finish on their original profile. Remove the run-local override after the run.
DeepSeek dispatches in Steps 2, 3, 6 and 9 require the
repository's single-tool live web bridge. It prefers Tavily and falls back to
Firecrawl when Tavily is not configured. Deterministic tool plans remain
model-free.

### Doctor on restart

Doctor reads `config.stateDir/state.json` without changing it. On a matching
run and workflow revision, only a contiguous leading prefix with valid durable
`enteredAt <= gatesPassedAt <= doneAt` stamps omits dynamic `units()` and
`plan()` materialization. Later repairs can legitimately change these completed
stages' historical inputs. Static stage structure, gate commands and their flags
remain checked for every stage; current and future plans, units, schemas and
runner probes retain normal checks. Missing, unreadable, mismatched or invalid
state provides no completion exemption. Skipped or routed stages do not qualify
as gate-passed completion for this preflight optimization.

The Linux crash watchdog is explicitly scoped to one repository and existing
run state directory. From that repository, launch one instance only:

```sh
nohup sh tools/autopilot/bin/watchdog.sh --repo "$PWD" --run RUN --state-dir .autopilot/RUN > .autopilot/RUN/watchdog.log 2>&1 &
```

All three scope arguments are mandatory; the named state directory must already
contain that run's `state.json`. The watchdog reads `/proc` NUL-delimited argv
and cwd, recognizes exact native controller/startup-preflight and run worker
processes, and waits for live writers to drain before recovery. The scanner
excludes its own PID and the exact watchdog module entry point, so supervision
cannot hold its own recovery; genuine scoped worker tools remain recognized. Scoped native
worker descendants and persistent Codex session homes also prevent a duplicate
dispatch. Unavailable process evidence fails closed. Other repositories and
other frontier names cannot satisfy this run's controller liveness check.

Recovery requires absence on two consecutive polls and a final immediate check,
then invokes the supported `tools/tsx-run.mjs` entry with the explicit run and
state directory. A started process remains tracked throughout startup doctor.
The interval defaults to 60 seconds (`--interval` accepts 1–600); starts are
bounded to five total (`--max-restarts` accepts 1–20). An unsuccessful started
engine exit ends supervision for owner diagnosis rather than retrying a gate or
preflight failure. A stop marker, pending native stop command, or engine-written
completion ends supervision. The watchdog does not consume controls, clear
blocks, issue retries, repair content, or decide any workflow transition. It
logs only run identity and operational messages, never process argv or secrets.
