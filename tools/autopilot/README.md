# Autopilot

A deterministic TypeScript engine. Read the repository's WORKFLOW.md for its
operating contract and CLAUDE.md for agent instructions.

- stages/mathlib.mts: Steps1–4 and6–9, gates and scoped recovery.
- stages/mathlib.step5.mts: independent reader/refuter pass, routed group adjudication, cross-group audit and closure.
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
Step7 completes repairs and checks, runs one rejudge and one terminal
adjudication pass, then snapshots for Step8. No post-final repair loop exists.
Coverage, artifacts and gates are independently required. Every agent must be
honest about uncertainty and read authoritative sources when unsure.
The production configuration makes all Step 1–9 gate failures
owner-recertification holds: no failing gate invokes a stage repair hook or
spends a repair budget. The owner/operator must repair every rejected item,
refresh every certification invalidated by that repair, and retry the same gate;
the stage cannot transition until the repaired, recertified carrier passes.
This does not suppress the workflow's normal first-pass dispatches.

Use tools/tsx-run.mjs from the repository root for status, doctor and tests.
Tests use temporary fixtures and fake dispatches, never live state. Do not
install a renumbered stage table or regenerate prompts under an active run.
Historical receipts are not migration aliases; cutover requires a fresh run
and owner coordination. The verified checkpoint procedure in WORKFLOW.md preserves
original evidence, creates no model-success receipts, and runs current gates
before fresh cross-group closure and judgment.

The active model boundary is stage-owned: Step 1 scaffolding, Step 5a readers
and Step 5a refuters use Sol high; Step 5a adjudication uses Sol xhigh; Step 3a
pair scope, Step 3b pair authoring, Step 5b, Step 6 group readers and Step 9
agent closure use DeepSeek V4.1 Flash max. DeepSeek dispatches require the
repository's single-tool live web bridge. It prefers Tavily and falls back to
Firecrawl when Tavily is not configured. Deterministic tool plans remain
model-free.
