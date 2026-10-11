# Step 1 — batch `<i>`, `frontier-44-special-representation-examples-28-six-step`

- Read the generated batch task and follow `briefs/beta-scaffold.md`.
- Write this batch's manifests, coverage, notes, readiness records and dependency inputs only.
- Record every item as ready or escalated, one at a time; preserve completed work.
- Leave shared-plan, new-pair and published-item findings in notes for owner reconciliation.
- Run the specified checks and report exact remaining blockers.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
