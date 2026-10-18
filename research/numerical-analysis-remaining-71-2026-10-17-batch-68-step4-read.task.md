# Step 4 batch reviewer — batch **68**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **68**. Step-5 owning group: **w**.
Return `group: "w"` and `batches: ["68"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 68 | `hp-finite-elements-and-spectral-element-methods` | A | spectral-collocation-and-galerkin-methods, curved-mesh-geometry-and-conservative-mesh-transfer |
| 68 | `hp-finite-elements-and-spectral-element-methods-examples` | B | hp-finite-elements-and-spectral-element-methods |

## Your content, in full

### `hp-finite-elements-and-spectral-element-methods` — hp finite elements and spectral elements

- `def-hp-integrated-legendre-projector` · definition — Endpoint-preserving integrated Legendre projector
- `def-hp-variable-degree-spaces-on-matching-meshes` · definition — Variable-degree conforming hp spaces on matching affine meshes
- `lem-legendre-gauss-lobatto-nodes-are-distinct` · lemma — Legendre-Gauss-Lobatto nodes are distinct and interior critical points are simple
- `lem-reference-jacobi-weighted-endpoint-kernel` · lemma — Weighted Jacobi endpoint kernel on the reference interval
- `thm-hp-simplex-weighted-spectral-projection` · theorem — Weighted simplex polynomial projection has explicit p-rates
- `lem-hp-triangle-degree-uniform-strong-edge-lift` · lemma — A degree-uniform polynomial edge lift with the strong edge norm
- `lem-hp-unweighted-legendre-derivative-tail` · lemma — An ordinary derivative controls the Legendre tail with a factorial ratio
- `lem-hp-analytic-polynomial-approximation-on-a-triangle` · lemma — Analytic derivative bounds give exponential polynomial approximation on a triangle
- `lem-hp-weighted-analytic-corner-pointwise-control` · lemma — Weighted analytic polygon functions have corner decay and scaled analytic bounds
- `def-legendre-gauss-lobatto-rule-on-affine-boxes` · definition — Legendre-Gauss-Lobatto nodes, weights, and tensor quadrature
- `lem-hp-corner-uniform-degree-dof-count` · lemma — Uniform-degree polygon corner spaces have cubic degree-of-freedom growth
- `lem-variable-degree-polynomial-spaces-are-h1-conforming` · lemma — Matching variable-degree polynomial traces give an H1 function
- `thm-hp-reference-interval-integrated-legendre-projection` · theorem — Integrated Legendre projection gives an explicit p-rate in H1
- `thm-hp-simplex-p-dependent-face-trace-inverse` · theorem — Degree-explicit polynomial trace inverse inequality on simplices
- `thm-hp-triangle-unweighted-smooth-approximation` · theorem — Constructive ordinary Sobolev polynomial approximation on triangles
- `thm-hp-analytic-p-convergence-on-fixed-tensor-mesh` · theorem — Analytic data converge exponentially under fixed-mesh p refinement
- `lem-hp-simplex-p-explicit-conforming-interpolant` · lemma — Constructive varying-degree triangle interpolation in unweighted H1
- `thm-hp-gll-top-mode-and-puniform-energy-equivalence` · theorem — GLL quadrature changes only the top Legendre modes and is p-uniformly equivalent
- `thm-hp-corner-exponential-energy-convergence` · theorem — Exponential hp energy convergence for weighted-analytic polygon corners
- `thm-hp-galerkin-energy-error-on-fixed-mesh` · theorem — Cea transfers the fixed-mesh analytic p rate to the energy error
- `thm-hp-galerkin-h-p-regularity-energy-bound` · theorem — Galerkin energy error with local h, trace degree and Sobolev regularity
- `thm-hp-gll-strang-error-with-aliasing-defect` · theorem — GLL spectral-element energy error retains the quadrature defect

### `hp-finite-elements-and-spectral-element-methods-examples` — hp finite elements and spectral elements — Examples

- `cex-hp-degree-independent-sipdg-penalty-loses-coercivity` · counterexample — A degree-independent SIPDG penalty loses coercivity
- `ex-hp-gll-mass-top-mode-correction` · example — The degree-two GLL mass matrix changes only its highest Legendre mode
- `ex-hp-reentrant-corner-h-versus-hp` · example — A reentrant-corner mode separates fixed-degree h error from hp error
- `ex-hp-analytic-p-refinement-on-a-fixed-box` · example — An analytic box solution has exponential Galerkin p convergence

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `hp-finite-elements-and-spectral-element-methods` requires `curved-mesh-geometry-and-conservative-mesh-transfer`
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
