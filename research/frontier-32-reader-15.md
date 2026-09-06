# Frontier 32 — reader 15 report

## Scope opened

- Manifest: `research/frontier-32-batch-15.pages.json`.
- A page: `library/differential-geometry/manifolds-with-boundary-collars-and-orientations.md` (56 items).
- B page: `library/differential-geometry/manifolds-with-boundary-collars-and-orientations-examples.md` (12 items).
- A items opened (all 56): `def-euclidean-upper-half-space-and-its-boundary`, `def-smooth-function-on-a-relatively-open-subset-of-a-half-space`, `lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space`, `prop-chain-rule-for-smooth-half-space-maps`, `def-topological-manifold-with-boundary`, `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary`, `def-smooth-map-between-manifolds-with-boundary`, `lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions`, `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold`, `thm-smooth-invariance-of-manifold-boundary`, `cor-diffeomorphisms-preserve-interior-and-boundary`, `thm-the-interior-is-an-open-smooth-n-manifold`, `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold`, `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary`, `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary`, `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary`, `def-inward-outward-and-boundary-tangent-vectors`, `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane`, `def-boundary-defining-function`, `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors`, `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary`, `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary`, `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary`, `def-smooth-collar-of-a-manifold-boundary`, `thm-collar-neighborhood-theorem`, `def-double-of-a-smooth-manifold-with-boundary`, `thm-the-double-has-a-well-defined-smooth-structure`, `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary`, `def-smooth-immersion-and-embedding-for-manifolds-with-boundary`, `def-embedded-smooth-submanifold-with-boundary`, `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts`, `def-neat-submanifold-of-a-manifold-with-boundary`, `thm-neat-submanifolds-have-boundary-adapted-slice-charts`, `thm-morse-sard-for-maps-from-manifolds-with-boundary`, `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`, `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension`, `def-oriented-smooth-manifold-and-oriented-chart`, `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension`, `def-orientable-manifold`, `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form`, `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations`, `prop-pointwise-orientation-sign-of-a-local-diffeomorphism`, `def-product-orientation`, `def-induced-orientation-on-a-hypersurface-from-a-coorientation`, `def-induced-boundary-orientation`, `prop-boundary-orientation-is-independent-of-the-outward-vector-field`, `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`, `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold`, `def-orientation-preserving-parametrization`, `fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart`, `fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one`, `fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold`, `fs-an-orientable-manifold-comes-with-a-canonical-orientation`, `fs-every-manifold-is-orientable`, and `fs-the-boundary-orientation-is-given-by-inward-normal-first`.
- B items opened: `ex-the-closed-half-space-as-a-manifold-with-boundary`, `ex-the-closed-ball-and-its-sphere-boundary`, `ex-the-cylinder-with-two-oppositely-oriented-boundary-components`, `ex-the-boundary-of-an-oriented-interval`, `ex-the-standard-collar-of-a-closed-ball`, `ex-the-double-of-a-disk-is-a-sphere`, `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary`, `ex-real-projective-space-is-orientable-exactly-in-odd-dimension`, `ex-the-product-orientation-on-a-torus`, `cex-a-submanifold-meeting-the-ambient-boundary-nonneatly`, `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line`, and `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal`.
- Opened direct dependency statements/proofs as needed for the chain rule, Euclidean inverse/implicit/constant-rank theorems, partitions of unity, tangent/cotangent bundles, flows, transversality, Morse--Sard/nullity, exterior powers, orientation/diffeomorphism, and normal-bundle claims. In particular, I read `thm-morse-sard-for-smooth-manifolds`, `thm-morse-sard-for-euclidean-maps`, and `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` independently.

## Repairs made

1. `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary`
   now constructs the field directly from partition-weighted boundary-coordinate fields (extended by zero), rather than appealing without support to extension from the closed boundary.
2. `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary`
   now extends the coordinate field across the face and uses ODE uniqueness both for face preservation and for non-crossing of the half-space.
3. `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary`
   now extends the given field, rather than the coordinate field, and proves the forward barrier argument using the positive normal component.
4. `thm-collar-neighborhood-theorem`
   now gives the local Euclidean-inverse-function argument in half-space coordinates and replaces the boundaryless manifold inverse-function dependency with `thm-euclidean-inverse-function-theorem`; it then records the locally finite shrinking and reparametrization producing a fixed-width collar.
5. `thm-morse-sard-for-maps-from-manifolds-with-boundary`
   now states the required `AC_omega` hypothesis and local-extension $C^r$ convention, separates the zero-dimensional target case, and uses the Euclidean Morse--Sard theorem chartwise. Its dependency contract was updated accordingly.

None of these files carried a `verification.judge` record, so no stale judge record required removal.

## Uneditable finding and blocker

`items/thm-morse-sard-for-smooth-manifolds.md:34-47,73-75` is published and cannot be edited in this dispatch. Its unconditional statement/proof invokes `prop-countable-unions-and-subsets-of-manifold-null-sets-are-null` to aggregate countably many null sets, but that cited proposition explicitly assumes $\mathrm{AC}_\omega$. This is a fatal missing hypothesis. The structured finding names the boundary Morse--Sard item as the assigned consumer. I made the in-flight boundary version explicitly conditional on $\mathrm{AC}_\omega$ and supplied its chartwise Euclidean argument rather than relying on the published theorem's defective aggregation step.

## Verdicts

- A page: repaired; otherwise the half-space, boundary, collar, double, submanifold, orientation, and false-statement claims checked here are coherent. It remains blocked from an unqualified certification by the published Morse--Sard dependency finding above.
- B page: pass. The examples respect the $n=0$/$n\ge1$ distinctions, outward-normal-first convention, collar domain, and forward-time boundary-flow direction; no B prose was edited.

## Validation

- Reflow run on each of the five changed items: unchanged after reflow.
- Focused precheck: 5 checked, 0 failing.
- Focused citecheck: no warnings.
- `git diff --check`: pass.
- Repository-wide `depcheck --quiet` was run but is not green because of 13 unrelated pre-existing errors (YAML escapes in three other items and unresolved `[[t]]` links in `def-jantzen-deformation-and-filtration-of-a-verma-module`); it also emitted its existing global warnings. No batch-15 dependency resolution error was reported.
