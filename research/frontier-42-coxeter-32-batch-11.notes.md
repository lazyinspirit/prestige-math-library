# Batch 11 Step 1 scaffold — CAT Comparison, Link Criteria, and Local Globalization

Run: `frontier-42-coxeter-32` · pair `cat-comparison-link-criteria-and-local-globalization`
(A order 1738, B order 1739, `coxeter-groups`, design label CG-08). Outputs:
`research/frontier-42-coxeter-32-batch-11.pages.json` (8 A + 4 B items), this note,
`research/frontier-42-coxeter-32-batch-11.coverage.json`,
`research/frontier-42-coxeter-32-batch-11.cross-batch-dependencies.json` (25 declared-edge
rows and six `removed` inventory proposals), and twelve item-readiness records
`research/frontier-42-coxeter-32-step1-<id>.json`.

## Scope, plan and binding inputs

- **Controlling direction.** `research/frontier-42-coxeter-32-owner-authoring-direction.md`
  (read first; binding) plus the design `research/plan-coxeter-groups-track.md` §CG-08
  (lines 242–260), the machine inventory `research/coxeter-scaffold/inventory.json` (CG-08),
  `definition-justifications.json`, the native A/B prose
  (`library/coxeter-groups/cat-comparison-link-criteria-and-local-globalization{,-examples}.md`),
  the independent audit `research/coxeter-scaffold/independent-audit.md`, and the
  geometric source report `research/coxeter-scaffold/geometric-source-report.md`.
  The drift review (`research/frontier-42-coxeter-32-alpha-step1-drift.md`, §
  `cat-comparison-link-criteria-and-local-globalization`) records **VERDICT: no-drift**
  for this page ("No prerequisite gap. The local-to-global proof remains a draft
  obligation.") and applies no plan edge or ordering amendment.
- **Preserved.** The eight planned local supplier contracts keep their exact ids, kinds
  and order: `def-cg-cat-zero-cat-one-and-local-geodesic` (definition, justified by the
  second item), `lem-cg-comparison-convexity-and-model-spaces`,
  `lem-cg-alexandrov-comparison-triangle-gluing`,
  `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`,
  `lem-cg-local-geodesic-endpoint-stability`,
  `lem-cg-local-geodesic-continuation-and-path-space-covering`,
  `thm-cg-complete-simply-connected-local-cat-zero-globalization`,
  `thm-cg-compact-local-cat-one-short-circle-criterion`. The design's warnings are kept:
  the `D_1=pi` and perimeter `<2pi` conventions, the truncated angular metric `d_pi` and the
  agreement of its strict-perimeter tests with the componentwise intrinsic tests, the empty
  link conventions (`C(empty)={o}`, vacuous CAT tests), the separately included cone apex and
  cross-component geodesics through it, the local product chart `R^k x C(Lk_X(F))`, the
  endpoint-stability construction with the `A -> 3A/2` extension and geometric-series
  convergence (not an Ascoli claim), the induced length metric on the local-geodesic path
  space before the covering criterion, the patchwork globalisation, and the minimum-digon
  short-circle criterion (BH II.4.16 route; Bowditch's nonshrinkable-loop route is explicitly
  not used).
- **B companion (4 items).** `ex-cg-intervals-and-metric-trees-are-cat-zero`,
  `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one`,
  `ex-cg-short-circle-fails-cat-one`, and
  `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group`, matching the
  design's four promised B-page checks (CAT(0) for intervals and metric trees, CAT(1) at the
  strict perimeter boundary, failure for a shorter circle, and a complete locally CAT(0)
  circle whose fundamental group prevents global CAT(0)).
- **Plan-spec comparison.** `research/plan-spec.json` agrees with the task and design on the
  pair ids, orders 1738/1739, category, companion and the A page's `requires`
  (`spherical-simplex-metrics-angular-links-and-cones`, `homotopy-and-homotopy-equivalence`,
  `covering-spaces-and-lifting`). Its item arrays are empty, so no item-level plan text can
  conflict. **No design-versus-plan page conflict exists**; no plan text was changed.

## Recorded conflicts, clarifications and route decisions (no plan edit)

1. **Inventory `depends_on` is one page-level list, not per-contract edges.** The machine
   inventory attaches the same length-16 `depends_on` list to all eight CG-08 contracts,
   including `thm-cg-cone-join-metric-and-local-product-chart` and the published homotopy and
   covering definitions. The recorded `deps` are each item's actual use set. For the six items
   whose arguments do not consume the cone/join theorem directly (A2, A3, A5, A6, A7, A8) the
   proposed edge is dropped as a proof dependency and recorded as a `removed` row in the
   cross-batch input; the other eleven proposed entries are published items and raise no
   ledger row. No item depends on `def-pullback-covering-space`, `def-monodromy-...`,
   `def-deck-...`, `def-covering-space-action`, `def-semilocally-simply-connected-space`,
   `def-universal-covering-space` or `def-path-class-model-for-a-universal-cover`; only the
   covering items actually cited (covering map, lifts, path/homotopy lifting, endpoint
   invariance, uniqueness of lifts, triviality over a simply connected base, universal
   covering uniqueness) appear in `deps`.
2. **Published suppliers outside the declared `requires` closure (plan-design tension).**
   The design's route consumes `def-principal-inverse-sine-and-cosine` (home page
   `further-trigonometric-identities-and-inverses`, order 280) and
   `def-real-and-complex-inner-product-space`, `cor-inner-product-induces-a-norm`,
   `thm-cauchy-schwarz-in-an-inner-product-space` (home page
   `hilbert-space-geometry-and-riesz-representation`, order 510). Neither home page is in the
   transitive closure of this page's declared `requires`, so validate-plan's
   `undeclared-prereq` teeth can fire after the Step-4 splice. This is not introduced by this
   batch: the already-landed batch 8 pair (`spherical-simplex-metrics-angular-links-and-cones`,
   which this page requires) has exactly the same two out-of-closure homes in its recorded
   `deps`, and the design's own spherical-comparison route needs the principal arccos and the
   round-sphere inner-product algebra. Recorded for owner reconciliation before the plan
   splice; no plan file was edited and no dependency was weakened or re-routed.
3. **The round-circle model is carried by the comparison lemma.** The design's B companion
   and the short-circle criterion both need the round circle and isometrically embedded
   circles, which the inventory does not give a separate contract. The definition item fixes
   the round circle `S1_l = R/lZ` and isometric circles as conventions, and
   `lem-cg-comparison-convexity-and-model-spaces` clause (vi) proves the metric axioms,
   compactness/completeness, local flatness and the criterion `S1_l is CAT(1) iff l >= 2pi`
   (including the explicit equilateral-triple violation for `l < 2pi`). This keeps the
   design's route and adds no new pair.
4. **Vertex links suffice through the local chart, not through an unproved join identity.**
   The link criterion is stated for every point in the relative interior of a face (chart
   `R^k x C(Lk_X(F))`), and the vertex form is derived as Bridson–Haefliger II.5.2 does:
   the vertex chart is a neighbourhood of the cone point of `C(Lk_X(v))`, and the polyhedral
   structure gives `B(x,r) ~= B(x',r)` near a vertex of the support. The alternative
   "`Lk_X(F) = S^{k-1} * Lk_X(v)`" phrasing is deliberately not asserted as a definition-level
   identity; Davis I.3.5's exact identification `Lk(sigma_F, Lk(v)) = Lk(F)` is recorded as the
   source fact instead.
5. **Choice accounting.** Only `thm-cg-compact-local-cat-one-short-circle-criterion` declares
   the Axiom of Choice, consumed exactly once through
   `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets` for the convergent
   subsequence of digons; its `axiom_use` field says so. The endpoint-stability, path-space
   and globalisation arguments are completeness arguments and make no selection from
   infinitely many sets. No dependency path reaches `deferred-set-theory-beyond-choice`.
6. **Ascoli is not used to prove shortening or convergence of midpoint iterates.** The design's
   warning is kept: `lem-cg-local-geodesic-endpoint-stability` proves the geometric-series
   contraction, and the short-circle criterion uses Ascoli only for a compactness subsequence
   of already-existing digons.

## Dependency levels (in-run only)

Computed with the shared `item-dependency-levels.mjs` logic over the current run manifests
(in-run suppliers are batches 6 and 8; published suppliers do not raise a level).

| level | item |
|---|---|
| 8 | `def-cg-cat-zero-cat-one-and-local-geodesic` |
| 9 | `lem-cg-comparison-convexity-and-model-spaces` |
| 10 | `lem-cg-alexandrov-comparison-triangle-gluing` |
| 11 | `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` |
| 10 | `lem-cg-local-geodesic-endpoint-stability` |
| 11 | `lem-cg-local-geodesic-continuation-and-path-space-covering` |
| 12 | `thm-cg-complete-simply-connected-local-cat-zero-globalization` |
| 12 | `thm-cg-compact-local-cat-one-short-circle-criterion` |
| 10 | `ex-cg-intervals-and-metric-trees-are-cat-zero` |
| 10 | `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one` |
| 10 | `ex-cg-short-circle-fails-cat-one` |
| 13 | `ex-cg-complete-locally-cat-zero-circle-with-nontrivial-fundamental-group` |

No item depends on a later item, on a B-page item outside its own pair, or on an item from a
later page; the recorded labels equal the computed labels and the tool reports no cycle,
dependency or label error naming a batch-11 item.

## Dependency verification (examined, not assumed)

Every declared `deps` target was checked to exist on disk or as an in-run scaffold contract,
and its statement and proof route were read for adequacy. In-run suppliers read in the current
manifests: batch 6 — `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`,
`lem-cg-polyhedral-face-coherence-and-uniform-star-radius`,
`thm-cg-polyhedral-chain-metric-topology-and-properness`,
`lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`,
`thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`; batch 8 —
`def-cg-spherical-gram-simplex-and-angular-link`,
`lem-cg-spherical-simplex-existence-and-link-gram-formula`,
`def-cg-euclidean-cone-and-spherical-join-metrics`,
`thm-cg-cone-join-metric-and-local-product-chart`. Published suppliers read for this pair
include `def-metric-space`, `def-metric-ball`, `def-metric-topology`, `def-metric-continuity`,
`def-metric-compactness`, `def-complete-metric-space`, `def-cauchy-in-metric`,
`def-geodesic-and-geodesic-metric-space`, `def-isometry-and-metric-embedding`,
`def-upper-bound`, `def-euclidean-spheres-and-closed-balls`,
`def-principal-inverse-sine-and-cosine`, `def-sine-and-cosine-by-power-series`,
`thm-sine-cosine-signs-monotonicity-and-ranges`, `thm-sine-and-cosine-addition-formulas`,
`cor-pi-is-the-first-positive-sine-zero`, `def-real-and-complex-inner-product-space`,
`cor-inner-product-induces-a-norm`, `thm-cauchy-schwarz-in-an-inner-product-space`,
`lem-metrics-on-rn`, `lem-metric-reverse-triangle`, `thm-heine-borel-rn`,
`thm-compact-implies-complete-and-totally-bounded`,
`thm-continuous-image-of-a-compact-space-is-compact`, `thm-metric-compactness-equivalences`,
`def-pointwise-uniform-and-uniformly-cauchy-convergence`,
`cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`, `def-axiom-of-choice`,
`def-simply-connected`, `def-based-loops-and-fundamental-group`,
`def-nullhomotopic-map-and-contractible-space`, `def-path-connected`,
`def-homotopy-relative-and-path-homotopy`,
`def-covering-map-and-evenly-covered-neighbourhoods`,
`def-map-and-isomorphism-of-covering-spaces`, `def-lift-of-a-map-path-and-homotopy`,
`thm-path-lifting-for-covering-maps`, `thm-homotopy-lifting-for-covering-maps`,
`cor-lifted-path-endpoints-depend-only-on-path-homotopy`,
`thm-uniqueness-of-lifts-from-a-connected-space`,
`cor-connected-cover-of-a-simply-connected-space-is-trivial`, `def-universal-covering-space`,
`thm-universal-cover-uniqueness-and-dominating-property`, `def-interval`,
`lem-real-line-is-a-metric-space`, `def-cycles-trees-and-forests-in-a-simple-graph` and
`thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path`.
Checks actually made: the `D_1 = pi` conventions against the published geodesic definition
(geodesics are genuine isometric interval parametrisations); the exact hypotheses of the
Ascoli corollary (proper target, compact metric domain, equicontinuity, pointwise boundedness,
AC) and of the path- and homotopy-lifting theorems (covering, path, initial lift); the
hypotheses of `cor-connected-cover-of-a-simply-connected-space-is-trivial` (locally
path-connected base) against the metric-space setting; the `def-simply-connected` nonemptiness
convention; the tree characterization used for the median in the tree example; and the
direction and equality cases of the source statements in the two treatments below. No missing,
circular, forward or inadequate dependency was found.

## Sources (full text fetched, stamped and inspected)

Two independent book treatments back the A page; both bodies were downloaded, stamped and
inspected at the locators recorded in the coverage file:

1. **M. R. Bridson and A. Haefliger, _Metric Spaces of Non-Positive Curvature_**
   (`sha256_16 894ac23c8033d213`, 669 pages). Read: I.1.1–I.1.24 (geodesics, local geodesics,
   convexity, comparison triangles, angles, length and chain metrics), I.2.1–I.2.19 (the round
   sphere and its law of cosines, model spaces `M^2_k`, comparison triangles, Alexandrov's
   Lemma), I.3.14–I.3.22 (Berestovskii's cone theorem with its three-case proof, joins and the
   tangent cone), I.5.6–I.5.21 (K-cones, their metrics, geodesics, the product-cone isometry
   and quotient/gluing constructions), II.1.1–II.1.12 (the CAT(k) definition, local CAT,
   equivalent formulations, hinged and Bruhat–Tits inequalities), II.4.1–II.4.17
   (Cartan–Hadamard, endpoint stability, the local-geodesic path space, patchwork, injectivity
   radius and the minimum embedded circle) and II.5.1–II.5.21 (link condition, local form,
   flag and metric-flag complexes); in addition the uses of I.3.28 inside the II.4.7 proof and
   of I.7.39/I.7.55–I.7.59 inside the II.5.2 proof were inspected in place.
2. **M. W. Davis, _The Geometry and Topology of Coxeter Groups_**
   (`sha256_16 ccefbb950fdcfce9`, 600 pages). Read: Appendix I.2.6–I.2.19 (contractibility of
   complete CAT(0) spaces, Gromov's Cartan–Hadamard, the `k>0` criterion, the hinged
   inequality I.2.15, local geodesics I.2.16, the truncated cone metric and Berestovskii's
   theorem I.2.17, joins I.2.18–I.2.19) and Appendix I.3.1–I.3.7 (piecewise-constant-curvature
   polyhedra, geometric links, the link condition and its proof, the local-geodesic link
   criterion, the CAT(1) circle of circumference `2pi+delta`). Appendix I.4 was consulted only
   for scope and carries no claim of this pair.

**Bowditch disposition.** The inventory also lists Bowditch, _Notes on locally CAT(1) spaces_,
§§3.3–3.4 for these contracts. Those sections are the quantitative polygon-shortening and
short-loop-class material owned by `short-loop-polygons-and-quantitative-energy-decrease`
(batch 15), and the selected route for A8 is the Bridson–Haefliger minimum-digon proof, not
the Bowditch nonshrinkable-loop route. No Bowditch row is claimed in this pair's coverage;
the pair still carries two independent primary treatments (a textbook and a monograph). The
commissioned geometric source report records the Bowditch reading limits for the later pair;
this scaffolder verified the scanned file's identity and page count only (its text layer is
empty, so it supports no claim here).

Defect check of the two treatments: the only textual defect noticed is a known typo in
Bowditch 3.2.1 ("curvature <= -1" for <= 1), which does not affect this page because no item
consumes Bowditch; no defect was found in the passages of Bridson–Haefliger or Davis used
here.

## Checks run (actual results)

| check | command (prefix `node`) | result |
|---|---|---|
| manifest dependency fields | `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-*.pages.json` | `93 item(s), 0 normalized, 0 error(s)` |
| scaffold policy (whole run) | `tools/content-policy.mjs --manifest-only research/frontier-42-coxeter-32-batch-*.pages.json` | `93 scoped item(s), 0 error(s), 0 warning(s)` |
| coverage | `tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-11.coverage.json --require-destination` | `1 page(s), 34 harvested result(s), 0 error(s), 0 warning(s)` |
| full-text fetch | `tools/source-fetch-check.mjs --coverage ...batch-11.coverage.json --stamp` | `2/2 source(s) fetch-verified (2 newly stamped)`; check mode `2/2 resolved` |
| full-text fetch (check mode, after all edits) | `tools/source-fetch-check.mjs --coverage ...batch-11.coverage.json` | `2/2 source(s) fetch-verified`; `2/2 source(s) resolved (0 documented drops)` |
| URL liveness | `tools/url-sweep.mjs --coverage ...batch-11.coverage.json --out /tmp/b11-url-liveness.json --recover --fail-on-dead` | `2/2 live; 0 failed; 0 suspect` (artefact written to `/tmp` to avoid touching shared run state) |
| source backing | `tools/source-backing.mjs --coverage ...batch-11.coverage.json --liveness /tmp/b11-url-liveness.json --reharvest-plan /tmp/b11-reharvest.json` | `9 authored result(s) across 1 file(s), every one still backed` |
| readiness (whole run) | `tools/step1-decisions.mjs check --run frontier-42-coxeter-32` | `items 93, ready 93`; **no work entry names a batch-11 item** (the 44 open entries are the empty inventories of sibling batches) |
| dependency levels (whole run) | `tools/item-dependency-levels.mjs check --run frontier-42-coxeter-32` | exit 1 with exactly `44 empty scaffold inventory` errors for not-yet-scaffolded sibling pages; **no cycle, dependency or label error names a batch-11 item** |
| dependency ledger | `tools/frontier-dependency-ledger.mjs refresh --run frontier-42-coxeter-32` | exit 0 (refreshed and deduplicated); all 25 edges consumed by batch 11 carry a review row; the six `removed` inventory proposals are registered; the only batch-11 edges without reviews are the two *incoming* page edges declared by batches 15 and 22, whose own inputs are still owed |
| plan (scoped) | `tools/validate-plan.mjs research/plan-spec.json --pages-file <pair pages>` | exit 0: page order acyclic and consistent, prerequisite lists as declared; run-mode validation cannot complete while sibling pages are empty (see below) |
| manifest integrity | `tools/manifest-integrity.mjs --run frontier-42-coxeter-32` | `64 page(s) owed, 64 in the manifests; no scope drift` |
| wikilink/deps consistency | local extraction of every `[[...]]` in the manifest statements and strategies | 0 unresolved links, 0 links outside `deps`/`justified_by`/same-pair ids, 0 self-dependencies |

Probes run for completeness, with honest results: `frontier-dependency-ledger refresh
--require-reviewed` exits 1 with "Cross-batch review incomplete" because sibling batches have
not supplied their inputs yet (of the two batch-11 edges without reviews, both are *incoming*
page edges declared by batches 15 and 22, whose inputs are still owed); and
`frontier-item-gate --tool extcheck` returns `focus-item-unknown` for the not-yet-authored
manifest ids, the same pre-authoring state recorded by batches 6 and 8 (the stage-1 battery no
longer includes item-scoped `extcheck`; it returns at Step 3b once item files exist).

**Run-mode plan gate observation.** `tools/validate-plan.mjs ... --run frontier-42-coxeter-32`
aborts with `frontier gate selection: Empty frontier page <sibling>` while sibling batches are
mid-flight, and the run's item-level plan checks for scaffolded pages with empty plan-spec item
arrays are vacuous until the Step-4 splice (the tool reports `item lists written for 0/N planned
pages`). The scoped evaluation reported here therefore verifies page order and prerequisites
only; the item-level checks this batch can actually run are `manifest-deps`,
`content-policy --manifest-only`, `item-dependency-levels` and `step1-decisions`, all of which
pass for the twelve batch-11 items. The same limitation was recorded by batch 8.

## Published defects for the canonical ledger

No defect was found in the suppliers this batch consumes. Two observations, neither a defect
claim about a consumed supplier:

1. **Plan-design tension (recorded above, item 2).** Published items homed on
   `further-trigonometric-identities-and-inverses` and
   `hilbert-space-geometry-and-riesz-representation` lie outside this page's declared
   `requires` closure; the design's route and batch 8's identical pattern both require them.
   For the owner's plan reconciliation, not a supplier repair.
2. **No new local-supplier needs.** The eight designed contracts close the pair; the only
   additions are the conventions listed in decision 3 (the round circle) and the explicit
   choice record of decision 5, both inside the assigned pair.

## Completion

- All twelve items are recorded `ready` with their examined dependency ids as evidence
  (`research/frontier-42-coxeter-32-step1-<id>.json`, current for the manifest bytes on disk).
- No item is escalated: every item has a complete proof strategy with met prerequisites, the
  Choice boundary is declared once, and no required page split is needed (8 + 4 items against
  the 100-item cap).
- This batch is mathematically scaffolded but not proved: the twelve items are Step-3
  authoring contracts. No published content, shared plan, engine state or verdict was edited,
  and no selected pair was changed.
- The whole-run `step1-readiness`, `item-dependency-levels` and run-mode `validate-plan` gates
  cannot pass while sibling batches are mid-flight; every remaining failure names only other
  batches' empty files and resolves when those batches land.

## Self-review corrections before hand-off

A final read of the statements and strategies found and corrected four defects in the draft
before the manifest was first written:

1. `lem-cg-local-geodesic-endpoint-stability`: the first draft garbled the `A -> 3A/2`
   construction and contained a misspelled dependency id; the strategy now states the
   alternating-thirds recursion, the halving estimates and the two completeness arguments in
   their recorded order (existence, uniqueness and length bound, continuity).
2. `thm-cg-compact-local-cat-one-short-circle-criterion`: the first draft carried a stray
   fragment and a misspelled id, and used the wrong reason for `r < pi`; the strategy now uses
   the compact-uniqueness criterion of BH II.4.12 and the digon argument of BH II.4.16 in the
   recorded order.
3. `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`: the first draft derived the
   vertex criterion from a join identity that is not the standard one; the strategy now uses
   the vertex chart and Bridson–Haefliger II.5.2's germ reduction, and cites Davis I.3.5 for
   the exact cell-link identification.
4. `ex-cg-unit-circle-at-the-strict-perimeter-boundary-is-cat-one`: a truncated citation was
   completed, and `lem-cg-local-geodesic-continuation-and-path-space-covering` was reworded so
   the covering criterion is proved locally and the published lifting items are invoked only
   after the covering property is established.

A second read of the written manifest then made five further wording repairs — the
Bruhat–Tits sentence and the closing sentence of `ex-cg-intervals-and-metric-trees-are-cat-zero`,
the removal of the redundant third clause of `lem-cg-local-geodesic-endpoint-stability` (it
restated the continuity already asserted in clause (ii)), the closing clause of
`thm-cg-complete-simply-connected-local-cat-zero-globalization`, the patchwork phrasing in
`lem-cg-alexandrov-comparison-triangle-gluing`, and
the removal of two unverified section numbers for Davis's Appendix I in
`lem-cg-comparison-convexity-and-model-spaces` and the two gluing items. No dependency,
level or claim changed. Because the readiness hash covers the transitive closure, all twelve
batch-11 records were re-recorded against the corrected bytes (the endpoint-stability edit
forced re-records of its four dependents as well), and the recheck confirms that every one is
current and that no work entry names a batch-11 item.
