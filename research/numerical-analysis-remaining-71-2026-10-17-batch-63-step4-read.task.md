# Step 4 batch reviewer — batch **63**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **63**. Step-5 owning group: **u**.
Return `group: "u"` and `batches: ["63"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 63 | `curved-mesh-geometry-and-conservative-mesh-transfer` | A | adaptive-finite-element-methods, delaunay-triangulations-and-voronoi-computation |
| 63 | `curved-mesh-geometry-and-conservative-mesh-transfer-examples` | B | curved-mesh-geometry-and-conservative-mesh-transfer |

## Your content, in full

### `curved-mesh-geometry-and-conservative-mesh-transfer` — Curved geometry, mesh generation and conservative transfer

- `def-intersection-volume-conservative-remapping` · definition — Intersection-volume conservative remapping
- `def-isoparametric-curved-cell-map` · definition — Admissible isoparametric curved cells
- `lem-h2-zero-boundary-p1-interpolant-conforming` · lemma — The nodal P1 interpolant preserves homogeneous boundary values
- `def-curved-domain-geometry-approximation` · definition — Curved-domain geometry approximation errors
- `lem-curved-p1-interpolation-scaling` · lemma — P1 interpolation scaling on uniformly curved cells
- `lem-isoparametric-pullback-and-surface-metric` · lemma — Pullback gradients and induced surface metrics
- `thm-overlap-remap-l2-projection-conservation-positivity` · theorem — Overlap remapping is an L2 projection, conservative and positive
- `lem-curved-boundary-lift-residual` · lemma — Geometry error bounds a pulled-back boundary-lift residual
- `lem-isoparametric-cofactor-normal-perturbation` · lemma — Cofactor, surface-Jacobian, and normal perturbation bounds
- `lem-isoparametric-laplace-tensor-defect` · lemma — Derivative geometry error controls the Laplace tensor defect
- `lem-parabolic-domain-map-approximation` · lemma — P1 approximation of a parabolic shear map
- `thm-overlap-remap-error-from-approximation-and-geometry` · theorem — Remap error separates source, target and geometry approximation
- `lem-curved-nvb-closure-preserves-matching-traces` · lemma — Conforming NVB closure preserves curved shared traces
- `thm-curved-isoparametric-strang-error-bound` · theorem — Strang error bound for a parabolic isoparametric P1 family
- `alg-certified-convex-polygon-overlap` · algorithm — Exact certified clipping of convex rational polygons
- `thm-certified-polygon-overlap-correctness` · theorem — Certified clipping returns the exact convex polygon overlap
- `alg-delaunay-seeded-curved-uniform-nvb-refinement` · algorithm — Delaunay-seeded curved uniform NVB refinement
- `thm-curved-uniform-nvb-quality-and-termination` · theorem — Quality and finite termination for the curved square NVB family

### `curved-mesh-geometry-and-conservative-mesh-transfer-examples` — Curved geometry, mesh generation and conservative transfer — Examples

- `ex-inverted-isoparametric-map-detection` · example — An orientation-reversing cell fails the Jacobian certificate
- `ex-isoparametric-unit-disk-mesh` · example — A ten-cell isoparametric mesh exactly covers the unit disk
- `ex-conservative-transfer-between-moving-curved-meshes` · example — Opposite diagonals conserve mass under a curved shear
- `ex-parabolic-curved-domain-linear-geometry-approximation` · example — A parabolic shear has certified linear geometry approximations
- `cex-delaunay-tetrahedral-sliver` · counterexample — An empty-sphere tetrahedron can be arbitrarily flat

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `curved-mesh-geometry-and-conservative-mesh-transfer` requires `adaptive-finite-element-methods`
- `curved-mesh-geometry-and-conservative-mesh-transfer` requires `delaunay-triangulations-and-voronoi-computation`
- `ale-interface-and-partitioned-multiphysics-discretization` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
- `hp-finite-elements-and-spectral-element-methods` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
- `isogeometric-galerkin-methods` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
- `semi-lagrangian-characteristic-transport` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
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
