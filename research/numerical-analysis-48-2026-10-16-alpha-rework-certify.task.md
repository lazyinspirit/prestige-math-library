# Contract-rework certification — `numerical-analysis-48-2026-10-16`

Read the open contract-quality ledger row and the latest matching Beta result in
`research/numerical-analysis-48-2026-10-16-dispatch/`. Sample the affected rewritten contract rows
against their item text, including every changed `checked` or `not_applicable`
disposition.

Rerun the contract merge, `boundary-audit --fail-on-contradicted
--fail-on-template`, and `proof-contract --strict`. On success, close that same
ledger row with sample and gate evidence, render the ledger, and close its
matching obligation. On failure, retain the row and append the exact reason.

Write the sample, row verdicts, gate results, and final ledger state in the
dispatch report. Do not modify item text in this certification dispatch.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
