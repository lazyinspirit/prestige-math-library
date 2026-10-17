# Step 4 batch reviewer — batch **24**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **24**. Step-5 owning group: **ag**.
Return `group: "ag"` and `batches: ["24"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 24 | `finite-element-meshes-and-interpolation` | A | smooth-approximation-and-sobolev-extension, sobolev-poincare-and-morrey-inequalities, sobolev-traces-and-zero-boundary-values, weak-derivatives-and-sobolev-spaces, polynomial-interpolation-and-remainder, tangent-cotangent-and-the-differential |
| 24 | `finite-element-meshes-and-interpolation-examples` | B | finite-element-meshes-and-interpolation |

## Your content, in full

### `finite-element-meshes-and-interpolation` — Finite-element meshes and interpolation

- `def-matching-affine-simplicial-meshes` · definition — Matching affine simplicial meshes and shape regularity
- `def-oriented-simplicial-cell-chains` · definition — Oriented simplicial cell chains and boundary
- `lem-simplicial-boundary-squared-zero` · lemma — The simplicial boundary of a boundary is zero
- `def-broken-and-conforming-polynomial-spaces` · definition — Broken and conforming polynomial spaces on a matching mesh
- `def-reference-finite-element-and-unisolvent-dofs` · definition — Reference finite elements and unisolvent degrees of freedom
- `lem-unisolvent-dofs-define-reference-interpolant` · lemma — Unisolvent degrees of freedom define a unique reference interpolant
- `lem-reference-polynomial-norm-equivalence` · lemma — Polynomial derivative and face norms are controlled on a reference simplex
- `lem-affine-pullback-weak-derivatives-and-scaling` · lemma — Affine pullback of weak derivatives and Sobolev seminorms
- `lem-shape-regular-affine-simplex-scaling` · lemma — Shape regularity controls affine simplex geometry
- `lem-oriented-facet-cancellation-on-matching-meshes` · lemma — Interior facet orientations cancel in a matching mesh
- `lem-affine-simplex-gauss-green-formula` · lemma — Gauss–Green formula on an affine simplex
- `lem-smooth-density-on-reference-simplex` · lemma — Smooth functions are dense in finite-order Sobolev spaces on a reference simplex
- `thm-reference-simplex-sobolev-extension` · theorem — A reference simplex is an integer-order Sobolev extension domain
- `thm-reference-simplex-trace-and-gauss-green` · theorem — Sobolev face traces and Gauss–Green on a reference simplex
- `thm-matching-continuous-piecewise-polynomials-are-wkp` · theorem — Continuous matching piecewise polynomials belong to W1p
- `thm-zero-boundary-piecewise-polynomials-in-w10p` · theorem — Zero-boundary conforming polynomials lie in W0 1p and satisfy Poincare
- `thm-reference-simplex-poincare-wirtinger` · theorem — Poincare–Wirtinger inequality on a reference simplex
- `thm-bramble-hilbert-on-reference-simplex` · theorem — Bramble–Hilbert approximation on a reference simplex
- `thm-local-finite-element-interpolation-estimates` · theorem — Local interpolation estimates on shape-regular affine meshes
- `thm-polynomial-inverse-and-discrete-trace-estimates` · theorem — Polynomial inverse and discrete trace inequalities
- `def-covariant-contravariant-piola-maps-and-hdiv-hcurl` · definition — Covariant and contravariant Piola maps and H(div)/H(curl) spaces
- `thm-affine-piola-differential-and-trace-moment-identities` · theorem — Affine Piola maps commute with differential operators and preserve moments
- `lem-affine-piola-transport-preserves-commuting-interpolation` · lemma — Affine Piola transport preserves commuting interpolation diagrams
- `thm-lagrange-point-evaluation-threshold-on-reference-simplex` · theorem — Sobolev threshold for Lagrange point evaluations on a reference simplex

### `finite-element-meshes-and-interpolation-examples` — Finite-element meshes and interpolation — Examples

- `ex-affine-triangle-and-parallelogram-maps` · example — Affine maps for a triangle and a parallelogram
- `ex-shape-regular-and-sliver-triangle-families` · example — A shape-regular family and a degenerating sliver family
- `cex-critical-lagrange-point-evaluation-on-h1-in-two-dimensions` · counterexample — Point evaluation is unbounded at the two-dimensional H1 threshold
- `ex-oriented-boundary-cancellation-on-two-triangles` · example — Opposite orientations cancel on a two-triangle mesh

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-element-meshes-and-interpolation` requires `polynomial-interpolation-and-remainder`
- `polynomial-chaos-stochastic-collocation-and-galerkin-uq` requires `finite-element-meshes-and-interpolation`
- `finite-element-pde-constrained-optimization` requires `finite-element-meshes-and-interpolation`
- `ceas-lemma-and-aubin-nitsche-error-estimates` requires `finite-element-meshes-and-interpolation`
- `parabolic-finite-element-methods` requires `finite-element-meshes-and-interpolation`
- `finite-element-eigenvalue-approximation` requires `finite-element-meshes-and-interpolation`
- `variational-crimes-and-strang-lemmas` requires `finite-element-meshes-and-interpolation`
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
