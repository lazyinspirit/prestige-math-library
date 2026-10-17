# Step 4 batch reviewer — batch **4**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **4**. Step-5 owning group: **n**.
Return `group: "n"` and `batches: ["4"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 4 | `polynomial-interpolation-and-remainder` | A | darboux-lhopital-and-taylor, fundamental-trigonometric-identities, the-derivative-and-mean-value-theorems, matrix-norms-condition-numbers-and-numerical-stability, chains-antichains-sperner-and-dilworth |
| 4 | `polynomial-interpolation-and-remainder-examples` | B | polynomial-interpolation-and-remainder, approximation-and-compactness-in-ck |

## Your content, in full

### `polynomial-interpolation-and-remainder` — Polynomial interpolation and remainder

- `lem-finite-coefficient-vector-has-polynomial-representative` · lemma — A finite coefficient vector has a canonical polynomial representative
- `lem-finite-double-sum-interchange` · lemma — Interchanging two finite real sums
- `lem-finite-product-of-nonzero-reals-is-nonzero` · lemma — A finite product of nonzero reals is nonzero
- `lem-polynomial-highest-derivative` · lemma — The highest derivative of a polynomial
- `lem-product-of-linear-factors-is-monic-polynomial` · lemma — A finite product of monic linear factors is monic
- `def-cardinal-polynomial-interpolation` · definition — Cardinal-polynomial interpolation
- `lem-finite-product-of-quotients` · lemma — A finite product of quotients is the quotient of finite products
- `lem-cardinal-basis-degree-and-values` · lemma — Cardinal interpolation functions are polynomials of the stated degrees
- `prop-equispaced-interpolation-basis-growth` · proposition — Equispaced interpolation has linearly growing basis amplification
- `thm-cardinal-polynomial-interpolant-exists-uniquely` · theorem — Existence and uniqueness of the cardinal-polynomial interpolant
- `thm-barycentric-interpolation-identities` · theorem — Barycentric interpolation identities
- `thm-lagrange-interpolation-remainder` · theorem — Pointwise Lagrange interpolation remainder
- `alg-finite-barycentric-interpolation-evaluator` · algorithm — Finite barycentric interpolation evaluator
- `prop-finite-barycentric-interpolation-evaluator-returns-status` · proposition — The finite barycentric evaluator terminates with an explicit status

### `polynomial-interpolation-and-remainder-examples` — Polynomial interpolation and remainder — Examples

- `ex-equispaced-cardinal-basis-growth` · example — Unit nodal data exhibit equispaced cardinal basis growth
- `ex-quadratic-interpolation-at-three-nodes` · example — Quadratic interpolation at three nodes is exact
- `ex-cubic-interpolation-pointwise-remainder` · example — A cubic gives equality in the pointwise interpolation remainder

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `deferred-correction-and-collocation-iterations` requires `polynomial-interpolation-and-remainder`
- `polynomial-approximation-and-chebyshev-interpolation` requires `polynomial-interpolation-and-remainder`
- `composite-quadrature-rules` requires `polynomial-interpolation-and-remainder`
- `clenshaw-curtis-and-extrapolation-quadrature` requires `polynomial-interpolation-and-remainder`
- `gaussian-quadrature` requires `polynomial-interpolation-and-remainder`
- `numerical-differentiation-and-derivative-error-control` requires `polynomial-interpolation-and-remainder`
- `finite-element-meshes-and-interpolation` requires `polynomial-interpolation-and-remainder`
- `spectral-collocation-and-galerkin-methods` requires `polynomial-interpolation-and-remainder`
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
