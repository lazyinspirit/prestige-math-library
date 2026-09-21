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

Step1 scaffold batches and Step3 pair authors declare their same-stage in-run
prerequisites to the executor. Consumers wait for artifact-complete, stable
transitive suppliers; independent branches retain parallelism. Step3 authors
sharing a batch also serialize because their manifests are shared. The
pre-author snapshot precedes them. A dependency read sampled while a stage
writer is replacing a manifest defers scheduling until the next tick; the same
read failure after all stage writers drain is a persistent owner blocker. Step4
still splices the plan and snapshots
content. Step5a reviews authored arguments; Step5b reconciles and closes them.
When a run-local owner authoring direction exists, the Step1 Beta brief and
generated per-batch task both name it as a binding input. If it is added after
`plan`, run `refresh-tasks` before any Beta dispatch so materialized prompts do
not omit it.
Step7 runs batch Sol xhigh adjudicators, three Sol xhigh owner agents for all
relevant downstream repairs (including published items), then one stable
orchestrator certification pass. Terra rejudgment, Sol adjudication, three-owner
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
Outside the explicitly authorized Step7 gate-repair loop, Step 1–9 failures are
owner-recertification holds: no failing gate invokes a stage repair hook or
spends a repair budget. The owner/operator must repair every rejected item,
refresh every certification invalidated by that repair, and retry the same gate;
the stage cannot transition until the repaired, recertified carrier passes.
This does not suppress the workflow's normal first-pass dispatches.

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
Tests use temporary fixtures and fake dispatches, never live state. Do not
install a renumbered stage table or regenerate prompts under an active run.
Historical receipts are not migration aliases; cutover requires a fresh run
and owner coordination. The verified checkpoint procedure in WORKFLOW.md preserves
original evidence, creates no model-success receipts, and runs current gates
before fresh cross-group closure and judgment.

The active model boundary is stage-owned; see WORKFLOW.md and tools/models.mjs.
Step7 adjudicators and owner repair agents use Sol xhigh, and item rejudgments
use Terra. DeepSeek dispatches require the
repository's single-tool live web bridge. It prefers Tavily and falls back to
Firecrawl when Tavily is not configured. Deterministic tool plans remain
model-free.
