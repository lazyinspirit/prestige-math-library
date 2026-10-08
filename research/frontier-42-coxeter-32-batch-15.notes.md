# Batch 15 Step 1 scaffold — Short Loop Polygons and Quantitative Energy Decrease

Run: `frontier-42-coxeter-32` · pair `short-loop-polygons-and-quantitative-energy-decrease`
(A order 1746, B order 1747, `coxeter-groups`, design label CG-12). Outputs:
`research/frontier-42-coxeter-32-batch-15.pages.json` (9 A + 4 B items), this note,
`research/frontier-42-coxeter-32-batch-15.coverage.json`,
`research/frontier-42-coxeter-32-batch-15.cross-batch-dependencies.json` (31 item rows and one
page row, all reviewed) and thirteen item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding), the design `research/plan-coxeter-groups-track.md` §CG-12 (lines
  307–319), the machine inventory `research/coxeter-scaffold/inventory.json` (CG-12),
  `definition-justifications.json`, the native A/B prose
(`library/coxeter-groups/short-loop-polygons-and-quantitative-energy-decrease{,-examples}.md`),
the independent audit `research/coxeter-scaffold/independent-audit.md` and the geometric source
report `research/coxeter-scaffold/geometric-source-report.md` (its Bowditch expansion and
audit supplement, including the exact 3.3.9–3.3.15 constants). The drift review
(`research/frontier-42-coxeter-32-alpha-step1-drift.md`, §
`short-loop-polygons-and-quantitative-energy-decrease`) records **VERDICT: no-drift**:
“No prerequisite gap. The intrinsic quadrilateral separation and energy decrement remain draft
obligations.” No plan edge or ordering amendment applies to this pair.
- **Preserved contracts.** The eight designed local supplier contracts keep their exact ids,
  kinds and relative order: `def-cg-short-loop-homotopy-and-nonshrinkability`,
  `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy`,
  `lem-cg-polygon-midpoint-drop-and-equality`,
  `lem-cg-finite-spherical-comparison-disks-and-radius-estimates`,
  `lem-cg-local-cat-one-products-from-sine-comparison`,
  `lem-cg-comparison-product-perturbation-and-degenerate-limits`,
  `lem-cg-uniform-energy-decrement-and-short-class-closedness`,
  `lem-cg-bowditch-quantitative-short-loop-control`. Their warnings are kept: the
  uniform-plus-length loop topology (a plain uniformly continuous family does not bound
  rectifiable lengths), the fixed vertex count $n$, the zero-limit basin defined by
  $\lim L(f^k x)=0$ and *identified* with a short-homotopy class only after the basin is proved
  clopen, the strict nondegeneracy hypothesis of the disk with degeneracies deferred to the
  product-perturbation item, the explicit radius constant $\eta=(\pi-r)/2$, the intrinsic
  developed-quadrilateral distance for $\delta$ (never an unchecked ambient spherical chord),
  the retained $-\delta^2$ term in the energy deficit, and the instruction that no
  shrinkability assumption enters the disk construction.
- **B companion (4 items).** `ex-cg-midpoint-iteration-on-a-spherical-triangle`,
  `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary`,
  `ex-cg-null-homotopy-versus-short-loop-shrinkability` and
  `ex-cg-zero-length-boundary-of-the-energy-criterion`, matching the design's B checks
  (midpoint shortening on a small spherical patch, a short metric circle, a constant loop, the
  null-homotopy comparison and the zero-length boundary of the energy criterion).

## Plan-spec comparison and recorded conflicts

`research/plan-spec.json` agrees with the task and design on the pair ids, orders 1746/1747,
category, companion and the A page's `requires`
(`cat-comparison-link-criteria-and-local-globalization`). Its item arrays for these two pages are
empty, exactly as for every other new page of this run, so no item-level plan text can conflict;
the design's local supplier contracts are the item-level authority, and no plan text was edited.
**No design-versus-plan conflict exists.**

One recorded tension, not a plan edit: the first item of the design's route
(`def-cg-cyclic-small-mesh-polygon-and-midpoint-energy`) silently assumes the existence of a
*uniform* local CAT(1) radius $l$ for the compact space. The scaffold states that existence as a
claim of `lem-cg-polygon-midpoint-drop-and-equality` (clause (i)) with a choice-free proof and
records the added dependency `thm-lebesgue-number-lemma`; see the dependency table below.

## Inventory changes (additions only; nothing weakened or removed)

The dispatch authorises as many local prerequisite items as are needed for sound closure.
Beyond the eight designed contracts this batch adds one item and no new pair:

1. **`lem-cg-cat-one-short-and-closed-local-geodesics` (lemma, new).** Pure CAT(1) metric
   geometry: unique geodesics for distances $<\pi$ with continuous dependence, local geodesics
   of length $\le\pi$ are geodesics, and every nonconstant closed local geodesic has length
   $\ge2\pi$ and diameter $\ge\pi$ (so none lies in a ball of diameter $<\pi$). These are
   Bridson–Haefliger II.1.4 (1)–(2) adapted to $\kappa=1$; the design's route uses them
   implicitly (the equality exclusion in the polygon-drop item, the row induction of the disk
   item, and the local-geodesic facts of the short-loop-control item), but they are absent from
   the design's eight-contract list and are not supplied by
   `cat-comparison-link-criteria-and-local-globalization` (whose comparison lemma supplies only
   convexity and uniqueness inside balls of radius $<\pi/2$). They are homed here, before their
   consumers, per the instruction to put prerequisites on the A page they support.
   **Owner reconciliation point:** the item is general CAT(1) geometry and could be re-homed to
   the CAT page at reconciliation; the scaffold does not edit that page and records the
   placement question here. Nothing else on this page depends on an item outside the pair except
   the reviewed suppliers below.

Every other change is inside a designed contract: clause (i) of the polygon-drop item now also
exhibits the uniform radius and proves compactness/continuity; the disk item's clause (iv) is
stated conditionally on the variance lower bound $\xi_i\ge r/n$ that the decrement item produces;
the perturbation item is stated as “the nondegeneracy hypothesis can be removed”, with the limit
argument; and the short-loop-control item distinguishes short loops below $m$ from arbitrary
loops (shrinkability is defined only for short loops) and states the basin–shrinkability
equivalence for polygons. No promised claim was weakened.

**Inventory `depends_on` edges dropped or added (with reasons).** The inventory attaches one
page-level `depends_on` list to several contracts; each item's recorded `deps` is its actual use
set. Dropped as unused: `thm-cg-compact-local-cat-one-short-circle-criterion` from
`def-cg-short-loop-homotopy-and-nonshrinkability`, from
`def-cg-cyclic-small-mesh-polygon-and-midpoint-energy`, from
`lem-cg-polygon-midpoint-drop-and-equality` and from
`lem-cg-comparison-product-perturbation-and-degenerate-limits` (none of their statements or
proofs invokes the criterion; it enters later, through the disk and decrement items). Dropped
from `lem-cg-local-cat-one-products-from-sine-comparison`:
`lem-cg-finite-spherical-comparison-disks-and-radius-estimates` (the product theorem does not
consume the disk; the inventory edge was an ordering artefact). Added:
`lem-cg-finite-spherical-comparison-disks-and-radius-estimates` to
`lem-cg-uniform-energy-decrement-and-short-class-closedness` (its δ, disk and radius estimates
are used verbatim) and to `lem-cg-comparison-product-perturbation-and-degenerate-limits`;
`lem-cg-uniform-energy-decrement-and-short-class-closedness` and the short-loop item to
`lem-cg-bowditch-quantitative-short-loop-control`; `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`
to the short-loop item and the short-loop-control item; `def-axiom-of-choice` to the eight items
that consume the AC-using short-circle criterion (see below); `thm-lebesgue-number-lemma` to the
polygon-drop item.

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests
(in-run suppliers are batches 6 and 11; published suppliers do not raise a level) and written
into the manifest; `node tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32`
reports no cycle, dependency or label error naming any batch-15 item.

| level | item |
|---|---|
| 9 | `def-cg-short-loop-homotopy-and-nonshrinkability` |
| 10 | `def-cg-cyclic-small-mesh-polygon-and-midpoint-energy` |
| 10 | `lem-cg-cat-one-short-and-closed-local-geodesics` |
| 11 | `lem-cg-polygon-midpoint-drop-and-equality` |
| 13 | `lem-cg-finite-spherical-comparison-disks-and-radius-estimates` |
| 11 | `lem-cg-local-cat-one-products-from-sine-comparison` |
| 14 | `lem-cg-comparison-product-perturbation-and-degenerate-limits` |
| 15 | `lem-cg-uniform-energy-decrement-and-short-class-closedness` |
| 16 | `lem-cg-bowditch-quantitative-short-loop-control` |
| 16 | `ex-cg-midpoint-iteration-on-a-spherical-triangle` |
| 17 | `ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` |
| 17 | `ex-cg-null-homotopy-versus-short-loop-shrinkability` |
| 16 | `ex-cg-zero-length-boundary-of-the-energy-criterion` |

No item depends on a later item of this page or of another page of the run; the two
definitions' `justified_by` targets (`lem-cg-bowditch-quantitative-short-loop-control`,
`lem-cg-polygon-midpoint-drop-and-equality`) depend on them through `deps`.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract, and
its statement and proof route were read for adequacy. In-run suppliers read in the current
manifests: batch 6 — `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`
(path length, lower semicontinuity, arc-length reparametrization, equicontinuity of bounded
families); batch 11 — `def-cg-cat-zero-cat-one-and-local-geodesic`,
`lem-cg-comparison-convexity-and-model-spaces` (clauses (ii), (iii), (iv), (v), (vi) are the
ones used), `lem-cg-alexandrov-comparison-triangle-gluing`,
`thm-cg-compact-local-cat-one-short-circle-criterion`. Published suppliers read for this pair
include `def-metric-space`, `def-metric-ball`, `def-metric-topology`, `def-metric-continuity`,
`def-metric-convergence`, `def-metric-compactness`, `def-metric-compactness-variants`,
`thm-compact-implies-the-other-compactness-forms` (compact metric spaces are sequentially
compact, **choice-free**), `thm-finite-products-of-compact-spaces`,
`lem-closed-subset-of-a-compact-space-is-compact`, `thm-lebesgue-number-lemma`,
`thm-extreme-value-metric`, `thm-continuous-image-of-a-compact-space-is-compact`,
`lem-metric-reverse-triangle`, `def-geodesic-and-geodesic-metric-space`,
`def-isometry-and-metric-embedding`, `def-euclidean-spheres-and-closed-balls`,
`def-principal-inverse-sine-and-cosine`, `thm-sine-and-cosine-derivatives`,
`thm-sine-and-cosine-addition-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`,
`cor-pi-is-the-first-positive-sine-zero`, `def-real-and-complex-inner-product-space`,
`cor-inner-product-induces-a-norm`, `thm-cauchy-schwarz-in-an-inner-product-space`,
`lem-metrics-on-rn`, `thm-heine-borel-rn`, `def-real-limit`, `def-interval`,
`def-pointwise-uniform-and-uniformly-cauchy-convergence`, `def-derivative`, `thm-chain-rule`,
`def-axiom-of-choice`.

Checks actually made: the direction and exact clause numbers of the batch-11 comparison lemma
against the midpoint and equality analysis; the hypothesis $l<\pi/2$ against its clause (v);
the compactness of $P_h(n)$ and the choice-free sequential compactness route
(`thm-compact-implies-the-other-compactness-forms` proves compact ⟹ limit point compact ⟹
sequentially compact without a choice principle, so no sub-sequence extraction here consumes
AC); the exactness of the spherical midpoint identity (clause (iii)) and of the CAT(1)
inequality used in the radius estimate; the Lebesgue-number route for the uniform radius,
including the diameter condition $2l<\delta$; the hypothesis checks of
`thm-cauchy-schwarz-in-an-inner-product-space` for the discrete variance bound; the degenerate
edge and constant-tuple conventions against `def-geodesic-and-geodesic-metric-space`; and the
direction of the equality analysis in the polygon-drop item (equality forces equal edges and
straight consecutive triples, and conversely). No missing, circular, forward or inadequate
dependency was found. The two nondegenerate/perturbation items are ordered so that no consumer
uses a later result, and the perturbation item's statement does not assert the decrement it
feeds (it exports precisely the “degeneracy removed” step).

## Choice accounting (AC boundary)

`thm-cg-compact-local-cat-one-short-circle-criterion` consumes AC through
`cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`. The eight items that use that
criterion directly or transitively therefore carry `def-axiom-of-choice` in `deps` and an
`axiom_use` field naming the path:
`lem-cg-finite-spherical-comparison-disks-and-radius-estimates`,
`lem-cg-comparison-product-perturbation-and-degenerate-limits`,
`lem-cg-uniform-energy-decrement-and-short-class-closedness`,
`lem-cg-bowditch-quantitative-short-loop-control`, and the four B examples. The other five items
(the two definitions, the new local-geodesic lemma, the polygon-drop lemma and the product
comparison lemma) are choice-free and declare no choice principle. No dependency path reaches
`deferred-set-theory-beyond-choice`; the Ascoli corollary is a published ZFC result, not a
deferred-set-theory item.

## Sources (full text fetched, stamped and inspected; reading limits stated)

Three independent treatments back the A page; all three bodies were downloaded and stamped at
harvest time (the stamps are in the coverage file):

1. **B. H. Bowditch, _Notes on locally CAT(1) spaces_** (author preprint,
   `https://www.bhbowditch.com/papers/bhb-catone.pdf`, 27 scanned sheets, 1 459 550 bytes,
   sha256-16 `113b2b86adb4841c`). The printed range used is §§2–3.4, printed pp. 13–32: local
   geodesics and injectivity radius (2.16); loop classes and the short-loop homotopy (3.1.4–3.1.5);
   the minimum nonshrinkable loop (3.1.6–3.1.7); the product model (3.2.1); midpoint polygons
   and the equality case (3.3.1–3.3.6); the decrement λ and the comparison disk with the radius
   and quadrilateral constants (3.3.8–3.3.15); the polygonal transfer (3.4). **Honest reading
   limit:** the scan has no text layer, and this environment provides no OCR or image reading,
   so the undersigned did not re-read the scanned pages; the content recorded above is the
   commissioned visual reading of the geometric source report (which lists the exact pages read
   and the formulas 3.3.9–3.3.15) together with the independent audit supplement. Every claim
   used from Bowditch was cross-checked mathematically against Bridson–Haefliger and Davis where
   those overlap (local geodesics ≤ π are geodesics; no short closed local geodesics; the
   spherical midpoint identity; the compact short-circle criterion), and the two source defects
   below are recorded rather than consumed. §§3.5–3.7 and the remaining printed pages were not
   read and carry no claim of this pair.
2. **M. R. Bridson and A. Haefliger, _Metric Spaces of Non-Positive Curvature_**
   (author-hosted PDF, 669 pages, sha256-16 `894ac23c8033d213`). Read in the extracted full
   text: I.1.1–I.1.5, I.2.1–I.2.16 (round sphere, laws of cosines, model spaces, Alexandrov's
   Lemma), II.1.4 (uniqueness of geodesics below $D_\kappa$, local geodesics of length
   $\le D_\kappa$ are geodesics, convex balls of radius $<D_\kappa/2$) and II.4.12–II.4.17
   (compact balls, injectivity radius, systole, the minimum embedded circle).
3. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_** (author manuscript, 600 pages,
   sha256-16 `ccefbb950fdcfce9`). Read in the extracted full text: Appendix I.2.8 (the
   $\kappa>0$ criterion), I.2.10–I.2.14 (centers, Bruhat–Tits fixed points), I.2.15 (hinged
   quadratic inequality), I.2.16 (local geodesics are geodesics up to $D_\kappa$), I.2.17–I.2.18
   (the cone on a CAT(1)-space and spherical joins), and §I.7.1/§7.3 for the metric-flag
   application this page feeds.

**Source defects noticed (recorded, not consumed).** (a) Bowditch 3.2.1 prints “curvature
$\le-1$” where the product model requires $\le1$; the audit recorded the typo and the scaffold's
product item proves the correct inequality directly, so no item consumes the printed value.
(b) Davis's Lemma I.2.16 prints the length bound $\pi/\kappa$ with the book's curvature
normalisation for $X_\kappa$; the scaffold records the case $D_1=\pi$ actually used and does not
quote the formula as printed. Neither is a defect of a library item.

## Cross-batch dependencies

`research/frontier-42-coxeter-32-batch-15.cross-batch-dependencies.json` registers 31 item rows
(29 to batch 11 items, 2 to batch 6 items) and one page row
(`short-loop-polygons-and-quantitative-energy-decrease` requires
`cat-comparison-link-criteria-and-local-globalization`), each with the exact required claim and
its use. `frontier-dependency-ledger.mjs refresh` now lists all 32 batch-15 edges with reviews
and no orphaned rows. The input contains **no proposed removals**: no declared edge was
withdrawn, and the four unused inventory edges listed above are same-batch bookkeeping recorded
here rather than ledger findings.

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `124 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `124 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-15.coverage.json --require-destination` | `1 page(s), 30 harvested result(s), 0 error(s), 0 warning(s)` |
| full-text fetch | `tools/source-fetch-check.mjs --coverage ...batch-15.coverage.json --stamp` | `3/3 source(s) fetch-verified (3 newly stamped)` |
| full-text fetch (check mode, after all edits) | `tools/source-fetch-check.mjs --coverage ...batch-15.coverage.json` | `3/3 source(s) resolved (0 documented drops)` |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-15.coverage.json --out /tmp/b15-url-liveness.json --recover --fail-on-dead` | `3/3 live; 0 failed; 0 suspect; 3 citation decision(s)` (artefact written to `/tmp` so shared run state is untouched) |
| source backing | `tools/source-backing.mjs --coverage ...batch-15.coverage.json --liveness /tmp/b15-url-liveness.json --reharvest-plan /tmp/b15-reharvest.json` | `7 authored result(s) across 1 file(s), every one still backed`; empty reharvest work list |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 124, ready 124`; the 38 open entries are all `Empty scaffold inventory` for sibling batches; **none names a batch-15 item** |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with exactly 38 `empty scaffold inventory` errors for not-yet-scaffolded sibling pages; **no cycle, dependency or label error names a batch-15 item** (all thirteen labels equal the computed values) |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0; batch-15 edges 32, all reviewed, no orphans |
| dependency ledger (strict) | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32 --require-reviewed` | exit 1 with `Cross-batch review incomplete: supply every batch input and review every declared edge`; the unreviewed batches at this snapshot are 12, 14, 16–32, i.e. every batch-15 edge is reviewed and only sibling inputs are owed |
| manifest integrity | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| plan (scoped) | `tools/validate-plan.mjs research/plan-spec.json --pages-file <pair ids>` | exit 0: page order acyclic and consistent, prerequisite lists as declared; the item-level pass is vacuous because the plan-spec item arrays of these new pages are empty (as recorded by every sibling batch) |
| plan (run mode) | `tools/validate-plan.mjs research/plan-spec.json --run frontier-42-coxeter-32` | aborts with `frontier gate selection: Empty frontier page ...` while sibling batches are mid-flight; this is the same pre-splice state recorded by batches 6, 8 and 11 and resolves when those batches land |
| wikilink/deps consistency | local extraction of every `[[...]]` in the manifest statements and strategies | 0 unresolved links, 0 links outside `deps`/`justified_by`, 0 self-dependencies |

Probe run for completeness, with honest result: `node tools/frontier-item-gate.mjs --run
frontier-42-coxeter-32 --tool extcheck` returns `FAIL` with `focus-item-unknown` for not-yet-authored
manifest ids (`thm-hh-matsumoto-reduced-word-theorem` and
`thm-hh-parabolic-minimal-representatives-and-length-additivity` at this snapshot). This is the
same pre-authoring state recorded by batches 6, 8 and 11: the stage-1 battery does not include the
item-scoped `extcheck`, which returns once Step 3b exists item files to resolve. No batch-15
subject is involved in the failure.

The whole-run `step1-readiness`, `item-dependency-levels`, ledger and run-mode `validate-plan`
joins cannot pass while sibling batches are mid-flight; every remaining failure names only other
batches' empty files, and every check that this batch can complete passes for its thirteen items.

## Published defects and observations for the owner/canonical ledger

No defect was found in any published item this batch consumes. Three observations, none of them a
library defect claim:

1. **Placement question (new item).** `lem-cg-cat-one-short-and-closed-local-geodesics` is
   general CAT(1) geometry adapted from Bridson–Haefliger II.1.4 and homed on this page because
   its first consumers are here. If the owner prefers, it can be re-homed to
   `cat-comparison-link-criteria-and-local-globalization` at reconciliation; the scaffold leaves
   that page untouched and this page's statements stand with the item where it is.
2. **AC boundary (recorded above).** Eight of the thirteen items inherit AC through the
   published-shape AC route of `thm-cg-compact-local-cat-one-short-circle-criterion`; the other
   five are choice-free. If the owner wants the short-loop theory to be choice-free, the
   criterion's proof (batch 11, not this batch) would need a choice-free replacement; this batch
   neither weakens the criterion nor hides the use.
3. **Source defects (recorded, not library defects).** Bowditch 3.2.1's “curvature $\le-1$” typo
   and Davis I.2.16's printed length bound in the book's normalisation; both are noted in the
   coverage/source section and neither is consumed as printed.

## Completion

- All thirteen items are recorded `ready` with their examined dependency ids as evidence
  (`research/frontier-42-coxeter-32-step1-<id>.json`, current for the manifest bytes on disk).
- No item is escalated: every item has a complete proof strategy with met prerequisites, the
  choice boundary is declared once and carried to its users, and no page split is needed
  (9 + 4 items against the 100-item cap).
- This batch is mathematically scaffolded but not proved: the thirteen items are Step-3
  authoring contracts. No published content, shared plan, engine state or verdict was edited,
  and no selected pair was changed.

## Self-review corrections before hand-off

1. `lem-cg-cat-one-short-and-closed-local-geodesics`: the first draft of the uniqueness proof
   spoke of congruent degenerate comparison triangles without the correct triangle; it now
   decomposes a geodesic at the intermediate point and uses the degeneracy of the comparison
   triangle of $(p,r,q)$ with sides the two subarcs and the second geodesic, exactly as in
   Bridson–Haefliger II.1.4(1), and the maximal-subinterval argument of II.1.4(2) was made
   precise (interval $[0,\Lambda]$, closedness and openness of $S$).
2. `lem-cg-polygon-midpoint-drop-and-equality`: the uniform local radius is no longer asserted
   by a flawed “open cover by $V_m$” sentence; it is now derived choice-free from the open cover
   by half-balls, compactness, the Lebesgue number lemma and the convexity of balls of radius
   $<\pi/2$, with the diameter condition $2l<\delta$ made explicit, and
   `thm-lebesgue-number-lemma` was added to `deps`.
3. `lem-cg-bowditch-quantitative-short-loop-control`: the basin–shrinkability equivalence is now
   stated as an equivalence (clopenness plus the explicit midpoint homotopy), the “every loop”
   claims were narrowed to short loops below $\min\{m,2\pi\}$ (shrinkability is defined only for
   short loops), and the limit-limit argument was corrected to $E(fz)=E(z)$ by continuity of
   $E$ and $f$.
4. The Axiom-of-Choice boundary was found on a re-read of the criterion's use: eight items now
   declare `def-axiom-of-choice` and `axiom_use`, and the five choice-free items say so.
5. Wikilinks pointing forward (from the disk item to the perturbation/decrement items, from the
   decrement item to the short-loop-control item, from the definition item to the decrement
   item) were removed and reworded, so every manifest `[[...]]` is inside that item's
   `deps`/`justified_by`.
6. B-page typos and a broken id were repaired
   (`ex-cg-equally-spaced-points-on-a-short-circle-are-stationary` cited a malformed comparison
   lemma id) and the zero-length example's dependence on the radius/δ item was registered.
7. Because readiness hashes cover the transitive closure, all affected records were re-recorded
   after the last manifest edit, and a final `step1-decisions check` confirms no batch-15 item
   is stale.
