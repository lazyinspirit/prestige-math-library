# Scheme Theory lane 07 rendering review

## Scope and coverage

Reviewed all 110 assigned published items from the frozen Markdown snapshots and matching local HTML. Verified snapshot, HTML, and all 235 receipt-listed PNG hashes. Individually opened every PNG with `tools.view_image` at original resolution. Reviewed titles and complete ItemBody content, including inline/display LaTeX and diagrams. Item and publication statuses were preserved.

Exact per-item and per-tile SHA256/view attestations are in [lane-07.json](lane-07.json).

## Findings

1. **Raw proof-ending command** — Five items display literal `\qed` after the proof: [cex-proj-graded-ring-not-faithful](snapshots/cex-proj-graded-ring-not-faithful.md#L74), [ex-proj-empty-irrelevant-nilpotent](snapshots/ex-proj-empty-irrelevant-nilpotent.md#L59), [ex-twisting-sheaf-projective-line-transitions](snapshots/ex-twisting-sheaf-projective-line-transitions.md#L63), [lem-relative-proj-affine-local-gluing](snapshots/lem-relative-proj-affine-local-gluing.md#L83), and [thm-relative-proj-base-change](snapshots/thm-relative-proj-base-change.md#L84). Use a proof-ending marker supported by the renderer.

2. **Proof technique math is left as raw TeX** — In the local HTML, inline math remains literal text for [lem-relative-proj-affine-local-gluing](snapshots/lem-relative-proj-affine-local-gluing.md#L71), [thm-proj-structure-sheaf-scheme](snapshots/thm-proj-structure-sheaf-scheme.md#L95), [thm-cohomological-dimension-noetherian-scheme](snapshots/thm-cohomological-dimension-noetherian-scheme.md#L77), [lem-uniqueness-of-twists-on-the-projective-line](snapshots/lem-uniqueness-of-twists-on-the-projective-line.md#L81), [lem-closed-immersion-pushout-schemes](snapshots/lem-closed-immersion-pushout-schemes.md#L113), and [ex-proj-empty-irrelevant-nilpotent](snapshots/ex-proj-empty-irrelevant-nilpotent.md#L49). Route this field through the math renderer; screenshot paths are recorded per finding in the JSON.

## High-likelihood missing diagram candidate

[thm-fibre-products-of-schemes-exist](snapshots/thm-fibre-products-of-schemes-exist.md#L26) states that every diagram $X\to S\leftarrow Y$ has a fibre product, then gives affine charts $\operatorname{Spec}(B_{ij}\otimes_{A_i}C_{ik})$ and affine projections at lines 33–35. A Cartesian square would show projections $X\times_S Y\to X,Y$, the given maps $X,Y\to S$, equal composites to $S$, and affine ring maps $A\to B,C$ inducing $B\otimes_A C$.

## Exact item and tile coverage

| Item ID | Tiles |
|---|---:|
| cex-canonical-map-hyperelliptic-not-embedding | 2 |
| cex-domain-tensor-algebraic-closure-reducible | 1 |
| cex-flat-not-smooth-nodal-family | 3 |
| cex-locally-finite-type-not-finite-type | 1 |
| cex-proj-graded-ring-not-faithful | 2 |
| cex-riemann-inequality-not-equality-special-divisor | 4 |
| cex-zero-divisor-equation-not-cartier | 2 |
| cor-coefficient-trace-residue-agreement | 3 |
| cor-exceptional-divisor-smooth-center-normal-bundle | 2 |
| cor-morphisms-equal-on-dense-open-reduced-source | 2 |
| cor-rational-map-to-projective-space-resolved-by-base-ideal-blowup | 2 |
| cor-unramified-cover-curves-genus-complete | 3 |
| def-affine-scheme-spectrum | 1 |
| def-base-change-map-cohomology | 4 |
| def-category-fibred-in-groupoids | 1 |
| def-complete-linear-system | 2 |
| def-derivation-algebra | 1 |
| def-dual-numbers-scheme | 1 |
| def-ext-groups-of-the-cotangent-complex | 1 |
| def-flat-morphism-schemes | 1 |
| def-geometric-fibre | 1 |
| def-graph-morphism-over-base | 1 |
| def-integral-affine-scheme | 1 |
| def-lie-algebra-of-a-group-scheme | 1 |
| def-model-category-and-quillen-adjunction | 1 |
| def-nonconstant-morphism-curves-degree | 2 |
| def-presentation-of-an-algebraic-space | 1 |
| def-projective-morphism-coherent-bundle-convention | 1 |
| def-quasi-finite-morphism-schemes | 1 |
| def-reduction-of-scheme | 1 |
| def-residue-pairing-principal-parts | 1 |
| def-section-restriction-and-global-section | 1 |
| def-sheaf-total-quotient-rings | 4 |
| def-square-zero-extension-and-small-extension | 2 |
| def-symmetric-algebra-qc-module | 2 |
| def-very-ample-invertible-sheaf-relative | 2 |
| ex-basepoint-linear-system | 3 |
| ex-cech-sign-degree-two-three-opens | 2 |
| ex-differentials-polynomial-ring | 1 |
| ex-effective-divisor-thickened-points-curve | 4 |
| ex-fibre-family-xy-equals-t | 1 |
| ex-genus-one-rr-degree-positive | 3 |
| ex-hopf-algebra-of-a-split-torus | 2 |
| ex-nonreduced-fibre-x-squared-equals-t | 1 |
| ex-proj-empty-irrelevant-nilpotent | 1 |
| ex-pullback-free-module | 1 |
| ex-ringed-space-continuous-functions | 1 |
| ex-smooth-conic-is-projective-line-with-point | 4 |
| ex-twisting-sheaf-projective-line-transitions | 2 |
| lem-acyclic-direct-image-cohomology-comparison | 2 |
| lem-affine-etale-equivalence-relation-quotient | 2 |
| lem-affine-open-containing-component-generics | 3 |
| lem-associated-sheaf-stalk-localization | 2 |
| lem-birational-morphism-principal-open-isomorphism | 3 |
| lem-blowup-separates-transverse-components | 3 |
| lem-cech-hypercohomology-computes-ext-of-the-cotangent-complex | 2 |
| lem-closed-immersion-pushout-schemes | 4 |
| lem-compatible-refinement-for-tuple-indexed-coverings | 3 |
| lem-cotangent-complex-truncation-and-smooth-case | 3 |
| lem-determinantal-grade-necessary-exact-free-complex | 2 |
| lem-differentials-localization | 2 |
| lem-elementary-etale-neighbourhood-finite-decomposition | 2 |
| lem-exceptional-curve-normal-bundle-minus-one | 2 |
| lem-fibre-product-associativity-and-symmetry | 1 |
| lem-filtered-colimit-fp-sheaf-stage | 2 |
| lem-finite-potent-trace-existence-and-uniqueness | 3 |
| lem-flat-deformations-form-a-zariski-sheaf-of-groupoids | 3 |
| lem-flatness-criteria-and-flat-covers-for-abelian-sheaves | 3 |
| lem-general-linear-group-scheme-and-its-coordinate-ring | 3 |
| lem-graph-closed-separated-target | 1 |
| lem-hilbert-projective-space-construction | 2 |
| lem-hilbert-valuative-flat-closure | 2 |
| lem-integral-finite-type-scheme-function-field | 3 |
| lem-lichtenbaum-schlessinger-complex-and-cotangent-ext | 2 |
| lem-morphism-schemes-local-on-source-target | 1 |
| lem-nonzero-map-invertible-to-locally-free-injective | 3 |
| lem-points-of-scheme-fibre-product-residue-tensors | 2 |
| lem-projection-formula-invertible-twist | 2 |
| lem-projective-space-diagonal-closed | 2 |
| lem-proper-normal-curve-rational-function-map | 6 |
| lem-quasi-finite-morphism-fibre-characterization | 2 |
| lem-relative-proj-affine-local-gluing | 2 |
| lem-ring-detected-at-associated-prime-localizations | 1 |
| lem-sections-on-compact-opens-commute-with-filtered-colimits | 4 |
| lem-sheaf-nakayama-fibre-detects-generation | 2 |
| lem-stalk-inverse-image-sheaf | 1 |
| lem-tangent-and-obstruction-spaces-for-hypersurface-deformations | 2 |
| lem-uniqueness-of-twists-on-the-projective-line | 2 |
| rem-base-change-is-not-automatic | 2 |
| rem-hausdorff-analogy-limited | 1 |
| rem-sharp-degree-thresholds-wait-for-duality | 2 |
| thm-affine-blowup-standard-charts | 2 |
| thm-affine-schemes-determined-by-functor-of-points | 1 |
| thm-blowup-effective-cartier-divisor-isomorphism | 2 |
| thm-cartier-to-weil-divisor-normal-scheme | 5 |
| thm-cohomological-dimension-noetherian-scheme | 2 |
| thm-cup-product-graded-associative-natural | 7 |
| thm-etale-formally-etale-finite-presentation | 3 |
| thm-fibre-products-of-schemes-exist | 1 |
| thm-generic-flatness-morphisms | 2 |
| thm-h0-structure-sheaf-proper-curve | 2 |
| thm-kernels-cokernels-qc-modules | 3 |
| thm-morphisms-agree-closed-equalizer-separated-target | 2 |
| thm-proj-structure-sheaf-scheme | 3 |
| thm-properness-descent-fpqc | 2 |
| thm-relative-proj-base-change | 2 |
| thm-serre-duality-curves-coherent-sheaves | 5 |
| thm-sheaves-as-local-homeomorphisms | 2 |
| thm-tangent-vectors-dual-numbers | 2 |
| thm-zero-sheaf-cohomology-global-sections | 2 |

Total: 110 items and 235 individually opened tiles.
