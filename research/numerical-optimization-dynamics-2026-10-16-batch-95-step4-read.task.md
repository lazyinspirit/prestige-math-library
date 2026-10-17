# Step 4 batch reviewer — batch **95**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **95**. Step-5 owning group: **k**.
Return `group: "k"` and `batches: ["95"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 95 | `deferred-correction-and-collocation-iterations` | A | polynomial-interpolation-and-remainder, global-ode-and-density-error, runge-kutta-methods-and-order, implicit-stiff-time-stepping-and-algebraic-error, gaussian-quadrature |
| 95 | `deferred-correction-and-collocation-iterations-examples` | B | deferred-correction-and-collocation-iterations |

## Your content, in full

### `deferred-correction-and-collocation-iterations` — Deferred correction and collocation iterations

- `lem-continuous-riemann-lebesgue-agreement` · lemma — Riemann and Lebesgue integrals agree for continuous data on [0,1]
- `lem-unit-interval-lebesgue-gauss-data-valid` · lemma — Lebesgue measure on the unit interval supplies Gaussian moment data
- `def-collocation-quadrature-tableau` · definition — Collocation tableau from distinct quadrature nodes
- `lem-collocation-quadrature-matrix-well-defined` · lemma — Collocation quadrature data are well defined
- `alg-explicit-left-euler-sdc-sweep` · algorithm — Finite explicit-left-Euler spectral deferred-correction sweep
- `lem-sdc-sweep-work-and-storage-bound` · lemma — Stage-call, storage and arithmetic bounds for a finite SDC execution
- `lem-sdc-fixed-point-is-collocation-stage` · lemma — Fixed points of the SDC sweep are collocation stages
- `lem-one-node-gauss-data-is-midpoint` · lemma — One-node Gauss data are midpoint data
- `lem-sdc-scalar-linear-iteration-matrix` · lemma — SDC iteration matrix for the scalar linear test equation
- `thm-sdc-sweep-contraction-and-error-bound` · theorem — Contraction and residual error bound for the SDC sweep
- `lem-collocation-polynomial-scaled-derivatives` · lemma — Collocation polynomial derivatives scale with the step size
- `thm-collocation-local-defect-order-m` · theorem — M-node collocation has local defect order M
- `thm-collocation-one-step-stability` · theorem — Small-step collocation maps are Lipschitz stable
- `lem-gauss-collocation-weighted-defect-bound` · lemma — A Gaussian collocation defect has a high-order weighted endpoint bound
- `prop-one-node-gauss-collocation-order-two` · proposition — One-node Gauss collocation is implicit midpoint of order two
- `thm-collocation-global-order-m` · theorem — M-node collocation has global order M
- `thm-sdc-finite-sweeps-raise-order` · theorem — Each SDC sweep raises the order up to the collocation order
- `thm-sdc-residual-tolerance-preserves-order` · theorem — A stage residual tolerance preserves collocation order
- `thm-gauss-collocation-local-defect-order-2m` · theorem — M-node Gauss collocation has local defect order 2M
- `thm-gauss-collocation-global-order-2m` · theorem — M-node Gauss collocation has global order 2M

### `deferred-correction-and-collocation-iterations-examples` — Deferred correction and collocation iterations — Examples

- `ex-sdc-cost-accounting-per-sweep` · example — Work and storage counts for an M-node SDC sweep
- `ex-sdc-one-node-gauss-stiff-iteration-diverges` · example — An explicit SDC sweep diverges on a stiff scalar mode
- `ex-sdc-two-node-gauss-nonstiff-cubic-ivp` · example — Two-node Gauss collocation exactly solves a nonstiff cubic IVP
- `ex-sdc-constant-predictor-too-few-sweeps` · example — Too few sweeps lower the order from Gauss collocation
- `ex-sdc-inexact-midpoint-stage-residual` · example — An inexact midpoint stage solve has a controlled update error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `deferred-correction-and-collocation-iterations` requires `polynomial-interpolation-and-remainder`
- `deferred-correction-and-collocation-iterations` requires `global-ode-and-density-error`
- `deferred-correction-and-collocation-iterations` requires `runge-kutta-methods-and-order`
- `deferred-correction-and-collocation-iterations` requires `implicit-stiff-time-stepping-and-algebraic-error`
- `deferred-correction-and-collocation-iterations` requires `gaussian-quadrature`
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
