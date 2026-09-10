# Step 6 whole-group reading — group **h**, run `phase-2-nine-step-25`

You are the group Alpha for batches **17**: 1 A/B pair(s), 2 page(s), 25 item(s).

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
| 17 | `asymptotic-cones-and-the-sublinear-triangle-criterion` | A | group-theory | 302.00405 | `compactness`, `filters-and-ultrafilters`, `cayley-graphs-word-metrics-and-quasi-isometry`, `small-cancellation-and-dehn-algorithms`, `free-groups-and-presentations` |
| 17 | `asymptotic-cones-and-the-sublinear-triangle-criterion-examples` | B | group-theory | 302.0041 | `asymptotic-cones-and-the-sublinear-triangle-criterion` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `asymptotic-cones-and-the-sublinear-triangle-criterion` — Asymptotic Cones and the Sublinear Triangle Criterion (22 item(s))

- `def-rescaled-ultralimit-and-asymptotic-cone` · definition — Rescaled ultralimits and asymptotic cones
- `lem-bounded-real-ultralimits-and-free-tail-extension` · lemma — Free tail ultrafilters and bounded real ultralimit calculus
- `lem-rescaled-ultradistance-is-a-quotient-metric` · lemma — The rescaled ultradistance defines a metric
- `def-geodesic-rays-and-lines` · definition — Oriented geodesic rays, lines, parameters and tails
- `lem-geodesic-segments-have-isometric-ultralimits` · lemma — Limits of geodesic segments, rays and lines
- `def-real-tree-tripods-and-geodesic-triangle-minsize` · definition — Real trees, tripod triangles, slimness and minsize
- `lem-triangle-extrema-and-real-tree-tripod-rules` · lemma — Triangle extrema and the tripod and branch rules for real trees
- `lem-tree-cones-give-uniform-two-side-control` · lemma — Tree cones force uniform control of sides with a common endpoint
- `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness` · theorem — Tree cones at all basepoints and scales imply uniform slimness
- `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic` · lemma — Sublinear minsize identifies every cone segment with a limit segment
- `thm-sublinear-triangle-minsize-implies-hyperbolicity` · theorem — Sublinear triangle minsize implies hyperbolicity
- `def-bounded-edge-coarse-triangular-filling` · definition — Bounded-edge coarse fillings of loops and triangles
- `def-singular-planar-labelled-relator-diagram` · definition — Singular planar labelled relator diagrams and their outer walks
- `lem-finite-polygonal-disk-and-collar-surgery` · lemma — Finite polygonal disk parametrizations and boundary surgery
- `lem-relator-expressions-give-controlled-singular-planar-diagrams` · lemma — Relator expressions admit singular planar diagrams with controlled incidence
- `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` · lemma — Controlled coarse triangulation of singular planar diagrams
- `lem-relator-disks-give-area-controlled-coarse-fillings` · lemma — Algebraic relator area controls coarse filling area
- `lem-polygonal-boundary-crossing-for-affine-disk-maps` · lemma — Polygonal boundary crossing forces coverage by affine triangles
- `lem-coarse-triangle-minsize-is-bounded-by-square-root-area` · lemma — Coarse triangle minsize is bounded by square root of area
- `thm-linear-relator-area-implies-slim-geodesic-triangles` · theorem — Linear algebraic relator area implies slim Cayley triangles
- `lem-point-wedges-preserve-a-common-triangle-minsize-bound` · lemma — Point wedges preserve common triangle minsize bounds
- `lem-uniform-filling-data-give-a-uniform-slimness-bound` · lemma — Filling constants give a uniform slimness bound

### `asymptotic-cones-and-the-sublinear-triangle-criterion-examples` — Asymptotic Cones and the Sublinear Triangle Criterion: Examples (3 item(s))

- `ex-asymptotic-cones-of-lines-and-trees` · example — Cones of a line and of real trees
- `ex-euclidean-triangle-has-positive-linear-minsize` · example — A Euclidean right triangle has minsize proportional to its scale
- `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter` · example — Scaling distinguishes sublinear minsize from a fixed perimeter cutoff

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 — group reading digest, `phase-2-nine-step-25`

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
