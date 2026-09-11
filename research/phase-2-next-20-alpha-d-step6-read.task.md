# Step 6 whole-group reading — group **d**, run `phase-2-next-20`

You are the group Alpha for batches **6**: 1 A/B pair(s), 2 page(s), 36 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-7 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `quantitative-hyperbolic-geometry-toolkit` | A | group-theory | 302.0042 | `asymptotic-cones-and-the-sublinear-triangle-criterion`, `filters-and-ultrafilters`, `cayley-graphs-word-metrics-and-quasi-isometry`, `geometric-actions-svarc-milnor-and-growth`, `small-cancellation-and-dehn-algorithms`, `free-groups-and-presentations`, `the-logarithm-and-general-powers` |
| 6 | `quantitative-hyperbolic-geometry-toolkit-examples` | B | group-theory | 302.0044 | `quantitative-hyperbolic-geometry-toolkit` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantitative-hyperbolic-geometry-toolkit` — Quantitative Hyperbolic Geometry Toolkit (31 item(s))

- `def-hg-toolkit-slim-triangles-products-and-four-point-constants` · definition — Hg toolkit slim triangles products and four point constants
- `def-hg-toolkit-local-geodesics-and-hausdorff-control` · definition — Hg toolkit local geodesics and hausdorff control
- `def-hg-toolkit-hyperbolic-group-and-stable-length` · definition — Hg toolkit hyperbolic group and stable length
- `lem-geodesic-triangles-in-trees-are-tripods` · lemma — Geodesic triangles in trees are tripods
- `lem-slim-triangles-imply-the-gromov-product-inequality` · lemma — Slim triangles imply the gromov product inequality
- `lem-the-gromov-product-inequality-implies-the-four-point-condition` · lemma — The gromov product inequality implies the four point condition
- `lem-the-four-point-condition-implies-slim-triangles` · lemma — The four point condition implies slim triangles
- `lem-hg-toolkit-halfspace-separation-for-local-geodesic-mesh` · lemma — Halfspace separation for the local-geodesic mesh
- `lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics` · lemma — Local geodesics in a hyperbolic space are uniform quasi geodesics
- `lem-hg-toolkit-polygonal-interpolation-of-quasi-geodesics` · lemma — Hg toolkit polygonal interpolation of quasi geodesics
- `lem-hg-toolkit-exponential-projection-contraction` · lemma — Exponential contraction of projection away from a quasiconvex set
- `thm-morse-stability-with-explicit-parameter-dependence` · theorem — Morse stability with explicit parameter dependence
- `lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse` · lemma — A quasi isometry of geodesic spaces has a controlled coarse inverse
- `lem-hyperbolicity-is-transported-by-a-quasi-isometry` · lemma — Hyperbolicity is transported by a quasi isometry
- `lem-short-loop-relators-give-a-finite-dehn-presentation` · lemma — Short loop relators give a finite dehn presentation
- `lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons` · lemma — Linear isoperimetry implies uniformly thin geodesic bigons
- `lem-infinite-order-elements-have-positive-stable-translation-length` · lemma — Infinite order elements have positive stable translation length
- `lem-axis-fellow-travelling-controls-the-centralizer` · lemma — Axis fellow travelling controls the centralizer
- `def-hg-toolkit-gromov-sequences-and-boundary-product` · definition — Hg toolkit gromov sequences and boundary product
- `lem-asymptotic-gromov-sequences-form-an-equivalence-relation` · lemma — Asymptotic gromov sequences form an equivalence relation
- `lem-boundary-products-are-independent-of-representative-and-basepoint` · lemma — Boundary products are independent of representative and basepoint
- `lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison` · lemma — Hg toolkit proper ray compactness and sequence comparison
- `lem-quasi-isometries-extend-to-boundary-homeomorphisms` · lemma — Quasi isometries extend to boundary homeomorphisms
- `def-hg-toolkit-loxodromics-and-independent-poles` · definition — Hg toolkit loxodromics and independent poles
- `lem-hg-toolkit-finitely-many-cayley-cone-types` · lemma — Hg toolkit finitely many cayley cone types
- `lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements` · lemma — Hg toolkit infinite hyperbolic groups have infinite order elements
- `lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics` · lemma — Hg toolkit non elementary groups have independent loxodromics
- `lem-independent-loxodromics-have-disjoint-pole-neighbourhoods` · lemma — Independent loxodromics have disjoint pole neighbourhoods
- `lem-loxodromic-elements-have-north-south-boundary-dynamics` · lemma — Loxodromic elements have north south boundary dynamics
- `lem-hg-toolkit-free-cayley-tree-from-reduced-words` · lemma — Free Cayley trees from reduced-word normal form
- `thm-quantitative-hyperbolic-geometry-toolkit` · theorem — Quantitative hyperbolic geometry toolkit

### `quantitative-hyperbolic-geometry-toolkit-examples` — Quantitative Hyperbolic Geometry Toolkit: Examples (5 item(s))

- `ex-morse-stability-in-a-tree` · example — Morse stability in a tree
- `ex-a-local-geodesic-constant-in-a-cayley-graph` · example — A local geodesic constant in a cayley graph
- `ex-boundary-extension-of-a-tree-quasi-isometry` · example — Boundary extension of a tree quasi isometry
- `ex-ping-pong-for-two-loxodromics` · example — Ping pong for two loxodromics
- `cex-properness-is-needed-for-the-compact-boundary-package` · counterexample — Properness is needed for the compact boundary package

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-next-20`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-7 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
