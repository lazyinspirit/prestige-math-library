# Autopilot

A deterministic TypeScript engine. Read the repository's WORKFLOW.md for its
operating contract and CLAUDE.md for agent instructions.

- stages/mathlib.mts: Steps1–4 and6–9, gates and scoped recovery.
- stages/mathlib.step5.mts: direct group review, cross-group audit and closure.
- src/executor.mts: barriers, dispatch/adoption, retry budgets and hot reload.
- src/spec.mts: stage validation.
- src/coverage.mts: successful result and artifact accounting.
- src/doctor.mts: command/task preflight.
- src/state.mts and src/control.mts: durable state and controls.

Step3 groups audit scaffolds, repair local gaps and author everything. The
pre-author snapshot precedes them. Step4 still splices the plan and snapshots
content. Step5a reviews authored arguments; Step5b reconciles and closes them.
Step7 completes repairs and checks, runs one rejudge and one terminal
adjudication pass, then snapshots for Step8. No post-final repair loop exists.
Coverage, artifacts and gates are independently required. Every agent must be
honest about uncertainty and read authoritative sources when unsure.

Use tools/tsx-run.mjs from the repository root for status, doctor and tests.
Tests use temporary fixtures and fake dispatches, never live state. Do not
install a renumbered stage table or regenerate prompts under an active run.
Historical receipts are not migration aliases; cutover requires a fresh run
and owner coordination. The verified checkpoint procedure in WORKFLOW.md preserves
original evidence, creates no model-success receipts, and runs current gates
before fresh cross-group closure and judgment.
