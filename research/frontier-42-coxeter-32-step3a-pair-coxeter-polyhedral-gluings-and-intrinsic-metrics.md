# Step 3a scope review — coxeter-polyhedral-gluings-and-intrinsic-metrics

- Run: `frontier-42-coxeter-32` (batch 6), role alpha, label
  `step3a-pair-coxeter-polyhedral-gluings-and-intrinsic-metrics-3c6b7d1f702df24d`.
- A page: `coxeter-polyhedral-gluings-and-intrinsic-metrics` (order 1728,
  coxeter-groups, 5 items). B page: `coxeter-polyhedral-gluings-and-intrinsic-metrics-examples`
  (order 1729, 3 items); companion pointers agree A↔B.
- Decision: **sufficient** (recorded with `tools/step3-decisions.mjs record-scope`,
  non-owner review, at the current pair scope hash). Scope only: no item
  approval, no owner record, no scaffold, plan, manifest or page edit.

## Evidence read

- `research/frontier-42-coxeter-32-batch-6.pages.json` (5 A + 3 B items, all with
  `deps`, strategies, sources), `.coverage.json`, `.notes.md`,
  `.cross-batch-dependencies.json` (owned content `[]`); the batch-6 entry of
  `-scope-ledger.json` (A `6`, B `6`) and of `-drift-evidence.json`
  (`declaredRequires` equals the manifest `requires`; all seven in the recorded
  published closure); `research/plan-spec.json` rows 1728/1729 (empty item
  arrays, A→B edge; the batch manifest is the current inventory).
- Design inputs: native page prose `library/coxeter-groups/coxeter-polyhedral-gluings-and-intrinsic-metrics.md`
  and `-examples.md`; `research/plan-coxeter-groups-track.md` §CG-03
  (lines 165–200); `research/coxeter-scaffold/inventory.json` CG-03 entry;
  `research/coxeter-scaffold/geometric-source-report.md` G1 (Davis-complex
  supplier tower) and its published-supplier inventory rows.
- Step-1 records: all eight `research/frontier-42-coxeter-32-step1-<item>.json`
  are `decision: ready` with examined dependency lists;
  `-alpha-step1-drift.md` §CG-03 gives `no-drift`, "No prerequisite gap".
- Owner inputs: `-owner-scope.json` (30 Coxeter pairs + HH-1/HH-12) and
  `-owner-authoring-direction.md`; neither changes this pair's scope. No
  owner Step-3a record for this page exists.
- Load-bearing source passages were re-read directly in the fetch-verified
  cached copies matching the coverage stamps
  (`bridson-haefliger.pdf` sha256_16 `894ac23c8033d213`,
  `davis-book.pdf` sha256_16 `ccefbb950fdcfce9`), locators in "Source coverage".

## Scope against the prose design

The scaffold is a faithful realization of the design at design breadth:

1. `def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric` — the design's
   contract (compact convex Euclidean model cells, common-face isometric
   attaching maps with cocycle and intersection conditions, chain length as a
   sum of within-cell Euclidean segments, infimum over finite chains, and
   connected/local-finite/finite-shape hypotheses declared before any metric
   claim) is present statement-for-statement. It adapts Davis Appendix I.3
   Definition I.3.1 (X_0-cell structures) to the abstract gluing setting, as
   G1 directs, and imports the published face/triangulation definitions instead
   of duplicating them.
2. `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` — compatible
   barycentric triangulations of the finite model list, global hat coordinates
   with a uniform constant `L`, and the uniform star radius
   `delta = 1/(2L(D+1))` derived from coordinates; the design's warning against a
   false point-to-face lower bound is respected.
3. `thm-cg-polyhedral-chain-metric-topology-and-properness` — metric axioms
   (nondegeneracy via hat coordinates), agreement of the chain-metric topology
   with the locally finite weak realization topology, and properness/completeness
   via finite compact star unions. The design's "no valence bound" and
   "local finiteness alone is not claimed" caveats are both stated.
4. `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity` —
   arbitrary-metric-target length, lower semicontinuity under uniform
   convergence, arc-length reparametrization, plus (iii) equicontinuity of
   bounded arc-length families. Clause (iii) is a mathematically necessary
   local addition for the Ascoli use in item 5 and is permitted by the owner
   direction; the design's instruction not to cite the Euclidean-target
   theorems as arbitrary-metric results is carried out.
5. `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics` — near-minimizing
   chains, arc-length parametrization, the published proper-target Ascoli
   subsequence corollary, lower semicontinuity, and the AC hypothesis carried
   exactly from that supplier, as G1 requires.

B companion (all three promised comparisons, all new ids):
`ex-cg-interval-realized-tree-versus-vertex-graph-metric` (interval realization
vs. discrete vertex metric; non-geodesic integer metric),
`cex-cg-shrinking-edge-ray-is-locally-finite-but-not-complete` (the design's
explicit `2^-n`-edge ray, dropping finite shapes, matching G1's "do not assert
that local finiteness alone implies completeness"), and
`ex-cg-hexagonal-a2-cell-and-graph-distance` (A2 Coxeter cell, barycentric
triangulation constants `L = 4/sqrt3`, `delta = sqrt3/24`, and the
Euclidean-vs-graph distance comparison).

Nothing in the design's CG-03 contract list was dropped, weakened or moved to
another pair. The design's deferred material (angular links and cone
neighbourhoods, BH I.7.14–I.7.16; nerve/realization and the CAT structure,
Davis §7.1–§7.2, §12.1.1, §12.2–12.3) is assigned by the plan to
`spherical-simplex-metrics-angular-links-and-cones`,
`spherical-parabolic-cosets-and-the-davis-complex` and
`davis-cat-zero-geometry-and-finite-subgroup-fixed-points`; none of it is
promised by this pair's five contracts, and the coverage file records the
deferrals with destinations.

## Source coverage

The page carries two independent primary monograph treatments, both
fetch-verified and live (checked in this review):

- Bridson–Haefliger, *Metric Spaces of Non-Positive Curvature* (669 pp.):
  I.1.18–I.1.20 (printed pp. 11–13: length as supremum of polygonal sums;
  I.1.19 the non-rectifiable compact planar subspace; I.1.20(1)–(7): chord
  bound, monotone reparametrization, additivity, reversal, continuity of the
  arclength function, unique arc-length reparametrization, lower
  semicontinuity) and I.7 (printed pp. 97–111: M_κ-polyhedral complexes,
  strings/intrinsic pseudometric, injectivity radius, model simplices,
  finite-shapes completeness and geodesic existence). I re-read I.1.18,
  I.1.19 and I.1.20(1)–(7) at PDF pp. 34–35, and in I.7 the chapter opening,
  the shrinking-interval example isometric to `[0,2)` with its finite-shapes
  properness remark (I.7.11 region, PDF p. 123), I.7.12 model simplices,
  I.7.13 "finite shapes ⇒ complete length space", and I.7.19 "connected
  finite shapes ⇒ complete geodesic space" (PDF pp. 119–132). The locators
  and the claimed contents match.
- Davis, *The Geometry and Topology of Coxeter Groups* (600 pp.):
  Definition 7.3.1 (Coxeter polytope as the convex hull of a generic orbit),
  Examples 7.3.2(ii) (the D_m Coxeter cell is a 2m-gon, regular when the
  generic point is equidistant from the two walls), Proposition 7.3.4
  (natural cell structure: 0-skeleton W, 1-skeleton the Cayley graph,
  2-skeleton the Cayley 2-complex), §12.1 (piecewise Euclidean cell structure;
  "under mild conditions (e.g. finitely many shapes of cells), Sigma is a
  geodesic space"), Definition I.3.1 and Proposition I.3.4 (X_κ-cell
  structures and the completeness statement). I re-read 7.3.1/7.3.2(ii)/
  7.3.3/7.3.4 at PDF pp. 143–145, §12.1 at PDF p. 246, and I.3.1/I.3.4 at
  PDF pp. 522–523. The hexagon example's source claim and constants check out
  (`L = 4/sqrt3`, `delta = sqrt3/24`; distances 1, sqrt3, 2 vs. graph
  distances 1, 2, 3).

Source caveat (verified at the source, correctly handled): Davis Proposition
I.3.4 as printed says either (a) local finiteness or (b) finitely many shapes
implies a complete geodesic space; clause (a) is refuted by exactly the B
counterexample, since Davis Appendix A.1 defines local finiteness as "each
cell is a face of only finitely many other cells" (PDF p. 419), which the
shrinking-edge ray satisfies while being isometric to `[0,2)`. The scaffold
relies only on clause (b) (finitely many shapes) with BH I.7.13/I.7.19, and
the batch note records this source discrepancy honestly. I confirmed both the
printed (a)/(b) text and the Appendix A.1 definition.

The design's page-level reference list in `inventory.json` also names Bowditch,
*Notes on locally CAT(1) spaces* §§3.3–3.4 and Bridson–Haefliger II.4 for
CG-03. Neither is consumed by the five contracts: BH II.4 is the CAT(κ)
globalization/systole material used by the CAT and Moussong pages (plan
line 17 and lines 254–257), and the coverage file records Bowditch as not
consumed. This is a page-level catch-all reference, not an unfulfilled source
row; no action is needed.

## Role in the library

- In-run consumers (scanned all 32 batch manifests, `requires` fields): exactly
  two A pages besides its own B companion name this page —
  `spherical-simplex-metrics-angular-links-and-cones` (batch 8, CG-05) and
  `spherical-parabolic-cosets-and-the-davis-complex` (batch 26, CG-22).
- The consuming items' declared dependencies on the five A items are all
  present and mutually consistent: CG-05's
  `lem-cg-spherical-simplex-existence-and-link-gram-formula` depends on the
  definition, the topology/properness theorem, the geodesic theorem and the
  length lemma; CG-22's `thm-cg-davis-complex-cell-incidence-and-stabilizers`
  depends on the definition, the star-radius lemma and the topology/properness
  theorem. That matches the plan text for both pages (CG-05: "compactness,
  length topology and minimizing short paths ... by the already proved
  metric-target argument"; CG-22: "finitely many shapes and locally finite
  incidence for finite S" fed into the polyhedral metric theorems).
- No published page or item references the pair's item ids (searched
  `library/` and `items/`); `research/published-consumer-supplier-ledger.md`
  has no entry naming this page or its items, so there is no published-consumer
  obligation.
- No published item duplicates the construction (no existing "polyhedral
  chain metric"/"intrinsic polyhedral metric" supplier); the pair fills a
  genuine gap, and its G1 role — the metric foundation of the Davis-complex
  tower — is not already supplied elsewhere in the plan (the design's
  supplier inventory explicitly lists only prerequisites, not substitutes).

## Prerequisites and dependency evidence

- Dependency scan: the 8 items declare 38 distinct dependency ids; 33 resolve
  to `items/*.md` with `status: published`, and the only unresolved ids are
  the pair's own five not-yet-authored A items (expected before Step 3b).
  No missing, circular, forward or unpublished prerequisite was found.
- Seam checks of the load-bearing suppliers (statements read, not only
  titles): `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`
  is published, is stated for nonempty compact metric domains and proper
  metric targets, and carries the printed "Assume the Axiom of Choice"
  hypothesis that A5 declares; `def-geodesic-and-geodesic-metric-space`
  matches A5's isometric-real-interval conclusion; `def-graph-path-metric`
  is the integer-valued vertex path metric of connected simple graphs, as the
  B items use; `lem-finite-convex-cell-complexes-admit-compatible-triangulations`
  gives the compatible construction on common faces;
  `def-face-poset-and-order-complex` covers arbitrary posets with the empty
  chain; `def-simplicial-subcomplex-star-closure-and-link` supplies the
  open/closed stars A2–A3 use; `thm-metric-regularity-hierarchy` supplies
  Lipschitz ⇒ continuous for A5's Ascoli input; `def-extended-reals` and
  `lem-extended-reals-complete` support A4's `[0, ∞]`-valued length;
  `thm-continuous-bijection-from-a-compact-space-has-continuous-inverse`
  matches A3's use; `def-axiom-of-choice` is published.
- The A page's seven `requires` pages (`metric-spaces`,
  `compactness-in-metric-spaces`, `simplicial-complexes-and-simplicial-homology`,
  `simplicial-subdivision-and-simplicial-approximation`, `ascoli-arzela`,
  `cayley-graphs-word-metrics-and-quasi-isometry`,
  `relations-functions-and-quotients`) are all published pages on disk and all
  in the page's recorded closure; the B page requires only the A page.

## Checks run (actual results)

| check | result |
|---|---|
| `tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-6.pages.json` | 8 items, 0 normalized, 0 errors |
| `tools/coverage-checklist.mjs ...batch-6.coverage.json --require-destination` | 1 page, 21 harvested rows, 0 errors, 1 warning `coverage-low-yield` (8/21 scaffolded; the 13 declines carry individual reasons in the file) |
| `tools/source-fetch-check.mjs --coverage ...batch-6.coverage.json` | 2/2 sources fetch-verified; 2/2 resolved, 0 documented drops |
| `tools/url-sweep.mjs --coverage ...batch-6.coverage.json --recover --fail-on-dead` (output to `/tmp`) | 2/2 live, 0 failed |
| dependency resolution over the manifest | 38 distinct ids; 33/33 published; 5 own items not yet on disk (expected) |

## Uncertainty and observations for the owner

1. **Two citation-precision points for Step 3b (not scope gaps, no scaffold
   edit made).** (a) A4's uniform convergence and A5's Ascoli input concern
   metric-space-valued maps, while the manifest cites the real-valued
   `def-pointwise-uniform-and-uniformly-cauchy-convergence`; the library
   already publishes the metric-valued notion in
   `def-topology-of-uniform-convergence` (and `def-equicontinuity` for the
   equicontinuity clause), so the author should cite those instead. (b) The
   definition's "the face of C_q that corresponds to p" and the meet `p∧q`
   presuppose a coherent choice of face-poset identifications across upper
   bounds; the well-definedness obligation belongs to the definition's
   declaration and is targeted at A3 (`justified_by`), and the published
   `def-finite-convex-cell-complex-and-linear-subdivision` supplies faces as
   supporting-hyperplane intersections, so no supplier is missing — but the
   author should state that obligation explicitly rather than pass over it.
2. **Coverage-row labelling nuance.** BH I.7.8–I.7.10 (the injectivity-radius
   criterion `e(x) > 0`) is disposed "inline" in A3 although A3 proves the same
   metric/topology conclusions by the hat-coordinate route and never defines
   `e(x)`. The pair promises no injectivity-radius statement, so this is a
   source-mapping nuance, not a missing item; if the owner wants item-by-item
   mapping, the row could be relabelled as an alternative route.
3. **Unread remains unread.** I verified the statements and locators above,
   but not BH's full taut-string proof of I.7.19 (the pair uses its own
   hat-coordinate/Ascoli route) nor any Bowditch text (not consumed by this
   pair). Proof correctness, statement-by-statement fidelity and dependency
   minimality were not judged here; those belong to Step 3b and Step 5.
4. **Source-level warning already recorded by Step 1 and re-confirmed here.**
   Davis I.3.4(a) as printed cannot be used (the shrinking-edge ray is locally
   finite in Davis's A.1 sense but incomplete); the scaffold correctly depends
   only on clause (b)/BH I.7.13/I.7.19. Do not let a later reader "restore"
   clause (a) as a source-backed shortcut.

## Scope decision

The planned definitions, results and examples cover the pair's intended
subject — the bridge from abstract isometric polyhedral gluings (Coxeter cell
structure in the sense of Davis Appendix I.3) to a genuine intrinsic metric:
well-definedness hypotheses, face coherence and uniform star radius, metric
and topology agreement, properness and completeness under connectedness +
local finiteness + finitely many shapes, arbitrary-metric length machinery,
and minimizing geodesics — with the three promised companion comparisons,
including the counterexample that pins the necessity of finite shapes. Every
designed row is present, the source coverage is two independent
fetch-verified treatments with the load-bearing locators re-read, all
prerequisites are published or are the pair's own items, and the in-run
consumers' declared needs are exactly the five scaffolded A items. Recorded:
**sufficient**.
