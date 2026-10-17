# Step 4 batch reviewer — batch **78**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **78**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["78"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 78 | `positive-conservative-production-destruction-integrators` | A | matrix-norms-condition-numbers-and-numerical-stability, finite-precision-direct-factorizations, one-step-ode-consistency-and-local-error, global-ode-and-density-error, runge-kutta-methods-and-order, finite-generator-master-equations-and-uniformization, stability-regions-and-stiff-equations |
| 78 | `positive-conservative-production-destruction-integrators-examples` | B | positive-conservative-production-destruction-integrators |

## Your content, in full

### `positive-conservative-production-destruction-integrators` — Positive conservative production destruction integrators

- `def-finite-conservative-production-destruction-system` · definition — Finite conservative production destruction systems
- `lem-strict-column-dominance-implies-nonnegative-inverse` · lemma — Strict column dominance gives an entrywise nonnegative inverse
- `alg-modified-patankar-euler` · algorithm — Modified Patankar Euler for conservative transfer systems
- `def-source-factored-production-destruction-rates` · definition — Source-factored transfer rates for zero compartments
- `alg-zero-compatible-modified-patankar-euler` · algorithm — Zero-compatible modified Patankar Euler in rate-factor form
- `alg-mprk22-1` · algorithm — The positive-interior MPRK22(1) step
- `thm-modified-patankar-euler-positive-conservative` · theorem — Modified Patankar Euler preserves positivity and total mass
- `lem-modified-patankar-euler-positive-tube-local-error-and-stability` · lemma — Modified Patankar Euler has a uniform first-order defect and one-step bound on positive tubes
- `thm-zero-compatible-modified-patankar-euler-admissibility` · theorem — The factorized zero-state step is well-defined, nonnegative, conservative, and locally first order
- `thm-mprk22-1-positive-conservative` · theorem — MPRK22(1) preserves positivity and total mass on positive inputs
- `lem-mprk22-1-positive-tube-local-error-and-stability` · lemma — MPRK22(1) has a uniform second-order defect and one-step bound on positive tubes
- `thm-modified-patankar-euler-global-first-order-error` · theorem — Modified Patankar Euler converges globally with first-order error on a positive tube
- `thm-patankar-inexact-solve-residual-ledger` · theorem — Certified residuals bound mass drift and the exact-solve positivity margin
- `thm-mprk22-1-global-second-order-error` · theorem — MPRK22(1) has global second-order error on a compact positive tube

### `positive-conservative-production-destruction-integrators-examples` — Positive conservative production destruction integrators — Examples

- `ex-two-compartment-stiff-reversible-transfer` · example — A stiff reversible two-compartment transfer
- `ex-three-species-weighted-stoichiometric-conservation` · example — Three species with weighted number-to-mass conservation
- `ex-zero-denominator-corner-and-factorized-extension` · example — A zero compartment makes the standard ratio undefined
- `cex-small-residual-does-not-certify-positivity` · counterexample — An arbitrarily small residual does not certify the candidate's nonnegativity
- `cex-forward-euler-negative-concentration-despite-stability` · counterexample — A stable forward Euler step can still make a concentration negative

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `positive-conservative-production-destruction-integrators` requires `finite-precision-direct-factorizations`
- `positive-conservative-production-destruction-integrators` requires `one-step-ode-consistency-and-local-error`
- `positive-conservative-production-destruction-integrators` requires `global-ode-and-density-error`
- `positive-conservative-production-destruction-integrators` requires `runge-kutta-methods-and-order`
- `positive-conservative-production-destruction-integrators` requires `finite-generator-master-equations-and-uniformization`
- `positive-conservative-production-destruction-integrators` requires `stability-regions-and-stiff-equations`
- `coagulation-fragmentation-and-sectional-population-balance-numerics` requires `positive-conservative-production-destruction-integrators`
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
