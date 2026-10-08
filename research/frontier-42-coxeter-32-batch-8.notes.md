# Batch 8 Step 1 scaffold — Spherical Simplex Metrics, Angular Links, and Cones

Run: `frontier-42-coxeter-32` · pair `spherical-simplex-metrics-angular-links-and-cones`
(A order 1732, B order 1733, `coxeter-groups`, design label CG-05). Outputs:
`research/frontier-42-coxeter-32-batch-8.pages.json` (4 A + 3 B items), this note,
`research/frontier-42-coxeter-32-batch-8.coverage.json`,
`research/frontier-42-coxeter-32-batch-8.cross-batch-dependencies.json` (12 declared-edge
rows and one removed inventory proposal), and seven item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (binding, read first) plus the design `research/plan-coxeter-groups-track.md` §CG-05
  (lines 197–211) and the binding proof-design inputs `research/coxeter-scaffold/inventory.json`
  (CG-05), `definition-justifications.json`, the native A/B page prose
  (`library/coxeter-groups/spherical-simplex-metrics-angular-links-and-cones{,-examples}.md`),
  and `research/coxeter-scaffold/independent-audit.md`. The drift review
  (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, lines 79–88) gives this page
  **no-drift** with "No prerequisite gap"; no plan edge or ordering change was applied.
- **Preserved.** The four planned local supplier contracts keep their exact ids and kinds:
  `def-cg-spherical-gram-simplex-and-angular-link` (definition),
  `lem-cg-spherical-simplex-existence-and-link-gram-formula` (lemma),
  `def-cg-euclidean-cone-and-spherical-join-metrics` (definition),
  `thm-cg-cone-join-metric-and-local-product-chart` (theorem). Their routes are the ones
  scaffolded, with the design's warnings kept: the Gram realisation and its uniqueness; the
  hemisphere functional and unique barycentric ray coordinates; the Schur-complement
  vertex-link formula with positivity and face compatibility; the finite-shape
  compactness/length-topology/geodesic transfer; the auxiliary extended path metric with
  `+∞` never an ordinary metric value; the truncated angular metric `d_pi=min{pi,d_path}`;
  the separately included cone apex with `C(empty)={o}`; cross-component and angular-distance
  `pi` geodesics through the apex; the empty join conventions `L*empty=L`, `empty*empty=empty`;
  the spherical join by the cosine/endpoint formula and (equivalently) as the unit link of the
  product cone; and the local product chart splitting a neighbourhood of a point in a face as
  Euclidean face directions times a truncated cone on the angular link.
- **B companion (3 items).** `ex-cg-spherical-simplex-and-vertex-link-schur-complement`
  (Gram realisation, hemisphere functional and the vertex-link Schur complement),
  `ex-cg-link-edge-lengths-versus-dihedral-angles` (link edge length `pi-pi/m` compared with
  the mirror angle `pi/m`), and `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation`
  (the disconnected universal-Coxeter nerve and the truncation convention), matching the
  design's three promised B-page tasks.
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task on the pair ids,
  orders 1732/1733, category, companion, the A-page `requires` list
  (`coxeter-polyhedral-gluings-and-intrinsic-metrics`, `real-forms-and-reflection-geometry`,
  `direct-matrix-factorisations-lu-cholesky-and-qr`, `simplicial-complexes-and-simplicial-homology`)
  and the B page's single requirement. Its item arrays are empty, so no item-level plan text can
  conflict. **No design-versus-plan conflict exists**, and no plan text was changed.

## Recorded clarifications and route decisions (no plan conflict)

1. **Inventory `depends_on` lists are page-level, not per-contract.** The machine inventory
   attaches the same eight-entry `depends_on` list to all four CG-05 contracts. The recorded
   `deps` are the actual use sets. Dropped as proof dependencies: `lem-cg-dual-action-and-chamber-faces-exist`
   (no clause of this pair mentions chambers, the dual action or dual coordinates; one
   `removed` row documents this in the cross-batch input),
   `def-locally-finite-and-finite-dimensional-simplicial-complex` and
   `def-geometric-realization-of-an-abstract-simplicial-complex` (the page constructs its
   finite spherical complexes directly as finite abstract simplicial complexes and gluings).
   `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics` is a dependency of
   `lem-cg-spherical-simplex-existence-and-link-gram-formula` only, not of the definition items.
2. **"Minimizing short paths" (design, clause A2) is realised as minimizing geodesics.** The
   finite spherical complex is given the chain/intrinsic metric; radial normalisation gives a
   bi-Lipschitz homeomorphism onto its Euclidean comparison gluing, so the complex is compact,
   proper and complete, and the proper-target Ascoli argument (the same one as
   `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`) yields a minimizing geodesic
   between every pair, in particular short paths for pairs at distance `<pi>`. The Axiom of
   Choice is declared in that lemma and its single use is named; the choice-free clauses stay
   choice-free, and the cone theorem is stated conditionally on the `D_pi`-geodesic hypothesis
   so that it remains choice-free.
3. **Angular CAT(1) agreement, stated exactly.** The design's "such tests agree with
   componentwise intrinsic tests" is recorded as: a `d_pi`-triangle of perimeter `<2pi` has at
   most one side `pi`; with no side `pi` it lies in one component and its sides are the
   intrinsic path distances; a side `pi` can arise only from a pair in different components or
   at intrinsic distance `>=pi` and is realised in the model sphere by an antipodal pair. This
   matches the phrasing of the later CAT page's definition without importing its comparison
   theory into this pair.
4. **Join definition and its equivalence.** The join is defined by endpoint quotients and the
   cosine formula (the design's "cosine formula/endpoint quotients"), and the equivalence with
   the unit link of the product cone is a proved clause of the cone theorem
   (`C(L1) x C(L2) = C(L1*L2)` by direct expansion); the empty conventions are consistent with
   that isometry. The cone theorem's join triangle inequality is proved by embedding the three
   relevant points of each factor into the round circle (every three-point metric space of
   diameter `<=pi` embeds by equal arc padding) and using the round metric on `S^1 * S^1 = S^3`;
   this avoids importing any CAT(1) theory.
5. **The B example compares the two different angles.** `pi-pi/m` is the vertex-link edge
   length of the regular `2m`-gon (its interior angle), while `pi/m` is the angle between the
   two mirror lines of the canonical rank-two form; `cos(pi-pi/m) = -cos(pi/m) = B(e_s,e_t)`.
   This consumes two batch-4 (CG-01) scaffold items and creates the only cross-batch item
   edges of this pair; all are recorded in the ledger input.
6. **Face links at points, not only at vertices.** The cone theorem's local chart covers a
   point in the relative interior of a `k`-dimensional cell: `Lk_X(p) = S^{k-1} * Lk_X(F)`
   and a ball about `p` is isometric to `R^k x C(Lk_X(F))`, via the orthogonal decomposition of
   the tangent cone into face directions and its orthogonal complement. This is exactly the
   facial identification used in Davis's proof of the link condition, kept here as a metric
   statement without the curvature theorem.

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests
(in-run suppliers in batches 4 and 6 count; published or out-of-run suppliers do not).

| level | item |
|---|---|
| 1 | `def-cg-spherical-gram-simplex-and-angular-link` |
| 5 | `lem-cg-spherical-simplex-existence-and-link-gram-formula` |
| 6 | `def-cg-euclidean-cone-and-spherical-join-metrics` |
| 7 | `thm-cg-cone-join-metric-and-local-product-chart` |
| 6 | `ex-cg-spherical-simplex-and-vertex-link-schur-complement` |
| 3 | `ex-cg-link-edge-lengths-versus-dihedral-angles` |
| 8 | `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` |

No item depends on a later item, on a B-page item outside its own backward-ordered examples
page, or on an item from a later page; the recorded labels equal the computed labels exactly.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract,
and its statement/proof route was read for adequacy. Published suppliers read for this pair:
`def-cholesky-factorisation-with-positive-diagonal`,
`thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`,
`def-real-and-complex-inner-product-space`, `cor-inner-product-induces-a-norm`,
`thm-cauchy-schwarz-in-an-inner-product-space`, `def-orthogonal-projection`,
`thm-finite-dimensional-orthogonal-decomposition`, `def-euclidean-spheres-and-closed-balls`,
`def-principal-inverse-sine-and-cosine`, `def-sine-and-cosine-by-power-series`,
`thm-sine-and-cosine-addition-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`,
`cor-pi-is-the-first-positive-sine-zero`, `lem-metrics-on-rn`,
`def-finite-convex-cell-complex-and-linear-subdivision`,
`lem-finite-convex-cell-complexes-admit-compatible-triangulations`,
`def-abstract-simplicial-complex`,
`prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
`def-bilipschitz-embedding-and-bilipschitz-equivalence`, `def-metric-space`,
`def-metric-compactness`, `def-complete-metric-space`,
`def-geodesic-and-geodesic-metric-space`, `def-upper-bound`,
`def-pointwise-uniform-and-uniformly-cauchy-convergence`, `def-axiom-of-choice`,
`cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`,
`def-simplicial-subcomplex-star-closure-and-link`.
In-run suppliers read in the current manifests: `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`,
`lem-cg-polyhedral-face-coherence-and-uniform-star-radius`,
`thm-cg-polyhedral-chain-metric-topology-and-properness`,
`lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`,
`thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`,
`def-cg-real-coxeter-form-and-reflection`,
`lem-cg-reflection-form-invariance-and-rank-two-orders`.
Checks actually made: the Cholesky theorem's real case and the diagonal-one hypothesis (so
`1-c_{i0}^2>0` for every declared Schur entry); the direction of the facet inequalities with
*inward* unit normals (`<xi,n_j> >= 0`, verified on the cube and polygon cases and against
Davis's `Cone(F,P)`); the trace/order statement of the rank-two item (so the product is a
rotation through `2pi/m`); the AC hypothesis of the Ascoli corollary (carried once); the
properness and weak-topology clauses of the chain-metric theorem; the compatibility and star
radius of the face-coherence lemma. No missing, circular, forward or inadequate dependency was
found, and no dependency path reaches `deferred-set-theory-beyond-choice`.

## Sources (full text fetched and stamped)

Two independent book treatments back the A page; both bodies were downloaded, stamped and
inspected at the locators recorded in the coverage file:

1. **M. R. Bridson and A. Haefliger, _Metric Spaces of Non-Positive Curvature_** (author-hosted
   PDF, `sha256_16 894ac23c8033d213`, 669 pages). Read: I.5.6–I.5.10, printed pp. 59–62 (the
   K-cone, the metric formula with `min{pi,d}`, the recovery of the link from the cone, the
   cone on `S^n`, the metric-space proof and the geodesic characterisation); I.5.13–I.5.16,
   printed pp. 63–64 (the spherical join, its metric, the product-cone isometry and
   `S^n*S^m=S^{n+m+1}`); I.7.14–I.7.16, printed pp. 102–104 (links of points, the intrinsic
   pseudometric with the value `∞` between components, cone neighbourhoods).
2. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (author manuscript,
   `sha256_16 ccefbb950fdcfce9`, 600 pages). Read: Appendix I.2, printed pp. 505–507 (the cone
   on a CAT(1)-space, the truncated angle `theta=min{pi,d}`, Propositions/Lemmas I.2.17–I.2.19
   and the spherical join); Appendix I.3, printed pp. 507–510 (X_k-cell structures, the
   geometric link `Lk(F,P)=Cone(F,P) ∩ S(E(F,P))`, the link of a point, the facial
   identification in the proof of Theorem I.3.5, Lemma I.3.6); Appendix A.4, printed pp. 412–414
   (joins of polytopes and of abstract simplicial complexes); §7.1, printed pp. 123–125
   (Definition 7.1.1 and Examples 7.1.2–7.1.7, including the discrete nerve of the universal
   Coxeter system).

**Bowditch disposition.** The inventory also lists Bowditch, _Notes on locally CAT(1) spaces_,
§§3.3–3.4 for these contracts. Those sections are the quantitative polygon-shortening and
short-loop-class material owned by `cat-comparison-link-criteria-and-local-globalization` and
`short-loop-polygons-and-quantitative-energy-decrease`; none of the four CG-05 contracts
mentions loops, nonshrinkability or curvature, and the geometric source report records that
the Bowditch preprint was read for those later pages. No Bowditch row is therefore claimed in
this pair's coverage; the pair still carries two independent primary treatments (a textbook
and a monograph).

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `74 item(s), 0 missing, 0 error(s)` at the time of the run |
| scaffold policy (my batch with its suppliers) | `tools/content-policy.mjs --manifest-only ...batch-{2,4,6,8}.pages.json` | `35 scoped item(s), 0 error(s), 0 warning(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only ...batch-*.pages.json` | exit 1 with **16 errors, all in batch 7's in-flight manifest** (misspelled `coexeter` ids in its own deps); no error names a batch-8 id. Observation only, batch 7 is another worker's file |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-8.coverage.json --require-destination` | `1 page(s), 21 harvested result(s), 0 error(s), 1 warning(s)` — `coverage-low-yield` (6/21 scaffolded), the advisory the sibling batches also carry |
| full-text fetch | `tools/source-fetch-check.mjs --coverage ...batch-8.coverage.json --stamp` then check mode | `2/2 source(s) fetch-verified (2 newly stamped)`; check mode `2/2 resolved`, exit 0 |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-8.coverage.json --out /tmp/batch8-url-liveness.json --recover --fail-on-dead` | `2/2 live; 0 failed`; output written to `/tmp` to avoid touching the run's shared artifact |
| source backing | `tools/source-backing.mjs --coverage ...batch-8.coverage.json --liveness /tmp/batch8-url-liveness.json --reharvest-plan /tmp/batch8-reharvest.json` | `4 authored result(s) across 1 file(s), every one still backed`, exit 0 |
| manifest integrity | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| plan | `tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0: declared page order acyclic and consistent; no item-level cycles, forward references, B-page dependencies or unresolved ids |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | fails while sibling batches are empty shells: **50 `empty scaffold inventory` errors, no other error line**; every batch-8 label equals the computed value |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 74, ready 66`; the eight open items are batch 7's (records not yet written by that worker); **no work entry names a batch-8 item** |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0 (refreshed and deduplicated); all 12 declared batch-8 cross-batch edges carry a review row; the single `removed` proposal row is registered |
| wikilink/deps consistency | local extraction of every `[[...]]` in the manifest statements and strategies | 0 unresolved links, 0 links outside `deps`/`justified_by`/same-page ids |

## Completion

- All seven items recorded `ready` with the examined direct dependency ids as evidence;
  records are `research/frontier-42-coxeter-32-step1-<id>.json` and are current for the
  final manifest bytes.
- This batch is mathematically scaffolded but not proved: the seven items are proof contracts
  for Step-3 authoring. No published content, shared plan, engine state or verdict was edited,
  and no selected pair was changed.
- The whole-run `step1-readiness`, `item-dependency-levels` and `content-policy` gates cannot
  pass while sibling batches are mid-flight; every remaining failure names only other batches'
  empty or in-flight files and resolves when those batches land.

## Self-review corrections before hand-off

A final read of the statements and strategies found and corrected four defects, after which the
affected readiness records were refreshed (they are re-recorded, and no other writer touches
this pair):

1. `lem-cg-spherical-simplex-existence-and-link-gram-formula`: the positivity clause of (iv)
   was rephrased as the explicit quadratic-form witness, and a new clause (v) proves that the
   angular distance of the definition really is the intrinsic round metric on a link (sector
   convexity of a convex cone) and that the two tangent-cone descriptions agree; the
   round-versus-chord comparison needed for the bi-Lipschitz statement was added to (ii).
2. The truncation-agreement wording in `def-cg-euclidean-cone-and-spherical-join-metrics` and
   in the cone theorem was sharpened so that a side of length `pi` is handled by the antipodal
   model instead of being claimed to equal an intrinsic path distance.
3. `ex-cg-spherical-simplex-and-vertex-link-schur-complement`: the two-fold link length was
   wrong (it is `arccos(1/4)`, with projected squared norm `2/3` and projected inner product
   `1/6`, matching the iterated Schur value), and the sentence pointing at the Schur positivity
   now cites the correct item clause.
4. That example also gained the missing `def-cholesky-factorisation-with-positive-diagonal`
   dependency its own strategy cites.

An earlier correction, made while drafting, fixed the sign of the inward-normal inequalities
for the tangent cone (`<xi,n_j> >= 0` for inward normals), checked against the cube and polygon
cases.

## Exploratory item-validator probes (not stage-1 gates) and hand-off numbers

The stage-1 battery no longer includes item-scoped `extcheck` (the owner-reviewed finding
recorded in `research/frontier-42-coxeter-32-batch-6.notes.md`: its selector is derived from
the live manifests while the selected item carriers do not exist until `3b-author`). The
probes were nevertheless run and are recorded honestly:

- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool extcheck --quiet` →
  `FAIL` with `[focus-item-unknown]` for every scaffolded-but-unwritten id (including all seven
  batch-8 ids). Expected pre-author state; the gate returns after authoring.
- `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool fwdcheck --quiet` →
  the same `focus-item-unknown` failure, same cause.
- `node tools/depsource.mjs --items-file research/frontier-42-coxeter-32-frontier-gate-items.json
  --run frontier-42-coxeter-32` → `Error: Invalid or empty current page in
  frontier-42-coxeter-32-batch-10.pages.json`, the same partially populated sibling manifest
  observation recorded by batch 6. Not a batch-8 defect.

At this batch's hand-off:

- `node tools/step1-decisions.mjs check --run frontier-42-coxeter-32` → `items 74, ready 66`;
  the eight open items belong to the in-flight batch 7, and **no work entry names a batch-8
  item**; all seven `research/frontier-42-coxeter-32-step1-<id>.json` records are current for
  the manifest bytes on disk.
- `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` → exit 1 with only
  `empty scaffold inventory` lines for the not-yet-scaffolded sibling pages (50 at the time of
  the run) and no label, dependency or cycle error; a batch-local evaluation of the same tool
  logic over the current manifests reports 0 errors and the seven levels tabled above.
- `node tools/content-policy.mjs --manifest-only ...batch-{2,4,6,8}.pages.json` → `35 scoped
  item(s), 0 error(s), 0 warning(s)`; the whole-run invocation fails only on batch 7's
  in-flight misspellings, an observation reported to the owner in this note.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` → exit 0; the
  batch-8 input carries one row per declared cross-batch edge (12) plus the single `removed`
  inventory proposal, and `--require-reviewed` still fails only on sibling batches that have
  not written their inputs yet.

## Post-hand-off: join-metric audit and A4 strategy repair

A deeper audit of A4 clause (3) (`thm-cg-cone-join-metric-and-local-product-chart`), run
after the hand-off, found the recorded justification of the join triangle inequality to be
**mathematically wrong**, and it was replaced. Record of what was wrong, what is now recorded,
and the evidence.

### The defect

The old sentence read: "To see that this is a metric, embed the three relevant points of each
factor isometrically into the round circle $S^1$: a three-point metric space with distances in
$[0,\pi]$ embeds by placing arcs $a+s/3,b+s/3,c+s/3$, $s=2\pi-(a+b+c)\ge0$, whose circular
distances are $a,b,c$ because $a+s/3\le\pi$ ...". Both claims are false in general:

1. **Not every 3-point metric space of diameter $\le\pi$ embeds isometrically in the round
   circle.** The triple $(\pi,\pi,\pi)$ is a counterexample: pairwise circular distance $\pi$
   on a circle means pairwise antipodal, and a circle has no three pairwise-antipodal points.
   Such triples are not exotic here: for an isometric polyhedral gluing whose total dihedral
   angle around an edge is $\ge 3\pi$, the edge link is a truncated circle of circumference
   $\ge3\pi$ and contains three points at angular distance $\pi$ from each other.
2. **The equal-arc construction does not realise the prescribed distances.** With gaps
   $a+s/3,b+s/3,c+s/3$ summing to $2\pi$, each gap is $\le\pi$ (from $a\le b+c$, $a\le\pi$:
   $2a\le\pi+b+c$), so each circular distance is $\min(\text{gap},2\pi-\text{gap})=\text{gap}
   = a+s/3$, not $a$; the distances agree only when $s=0$ (perimeter $2\pi$).

The statement of A4(3) is not affected: the join formula is asserted as a metric by the two
sources, and the audit found no counterexample (see below). Only the recorded strategy was
repaired.

### The replacement strategy (now in the manifest)

A4 (3) now records the cone-isometry route of the sources, with the explicit expansion:
for $\Phi\bigl(t((\cos\theta)x_1+(\sin\theta)x_2)\bigr)=(t\cos\theta\,x_1,t\sin\theta\,x_2)$ (the
inverse of the map displayed in the statement) and $d_X$ the cone metric on $C(L_1*L_2)$ built
from the join formula by the law of cosines,
$$d_X(x,x')^2=t^2+t'^2-2tt'\bigl(\cos\theta\cos\theta'\cos d^1(x_1,x_1')+\sin\theta\sin\theta'\cos d^2(x_2,x_2')\bigr)$$
equals the square-sum product metric distance of $\Phi x,\Phi x'$ in $C(L_1)\times C(L_2)$
(only $\cos^2+\sin^2=1$ is used), so $d_X$ is the pullback of a metric along the bijection
$\Phi$; the join distance is recovered as the apex angle
$d(x,x')=\arccos\bigl((2-d_X((1,x),(1,x'))^2)/2\bigr)$ (BH I.5.7), and this is the verification
that the join formula defines a metric, which BH I.5.14 attributes to I.5.15 and which Davis I.2
Lemma I.2.18 states as the product-cone isometry. Three-point form:
$\cos\angle(P,Q)=\sum_{i=1,2}|P_i||Q_i|\cos\angle_i(P_i,Q_i)$ for unit $P,Q,R$ of the product
cone, so the triangle inequality $\angle(P,Q)\le\angle(P,R)+\angle(R,Q)$ is exactly the metric
property of the angle on the unit sphere of a product of two Euclidean cones (BH I.5.13-I.5.16).

### Verification performed

- The pullback identity above was expanded algebraically and checked term by term (both sides
  equal $t^2+t'^2-2tt'[\cos\theta\cos\theta'\cos d^1+\sin\theta\sin\theta'\cos d^2]$); $\Phi$ is
  a bijection (radii $R=\sqrt{|u_1|^2+|u_2|^2}$, $\cos\theta=|u_1|/R$, $\sin\theta=|u_2|/R$,
  with the collapsed cases $u_1=0$ or $u_2=0$).
- The join triangle inequality itself was stress-tested numerically over the full space of join
  triples: two factor metric triples $(a,b,c),(a',b',c')$ (each in $[0,\pi]$, triangle
  inequalities) and three join angles $\theta_1,\theta_2,\theta_3\in[0,\pi/2]$, checking
  $\arccos C_{ij}$ for $C_{ij}=\cos\theta_i\cos\theta_j\cos d_{ij}+\sin\theta_i\sin\theta_j\cos d'_{ij}$.
  Random and adversarial families (sphere-embedded metrics, abstract random metrics, truncated
  circles of circumference $2\pi,3\pi,3.5\pi,4\pi,5\pi$, pairwise-antipodal triples, mixed
  extremes) over $2\cdot10^5$+ sampled triples, plus a coordinate-descent optimiser maximising
  the violation over all nine parameters: **maximum violation found $1.8\cdot10^{-8}$**, i.e. no
  violation beyond floating-point error (equality cases are attained). Scripts in
  `/tmp/jointest.py` and `/tmp/joinopt.py`, not committed.
- Honest residual for Step 3: BH I.5.14 states the metric property is "implicit in" I.5.15 and
  Davis leaves Lemma I.2.18 as an exercise (with three references), so the last passage - the
  link metric recovered from the product-cone metric is a metric - must be written out from
  BH I.5.13-I.5.16 by the author. The claim is source-asserted and survives every attempted
  counterexample here; the A4 record's reason names this obligation so it cannot be passed
  silently.

### Re-records forced by the edit

The readiness hash covers the transitive dependency closure, so the A4 edit invalidated two of
this batch's dependents. All three were re-recorded (new sha256 values):

| item | relation | new sha256 (16) |
|---|---|---|
| `thm-cg-cone-join-metric-and-local-product-chart` | edited | `0b133fb73e627f38` |
| `def-cg-euclidean-cone-and-spherical-join-metrics` | `justified_by` A4 | `0b133fb73e627f38` |
| `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` | transitive deps | `6e3248c2a7598021` |

### Fresh check results after the repair (2026-10-07)

| check | result |
|---|---|
| `step1-decisions check` | `items 74, ready 74`; **no work entry names any batch-8 item** (sibling batches landed while the repair ran) |
| `manifest-deps` (whole run) | `74 item(s), 0 missing, 0 error(s)` |
| `content-policy --manifest-only` (whole run) | `74 scoped item(s), 0 error(s), 0 warning(s)` — batch 7's misspellings are gone |
| `item-dependency-levels check` | exit 1, only `empty scaffold inventory` for four sibling pages (`coxeter-euler-forms-and-sortable-chamber-cones`, `davis-cat-zero-geometry-and-finite-subgroup-fixed-points`, `noncrossing-partition-lattices-and-kreweras-complements`, `sortable-projections-and-finite-cambrian-lattices`, and their B pages); no label, dependency or cycle error, and no batch-8 id appears |
| `validate-plan` | exit 0; page order acyclic and consistent; page 1732/1733 prerequisites as declared; item lists of generated pages live in the batch manifests (`0 new items` from the plan spec) |
| `manifest-integrity` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| `coverage-checklist --require-destination` | `0 error(s), 1 warning(s)` (advisory `coverage-low-yield`, 6/21) |
| `source-fetch-check` (check mode) | `2/2 source(s) resolved`; `2/2 fetch-verified` |
| `frontier-dependency-ledger refresh` | exit 0 (refreshed and deduplicated) |

No published content, shared plan, engine state or verdict was edited; the only writes are this
batch's manifest, readiness records and notes.

### External-reference checks and ledger detail (same session)

- `url-sweep --coverage batch-8.coverage.json --out /tmp/batch8-url-liveness-final.json --recover
  --fail-on-dead`: `2/2 live; 0 failed; 0 suspect`, exit 0 (artefact written to `/tmp`).
- `source-backing --coverage batch-8.coverage.json --liveness /tmp/batch8-url-liveness-final.json
  --reharvest-plan /tmp/batch8-reharvest-final.json`: `4 authored result(s) across 1 file(s),
  every one still backed by an openable source`, exit 0.
- `frontier-dependency-ledger refresh --run frontier-42-coxeter-32 --require-reviewed`: exit 1
  with `Cross-batch review incomplete: supply every batch input and review every declared edge`.
  Diagnosis from the refreshed ledger: `reviewed_batches = 1..8` (batch-8's input is supplied and
  valid); `unreviewed_batches = 9..32`; of the 144 declared edges, the 47 without reviews are all
  declared by sibling batches 10-27 whose input files do not exist yet; **all 12 edges declared by
  batch-8 files carry a review row (0 without reviews)**, and batch-8 has no orphaned reviews. The
  plain `refresh` (without `--require-reviewed`) exits 0. This failure is a whole-run completeness
  observation, not a batch-8 defect.

### Level-label recheck (correct scope)

`runPages`+`dependencyLevels` over the whole run's 64 page manifests (the in-run scope the
instruction defines): 48 errors, **all** `empty scaffold inventory` for sibling pages, 0 other
errors; batch-8 labels recompute exactly as recorded: A1 1, A2 5, A3 6, A4 7, B1 6, B2 3, B3 8.
(A batch-8-only scope is the wrong computation: it treats other batches' in-run items as
out-of-run suppliers and understates every level.)
