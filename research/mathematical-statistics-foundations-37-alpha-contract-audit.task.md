# Contract-detector adjudication — `mathematical-statistics-foundations-37`

Reproduce the failing candidate findings with `boundary-audit --fail-on-contradicted --fail-on-template`,
`citation-fidelity`, and `gate-liveness` over the run contracts and coverage
files. Read each flagged item and its owning contract row.

Correct a false boundary disposition, unfaithful citation, missing applicable
finite-smoke entry, or missing risk review in the owning batch contract. A
`checked` boundary row cites the step that handles that case; a
`not_applicable` row gives an item-specific mathematical reason. If a candidate
is sound but the detector is inapplicable, record the required specific
`reviewed.upheld` rationale instead of changing the item to silence it.
For every template cluster, review every member one item at a time and either
replace the repeated rationale with item-specific evidence or add the exact
item-specific `reviewed.upheld` record. Do not finish while either boundary
flag still fails.

Merge the batch contracts into `research/mathematical-statistics-foundations-37-proof-contracts.json` and
rerun the failed detector. Write `research/mathematical-statistics-foundations-37-alpha-contract-audit.md`
with each candidate, disposition, evidence, changed record, and remaining
blocker. A confirmed item defect also receives its ledger row.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
