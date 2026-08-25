# frontier-18 — Step 10 owner report

Workflow closure is green for frontier-18: 28 pages and 796 items across 9 categories, no workflow-owned blockers, all 9 pathway obligations closed, and no repeated-repair residue. The main owner-facing caveat is not workflow closure but mathematical concentration: 42 items closed by terminal-resolution receipt rather than ordinary paired DeepSeek+Terra completion, so the personal audit should start there. The defect ledger closed 403 fatal accuracy rows, with citation fidelity and statement-strength defects dominating, and most fatal findings surfaced at Step 8 rather than earlier audit stages.

## What was built

- 28 pages and 796 items across 9 categories.
- Categories: abstract-algebra, category-theory, combinatorics, commutative-algebra, complex-analysis, group-theory, measure-theory, number-theory, real-analysis.
- Item kinds: corollary 95; counterexample 26; definition 100; example 129; false-statement 46; lemma 167; proposition 46; remark 27; theorem 160.

## Verification closure

- Judge lineup: deepseek+terra.
- Current paired verdicts complete: 754/796.
- Terminal owner/session resolutions after the three-round cap: 42 (cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative, def-complex-chain-and-cycle, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-wirtinger-operators-in-several-complex-variables, ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes, ex-cauchy-estimates-computed-on-a-bidisc, ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc, ex-continuous-argument-along-a-spiralling-contour, ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin, ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin, ex-periods-of-a-holomorphic-function-on-an-annulus, ex-power-series-expansion-of-a-geometric-quotient-in-two-variables, ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum, ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc, ex-restricted-sets-in-a-complete-bipartite-graph, ex-restricted-sets-in-a-union-of-two-cliques, ex-reynolds-operator-splits-the-invariant-inclusion, ex-stokes-on-two-patches-spanning-the-same-circle, ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes, ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation, ex-the-divergence-theorem-on-the-closed-unit-box, ex-the-mobius-band-presented-by-two-regular-patches, ex-the-right-circular-cylinder-is-an-elementary-solid-region, ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field, fs-every-lebesgue-measurable-set-is-a-borel-set, lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group, lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies, lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace, lem-complex-linear-real-differential-criterion, lem-dixon-entire-gluing, lem-elementary-sets-admit-compact-inner-and-open-outer-approximations, lem-grid-reduction-of-a-multivariate-polynomial, lem-integral-additivity-over-a-content-zero-almost-partition, lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one, thm-alon-furedi-hyperplane-cover-of-the-cube, thm-componentwise-holomorphy-in-several-complex-variables, thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment, thm-elementary-volume-is-well-defined, thm-global-cauchy-integral-formula-homology, thm-homological-simple-connectivity-equivalences, thm-lebesgue-measure-under-dilations-and-reflections, thm-nikiforov-few-induced-copies-force-a-linear-restricted-set).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `dc55ea71550dea3d99f7b3bf0c11db7101d70f35d8bf4b00bbacd6035c23a5f3`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 403 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| f18-a-H6-001 | lem-change-of-variables-with-a-degenerate-parameter-boundary | accuracy | citation-missing | proof-step | fixed | 6b-adjudicate |
| f18-a-H6-002 | prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal | accuracy | false-or-overstrong-title | title | fixed | 6b-adjudicate |
| f18-a-H6-003 | cor-every-face-of-an-elementary-solid-region-is-outward-oriented | accuracy | false-or-overstrong-title | title | fixed | 6b-adjudicate |
| f18-a-L7-001 | thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant | accuracy | citation-truncated | facts-block | fixed | 6b-adjudicate |
| f18-a-P8-001 | thm-identity-theorem-in-several-complex-variables | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| f18-a-P8-002 | thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables | accuracy | missing-hypothesis | proof-step | fixed | 6b-adjudicate |
| f18-a-R6-001 | ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f18-a-R6-002 | ex-the-right-circular-cylinder-is-an-elementary-solid-region | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f18-a-R7-001 | ex-a-dense-open-subset-of-the-unit-interval-of-small-measure | accuracy | false-or-overstrong-statement | statement | fixed | 6a-read |
| f18-a-R7-002 | ex-a-dense-null-g-delta-set-containing-the-rationals | accuracy | false-or-overstrong-statement | statement | fixed | 6a-read |
| f18-a-R7-003 | ex-the-graph-of-a-continuous-real-function-is-lebesgue-null-in-the-plane | accuracy | citation-missing | proof-step | fixed | 6a-read |
| f18-a-R8-001 | thm-continuous-logarithms-exist-along-a-contour | accuracy | citation-inflated | proof-step | fixed | 6a-read |
| f18-a-R8-002 | thm-cauchy-integral-formula-on-a-polydisc | accuracy | citation-inflated | proof-step | fixed | 6a-read |
| frontier-18-a-step8-001 | cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-002 | cor-cycle-integral-of-a-derivative-vanishes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-003 | cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-004 | cor-winding-number-is-the-normalized-argument-increment | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-005 | def-adapted-outward-boundary-presentation-of-a-simple-solid-region | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-006 | def-complex-chain-and-cycle | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8-007 | def-continuous-argument-and-holomorphic-logarithm-branches | accuracy | missing-hypothesis | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-008 | def-divergence-and-curl-of-a-c1-vector-field | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-009 | def-integration-and-index-of-complex-chain | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-010 | def-lebesgue-measure-and-the-lebesgue-sigma-algebra | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8-011 | def-multivariable-power-series | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8-012 | def-outward-unit-normal-at-a-boundary-point-of-a-compact-solid | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-013 | def-simple-solid-region-in-a-coordinate-direction | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-014 | def-the-induced-boundary-chain-of-a-c2-surface-patch | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-18-a-step8-015 | def-vector-potential-of-a-c1-vector-field | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-18-a-step8-016 | def-wirtinger-operators-in-several-complex-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-017 | ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-018 | ex-cauchy-estimates-computed-on-a-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-019 | ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-020 | ex-continuous-argument-along-a-spiralling-contour | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-021 | ex-dixon-gluing-traced-on-an-annulus-cycle | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-022 | ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-023 | ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-024 | ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-025 | ex-periods-of-a-holomorphic-function-on-an-annulus | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-026 | ex-power-series-expansion-of-a-geometric-quotient-in-two-variables | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-a-step8-027 | ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-028 | ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-029 | ex-stokes-on-two-patches-spanning-the-same-circle | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-030 | ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-031 | ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-032 | ex-the-closed-unit-box-is-an-elementary-solid-region | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-033 | ex-the-divergence-theorem-on-the-closed-unit-box | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-034 | ex-the-mobius-band-presented-by-two-regular-patches | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-035 | ex-the-planar-divergence-theorem-on-a-rectangle | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-036 | ex-the-right-circular-cylinder-is-an-elementary-solid-region | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-037 | ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-038 | ex-winding-number-of-a-figure-eight-cycle | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-18-a-step8-039 | fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-040 | fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-18-a-step8-041 | fs-every-lebesgue-measurable-set-is-a-borel-set | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-042 | lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-043 | lem-complex-linear-real-differential-criterion | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-044 | lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-045 | lem-dixon-entire-gluing | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-046 | lem-dyadic-cube-values-are-forced-by-translation-invariance-and-normalisation | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-a-step8-047 | lem-elementary-sets-admit-compact-inner-and-open-outer-approximations | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-048 | lem-holomorphic-difference-quotient-is-jointly-continuous | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-049 | lem-integral-additivity-over-a-content-zero-almost-partition | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-050 | lem-logarithm-branch-for-a-linear-factor-on-a-disc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-051 | lem-multivariable-geometric-series-on-a-distinguished-boundary | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-052 | lem-plane-exterior-of-a-closed-disc-is-path-connected | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-053 | lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-054 | lem-the-stokes-integrand-identity-on-a-c2-patch | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-055 | prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-056 | prop-star-shaped-plane-domains-are-homologically-simply-connected | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-057 | prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-058 | rem-homological-simple-connectivity-conventions | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-059 | rem-linear-change-of-variables-for-jordan-content-and-lebesgue-measure | accuracy | missing-choice-scope | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-060 | rem-nullity-and-nowhere-density-remain-independent-for-lebesgue-measure | accuracy | missing-choice-scope | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-061 | rem-several-variable-conventions-and-the-identity-theorem-gap | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-062 | rem-the-winding-number-and-the-planar-vortex-field | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-18-a-step8-063 | rem-two-senses-of-regularity-for-lebesgue-measure | accuracy | missing-choice-scope | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-064 | thm-cauchy-estimates-on-a-polydisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-065 | thm-componentwise-holomorphy-in-several-complex-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-066 | thm-continuous-logarithms-exist-along-a-contour | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-067 | thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-068 | thm-elementary-volume-is-well-defined | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-069 | thm-global-cauchy-integral-formula-homology | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-070 | thm-holomorphic-logarithms-homologically-simply-connected-domains | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-071 | thm-homological-simple-connectivity-equivalences | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-072 | thm-identity-theorem-in-several-complex-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-073 | thm-lebesgue-measure-is-a-complete-measure | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-074 | thm-lebesgue-measure-under-dilations-and-reflections | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-075 | thm-lebesgue-null-agrees-with-elementary-nullity-in-rn | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-076 | thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-077 | thm-winding-number-chain-laws | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-078 | thm-winding-number-circle-traversed-k-times | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-079 | thm-winding-number-locally-constant | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-080 | thm-winding-number-of-a-cycle-is-integer | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-081 | thm-winding-number-zero-unbounded-component | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-082 | cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative | accuracy | missing-hypothesis | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-083 | def-complex-chain-and-cycle | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-084 | def-the-induced-boundary-chain-of-a-c2-surface-patch | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8-085 | def-wirtinger-operators-in-several-complex-variables | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8-086 | ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-087 | ex-cauchy-estimates-computed-on-a-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-088 | ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-089 | ex-continuous-argument-along-a-spiralling-contour | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-090 | ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-091 | ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin | accuracy | missing-hypothesis | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-092 | ex-periods-of-a-holomorphic-function-on-an-annulus | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-093 | ex-power-series-expansion-of-a-geometric-quotient-in-two-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-094 | ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-095 | ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc | accuracy | citation-inflated | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-096 | ex-stokes-on-two-patches-spanning-the-same-circle | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-097 | ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-098 | ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-099 | ex-the-divergence-theorem-on-the-closed-unit-box | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-100 | ex-the-right-circular-cylinder-is-an-elementary-solid-region | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-101 | ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-102 | fs-every-lebesgue-measurable-set-is-a-borel-set | accuracy | missing-choice-scope | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-103 | lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-104 | lem-complex-linear-real-differential-criterion | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-105 | lem-dixon-entire-gluing | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-106 | lem-elementary-sets-admit-compact-inner-and-open-outer-approximations | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-107 | lem-integral-additivity-over-a-content-zero-almost-partition | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-108 | lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-109 | thm-componentwise-holomorphy-in-several-complex-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-110 | thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-111 | thm-elementary-volume-is-well-defined | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-112 | thm-global-cauchy-integral-formula-homology | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8-113 | thm-homological-simple-connectivity-equivalences | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8-114 | thm-lebesgue-measure-under-dilations-and-reflections | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-001 | cex-a-curl-free-c1-field-on-an-open-subset-of-r3-that-is-not-conservative | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-002 | cor-index-of-a-cycle-is-locally-constant-and-vanishes-far-from-its-trace | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8r2-003 | def-complex-chain-and-cycle | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8r2-004 | def-continuous-argument-and-holomorphic-logarithm-branches | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8r2-005 | def-lebesgue-measure-and-the-lebesgue-sigma-algebra | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-18-a-step8r2-006 | def-the-induced-boundary-chain-of-a-c2-surface-patch | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-a-step8r2-007 | def-wirtinger-operators-in-several-complex-variables | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8r2-008 | ex-a-u-shaped-prism-as-a-finite-gluing-of-three-boxes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-009 | ex-cauchy-estimates-computed-on-a-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-010 | ex-complex-jacobian-of-a-quadratic-map-of-the-bidisc | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-011 | ex-continuous-argument-along-a-spiralling-contour | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-012 | ex-dixon-gluing-traced-on-an-annulus-cycle | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-a-step8r2-013 | ex-flux-of-the-inverse-square-field-through-a-sphere-centred-at-the-origin | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-a-step8r2-014 | ex-flux-of-the-inverse-square-field-through-a-sphere-not-enclosing-the-origin | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-a-step8r2-015 | ex-maximum-modulus-on-the-distinguished-boundary-of-a-bidisc | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-016 | ex-periods-of-a-holomorphic-function-on-an-annulus | accuracy | missing-hypothesis | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-017 | ex-power-series-expansion-of-a-geometric-quotient-in-two-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-018 | ex-power-series-expansion-of-an-exponential-of-a-coordinate-sum | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-019 | ex-power-series-expansion-of-the-coordinate-product-on-a-bidisc | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-020 | ex-stokes-on-two-patches-spanning-the-same-circle | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-021 | ex-the-boundary-flux-of-the-gradient-of-a-harmonic-function-vanishes | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-a-step8r2-022 | ex-the-closed-ball-is-an-elementary-solid-region-with-the-octant-presentation | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-023 | ex-the-divergence-theorem-on-the-closed-unit-box | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-024 | ex-the-mobius-band-presented-by-two-regular-patches | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-025 | ex-the-planar-divergence-theorem-on-a-rectangle | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-026 | ex-the-right-circular-cylinder-is-an-elementary-solid-region | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-027 | ex-the-volume-of-a-closed-ball-from-the-outward-flux-of-the-position-field | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-028 | fs-a-divergence-free-field-has-zero-outward-flux-through-every-closed-surface | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-029 | fs-a-translation-invariant-borel-measure-on-the-line-is-a-multiple-of-lebesgue-measure | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-030 | fs-every-lebesgue-measurable-set-is-a-borel-set | accuracy | missing-choice-scope | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-031 | lem-cauchy-transform-of-a-cycle-is-holomorphic-off-the-trace | accuracy | missing-hypothesis | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-032 | lem-complex-linear-real-differential-criterion | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-033 | lem-coordinate-scalings-and-permutations-scale-the-unit-cube-by-the-absolute-determinant | accuracy | ill-typed-construction | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-034 | lem-dixon-entire-gluing | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-035 | lem-elementary-sets-admit-compact-inner-and-open-outer-approximations | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-036 | lem-integral-additivity-over-a-content-zero-almost-partition | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-037 | lem-shear-images-of-the-unit-cube-have-lebesgue-measure-one | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-038 | prop-star-shaped-plane-domains-are-homologically-simply-connected | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-039 | thm-componentwise-holomorphy-in-several-complex-variables | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-040 | thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-041 | thm-elementary-volume-is-well-defined | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-042 | thm-global-cauchy-integral-formula-homology | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-a-step8r2-043 | thm-holomorphic-logarithms-homologically-simply-connected-domains | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-044 | thm-homological-simple-connectivity-equivalences | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-045 | thm-lebesgue-measure-under-dilations-and-reflections | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-a-step8r2-046 | thm-winding-number-of-a-cycle-is-integer | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-6b-001 | thm-a-bounded-partition-into-weakly-restricted-sets | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-18-b-6b-002 | fs-a-sparse-set-contains-a-stable-set-of-half-its-size | accuracy | invalid-witness | proof-step | fixed | 6a-read |
| frontier-18-b-6b-003 | thm-every-maximal-eventown-family-is-maximum | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-b-6b-004 | cor-rodl-every-h-free-graph-has-a-linear-restricted-set | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-18-b-6b-005 | cor-rodl-in-the-edge-density-form | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-18-b-6b-006 | cor-nikiforov-applies-to-every-linearly-large-induced-subgraph | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-b-6b-007 | cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-18-b-step8-001 | lem-unions-of-components-and-of-anticomponents-are-modules | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-002 | lem-a-pattern-inside-an-extension-set-produces-the-substitution | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-003 | rem-conventions-for-prime-graphs | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-b-step8-004 | ex-modules-of-the-four-vertex-path | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-005 | ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-006 | ex-the-modular-decomposition-of-a-blown-up-five-cycle | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-007 | ex-counting-induced-three-vertex-paths-by-extensions | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-008 | ex-substitution-into-an-edge-and-into-a-nonedge | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-009 | def-module-of-a-graph | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-010 | cex-primality-is-not-inherited-by-induced-subgraphs | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-011 | def-directional-and-weak-sparsity-between-vertex-sets | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-012 | lem-a-weakly-sparse-set-has-a-large-sparse-subset | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-013 | lem-restrictedness-is-complement-invariant | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-014 | lem-sparsity-is-monotone-in-the-parameter | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-015 | lem-trimming-a-self-regular-set-of-low-density | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-016 | lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-017 | cor-rodl-for-a-nonempty-family-of-forbidden-graphs | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-018 | cor-rodl-in-the-edge-density-form | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-019 | thm-nikiforov-few-induced-copies-force-a-linear-restricted-set | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-020 | cor-the-density-form-and-the-degree-form-of-rodls-theorem-are-interchangeable | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-021 | thm-a-bounded-partition-into-weakly-restricted-sets | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-022 | rem-the-diagonal-convention-in-self-density | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-b-step8-023 | ex-a-disjoint-union-of-small-cliques-is-a-sparse-vertex-set | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-024 | ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-025 | cor-the-modular-partition-with-a-prime-quotient-is-unique | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-026 | ex-restricted-sets-in-a-complete-bipartite-graph | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-027 | cex-a-complete-graph-has-no-large-sparse-set | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-028 | cor-rodl-every-h-free-graph-has-a-linear-restricted-set | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-029 | cor-nikiforov-applies-to-every-linearly-large-induced-subgraph | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-030 | ex-restricted-sets-in-a-union-of-two-cliques | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-031 | cor-boundedly-many-restricted-sets-cover-all-but-a-small-fraction | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-032 | def-lattice-path-and-step-set | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-033 | lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-034 | cor-motzkin-numbers-as-a-binomial-sum-of-catalan-numbers | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-035 | def-monotone-lattice-path | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-036 | thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-037 | cor-non-intersecting-monotone-path-pairs-are-counted-by-a-two-by-two-determinant | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-038 | lem-sign-reversing-involution-on-intersecting-path-systems | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-039 | lem-reflection-at-the-first-visit-to-a-level-is-a-bijection | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-040 | thm-catalan-numbers-by-reflection | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-041 | fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-042 | def-set-family-and-its-incidence-matrix | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-043 | ex-the-reflection-bijection-on-a-concrete-path | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-044 | thm-lindstrom-gessel-viennot | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-045 | thm-oddtown | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-046 | def-standard-bilinear-form-on-a-coordinate-space | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-047 | lem-a-family-with-independent-incidence-vectors-has-at-most-n-members | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-048 | lem-determinant-independence-criterion | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-049 | fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-050 | thm-every-maximal-eventown-family-is-maximum | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-051 | def-path-system-and-non-intersecting-path-system | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-052 | cor-sauer-shelah-polynomial-bound | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-053 | cex-a-step-set-for-which-the-reflection-argument-fails | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-054 | lem-a-binomial-coefficient-with-top-below-a-prime-is-nonzero-modulo-that-prime | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-055 | ex-the-ballot-problem-with-three-and-two-votes | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-056 | ex-the-three-catalan-families-matched-at-semilength-three | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-057 | ex-the-cycle-lemma-on-a-word-of-length-seven | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-058 | rem-the-field-is-a-hypothesis-of-every-bound-on-this-page | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-b-step8-059 | thm-sauer-shelah-by-multilinear-polynomials | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-060 | ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-061 | thm-cauchy-davenport | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-062 | def-multilinear-polynomial-and-multilinear-reduction | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-063 | ex-the-nonuniform-intersection-bound-on-the-pairs-in-four-points | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-064 | lem-an-unshattered-set-reduces-a-monomial-on-a-family | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-065 | thm-alon-furedi-hyperplane-cover-of-the-cube | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-066 | cex-incidence-vectors-dependent-over-the-two-element-field-and-independent-over-the-reals | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-067 | thm-frankl-wilson-nonuniform-bound | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-068 | cor-the-oddtown-bound-is-attained | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-069 | fs-fisher-inequality-holds-over-the-two-element-field | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-070 | lem-grid-reduction-of-a-multivariate-polynomial | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-071 | lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-072 | cex-cauchy-davenport-fails-for-a-composite-modulus | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-073 | def-l-intersecting-family | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-074 | ex-the-combinatorial-nullstellensatz-on-a-two-variable-polynomial | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-075 | cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-076 | cex-a-nonzero-polynomial-vanishing-on-a-grid-of-exactly-its-degree | accuracy | undefined-notation | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-077 | cex-a-step-set-for-which-the-reflection-argument-fails | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-078 | cex-cauchy-davenport-fails-for-a-composite-modulus | accuracy | citation-inflated | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-079 | cor-nikiforov-applies-to-every-linearly-large-induced-subgraph | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-080 | cor-sauer-shelah-polynomial-bound | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-081 | def-multilinear-polynomial-and-multilinear-reduction | accuracy | false-or-overstrong-statement | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-082 | def-path-system-and-non-intersecting-path-system | accuracy | citation-inflated | definition | fixed | 8-adjudicate |
| frontier-18-b-step8-083 | ex-counting-induced-three-vertex-paths-by-extensions | accuracy | arithmetic-error | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-084 | ex-restricted-sets-in-a-complete-bipartite-graph | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-085 | ex-restricted-sets-in-a-union-of-two-cliques | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-086 | ex-rodls-theorem-with-an-explicit-constant-for-p-three-free-graphs | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-087 | ex-substitution-into-an-edge-and-into-a-nonedge | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-088 | ex-the-four-vertex-path-is-the-only-prime-graph-on-four-vertices | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-089 | ex-the-modular-decomposition-of-a-blown-up-five-cycle | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-090 | ex-the-nonuniform-fisher-bound-on-the-seven-lines-of-the-fano-plane | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-091 | ex-the-three-catalan-families-matched-at-semilength-three | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-092 | fs-monotone-paths-weakly-below-the-diagonal-are-half-of-all-monotone-paths | accuracy | false-or-overstrong-statement | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-093 | fs-the-catalan-numbers-satisfy-a-constant-coefficient-linear-recurrence | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-094 | lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-095 | lem-every-polynomial-agrees-on-the-cube-with-its-multilinear-reduction | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-096 | lem-grid-reduction-of-a-multivariate-polynomial | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-18-b-step8-097 | lem-sign-reversing-involution-on-intersecting-path-systems | accuracy | citation-missing | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-098 | lem-sparsity-is-monotone-in-the-parameter | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-18-b-step8-099 | thm-alon-furedi-hyperplane-cover-of-the-cube | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-100 | thm-nikiforov-few-induced-copies-force-a-linear-restricted-set | accuracy | ill-typed-construction | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-101 | thm-sauer-shelah-by-multilinear-polynomials | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-102 | ex-restricted-sets-in-a-complete-bipartite-graph | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-b-step8-103 | ex-restricted-sets-in-a-union-of-two-cliques | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-104 | lem-a-self-regular-set-of-intermediate-density-carries-many-induced-copies | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-105 | lem-grid-reduction-of-a-multivariate-polynomial | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-b-step8-106 | lem-grid-reduction-of-a-multivariate-polynomial | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-107 | thm-alon-furedi-hyperplane-cover-of-the-cube | accuracy | ill-typed-construction | proof-step | fixed | 8-adjudicate |
| frontier-18-b-step8-108 | thm-nikiforov-few-induced-copies-force-a-linear-restricted-set | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-c-6b-001 | thm-lagrange-four-square-theorem | accuracy | citation-missing | proof-step | fixed | 6a-read |
| frontier-18-c-6b-002 | cor-integers-requiring-four-squares | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-18-c-6b-003 | prop-three-square-congruence-obstruction / cor-integers-requiring-four-squares / lagrange-four-square-theorem summary | accuracy | false-or-overstrong-title | title | fixed | 6a-read |
| frontier-18-c-6b-005 | thm-infinitely-many-primes-congruent-to-one-modulo-n | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-18-c-6b-007 | ex-artin-tate-finite-intermediate-algebra | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-18-c-6b-010 | thm-intersections-of-rational-cyclotomic-fields | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| frontier-18-c-step8-001 | ex-four-square-product-identity-by-expansion | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-002 | def-cyclotomic-polynomial | accuracy | citation-misattributed | definition | fixed | 8-adjudicate |
| frontier-18-c-step8-003 | thm-every-prime-is-a-sum-of-four-squares | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-004 | lem-sum-of-three-squares-is-never-seven-modulo-eight | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-005 | thm-lagrange-four-square-theorem | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-006 | thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-007 | prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-008 | lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-009 | thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-010 | lem-the-totient-of-a-gcd-and-of-a-least-common-multiple | accuracy | undefined-notation | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-011 | prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-c-step8-012 | def-roots-of-unity-in-a-field | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-c-step8-013 | ex-the-seventh-cyclotomic-polynomial-factors-into-two-cubics-over-f-two | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-014 | ex-the-galois-group-of-the-twelfth-cyclotomic-field-and-its-quadratic-subfields | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-015 | thm-conjugates-over-a-finite-field-are-the-frobenius-powers | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-016 | lem-generated-submodule-as-finite-linear-combinations | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-c-step8-017 | ex-the-subfield-lattice-of-the-field-of-order-two-to-the-twelve | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-018 | prop-p-power-roots-of-unity-in-characteristic-p | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-019 | cor-product-of-two-noetherian-rings-is-noetherian | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-020 | thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-021 | def-cyclotomic-extension | accuracy | citation-missing | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-022 | ex-a-cyclic-cubic-field-inside-the-seventh-cyclotomic-field | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-c-step8-023 | thm-finite-generation-and-finite-presentation-over-a-noetherian-ring | accuracy | citation-missing | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-024 | cex-an-intersection-of-cyclotomic-extensions-larger-than-the-gcd-case | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-025 | thm-module-finite-algebra-over-a-noetherian-ring-is-noetherian | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-026 | rem-noetherian-conventions-and-choice | accuracy | citation-misattributed | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-027 | lem-orbit-polynomial-has-invariant-coefficients | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-028 | cor-noetherian-from-finitely-many-noetherian-quotients | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-029 | lem-maximal-non-finitely-generated-ideal | accuracy | citation-missing | statement | fixed | 8-adjudicate |
| frontier-18-c-step8-030 | ex-reynolds-operator-splits-the-invariant-inclusion | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-031 | ex-hom-between-finite-modules-over-the-integers | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-032 | def-cyclotomic-polynomial | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-033 | ex-reynolds-operator-splits-the-invariant-inclusion | accuracy | citation-truncated | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-034 | lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-035 | thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-c-step8-036 | thm-factorisation-of-the-cyclotomic-polynomial-over-a-finite-field | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-c-step8-037 | thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity | accuracy | citation-misattributed | facts-block | fixed | 8-adjudicate |
| frontier-18-c-step8-038 | ex-reynolds-operator-splits-the-invariant-inclusion | accuracy | citation-truncated | proof-step | fixed | 8-adjudicate |
| frontier-18-c-step8-039 | lem-a-finite-abelian-group-is-a-quotient-of-a-power-of-a-cyclic-group | accuracy | citation-truncated | proof-step | fixed | 8-adjudicate |
| frontier-18-d-6b-001 | thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-18-d-6b-002 | thm-two-metric-spaces-are-quasi-isometric-exactly-when-they-contain-bilipschitz-equivalent-separated-nets | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-18-d-6b-003 | word/path-metric citation cluster (`thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph`, `thm-the-path-metric-of-a-connected-simple-graph-is-a-metric`, `prop-the-word-metric-is-the-largest-left-invariant-metric-giving-every-generator-distance-at-most-one-from-the-identity`, `ex-the-integers-are-quasi-isometric-to-the-real-line`) | accuracy | citation-misattributed | facts-block | fixed | 6a-read |
| frontier-18-d-6b-004 | downstream quasi-isometry hierarchy/group/finiteness cluster (`R2-4` item set) | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-18-d-6b-008 | thm-a-set-weighted-limit-is-a-limit-over-a-category-of-elements | accuracy | citation-corrupted | facts-block | fixed | 6b-adjudicate |
| frontier-18-d-6b-009 | thm-the-constant-singleton-weight-recovers-an-ordinary-limit | accuracy | citation-corrupted | facts-block | fixed | 6b-adjudicate |
| frontier-18-d-6b-010 | cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements; ex-a-weighted-limit-computing-a-kernel-pair | accuracy | citation-corrupted | facts-block | fixed | 6b-adjudicate |
| frontier-18-d-6b-011 | ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two | accuracy | invalid-witness | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-012 | cex-a-special-p-group-that-is-not-extraspecial | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-013 | fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism | accuracy | citation-missing | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-014 | research/frontier-18-batch-2.coverage.json — Theorem 2.35 row for `thm-universal-property-of-the-central-product` | accuracy | citation-misattributed | coverage-row | fixed | 6b-adjudicate |
| frontier-18-d-6b-015 | lem-balls-in-a-connected-locally-finite-graph-are-finite | accuracy | false-or-overstrong-statement | statement | fixed | 6b-adjudicate |
| frontier-18-d-6b-016 | prop-right-translation-moves-every-point-of-a-word-metric-space-the-same-bounded-distance | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-017 | prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-018 | ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics | accuracy | arithmetic-error | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-019 | fs-all-infinite-finitely-generated-groups-are-quasi-isometric | accuracy | arithmetic-error | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-020 | ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-021 | ex-maximal-abelian-subgroups-of-the-dihedral-group-of-order-eight | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-022 | ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-023 | prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-18-d-6b-024 | prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing | accuracy | citation-missing | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-025 | prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups | accuracy | citation-misattributed | frontmatter | fixed | 6b-adjudicate |
| frontier-18-d-6b-026 | prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-18-d-6b-027 | batch-2 quasi-isometry definition restatements (`thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse`, `cor-quasi-isometries-are-exactly-the-coarsely-dense-quasi-isometric-embeddings`, `prop-a-metric-space-is-quasi-isometric-to-a-one-point-space-exactly-when-it-is-nonempty-of-finite-diameter`, `prop-the-quasi-isometry-group-is-a-group-and-quasi-isometric-spaces-have-isomorphic-quasi-isometry-groups`, `thm-quasi-isometry-is-an-equivalence-relation-on-metric-spaces`, `cor-a-bijective-quasi-isometry-between-finitely-generated-groups-is-a-bilipschitz-equivalence`, `fs-a-quasi-isometry-is-continuous-or-bijective`, `fs-all-infinite-finitely-generated-groups-are-quasi-isometric`, `ex-a-finite-index-subgroup-of-a-free-abelian-group-is-quasi-isometric-to-it`) | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| frontier-18-d-step8-001 | thm-a-central-product-of-extraspecial-p-groups-is-extraspecial | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-18-d-step8-002 | def-plus-and-minus-type-of-an-extraspecial-p-group | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-003 | ex-the-heisenberg-group-at-the-prime-two-is-the-dihedral-group-of-order-eight | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-004 | ex-a-generating-pair-decomposition-of-an-extraspecial-group-of-order-thirty-two | accuracy | citation-missing | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-005 | prop-an-automorphism-of-an-extraspecial-p-group-trivial-on-the-frattini-quotient-is-inner | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-006 | fs-the-commutator-pairing-needs-no-choice-of-a-central-generator | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-18-d-step8-007 | thm-classification-of-extraspecial-p-groups-for-odd-p | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-008 | def-special-and-extraspecial-p-groups | accuracy | citation-inflated | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-009 | lem-the-antidiagonal-subgroup-of-a-central-product-is-a-central-normal-subgroup | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-010 | prop-a-centre-fixing-automorphism-of-an-extraspecial-p-group-preserves-its-commutator-pairing | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-d-step8-011 | thm-an-extraspecial-p-group-is-an-internal-central-product-of-subgroups-of-order-p-cubed | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-012 | cor-an-extraspecial-p-group-is-a-product-of-two-maximal-abelian-subgroups | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-013 | prop-maximal-elementary-abelian-subgroups-distinguish-the-two-extraspecial-two-groups | accuracy | citation-misattributed | facts-block | fixed | 8-adjudicate |
| frontier-18-d-step8-016 | def-modular-group-of-order-p-cubed | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-017 | thm-classification-of-extraspecial-two-groups | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-018 | ex-the-two-extraspecial-groups-of-order-thirty-two | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-019 | lem-a-vertex-bijection-is-an-isometry-of-path-metrics-exactly-when-it-is-a-graph-isomorphism | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-d-step8-020 | thm-a-simple-graph-is-a-tree-exactly-when-every-two-vertices-are-joined-by-a-unique-path | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-021 | prop-a-cayley-graph-is-regular-and-is-locally-finite-exactly-when-its-defining-subset-is-finite | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-022 | lem-the-graph-notions-agree-with-the-published-finite-graph-theory | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-023 | def-word-length-with-respect-to-a-generating-set | accuracy | citation-missing | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-024 | lem-the-cayley-graph-of-a-finite-group-with-a-finite-generating-set-is-a-finite-simple-graph | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-025 | def-separated-net-in-a-metric-space | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-026 | def-quasi-isometry-type-of-a-finitely-generated-group | accuracy | citation-missing | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-027 | def-coarsely-dense-subset-and-quasi-isometry | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-028 | def-quasi-isometry-group-of-a-metric-space | accuracy | citation-missing | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-029 | thm-a-quasi-isometric-embedding-with-coarsely-dense-image-admits-a-quasi-inverse | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-031 | cex-an-infinite-generating-set-destroys-the-comparison-of-word-metrics | accuracy | false-or-overstrong-statement | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-032 | ex-two-generating-sets-of-a-dihedral-group | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-033 | def-quasi-geodesic-and-quasi-geodesic-metric-space | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-035 | fs-all-infinite-finitely-generated-groups-are-quasi-isometric | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-036 | def-end-and-coend | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-037 | cor-ends-commute-with-ends | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-18-d-step8-038 | thm-the-set-of-natural-transformations-is-an-end | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-039 | def-set-weighted-limit-and-weighted-colimit | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-040 | cor-set-weighted-limits-and-colimits-exist-over-a-small-index-category-in-a-complete-or-cocomplete-target | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-041 | def-power-and-copower-by-a-set | accuracy | false-or-overstrong-statement | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-042 | thm-representable-functors-carry-weighted-limits-to-weighted-limits | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-043 | rem-why-the-enriched-generalisation-cannot-stop-at-conical-limits | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-044 | ex-the-end-formula-checked-against-natural-transformations-on-a-small-diagram | accuracy | arithmetic-error | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-045 | ex-the-evaluation-family-is-dinatural | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-046 | thm-a-weighted-limit-is-an-end | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-18-d-step8-047 | ex-the-coend-of-a-hom-functor | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-18-d-step8-048 | thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor | accuracy | ill-typed-construction | proof-step | fixed | 8-adjudicate |
| frontier-18-d-step8-049 | def-word-length-with-respect-to-a-generating-set | accuracy | false-or-overstrong-statement | definition | fixed | 8-adjudicate |
| frontier-18-d-step8-050 | fs-all-infinite-finitely-generated-groups-are-quasi-isometric | accuracy | missing-choice-scope | proof-step | fixed | 8-adjudicate |

Grouped by class: accuracy 403.
Grouped by location: coverage-row 1; definition 30; facts-block 155; frontmatter 1; proof-step 119; remark 42; statement 46; title 9.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| claude-sonnet-4-6 | 116 | 111 | 5 | 0 |
| deepseek-v4-pro | 1106 | 761 | 344 | 1 |
| gpt-5.6-terra | 1106 | 545 | 561 | 0 |

Across 1106 paired text version(s): 498 agreed keep, 284 agreed reject, 323 split, and 1 contained a null response.
Adjudications: confirmed_fatal 530; confirmed_nonfatal 365; false_positive 16.

## Repeated repairs and pathway closure

No item was repaired more than once according to the touch ledger.
Pathway obligations closed: 9/9; categories: abstract-algebra, category-theory, combinatorics, complex-analysis, measure-theory, number-theory, real-analysis.

## Caveats

- Current paired completion is 754 of 796 items; the remaining 42 items rely on terminal-resolution receipts rather than ordinary paired DeepSeek+Terra completion.
- Of those 42 terminal resolutions, 30 ended as repaired and 12 as accepted-after-review; the 12 accepted-after-review items all sit on the divergence/Stokes real-analysis pair.
- Fatal capture skewed late in the run: 353 of 403 fatal rows were caught at 8-adjudicate rather than in the earlier reader/refuter stages.
- Citation fidelity remained the dominant defect family: 198 of 403 fatal rows were citation-family defects, and 155 fatal rows landed in facts blocks.
- Judge ledger totals include 116 historical claude-sonnet-4-6 rows retained as append-only evidence; current readiness depends on the deepseek+terra lineup plus terminal-resolution receipts.
- Under the current lineup, DeepSeek is the only cross-family lane; Terra agreement is operationally useful but not independent corroboration.

## Owner reading priorities

- Divergence/Stokes real-analysis pair, especially the 12 accepted-after-review terminal items: This is the highest-concentration residual-risk area: all 12 accepted-after-review terminal items are on the-divergence-theorem-and-classical-stokes or its examples page, and terminal-item fatal rows are concentrated there.
- Complex-analysis terminal cluster on the-winding-number-and-the-global-cauchy-theorem and holomorphic-functions-of-several-variables: These four pages carry 16 terminally resolved items, the largest non-real-analysis terminal cluster, and they also account for a large share of terminal-item fatal rows.
- Facts-block citation restatements on heavily repaired pages: Facts blocks carried 155 fatal rows, and citation-family defects totaled 198 of 403 fatals, so restated dependency clauses remain the likeliest place for a residual owner-visible miss.

## Workflow recommendations

1. Make facts-block citation fidelity a harder pre-judge gate at authoring or Step 6, especially against inflated and truncated paraphrases. (risk: low) — Targets the dominant fatal class before Step 8 and should reduce the largest source of adjudication churn. Evidence: Citation-family defects account for 198 of 403 fatal rows; 136 are citation-inflated, and 155 fatal rows land in facts blocks.
2. Run a focused postmortem on the 42 terminal-resolution items and turn the recurring page-family failures into targeted pre-Step-7 checks or reader prompt requirements. (risk: low) — Should reduce reliance on terminal closure and move more items back under ordinary paired completion. Evidence: Pairs complete is 754 of 796, leaving 42 terminal resolutions; 12 accepted-after-review items all cluster on the divergence/Stokes pair, and complex-analysis contributes another 16 terminal items.
3. When operationally feasible, prefer a genuinely cross-family second judge lane over the current same-family Terra lane. (risk: medium) — Would make split verdicts more informative and reduce dependence on a single independent lane during owner audit and adjudication. Evidence: The current lineup is deepseek+terra; DeepSeek is the only cross-family lane, while the run still produced 323 split paired versions and 911 adjudication rows.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
