# Frontier-27 Reader-8 Report

Run: `frontier-27`  
Role: Step 6a independent reader  
Batch: `8`  
Date: `2026-08-31`

## Scope opened

- Control artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-27-dispatch/reader-reader-8.prompt.md`, `research/frontier-27-batch-8.pages.json`, `research/frontier-27-batch-8.coverage.json`, `research/frontier-27-batch-8.notes.md`, `research/frontier-27-batch-8.proof-contracts.json`, and the live status outputs from `tools/autopilot`.
- Live-run context: the safe status entrypoint reported `frontier-23` as the active autopilot run, while `.autopilot/frontier-27/` exists and this dispatch explicitly assigns `frontier-27`. I treated the task-named batch-8 artifacts as scope authority and did not steer workflow state.
- Assigned pages:
  `library/differential-geometry/sard-theorem-and-transversality.md`,
  `library/differential-geometry/sard-theorem-and-transversality-examples.md`,
  `library/differential-geometry/tensor-fields-exterior-algebra-and-differential-forms.md`,
  `library/differential-geometry/tensor-fields-exterior-algebra-and-differential-forms-examples.md`.
- Assigned items, opened directly from current disk:
  `sard-theorem-and-transversality` A-page: `def-null-subset-of-a-smooth-manifold`, `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets`, `lem-c1-local-diffeomorphisms-preserve-null-sets-locally`, `prop-the-null-set-definition-is-independent-of-the-smooth-atlas`, `prop-a-countable-chart-cover-detects-manifold-null-sets`, `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null`, `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`, `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets`, `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`, `cor-positive-codimension-immersed-submanifolds-are-null`, `def-critical-locus-and-critical-value-set`, `lem-sard-slicing-for-compact-null-sections`, `lem-sard-on-the-nonflat-critical-strata`, `lem-sard-on-the-infinitely-flat-critical-stratum`, `thm-morse-sard-for-euclidean-maps`, `thm-morse-sard-for-smooth-manifolds`, `cor-regular-values-have-null-complement-and-are-dense`, `prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact`, `cor-regular-values-form-a-dense-g-delta-set`, `cor-a-smooth-map-from-lower-to-higher-dimension-cannot-be-surjective`, `def-transverse-linear-subspaces`, `def-a-smooth-map-transverse-to-an-embedded-submanifold`, `def-transverse-smooth-maps`, `def-transverse-embedded-submanifolds`, `lem-transversality-is-equivalent-to-surjectivity-on-the-normal-quotient`, `thm-transverse-preimage-theorem`, `cor-transverse-intersection-theorem`, `thm-transverse-fibre-product-theorem`, `cor-a-submersion-is-transverse-to-every-embedded-submanifold`, `prop-transversality-to-a-point-is-the-regular-value-condition`, `prop-transversality-is-invariant-under-diffeomorphic-change-of-source-and-target`, `prop-local-graph-characterization-by-transversality-to-vertical-fibres`, `prop-global-graph-characterization-by-one-point-transverse-fibres`, `def-smooth-family-of-maps-and-evaluation-map`, `thm-parametric-transversality`, `cor-generic-translations-of-a-map-to-euclidean-space-are-transverse`, `cor-outside-a-null-set-every-point-is-a-transverse-zero-after-translation`, `prop-transversality-is-stable-on-a-compact-source`, `fs-every-critical-point-is-an-isolated-point`, `fs-the-set-of-critical-values-is-always-closed`, `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions`, `fs-two-submanifolds-with-nonempty-intersection-are-transverse`, `fs-the-preimage-of-every-embedded-submanifold-is-a-submanifold`, `fs-transversality-is-globally-open-for-arbitrary-noncompact-sources-in-the-uniform-c1-topology`.
  `sard-theorem-and-transversality-examples` B-page: `ex-critical-points-and-values-of-a-height-function-on-a-sphere`, `ex-a-constant-map-with-a-large-critical-locus-and-one-critical-value`, `ex-a-smooth-map-with-a-nonclosed-critical-value-set`, `ex-transverse-and-tangent-intersections-of-plane-curves`, `ex-the-intersection-of-coordinate-spheres-as-a-transverse-level-set`, `ex-a-fibre-product-of-submersions`, `ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely`, `ex-a-map-vacuously-transverse-to-a-submanifold-it-avoids`, `cex-a-c1-map-whose-critical-values-have-positive-measure`, `cex-a-tangent-intersection-whose-set-theoretic-intersection-is-not-of-the-expected-dimension`.
  `tensor-fields-exterior-algebra-and-differential-forms` A-page: `def-type-r-s-tensor-on-a-finite-dimensional-vector-space`, `def-tensor-product-of-multilinear-tensors`, `prop-tensor-product-of-multilinear-tensors-is-associative-and-bilinear`, `def-permutation-action-on-covariant-tensors`, `def-symmetrization-and-alternation-operators`, `prop-symmetrization-and-alternation-are-projections`, `def-contraction-of-a-mixed-tensor`, `lem-contraction-is-independent-of-the-basis-formula`, `def-pullback-of-a-covariant-tensor-by-a-linear-map`, `prop-linear-pullback-respects-tensor-products-and-permutations`, `def-alternating-k-covectors`, `def-wedge-product-of-alternating-covectors`, `lem-the-wedge-product-is-alternating-and-bilinear`, `thm-wedge-product-is-associative-and-graded-commutative`, `def-exterior-algebra-of-covectors`, `lem-wedge-monomials-in-a-dual-basis-form-a-basis`, `cor-dimension-of-the-kth-exterior-power-is-binomial`, `def-finite-dimensional-exterior-power-of-vectors`, `thm-universal-property-of-the-finite-dimensional-exterior-power`, `prop-functoriality-of-finite-dimensional-exterior-powers`, `prop-exterior-power-duality-pairing`, `prop-the-top-exterior-power-is-one-dimensional`, `def-interior-product-on-alternating-covectors`, `prop-interior-product-is-a-graded-antiderivation`, `def-type-r-s-tensor-bundle`, `thm-tensor-transition-laws-define-a-smooth-vector-bundle`, `def-smooth-tensor-field`, `prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components`, `prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth`, `def-pullback-of-a-covariant-tensor-field`, `prop-pullback-of-covariant-tensors-is-smooth-and-functorial`, `fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map`, `def-symmetric-and-alternating-covariant-tensor-subbundles`, `thm-symmetric-and-alternating-images-are-smooth-subbundles`, `def-exterior-power-bundle-of-the-cotangent-bundle`, `thm-exterior-power-transition-laws-define-a-smooth-vector-bundle`, `def-smooth-differential-k-form`, `prop-local-coordinate-expression-for-a-differential-form`, `def-wedge-product-of-differential-forms`, `prop-differential-forms-form-a-graded-commutative-algebra`, `def-interior-product-of-a-form-by-a-vector-field`, `prop-interior-product-on-forms-is-a-graded-antiderivation`, `def-pullback-of-a-differential-form`, `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`, `prop-a-diffeomorphism-pulls-back-tensor-fields-and-forms-isomorphically`, `fs-the-wedge-product-is-commutative`, `fs-a-nonzero-one-form-has-a-nonzero-square-under-the-wedge-product`, `fs-every-k-form-on-an-n-manifold-can-be-nonzero-when-k-is-greater-than-n`, `fs-the-coordinate-components-of-a-tensor-transform-as-independent-scalar-functions`, `fs-a-tensor-is-determined-by-its-values-on-diagonal-tuples-without-any-symmetry-hypothesis`.
  `tensor-fields-exterior-algebra-and-differential-forms-examples` B-page: `ex-tensor-product-and-contraction-in-a-basis`, `ex-a-bilinear-form-as-a-type-zero-two-tensor`, `ex-an-endomorphism-as-a-type-one-one-tensor`, `ex-the-identity-endomorphism-and-its-coordinate-independent-trace`, `ex-wedge-products-of-the-standard-dual-basis`, `ex-determinant-as-the-pairing-of-top-exterior-powers`, `ex-the-euclidean-metric-as-a-symmetric-two-tensor`, `ex-the-area-form-in-polar-coordinates`, `ex-pullback-of-the-circle-angular-form-along-a-parametrized-curve`, `cex-a-vector-field-with-no-pullback-under-a-noninjective-map`, `cex-the-volume-coordinate-expression-changes-sign-under-a-reflection`, `ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor`.
- Direct dependency items opened outside the batch: `def-smooth-manifold`, `def-manifold-chart-coordinate-domain-and-coordinate-functions`, `def-null-and-content-zero-in-rn`, `def-c-r-and-smooth-maps-between-smooth-manifolds`, `thm-extreme-value-metric`, `thm-mean-value-inequality-for-total-derivatives`, `thm-lipschitz-images-of-null-sets-in-rn-are-null`, `def-diffeomorphism-and-local-diffeomorphism-of-manifolds`, `lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`, `prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains`, `thm-countable-union-of-null-is-null`, `def-immersed-submanifold`, `def-regular-and-critical-points-and-values`, `thm-euclidean-inverse-function-theorem`, `cor-multivariable-taylor-formula-with-peano-remainder`, `lem-every-manifold-has-a-compact-exhaustion`, `thm-continuous-image-of-a-compact-space-is-compact`, `cor-the-immersion-and-submersion-loci-are-open`, `def-linear-subspace`, `thm-dimension-formula`, `def-embedded-submanifold-and-slice-chart`, `def-differential-of-a-smooth-map`, `prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding`, `def-normal-and-conormal-bundles-of-an-embedded-submanifold`, `thm-embedded-submanifolds-admit-local-defining-submersions`, `thm-a-regular-level-set-is-an-embedded-submanifold`, `prop-tangent-space-of-a-regular-level-set-is-the-kernel`, `def-codimension-and-hypersurface`, `prop-the-diagonal-is-an-embedded-submanifold`, `prop-restrictions-corestrictions-and-products-of-smooth-maps-are-smooth`, `def-immersion-submersion-and-constant-rank-map`, `thm-chain-rule-for-differentials-of-smooth-maps`, `cor-the-differential-of-a-diffeomorphism-is-an-isomorphism`, `prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold`, `thm-smooth-inverse-function-theorem-on-manifolds`, `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`, `def-vector-space`, `def-algebraic-dual-and-linear-functional`, `thm-sign-is-a-homomorphism`, `def-linear-basis`, `def-dual-family-associated-to-a-basis`, `def-linear-map`, `def-binomial-coefficient`, `def-dimension`, `def-determinant-of-a-square-matrix`, `def-tangent-bundle-as-a-disjoint-union`, `def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union`, `def-vector-bundle-chart-and-transition-function`, `thm-vector-bundle-construction-from-a-smooth-cocycle`, `thm-change-of-coordinate-formula-for-tangent-bases`, `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian`, `def-smooth-section-local-section-and-support`, `prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components`, `prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles`, `thm-coordinate-differentials-form-the-dual-cotangent-basis`, `def-trace-of-an-endomorphism`.
- Source slices reopened independently: Encyclopedia of Mathematics `Sard theorem` lines 7-9 for the exact differentiability threshold and dense-regular-values consequence; Gualtieri `Geometry and Topology I` around Theorem 3.21 and Remark 3.22 for the Sard and parametric-transversality route; the batch-8 coverage locators for the Lee and Merry chapter ranges actually backing the two A-pages.

## Confirmed defects repaired

1. `items/prop-the-image-of-a-lower-dimensional-c1-manifold-is-null.md`
   defect: the original proof chose a single target chart on a neighbourhood of all of `F(U)`, which need not exist for an arbitrary source chart domain.
   repair: refined the proof to a countable source/target-atlas argument, added the missing dependency on `prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains`, and updated the batch proof contract and manifest row accordingly.

2. `items/prop-local-graph-characterization-by-transversality-to-vertical-fibres.md`
   defect: the original statement and title were overstrong. Transversality to a vertical fibre only makes the restricted first projection surjective on tangent spaces; it is not enough by itself to force a local graph.
   repair: restricted the statement to embedded submanifolds with `\dim S = \dim M`, renamed the title to say so explicitly, replaced the proof by the tangent-space/isomorphism argument, and aligned the manifest and contract dependencies with the repaired route.

3. `items/prop-global-graph-characterization-by-one-point-transverse-fibres.md`
   defect: the original proof depended on the overstrong local-graph proposition without first forcing `\dim S = \dim M`.
   repair: inserted the transverse-intersection dimension argument, then invoked the repaired local-graph proposition, and updated the contract and manifest metadata to match.

4. `items/thm-parametric-transversality.md`
   defect: the original equivalence between regular values of `\pi_S: \mathcal F^{-1}(Z) \to S` and transversality of the slices was asserted too quickly; the tangent-space comparison was missing.
   repair: rewrote the proof through the tangent-space characterization of `T_{(p,s)}W`, added the explicit transversality definition dependency, and updated the proof contract and manifest row.

5. `items/prop-exterior-power-duality-pairing.md`
   defect: the proof used the wedge shuffle formula without declaring the wedge-definition dependency or contract citation.
   repair: added `def-wedge-product-of-alternating-covectors` to the item and manifest dependencies and refreshed the contract citation/derivation rows.

6. `research/frontier-27-batch-8.proof-contracts.json`
   defect: after the mathematical repairs, several contract rows were stale, and `lem-c1-local-diffeomorphisms-preserve-null-sets-locally` still marked the biconditional axes as `not_applicable` even though the item is stated with `\iff`.
   repair: rewrote the affected contract entries to match current bytes and corrected the biconditional boundary rows. No stale `verification.judge` record was present on any repaired draft item.

## Additional review notes

- I reopened the `boundary-audit` candidates for `thm-parametric-transversality` and `prop-local-coordinate-expression-for-a-differential-form`. On current bytes those remaining `empty`-axis warnings are heuristic-only and I did not confirm an additional mathematical or contract defect there.
- The source-backed Whitney counterexample items `fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions` and `cex-a-c1-map-whose-critical-values-have-positive-measure` remain acceptable as source-backed non-reconstructed counterexample records after reopening the cited Sard references.

## Checks run

- `node tools/tsx-run.mjs tools/reflow.mts items/prop-the-image-of-a-lower-dimensional-c1-manifold-is-null.md items/prop-local-graph-characterization-by-transversality-to-vertical-fibres.md items/prop-global-graph-characterization-by-one-point-transverse-fibres.md items/thm-parametric-transversality.md items/prop-exterior-power-duality-pairing.md`
- `node tools/tsx-run.mjs tools/precheck.mts items/prop-the-image-of-a-lower-dimensional-c1-manifold-is-null.md items/prop-local-graph-characterization-by-transversality-to-vertical-fibres.md items/prop-global-graph-characterization-by-one-point-transverse-fibres.md items/thm-parametric-transversality.md items/prop-exterior-power-duality-pairing.md`
- full batch precheck over all assigned batch-8 items
- `node tools/proof-contract.mjs research/frontier-27-batch-8.proof-contracts.json --strict`
- `node tools/content-policy.mjs research/frontier-27-batch-8.pages.json`
- `node tools/citation-fidelity.mjs research/frontier-27-batch-8.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-27-batch-8.proof-contracts.json`

Results:

- changed-item precheck: `5/5` clean
- full batch precheck: `87/87` clean
- `proof-contract --strict`: `0` errors, `0` warnings, `87/87` checked
- `content-policy`: `116` scoped items, `0` errors, `0` warnings
- `citation-fidelity`: `185` citations, no missing-quote failure and no widening candidate
- `boundary-audit`: only two heuristic contradicted-disposition candidates remained; both were reopened and not confirmed as defects on the current bytes

## Page verdicts

- `sard-theorem-and-transversality`: pass on current bytes after the reader repairs.
- `sard-theorem-and-transversality-examples`: pass on current bytes.
- `tensor-fields-exterior-algebra-and-differential-forms`: pass on current bytes after the dependency/contract repair to the exterior-power pairing.
- `tensor-fields-exterior-algebra-and-differential-forms-examples`: pass on current bytes.

## Uneditable defects and blockers

- No remaining uneditable in-scope defect was confirmed in an `in-flight-item`, assigned page prose, or published dependency.
- No blocker remains.
