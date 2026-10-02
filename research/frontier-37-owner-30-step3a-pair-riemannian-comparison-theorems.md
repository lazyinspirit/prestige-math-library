# Step 3a scope review — pair `riemannian-comparison-theorems`

- Run: `frontier-37-owner-30` (role: alpha; batch 13; this pair only)
- Dispatch label: `step3a-pair-riemannian-comparison-theorems-680e54d009f6f28a`
- A page: `riemannian-comparison-theorems` (order 487, `differential-geometry`, 51 items:
  42 designed A items, 6 designed `fs-` items, 3 declared local lemmas)
- B page: `riemannian-comparison-theorems-examples` (order 488, 12 items: 10 examples,
  2 counterexamples)
- Page `requires`: A → `riemannian-metrics-length-distance-and-volume`,
  `connections-levi-civita-and-parallel-transport`,
  `geodesics-the-exponential-map-completeness-and-hopf-rinow`,
  `riemann-curvature-and-riemannian-submanifolds`,
  `jacobi-fields-conjugate-points-and-the-cut-locus`, `covering-spaces-and-lifting`,
  `product-measures-and-the-fubini-tonelli-theorems`,
  `radon-measures-and-the-riesz-markov-kakutani-theorem`; B → the A page only
- **Scope decision: `sufficient`**, recorded with
  `node tools/step3-decisions.mjs record-scope --run frontier-37-owner-30 --page
  riemannian-comparison-theorems --decision sufficient`; receipt
  `research/frontier-37-owner-30-step3a-review-riemannian-comparison-theorems.json`
- This file judges **scope only**. No proof verdict, no item approval, no owner record, no
  scaffold, plan, coverage or metadata edit. Observations in §5 are for the owner's information
  and are not scope blockers.

## Evidence read

| Artifact | Use |
|---|---|
| `research/frontier-37-owner-30-batch-13.pages.json` | Scope carrier: 51 A + 12 B items with ids, kinds, statements, strategies, deps and sources; page order/companion/requires; batch 13 contains no other pair |
| `research/frontier-37-owner-30-batch-13.coverage.json` | 3 sources, 26 harvested rows (19 `included`, 3 `inline`, 1 `already-published`, 3 `out-of-scope`); all `fetch_verified` |
| `research/frontier-37-owner-30-batch-13.notes.md` | Scaffolder reconciliation record: design locations, three local lemmas, source-harvest table, escalations |
| `research/frontier-37-owner-30-batch-13.cross-batch-dependencies.json` | `[]` — no in-run cross-batch edge |
| `research/plan-differential-geometry-track.md` | Binding design DG-23: header L5935; A/B pages L5937–5938; Requires L5939–5943; A design L5950–6104; `fs-` L6105–6120; B design L6121–6140; sources L6145–6163 (Lee controls L6146–6152); strategy L6164–6198; plan row L441; source-disposition mapping L10383; requires cutover L11397 |
| `research/plan-spec.json` (§entries 487/488) | Page identity, order, companion, category and `requires` match the manifest; both planned item arrays are empty placeholders, so the manifest is the inventory of record |
| `research/frontier-37-owner-30-alpha-step1-drift.md` L65–68; `…-drift-evidence.json` | Step-1 verdict `no-drift` for this page; declared requires as above; Toponogov support/subdivision flagged as an authoring obligation |
| `research/frontier-37-owner-30-scope-ledger.json`; `…-covers.json`; plan-spec reverse scan | Both pages are in the 60-page run scope; A's only consumer is its B companion (no in-run, planned or published page requires either page) |
| `research/frontier-37-owner-30-step1-*.json` (63 owned) | All 63 current records `ready`; the three former batch-13 escalations carry owner recertifications |
| `research/frontier-37-owner-30-operator-record.md` | Owner recertified the formerly escalated batch-13 items (Toponogov side-point and diameter routes, round-sphere example) on 2026-09-29 |
| `research/frontier-36-complete-step3a-pair-jacobi-fields-conjugate-points-and-the-cut-locus.md` §§"Source coverage/role"; `research/frontier-36-complete-alpha-step8.md` L20, L192 | Inherited records: two DG-22 source rows deferred with destination `riemannian-comparison-theorems` (Lee Prop. 10.9 constant-curvature polar metric; Eschenburg Thm. 5.5 Bishop–Gromoll) |
| `library/*` and `items/` | All 8 A-page `requires` are published library pages; all 52 out-of-run direct item suppliers exist and are `status: published`; no run id or owned item id appears in `items/`, `library/` or the articles |
| `research/published-consumer-supplier-ledger.md` | No entry names this pair, its pages, or any direct supplier used here |
| Independent re-fetches in `/tmp` (this review) | Datar `fab4114ca5142b8e` (1 206 685 B, 290 pp.), Eschenburg `bc1478206c223194` (338 541 B, 77 pp.), Lang `931ce2b70009721e` (810 255 B, 144 pp.) — byte-identical to the coverage stamps; cited passages re-read |

## 1. Intended subject and role in the library

The controlling design is DG-23 "Riemannian Comparison Theorems"
(`research/plan-differential-geometry-track.md` L5935–6198; the subordinate B inventory at
L6121 is not a competing design). It fixes the subject as: comparison sine/cosine/cotangent
functions and the constant-curvature model machinery; the radial Jacobi tensor, its
invertibility before the first conjugate point, the radial Riccati operator and equation, the
trace Riccati inequality; Sturm comparison; Rauch I (two-manifold normal-Jacobi form) and
Rauch II (nonzero initial field with matched scalar initial shape); rigidity in Rauch
comparison and conjugate-point delay/force corollaries; the Laplace–Beltrami trace definition;
Hessian comparison for the distance in both curvature directions and Laplacian comparison
under a Ricci lower bound (with the cut-locus caveat as a remark); absence of conjugate points
under $K\le0$; the complete-local-isometry covering theorem; Cartan–Hadamard and its
unique-geodesic and convexity corollaries; Bonnet's conjugate-radius theorem, Bonnet–Myers, and
finiteness of $\pi_1$; Cheng maximal-diameter rigidity; model radial area/ball volume, the
radial volume Jacobian, the logarithmic-derivative–Laplacian identity, relative volume-density
comparison, Bishop–Gromov, and its upper-bound, doubling, rigidity and volume-growth
corollaries; comparison triangles, the first-variation hinge derivative, the Toponogov
distance support inequality, hinge and triangle comparison, corresponding side-point
distances, and Toponogov diameter rigidity; plus the conscious deferral remark on
Alexandrov/differentiable-sphere theory. The B page supplies twelve worked instances and two
counterexamples (model Jacobi fields; Rauch Euclidean-vs-spherical; Hessian/Laplacian in space
forms; Cartan–Hadamard hyperbolic; flat-torus non-injectivity; Bonnet–Myers sphere;
Bishop–Gromov model ratio; Euclidean/hyperbolic volume growth; Toponogov on the round sphere;
paraboloid positive-curvature noncompactness; Ricci-vs-sectional non-control in dimension ≥3;
equality diagnostics).

Prerequisites are exactly as designed (plan L5939–5943): the eight A-page `requires` are the
DG-18–DG-22 pages plus the covering and measure pages; all eight are published library pages,
and the design's warning that the covering/measure pages were "planned with empty arrays" is
stale at this frontier. DG-22 (`jacobi-fields-conjugate-points-and-the-cut-locus`, order 485)
was built in `frontier-36-complete`; its report recorded that the comparison page is its only
planned consumer and that it inherits DG-22's radial-Jacobi, index-form, cut-locus and polar
integration interfaces.

Role. A reverse scan of all 30 batch manifests, the plan-spec `requires` graph and the
published library finds **no consumer** of either page other than the B companion; the A page is
not depended on by any later planned page (Gauss–Bonnet DG-24 requires DG-18–21, not DG-23).
The pair is therefore a leaf pair in dependency terms: it introduces the comparison spine and
blocks nothing. It repairs no published debt (no ledger entry names it).

## 2. Design → manifest mapping

All 60 designed ids are present, in design order, with the designed kinds and no renames or
drops: the 42 numbered A items 1–42, the six `fs-` items (kind `false-statement` vs the prose
"false statement" — naming convention only), and the 12 B items. Three further A items are
declared local supports, each documented in the batch-13 notes and each consumed before use:

| Local lemma | Closes which seam |
|---|---|
| `lem-riccati-comparison-for-scalar-initial-shape` | Rauch II's scalar-lambda initial shape; the design's broader "equal logarithmic derivatives" wording is not sufficient (the notes give the flat-plane counterexample), so the lemma carries the matched full scalar initial shape |
| `lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete` | Completeness of the metric lifted to a covering, needed before `cor-bonnet-myers-fundamental-group-is-finite` may use the universal cover |
| `lem-toponogov-distance-support-inequality` | Lang Thm. 5.12 local Alexandrov support inequality underpinning hinge/triangle comparison |

The manifest preserves the design's conventions and sharpened hypotheses that the scaffolder
recorded in the notes: Rauch II only before the first focal time of the full Jacobi tensor;
strict positive-curvature domain restrictions on model formulas, comparison triangles and
Toponogov statements; the fixed-side triangle sign checked against the argument, not
Eschenburg's inconsistent display (6.10); Cheng proved from Bishop–Gromov equality rather than
asserted from the diameter alone; the cut-locus excluded from pointwise Hessian/Laplacian
comparisons; the $K\le0$-convexity corollary excluding constant geodesics from "strict". Page
metadata agrees with `plan-spec.json`, the drift evidence and the scope ledger: order 487/488,
category `differential-geometry`, companions each other, B `requires` only the A page.

Item count 51 ≤ the page cap; the pair is coherent and no split or merger is indicated. The
three Step-1 escalations recorded in the batch notes (Toponogov side-point proposition,
Toponogov diameter rigidity, round-sphere example) are superseded: all three carry current
owner-recertified `ready` records (`owner: true`, 2026-09-29), and the notes' "escalations
remain" sentence is stale on this point.

## 3. Source coverage (independently re-checked)

The A page carries three full-text sources; the B page reuses them. The coverage table has 26
harvested rows: 19 `included`, 3 `inline`, 1 `already-published` (`thm-index-lemma`), and 3
`out-of-scope` with specific reasons (Datar Rmk. 28.1.5 four-radius annular comparison — a
distinct stronger inventory; Eschenburg Thm. 12.2 Cheeger–Gromoll splitting — Busemann/maximum
principle machinery; Eschenburg §11 differentiable sphere theorem — pinching and injectivity
radius; the last two are consistent with the design's own deferrals and its
`rem-alexandrov-and-differentiable-sphere-theorems`).

I re-downloaded all three bodies in this review and re-hashed them; the stamps match the
coverage record byte-for-byte (hashes in the evidence table). I then re-read the named controls
in the fetched texts:

- Datar: Thm. 20.1.1 / Lem. 20.1.2 (complete local isometry covers), Prop. 24.2.1 / Lem.
  24.2.2 (conjugate comparison), Thm. 24.3.1 (Cartan–Hadamard), Thm. 25.3.1 and §26.2 (Rauch),
  Lem. 26.1.1 (index lemma), Thm. 27.1.1 (Myers), §27.2 with Lem. 27.2.1 and Cor. 27.2.2
  (polar volume element and the model density $\mathrm{sn}_\kappa^{\,n-1}$), Thm. 28.1.1 and
  Lemmas 28.1.2/28.1.4 (Bishop–Gromov), Thm. 28.2.1 (Cheng), and the Lecture 24 preamble
  (model spaces and their polar metric) — all present.
- Eschenburg: Thms. 3.1/3.3 (Riccati and Rauch I/II), Thms. 4.1/4.3 (trace Riccati and radial
  density), Thm. 5.5 / Cor. 5.6 (Bishop–Gromov and doubling), Thm. 6.1 (Toponogov) with its
  support-function proof, Thm. 12.1 (Myers–Cheng) with equality proof; Thm. 12.2 and §11 as
  recorded out-of-scope.
- Lang: Def. 5.7 and Lemmas 5.8–5.9 (lower-curvature hinge/angle signs and the balanced-segment
  chord comparison), Thm. 5.12 (local Alexandrov), Props. 5.13–5.14 and Thm. 5.15 (local-to-
  global Toponogov), Thm. 5.17 (positive-curvature endpoint rigidity).

Every `included` row names a scaffolded item; `coverage-checklist` reports 0 errors/0 warnings
for the batch. The three sources are independent treatments of the same spine, and the
out-of-scope reasons match the design's deliberate boundaries. Lee Ch. 11 is cited by the
design as the "primary textbook route" for items 8–26 with named controls Thms. 11.1, 11.2,
11.5, 11.7, 11.8 and Cors. 11.3–11.4 (plan L6146–6152); the Edinburgh copy stays truncated on
direct download (I reproduced this), and the scaffold used Datar/Eschenburg for that range.
The statement-level content of the Lee controls was checked through full-text reads of the
book's indexed text, not through a locally complete PDF; §5.1 reports the one Lee control that
is not itemized on this page.

## 4. Findings for the owner (recorded, not scope blockers)

1. **Inherited Lee deferral and the constant-curvature metric (advanced as an owner
   observation, not raised as insufficiency).** The `frontier-36-complete` DG-22 coverage
   recorded `Proposition 10.9, full constant-curvature polar metric` as `deferred` with
   destination `riemannian-comparison-theorems`, and the Step-8 register kept the row
   (`research/frontier-36-complete-alpha-step8.md` L20, "stands | reviewed"); the DG-22 Step-3a
   report asked the DG-23 author to confirm the destination. The DG-23 design's own Lee
   control list also names Cor. 11.4 (Metric Comparison Theorem). The current scaffold has no
   item for the model metric $g_\kappa=dr^2+\mathrm{sn}_\kappa(r)^2g_{S^{n-1}}$ on
   $M_\kappa\setminus\{o_\kappa\}$ nor for the normal-coordinate metric comparison
   $K\le C\Rightarrow g\ge g_C$, and no published item supplies them either
   (`cor-polar-form-of-the-metric-in-normal-coordinates` is the general $g=dr^2+g_r$ only);
   the Datar Lecture 24 preamble and Cor. 27.2.2 in the pair's own fetched source contain the
   formula and the model density. My reading is that this is a **route-substitution gap in the
   source bookkeeping rather than a gap in the comparison subject**: every claim the pair
   actually makes about the model spaces is recoverable from itemized content on the Datar
   route (space-form Jacobi fields $\to$ radial determinant $\to$ $A_\kappa=\omega_{n-1}
   \mathrm{sn}_\kappa^{\,n-1}$ $\to$ $V_\kappa$), and Lee Cor. 11.4's content is present at the
   Hessian-comparison level through the $K\le k$ direction of
   `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds`. I record
   `sufficient` on that reading, and flag the alternative openly: if the owner wants the
   inherited deferral discharged literally, the minimal enrichment is one A item before
   `def-model-space-radial-area-and-ball-volume` (model polar metric, sourced to the already
   stamped Datar Lecture 24 range and Lee Prop. 10.9) and/or a
   `prop-metric-comparison-in-normal-coordinates` after Rauch I (Lee Cor. 11.4); the owner may
   equally record `proceed` with the deferral re-pointed to `owner-decision` or to a future
   constant-curvature page, since no item, consumer or published page depends on the display.

2. **Coverage-record nit (non-blocking).** The harvest table has no row for the Datar Lecture
   24 preamble (model spaces, polar metric, $\mathrm{sn}_\kappa$ ODE) or for Cor. 27.2.2,
   although items cite those ranges (`def-comparison-sine-cosine-and-cotangent-functions`,
   `def-model-space-radial-area-and-ball-volume`, the model examples). The content is realized;
   only the row bookkeeping is incomplete. Cheap repair if wanted: add/reword rows
   `Lecture 24 preamble; model spaces and polar metric → inline(…)` and `Cor. 27.2.2; model
   density → included(thm-bishop-gromov-volume-comparison)`.

3. **For Step 3b (not a scope matter).** The space-form B examples
   (`ex-cartan-hadamard-for-hyperbolic-space`, `ex-bishop-gromov-ratio-is-constant-in-the-model-space`,
   `ex-distance-hessian-and-laplacian-in-space-forms`, `ex-model-jacobi-fields-…`) will need
   direct edges to the published model items (`ex-hyperbolic-space-has-negative-constant-sectional-curvature`,
   `ex-jacobi-fields-in-constant-sectional-curvature`, `def-constant-sectional-curvature-and-space-form`)
   and/or to in-run item 2/3 to close their claims; the current deps do not name them. Flagged
   for the author; no action taken here.

4. **Former escalations resolved.** The batch-13 notes' three "original escalations" are
   superseded by owner recertifications (`research/frontier-37-owner-30-step1-<id>.json`,
   decision `ready`, `owner: true`); no open escalation in this pair remains.

## 5. Checks run for this pair (read-only)

| Check | Result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-37-owner-30-batch-13.coverage.json` | exit 0: 1 page, 26 harvested, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-13.pages.json` | 63 items, 0 normalized, 0 errors |
| `node tools/manifest-deps.mjs research/frontier-37-owner-30-batch-*.pages.json` | 778 items, 0 normalized, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-37-owner-30-batch-13.pages.json` | 63 scoped items, 0 errors, 0 warnings |
| `node tools/item-dependency-levels.mjs check --run frontier-37-owner-30` | exit 0: 778 items across 60 pages, maximum level 31 |
| `node tools/step1-decisions.mjs check --run frontier-37-owner-30` | 778/778 `ready`, closed |
| `node tools/fwdcheck.mjs research/frontier-37-owner-30-batch-13.pages.json` | exit 0: no open forward reference |
| `node tools/step3-decisions.mjs check --run frontier-37-owner-30 --phase scope` (before recording) | this pair's scope review outstanding; nine pairs open overall while sibling alphas review |

## Decision

`sufficient` — the planned definitions (comparison functions, radial Jacobi tensor and Riccati
operator, Laplace–Beltrami trace, model radial area/volume and radial volume Jacobian,
comparison triangles), results (Sturm, Rauch I/II and rigidity, conjugate-point delay/force,
Hessian and Laplacian comparison with cut-locus caveat, no conjugate points under $K\le0$,
covering/complete-local-isometry, Cartan–Hadamard with geodesic-uniqueness and convexity
corollaries, Bonnet conjugate radius, Bonnet–Myers and finite $\pi_1$, Cheng rigidity,
relative density and Bishop–Gromov with four corollaries and interval rigidity, hinge,
triangle and side-point Toponogov, diameter rigidity, plus the explicit Alexandrov/sphere
deferral) and examples (12 B items across the three curvature signs, equality and strictness
diagnostics, and two counterexamples) cover the intended comparison subject as designed; the
manifest realizes DG-23 one-for-one, every source row is dispositioned with the stamps
verified in this review, and no item, page or planned consumer needs content that is absent.
The Lee Prop. 10.9 / Cor. 11.4 bookkeeping point in §4.1 is advanced as an owner observation
with a concrete optional enrichment, not as a scope defect; no merger is warranted.
