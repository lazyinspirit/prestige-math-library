# Step 4 batch reviewer — batch **28**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **28**. Step-5 owning group: **b**.
Return `group: "b"` and `batches: ["28"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 28 | `simon-algorithm-and-finite-field-recovery` | A | exact-oracle-algorithms, gaussian-elimination-and-row-reduction, primes-and-the-fundamental-theorem-of-arithmetic, series-and-nonnegative-tests, reversible-arithmetic-and-oracle-conversion, congruences-and-the-chinese-remainder-theorem, linear-maps-rank-nullity-and-quotient-spaces, computational-problems-promises-and-cost-models, measurements-povms-and-instruments, finite-probability-spaces-and-random-variables, finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces |
| 28 | `simon-algorithm-and-finite-field-recovery-examples` | B | simon-algorithm-and-finite-field-recovery |

## Your content, in full

### `simon-algorithm-and-finite-field-recovery` — Simon’s Algorithm and Finite-Field Recovery

- `thm-qa-binary-field-f2-is-a-field` · theorem — The quotient Z/2 is the binary field
- `def-qa-binary-vector-space` · definition — The coordinate vector space over F2
- `alg-qa-f2-gaussian-elimination` · algorithm — Gaussian elimination over F2 for Simon recovery
- `lem-qa-computational-basis-measurement-law` · lemma — Computational-basis measurement weights are squared amplitudes
- `def-qa-simon-promise` · definition — Simon hidden-XOR-period promise
- `lem-qa-simon-annihilator-subspace-basis` · lemma — The Simon annihilator is an (n−1)-dimensional binary subspace
- `alg-qa-simon-one-sample` · algorithm — One Simon Fourier-sampling sample
- `def-qa-simon-random-instance-distribution` · definition — Random Simon-oracle distribution for a classical lower bound
- `thm-qa-simon-postquery-coset-state` · theorem — Simon query and output measurement produce a coset pair
- `thm-qa-f2-gaussian-elimination-correct-and-cost` · theorem — F2 row reduction returns the unique Simon mask
- `thm-qa-simon-classical-randomized-query-lower-bound` · theorem — Classical randomized Simon search needs exponential queries
- `thm-qa-simon-hadamard-sampling-law` · theorem — Simon samples uniformly from s-perp
- `def-qa-simon-rank-process` · definition — Simon independent-sample rank process
- `thm-qa-simon-rank-growth-probability` · theorem — Simon rank growth probability
- `alg-qa-simon-recovery-with-budget` · algorithm — Budgeted Simon recovery with explicit failure branch
- `thm-qa-simon-recovery-correctness-and-query-bound` · theorem — Simon recovery succeeds with probability at least 1-delta

### `simon-algorithm-and-finite-field-recovery-examples` — Simon’s Algorithm and Finite-Field Recovery — Examples

- `ex-qa-simon-finite-rank-and-sampling` · example — Finite Simon rank and sampling examples

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `simon-algorithm-and-finite-field-recovery` requires `exact-oracle-algorithms`
- `simon-algorithm-and-finite-field-recovery` requires `reversible-arithmetic-and-oracle-conversion`
- `simon-algorithm-and-finite-field-recovery` requires `computational-problems-promises-and-cost-models`
- `simon-algorithm-and-finite-field-recovery` requires `measurements-povms-and-instruments`
- `simon-algorithm-and-finite-field-recovery` requires `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
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
