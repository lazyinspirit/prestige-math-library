# Step 4 batch reviewer — batch **82**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **82**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["82"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 82 | `gaussian-quadrature` | A | inner-product-spaces-and-orthogonality, polynomial-interpolation-and-remainder, verified-linear-systems-and-spectral-enclosures, restarted-and-block-eigensolvers, the-lebesgue-integral-and-the-convergence-theorems |
| 82 | `gaussian-quadrature-examples` | B | gaussian-quadrature, the-lebesgue-and-riemann-integrals-compared |

## Your content, in full

### `gaussian-quadrature` — Gaussian quadrature

- `def-gauss-moment-data` · definition — Positive-measure Gaussian quadrature moment data
- `def-coordinatewise-product-moment-functional` · definition — Coordinatewise product-moment functional for tensor polynomials
- `def-gauss-polynomial-moment-inner-product` · definition — The polynomial moment pairing
- `thm-gauss-polynomial-moment-pairing-is-an-inner-product` · theorem — The polynomial moment pairing is a real inner product
- `thm-monic-gauss-orthogonal-polynomials-exist-uniquely` · theorem — Monic orthogonal polynomials exist uniquely through the quadrature order
- `lem-gauss-monic-three-term-recurrence` · lemma — Monic orthogonal polynomials satisfy a three-term recurrence
- `thm-gauss-orthogonal-polynomial-has-simple-interior-zeros` · theorem — The Gauss orthogonal polynomial has simple roots inside the interval
- `thm-hermite-interpolant-double-node-remainder` · theorem — Double-node Hermite interpolation has the stated pointwise remainder
- `def-gauss-quadrature-rule` · definition — The m-node Gaussian quadrature rule for a positive measure
- `thm-jacobi-matrix-spectrum-equals-gauss-nodes` · theorem — The Jacobi matrix spectrum is the set of Gauss nodes
- `lem-gauss-quadrature-rule-data-well-defined` · lemma — The Gaussian nodes, cardinal polynomials and weights are well-defined
- `def-tensor-product-gauss-rule` · definition — Tensor-product Gaussian quadrature
- `thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights` · theorem — Gaussian quadrature is exact through degree 2m−1 and has positive weights
- `thm-gauss-hermite-mean-value-remainder` · theorem — Gaussian quadrature has the Hermite mean-value remainder
- `thm-gauss-weights-equal-mu0-times-first-eigenvector-coordinate-squared` · theorem — Gaussian weights equal the total mass times a Jacobi eigenvector's first-coordinate square
- `thm-tensor-product-gauss-exactness-and-exponential-node-count` · theorem — Tensor-product Gaussian quadrature preserves coordinatewise exactness
- `lem-gauss-weight-residual-gap-bound` · lemma — A residual and spectral gap bound a Gaussian weight error
- `alg-golub-welsch-certified-node-and-weight-enclosures` · algorithm — Certified Gaussian nodes and weights by Golub–Welsch
- `thm-golub-welsch-certified-enclosures-are-sound` · theorem — Certified Golub–Welsch intervals contain the Gaussian nodes and weights
- `lem-tensor-product-moment-functional-equals-product-measure-integral` · lemma — Tensor product moments equal integration against the finite product measure
- `thm-consecutive-gauss-orthogonal-polynomials-strictly-interlace` · theorem — Consecutive Gaussian orthogonal polynomials and Jacobi truncations strictly interlace

### `gaussian-quadrature-examples` — Gaussian quadrature — Examples

- `ex-two-node-gauss-weights-from-cardinal-squares` · example — Two Gaussian weights are the squared norms of the two cardinal polynomials
- `ex-four-dimensional-gauss-product-has-sixteen-nodes` · example — Four two-node Gaussian rules give a sixteen-node tensor rule
- `ex-two-node-gauss-legendre-exact-through-degree-three` · example — The two-node Gauss–Legendre rule is exact through degree three

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `gaussian-quadrature` requires `polynomial-interpolation-and-remainder`
- `gaussian-quadrature` requires `verified-linear-systems-and-spectral-enclosures`
- `gaussian-quadrature` requires `restarted-and-block-eigensolvers`
- `deferred-correction-and-collocation-iterations` requires `gaussian-quadrature`
- `sparse-grid-cubature-and-mixed-regularity` requires `gaussian-quadrature`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `gaussian-quadrature`
- `variational-crimes-and-strang-lemmas` requires `gaussian-quadrature`
- `spectral-collocation-and-galerkin-methods` requires `gaussian-quadrature`
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
