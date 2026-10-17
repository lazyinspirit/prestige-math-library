# Step 4 batch reviewer — batch **43**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **43**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["43"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 43 | `clenshaw-curtis-and-extrapolation-quadrature` | A | polynomial-interpolation-and-remainder, computed-fast-transforms-and-convolution, polynomial-approximation-and-chebyshev-interpolation, composite-quadrature-rules |
| 43 | `clenshaw-curtis-and-extrapolation-quadrature-examples` | B | clenshaw-curtis-and-extrapolation-quadrature |

## Your content, in full

### `clenshaw-curtis-and-extrapolation-quadrature` — Clenshaw curtis and extrapolation quadrature

- `alg-na-romberg-trapezoid-table` · algorithm — Finite Romberg table from nested composite trapezoid levels
- `def-na-bernoulli-polynomials` · definition — Bernoulli polynomials by a normalized coefficient recursion
- `def-na-clenshaw-curtis-dct-i` · definition — Type-I cosine transform for Chebyshev–Lobatto data
- `def-na-closed-newton-cotes-eight-panel-rule` · definition — Closed Newton–Cotes rule on eight equal panels
- `def-na-peano-kernel` · definition — Peano kernel of a finite quadrature functional
- `lem-na-chebyshev-degree-bound-from-recurrence` · lemma — The Chebyshev recurrence gives degree at most its index
- `lem-na-chebyshev-recurrence-angle-identity` · lemma — The Chebyshev recurrence agrees with cosine multiple angles
- `lem-na-bernoulli-polynomial-identities` · lemma — Derivative, endpoint, parity, and boundedness identities for Bernoulli polynomials
- `lem-na-chebyshev-integral-moments` · lemma — Exact integrals of Chebyshev polynomials
- `lem-na-clenshaw-curtis-dct-i-orthogonality` · lemma — Weighted cosine orthogonality on the Lobatto grid
- `thm-na-peano-kernel-remainder-and-bound` · theorem — Peano representation and L1 error bound
- `thm-na-euler-maclaurin-composite-trapezoid-remainder` · theorem — Finite Euler–Maclaurin formula for the composite trapezoid
- `cor-na-composite-trapezoid-even-power-expansion` · corollary — Even-power expansion of trapezoid levels with a uniform remainder
- `lem-na-closed-newton-cotes-eight-panel-weights-and-exactness` · lemma — Exact weights and degree-nine exactness of the eight-panel rule
- `thm-na-romberg-even-power-cancellation` · theorem — Romberg cancels a proved finite even-power expansion
- `cor-na-closed-newton-cotes-eight-panel-peano-bound` · corollary — Peano remainder bound for the eight-panel rule
- `thm-na-clenshaw-curtis-interpolation-coefficients` · theorem — DCT-I coefficients of the Chebyshev–Lobatto interpolant
- `def-na-clenshaw-curtis-quadrature` · definition — Clenshaw–Curtis quadrature with the midpoint zero-degree case
- `thm-na-clenshaw-curtis-exactness-and-near-best-error` · theorem — Polynomial exactness and best-approximation error for Clenshaw–Curtis
- `alg-na-computed-clenshaw-curtis-via-fast-dft` · algorithm — Computed Clenshaw–Curtis from an even-extension DFT

### `clenshaw-curtis-and-extrapolation-quadrature-examples` — Clenshaw curtis and extrapolation quadrature — Examples

- `ex-na-square-root-endpoint-breaks-romberg-order` · example — The square-root endpoint does not have Romberg's even-power order
- `ex-na-eight-panel-newton-cotes-negative-weight-amplification` · example — Negative weights amplify sample perturbations in the nine-point Newton–Cotes rule
- `ex-na-clenshaw-curtis-integrates-quadratics` · example — Three-point Clenshaw–Curtis integration of a quadratic

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `clenshaw-curtis-and-extrapolation-quadrature` requires `polynomial-interpolation-and-remainder`
- `clenshaw-curtis-and-extrapolation-quadrature` requires `computed-fast-transforms-and-convolution`
- `clenshaw-curtis-and-extrapolation-quadrature` requires `polynomial-approximation-and-chebyshev-interpolation`
- `clenshaw-curtis-and-extrapolation-quadrature` requires `composite-quadrature-rules`
- `adaptive-quadrature-and-error-indicators` requires `clenshaw-curtis-and-extrapolation-quadrature`
- `sparse-grid-cubature-and-mixed-regularity` requires `clenshaw-curtis-and-extrapolation-quadrature`
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
