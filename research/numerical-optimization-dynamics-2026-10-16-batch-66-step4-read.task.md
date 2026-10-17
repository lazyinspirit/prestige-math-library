# Step 4 batch reviewer — batch **66**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **66**. Step-5 owning group: **h**.
Return `group: "h"` and `batches: ["66"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 66 | `certified-stationary-distribution-and-hitting-statistic-numerics` | A | matrix-norms-condition-numbers-and-numerical-stability, stationary-markov-chains-and-ergodic-limits, finite-precision-direct-factorizations, sparse-matrix-models-and-kernel-costs, krylov-methods-and-lanczos-convergence, finite-generator-master-equations-and-uniformization |
| 66 | `certified-stationary-distribution-and-hitting-statistic-numerics-examples` | B | certified-stationary-distribution-and-hitting-statistic-numerics |

## Your content, in full

### `certified-stationary-distribution-and-hitting-statistic-numerics` — Certified stationary distribution and hitting statistic numerics

- `def-finite-column-stochastic-matrix-and-law` · definition — Finite column-stochastic matrices and probability vectors
- `lem-finite-transient-block-geometric-escape` · lemma — Finite-step escape from a transient substochastic block
- `alg-finite-markov-closed-class-decomposition` · algorithm — Finite Markov closed-class graph decomposition
- `lem-column-stochastic-l1-nonexpansive` · lemma — Column-stochastic matrices preserve mass and contract ℓ1
- `thm-finite-transient-hitting-and-mean-exit-residual-bound` · theorem — Transient hitting, mean exit, and residual bounds
- `thm-irreducible-finite-class-has-unique-invariant-vector` · theorem — An irreducible finite class has a unique invariant vector
- `lem-dobrushin-zero-sum-l1-coefficient` · lemma — Column-overlap formula for the zero-sum ℓ1 coefficient
- `thm-finite-markov-closed-class-decomposition-correctness` · theorem — Correctness of finite Markov closed-class decomposition
- `alg-corrected-stationary-residual-certificate` · algorithm — Correct and certify a finite-chain stationary candidate
- `thm-finite-chain-closed-class-cesaro-weight-decomposition` · theorem — Closed-class stationary laws and initial-law-dependent Cesàro weights
- `thm-m-step-dobrushin-stationary-residual-bound` · theorem — m-step Dobrushin certificate for a stationary probability
- `thm-one-closed-class-augmented-stationary-system-is-nonsingular` · theorem — One closed class makes the normalized stationary system nonsingular
- `thm-corrected-stationary-residual-certificate-soundness` · theorem — Termination and soundness of the corrected stationary residual certificate
- `cor-uniformized-generator-stationary-residual-certificate` · corollary — Uniformized finite-generator stationary residual certificate
- `thm-stationary-generator-solve-and-model-error-ledger` · theorem — Separate stationary solve residual from generator error

### `certified-stationary-distribution-and-hitting-statistic-numerics-examples` — Certified stationary distribution and hitting statistic numerics — Examples

- `ex-xd-finite-credit-absorption-hitting-statistics` · example — Finite credit reserve: certified absorption statistics
- `ex-xd-nearly-reducible-chain-residual-and-ill-conditioning` · example — A small residual can hide a large stationary error
- `ex-xd-periodic-iteration-versus-stationarity` · example — Periodic iteration can fail while the stationary solve is well-defined
- `ex-xd-reducible-absorbing-class-weights` · example — Two absorbing classes retain initial-law-dependent weights
- `ex-xd-birth-death-uniformization-detailed-balance` · example — A three-state birth–death generator and detailed balance

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `finite-precision-direct-factorizations`
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `sparse-matrix-models-and-kernel-costs`
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `krylov-methods-and-lanczos-convergence`
- `certified-stationary-distribution-and-hitting-statistic-numerics` requires `finite-generator-master-equations-and-uniformization`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

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
