# Step 4 batch reviewer — batch **73**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **73**. Step-5 owning group: **ab**.
Return `group: "ab"` and `batches: ["73"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 73 | `variance-reduced-finite-sum-and-adaptive-gradient-optimization` | A | variance-reduction-and-randomized-integration, proximal-gradient-and-accelerated-composite-optimization, stochastic-approximation-and-stochastic-gradient-methods |
| 73 | `variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples` | B | variance-reduced-finite-sum-and-adaptive-gradient-optimization |

## Your content, in full

### `variance-reduced-finite-sum-and-adaptive-gradient-optimization` — Variance reduced finite sum and adaptive gradient optimization

- `alg-adam-update` · algorithm — Bias-corrected Adam update
- `alg-amsgrad-update` · algorithm — Bias-corrected AMSGrad update
- `lem-finite-sum-gradient-is-average` · lemma — Gradient of a finite sum is the finite sum of gradients
- `lem-positive-diagonal-map-preserves-closed-convexity` · lemma — Positive diagonal maps preserve closed convex sets
- `alg-saga-finite-sum-method` · algorithm — Finite-sum SAGA
- `alg-svrg-finite-sum-method` · algorithm — Finite-sum SVRG
- `cex-adam-periodic-linear-losses-force-divergence` · counterexample — Adam diverges on a periodic bounded-gradient loss sequence
- `lem-convex-smooth-component-gradient-cocoercivity` · lemma — Cocoercive gradient bound for a convex smooth finite sum
- `thm-independent-minibatch-conditional-variance` · theorem — Conditional variance of independent and without-replacement minibatches
- `alg-diagonal-adagrad-online-regret` · algorithm — Diagonal AdaGrad for online convex losses
- `cex-saga-linear-factor-fails-under-standard-initialization` · counterexample — The assigned SAGA Lyapunov factor fails under standard initialization
- `lem-saga-estimator-and-table-recurrence` · lemma — SAGA conditional estimator, variance, and table recurrence
- `lem-svrg-unbiasedness-and-variance-bound` · lemma — SVRG conditional unbiasedness and variance bound
- `lem-diagonal-adagrad-subproblem-well-defined` · lemma — Diagonal AdaGrad subproblem has a unique minimizer
- `thm-saga-expected-linear-contraction` · theorem — SAGA expected linear contraction with a memory-scaled step size
- `thm-svrg-epoch-expected-linear-contraction` · theorem — Expected linear contraction of an SVRG epoch
- `lem-diagonal-adagrad-one-step-regret-bound` · lemma — One-step diagonal AdaGrad regret inequality
- `thm-diagonal-adagrad-regret-bound` · theorem — Diagonal AdaGrad regret bound
- `thm-saga-constant-step-memory-capped-linear-contraction` · theorem — SAGA constant-step linear contraction with a memory-capped factor

### `variance-reduced-finite-sum-and-adaptive-gradient-optimization-examples` — Variance reduced finite sum and adaptive gradient optimization — Examples

- `ex-regularized-logistic-finite-sum` · example — A regularized logistic finite sum with an exact minimizer
- `ex-svrg-saga-gradient-work-storage-comparison` · example — SVRG and SAGA gradient-work and storage ledger
- `ex-adam-adaptive-step-divergence` · example — A bounded periodic gradient sequence with divergent Adam iterates

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` requires `proximal-gradient-and-accelerated-composite-optimization`
- `variance-reduced-finite-sum-and-adaptive-gradient-optimization` requires `stochastic-approximation-and-stochastic-gradient-methods`
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
