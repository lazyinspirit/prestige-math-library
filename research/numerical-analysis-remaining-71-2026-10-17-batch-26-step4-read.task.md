# Step 4 batch reviewer — batch **26**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **26**. Step-5 owning group: **i**.
Return `group: "i"` and `batches: ["26"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 26 | `singular-and-infinite-interval-quadrature` | A | gaussian-quadrature, clenshaw-curtis-and-extrapolation-quadrature, the-residue-theorem |
| 26 | `singular-and-infinite-interval-quadrature-examples` | B | singular-and-infinite-interval-quadrature |

## Your content, in full

### `singular-and-infinite-interval-quadrature` — Singular and infinite interval quadrature

- `alg-double-exponential-trapezoid` · algorithm — Finite truncated tanh–sinh, exp–sinh, and sinh–sinh trapezoid rules
- `def-duffy-reference-triangle-map` · definition — The reference-triangle Duffy map from a vertex
- `lem-c1-divided-difference-extends-continuously` · lemma — The first divided difference of a C1 function extends continuously
- `lem-double-exponential-truncated-tail-bound` · lemma — A double-exponential envelope bounds the omitted trapezoid tails
- `lem-log-power-regularity-after-endpoint-substitution` · lemma — A sufficiently high power regularizes finite logarithmic endpoint factors
- `lem-real-power-improper-integral` · lemma — The improper integral of a power at zero
- `thm-analytic-strip-trapezoid-error` · theorem — An analytic-strip error bound for the infinite trapezoid sum
- `thm-gaussian-product-rule-error-bound` · theorem — A tensor product of two positive Gaussian rules has a derivative error bound
- `def-cauchy-principal-value-subtraction` · definition — Symmetric Cauchy principal value by subtraction
- `lem-duffy-reference-map-jacobian-and-image` · lemma — The reference-triangle Duffy map has the stated image and Jacobian
- `lem-real-power-lebesgue-integrability` · lemma — A power above exponent minus one is Lebesgue integrable at zero
- `thm-double-exponential-transforms-and-integral-identities` · theorem — The double-exponential maps and their change-of-variable identities
- `lem-gauss-jacobi-weight-finite-moment-measure` · lemma — The Jacobi weight defines a finite positive measure with full support
- `thm-cauchy-principal-value-subtraction-identity` · theorem — The Cauchy principal-value subtraction identity
- `thm-double-exponential-trapezoid-error-bound` · theorem — A finite double-exponential trapezoid has separate strip and tail errors
- `thm-duffy-weak-singularity-transform` · theorem — The Duffy map turns a vertex singularity into an integrable radial weight
- `def-gauss-jacobi-quadrature-rule` · definition — The Gauss–Jacobi quadrature rule
- `alg-duffy-weighted-product-gauss-quadrature` · algorithm — Weighted product Gauss quadrature after the Duffy transform
- `alg-endpoint-power-regularized-jacobi-quadrature` · algorithm — Finite endpoint power substitution followed by Gauss–Jacobi quadrature
- `lem-gauss-jacobi-rule-data-well-defined` · lemma — Gauss–Jacobi nodes and weights are well-defined
- `thm-gauss-jacobi-exactness-and-derivative-error` · theorem — Gauss–Jacobi exactness and the derivative remainder
- `cor-duffy-weighted-product-gauss-error` · corollary — The Duffy weighted product rule has an explicit bound using pure coordinate derivatives
- `thm-endpoint-regularized-jacobi-error` · theorem — Error bound after endpoint power regularization

### `singular-and-infinite-interval-quadrature-examples` — Singular and infinite interval quadrature — Examples

- `ex-gaussian-integral-on-infinite-line-by-tanh-sinh` · example — The Gaussian integral on the line with a certified sinh-sinh truncation tail
- `ex-principal-value-subtraction-with-interior-pole` · example — An interior Cauchy principal value reduces to a regular integral
- `ex-duffy-weak-singularity-on-reference-triangle` · example — A 1 over r singularity on the reference triangle
- `ex-x-minus-half-log-x-gauss-jacobi` · example — Gauss–Jacobi regularization for x to the minus one half times log x

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `boundary-integral-equations-and-galerkin-bem` requires `singular-and-infinite-interval-quadrature`
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
