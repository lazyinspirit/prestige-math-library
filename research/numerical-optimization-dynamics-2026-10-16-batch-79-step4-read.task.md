# Step 4 batch reviewer — batch **79**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **79**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["79"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 79 | `renewal-age-and-size-structured-numerical-methods` | A | picard-lindelof-and-first-order-odes, one-step-ode-consistency-and-local-error, composite-quadrature-rules, global-ode-and-density-error, adaptive-quadrature-and-error-indicators, hyperbolic-finite-difference-methods |
| 79 | `renewal-age-and-size-structured-numerical-methods-examples` | B | renewal-age-and-size-structured-numerical-methods |

## Your content, in full

### `renewal-age-and-size-structured-numerical-methods` — Renewal age and size structured numerical methods

- `def-age-structured-renewal-transport-problem` · definition — Linear age-structured renewal transport problem
- `def-size-structured-transport-and-division-kernel` · definition — Size transport with a nonlocal division kernel
- `thm-age-structured-renewal-characteristic-solution` · theorem — Characteristic formula and Volterra solution for age renewal transport
- `alg-size-structured-finite-volume-flux-and-kernel-quadrature` · algorithm — Finite-volume size transport with positive division quadrature
- `alg-age-cohort-characteristic-quadrature` · algorithm — Age-cohort quadrature along exact characteristics
- `def-age-structured-renewal-finite-cutoff-model` · definition — Finite-age renewal model with absorbing outflow
- `thm-age-structured-renewal-semigroup-growth-and-data-stability` · theorem — Positive age-renewal evolution and L1 data stability
- `thm-size-structured-positivity-number-and-weighted-moment-identities` · theorem — Size characteristics, positivity, and discrete number and size-moment balances
- `thm-age-structured-renewal-finite-cutoff-characteristic-solution` · theorem — Characteristic solution and mass bound for the finite-age renewal model
- `alg-age-structured-positive-birth-quadrature` · algorithm — Positive composite or capped-adaptive quadrature for renewal births
- `thm-age-cohort-quadrature-weak-consistency` · theorem — Weak consistency of age-cohort characteristic quadrature
- `alg-age-structured-renewal-upwind-finite-volume` · algorithm — Finite-volume upwind scheme for age renewal transport
- `thm-age-structured-renewal-upwind-positivity-mass-bound-and-stability` · theorem — Positivity, L1 growth and data stability of the renewal finite-volume step
- `thm-age-structured-renewal-smooth-first-order-convergence` · theorem — First-order finite-volume convergence for compatible smooth renewal data
- `thm-age-structured-renewal-bv-l1-convergence` · theorem — L1 convergence for BV data without renewal-boundary compatibility
- `thm-age-structured-renewal-cutoff-tail-and-outflow-bound` · theorem — Age-cutoff survival, outflow and infinite-age tail bounds

### `renewal-age-and-size-structured-numerical-methods-examples` — Renewal age and size structured numerical methods — Examples

- `ex-narrow-maturation-kernel-delay-approximation` · example — A narrow maturation kernel approaches a delayed birth term
- `ex-half-size-division-numerical-moment-budget` · example — Half-size division preserves the discrete biomass budget
- `ex-constant-mortality-and-age-localized-fertility` · example — Constant mortality with age-localized fertility
- `ex-age-cutoff-versus-outflow-tail-error` · example — A longer run exposes age-cutoff outflow error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `renewal-age-and-size-structured-numerical-methods` requires `one-step-ode-consistency-and-local-error`
- `renewal-age-and-size-structured-numerical-methods` requires `composite-quadrature-rules`
- `renewal-age-and-size-structured-numerical-methods` requires `global-ode-and-density-error`
- `renewal-age-and-size-structured-numerical-methods` requires `adaptive-quadrature-and-error-indicators`
- `renewal-age-and-size-structured-numerical-methods` requires `hyperbolic-finite-difference-methods`
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
