# Step 4 batch reviewer — batch **60**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **60**. Step-5 owning group: **z**.
Return `group: "z"` and `batches: ["60"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 60 | `operator-splitting-admm-and-primal-dual-methods` | A | sparse-matrix-models-and-kernel-costs, inequality-kkt-duality-and-optimality-certificates, proximal-gradient-and-accelerated-composite-optimization, krylov-methods-and-lanczos-convergence |
| 60 | `operator-splitting-admm-and-primal-dual-methods-examples` | B | operator-splitting-admm-and-primal-dual-methods |

## Your content, in full

### `operator-splitting-admm-and-primal-dual-methods` — Operator splitting admm and primal dual methods

- `def-maximal-monotone-relation-on-euclidean-space` · definition — Monotone and maximal-monotone relations on Euclidean space
- `def-saddle-point-for-convex-concave-lagrangian` · definition — Saddle points of extended-real Lagrangians
- `lem-firmly-nonexpansive-picard-iteration-converges` · lemma — Picard iterates of a firmly nonexpansive map converge in finite dimensions
- `lem-one-point-extension-for-finite-dimensional-nonexpansive-map` · lemma — One-point extension of a nonexpansive map in finite dimensions
- `lem-schur-reduction-for-polynomial-unit-disk-roots` · lemma — Schur reduction preserves strict unit-disk root location
- `alg-naive-sequential-three-block-admm` · algorithm — Naive sequential three-block ADMM
- `alg-two-block-admm-scaled` · algorithm — Scaled two-block ADMM with explicit capped-solve statuses
- `def-fenchel-conjugate-on-finite-dimensional-euclidean-space` · definition — Fenchel conjugate of an extended-real function
- `def-resolvent-of-a-monotone-relation` · definition — Resolvent of a monotone relation
- `lem-admm-exact-subproblem-optimality-relations` · lemma — Optimality relations for exact two-block ADMM subproblems
- `lem-fenchel-conjugate-is-proper-closed-convex` · lemma — The Fenchel conjugate of a proper closed convex function is proper closed convex
- `lem-fenchel-young-equality-characterizes-subgradients` · lemma — Fenchel–Young inequality and its equality case
- `thm-maximal-monotone-resolvent-is-firmly-nonexpansive` · theorem — A maximal-monotone resolvent is everywhere-defined and firmly nonexpansive
- `alg-douglas-rachford-splitting` · algorithm — Douglas–Rachford splitting for two maximal-monotone relations
- `alg-pdhg-primal-dual-hybrid-gradient` · algorithm — Chambolle–Pock primal-dual hybrid gradient
- `lem-two-block-admm-energy-and-objective-estimates` · lemma — Two-block ADMM energy descent and objective gap estimates
- `lem-douglas-rachford-map-is-firmly-nonexpansive` · lemma — The Douglas–Rachford fixed-point map is firmly nonexpansive
- `lem-pdhg-one-step-gap-telescope` · lemma — PDHG one-step primal-dual gap telescope
- `thm-two-block-admm-residual-objective-and-dual-convergence` · theorem — Two-block ADMM residual, objective and dual sequence convergence
- `thm-douglas-rachford-shadow-converges-to-zero-of-sum` · theorem — Douglas–Rachford shadows converge to a zero of the operator sum
- `thm-pdhg-ergodic-saddle-gap-o1k` · theorem — PDHG has an O(1/k) ergodic saddle-gap bound

### `operator-splitting-admm-and-primal-dual-methods-examples` — Operator splitting admm and primal dual methods — Examples

- `cex-naive-three-block-admm-divergence` · counterexample — The direct three-block ADMM extension can diverge
- `ex-consensus-admm-least-squares` · example — Two-agent consensus least squares with exact ADMM iterates
- `ex-lanczos-ritz-value-is-not-a-norm-certificate` · example — A Lanczos Ritz value can miss the operator norm
- `ex-two-pixel-pdhg-total-variation-step` · example — A two-pixel TV denoising PDHG step in CSR form

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `operator-splitting-admm-and-primal-dual-methods` requires `sparse-matrix-models-and-kernel-costs`
- `operator-splitting-admm-and-primal-dual-methods` requires `inequality-kkt-duality-and-optimality-certificates`
- `operator-splitting-admm-and-primal-dual-methods` requires `proximal-gradient-and-accelerated-composite-optimization`
- `operator-splitting-admm-and-primal-dual-methods` requires `krylov-methods-and-lanczos-convergence`
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
