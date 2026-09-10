# Phase 2 HG prerequisite — Alpha group a Step-3 scaffold review

Run: `phase-2-hg-prerequisite`  
Group: `a`  
Batch reviewed: `1`  
A page: `asymptotic-cones-and-the-sublinear-triangle-criterion`  
B page: `asymptotic-cones-and-the-sublinear-triangle-criterion-examples`  
Verdict: **insufficient**

I reviewed the current manifest, coverage, notes, binding HG-P design inventory, current plan entries, the immediate published suppliers actually used by the proposed proofs, and the companion page. The pair has 19 A items and 3 B items. Its broad mathematical route is sound, but its current scaffold is not author-ready: two central planar-topology/counting obligations are still placeholders, and several exact definitions or published dependencies used by the proposed proofs are absent.

## Fatal findings and required repairs

### HG-P-1 — the singular-diagram object and fold construction are not closed

`lem-relator-expressions-give-controlled-singular-planar-diagrams` claims a finite planar contractible labelled diagram, face-boundary labels, an outer boundary walk, thin edges, loops, cut vertices, and a consistent vertex map into the Cayley graph. None of those data is defined by `def-bounded-edge-coarse-triangular-filling`, and the strategy does not yet give the promised piecewise-linear fold/deletion construction. In particular, “join them through the exterior sector and collapse that added triangular sector onto its altitude” does not specify the embedding after the move, why contractibility and the single outer walk persist, or how loop and thin-edge incidences are treated. The edge estimate (E\le Lm+n) therefore is not yet proved.

Required repair: add, before the lemma, a stable unused definition item such as `def-singular-planar-labelled-relator-diagram` (category: Group theory; placement: on this A page immediately after `def-bounded-edge-coarse-triangular-filling`; prerequisites at least the finite-presentation/word-label interface already required by the page). Its inventory must define the finite embedded multigraph/CW data, cyclic face walks, outer walk, thin edges, loops and cut vertices, relator labels, and vertex-label consistency. Then replace the current sketch by a complete induction for every fold, deletion and spur insertion, with the incidence count proved at each move. This is a local A-page addition; no new A/B pair is presently necessary.

### HG-P-2 — the genuine disk thickening and its uniform count are expressly unproved

`lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` says that `C(L)=100(L+1)` suffices “once the explicit subdivision count is supplied.” That is an admission that the proof-bearing constant has not been supplied. The preceding sentence that a bounded complementary component would enclose an unfilled cycle does not prove that the regular neighbourhood is a disk for the allowed singular diagrams, especially with monogons, bigons, loops and cut vertices. Nor is there an incidence-by-incidence triangle count for the vertex polygons, edge rectangles and face fans.

Required repair: give either (a) a complete regular-neighbourhood proof plus an explicit triangulation count in terms of (E,m,n,L), covering monogons, bigons, loops, repeated boundary vertices and cut vertices, or (b) narrow the lemma to exactly the diagrams constructed in HG-P-1 and prove disk topology and the same count inductively through those moves. The constant may be coarse, but every summand must be justified. The exact blocked path is

`lem-relator-expressions-give-controlled-singular-planar-diagrams`
→ `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`
→ `lem-relator-disks-give-area-controlled-coarse-fillings`
→ `thm-linear-relator-area-implies-slim-geodesic-triangles`
→ `lem-uniform-filling-data-give-a-uniform-slimness-bound`.

### HG-P-3 — rays and lines are used before they are defined, and item 4 invokes an unavailable extremum

`lem-geodesic-segments-have-isometric-ultralimits` states and parameterizes geodesic rays and bi-infinite geodesic lines, and `lem-triangle-extrema-and-real-tree-tripod-rules` uses their orientations and common tails. The published `def-geodesic-and-geodesic-metric-space` defines only finite segments. No earlier local or published item in the declared dependency closure defines rays or lines.

Required repair: add a stable unused item `def-geodesic-rays-and-lines` immediately before `lem-geodesic-segments-have-isometric-ultralimits`, defining oriented isometric embeddings ([0,\infty)\to X) and (\mathbb R\to X), origins, signed parameters, images and tails; depend on `def-geodesic-and-geodesic-metric-space`. Add it to every item that uses those notions.

The same ultralimit lemma says to choose a nearest point on a compact segment to the basepoint, but declares no compactness/extreme-value supplier. Its own hypothesis already says that each segment meets a uniformly bounded rescaled neighbourhood, so the clean repair is to choose one such witness as the origin and remove the nearest-point claim. If nearest points are retained, add and use the exact compact-interval and extreme-value dependencies instead.

This affects the paths through item 4 to `lem-tree-cones-give-uniform-two-side-control`, `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness`, `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic`, and `thm-sublinear-triangle-minsize-implies-hyperbolicity`.

### HG-P-4 — the real-tree/minsize definition has two well-definedness holes

`def-real-tree-tripods-and-geodesic-triangle-minsize` says that an injective continuous image of ([0,1]) is an arc because compactness makes the inverse continuous, but its dependencies provide neither compactness of the interval nor the compact-to-Hausdorff continuous-bijection theorem. Preserve the assertion by declaring and using `thm-heine-borel-r`, the real/metric compactness dictionary as needed, and `thm-compactness-under-continuous-maps`; alternatively define “arc” explicitly as a homeomorphic image and prove the equivalence in the justified-by lemma with those dependencies.

Also, a metric space and hence a geodesic metric space may be empty under the published definitions. Then there are no triangles and the displayed supremum defining (m_X(P)) is a supremum of the empty set. Require (X\ne\varnothing) wherever (m_X) is introduced and used, or explicitly give and propagate an empty-space convention. This repair must reach `thm-sublinear-triangle-minsize-implies-hyperbolicity` and the wedge/uniformity items.

### HG-P-5 — exact arithmetic and minimum-selection dependencies are absent

Three load-bearing uses need explicit published suppliers:

- `lem-relator-disks-give-area-controlled-coarse-fillings` explicitly chooses a minimum-length relator expression by well-ordering (\mathbb N), but does not depend on `thm-well-ordering-principle`. Add that dependency. It is the exact well-definedness premise used before the singular-diagram construction.
- `lem-coarse-triangle-minsize-is-bounded-by-square-root-area` states (2r\sqrt N+2r) and takes square roots of (h^2\le Nr^2), but does not depend on `thm-of-square-roots`. Add it (or prove precisely the required nonnegative-root inference locally and declare all inputs). The path is this lemma → `thm-linear-relator-area-implies-slim-geodesic-triangles` → `lem-uniform-filling-data-give-a-uniform-slimness-bound`.
- The B-page `ex-euclidean-triangle-has-positive-linear-minsize` has only the abstract minsize definition as a dependency although it uses the (d_2) metric on (\mathbb R^2), straight Euclidean geodesic segments and (\sqrt2). Add at least `lem-metrics-on-rn` and `thm-of-square-roots`, and prove directly that the three displayed affine sides are isometric parameterizations. `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter` reuses the same Euclidean witness inline and needs the same dependencies. `ex-asymptotic-cones-of-lines-and-trees` must add `lem-real-line-is-a-metric-space` for its concrete (\mathbb R) model.

### HG-P-6 — evidence status must be reconciled after repair

The coverage source records now contain valid full-PDF `fetch_verified` stamps for all three active sources, and `coverage-checklist` passes. However, the top-level coverage status remains `blocked`, its nested audit text still says machine fetch verification is unfulfilled, and the Step-1 notes retain the earlier source-gate blocker. The mathematical blockers above justify `blocked`, but the source-gate text is stale. The owning Beta should preserve the historical attempts while updating the current source-gate assessment and hashes after the mathematical repair; no source is to be dropped.

## Item-by-item audit

| Item | Review result |
|---|---|
| `def-rescaled-ultralimit-and-asymptotic-cone` | Adequate definition and declared metric/ultrafilter roots. |
| `lem-bounded-real-ultralimits-and-free-tail-extension` | Adequate deterministic compact-interval route with AC strength explicit. |
| `lem-rescaled-ultradistance-is-a-quotient-metric` | Adequate quotient-metric route. |
| `lem-geodesic-segments-have-isometric-ultralimits` | Insufficient until HG-P-3 is repaired. |
| `def-real-tree-tripods-and-geodesic-triangle-minsize` | Insufficient until HG-P-4 is repaired. |
| `lem-triangle-extrema-and-real-tree-tripod-rules` | The bisection/tripod route is adequate after the missing definitions and compactness interface are supplied. |
| `lem-tree-cones-give-uniform-two-side-control` | The source-backed segment/ray/line case split is adequate after HG-P-3. |
| `thm-all-asymptotic-cones-are-trees-implies-uniform-slimness` | The bounded/unbounded third-side route agrees with the complete source proof; blocked only through earlier local gaps. |
| `lem-sublinear-minsize-makes-every-cone-geodesic-a-limit-geodesic` | The equality-forcing and parameter-surjectivity route is adequate after the minsize well-definedness repair. |
| `thm-sublinear-triangle-minsize-implies-hyperbolicity` | Correct route through all tree cones; blocked by HG-P-3/4. |
| `def-bounded-edge-coarse-triangular-filling` | Adequate finite coarse-disk convention. |
| `lem-relator-expressions-give-controlled-singular-planar-diagrams` | Insufficient: HG-P-1. |
| `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings` | Insufficient: HG-P-2. |
| `lem-relator-disks-give-area-controlled-coarse-fillings` | Insufficient through HG-P-1/2 and its missing well-ordering dependency. |
| `lem-polygonal-boundary-crossing-for-affine-disk-maps` | The stated top/right barrier and finite signed-crossing proof route are adequate. |
| `lem-coarse-triangle-minsize-is-bounded-by-square-root-area` | Insufficient only for the explicit square-root dependency in HG-P-5; its (m/2-r) discretization correction is sound. |
| `thm-linear-relator-area-implies-slim-geodesic-triangles` | Mathematically adequate composition, but blocked by items 12–14 and 16. |
| `lem-point-wedges-preserve-a-common-triangle-minsize-bound` | Adequate factor/core-triangle classification and common-majorant claim. |
| `lem-uniform-filling-data-give-a-uniform-slimness-bound` | Adequate wedge contradiction after its suppliers close; AC is explicit. |
| `ex-asymptotic-cones-of-lines-and-trees` | Formula and tree argument are sound; add the concrete real-line metric dependency. |
| `ex-euclidean-triangle-has-positive-linear-minsize` | Correct coordinate estimate, but dependency-incomplete as in HG-P-5. |
| `ex-scaling-distinguishes-sublinear-minsize-from-bounded-perimeter` | Correct epsilon split; its inline Euclidean witness is dependency-incomplete as in HG-P-5. |

## Source adjudication

There is no `source_resolution` drop or owner escalation to adjudicate. The three active records are independently usable complete texts:

- [Druţu–Kapovich, *Geometric Group Theory*](https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf), 837-page monograph. I checked the complete targeted passages: §7.10.2 Definitions 7.98–7.99, canonical enlargement and Lemma 7.101; §9.7.4 Definitions 9.101–9.102 and Propositions 9.103–9.104; Lemma 10.25; §10.4 Lemmas 10.48 and 10.51; §11.20 Proposition 11.167 and Lemma 11.168; §11.21 Definition 11.175, Proposition 11.176 and Lemma 11.177; §11.22 Theorem 11.181. These support the cone criterion and coarse square-root route. The canonical-enlargement paragraph supports existence/topological motivation, but not the manifest's promised uniform triangulation count.
- [Bridson, *The Geometry of the Word Problem*](https://people.maths.ox.ac.uk/bridson/papers/bfs/bfs.pdf), §4.1–§4.2, especially Definition 4.2.1, Theorem 4.2.2, Lemma 4.2.3 with Remark 4.2.5, and Lemma 4.2.6. This supports the singular fold/spur model. Its proof uses an ambient-plane triangular-sector collapse and does not by itself prove HG-P-1's complete local PL invariants or HG-P-2's disk-subdivision count.
- [Frigerio–Sisto, *Characterizing hyperbolic spaces and real trees*](https://arxiv.org/pdf/0810.1526), §1.1, §1.3 and §3 Lemma 11. This independently supports the asymptotic-cone/real-tree terminology and criterion; the owned proof remains the more explicit Druţu–Kapovich route.

All 32 harvested results have dispositions. The six declined results remain correctly out of scope or deferred: conjugator diameter, both exact diagram-area converses, the forward bounded-minsize implication, the general subquadratic filling theorem, and the alternate fixed-scale/all-ultrafilter quantifier package are not used by an owned proof. Their destinations, where applicable, exist in the current plan.

## Published-consumer boundary and dependency closure

The owned route deliberately does **not** depend on `def-van-kampen-diagram`, `thm-van-kampen-lemma`, or `thm-diagram-area-equals-algebraic-area`. Their known strict-disk defects remain Phase-3 published-consumer debt in the existing consumer ledger and are not a supplier verdict failure here. The actual owned dependency is the normal-closure expression followed by the local singular-diagram construction; HG-P-1/2 are defects in that owned construction itself and therefore do block this pair.

One published clause is actually used and therefore required a local reroute: `def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation` calls `Area(w)` the least expression length without declaring well-ordering. `lem-relator-disks-give-area-controlled-coarse-fillings` uses exactly that least-expression premise to choose the (m=\operatorname{Area}(w)) input on the path to `thm-linear-relator-area-implies-slim-geodesic-triangles`. HG-P-5's added `thm-well-ordering-principle` dependency and inline minimum proof are the adequate local repair; the unused Dehn-function maximum clause is not being semantically audited or made a supplier blocker here.

The required page-level prerequisites are present and earlier in plan order. The reviewed item graph is acyclic and has no missing resolving IDs. The exact semantic dependency additions listed above are nevertheless required; successful ID resolution alone does not discharge them.

This Group theory pair is not in Foundations. Its audited proof paths do not use `deferred-set-theory-beyond-choice`, any item recorded there, or any load-bearing forward reference to it. Choice use is explicit through `def-axiom-of-choice` where countable families are selected.

## Frontier dependency ledger

Batch 1 is the only batch in this run. No owned proof imports a same-frontier item from another batch, so the per-batch input is `[]`; refresh produced a unified ledger with batch `1` reviewed, no unreviewed batches, and no edges. The later `quantitative-hyperbolic-geometry-toolkit` is a consumer of this pair, not a same-frontier supplier.

## Scope decisions

`scope-decisions refresh` found six current declined rows. Each is resolved `stands` with current item-level evidence in `research/phase-2-hg-prerequisite-alpha-a-scope-decisions.json`; `scope-decisions check` reports 6 current declines and 0 errors.

## Checks run

- `node tools/scope-decisions.mjs refresh --run phase-2-hg-prerequisite --group a` — 6 current declines, 6 initially pending.
- `node tools/scope-decisions.mjs check --run phase-2-hg-prerequisite --group a` — 6 current declines, 0 errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-hg-prerequisite` — refreshed; no edges.
- `node tools/manifest-deps.mjs research/phase-2-hg-prerequisite-batch-*.pages.json` — 22 items, 0 normalized, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` — pass; 1,624 pages, 15,543 new items, acyclic plan.
- `node tools/extcheck.mjs --quiet` — pass with 61 pre-existing `unproved-on-published` warnings; none is an actual dependency of an owned proof after the reroutes above.
- `node tools/coverage-checklist.mjs research/phase-2-hg-prerequisite-batch-1.coverage.json` — 1 A page, 32 harvested results, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/phase-2-hg-prerequisite-batch-1.pages.json` — 22 scoped items, 0 errors, 0 warnings.

## Handoff to the owning Beta

Repair HG-P-1 through HG-P-6 in batch 1, add the two local definition items and all exact dependency edges, preserve all current mathematical claims, and update the source-status evidence after rerunning the relevant gates. The pair remains `insufficient` until the revised scaffold contains the constructions and dependencies themselves. No shared prose-scaffold or plan amendment is currently needed: both new definition items fit on the existing A page under the plan's 60-item limit. If the repair instead introduces a new A/B prerequisite pair, it must first be added to the authorized prose scaffold and current plan with its full A/B inventory; that possibility is not waived by this review.
