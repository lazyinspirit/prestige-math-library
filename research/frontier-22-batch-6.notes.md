# frontier-22 batch 6 notes — scaffold

Owned pairs:
`the-riemann-sphere-and-mobius-transformations` (A, order `323`) with
`the-riemann-sphere-and-mobius-transformations-examples` (B, order `324`);
and `normal-families-and-montels-theorem` (A, order `331`) with
`normal-families-and-montels-theorem-examples` (B, order `332`).

Artifacts owned by this batch:
`research/frontier-22-batch-6.pages.json`,
`research/frontier-22-batch-6.coverage.json`,
and this file.

Session date: Friday, August 28, 2026.

## Design against spec

Recorded here, not adjudicated here.

- For `the-riemann-sphere-and-mobius-transformations`, the generated task, the
  design block at `research/plan-complex-analysis-track.md:1700`, and
  `research/plan-spec.json` agree on order `323` and the page-level
  prerequisites `the-argument-principle-and-rouche`, `compactness`, and
  `the-topology-of-euclidean-space`.

- For `normal-families-and-montels-theorem`, the design block at
  `research/plan-complex-analysis-track.md:2151` names the shorthand
  prerequisites CA-13, CA-11, CA-10, and
  `approximation-and-compactness-in-ck`; the generated task resolved that only
  to `harmonic-functions-and-the-poisson-integral`,
  `the-argument-principle-and-rouche`, and
  `approximation-and-compactness-in-ck`; but `research/plan-spec.json` also
  includes `the-riemann-sphere-and-mobius-transformations`.

- I therefore recorded the drift and followed the current plan-spec, updating
  `research/frontier-22-batch-6.pages.json` so the A page now requires
  `the-riemann-sphere-and-mobius-transformations` in addition to the three
  prerequisites already present in the generated task. This matches the
  step-0 drift note at `research/frontier-22-alpha-step0-drift.md:34-35`.

## Current scaffold shape

- A page `the-riemann-sphere-and-mobius-transformations`: **22 items**.
- B page `the-riemann-sphere-and-mobius-transformations-examples`: **12 items**.
- A page `normal-families-and-montels-theorem`: **18 items**.
- B page `normal-families-and-montels-theorem-examples`: **9 items**.

Both A pages remain below the 60-item split ceiling, so no split is owed.

## Non-duplication decisions

- CA-15's design inventory proposed a standalone local-uniform-convergence
  definition and a theorem restating local uniform convergence of derivatives.
  Both mathematical claims already exist in published form as
  `rem-locally-uniform-convergence-dictionary` and
  `thm-weierstrass-convergence-holomorphic-functions`.

- To avoid silently duplicating published claims, I replaced those two slots
  with the page-local wrapper items
  `rem-local-uniform-convergence-dictionary-on-plane-domains` and
  `cor-derivative-operators-are-continuous-for-local-uniform-convergence`.
  The page still carries the designed mathematics, but the new items are scoped
  to this page's function-space viewpoint rather than re-minting library-global
  claims.

## Source set actually read

The batch coverage ledger records these verified source documents:

1. Lars V. Ahlfors, *Complex Analysis*, 3rd ed.
   `https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf`
   with `original_url`
   `https://studylib.net/doc/26190074/ahlfors---complex-analysis`
2. Matthias Weber, *Complex Analysis*
   `https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download`
3. Elias M. Stein and Rami Shakarchi, *Complex Analysis*
   `https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis`
   with `original_url`
   `https://studylib.net/doc/27609666/stein-complex-analysis`
4. Sheldon Axler, Paul Bourdon, and Wade Ramey,
   *Harmonic Function Theory*, 2nd ed.
   `https://www.axler.net/HFT.pdf`

Notes on provenance:

- The Ahlfors and Stein rows intentionally reuse already-recovered live/archive
  URLs that already carry durable `fetch_verified` stamps elsewhere in the repo.
  The design reading itself was cross-checked against identical Ahlfors and
  Stein/Shakarchi mirrors in the web channel before the batch coverage was
  written.

- Weber and HFT also reuse exact URLs already present in earlier batch coverage
  rows, again preserving existing durable fetch stamps rather than inventing new
  ones.

## Source-backed scope decisions

- CA-11's Möbius, cross-ratio, circline, and classification branches are
  directly source-backed by the harvested Ahlfors, Weber, and Stein/Shakarchi
  sections.

- CA-11's rational-map tail
  (`thm-meromorphic-functions-riemann-sphere-are-rational`,
  `def-degree-rational-map-riemann-sphere`,
  `thm-rational-map-fibre-count-degree`,
  `thm-biholomorphic-self-maps-riemann-sphere-are-mobius`,
  `cor-entire-biholomorphisms-are-affine`,
  `thm-automorphisms-punctured-plane`)
  remains on the scaffold because the design explicitly includes it and later
  pages depend on it, but the named-result harvesting in the three design
  sources is thinner on this tail than on the Möbius-geometry core. I therefore
  kept the scaffold and recorded the source-backed geometry separately from this
  design-mandated synthesis branch instead of pretending the harvested headings
  stated more than they do.

- CA-15's exhaustion, equicontinuity, Montel, and Vitali-Porter branches are
  directly source-backed by Weber §5.1, Stein/Shakarchi Ch. 2 §5.2 and Ch. 8
  §3.2, and HFT Ch. 2 "Normal Families."

- CA-15's chordal-meromorphic tail
  (`def-chordal-local-uniform-convergence-and-meromorphic-normality`,
  `thm-chordal-limit-theorem-for-meromorphic-functions`,
  `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families`)
  is likewise kept because the design explicitly requires it for the later
  Montel-Carathéodory route. The direct harvested headings here mainly support
  the normal-family compactness pattern; the meromorphic-to-sphere packaging is
  therefore an honest library synthesis obligation built on CA-11's chordal
  metric and the already-published compactness machinery, not a pretense that
  the harvested source headings named the full later theorem verbatim.

## Dependency rationale

- CA-11 is built in four layers: sphere model and charts; Möbius/cross-ratio
  geometry; meromorphic/rational maps; then automorphism and classification
  consequences. That keeps the degree theorem downstream of the argument
  principle and keeps the punctured-plane classification downstream of the
  sphere automorphism theorem.

- CA-15 is built in three layers: a metrized local-uniform topology on
  `C(Ω,C)`; Montel/Vitali compactness consequences for holomorphic families;
  then the compact-target chordal version for meromorphic families.

- The choice-sensitive parts of CA-15 are kept explicit in the theorem
  strategies: the diagonal extraction in Montel uses the same
  compact-domain Ascoli supplier that already carries the relevant
  Choice ledger on `approximation-and-compactness-in-ck`.

## Validation results

- `node tools/coverage-checklist.mjs --require-destination research/frontier-22-batch-6.coverage.json`
  passed on Friday, August 28, 2026:
  `2` page(s), `47` harvested result(s), `0` error(s), `0` warning(s).

- `node tools/content-policy.mjs --manifest-only research/frontier-22-batch-*.pages.json`
  passed on Friday, August 28, 2026:
  `166` scoped item(s), `0` error(s), `0` warning(s).

- `node tools/validate-plan.mjs research/plan-spec.json`
  exited `0` on Friday, August 28, 2026. It reports no item-cycle,
  forward-reference, B-leaf, or unresolved-id failure for this scaffold. As in
  other runs, it still emits repository-wide `redundant-prereq` notes; for this
  batch the relevant one is that
  `normal-families-and-montels-theorem` now redundantly requires
  `the-argument-principle-and-rouche` once the spec-level
  `the-riemann-sphere-and-mobius-transformations` edge is present. I left that
  untouched because the task requires following `plan-spec.json`, not locally
  adjudicating spec drift.

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-6.coverage.json`
  passed on Friday, August 28, 2026:
  `6/6` source(s) fetch-verified.

## Outcome

The batch scaffold is now present, source-harvested, spec-aligned, and clean on
the required step-1 validators. No batch-local blocker remains at scaffold
stage.

## Step 3 Alpha review addendum — Friday, August 28, 2026

- The A-page `normal-families-and-montels-theorem` cited the published item
  `cor-ascoli-arzela-for-compact-metric-domains`, but its page-level
  `requires` still omitted that item's home page `ascoli-arzela` (order `285`).
  I added that earlier published prerequisite to
  `research/frontier-22-batch-6.pages.json` during Step 3 so the current
  manifest closes honestly on disk.
- This is a batch-manifest repair only. The live `research/plan-spec.json`
  still carries the pre-splice `requires` list and will need the same edge when
  Step 4 materializes this scaffold into the plan.

## Step-3 fix pass

### B6-1

- Disposition: accepted. No further manifest edit was needed in this pass
  because the live batch-6 scaffold already carries the Step-3 repair.
- Evidence: in `research/frontier-22-batch-6.pages.json`,
  `thm-montel-theorem-for-holomorphic-functions` and
  `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families` both depend on
  the published item `cor-ascoli-arzela-for-compact-metric-domains`; that item
  is homed on `library/topology/ascoli-arzela.md`; and the current
  `normal-families-and-montels-theorem` page record now includes
  `ascoli-arzela` in its page-level `requires`.
- Changed scaffold record: `research/frontier-22-batch-6.pages.json`,
  page `normal-families-and-montels-theorem`, field `requires`, now listing
  `harmonic-functions-and-the-poisson-integral`,
  `the-riemann-sphere-and-mobius-transformations`,
  `the-argument-principle-and-rouche`,
  `approximation-and-compactness-in-ck`, and `ascoli-arzela`.

## Step-5 authoring

- Date: Friday, August 28, 2026.

- Authored A-page ids for `the-riemann-sphere-and-mobius-transformations`:
  `rem-riemann-sphere-one-point-compactification`,
  `def-riemann-sphere-holomorphic-charts`,
  `thm-stereographic-projection-riemann-sphere-homeomorphism`,
  `def-chordal-metric-riemann-sphere`,
  `thm-chordal-metric-induces-sphere-topology`,
  `def-meromorphic-function-riemann-sphere`,
  `def-mobius-transformation`,
  `def-cross-ratio-riemann-sphere`,
  `def-circline-and-reflection`,
  `thm-mobius-group-and-projective-linear-identification`,
  `thm-mobius-transformations-biholomorphic-sphere`,
  `thm-three-point-transitivity-mobius-transformations`,
  `thm-cross-ratio-mobius-invariant`,
  `thm-real-cross-ratio-circline-characterization`,
  `thm-mobius-preserves-circlines-and-reflections`,
  `thm-meromorphic-functions-riemann-sphere-are-rational`,
  `def-degree-rational-map-riemann-sphere`,
  `thm-rational-map-fibre-count-degree`,
  `thm-biholomorphic-self-maps-riemann-sphere-are-mobius`,
  `cor-entire-biholomorphisms-are-affine`,
  `thm-automorphisms-punctured-plane`,
  `thm-classification-mobius-transformations`.

- Authored B-page ids for `the-riemann-sphere-and-mobius-transformations-examples`:
  `ex-cayley-transform-biholomorphism-upper-half-plane-to-disc`,
  `ex-mobius-transformation-from-three-point-correspondence`,
  `ex-classification-of-z-plus-one-two-z-and-one-over-z`,
  `ex-stereographic-projection-formulas-on-the-unit-sphere`,
  `ex-chordal-distance-formula-from-complex-coordinates`,
  `cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere`,
  `cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism`,
  `cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic`,
  `fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism`,
  `fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity`,
  `fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism`,
  `fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane`.

- Authored A-page ids for `normal-families-and-montels-theorem`:
  `lem-canonical-compact-exhaustion-of-a-plane-domain`,
  `rem-local-uniform-convergence-dictionary-on-plane-domains`,
  `def-compact-exhaustion-metric-on-function-space`,
  `thm-compact-exhaustion-metric-characterizes-local-uniform-convergence`,
  `cor-compact-open-topology-is-independent-of-exhaustion`,
  `thm-completeness-of-continuous-functions-for-local-uniform-convergence`,
  `cor-holomorphic-functions-are-closed-for-local-uniform-convergence`,
  `def-normal-family-of-holomorphic-functions`,
  `def-locally-bounded-family-on-a-plane-domain`,
  `def-locally-equicontinuous-family-on-a-plane-domain`,
  `lem-locally-bounded-holomorphic-families-are-locally-equicontinuous`,
  `thm-montel-theorem-for-holomorphic-functions`,
  `thm-normal-holomorphic-families-are-locally-bounded`,
  `thm-vitali-porter-convergence-theorem`,
  `cor-derivative-operators-are-continuous-for-local-uniform-convergence`,
  `def-chordal-local-uniform-convergence-and-meromorphic-normality`,
  `thm-chordal-limit-theorem-for-meromorphic-functions`,
  `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families`.

- Authored B-page ids for `normal-families-and-montels-theorem-examples`:
  `ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane`,
  `ex-the-unit-ball-family-is-normal-on-any-domain`,
  `ex-diagonal-extraction-on-a-disc-for-montels-theorem`,
  `ex-the-exhaustion-metric-on-the-unit-disc`,
  `cex-n-times-z-is-not-normal-near-zero`,
  `cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane`,
  `fs-normality-means-sequential-limits-stay-inside-the-family`,
  `fs-arzela-ascoli-alone-proves-montel`,
  `fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity`.

- Authored page files:
  `library/complex-analysis/the-riemann-sphere-and-mobius-transformations.md`,
  `library/complex-analysis/the-riemann-sphere-and-mobius-transformations-examples.md`,
  `library/complex-analysis/normal-families-and-montels-theorem.md`,
  `library/complex-analysis/normal-families-and-montels-theorem-examples.md`.

- Authored contract artifact:
  `research/frontier-22-batch-6.proof-contracts.json`.

- Provenance rationale:
  the A-page sphere, Möbius, Montel, Vitali-Porter, and chordal-normality core
  items were tagged `literature-derived` at statement level against the batch
  source roster already recorded above; the page-local wrapper remark and the
  companion examples/counterexamples/false statements were tagged `ai-altered`
  because they package or witness the designed mathematics locally rather than
  restating a harvested theorem heading verbatim; proof-bearing items were tagged
  `ai-generated` at proof level because the on-disk proofs were newly authored in
  this pass from the scaffold and published dependencies; definition and remark
  items carry `proof: not-applicable`; no `verification.judge` record was added.

- Narrowed or dropped claims:
  none in this Step-5 pass. I preserved the existing scaffold-level
  non-duplication choice already recorded above for the local-uniform-convergence
  wrapper remark and derivative-continuity corollary, and no further page-local
  claim narrowing was needed on the authored text.

- Blockers:
  none at authoring scope.

- Validation rerun on Friday, August 28, 2026:
  `node tools/tsx-run.mjs tools/precheck.mts ...` on the 47 proof-bearing
  batch-6 items: `47 checked, 0 failing — all clean`.
  `node tools/content-policy.mjs research/frontier-22-batch-6.pages.json`:
  `61 scoped item(s), 0 error(s), 0 warning(s)`.
  `node tools/validate-plan.mjs research/plan-spec.json`: `OK`, with only the
  standing repository-wide `redundant-prereq` advisories, including the already
  recorded CA-15 redundancy through `ascoli-arzela`.
  Extra mechanical contract check: `node tools/proof-contract.mjs research/frontier-22-batch-6.proof-contracts.json --strict`:
  `0 error(s), 0 warning(s), 47/47 item(s) checked`.
