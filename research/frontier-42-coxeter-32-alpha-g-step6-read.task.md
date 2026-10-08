# Step 6 Alpha group reader — read-only digest — group **g**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **11**, **15**: 2 A/B pair(s), 4 page(s), 26 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 11 | `cat-comparison-link-criteria-and-local-globalization` | A | coxeter-groups | 1738 | `spherical-simplex-metrics-angular-links-and-cones`, `homotopy-and-homotopy-equivalence`, `covering-spaces-and-lifting`, `further-trigonometric-identities-and-inverses`, `hilbert-space-geometry-and-riesz-representation`, `foundations-of-the-real-numbers` |
| 11 | `cat-comparison-link-criteria-and-local-globalization-examples` | B | coxeter-groups | 1739 | `cat-comparison-link-criteria-and-local-globalization` |
| 15 | `short-loop-polygons-and-quantitative-energy-decrease` | A | coxeter-groups | 1746 | `cat-comparison-link-criteria-and-local-globalization` |
| 15 | `short-loop-polygons-and-quantitative-energy-decrease-examples` | B | coxeter-groups | 1747 | `short-loop-polygons-and-quantitative-energy-decrease` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cat-comparison-link-criteria-and-local-globalization` — CAT Comparison, Link Criteria, and Local Globalization (9 item(s))

- `def-cg-cat-zero-cat-one-and-local-geodesic` · definition — Comparison triangles, the CAT(0) and CAT(1) inequalities, local CAT, local geodesics and round circles
- `def-cg-comparison-angle-and-alexandrov-angle` · definition — Comparison angles of hinges, model triangle angles, and the Alexandrov upper angle
- `lem-cg-comparison-convexity-and-model-spaces` · lemma — Comparison triangles in the Euclidean plane and the round sphere, model spaces, and CAT(0) and CAT(1) consequences
- `lem-cg-alexandrov-comparison-triangle-gluing` · lemma — Alexandrov comparison: straightening a hinge, gluing comparison triangles, and patchwork
- `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` · theorem — Berestovskii's cone criterion and the polyhedral link criterion
- `lem-cg-local-geodesic-endpoint-stability` · lemma — Endpoint stability for local geodesics in complete locally CAT(0) spaces
- `lem-cg-local-geodesic-continuation-and-path-space-covering` · lemma — The space of local geodesics, its length metric, and the covering criterion for local isometries
- `thm-cg-complete-simply-connected-local-cat-zero-globalization` · theorem — Complete, simply connected, locally CAT(0) length spaces are CAT(0)
- `thm-cg-compact-local-cat-one-short-circle-criterion` · theorem — Compact geodesic locally CAT(1) spaces are CAT(1) exactly when they contain no short circle

### `cat-comparison-link-criteria-and-local-globalization-examples` — CAT Comparison, Link Criteria, and Local Globalization — Examples (4 item(s))

- `ex-cg-intervals-and-metric-trees-are-cat-zero` · example — Intervals and metric trees are CAT(0)
- `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one` · example — The unit circle is CAT(1) at the strict perimeter boundary
- `ex-cg-short-circle-fails-cat-one` · example — A circle of circumference $\ell<2\pi$ fails CAT(1)
- `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group` · example — A complete locally CAT(0) circle whose fundamental group prevents global CAT(0)

### `short-loop-polygons-and-quantitative-energy-decrease` — Short Loop Polygons and Quantitative Energy Decrease (9 item(s))

- `def-cg-short-loop-homotopy-and-nonshrinkability` · definition — Short loops, the uniform-plus-length topology, short-loop homotopies, and nonshrinkability
- `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy` · definition — Uniform local radii, cyclic small-mesh polygons, mesh, length, energy, the midpoint operation and the zero-limit basin
- `lem-cg-cat-one-short-and-closed-local-geodesics` · lemma — Short local geodesics in a CAT(1) space are geodesics, and closed local geodesics have length at least $2\pi$
- `lem-cg-polygon-midpoint-drop-and-equality` · lemma — Existence of the uniform radius, continuity of the midpoint operation, the energy drop, its equality case, and convergence of zero-limit polygons
- `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` · lemma — The spherical radius estimate, the quadrilateral separation constant, and the finite midpoint-operation comparison disk
- `lem-cg-local-cat-one-products-from-sine-comparison` · lemma — Local CAT(1) of the $l^2$ product from a model $S^2\times S^2$ sine-comparison calculation
- `lem-cg-comparison-product-perturbation-and-degenerate-limits` · lemma — Perturbation by a Euclidean regular polygon: comparison-disk bounds for degenerate comparison triangles
- `lem-cg-uniform-energy-decrement-and-short-class-closedness` · lemma — The uniform energy decrement on the basin, bounded iteration, and the closedness of the basin inside the short polygon space
- `lem-cg-bowditch-quantitative-short-loop-control` · lemma — Polygon transfer, the basin as the shrinkable class, and the short-loop criterion

### `short-loop-polygons-and-quantitative-energy-decrease-examples` — Short Loop Polygons and Quantitative Energy Decrease — Examples (4 item(s))

- `ex-cg-midpoint-iteration-on-a-spherical-triangle` · example — Midpoint iteration on a small equilateral spherical triangle contracts geometrically to its centre
- `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` · example — Equally spaced points on a metric circle: stationary energy and the equality case
- `ex-cg-null-homotopy-versus-short-loop-shrinkability` · example — Null-homotopy versus shrinkability through short loops on $S^2$ and on a short circle
- `ex-cg-zero-length-boundary-of-the-energy-criterion` · example — The zero-length boundary: constant tuples, collapsed edges and the degeneracy of the energy decrement at $L=0$

## Your seams

Your pages depend on another group's:

- `cat-comparison-link-criteria-and-local-globalization` requires `spherical-simplex-metrics-angular-links-and-cones` (group e, batch 8)

Another group's pages depend on yours:

- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `cat-comparison-link-criteria-and-local-globalization`
- `large-spherical-metric-flags-and-the-moussong-girth-theorem` (group e) requires your `short-loop-polygons-and-quantitative-energy-decrease`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-42-coxeter-32`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
