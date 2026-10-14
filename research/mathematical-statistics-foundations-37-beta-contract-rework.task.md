> The dispatch block supplies batch `<i>`.

# Contract worksheet rework — batch `<i>`, `mathematical-statistics-foundations-37`

Read the assigned open contract-quality ledger row and each affected item. Edit
only `research/mathematical-statistics-foundations-37-batch-<i>.proof-contracts.json`.

Rewrite each affected boundary disposition from the current proof: a `checked`
row names the exact discharging step and its case; a `not_applicable` row gives
an item-specific mathematical reason. Leave a discovered proof failure visible
and report it rather than changing item text.

Run the contract merge, `boundary-audit --fail-on-contradicted
--fail-on-template`, and `proof-contract --strict`. Report every rewritten row
and any unresolved proof gap; the certifying Alpha closes the ledger row.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
