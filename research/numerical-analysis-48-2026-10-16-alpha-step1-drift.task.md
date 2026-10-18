# Step 1 — prerequisite drift, `numerical-analysis-48-2026-10-16`

Read `research/numerical-analysis-48-2026-10-16-scope-ledger.json`, every assigned batch manifest,
the corresponding prose scaffolds, and `research/plan-spec.json`.
Review every A page in the scope ledger for missing prerequisites.

Write `research/numerical-analysis-48-2026-10-16-alpha-step1-drift.md`, with one `### PAGE_ID` section
per A page and exactly one `VERDICT:` line per section. Use `no-drift`,
`drift-applied`, `drift-reordered`, or `drift-blocked`. Name prerequisite
edges as `PAGE_ID (order N)` and ordering changes as
`PAGE_ID (order OLD -> NEW)`. Explain evidence and remaining uncertainty.

Apply only authorized plan corrections. New pairs, substantial prerequisites,
and scope changes require the owner. `drift-minted` and `drift-rescoped`
record only explicitly authorized amendments. Do not edit content or manifests.

Run `node tools/drift-review-check.mjs --run numerical-analysis-48-2026-10-16 --before-apply` and
`node tools/validate-plan.mjs research/plan-spec.json --run numerical-analysis-48-2026-10-16`. Report blockers;
the engine owns materialization.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
