# Step 4 batch reviewer — batch **56**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **56**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["56"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 56 | `quantum-complexity-classes-and-oracle-separations` | A | uniform-circuit-families-promise-problems-and-complexity, counting-complexity-and-sharpp, sat-tableaux-and-quantified-space-completeness, the-polynomial-hierarchy-and-relativization, effective-numberings-reductions-resources-and-randomness, logarithmic-space-nl-and-reachability, reversible-computation-ancillas-and-coherent-oracles, clifford-t-exact-and-approximate-synthesis, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, registers-tensor-products-and-partial-trace, measurements-povms-and-instruments, finite-probability-spaces-and-random-variables |
| 56 | `quantum-complexity-classes-and-oracle-separations-examples` | B | quantum-complexity-classes-and-oracle-separations, uniform-circuit-families-promise-problems-and-complexity |

## Your content, in full

### `quantum-complexity-classes-and-oracle-separations` — Quantum Complexity Classes and Oracle Separations

- `def-qa-32-promise-bpp` · definition — PromiseBPP
- `lem-qa-32-indexed-to-full-list-conversion` · lemma — Indexed uniform circuits convert to polynomial-time full lists
- `lem-qa-32-simon-function-register-instrument` · lemma — Computational-basis instruments and conditional states on two registers
- `def-qa-32-eqp-promise-class` · definition — EQP on promise problems in the QC14 model
- `def-qa-32-zqp-promise-class` · definition — ZQP on promise problems with bounded failure
- `lem-qa-32-exact-clifford-t-boolean-circuit-embedding` · lemma — Boolean circuits compile exactly into the QC14 gate alphabet
- `rem-qa-32-bqp-pp-pspace-proof-obligations` · remark — BQP to PP and PSPACE proof obligations in the exact QC14 basis
- `thm-qa-32-eqp-zqp-bqp-containments` · theorem — PromiseP is contained in EQP, EQP in ZQP, and ZQP in BQP
- `thm-qa-32-promise-classical-containments` · theorem — PromiseP is contained in PromiseBPP and PromiseBPP in BQP
- `def-qa-32-simon-decision-oracle-promise` · definition — Simon injectivity decision promise with XOR-oracle access
- `alg-qa-32-simon-query-rank-test` · algorithm — Simon promise decision by sampled rank
- `thm-qa-32-simon-classical-randomized-query-lower-bound` · theorem — Classical randomized Simon decision requires square-root-many queries
- `thm-qa-32-simon-sample-rank-correctness` · theorem — Simon rank test correctness and linear query cost

### `quantum-complexity-classes-and-oracle-separations-examples` — Quantum Complexity Classes and Oracle Separations — Examples

- `cex-qa-32-oracle-separation-is-not-gate-separation` · counterexample — Simon query lower bounds do not imply explicit-input gate lower bounds
- `ex-qa-32-simon-small-instance` · example — Simon decision for n equals two

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-complexity-classes-and-oracle-separations` requires `uniform-circuit-families-promise-problems-and-complexity`
- `quantum-complexity-classes-and-oracle-separations` requires `reversible-computation-ancillas-and-coherent-oracles`
- `quantum-complexity-classes-and-oracle-separations` requires `clifford-t-exact-and-approximate-synthesis`
- `quantum-complexity-classes-and-oracle-separations` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `quantum-complexity-classes-and-oracle-separations` requires `registers-tensor-products-and-partial-trace`
- `quantum-complexity-classes-and-oracle-separations` requires `measurements-povms-and-instruments`
- `quantum-complexity-classes-and-oracle-separations-examples` requires `uniform-circuit-families-promise-problems-and-complexity`
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
