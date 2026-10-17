# Step 4 batch reviewer — batch **87**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **87**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["87"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 87 | `coagulation-fragmentation-and-sectional-population-balance-numerics` | A | one-step-ode-consistency-and-local-error, composite-quadrature-rules, global-ode-and-density-error, runge-kutta-methods-and-order, positive-conservative-production-destruction-integrators, interacting-particle-mean-field-and-vortex-blob-error |
| 87 | `coagulation-fragmentation-and-sectional-population-balance-numerics-examples` | B | coagulation-fragmentation-and-sectional-population-balance-numerics |

## Your content, in full

### `coagulation-fragmentation-and-sectional-population-balance-numerics` — Coagulation fragmentation and sectional population balance numerics

- `def-bounded-lipschitz-discrepancy-for-measures` · definition — Bounded-Lipschitz discrepancy for finite measures
- `def-conservative-fixed-pivot-redistribution` · definition — Conservative fixed-pivot redistribution on a finite positive grid
- `def-finite-discrete-coagulation-fragmentation-system` · definition — Finite discrete coagulation and fragmentation with a mass reservoir
- `def-weighted-total-variation-space-for-population-measures` · definition — Weighted total-variation space for population measures
- `lem-convergent-power-series-termwise-differentiation` · lemma — Convergent power series differentiate term by term inside their radius
- `alg-finite-sectional-coagulation-fragmentation-balance` · algorithm — Finite sectional coagulation-fragmentation balance with reported overflow
- `def-continuous-size-coagulation-fragmentation-weak-model` · definition — Continuous-size coagulation-fragmentation weak model
- `lem-bounded-lipschitz-discrepancy-dominated-by-weighted-total-variation` · lemma — Weighted total variation bounds bounded-Lipschitz discrepancy
- `lem-finite-coagulation-fragmentation-event-moments` · lemma — Stoichiometric number and mass changes for finite coagulation and fragmentation events
- `lem-fixed-pivot-barycentric-identities` · lemma — Fixed-pivot weights are positive and reproduce number and mass
- `lem-rooted-tree-generating-function-series` · lemma — Rooted-tree series and the inverse of u exp(-u)
- `lem-weighted-total-variation-space-is-complete` · lemma — The weighted total-variation measure space is complete
- `alg-finite-sectional-forward-euler-positivity-cfl` · algorithm — Forward Euler for a finite sectional balance with a positivity CFL
- `def-infinite-fixed-pivot-sectional-dynamics` · definition — Unbounded-grid fixed-pivot coagulation-fragmentation dynamics
- `lem-continuous-coagulation-operator-weighted-total-variation-bound` · lemma — Bounded coagulation is bilinear and bounded in weighted total variation
- `lem-continuous-fragmentation-operator-weighted-total-variation-bound` · lemma — Mass-normalized fragmentation is bounded in weighted total variation
- `lem-finite-sectional-vector-field-locally-lipschitz` · lemma — The finite sectional reaction vector field is locally Lipschitz
- `thm-finite-sectional-positivity-and-mass-reservoir-conservation` · theorem — Finite sectional event dynamics preserve positivity and retained-plus-reservoir mass
- `thm-product-kernel-pre-gelation-second-moment-blowup` · theorem — The discrete product-kernel solution has finite-time second-moment blow-up
- `lem-continuous-coagulation-fragmentation-vector-field-locally-lipschitz` · lemma — The bounded-kernel continuous coagulation-fragmentation field is locally Lipschitz
- `thm-finite-sectional-forward-euler-positivity-and-conservation` · theorem — The sectional forward-Euler step is positive and conserves augmented mass
- `thm-finite-sectional-global-ode-and-moment-bounds` · theorem — Finite sectional dynamics have a unique global positive solution
- `thm-infinite-fixed-pivot-sectional-global-wellposedness-and-bl-stability` · theorem — Unbounded-grid fixed-pivot dynamics are globally well posed and stable
- `lem-continuous-coagulation-fragmentation-local-positive-wellposedness` · lemma — Bounded kernels give a local positive measure-valued solution
- `lem-fixed-pivot-coagulation-fragmentation-quadrature-error` · lemma — Fixed-pivot projection has first-order bounded-Lipschitz kernel quadrature error
- `thm-finite-sectional-forward-euler-global-first-order-error` · theorem — Sectional forward Euler converges globally with first-order error
- `thm-continuous-coagulation-fragmentation-moment-bounds` · theorem — Bounded-kernel measure solutions conserve mass and control number and second moments
- `lem-second-moment-controls-tail-mass-and-number` · lemma — A second moment controls the discarded mass and number tails
- `thm-bounded-kernel-continuous-coagulation-fragmentation-global-wellposedness` · theorem — Bounded binary coagulation-fragmentation is globally well posed in weighted total variation
- `thm-continuous-coagulation-fragmentation-bounded-lipschitz-stability` · theorem — Bounded-kernel measure solutions are stable in bounded-Lipschitz discrepancy
- `thm-infinite-fixed-pivot-sectional-grid-error` · theorem — The unbounded fixed-pivot flow has first-order grid error
- `lem-cutoff-overflow-return-error-bound` · lemma — Finite cutoff differs from the unbounded pivot model by a controlled return error
- `thm-sectional-semiflow-cutoff-error-budget` · theorem — Sectional size discretization separates grid and cutoff errors
- `thm-sectional-forward-euler-total-error-budget` · theorem — Sectional forward Euler separates temporal, quadrature, and cutoff errors

### `coagulation-fragmentation-and-sectional-population-balance-numerics-examples` — Coagulation fragmentation and sectional population balance numerics — Examples

- `ex-binary-fragmentation-preserves-first-moment` · example — A binary split preserves first moment and increases number by one
- `ex-constant-kernel-coagulation-number-decay-and-mass` · example — Constant-kernel aggregation conserves mass and has explicit number decay
- `ex-fixed-pivot-redistributes-between-adjacent-pivots` · example — A product between pivots is split without changing number or mass
- `cex-product-kernel-blowup-defeats-a-global-grid-inference` · counterexample — Finite-grid mass conservation does not bound the product-kernel continuum second moment
- `ex-cutoff-overflow-is-reported-as-lost-mass` · example — An above-cutoff product moves mass into the reported reservoir

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `one-step-ode-consistency-and-local-error`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `composite-quadrature-rules`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `global-ode-and-density-error`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `runge-kutta-methods-and-order`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `positive-conservative-production-destruction-integrators`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `interacting-particle-mean-field-and-vortex-blob-error`
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
