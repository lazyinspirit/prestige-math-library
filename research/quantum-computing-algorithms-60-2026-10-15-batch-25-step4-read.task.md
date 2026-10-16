# Step 4 batch reviewer — batch **25**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **25**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["25"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 25 | `computational-problems-promises-and-cost-models` | A | uniform-circuit-families-promise-problems-and-complexity, the-polynomial-hierarchy-and-relativization, finite-probability-spaces-and-random-variables, reversible-computation-ancillas-and-coherent-oracles, registers-tensor-products-and-partial-trace, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces, circuit-syntax-denotational-semantics-and-measurement, measurements-povms-and-instruments, effective-numberings-reductions-resources-and-randomness |
| 25 | `computational-problems-promises-and-cost-models-examples` | B | computational-problems-promises-and-cost-models |

## Your content, in full

### `computational-problems-promises-and-cost-models` — Computational Problems, Promises, and Cost Models

- `def-qa-expected-query-cost` · definition — Expected query cost from finite execution prefixes
- `def-qa-task-and-promise-domain` · definition — QA task and promise domain
- `def-qa-input-encoding-and-size` · definition — Input encoding and size for algorithmic tasks
- `def-qa-finite-branch-output-law` · definition — Normalized output law for finite quantum query branches
- `def-qa-promise-query-instance` · definition — Promise query instance and oracle family
- `def-qa-classical-query-algorithm` · definition — Classical query algorithm
- `def-qa-quantum-query-algorithm` · definition — Quantum query algorithm
- `def-qa-bounded-error-promise-correctness` · definition — Worst-case bounded-error correctness
- `def-qa-classical-bit-cost` · definition — Classical bit-operation cost
- `def-qa-exact-promise-correctness` · definition — Exact correctness for promise tasks
- `def-qa-nonoracle-gate-cost` · definition — Nonoracle quantum gate cost
- `def-qa-classical-query-complexity` · definition — Classical query complexity
- `def-qa-quantum-query-complexity` · definition — Quantum query complexity
- `thm-qa-promise-preserving-query-reduction-composition` · theorem — Promise-preserving reduction composes with a query solver

### `computational-problems-promises-and-cost-models-examples` — Computational Problems, Promises, and Cost Models — Examples

- `ex-qa-promise-and-cost-models` · example — Promise, query and cost-model examples

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `computational-problems-promises-and-cost-models` requires `uniform-circuit-families-promise-problems-and-complexity`
- `computational-problems-promises-and-cost-models` requires `reversible-computation-ancillas-and-coherent-oracles`
- `computational-problems-promises-and-cost-models` requires `registers-tensor-products-and-partial-trace`
- `computational-problems-promises-and-cost-models` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `computational-problems-promises-and-cost-models` requires `circuit-syntax-denotational-semantics-and-measurement`
- `computational-problems-promises-and-cost-models` requires `measurements-povms-and-instruments`
- `reversible-arithmetic-and-oracle-conversion` requires `computational-problems-promises-and-cost-models`
- `exact-oracle-algorithms` requires `computational-problems-promises-and-cost-models`
- `simon-algorithm-and-finite-field-recovery` requires `computational-problems-promises-and-cost-models`
- `quantum-order-finding-and-rational-reconstruction` requires `computational-problems-promises-and-cost-models`
- `grover-search-and-invariant-plane-rotations` requires `computational-problems-promises-and-cost-models`
- `amplitude-amplification` requires `computational-problems-promises-and-cost-models`
- `amplitude-estimation-and-counting` requires `computational-problems-promises-and-cost-models`
- `quantum-query-lower-bounds-and-search-optimality` requires `computational-problems-promises-and-cost-models`
- `polynomial-method-and-approximate-degree` requires `computational-problems-promises-and-cost-models`
- `adversary-methods-and-quantum-query-complexity` requires `computational-problems-promises-and-cost-models`
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
