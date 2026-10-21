# Step 4 batch reviewer — batch **38**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **38**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["38"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 38 | `geodesic-x-ray-transforms-on-simple-manifolds` | A | inverse-problems-identifiability-and-stability, radon-transform-and-fourier-slice-reconstruction, riemannian-metrics-length-distance-and-volume, geodesics-the-exponential-map-completeness-and-hopf-rinow, hilbert-space-geometry-and-riesz-representation, jacobi-fields-conjugate-points-and-the-cut-locus, riemann-curvature-and-riemannian-submanifolds |
| 38 | `geodesic-x-ray-transforms-on-simple-manifolds-examples` | B | geodesic-x-ray-transforms-on-simple-manifolds, jacobi-fields-conjugate-points-and-the-cut-locus, riemann-curvature-and-riemannian-submanifolds |

## Your content, in full

### `geodesic-x-ray-transforms-on-simple-manifolds` — Geodesic X-ray transforms on simple surfaces

- `def-ip-simple-surface-and-geodesic-xray-transform` · definition — Simple surface and geodesic X-ray transform
- `def-ip-tangent-orientation-double-cover` · definition — Tangent orientation double cover of a surface with boundary
- `op-ip-geodesic-xray-injectivity-with-conjugate-points` · open-problem — Geodesic X-ray injectivity beyond the absence of conjugate points
- `lem-ip-surface-geodesic-flow-index-form-and-transport` · lemma — Surface geodesic flow, index form, and transport primitive
- `lem-ip-orientation-cover-preserves-simplicity` · lemma — The tangent orientation cover preserves simple-surface X-ray data
- `lem-ip-pestov-identity-for-geodesic-data` · lemma — Pestov identity for geodesic data on a simple surface
- `thm-ip-2d-simple-surface-xray-injectivity` · theorem — Unweighted scalar geodesic X-ray injectivity on simple surfaces

### `geodesic-x-ray-transforms-on-simple-manifolds-examples` — Geodesic X-ray transforms on simple surfaces — Examples and Counterexamples

- `ex-ip-38-scope-and-boundary-cases` · example — Simple disk, trapped annulus, and conjugate-point cancellation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `geodesic-x-ray-transforms-on-simple-manifolds` requires `inverse-problems-identifiability-and-stability`
- `geodesic-x-ray-transforms-on-simple-manifolds` requires `radon-transform-and-fourier-slice-reconstruction`
- `analytic-double-fibration-and-bolker-visibility` requires `geodesic-x-ray-transforms-on-simple-manifolds`
- `inverse-wave-problems-and-finite-time-observability` requires `geodesic-x-ray-transforms-on-simple-manifolds`
- `calderon-problem-and-cgo-uniqueness` requires `geodesic-x-ray-transforms-on-simple-manifolds`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
