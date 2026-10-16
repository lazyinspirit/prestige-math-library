# Step 4 batch reviewer — batch **34**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **34**. Step-5 owning group: **d**.
Return `group: "d"` and `batches: ["34"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 34 | `finite-abelian-hidden-subgroup-algorithms` | A | uniform-circuit-families-promise-problems-and-complexity, finite-abelian-fourier-analysis, effective-numberings-reductions-resources-and-randomness, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, reversible-computation-ancillas-and-coherent-oracles, registers-tensor-products-and-partial-trace, measurements-povms-and-instruments, circuit-syntax-denotational-semantics-and-measurement, pure-and-mixed-states-ensembles-and-schmidt-decomposition |
| 34 | `finite-abelian-hidden-subgroup-algorithms-examples` | B | finite-abelian-hidden-subgroup-algorithms |

## Your content, in full

### `finite-abelian-hidden-subgroup-algorithms` — Finite Abelian Hidden-Subgroup Algorithms

- `rem-qa-nonabelian-hidden-subgroup-scope` · remark — Scope limits for nonabelian hidden-subgroup problems
- `lem-qa-annihilator-restriction-cut` · lemma — A Fourier sample cuts a larger common kernel
- `lem-qa-common-kernel-repetition-bound` · lemma — Chernoff repetition bound for common-kernel recovery
- `def-qa-finite-abelian-hidden-subgroup-problem` · definition — Finite abelian hidden-subgroup promise and output encoding
- `alg-qa-finite-abelian-hidden-subgroup-sample` · algorithm — One finite abelian hidden-subgroup Fourier sample
- `lem-qa-hidden-coset-state-law` · lemma — Discarding the hiding register yields a coset-state mixture
- `alg-qa-finite-abelian-hidden-subgroup-reconstruction` · algorithm — Finite abelian hidden-subgroup common-kernel reconstruction
- `thm-qa-finite-abelian-hidden-subgroup-sample-law` · theorem — Fourier samples are uniform in the annihilator
- `thm-qa-finite-abelian-hidden-subgroup-reconstruction-success` · theorem — Finite abelian hidden-subgroup reconstruction succeeds
- `thm-qa-finite-abelian-hidden-subgroup-cost` · theorem — Finite abelian hidden-subgroup query and circuit costs

### `finite-abelian-hidden-subgroup-algorithms-examples` — Finite Abelian Hidden-Subgroup Algorithms — Examples

- `ex-qa-hsp-common-kernel-recovery` · example — Common-kernel subgroup recovery in a product of cyclic groups
- `ex-qa-hsp-cyclic-subgroup-annihilator` · example — Fourier sampling for a cyclic subgroup

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-abelian-hidden-subgroup-algorithms` requires `uniform-circuit-families-promise-problems-and-complexity`
- `finite-abelian-hidden-subgroup-algorithms` requires `finite-abelian-fourier-analysis`
- `finite-abelian-hidden-subgroup-algorithms` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `finite-abelian-hidden-subgroup-algorithms` requires `reversible-computation-ancillas-and-coherent-oracles`
- `finite-abelian-hidden-subgroup-algorithms` requires `registers-tensor-products-and-partial-trace`
- `finite-abelian-hidden-subgroup-algorithms` requires `measurements-povms-and-instruments`
- `finite-abelian-hidden-subgroup-algorithms` requires `circuit-syntax-denotational-semantics-and-measurement`
- `finite-abelian-hidden-subgroup-algorithms` requires `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `period-hidden-shift-and-number-theoretic-algorithms` requires `finite-abelian-hidden-subgroup-algorithms`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
