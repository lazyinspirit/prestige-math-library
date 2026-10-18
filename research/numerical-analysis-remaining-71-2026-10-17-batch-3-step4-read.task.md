# Step 4 batch reviewer — batch **3**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **3**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["3"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 3 | `spline-evaluation-and-interpolation-algorithms` | A | finite-precision-direct-factorizations, polynomial-interpolation-and-remainder, splines-series-and-approximation-rates, outward-rounded-interval-and-ball-arithmetic |
| 3 | `spline-evaluation-and-interpolation-algorithms-examples` | B | spline-evaluation-and-interpolation-algorithms |

## Your content, in full

### `spline-evaluation-and-interpolation-algorithms` — Spline evaluation and interpolation algorithms

- `alg-de-boor-coefficient-evaluation` · algorithm — de Boor coefficient evaluation on a specified knot span
- `alg-single-new-b-spline-knot-insertion` · algorithm — Single new-knot insertion for a B-spline curve
- `def-clamped-cubic-spline-interpolant` · definition — Clamped cubic spline interpolant
- `lem-natural-cubic-spline-second-derivative-perturbation` · lemma — Nodal second-derivative perturbations bound the natural spline error
- `alg-natural-cubic-tridiagonal-cholesky-with-residual-certificate` · algorithm — Natural-cubic tridiagonal Cholesky solve with a residual certificate
- `lem-b-spline-basis-refinement-under-single-knot-insertion` · lemma — A single new knot refines the B-spline basis
- `thm-de-boor-coefficient-evaluation-equivalence` · theorem — de Boor evaluation equals the B-spline coefficient expansion
- `thm-de-boor-coefficient-evaluation-work` · theorem — de Boor evaluation uses quadratic work in the degree
- `thm-clamped-cubic-spline-interpolant-exists-uniquely` · theorem — Clamped cubic spline interpolation exists uniquely
- `thm-natural-cubic-spline-tridiagonal-residual-transfer` · theorem — A natural-spline tridiagonal residual bounds the spline value error
- `thm-natural-tridiagonal-cholesky-solve-residual-certificate` · theorem — A successful natural-cubic tridiagonal Cholesky solve has a certified residual
- `thm-de-boor-forward-error-under-operationwise-model` · theorem — A successful rounded de Boor evaluation has a degree-dependent forward bound
- `thm-single-new-knot-insertion-preserves-b-spline-curve` · theorem — Single new-knot insertion preserves the B-spline curve
- `thm-clamped-cubic-spline-fourth-order-error` · theorem — Boundary-compatible clamped cubic interpolation is fourth order in the maximum norm
- `thm-computed-natural-cubic-spline-forward-error-certificate` · theorem — A computed natural-cubic reconstruction has a forward-error certificate

### `spline-evaluation-and-interpolation-algorithms-examples` — Spline evaluation and interpolation algorithms — Examples

- `ex-repeated-knot-de-boor-evaluation` · example — de Boor evaluation with a double knot
- `ex-natural-cubic-x-squared-endpoint-caveat` · example — The natural interpolant of x squared has a second-order endpoint error
- `ex-single-new-knot-insertion-preserves-linear-curve` · example — Inserting a knot leaves a linear B-spline curve fixed

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `shape-preserving-piecewise-polynomial-interpolation` requires `spline-evaluation-and-interpolation-algorithms`
- `isogeometric-galerkin-methods` requires `spline-evaluation-and-interpolation-algorithms`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
