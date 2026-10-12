# Batch 37 current scaffold — Complex Algebraic Stratified Topology

Run `frontier-44-special-representation-examples-28`; label beta-batch-37, covers 37.
Owned pair: `complex-algebraic-stratified-topology` (A, order 1809) and
`complex-algebraic-stratified-topology-examples` (B, order 1814), category
`algebraic-geometry`. This file augments the scaffold manifest
`research/frontier-44-special-representation-examples-28-batch-37.pages.json`,
its coverage `…-batch-37.coverage.json`, its consumer input
`…-batch-37.cross-batch-dependencies.json` and the eighteen Step-1 readiness
records. No published content, shared plan, engine state or verdict was touched.

## Design/plan comparison and recorded conflicts

- The generated task names design `research/plan-klr-foundation-prerequisites.md`
  L461. L461 lies inside the preceding `## Mixed Hodge Structures And Strictness`
  section; the section that actually describes this pair is
  `## Complex Algebraic Stratified Topology`, L586–L749. The pair inventory
  there (seventeen A suppliers plus one B example) and its declared `deps`
  arrays agree item-for-item with `research/plan-spec.json` for orders
  1809/1814, so the stale line pointer changes no item. This is one of the two
  design/plan conflicts.
- The design entry for `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  says "not-yet-authored; exact logical metadata is retained in the frozen
  same-frontier proposal". The carrier does now exist at
  `research/frontier-44-special-representation-examples-28-klr-foundation-constructible-drafts/lem-complex-algebraic-stratifications-have-finite-conical-cochain-models.md`
  (current raw sha256 `309db3d750114ebc020671945dedc83613d9eeb411a2b7f94ddee087ab1f6888`)
  and its statement already carries the two wrapper repairs recorded as required
  in the topology packet (quasi-projective per-operation scope; no simultaneous
  stratification of an arbitrary cyclic diagram). The topology packet's recorded
  carrier hash `a7854008…` is the pre-repair carrier and is superseded; the
  packet was not edited. The scaffold uses the current repaired statement.
- Plan-controlled metadata (page orders, `requires` arrays, titles, categories,
  companions) is copied unchanged from the current manifest/plan.
- Scaffold dependency refinements for closure (all add only existing run items
  or published items; none changes a design claim or a selected pair):
  - `def-finite-complex-algebraic-whitney-stratification-and-control-data` now
    depends on `def-analytic-topology-and-finite-smooth-algebraic-stratifications`
    (batch 30, order 1796, level 0). The definition evaluates Whitney (a),(b)
    through local analytic charts and uses the smooth-point condition; the
    analytic topology on complex classical varieties and intrinsic smoothness
    are defined on that earlier page of this same run, not in the published
    corpus, so the dependency closes a genuine well-definedness gap.
  - `lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts`,
    `lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions`,
    `lem-whitney-stratifications-admit-compatible-control-data`,
    `lem-controlled-stratified-submersions-have-continuous-local-trivializations`,
    `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods`,
    `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars` and
    `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`
    now declare `thm-choice-implies-dependent-implies-countable-choice` (batch 2,
    level 7). Each assumes full AC and consumes suppliers whose hypotheses are
    countable choice (`thm-euclidean-tubular-neighbourhood-theorem`,
    `thm-smooth-partitions-of-unity-exist-on-manifolds`); the declared chain
    AC ⇒ DC ⇒ AC_ω supplies them, exactly as in the run precedent set by batches
    31 and 35. Without the edge the transitive hypotheses would be unmet.
  - `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
    now declares `def-axiom-of-choice`; its statement assumes AC and SCHEMA
    requires the assumption in `deps` even when the item only passes it to
    suppliers that assume AC.

## Mathematical review, item by item

Every declared prerequisite was read in its current item file (or, for in-run
scaffold suppliers, in its current manifest statement), and page homes were
resolved through `plan-spec.json`.

- `def-finite-complex-algebraic-whitney-stratification-and-control-data` (new
  scaffold item, definition, level 1). Whitney (a),(b) are stated in local
  analytic charts; coordinate independence and (b)⇒(a) are explicitly not
  assumed, so no unproved invariant is used. Tube control data, `f`-compatible
  tubes, controlled and radial lifts, conical product neighbourhoods and the
  deleted-boundary finite-triangulation convention are condition and convention
  clauses with no existence assertion; local boundedness is flagged as an extra
  hypothesis. Choice-free.
- `lem-complex-algebraic-boundary-points-admit-normalized-curve-arcs` (design
  lemma, level 0). Noether normalisation plus fibre dimension make `h(B)` a
  proper closed subset of smaller dimension; a line through `h(z)` avoids it by
  the finite-root bound; Krull height makes the inverse-image components one-
  dimensional; the finite normalisation of the reduced curve and a holomorphic
  disk chart give the punctured-disk arc. All eleven deps are published and were
  read; AC is inherited only from the algebraic suppliers and is declared.
- `lem-generic-complex-algebraic-whitney-regularity` (design lemma, level 2).
  The moving-secant incidence closure is algebraic (Jacobian kernels and
  Grassmannian charts); generic fibre purity separates its generic fibres from
  the proper complement; the fixed-lower-point arc from the previous item gives
  the radial secant and differentiating annihilator covector fields yields
  Whitney (b); intermediate points give (a). The decisive fixed-lower-point step
  is genuinely proved, not assumed.
- `lem-complex-algebraic-morphisms-admit-compatible-finite-smooth-stratifications`
  (design lemma, level 0). Dimension-decreasing rounds respect prescribed closed
  sets; generic smoothness shrinks target components; the tangent-surjectivity
  criterion and the holomorphic implicit function theorem give the analytic
  submersions. The scope note keeps the finite-diagram caveat (a cyclic diagram
  with prescribed supports can force infinitely many strata) explicit.
- `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications`
  (design theorem, level 3). Whitney partitions with fixed external upper strata
  and interleaved map-compatible target strata, by decreasing target residual
  dimension; properness and the projective case from compactness. No tube,
  isotopy or triangulation claim is imported.
- `lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts`
  (design lemma, level 8). The uniform lower singular-value bound for `(π,r)`
  is proved by contradiction from Whitney (a),(b) including the radial limit;
  the explicit right inverse gives smooth locally bounded horizontal and radial
  lifts. Simultaneous control identities are explicitly not claimed.
- `lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions` (design
  lemma, level 8). Adapted coordinates, a patched vertical field, ODE endpoints
  with an injectivity radius, and a smooth minorant of the local bounds. The
  chain hypothesis is exactly what makes the patches well defined.
- `lem-whitney-stratifications-admit-compatible-control-data` (design lemma,
  level 9). Frontier-distance and incomparable-closure displacement bounds force
  frontier convergence, disjoint incomparable tubes and the chain property;
  inner/middle/outer bands and the relative-tube lemma build each new tube; the
  ordinary-tube comparison gives submersivity; local properness from the bundle
  model. Continuous flows are explicitly left to the next item.
- `lem-controlled-stratified-submersions-have-continuous-local-trivializations`
  (design lemma, level 10). Minimum-norm lifts, chain patching, ODE flows,
  compact trapping excluding escape to lower strata, joint continuity, product
  neighbourhoods and the proper global trivialization. No global simplicial
  model is asserted.
- `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods`
  (design theorem, level 11). Local lowest-stratum setup, proper stratified
  submersion `g=(π,r)`, semialgebraic compact link, horizontal/radial flows,
  cone chart, link strata and Whitney conditions by restriction, local constancy
  along `R`, and whole-fibre trivializations for proper stratified algebraic
  submersions using the analytic properness of the stratification theorem.
- `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars` (design
  lemma, level 10). Normalized radii, radial lifts, compact trapping,
  decreasing-dimensional conjugation corrections giving commutation, and the
  mapping-cylinder model. Semialgebraicity of the resulting flows is explicitly
  not claimed.
- `lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders`
  (design lemma, level 0). Hyperplane subdivision, join cells, coning,
  explicit normalized fibre-coordinate homeomorphism, threshold inverse, PL
  retraction and subcomplex compatibility. Choice-free; no smooth-star claim at
  collapsed ends.
- `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`
  (design lemma, level 11). Level links and cores with genuine corner faces,
  finite smooth bundle charts by coordinate flows, the batch-29 relative
  triangulation/bundle/fitting suppliers, the `C_(n,p)`/`B_n` induction with
  buffers, and mapping-cylinder gluing. The three batch-29 suppliers' current
  statements were read and their hypotheses (compact corners, supplied product
  charts, closed protected collars) match; see the cross-batch input.
- `lem-finite-simplicial-open-stars-have-explicit-conical-product-charts`
  (design lemma, level 0). Explicit barycentric splitting and cone model;
  choice-free.
- `lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension`
  (design lemma, level 0). Cellular cochains with local coefficients,
  finite-dimensionality, and field-extension exactness. No assertion about
  arbitrary analytic sheaf cohomology.
- `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
  (design theorem, level 12). Projective closure, compatible Whitney refinement,
  Hermitian-projector embedding, compact triangulation, incidence and finite bar
  models, local constancy along complex strata through conical charts, support
  and local cohomology, and coefficient extension. The statement keeps both
  declared scope limits: no simultaneous triangulation of arbitrary algebraic
  maps or cyclic diagrams, and no compact realization of a noncompact variety.
- `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  (design lemma, level 13). Per-operation applications of the geometric and
  incidence suppliers, then a finite affine-open descent assembling global
  bounded finite models. The statement keeps the quasi-projective per-operation
  scope and the explicit denial of cyclic-diagram compatibility; the pre-repair
  over-reach noted in the packet is not present in the current carrier.
- `ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation` (B
  example, level 0). Noncompactness of ℂ versus compact finite realizations,
  octahedral boundary complex for S², and the stereographic homeomorphism
  ℂ ≅ S²∖{pt}. Choice-free; `ai-generated` statement with
  `generation.role: example`, the only permitted shape for a generated example.

Published-interface check: the examined published suppliers include
`thm-euclidean-tubular-neighbourhood-theorem` (AC_ω hypothesis),
`thm-smooth-partitions-of-unity-exist-on-manifolds` (AC_ω),
`thm-smooth-dependence-of-ode-solutions-on-parameters` (choice-free),
`thm-constant-rank-theorem-for-manifolds`, `thm-generic-fibre-dimension`,
`thm-generic-smoothness-characteristic-zero`,
`thm-nonempty-regular-locus-reduced-variety-perfect-field`,
`thm-regular-equals-smooth-over-perfect-field`,
`lem-smooth-map-tangent-surjectivity-criterion`,
`thm-holomorphic-implicit-function-theorem`,
`thm-zariski-tangent-space-jacobian-kernel`,
`lem-grassmannian-standard-affine-charts`,
`cor-noether-normalisation-module-finiteness`,
`thm-finite-morphism-integral-closed`, `thm-lying-over`,
`thm-krull-height-theorem`, `thm-dimension-formula-for-affine-domains`,
`thm-affine-domain-dimension-transcendence-degree`,
`lem-dimension-nonempty-open-subset`,
`thm-normalization-reduced-curve-exists-finite`,
`thm-cellular-cochains-compute-cohomology-with-local-coefficients`,
`def-local-system-of-r-modules-and-its-pullback`, `thm-heine-borel-rn`,
`thm-compactness-under-continuous-maps`,
`thm-finite-products-of-compact-spaces`,
`def-geometric-realization-of-an-abstract-simplicial-complex`,
`lem-finite-simplicial-weak-topology-agrees-with-euclidean-topology`,
`prop-a-finite-simplicial-complex-has-compact-hausdorff-realization`,
`def-classical-algebraic-prevariety-regular-maps-and-varieties`,
`lem-classical-variety-noetherian-components` and `def-axiom-of-choice`.
Their statements match the hypotheses, direction and conventions used by the
scaffold contracts. No published defect was found in this examined range, so no
ledger row is owed by this batch; the AC_ω hypotheses of the two geometric
suppliers are met through the declared AC ⇒ DC ⇒ AC_ω item, and
`thm-choice-implies-dependent-implies-countable-choice` itself is published and
audited (2026-09-07).

## Dependency levels

Computed with `tools/item-dependency-levels.mjs` against all current run
manifests: A page 1, 0, 2, 0, 3, 8, 8, 9, 10, 11, 10, 0, 11, 0, 0, 12, 13;
B page 0. Levels 8–13 come from the batch-2 AC ⇒ DC ⇒ AC_ω item (level 7) and
from the in-run batch-29/30/36 suppliers; every other dependency is published
and raises nothing. Page order keeps every same-page dependency before its
consumer, and the `dependency_level` labels equal the tool's computed values.

## Axiom of choice

Items 6, 7, 8, 9, 10, 11 and 13 assume AC and consume the AC_ω suppliers named
above; item 17 assumes AC as ambient scope and passes it to AC-assuming
suppliers; items 2–5 assume AC exactly as their published algebraic suppliers
do. Items 1, 12, 14, 15 (beyond its inherited cellular-cochains AC), 16 (beyond
its suppliers) and the B example are choice-free or only inherit declared AC.
No Recorded result is consumed and no path reaches
`deferred-set-theory-beyond-choice`.

## Sources, coverage and full-text evidence

Four independent treatments back this pair: Mark Goresky, *Lecture Notes on
Sheaves and Perverse Sheaves* (lecture-notes, full 168-page PDF,
sha256 prefix `dfd4e0721c8c2e31`); John Mather, *Notes on Topological
Stability* (survey, 1970 Harvard notes scan with text layer, sha256 prefix
`afeecee7d4519f6d`); J. S. Milne, *Algebraic Geometry* v6.10 (course-notes,
231 pages, sha256 prefix `8222dff2574a5afc`); Allen Hatcher, *Algebraic
Topology* (textbook, 560 pages, sha256 prefix `bebb3032bf9021b9`). All six
source entries were full-text fetched and stamped by
`source-fetch-check --stamp`; the coverage file records 31 harvested headings,
each with a disposition, and no source drop, alternative argument or
owner-escalation was needed. Three headings are deferred with resolvable
destinations (`analytic-derived-six-operations-and-duality`,
`complex-algebraic-stratified-topology`) and five are out of scope with
specific reasons.

Honest caveat on the triangulation route. The draft carriers for
`lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars`,
`lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders`,
`lem-compact-semialgebraic-families-admit-compatible-finite-triangulations` and
`thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology`
cite R. M. Goresky, *Triangulation of stratified objects*, Proc. AMS 72 (1978),
193–200. The available copy (`https://www.math.ias.edu/~goresky/pdf/triangulations.pdf`)
fetches as an eight-page image scan with no usable text layer; this dispatch
verified its bibliographic identity and page range against independent
citations but did not re-read its body. The item references retain it as the
route's provenance, matching the draft authors' recorded earlier visual read;
the coverage harvest is anchored instead in the text-verified Goresky lecture
notes (§8.10 triangulation statement) and Mather (§11 isotopy lemmas). Step-3
authors must re-check the exact triangulations-paper locators before authoring
those four proofs, or replace the reference per the source rules.

## Checks actually run (recorded output)

- `node tools/manifest-deps.mjs <batch-37.pages.json>` — `18 item(s), 0 normalized, 0 error(s)`.
- `node tools/item-dependency-levels.mjs check --run frontier-44-special-representation-examples-28`
  — no error concerns batch 37; the command reports only the empty scaffold
  inventories of the sibling pairs still unscaffolded at the time of the run.
  Batch 37's eighteen labels equal the tool's computed levels.
- `node tools/content-policy.mjs --manifest-only research/frontier-44-special-representation-examples-28-batch-*.pages.json`
  — `657 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json --run frontier-44-special-representation-examples-28`
  — acyclic and consistent, no item-level cycle, forward reference, B-page
  dependency or unresolved id among the pages with item lists; the only lines
  concerning this pair are the inherited `redundant-prereq` warnings on its
  `requires` (plan-controlled, unchanged).
- `node tools/manifest-integrity.mjs --run frontier-44-special-representation-examples-28`
  — `98 page(s) owed, 98 in the manifests; no scope drift`.
- `node tools/coverage-checklist.mjs <batch-37.coverage.json> --require-destination`
  — `2 page(s), 31 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage <batch-37.coverage.json> --stamp`
  — `6/6 source(s) fetch-verified`, then `6/6 source(s) resolved` in check mode.
- `node tools/url-sweep.mjs --coverage <batch-37.coverage.json> --out research/frontier-44-special-representation-examples-28-batch-37-url-liveness.json --recover --fail-on-dead`
  — `4/4 live; 0 failed; 0 recoverable; 0 suspect`, written to the batch-local
  artifact so the shared run-liveness file is left to the engine join.
- `node tools/source-backing.mjs --coverage <batch-37.coverage.json> --liveness <batch-37-url-liveness.json>`
  — `10 authored result(s) … every one still backed by an openable source`.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-44-special-representation-examples-28`
  — refreshed; batch 37 reviewed; its 18 declared cross-batch edges (15 item,
  3 page) each carry one review row; 0 orphaned reviews. The
  `--require-reviewed` whole-run join still fails with "Cross-batch review
  incomplete": batches 11, 24 and 25 have no input files and batches 38-49 are
  not yet scaffolded. No unreviewed edge is owned by batch 37.
- `node tools/extcheck.mjs` — `26654 items, 0 recorded-not-proved, 0 resting on them`; OK.
- `node tools/fwdcheck.mjs --quiet` — OK; two unrelated warnings on
  `library/hopf-hecke-algebras/hecke-base-change-semisimplicity-and-deformation.md`,
  outside this run.

## Readiness outcomes

All eighteen items are recorded `ready` with their examined dependency IDs
(`node tools/step1-decisions.mjs record …`); none is escalated and no owner
decision is requested. The readiness records are scaffold decisions, not
authored-proof acceptance: Step 3 authors the item files and Step 5 provides
the independent mathematical review.

Transient-input note for the operator. A Step-1 record hashes its item's whole
transitive input closure, which for several items includes the manifests of
batches 2, 29, 30 and 36 and, through them, live sibling manifests. While
sibling workers are still scaffolding batches 38+, their manifest writes can
invalidate these records between status passes; the engine's scaffold check
then reports `scaffold-incomplete`. All eighteen records were re-recorded
against the current disk state at the end of this dispatch and verified closed
in a single pass; the stable guard should refresh them once the sibling writers
have drained.
