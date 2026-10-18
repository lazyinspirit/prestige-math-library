# Step 4 batch reviewer — batch **54**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **54**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["54"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 54 | `adaptive-finite-element-methods` | A | variational-crimes-and-strang-lemmas |
| 54 | `adaptive-finite-element-methods-examples` | B | adaptive-finite-element-methods |

## Your content, in full

### `adaptive-finite-element-methods` — Adaptive finite-element methods

- `cor-afem-constant-convection-weak-wellposedness` · corollary — Weak well-posedness for constant divergence-free convection
- `def-afem-local-moment-interpolant` · definition — A local moment interpolant for conforming P1 meshes
- `def-afem-nvb-labelled-triangulation-family` · definition — Compatible 2D newest-vertex-bisection meshes
- `def-afem-p1-residual-estimator-and-data-oscillation` · definition — Residual indicators and data oscillation for P1 AFEM
- `lem-afem-vertex-patch-poincare` · lemma — Uniform Poincare inequalities on vertex and cell patches
- `alg-dorfler-marking-and-conforming-nvb-refinement` · algorithm — Dorfler marking and conforming newest-vertex refinement
- `def-afem-p1-approximation-class` · definition — The P1 AFEM approximation class
- `lem-afem-convection-quasi-orthogonality-under-fine-mesh` · lemma — Quasi-orthogonality for constant convection on a fine initial mesh
- `lem-afem-nvb-shape-regularity-and-three-generation-properties` · lemma — Shape regularity and local reduction under 2D newest-vertex bisection
- `lem-afem-p1-residual-representation` · lemma — Element and edge residual representation for P1 Galerkin errors
- `thm-afem-local-moment-interpolation-estimates` · theorem — Local approximation and reproduction of the P1 moment interpolant
- `lem-afem-common-refinement-overlay-and-cardinality` · lemma — Common NVB refinement and overlay cardinality
- `lem-afem-data-oscillation-reduction-under-marked-refinement` · lemma — Data oscillation reduction under three-generation refinement
- `lem-afem-localized-galerkin-refinement-estimate` · lemma — Localized energy estimate for nested Galerkin solutions
- `lem-afem-nvb-conforming-closure-and-cumulative-counting` · lemma — Termination and cumulative complexity of NVB conformity closure
- `thm-afem-p1-residual-reliability-and-local-efficiency` · theorem — Residual reliability and local efficiency for P1 AFEM
- `lem-afem-dorfler-marking-cardinality` · lemma — Dorfler marking is cardinality-optimal up to mesh closure
- `lem-afem-residual-estimator-reduction` · lemma — Reduction of the P1 residual estimator after marked refinement
- `thm-afem-error-and-oscillation-contraction` · theorem — Linear contraction of AFEM energy error and oscillation
- `thm-afem-p1-poisson-optimal-complexity` · theorem — Optimal P1 AFEM complexity for the Laplacian

### `adaptive-finite-element-methods-examples` — Adaptive finite-element methods — Examples

- `ex-afem-coefficient-jump-adds-flux-oscillation` · example — A coefficient jump creates nonzero edge-flux oscillation
- `ex-afem-coarse-convection-mesh-misses-smallness-condition` · example — A coarse mesh can miss the convection smallness condition
- `ex-afem-dorfler-marking-three-cells` · example — A deterministic Dörfler mark on three cells
- `ex-afem-data-oscillation-reduction-under-refinement` · example — Projected data oscillation on a reference triangle

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `curved-mesh-geometry-and-conservative-mesh-transfer` requires `adaptive-finite-element-methods`
- `homogenization-and-multiscale-finite-element-methods` requires `adaptive-finite-element-methods`
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
