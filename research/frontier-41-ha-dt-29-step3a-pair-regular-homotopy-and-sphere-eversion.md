# Step 3a scope review — pair `regular-homotopy-and-sphere-eversion`

- Run: `frontier-41-ha-dt-29`, batch 18 (the batch holds only this pair).
- A page: `regular-homotopy-and-sphere-eversion` (order 567); B page:
  `regular-homotopy-and-sphere-eversion-examples` (order 568); differential
  topology (DT-26).
- Pair inventory: 20 items — 15 A + 5 B; every item carries a current
  step-1 `ready` record (`step1-decisions check`: 883/883 run items ready,
  closed).
- Decision recorded with `tools/step3-decisions.mjs record-scope`:
  **`sufficient`** (review-of-record for the A page, covering the pair). No
  scaffold, item, plan, manifest or owner record was edited by this review.

## Inputs read

- `research/frontier-41-ha-dt-29-batch-18.pages.json`,
  `...-batch-18.coverage.json`, `...-batch-18.notes.md`,
  `...-batch-18.cross-batch-dependencies.json` (1 page + 28 item edges, all
  `open`, all into batch 17), and the 20 `...-step1-<id>.json` readiness
  records.
- Prose design `research/plan-differential-topology-track.md` §DT-26
  (L1339–L1375) plus §1.1 (L127–L145, the AT reconciliation tokens),
  §12.1 (L2030–L2044, the A/B leaf invariant) and §12.4 (L2242, the exact
  `requires` array); `research/plan-spec.json` orders 567/568.
- Owner direction `research/frontier-41-ha-dt-29-owner-authoring-direction.md`
  (no DT-26-local clause); drift review
  `research/frontier-41-ha-dt-29-alpha-step1-drift.md` §regular-homotopy
  (L133–L137).
- The batch-17 (`formal-immersions-and-the-smale-hirsch-theorem`) manifest
  statements of all 11 cited in-run suppliers; the batch-19 consumer item
  `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`;
  and the published home pages/statements of the cited published suppliers
  (resolution and spot checks below).

## Design vs scaffold (scope, not proof)

All 11 DT-26 design A items and all 5 design B items are present; the A page
adds exactly the four items the design's "Hard-proof closure" requires
("the formal section spaces and relevant AT homotopy groups are computed"):

| Design DT-26 | Scaffold |
|---|---|
| A1 Gauss frame map | `def-gauss-frame-map-of-an-immersion-into-euclidean-space` |
| A2 formal data = Stiefel sections | `prop-euclidean-formal-immersions-are-sections-of-a-stiefel-bundle` |
| A3 rotation number | `def-rotation-number-of-an-immersed-oriented-circle-in-the-plane` |
| A4 Whitney–Graustein | `thm-whitney-graustein-classification-of-plane-circle-immersions` |
| A5 regular homotopy preserves formal class | `lem-regular-homotopy-preserves-the-formal-gauss-class` |
| A6 Smale sphere classification (clutching explicit) | `thm-smale-classification-of-sphere-immersions-in-euclidean-space` |
| A7 π₂(SO(3)) reduction for eversion | `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three` |
| A8 sphere eversion | `thm-sphere-eversion` |
| A9 not an embedding isotopy | `rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` |
| A10 self-intersections allowed, no rank drop | `rem-regular-homotopy-allows-self-intersections-but-never-rank-drop` |
| A11 AT seam | `rem-sphere-immersion-groups-are-at-computations-not-dt-constructions` |
| added closure | `lem-the-basepoint-evaluation-of-the-stiefel-section-space-is-a-fibration`, `lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension`, `lem-the-second-homotopy-group-of-so-three-vanishes`, `lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number` |
| B1–B5 | `ex-plane-circle-immersions-of-rotation-number-k`, `cex-the-figure-eight-and-round-circle-are-not-regularly-homotopic-as-oriented-immersions`, `ex-formal-frame-homotopy-behind-sphere-eversion`, `cex-a-homotopy-through-maps-with-a-rank-drop-is-not-a-regular-homotopy`, `ex-a-boy-surface-immersion-of-real-projective-two-space` |

No design item was dropped or narrowed; the four local items are the section
space, the Stiefel connectivities, the π₂(SO(3)) vanishing and the circle
winding classification that the design's closure sentence demands as inputs.
The B page is design B1–B5 verbatim. I judged coverage only; I did not certify
the statements or their proof routes.

## Source coverage

- Six treatments, all fetch-verified with hash receipts on 2026-10-04 and
  stamped 2026-10-05: Cohen (46 pp.), Francis Lecture 9 (3 pp.), Francis
  Lecture 10 (2 pp.), Whitney 1937 (10 pp.), Kusner 1987 (5 pp.), Karcher
  (2 pp.). Three short documents carry full-document reading receipts in the
  coverage file.
- 29 harvested rows with dispositions: 14 `included`, 1 `inline`, 7 `deferred`
  with destinations, 7 `out-of-scope` with reasons. The deferred destinations
  are all in-run pages that exist in the current manifests:
  `formal-immersions-and-the-smale-hirsch-theorem` (batch 17) ×3,
  `characteristic-class-obstructions-to-immersions-and-embeddings` (batch 20)
  ×3, `isotopy-extension-and-embedding-theory-beyond-whitney` (batch 19) ×1.
  The out-of-scope rows (immersion conjecture/characteristic classes,
  higher-dimensional eversion and stable stems, Boy half-way models, minimal
  surface moduli, chronology) match the approved DT-26 item list.
- `coverage-checklist --require-destination`: 1 page, 29 results, 0 errors,
  0 warnings. The 14 `included` rows anchor nine distinct items (repeat rows
  for the Smale classification and eversion); the remaining items are
  page-level remarks or B-examples sharing the same treatments, and the tool
  accepts that structure.
- Source-description bookkeeping (already recorded by batch 18, not a scope
  gap): the design's locator rows point items 5/10/11 at Francis Lectures
  9–10 and its Source line names Ranicki §7.4, but the fetched Francis 9
  covers Whitney's theorem/immersion conjecture only, Francis 10 covers the
  sphere classification, Whitney–Graustein is in neither (it is Whitney 1937)
  and Boy's surface is in neither (Kusner/Karcher). The batch substituted and
  fetch-stamped the correct full texts; Ranicki §7.4 carries no item locator
  in the DT-26 block and is not harvested.

## Prerequisite audit

- The A page's six `requires` entries resolve as required: five are published
  pages (`lie-groups-invariant-fields-and-the-exponential-map`,
  `covering-spaces-and-lifting`, `higher-homotopy-groups-and-cofiber-sequences`,
  `fibrations-fiber-bundles-and-homotopy-exact-sequences`,
  `hurewicz-whitehead-freudenthal-and-cw-approximation`, all
  `status: published`) and `formal-immersions-and-the-smale-hirsch-theorem` is
  the in-run DT-25 A page at order 565 < 567. The B page requires exactly the
  A page.
- Independent resolution audit over the 20 items (statements, strategies and
  declared `deps`): 82 unique cited ids — 56 published items on disk (all
  `status: published`) and 26 in-run scaffold ids (11 batch-17 DT-25 items,
  14 items of this A page and 1 item of this B page); 0 unresolvable ids.
  No citation is homed later than order 568 (published home orders are
  ≤ 494; in-run orders are 565/567/568), so there is no forward
  reading-order edge.
- The 11 batch-17 suppliers were read in the batch-17 manifest and match the
  claims consumed here: `thm-smale-hirsch-immersion-theorem` (weak homotopy
  equivalence, positive codimension, relative parametric form; not asserted
  for equidimensional closed sources), `cor-regular-homotopy-classes-…`,
  `lem-the-derivative-map-is-continuous`,
  `lem-smooth-families-and-path-components-in-the-weak-topology`,
  `def-weak-compact-open-smooth-topology-on-mapping-spaces`,
  `def-formal-immersion-…`, `def-space-of-immersions-…`,
  `def-regular-homotopy-of-immersions`, `def-derivative-map-…`,
  `def-normal-bundle-of-a-formal-immersion`,
  `lem-formal-immersion-gives-the-tangent-normal-bundle-identity`. The 29
  cross-batch edges (1 page + 28 item) are all `open` pending batch-17
  authoring; the step-3b author must reconcile them against the authored text
  (its dispatch already requires this).
- **No prerequisite claim needed by the pair's theorem spine is absent from
  both the published library and the current scaffold.** The three findings
  below are recorded for the author/owner; they are construction-time
  findings, not omitted DT-26 results.

### P1 (confirmed; gate-relevant; authoring fix, no scope change): three A-item deps are homed only on B pages

`plan-differential-topology-track.md` §12.1: "no item may depend on a B-page
example"; `tools/depcheck.mjs` enforces this as `b-leaf-content` (gate
`tools/gates.mjs` L102) and `research/b-leaf-legacy-allowlist.json` has no
entry for these edges. The manifest-only content policy misses them because
the targets resolve on disk.

| Consumer (A page) | Dep | Sole home |
|---|---|---|
| `lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension` | `ex-spheres-as-so-n-plus-one-mod-so-n` | `lie-subgroups-actions-and-homogeneous-spaces-examples` (B, order 494) |
| `lem-formal-immersions-of-the-circle-in-the-plane-are-classified-by-the-winding-number` | `ex-the-tangent-bundle-of-the-circle-is-trivial` | `smooth-vector-bundles-and-sections-examples` (B, order 452) |
| `thm-smale-classification-of-sphere-immersions-in-euclidean-space` | `ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial` | `smooth-vector-bundles-and-sections-examples` (B, order 452) |

Recommended authoring action (deps edits are legitimate at Step 3b, so no
owner scope decision is needed): re-route each use to the A-page suppliers
that prove the same fact — verified published and earlier:

1. SO(n+1)/SO(n) ≅ S^n: `cor-transitive-smooth-actions-identify-m-with-g-mod-h`
   (A page `lie-subgroups-actions-and-homogeneous-spaces`, order 493) with
   `ex-orthogonal-and-special-orthogonal-lie-groups` (already cited; A page
   `lie-groups-invariant-fields-and-the-exponential-map`, order 491).
2. Triviality of TS¹: `cor-a-vector-bundle-is-trivial-if-and-only-if-it-has-a-global-frame`
   (A page `smooth-vector-bundles-and-sections`, order 451) plus the angular
   global frame computed inline. Note `ex-the-tangent-and-cotangent-bundles-as-vector-bundles`
   is itself B-homed and cannot be used.
3. Triviality of the normal bundle of S^m ⊂ R^{m+1}:
   `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`,
   `prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle`
   (A page `smooth-vector-bundles-and-sections`),
   `prop-tangent-space-of-a-regular-level-set-is-the-kernel` (A page
   `rank-theorems-and-embedded-submanifolds`) and the global-frame corollary;
   the radial section is the frame.

If an author prefers, one could instead add these three facts locally, but
the A-page re-routes above avoid any scope change.

### P2 (confirmed absence; non-blocking; two owner-visible routes): A13's coorientation justification has no in-library supplier

`rem-sphere-eversion-cannot-be-an-isotopy-through-embeddings` justifies its
non-isotopy conclusion by "an embedding of $S^2$ into $\mathbb R^3$ bounds a
ball, and along a continuous family of embeddings the bounded complementary
component varies continuously (Jordan–Brouwer separation)". Evidence:

- I found no item in the published library (23,441 item files; title and
  statement searches for ball-boundary and Schoenflies/Alexander phrasings)
  or the current scaffold (883 items) stating that an embedded $S^2$ in
  $\mathbb R^3$ bounds a ball (Alexander's theorem). The published
  `thm-jordan-brouwer-separation` explicitly says "No assertion that a
  component closure is a ball is made"; the only related on-disk item is the
  specific horned-sphere counterexample. Hatcher, *Notes on Basic 3-Manifold
  Topology*, Theorem 1.1 ("Every embedded 2-sphere in R³ bounds an embedded
  3-ball"; smooth case, topological case via Moise) confirms the classical
  statement.
- I found no item (and A13's `deps` do not even cite one) stating continuity
  of the bounded complementary component along a continuous family of
  embeddings; the published `thm-invariance-of-domain` and
  `thm-jordan-brouwer-separation` (both assuming AC) are the ingredients from
  which such an argument could be assembled, but the uniform-in-$t$ statement
  is not on disk.
- The manifest sources attached to A13 (Cohen PDF pp. 4–10, Francis Lecture
  10) were harvested for the eversion classification; no coverage row
  supports the non-isotopy/side-invariance step, so the literature-sourcing
  route is plausible but unverified in this run.

Recommended owner-visible action: either (i) direct the Step 3b author to
declare the precise argument with `thm-jordan-brouwer-separation` and
`thm-invariance-of-domain` cited and the inherited AC hypothesis stated (and
sources for the two classical facts in A13's frontmatter), or (ii) if the
owner wants the argument internal rather than literature-sourced, authorize
one local scaffold lemma on this A page — e.g. a lemma "for a continuous
family of topological embeddings $S^2\times I\to\mathbb R^3$ each bounded
complementary component depends continuously on the parameter, and the
embedded sphere bounds a $3$-ball", hypotheses: continuous family of
topological embeddings, compact parameter interval; source: Hatcher 3M Thm
1.1 plus the standard compactness argument — which A13 then cites. This is a
support gap for one literature-derived remark (design item 9, `P:
not-applicable`), not an omitted result of DT-26; the pair's theorem spine
does not consume it. Note also that the batch notes' claim that the
non-choice-declaring batch-18 items use only choice-free suppliers is not
consistent with A13 as currently worded.

### P3 (bookkeeping; non-blocking): ten published citations sit outside the declared transitive `requires` closure

46 of the 56 published citations are homed inside the transitive closure of
the six `requires` entries; 10 are homed on earlier published pages outside
it: `ex-spheres-as-so-n-plus-one-mod-so-n` (B page 494),
`lem-pi-three-so-three-generated-by-the-quaternion-double-cover`,
`prop-first-stiefel-whitney-class-classifies-orientability`,
`def-real-projective-bundle-and-tautological-line` (all
`stiefel-whitney-and-euler-classes-by-universal-constructions`, 366.037),
`ex-su-two-to-so-three-as-a-covering-homomorphism` (493),
`cor-winding-number-classifies-loops-in-the-punctured-plane`,
`thm-winding-number-equals-circle-degree` (`simply-connected-plane-domains`,
335), `ex-the-tangent-bundle-of-the-circle-is-trivial` and
`ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial`
(B page 452), `prop-degree-of-the-power-map-on-the-circle`
(`the-de-rham-theorem-and-degree`, 475). All are published and earlier than
567, so no ordering hazard exists: `tools/splice-plan.mjs` verifies
explicitly that "a dep to a page on disk is licensed by reading order and
needs no requires entry" and reserves the undeclared-prerequisite refusal for
deps on unbuilt pages; §12.1 constrains `requires` to pages whose mathematics
is used but does not require exhaustive closure (see also the analogous
accuracy note in the `morse-homology-continuation-and-comparison` review).
Owner may widen the A page's `requires` if the closure is meant to be exact.

### P4 (plan-internal, already adjudicated): the `spectra-and-stable-homotopy-groups` token

The design's `Requires:` line and §1.1 list `spectra-and-stable-homotopy-groups`
for DT-25–DT-26, but the §12.4 exact array omits it. The drift review
(`frontier-41-ha-dt-29-alpha-step1-drift.md` L133–L137) adjudicated that the
listed claims use only ordinary homotopy of Stiefel manifolds and no stable
stems, and the coverage declines the higher-dimensional eversion question
(Bott periodicity/stable stems) explicitly. Verified on this pass: none of
the 82 cited ids is a spectra item, and the pair's classification uses only
$\pi_2(SO(3))=0$, $\pi_1(SO(2))\cong\mathbb Z$, the Stiefel connectivities and
the covering/fibration long exact sequences. No action for this pair; recorded
for the owner as a plan bookkeeping discrepancy.

## Intended role and consumers

DT-26 is the application layer of DT-25: Smale–Hirsch turns regular homotopy
classes into formal/Stiefel data, and the pair computes the two instances
(circle → rotation number; sphere in $\mathbb R^3$ → π₂(SO(3)) = 0) plus the
flagship eversion and its examples. Consumer scan over all 30 batch manifests:
exactly one cross-batch edge into these 20 items — batch 19 (DT-27, order
570) `cex-the-reflected-sphere-embedding-is-regularly-homotopic-but-not-isotopic-to-the-standard-one`
depends on `thm-smale-classification-of-sphere-immersions-in-euclidean-space`
(plus batch-17 items) for the "regularly homotopic" half of its claim; the
non-isotopy half it proves on its own page from isotopy extension. The
interface it consumes from here (all immersions $S^2\to\mathbb R^3$ are
regularly homotopic, via $\pi_2(SO(3))=0$) is exactly A10 clause 3. The B
page is a leaf; no other batch consumes these items.

## Checks run (this review)

| check | result |
|---|---|
| `node tools/coverage-checklist.mjs research/frontier-41-ha-dt-29-batch-18.coverage.json --require-destination` | 1 page, 29 harvested results, 0 errors, 0 warnings |
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-18.pages.json` | 20 items, 0 normalized, 0 errors |
| `node tools/manifest-deps.mjs research/frontier-41-ha-dt-29-batch-*.pages.json` | 883 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only research/frontier-41-ha-dt-29-batch-*.pages.json` | 883 scoped items, 0 errors, 0 warnings |
| `node tools/step1-decisions.mjs check --run frontier-41-ha-dt-29` | 883/883 ready, closed |
| `node tools/validate-plan.mjs research/plan-spec.json` | exit 0 (acyclic; no item-level cycles, forward references, B-page dependencies or unresolved ids among the 1,420 pages with item lists) |
| `node tools/step3-decisions.mjs check --run frontier-41-ha-dt-29 --phase scope` | this pair awaited its scope receipt (expected; none existed) |
| independent resolution/closure audit (this session) | 82 cited ids: 56 published (all `status: published`) + 26 in-run; 0 missing; 0 forward; 46/56 published homes inside the requires closure; 3 B-leaf-only deps (P1); 2 classical supporting claims for A13 absent from library+scaffold (P2) |

## Decision

`sufficient` — the planned definitions, results and examples adequately cover
DT-26: the Gauss frame/section-space translation of formal Euclidean data,
the circle classification (rotation number, Whitney–Graustein), Smale's
sphere classification with the clutching difference class explicit, the
π₂(SO(3)) algebraic eversion input, the eversion theorem and its
non-isotopy interpretation, the AT ownership seam, and the five design
examples. All 16 design items are present (plus four closure lemmas), the
29-row source coverage resolves every design result and every deferral to an
existing in-run page, and no citation is missing or forward. P1 is a
confirmed, gate-relevant dependency-route defect with a no-scope-change
authoring fix; P2 is a confirmed support gap for one literature-derived
remark with two owner-visible routes (source the classical facts, or
authorize one local lemma); P3 and P4 are recorded bookkeeping items. Per
step 3a this pair stops here: no scaffold edits, no owner record, and no
change to any other pair.
