# frontier-38-owner-30 — Step 9 owner report

The evidence packet closes frontier-38-owner-30 cleanly on the mechanical side: all 835 in-scope items of the 60-page, nine-category build carry exact verdicts from the configured judge set; every rejection was adjudicated (a minority confirmed fatal, a majority confirmed nonfatal, with a small false-positive tail); confirmed defects were fixed or narrowed; the one pathway brief was rewritten and closed; no deferrals or terminal resolutions remain; and the proof-layout gates pass on the recorded fingerprint. The remaining work is human: the owner's personal mathematical audit, the deliberate status:published changes, and deployment — the packet's verdict is publishable-pending-owner-approval, and this report changes nothing. The packet also shows where audit time pays: repair traffic clusters on a few pages (oriented and mod-two intersection numbers, Calderón–Zygmund and compact-group harmonic analysis, normal varieties, Sobolev traces), in a few defect families (statements, missing hypotheses and choice scope, computations, citations), in a long tail of twice-repaired items, and in a handful of claims closed by narrowing. I interpreted the packet and its named inputs only; no item was re-proved here, and any post-packet edit invalidates the hash-bound readiness state.

## What was built

- 60 pages and 835 items across 9 categories.
- Categories: algebraic-geometry, braid-groups, complex-analysis, differential-topology, fourier-analysis, lie-theory, pde, representation-theory, scheme-theory.
- Item kinds: corollary 38; counterexample 44; definition 113; example 100; false-statement 1; lemma 367; proposition 16; remark 15; theorem 141.

## Deferred from this run

No documented deferrals.

## Verification closure

- Judge lineup: sol61.
- Proof layout: 875 items, 3414 steps; separation and blue tags both passed on current inputs.
- Current judge verdicts complete: 835/835.
- Terminal resolutions after the 1-rejudge cap: 0.
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `e5079ab69939c50bedbc2c06b67632508ac7740d1f06c428b75383e9507f209c`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 478 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| f38-b15-braid-relation-prose | lem-artin-automorphisms-satisfy-the-braid-relations | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| f38-b15-cancellation-dichotomy | lem-artins-product-cancellation-dichotomy | accuracy | invalid-inference | statement | fixed | 5a-adjudicate |
| f38-b15-characterization-small-rank | thm-artins-characterization-of-the-braid-subgroup-of-aut-f-n | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| f38-b15-page-route | the-artin-action-on-a-free-group | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| f38-b15-partial-cut-domain | lem-a-standard-stem-arc-system-can-be-straightened-by-boundary-and-puncture-fixed-ambient-isotopy | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| f38-b15-peripheral-independence | def-peripheral-boundary-preserving-automorphism-of-f-n | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| f38-b15-shortening-composition | lem-an-extremal-cancellation-shortens-an-artin-substitution | accuracy | invalid-inference | statement | fixed | 5a-adjudicate |
| f38-b15-stem-title | lem-trivial-action-on-standard-meridians-fixes-the-stem-arc-system-up-to-isotopy | accuracy | false-or-overstrong-title | title | fixed | 5a-adjudicate |
| f38-b15-sufficiency-induction | thm-every-peripheral-boundary-preserving-free-group-automorphism-is-an-artin-automorphism | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38-b8-a2-root-count | ex-the-a2-bgg-resolution-with-six-verma-summands | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-b8-augmentation-generated-submodule | lem-the-bgg-augmentation-has-image-the-simple-module | accuracy | ill-typed-construction | contract-row | fixed | 5a-adjudicate |
| f38-b8-cover-length | def-bgg-bruhat-verma-sum-in-degree-k | accuracy | false-or-overstrong-statement | definition | fixed | 5a-adjudicate |
| f38-b8-page-computed-invariants | the-bgg-resolution | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| f38-b8-singular-regular-equivalence | cex-the-regular-bgg-complex-cannot-be-used-unchanged-at-a-singular-weight | accuracy | false-or-overstrong-statement | proof-step 4.1 | fixed | 5a-adjudicate |
| f38-b8-sl2-exponent | ex-the-sl2-bgg-resolution | accuracy | arithmetic-error | facts-block | fixed | 5a-adjudicate |
| f38-b8-standard-boundary | def-standard-induced-resolution-of-the-trivial-module | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-b8-surjectivity-zero | lem-surjectivity-modulo-n-minus-for-free-weight-generated-modules | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-b8-unsigned-degree | cex-unsigned-bruhat-edge-sums-need-not-square-to-zero | accuracy | ill-typed-claim | proof-step 1.1 | fixed | 5a-adjudicate |
| f38-b8-weak-base-endpoint | lem-weak-bgg-base-case-for-the-trivial-module | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-b8-weak-rank-zero | thm-weak-bgg-resolution | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b17-5a-history-a-generic-isotopy-of-links-has-only-reidemeister-singular-times | lem-a-generic-isotopy-of-links-has-only-reidemeister-singular-times | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b17-5a-history-a-positive-height-diagram-has-a-defect-region | lem-a-positive-height-diagram-has-a-defect-region | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b17-5a-history-a-smooth-isotopy-of-links-can-be-put-in-general-position | lem-a-smooth-isotopy-of-links-can-be-put-in-general-position | accuracy | missing-hypothesis | statement | narrowed | 5a-adjudicate |
| f38-owner30-b17-5a-history-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy | lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy | accuracy | false-or-overstrong-statement | statement | narrowed | 5a-adjudicate |
| f38-owner30-b17-5a-history-every-oriented-link-admits-a-regular-projection | lem-every-oriented-link-admits-a-regular-projection | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b17-5a-history-oriented-link-in-s-three-and-ambient-isotopy | def-oriented-link-in-s-three-and-ambient-isotopy | accuracy | ill-typed-construction | definition | fixed | 5a-adjudicate |
| f38-owner30-b17-5a-history-oriented-reidemeister-equivalence-theorem | thm-oriented-reidemeister-equivalence-theorem | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b17-5a-history-reducing-arc-and-yamada-vogel-reducing-move | def-reducing-arc-and-yamada-vogel-reducing-move | accuracy | ill-typed-construction | definition | narrowed | 5a-adjudicate |
| f38-owner30-b17-5a-nonbraid-ii-fig3 | lem-non-braid-like-reidemeister-moves-are-generated-by-braid-like-moves-and-reductions | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b23-5a-reader-1 | lem-complex-affine-group-comodule-local-finiteness | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b23-5a-reader-2 | thm-coordinate-ring-of-affine-action-is-locally-finite | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b25-5a-character-base | def-diagonalizable-group-and-character-module | accuracy | ill-typed-claim | definition | fixed | 5a-adjudicate |
| f38-owner30-b25-5a-rank-one-splitting | cor-tori-correspond-to-torsion-free-character-lattices | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-01 | def-reverse-row-deletion | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-02 | lem-hook-product-change-under-corner-removal | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-03 | lem-hook-product-branching-identity | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-04 | lem-row-insertion-and-reverse-deletion-are-inverse | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-05 | lem-row-insertion-and-reverse-deletion-are-inverse | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-06 | thm-hook-length-formula | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-07 | thm-robinson-schensted-correspondence | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-08 | thm-robinson-schensted-correspondence | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-09 | thm-rsk-correspondence-for-two-line-arrays | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-10 | cor-sum-of-squares-of-standard-tableau-numbers | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-11 | ex-empty-and-singleton-rsk-boundaries | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-12 | ex-hook-lengths-for-row-column-and-hook-shapes | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-13 | ex-hook-table-for-shape-three-two-one | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-14 | ex-rsk-insertion-and-reverse-deletion | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-15 | cor-involutions-are-counted-by-standard-tableaux | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-16 | thm-schensted-longest-increasing-and-decreasing-subsequence-theorem | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-17 | ex-rsk-for-involutions | accuracy | false-or-overstrong-title | title | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-18 | thm-hook-length-formula | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-19 | ex-hook-lengths-for-row-column-and-hook-shapes | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| f38-owner30-b9-5a-20 | ex-rsk-for-involutions | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-alpha-batch30-galois-title | lem-finite-etale-galois-refinements-and-quotients | accuracy | false-or-overstrong-title | title | narrowed | 5a-adjudicate |
| f38o30-alpha-batch30-hartogs | lem-punctured-hartogs-and-flat-base-change-for-finite-projectives | accuracy | missing-hypothesis | statement | narrowed | 5a-adjudicate |
| f38o30-alpha-batch30-hochschild | lem-finite-etale-separability-and-hochschild-contraction | accuracy | missing-hypothesis | statement | narrowed | 5a-adjudicate |
| f38o30-alpha-batch30-page-trivialization | etale-covers-and-the-etale-fundamental-group | accuracy | false-or-overstrong-statement | page-prose | narrowed | 5a-adjudicate |
| f38o30-alpha-batch30-tame-eisenstein | lem-tame-dvr-inertia-and-abhyankar-ramification-killing | accuracy | citation-inflated | proof-step 3.1 | fixed | 5a-adjudicate |
| f38o30-b26-additivity-coherence | cor-degree-additive-proper-curve | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| f38o30-b26-additivity-signs | cor-degree-additive-proper-curve | accuracy | arithmetic-error | proof-step | fixed | 5a-adjudicate |
| f38o30-b26-bilinearity-coherence | thm-surface-intersection-product-bilinear-and-symmetric | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| f38o30-b26-cone-cover | cex-intersection-pairing-needs-cartier-or-cycle-hypotheses | accuracy | missing-hypothesis | proof-step | fixed | 5a-adjudicate |
| f38o30-b26-cone-dimension | cex-intersection-pairing-needs-cartier-or-cycle-hypotheses | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| f38o30-b26-cone-length | cex-intersection-pairing-needs-cartier-or-cycle-hypotheses | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| f38o30-b26-integral-closed-subsets | lem-euler-characteristic-twist-integral-proper-curve | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| f38o30-b26-negative-twist-dimension-zero | cex-intersection-pairing-needs-cartier-or-cycle-hypotheses | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| f38o30-b26-plane-coherence | ex-intersection-pairing-on-p2 | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| f38o30-b26-projection-euler-k-morphism | lem-projection-formula-invertible-twist | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| f38o30-b26-restriction-coherence | thm-intersection-with-curve-as-degree-of-restriction | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| f38o30-b29-5a-page-dual-number-base | hilbert-functors-and-projective-hilbert-schemes-examples | accuracy | false-claim | page-summary | fixed | 5a-adjudicate |
| f38o30-b4-5a-atlas-distance-hypothesis | lem-fractional-boundary-norm-is-independent-of-atlas | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-atlas-kernel-direction | lem-fractional-boundary-norm-is-independent-of-atlas | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-boundary-cube-trace | cex-boundary-point-values-are-not-defined-by-an-lp-class | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-boundary-definition-p1-contract | def-fractional-sobolev-space-on-a-compact-c-one-boundary | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38o30-b4-5a-boundary-values-choice | cex-boundary-point-values-are-not-defined-by-an-lp-class | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-chart-support-density | lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-density-cutoff-integrability | lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-density-translation-integrability | lem-smooth-compactly-supported-functions-are-dense-in-slobodeckij-spaces | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-directional-undefined-averages | lem-coordinate-direction-form-of-the-slobodeckij-seminorm | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-fractional-bound-integrability-contract | lem-half-space-trace-has-the-fractional-slobodeckij-bound | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38o30-b4-5a-fractional-bound-zero-trace-contract | lem-half-space-trace-has-the-fractional-slobodeckij-bound | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| f38o30-b4-5a-hardy-choice | lem-one-dimensional-hardy-inequality-on-the-half-line | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-hardy-sharpness | lem-one-dimensional-hardy-inequality-on-the-half-line | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-interval-choice | ex-trace-of-an-ac-sobolev-function-on-an-interval | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-interval-cutoff-support | ex-trace-of-an-ac-sobolev-function-on-an-interval | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-jump-chart-margin | cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-jump-full-integral | cex-lp-boundary-data-need-not-lie-in-the-h-one-trace-range | accuracy | arithmetic-error | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-kernel-chart-smoothness | thm-kernel-of-the-trace-is-w-one-p-zero | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-lift-choice | thm-half-space-lift-by-normal-mollification | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-lift-scale-derivative | thm-half-space-lift-by-normal-mollification | accuracy | arithmetic-error | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-lift-tangential-bound | thm-half-space-lift-by-normal-mollification | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-local-trace-domain | lem-trace-commutes-with-smooth-boundary-cutoffs-and-charts | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| f38o30-b4-5a-normal-derivative-domain | thm-sobolev-gauss-green-formula-on-c-one-domains | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-page-range-summary | sobolev-traces-and-zero-boundary-values | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| f38o30-b4-5a-partition-norm-equality | thm-lp-trace-operator-on-a-bounded-c-one-domain | accuracy | arithmetic-error | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-remark-weighted-necessity | rem-endpoint-and-rough-domain-trace-limitations | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| f38o30-b4-5a-right-inverse-nonuniqueness | thm-bounded-right-inverse-for-the-sobolev-trace | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-sharp-noncompactness | thm-sharp-trace-theorem-for-w-one-p | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-sharp-strictness | thm-sharp-trace-theorem-for-w-one-p | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| f38o30-b4-5a-weight-local-integrability | def-fractional-slobodeckij-space-on-euclidean-space | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| f38o30-b4-5a-zero-extension-choice | ex-zero-trace-versus-zero-extension | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-character-groups-and-elementary-lca-duals-1 | character-groups-and-elementary-lca-duals | accuracy | missing-hypothesis | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-character-groups-and-elementary-lca-duals-2 | character-groups-and-elementary-lca-duals | accuracy | false-or-overstrong-statement | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-character-groups-and-elementary-lca-duals-examples-1 | character-groups-and-elementary-lca-duals-examples | accuracy | false-or-overstrong-statement | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-a-finite-cyclic-group-1 | ex-pontryagin-dual-of-a-finite-cyclic-group | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-euclidean-space-1 | ex-pontryagin-dual-of-euclidean-space | accuracy | false-boundary-disposition | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-euclidean-space-2 | ex-pontryagin-dual-of-euclidean-space | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-euclidean-space-3 | ex-pontryagin-dual-of-euclidean-space | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-circle-is-the-integers-1 | ex-pontryagin-dual-of-the-circle-is-the-integers | accuracy | ill-typed-construction | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-circle-is-the-integers-2 | ex-pontryagin-dual-of-the-circle-is-the-integers | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-circle-is-the-integers-3 | ex-pontryagin-dual-of-the-circle-is-the-integers | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-integers-is-the-circle-1 | ex-pontryagin-dual-of-the-integers-is-the-circle | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-ex-pontryagin-dual-of-the-integers-is-the-circle-2 | ex-pontryagin-dual-of-the-integers-is-the-circle | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-character-evaluation-pairing-is-jointly-continuous-1 | lem-character-evaluation-pairing-is-jointly-continuous | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup-1 | lem-circle-neighbourhood-arc-contains-no-nontrivial-subgroup | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-compact-open-character-group-operations-are-continuous-1 | lem-compact-open-character-group-operations-are-continuous | accuracy | ill-typed-construction | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-compact-open-character-group-operations-are-continuous-2 | lem-compact-open-character-group-operations-are-continuous | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-continuous-characters-of-the-real-line-are-exponentials-1 | lem-continuous-characters-of-the-real-line-are-exponentials | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-continuous-characters-of-the-real-line-are-exponentials-2 | lem-continuous-characters-of-the-real-line-are-exponentials | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-dual-homomorphisms-are-continuous-and-functorial-1 | lem-dual-homomorphisms-are-continuous-and-functorial | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-dual-homomorphisms-are-continuous-and-functorial-2 | lem-dual-homomorphisms-are-continuous-and-functorial | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-dual-identity-neighbourhood-is-compact-1 | lem-dual-identity-neighbourhood-is-compact | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-dual-identity-neighbourhood-is-compact-2 | lem-dual-identity-neighbourhood-is-compact | accuracy | citation-inflated | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-duals-of-finite-products-and-discrete-direct-sums-1 | lem-duals-of-finite-products-and-discrete-direct-sums | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-pointwise-limits-of-characters-are-characters-1 | lem-pointwise-limits-of-characters-are-characters | accuracy | false-or-overstrong-title | title | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-pointwise-limits-of-characters-are-characters-2 | lem-pointwise-limits-of-characters-are-characters | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-pointwise-limits-of-characters-are-characters-3 | lem-pointwise-limits-of-characters-are-characters | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-lem-unit-circle-is-a-compact-metrizable-topological-group-1 | lem-unit-circle-is-a-compact-metrizable-topological-group | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals-1 | thm-compact-groups-have-discrete-duals-and-discrete-groups-have-compact-duals | accuracy | citation-misattributed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-thm-dual-of-an-lca-group-is-locally-compact-abelian-1 | thm-dual-of-an-lca-group-is-locally-compact-abelian | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b10-thm-dual-of-an-lca-group-is-locally-compact-abelian-2 | thm-dual-of-an-lca-group-is-locally-compact-abelian | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-bordism-model-set | def-unoriented-and-oriented-bordism-groups | accuracy | ill-typed-construction | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-boundary-restriction-domain | lem-boundary-stable-tangent-splits-off-a-trivial-line | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-cylinder-outgoing-face | thm-disjoint-union-makes-bordism-classes-abelian-groups | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-cylinder-product-domain | lem-cylinders-give-reflexivity-of-cobordism | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-disjoint-union-boundary-domain | def-unoriented-and-oriented-bordism-groups | accuracy | citation-inflated | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-disk-chart-and-boundary | ex-a-circle-is-the-boundary-of-a-disk | accuracy | invalid-inference | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-disk-nonempty-orientations | ex-a-circle-is-the-boundary-of-a-disk | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-disk-surface-wording | ex-a-circle-is-the-boundary-of-a-disk | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-equivalence-proper-class | thm-smooth-cobordism-is-an-equivalence-relation | accuracy | ill-typed-construction | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-gluing-boundary-type | lem-collar-gluing-and-corner-smoothing-give-transitivity | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-gluing-choice | lem-collar-gluing-and-corner-smoothing-give-transitivity | accuracy | missing-choice-scope | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-gluing-hausdorff | lem-collar-gluing-and-corner-smoothing-give-transitivity | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-page-choice-scope | smooth-cobordism-relations-groups-and-rings | accuracy | missing-choice-scope | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-page-positive-unit | smooth-cobordism-relations-groups-and-rings | accuracy | missing-hypothesis | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pants-chart-coordinate | ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles | accuracy | invalid-inference | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pants-normal-tangent | ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pants-paired-signs | ex-the-pair-of-pants-is-a-cobordism-realizing-addition-of-circles | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pontryagin-boundary-cw-domain | prop-oriented-boundaries-have-zero-pontryagin-numbers | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pontryagin-choice-use | prop-oriented-boundaries-have-zero-pontryagin-numbers | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pontryagin-cw-domain | def-pontryagin-number-of-a-closed-oriented-manifold | accuracy | citation-inflated | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-pontryagin-whole-boundary-contract | prop-oriented-boundaries-have-zero-pontryagin-numbers | accuracy | false-or-overstrong-statement | contract-row | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-product-boundary-atlas | lem-product-boundary-formula-for-oriented-manifolds | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-projective-plane-connected-duality | cex-real-projective-two-space-is-not-unoriented-null-cobordant | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-ring-oriented-diffeomorphism | thm-cartesian-product-makes-bordism-a-graded-ring | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-ring-positive-unit | thm-cartesian-product-makes-bordism-a-graded-ring | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-signed-point-diffeomorphism | ex-signed-points-give-the-oriented-zero-bordism-invariant | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-sw-choice-use | prop-boundaries-have-zero-stiefel-whitney-numbers | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-sw-whole-boundary-contract | prop-boundaries-have-zero-stiefel-whitney-numbers | accuracy | false-or-overstrong-statement | contract-row | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b13-zero-bordism-collar-injectivity | prop-zero-dimensional-bordism-groups | accuracy | invalid-witness | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-centralizer-source | thm-relative-centralizer-is-generated-by-the-previous-center-and-last-jucys-murphy-element | accuracy | citation-corrupted | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-centre-interpolation | thm-symmetric-polynomials-in-jucys-murphy-elements-give-the-center | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-chain-centre-remark | thm-relative-centralizer-is-generated-by-the-previous-center-and-last-jucys-murphy-element | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-content-labels | def-content-vector-of-a-standard-tableau | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-elementary-boundary | thm-elementary-symmetric-jucys-evaluation-is-a-cycle-count-class-sum | accuracy | missing-case | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-involution-boundary | lem-symmetric-group-conjugation-to-inverse-within-the-preceding-group | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-jm-domain | def-jucys-murphy-elements-of-the-symmetric-group-algebra | accuracy | missing-hypothesis | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-local-algebra | lem-jucys-murphy-local-relations | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-modular-overclaim | cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-modular-prefix | cex-ordinary-jucys-murphy-projection-formulas-do-not-survive-content-collision | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-orthogonal-rescaling | thm-young-orthogonal-form-from-seminormal-rescaling | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-s3-unity | ex-jucys-murphy-spectrum-and-projectors-for-s3 | accuracy | arithmetic-error | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-s4-classes | ex-elementary-jucys-murphy-class-sums-through-s4 | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-seminormal-line | thm-young-seminormal-form-from-jucys-murphy-eigenlines | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-seminormal-normalization | thm-young-seminormal-form-from-jucys-murphy-eigenlines | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-seminormal-reverse | thm-young-seminormal-form-from-jucys-murphy-eigenlines | accuracy | false-computation | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-two-one-column-matrix | ex-seminormal-and-orthogonal-block-for-shape-two-one | accuracy | false-computation | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-two-one-convention | ex-seminormal-and-orthogonal-block-for-shape-two-one | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b19-two-one-unit-scale | ex-seminormal-and-orthogonal-block-for-shape-two-one | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-a-page-normal-sign | blowups-exceptional-divisors-and-strict-transforms | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-ambient-center | blowups-exceptional-divisors-and-strict-transforms-examples | accuracy | citation-inaccurate | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-incidence-locator | lem-affine-point-blowup-pushforward-vanishing | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-normal-sign | blowups-exceptional-divisors-and-strict-transforms-examples | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-placement | lem-acyclic-direct-image-cohomology-comparison | accuracy | ill-formed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-point-cohomology-locator | lem-blowup-point-pushforward-vanishing | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-power-locator | lem-blowup-power-of-ideal-same | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-rational-source | blowups-exceptional-divisors-and-strict-transforms-examples | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-single-component | thm-blowup-closed-immersion-transform-universal | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-splitting-field | lem-plane-curve-multiplicity-transform-chart | accuracy | missing-hypothesis | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-surface-hypothesis | rem-blowup-does-not-mean-delete-point | accuracy | missing-hypothesis | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-b2-total-transform-citation | lem-total-transform-strict-plus-exceptional-multiplicity | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cex-bijective-birational-not-isomorphism-cusp-reprise | cex-bijective-birational-not-isomorphism-cusp-reprise | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cex-bijective-birational-not-isomorphism-cusp-reprise-choice | cex-bijective-birational-not-isomorphism-cusp-reprise | accuracy | missing-choice-scope | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cex-finite-fibres-not-finite-open-immersion | cex-finite-fibres-not-finite-open-immersion | accuracy | missing-choice-scope | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cex-normalization-not-injective-node | cex-normalization-not-injective-node | accuracy | missing-choice-scope | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cor-bijective-birational-to-normal-isomorphism-under-finiteness | cor-bijective-birational-to-normal-isomorphism-under-finiteness | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cor-normalization-resolves-singularities-of-curves | cor-normalization-resolves-singularities-of-curves | accuracy | missing-hypothesis | statement | narrowed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cor-normalization-unique-up-to-unique-isomorphism | cor-normalization-unique-up-to-unique-isomorphism | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cor-normalization-unique-up-to-unique-isomorphism-reducible-uniqueness | cor-normalization-unique-up-to-unique-isomorphism | accuracy | missing-case | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-cor-rational-function-no-poles-codimension-one-regular | cor-rational-function-no-poles-codimension-one-regular | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-def-conductor-normalization | def-conductor-normalization | accuracy | false-claim | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-def-finite-morphism-classical-affine-local | def-finite-morphism-classical-affine-local | accuracy | ill-typed-claim | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-def-unibranch-point-classical | def-unibranch-point-classical | accuracy | false-or-overstrong-statement | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-conductor-cusp-semigroup | ex-conductor-cusp-semigroup | accuracy | false-or-overstrong-title | title | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-conductor-cusp-semigroup-choice | ex-conductor-cusp-semigroup | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-conductor-cusp-semigroup-constant-term | ex-conductor-cusp-semigroup | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-normal-affine-space | ex-normal-affine-space | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-normalization-cusp | ex-normalization-cusp | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-normalization-cusp-choice | ex-normalization-cusp | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-normalization-cusp-module-generation | ex-normalization-cusp | accuracy | false-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-normalization-cusp-support | ex-normalization-cusp | accuracy | false-claim | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-ex-normalization-node-choice | ex-normalization-node | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-examples-1 | normal-varieties-normalization-and-zariskis-main-theorem-examples | accuracy | false-claim | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-examples-2 | normal-varieties-normalization-and-zariskis-main-theorem-examples | accuracy | missing-hypothesis | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-examples-3 | normal-varieties-normalization-and-zariskis-main-theorem-examples | accuracy | false-claim | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-av7-relative-integral-closure-finite-affine-charts | lem-av7-relative-integral-closure-finite-affine-charts | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-conductor-ideal-common-ideal | lem-conductor-ideal-common-ideal | accuracy | unlicensed-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-conductor-ideal-common-ideal-choice | lem-conductor-ideal-common-ideal | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-finite-birational-to-normal-is-isomorphism | lem-finite-birational-to-normal-is-isomorphism | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-normality-local-on-affine-opens | lem-normality-local-on-affine-opens | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-normalization-commutes-with-restriction-open | lem-normalization-commutes-with-restriction-open | accuracy | false-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-lem-normalization-commutes-with-restriction-open-reducible-case | lem-normalization-commutes-with-restriction-open | accuracy | missing-case | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-page-projective-curve | normal-varieties-normalization-and-zariskis-main-theorem | accuracy | missing-hypothesis | page-summary | narrowed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-rem-normalization-not-resolution-higher-dimension | rem-normalization-not-resolution-higher-dimension | accuracy | missing-choice-scope | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-thm-normal-functions-codimension-one-intersection | thm-normal-functions-codimension-one-intersection | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-thm-normal-variety-regular-in-codimension-one | thm-normal-variety-regular-in-codimension-one | accuracy | unlicensed-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-thm-normalization-glues-variety-pole-divisor-citation | thm-normalization-glues-variety | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-thm-normalization-universal-property | thm-normalization-universal-property | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-1-thm-normalization-universal-property-source-irreducibility | thm-normalization-universal-property | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-basis-invariance | thm-regular-representation-peter-weyl-decomposition | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-coefficient-dimension | ex-peter-weyl-for-a-profinite-group | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-coefficient-span | ex-peter-weyl-for-a-profinite-group | accuracy | ill-typed-construction | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-coefficient-transport | thm-l2-peter-weyl-orthonormal-basis | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-conjugate-order | lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations | accuracy | arithmetic-error | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-continuous-evaluation | lem-compact-group-matrix-coefficients-separate-points | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-convolution-side | peter-weyl-theory-for-general-compact-groups | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-cutoff-support | lem-compact-group-matrix-coefficients-separate-points | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-empty-tail | def-hilbert-direct-sum-of-unitary-representations | accuracy | ill-typed-claim | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-empty-threshold | cor-each-vector-in-a-compact-representation-has-countable-isotypic-support | accuracy | false-boundary-disposition | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-integrability | lem-compact-convolution-operators-commute-with-right-translations | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-integral-one | lem-l1-action-of-a-unitary-representation | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-integral-scope | cex-compact-peter-weyl-is-not-a-direct-sum-decomposition-for-noncompact-regular-representations | accuracy | false-or-overstrong-statement | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-isotypic-orthogonality | thm-arbitrary-unitary-representations-of-compact-groups-decompose-discretely | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-isotypic-page | peter-weyl-theory-for-general-compact-groups | accuracy | false-or-overstrong-statement | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-left-block | thm-regular-representation-peter-weyl-decomposition | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-normalized-fact | lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-product-measurable | lem-compact-convolution-operators-commute-with-right-translations | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-regular-block-fact | cor-each-vector-in-a-compact-representation-has-countable-isotypic-support | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-representative-finiteness | lem-a-nonzero-unitary-representation-of-a-compact-group-has-a-finite-dimensional-subrepresentation | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-scalar-bound | lem-l1-action-of-a-unitary-representation | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-square-modulus-page | peter-weyl-theory-for-general-compact-groups-examples | accuracy | ill-typed-claim | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-11-u-zero | lem-continuous-finite-dimensional-representations-of-profinite-groups-factor-through-finite-quotients | accuracy | citation-inflated | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cex-geometric-cardinality-is-not-homotopy-invariant | cex-geometric-cardinality-is-not-homotopy-invariant | accuracy | invalid-witness | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cex-noncompact-intersections-can-escape-during-a-homotopy | cex-noncompact-intersections-can-escape-during-a-homotopy | accuracy | invalid-witness | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary | cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary | accuracy | unlicensed-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary-title | cor-a-null-cobordant-cycle-has-zero-intersection-with-a-disjoint-boundary | accuracy | false-or-overstrong-title | title | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cor-negative-expected-dimension-generic-intersections-are-empty | cor-negative-expected-dimension-generic-intersections-are-empty | accuracy | unlicensed-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cor-oriented-intersection-reduces-to-mod-two-intersection | cor-oriented-intersection-reduces-to-mod-two-intersection | accuracy | false-claim | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-cor-oriented-intersection-reduces-to-mod-two-intersection-classification-choice | cor-oriented-intersection-reduces-to-mod-two-intersection | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-local-oriented-intersection-sign | def-local-oriented-intersection-sign | accuracy | false-computation | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-mod-two-intersection-number | def-mod-two-intersection-number | accuracy | missing-hypothesis | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-mod-two-intersection-number-classification-choice | def-mod-two-intersection-number | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-mod-two-intersection-number-definition-ownership-correction | def-mod-two-intersection-number | accuracy | missing-map | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-mod-two-intersection-number-two-map-definition | def-mod-two-intersection-number | accuracy | missing-map | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-oriented-intersection-number | def-oriented-intersection-number | accuracy | missing-map | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-def-oriented-intersection-number-classification-choice | def-oriented-intersection-number | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-ex-degree-as-intersection-with-a-regular-value | ex-degree-as-intersection-with-a-regular-value | accuracy | false-computation | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-ex-latitude-and-meridian-intersections-on-the-torus | ex-latitude-and-meridian-intersections-on-the-torus | accuracy | citation-inflated | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-ex-two-projective-lines-have-one-mod-two-intersection | ex-two-projective-lines-have-one-mod-two-intersection | accuracy | citation-inflated | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-ex-two-projective-lines-have-one-mod-two-intersection-saturation | ex-two-projective-lines-have-one-mod-two-intersection | accuracy | invalid-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-boundary-of-a-compact-one-manifold-has-even-cardinality | lem-boundary-of-a-compact-one-manifold-has-even-cardinality | accuracy | invalid-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-boundary-of-a-compact-one-manifold-has-even-cardinality-metric-choice | lem-boundary-of-a-compact-one-manifold-has-even-cardinality | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-compact-transverse-complementary-intersections-are-finite | lem-compact-transverse-complementary-intersections-are-finite | accuracy | citation-inaccurate | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-compact-transverse-complementary-intersections-are-finite-fibre-identification | lem-compact-transverse-complementary-intersections-are-finite | accuracy | ill-typed-construction | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign | lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign | accuracy | false-computation | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign-zero-rays | lem-direct-sum-factor-swap-scales-oriented-bases-by-a-sign | accuracy | false-computation | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count | lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count | accuracy | ill-typed-construction | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count-classification-choice | lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs | lem-oriented-boundary-of-an-intersection-trace-has-opposite-end-signs | accuracy | ill-typed-construction | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-overlap-of-arc-length-parametrizations-of-a-one-manifold | lem-overlap-of-arc-length-parametrizations-of-a-one-manifold | accuracy | invalid-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-lem-preimage-orientation-agrees-with-the-local-intersection-sign | lem-preimage-orientation-agrees-with-the-local-intersection-sign | accuracy | ill-typed-construction | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-page-12-oriented-and-mod-two-intersection-numbers | oriented-and-mod-two-intersection-numbers | accuracy | false-claim | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-page-12-oriented-and-mod-two-intersection-numbers-perturbation-domain | oriented-and-mod-two-intersection-numbers | accuracy | missing-hypothesis | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-prop-two-map-intersection-as-a-diagonal-preimage | prop-two-map-intersection-as-a-diagonal-preimage | accuracy | false-computation | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-reader-12-1 | oriented-and-mod-two-intersection-numbers-examples | accuracy | false-claim | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-reader-12-2 | oriented-and-mod-two-intersection-numbers-examples | accuracy | false-claim | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-reader-12-3 | thm-strong-whitney-approximation-by-transverse-maps | accuracy | unlicensed-inference | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact | rem-properness-can-replace-compactness-only-when-the-intersection-trace-is-compact | accuracy | missing-hypothesis | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-mod-two-intersection-number-is-homotopy-invariant | thm-mod-two-intersection-number-is-homotopy-invariant | accuracy | unlicensed-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-mod-two-intersection-number-is-homotopy-invariant-classification-choice | thm-mod-two-intersection-number-is-homotopy-invariant | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-mod-two-intersection-number-is-homotopy-invariant-endpoint-order | thm-mod-two-intersection-number-is-homotopy-invariant | accuracy | ill-typed-construction | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-oriented-intersection-number-is-homotopy-invariant | thm-oriented-intersection-number-is-homotopy-invariant | accuracy | unlicensed-inference | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-oriented-intersection-number-is-homotopy-invariant-ambient-compactness | thm-oriented-intersection-number-is-homotopy-invariant | accuracy | false-claim | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-oriented-intersection-number-is-homotopy-invariant-classification-choice | thm-oriented-intersection-number-is-homotopy-invariant | accuracy | missing-choice-scope | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-transverse-preimage-for-manifolds-with-boundary | thm-transverse-preimage-for-manifolds-with-boundary | accuracy | missing-case | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-12-thm-transverse-preimage-for-manifolds-with-boundary-zero-face | thm-transverse-preimage-for-manifolds-with-boundary | accuracy | false-boundary-disposition | statement-and-proof | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-14-metric-smoothness | def-disk-bundle-sphere-bundle-and-thom-space | accuracy | missing-hypothesis | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-14-ode-time-regularity | thm-smooth-dependence-of-ode-solutions-on-parameters | accuracy | missing-hypothesis | statement | narrowed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-14-smash-quotient | lem-stabilizing-a-normal-bundle-suspends-its-thom-space | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-18-ring-matrix | thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-18-specht-matrix | thm-frobenius-characteristic-sends-specht-characters-to-schur-functions | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D01 | def-intersection-multiplicity-of-closed-subschemes | accuracy | ill-typed-claim | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D02 | lem-increasing-sequence-of-coherent-subsheaves-stabilizes | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D03 | lem-point-blowup-of-integral-curve-is-finite | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D04 | lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D05 | cex-finite-normalization-does-not-make-the-curve-regular-before-blowups | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D07 | cex-finite-normalization-does-not-make-the-curve-regular-before-blowups | accuracy | contract-mismatch | contract-row | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D08 | thm-embedded-snc-resolution-of-reduced-curve-on-regular-surface | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D09 | ex-node-resolved-by-one-blowup | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D10 | point-blowup-resolution-on-arbitrary-regular-surfaces | accuracy | missing-hypothesis | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D11 | point-blowup-resolution-on-arbitrary-regular-surfaces | accuracy | invalid-inference | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D12 | point-blowup-resolution-on-arbitrary-regular-surfaces | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D13 | point-blowup-resolution-on-arbitrary-regular-surfaces | accuracy | missing-hypothesis | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-27-D14 | lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-28-unit-boundary | thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-analytic-coefficients | thm-positive-time-spatial-analyticity-of-heat-kernel-solutions | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-analytic-endpoint | thm-positive-time-spatial-analyticity-of-heat-kernel-solutions | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-analytic-indices | thm-positive-time-spatial-analyticity-of-heat-kernel-solutions | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-analytic-radius | thm-positive-time-spatial-analyticity-of-heat-kernel-solutions | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-bounded-majorant | thm-heat-cauchy-solution-for-bounded-continuous-data | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-derivative-gaussian | lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-derivative-interval | lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-diffusivity | rem-heat-kernel-conventions-and-diffusivity | accuracy | false-computation | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-evolution-ae | def-heat-evolution-of-initial-data | accuracy | false-or-overstrong-statement | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-forced-dilation | ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling | accuracy | false-computation | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-forced-essential-sup | ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-fourier-hunter-citation | ex-fourier-transform-of-the-heat-kernel | accuracy | citation-inaccurate | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-fourier-normalization-claim | ex-fourier-transform-of-the-heat-kernel | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-gaussian-choice | ex-gaussian-data-remain-gaussian-under-heat-flow | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-generator-pointwise | lem-heat-semigroup-derivative-at-zero-on-compactly-supported-smooth-data | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-indicator-choice | ex-heat-flow-of-an-indicator-function | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-indicator-primitive | ex-heat-flow-of-an-indicator-function | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-kernel-indices | lem-heat-kernel-normalisation-scaling-and-derivatives | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-lp-zero-kernel | thm-heat-cauchy-solution-for-lp-data | accuracy | undefined-notation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-moments-indices | lem-first-and-second-moments-of-the-heat-kernel | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-order-young | cor-heat-flow-is-order-preserving-and-lp-contractive | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-poisson-wave-scope | rem-heat-kernel-conventions-and-diffusivity | accuracy | missing-hypothesis | remark | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-polynomial-quadratic-sum | ex-heat-evolution-of-affine-and-quadratic-polynomials | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-published-ball-citations | lem-euclidean-balls-have-positive-finite-lebesgue-measure | accuracy | citation-inaccurate | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-selfsimilar-choice | ex-self-similar-heat-kernel-solution | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-3-spatial-infinity | thm-spatial-derivative-estimates-for-heat-flow | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-01 | def-dyadic-cube-in-rn-all-generations | accuracy | missing-choice-scope | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-02 | def-maximal-truncated-singular-integral | accuracy | missing-choice-scope | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-03 | lem-dyadic-mihlin-kernels-have-uniform-integral-hormander-control | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-04 | lem-radially-decreasing-kernels-are-dominated-by-the-maximal-function | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-05 | cex-calderon-zygmund-strong-lone-bound-fails | accuracy | invalid-witness | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-07 | lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-07-2 | lem-calderon-zygmund-lp-range-splits-into-interpolation-and-duality | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-08 | lem-cotlar-inequality-for-maximal-truncations | accuracy | ill-typed-claim | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-09 | lem-cz-bad-part-is-integrable-away-from-expanded-cubes | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-10 | lem-dyadic-cubes-all-generations-partition-and-nesting | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-12 | cex-calderon-zygmund-operators-need-not-map-linfinity-to-linfinity | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-13 | cex-size-without-cancellation-does-not-give-a-principal-value-operator | accuracy | invalid-witness | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-13-2 | cex-size-without-cancellation-does-not-give-a-principal-value-operator | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-13-3 | cex-size-without-cancellation-does-not-give-a-principal-value-operator | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-14 | lem-maximal-dyadic-cubes-at-height-lambda | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-16 | ex-riesz-transform-as-a-standard-calderon-zygmund-operator | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-17 | ex-second-derivative-newtonian-kernels-fit-the-cz-framework | accuracy | citation-inflated | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-17-2 | ex-second-derivative-newtonian-kernels-fit-the-cz-framework | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-18 | ex-calderon-zygmund-decomposition-of-an-interval-indicator | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-18-2 | ex-calderon-zygmund-decomposition-of-an-interval-indicator | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-19 | thm-calderon-zygmund-operator-has-weak-type-one-one | accuracy | missing-choice-scope | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-20 | thm-calderon-zygmund-singular-integrals-are-bounded-on-lp | accuracy | citation-inaccurate | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-20-2 | thm-calderon-zygmund-singular-integrals-are-bounded-on-lp | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-23 | rem-calderon-zygmund-endpoints-are-weak-lone-and-bmo-not-strong-lone-or-linfinity | accuracy | false-or-overstrong-title | title | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-24 | thm-maximal-truncations-are-weak-one-one-and-strong-lp | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-24-2 | thm-maximal-truncations-are-weak-one-one-and-strong-lp | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-24-3 | thm-maximal-truncations-are-weak-one-one-and-strong-lp | accuracy | false-computation | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-24-5 | thm-maximal-truncations-are-weak-one-one-and-strong-lp | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-24-6 | thm-maximal-truncations-are-weak-one-one-and-strong-lp | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-25 | thm-mihlin-fourier-multiplier-theorem | accuracy | citation-inflated | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-25-2 | thm-mihlin-fourier-multiplier-theorem | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-25-3 | thm-mihlin-fourier-multiplier-theorem | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-26 | cor-principal-value-truncations-converge-almost-everywhere | accuracy | unlicensed-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-5-27 | rem-mihlin-does-not-assert-strong-endpoint-bounds | accuracy | false-or-overstrong-statement | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-ambient-projectivity-citation | ex-truncation-projectivity-does-not-mean-block-projectivity | accuracy | citation-corrupted | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-ext-resolution-hypotheses | lem-standard-costandard-hom-and-ext-vanishing | accuracy | citation-truncated | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-ext-reversed-order | lem-standard-costandard-hom-and-ext-vanishing | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-facet-real-signs | def-dot-action-facets-and-single-wall-translation-data | accuracy | ill-typed-construction | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-facet-upper-closure | def-dot-action-facets-and-single-wall-translation-data | accuracy | false-or-overstrong-statement | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-fitting-abstract-category | lem-finite-length-objects-decompose-into-indecomposables | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-flagged-7-1 | lem-finite-length-objects-decompose-into-indecomposables | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-flagged-7-2 | cex-a-verma-module-need-not-be-projective-in-the-whole-block | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-nonsplit-flag-citation | cex-a-projective-verma-flag-need-not-split | accuracy | citation-corrupted | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-tensor-duality | lem-tensoring-a-projective-with-a-finite-dimensional-module-is-projective | accuracy | false-or-overstrong-statement | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-tensor-identity | lem-tensoring-with-a-finite-dimensional-module-preserves-verma-flags | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-wall-dot-orbit-citation | lem-single-wall-tensor-weight-exclusion | accuracy | citation-corrupted | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-wall-stabilizer | def-dot-action-facets-and-single-wall-translation-data | accuracy | false-or-overstrong-statement | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch-7-weight-norm-equality | lem-weight-norm-bound-for-finite-dimensional-simple-modules | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch20-blaschke-L7 | lem-nevanlinna-blaschke-factorization | accuracy | false-or-overstrong-statement | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch20-page-sum | analytic-hardy-spaces-and-canonical-factorisation-examples | accuracy | arithmetic-error | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-batch20-sup-mean-L1 | lem-nevanlinna-sup-mean-criterion | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-gate-mihlin-page-weak-endpoint | calderon-zygmund-decomposition-and-singular-integrals | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b1-normal-functions-empty-height-one-index | thm-normal-functions-codimension-one-intersection | accuracy | false-boundary-disposition | contract-row | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b2-a-page-placement-instance | blowups-exceptional-divisors-and-strict-transforms | accuracy | ill-formed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b2-a-page-surface-scope | blowups-exceptional-divisors-and-strict-transforms | accuracy | missing-hypothesis | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b2-contact-chart-local-regularity | lem-blowup-lowers-contact-order | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b2-off-center-full-inverse-image | lem-blowup-isomorphism-off-center | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b2-point-pushforward-dvr-case | lem-blowup-point-pushforward-vanishing | accuracy | missing-case | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-5a-owner-b2-uniqueness-admissible-model | cor-blowup-unique-up-to-unique-isomorphism | accuracy | missing-hypothesis | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-deck-quotient | lawrence-krammer-bigelow-and-linearity | accuracy | false-or-overstrong-statement | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-complete-cancelling-sixteen-term-witness | ex-a-fork-noodle-pairing-computation | accuracy | invalid-witness | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-cover-existence-and-classification | def-lawrence-krammer-bigelow-cover | accuracy | citation-missing | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-exact-end-relative-prime-images | thm-the-integral-lkb-module-is-free-of-rank-n-choose-two | accuracy | ill-typed-claim | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-exact-nonzero-weighted-witness | cex-ordinary-intersection-number-alone-does-not-give-the-lkb-pairing | accuracy | invalid-witness | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-full-cyclic-cover-digon-case | lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel | accuracy | invalid-inference | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-laurent-convolution | lem-a-multiple-of-a-fork-surface-has-a-closed-compact-replacement | accuracy | ill-typed-claim | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-one-cycle-and-cover-lifting-domain | lem-braids-lift-to-the-lkb-cover-and-act-lambda-linearly | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-opposite-noodle-return-ends | def-lexicographic-order-on-fork-noodle-deck-monomials | accuracy | ill-typed-construction | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-proper-arc-domain-and-endpoint-sectors | lem-arcs-in-a-punctured-disk-have-disjointness-detecting-minimal-positions | accuracy | ill-typed-construction | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-rank-and-false-refutation | cex-a-linear-representation-need-not-be-faithful | accuracy | invalid-refutation | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-historical-total-exponent-and-discriminant | def-lkb-two-variable-covering-homomorphism | accuracy | false-or-overstrong-statement | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-inventory | lawrence-krammer-bigelow-and-linearity | accuracy | ill-formed | frontmatter | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-pure-rank | lawrence-krammer-bigelow-and-linearity-examples | accuracy | missing-hypothesis | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-relative-domains | lem-closed-lkb-basis-surfaces-have-the-three-required-topological-types-and-factors | accuracy | ill-typed-claim | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-scalar-rank | lawrence-krammer-bigelow-and-linearity | accuracy | missing-hypothesis | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-b16-unit-diagonal | lawrence-krammer-bigelow-and-linearity | accuracy | false-or-overstrong-statement | page-summary | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-chart-direction | lem-modular-quotient-local-charts | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-compactification-typing | def-compactified-level-one-modular-curve | accuracy | reader-repair | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-elliptic-lifts | ex-elliptic-points-of-the-modular-group | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-lambda-slit | ex-modular-lambda-biholomorphism-onto-the-slit-plane | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-legendre | lem-weierstrass-j-invariant-of-the-legendre-normal-form | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-page-scalar-kernel | level-one-modular-forms-and-the-j-invariant-examples | accuracy | false-or-overstrong-statement | page-prose | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-six-values | lem-lambda-transformation-laws | accuracy | reader-repair | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-tessellation | ex-standard-fundamental-domain-tessellation | accuracy | reader-repair | statement | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-trace | lem-gamma-2-is-torsion-free-and-has-no-elliptic-points | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-uniformization | thm-j-uniformizes-the-level-one-modular-curve | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-b21-valence-sign | lem-valence-boundary-arc-computation | accuracy | reader-repair | proof-step | fixed | 5a-adjudicate |
| frontier-38-owner-30-step5-representation-hardy-not-norm-proof | def-analytic-hardy-space-disc | accuracy | unsupported-inference | definition | fixed | 5a-adjudicate |
| frontier-38-owner-30-step5-representation-rational-uniqueness-proof | ex-factorization-of-a-rational-function | accuracy | missing-hypothesis | facts-block | fixed | 5a-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u1-def-conductor-normalization | def-conductor-normalization | accuracy | ill-typed-claim | definition | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u1-def-normal-point-and-normal-variety | def-normal-point-and-normal-variety | accuracy | missing-choice-scope | definition | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u10-ex-pontryagin-dual-of-euclidean-space | ex-pontryagin-dual-of-euclidean-space | accuracy | ill-typed-construction | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u10-lem-dual-homomorphisms-are-continuous-and-functorial | lem-dual-homomorphisms-are-continuous-and-functorial | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u11-cor-parseval-and-fourier-inversion-for-compact-groups | cor-parseval-and-fourier-inversion-for-compact-groups | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u11-lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations | lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u11-thm-uniform-peter-weyl-density | thm-uniform-peter-weyl-density | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u12-thm-intersection-number-under-factor-interchange | thm-intersection-number-under-factor-interchange | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u12-thm-oriented-intersection-number-is-homotopy-invariant | thm-oriented-intersection-number-is-homotopy-invariant | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u15-lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians | lem-the-oriented-boundary-loop-represents-the-ordered-product-of-the-standard-meridians | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u15-lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis | lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u16-lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel | lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u16-lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion | lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u17-lem-a-smooth-isotopy-of-links-can-be-put-in-general-position | lem-a-smooth-isotopy-of-links-can-be-put-in-general-position | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u17-lem-braid-like-moves-can-be-moved-to-height-zero | lem-braid-like-moves-can-be-moved-to-height-zero | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u17-lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves | lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u2-def-strict-transform-closed-subscheme | def-strict-transform-closed-subscheme | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u2-lem-blowup-isomorphism-off-center | lem-blowup-isomorphism-off-center | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u20-def-inner-singular-inner-and-outer-functions | def-inner-singular-inner-and-outer-functions | accuracy | citation-inaccurate | definition | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u24-lem-nonaffine-centre-is-stable-jet-kernel | lem-nonaffine-centre-is-stable-jet-kernel | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u24-lem-nonaffine-commutative-torsor-norm-map | lem-nonaffine-commutative-torsor-norm-map | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u24-lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties | lem-nonaffine-exact-group-sequence-affine-smooth-connected-properties | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u24-lem-nonaffine-high-frobenius-smooth-image | lem-nonaffine-high-frobenius-smooth-image | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u28-rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case | rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case | accuracy | missing-hypothesis | remark | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u29-lem-hilbert-regularity-independent-of-ambient-dimension | lem-hilbert-regularity-independent-of-ambient-dimension | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u3-ex-heat-evolution-of-affine-and-quadratic-polynomials | ex-heat-evolution-of-affine-and-quadratic-polynomials | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u30-lem-tame-dvr-inertia-and-abhyankar-ramification-killing | lem-tame-dvr-inertia-and-abhyankar-ramification-killing | accuracy | missing-case | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u5-def-calderon-zygmund-kernel-and-principal-value-operator | def-calderon-zygmund-kernel-and-principal-value-operator | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u5-ex-riesz-transform-as-a-standard-calderon-zygmund-operator | ex-riesz-transform-as-a-standard-calderon-zygmund-operator | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise | cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-cex-knapp-rules-out-extension-below-the-tomas-exponent | cex-knapp-rules-out-extension-below-the-tomas-exponent | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-def-fourier-restriction-and-adjoint-extension-operators | def-fourier-restriction-and-adjoint-extension-operators | accuracy | invalid-inference | definition | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-ex-knapp-cap-and-tube-volume-calculation | ex-knapp-cap-and-tube-volume-calculation | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-lem-smooth-euclidean-hypersurface-graph-and-localization | lem-smooth-euclidean-hypersurface-graph-and-localization | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-lem-sphere-finite-graph-charts-and-surface-density | lem-sphere-finite-graph-charts-and-surface-density | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-lem-stationary-phase-decay-for-spherical-surface-measure | lem-stationary-phase-decay-for-spherical-surface-measure | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u6-thm-knapp-necessary-condition-for-spherical-ltwo-restriction | thm-knapp-necessary-condition-for-spherical-ltwo-restriction | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u7-cor-injectives-have-costandard-filtrations | cor-injectives-have-costandard-filtrations | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u7-lem-hom-from-projectives-counts-simple-composition-factors | lem-hom-from-projectives-counts-simple-composition-factors | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u7-lem-hom-to-costandards-counts-verma-flag-factors | lem-hom-to-costandards-counts-verma-flag-factors | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u8-lem-bruhat-covers-give-unique-verma-embeddings | lem-bruhat-covers-give-unique-verma-embeddings | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u8-thm-weak-bgg-resolution | thm-weak-bgg-resolution | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-initial-r1-u9-thm-robinson-schensted-correspondence | thm-robinson-schensted-correspondence | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-repeat-r1-u11-tensor-coefficient-extension | lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-repeat-r1-u16-lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion | lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion | accuracy | citation-inaccurate | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-repeat-r1-u17-lem-braid-like-moves-can-be-moved-to-height-zero | lem-braid-like-moves-can-be-moved-to-height-zero | accuracy | invalid-inference | proof-step | fixed | 7-adjudicate |
| frontier-38-owner-30-step7-repeat-r1-u17-lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves-rebuttal | lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves | accuracy | invalid-inference | proof-step | false-positive | 7-adjudicate |
| frontier-38-owner-30-step7-repeat-r1-u20-norm-power | lem-hardy-radial-means-are-monotone | accuracy | false-or-overstrong-statement | statement | fixed | 7-adjudicate |

Grouped by class: accuracy 478.
Grouped by location: contract-row 21; definition 30; facts-block 57; frontmatter 31; page-prose 23; page-summary 14; proof-step 166; proof-step 1.1 1; proof-step 3.1 1; proof-step 4.1 1; remark 16; statement 72; statement-and-proof 38; title 7.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-6.1-sol | 942 | 824 | 118 | 0 |

Across 942 text version(s) with configured-judge evidence: 942 complete model set(s), 824 all keep, 118 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 47; confirmed_nonfatal 60; false_positive 11.

## Repeated repairs and pathway closure

Items repaired more than once: rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case (3); cex-boundary-point-values-are-not-defined-by-an-lp-class (2); cex-calderon-zygmund-strong-lone-bound-fails (2); cex-divergent-blaschke-sum (2); cex-fourier-restriction-is-not-defined-on-lp-equivalence-classes-pointwise (2); cex-knapp-rules-out-extension-below-the-tomas-exponent (2); cor-blowup-unique-up-to-unique-isomorphism (2); cor-hilbert-transform-is-bounded-on-lp (2); cor-injectives-have-costandard-filtrations (2); cor-parseval-and-fourier-inversion-for-compact-groups (2); cor-riesz-transforms-are-bounded-on-lp (2); def-conductor-normalization (2); def-diagonalizable-group-and-character-module (2); def-disk-bundle-sphere-bundle-and-thom-space (2); def-divisor-power-sums-sigma-k (2); def-dot-action-facets-and-single-wall-translation-data (2); def-fourier-restriction-and-adjoint-extension-operators (2); def-jucys-murphy-elements-of-the-symmetric-group-algebra (2); def-markov-conjugation-and-stabilization-moves (2); def-normal-point-and-normal-variety (2); def-oriented-link-in-s-three-and-ambient-isotopy (2); def-outer-induction-product-for-symmetric-group-characters (2); def-planar-isotopy-of-link-diagrams (2); ex-empty-and-singleton-rsk-boundaries (2); ex-heat-evolution-of-affine-and-quadratic-polynomials (2); ex-heat-flow-of-an-indicator-function (2); ex-knapp-cap-and-tube-volume-calculation (2); ex-modular-lambda-biholomorphism-onto-the-slit-plane (2); ex-pontryagin-dual-of-euclidean-space (2); ex-riesz-transform-as-a-standard-calderon-zygmund-operator (2); ex-rsk-insertion-and-reverse-deletion (2); ex-second-derivative-newtonian-kernels-fit-the-cz-framework (2); ex-self-similar-heat-kernel-solution (2); ex-thom-space-of-the-mobius-line-bundle (2); ex-two-projective-lines-have-one-mod-two-intersection (2); lem-a-smooth-isotopy-of-links-can-be-put-in-general-position (2); lem-an-l-two-class-invariant-in-modulus-under-all-translations-of-the-line-is-zero (2); lem-based-homotopies-transverse-to-the-zero-section-give-normal-cobordisms (2); lem-blowup-isomorphism-off-center (2); lem-blowup-multiplicity-euler-characteristic-drop (2); lem-blowup-plane-origin-incidence-equations (2); lem-boundary-of-a-compact-one-manifold-has-even-cardinality (2); lem-braid-isotopic-closed-braids-are-conjugate (2); lem-braid-like-moves-can-be-moved-to-height-zero (2); lem-cm-quotient-of-regular-local-ring-ext-concentration (2); lem-compact-group-matrix-coefficients-separate-points (2); lem-compact-open-topology-on-a-discrete-domain-is-pointwise (2); lem-coordinate-direction-form-of-the-slobodeckij-seminorm (2); lem-direct-sums-and-tensor-products-of-finite-dimensional-unitary-representations (2); lem-discriminant-is-a-nonvanishing-cusp-form (2); lem-dual-homomorphisms-are-continuous-and-functorial (2); lem-dyadic-cubes-all-generations-partition-and-nesting (2); lem-euler-characteristic-twist-integral-proper-curve (2); lem-extremal-fork-noodle-terms-have-one-sign-and-cannot-cancel (2); lem-finite-etale-algebra-module-presentation-and-rank (2); lem-first-and-second-moments-of-the-heat-kernel (2); lem-free-homotopy-classes-of-loops-are-conjugacy-classes (2); lem-frobenius-characteristic-preserves-outer-products (2); lem-gamma-2-is-torsion-free-and-has-no-elliptic-points (2); lem-heat-kernel-normalisation-scaling-and-derivatives (2); lem-hilbert-universal-scheme-theoretic-flattening (2); lem-hom-to-costandards-counts-verma-flag-factors (2); lem-jucys-murphy-local-relations (2); lem-level-one-cusp-chart-and-compactness (2); lem-lkb-deleting-the-last-puncture-gives-a-saturated-absolute-homology-inclusion (2); lem-projection-formula-invertible-twist (2); lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves (2); lem-smooth-euclidean-hypersurface-graph-and-localization (2); lem-sphere-finite-graph-charts-and-surface-density (2); lem-stabilizing-a-normal-bundle-suspends-its-thom-space (2); lem-stationary-phase-decay-for-spherical-surface-measure (2); lem-tame-dvr-inertia-and-abhyankar-ramification-killing (2); prop-collapse-pullback-of-the-thom-class-is-the-poincare-dual (2); rem-endpoint-and-rough-domain-trace-limitations (2); rem-normalization-not-resolution-higher-dimension (2); thm-calderon-zygmund-operator-has-weak-type-one-one (2); thm-intersection-number-under-factor-interchange (2); thm-knapp-necessary-condition-for-spherical-ltwo-restriction (2); thm-oriented-intersection-number-is-homotopy-invariant (2); thm-q-expansion-principle-at-the-cusp (2); thm-robinson-schensted-correspondence (2); thm-surface-intersection-product-bilinear-and-symmetric (2); thm-uniform-peter-weyl-density (2).
Pathway obligations closed: 1/1; categories: complex-analysis.

## Caveats

- The verdict is genuinely pending: the packet records zero workflow-owned blockers but leaves three owner actions — personal mathematical audit, deliberate status:published changes, push/deployment — and this report neither performs nor authorizes any publication-state change.
- All of the run's verdict rows come from a single configured judge model on the frozen context; the packet's own adjudications show the judge errs in both directions (rejections resolved to confirmed fatal, confirmed nonfatal, and false-positive outcomes), so a kept verdict is an internal check rather than a certificate of mathematical truth.
- Readiness is hash-bound: the verdict ties to the packet's content_sha256 (d20b9fc5…), so any edit made after this packet — including a small proof polish — invalidates the current readiness state and requires the prescribed re-check path rather than a silent patch.
- Repairs crossed the judged boundary: the packet's defect ledger records fixed or narrowed repairs to already-published items outside the 835-item judged inventory (thm-smooth-dependence-of-ode-solutions-on-parameters, thm-strong-whitney-approximation-by-transverse-maps, lem-euclidean-balls-have-positive-finite-lebesgue-measure), and none of these carries a verdict row in this run's judge ledger; their certification rests on the separately recorded owner-approved repair protocol, which the owner should confirm before treating readiness as covering them.
- Several claims survive by narrowing, not by refutation: for those items the evidence supports only the narrowed form, and the removed strength may have been genuinely false — the ODE theorem's ledger note documents a historical counterexample that still stands against the old hypothesis. Its consumers were re-checked, but the other narrowed statements need the same consumer-level confirmation.
- Citation accuracy and hypothesis/choice-scope were the largest defect families, and they are the least visible to automated gates: a repaired citation can still misstate its source, and missing choice or boundary hypotheses can survive rendering, layout and judge passes. Primary-source spot checks remain the only reliable control.
- The earlier build summary split ten valid YAML-quoted kind values from their plain equivalents because the report counted source syntax. An owner helper corrected the report to decode kinds with the shared YAML parser. This was a reporting error; the quoted scalar syntax does not establish literal quote characters or a badge or contract defect in the items. The regenerated evidence and report must use the corrected counts.

## Owner reading priorities

- Page oriented-and-mod-two-intersection-numbers and its item cluster (thm-oriented-intersection-number-is-homotopy-invariant, def-mod-two-intersection-number, thm-intersection-number-under-factor-interchange): Defect traffic concentrates on this page, with repairs touching statements, computations, choice scope and inferences in mod-two/oriented intersection theory — sign, orientation and factor-interchange conventions are exactly where a repaired item can still mean the wrong thing.
- thm-smooth-dependence-of-ode-solutions-on-parameters and the other out-of-inventory repaired items (thm-strong-whitney-approximation-by-transverse-maps, lem-euclidean-balls-have-positive-finite-lebesgue-measure): These published items were edited during this run but sit outside the 835-item judged inventory and carry no judge verdict in the run's ledger; the owner should confirm the recorded authorization and certification for each edit (for the ODE theorem, checkpoint ode-joint-smoothness) before treating readiness as covering them.
- The narrowed-statement set — lem-a-smooth-isotopy-of-links-can-be-put-in-general-position, lem-punctured-hartogs-and-flat-base-change-for-finite-projectives, cor-normalization-resolves-singularities-of-curves, lem-finite-etale-galois-refinements-and-quotients: Each was closed by weakening rather than by refuting the reviewer; the audit question is whether the narrowed hypothesis still discharges every commissioned dependent, which requires reading the consumers and not just the repaired statement.
- rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case, together with the packet's twice-repaired item list: This remark is the only item repaired three times in the run, and repeated passes are where subtle defects hide; re-read the final text and its hypotheses cold rather than reading the repair diffs.
- The Fourier and harmonic-analysis cluster: calderon-zygmund-decomposition-and-singular-integrals, character-groups-and-elementary-lca-duals, peter-weyl-theory-for-general-compact-groups: Citation-inaccurate, citation-inflated and citation-misattributed rows pile up here alongside choice-scope repairs on duals and restriction maps; source verification is something judge and render gates cannot do, so this is high-yield owner reading.
- thm-maximal-truncations-are-weak-one-one-and-strong-lp and thm-positive-time-spatial-analyticity-of-heat-kernel-solutions: Each is a magnet for independent failure modes — false computations, overstrong statements, ill-typed claims and invalid inferences — so a cold end-to-end read of both is the highest-yield single-item audit in the packet.
- Braid-group pages oriented-links-braid-closures-and-markov-equivalence and lawrence-krammer-bigelow-and-linearity: Statement narrowing, ill-formed content and invalid inferences cluster here, and the one adjudicated false positive in the step-7 batch concerns Markov-move factorization — a boundary where judge noise and genuine gaps look alike, so the owner should arbitrate by reading.

## Workflow recommendations

1. Perform the personal mathematical audit in the order of the priorities above, reading each named item's final statement and complete proof rather than its repair history, and testing boundary cases (empty, zero, endpoints) and both directions of any iff on sight. (risk: low) — Converts engine-side closure into the only kind of confidence a reader-facing library needs before the status flip; the named clusters are chosen to maximise the chance of finding any remaining false or overstrong claim per hour of audit. Evidence: The packet's defect ledger shows the repaired defect mass sits in statements, hypotheses and choice scope, computations and inferences across the pages named above, so a cold read there is where the residual mathematical risk lives.
2. Confirm and, if needed, route certification for the out-of-inventory repairs: verify that thm-smooth-dependence-of-ode-solutions-on-parameters, thm-strong-whitney-approximation-by-transverse-maps and lem-euclidean-balls-have-positive-finite-lebesgue-measure each carry current judge evidence or an explicitly authorized certification through the owner-approved repair protocol before publication. (risk: medium) — Prevents publishing edits to already-published items whose evidence sits outside this run's 835-item judge coverage — the likeliest place for an evidence gap that the readiness verdict does not itself close. Evidence: The packet lists these three subjects as fixed or narrowed defects, but they are absent from the run's judged inventory and the run's judge ledger contains no verdict rows for them; the ODE note records an owner checkpoint (ode-joint-smoothness) as the basis of closure.
3. Spot-check the load-bearing citations against primary sources in the citation-heavy clusters (Fourier and harmonic analysis; the nonaffine and algebraic-geometry pages), giving priority to citations a reader would follow to justify a theorem or a non-obvious step. (risk: medium) — Citations were repaired to match sources at scale, but only source reading can confirm the repaired citations still support the exact propositions they attach to — the failure mode automated gates cannot see. Evidence: The packet's defect subclass counts are dominated by citation inaccuracies, inflations and misattributions, with further rows on corrupted or truncated citations, spread across proof steps and facts blocks.
4. For every statement closed by narrowing, trace its direct consumers and confirm each still satisfies the narrowed hypothesis; replicate the ODE theorem's recorded consumer audit for the remaining narrowed items. (risk: medium) — A narrowed published claim is safe only if no dependent silently relied on the removed strength; this is the highest-consequence repair class because it changed claims that were already shipped. Evidence: The packet records closures by narrowing, including the ODE theorem whose note explains that the historical counterexample remains valid against the old hypothesis and that its actual direct consumers were re-checked against the narrowed form.
5. Re-read the twice-repaired items from their current files (starting with rem-smooth-projective-locally-free-duality-is-the-ag-lie-special-case), checking that the later repair did not overwrite the earlier one or reintroduce the original defect. (risk: low) — Repair churn is where new errors enter; a focused hour on these items buys protection exactly where the process has already wobbled once. Evidence: The packet's repeated-repairs list shows a long tail of items repaired twice and one item repaired three times.
6. Confirm that regenerated evidence and the rendered owner report use the corrected YAML-decoded kind counts, with all 835 items classified once. (risk: low) — Keeps the owner report consistent with valid item metadata after the reporting parser correction; no item normalization is required by this finding. Evidence: An owner helper inspected all 835 scoped item carriers with the shared YAML parser and identified ten valid quoted scalar spellings that the previous source-text regex split into separate count labels.
7. Close out in protocol order: after ranks 1-4 are resolved, make the deliberate status:published changes and deploy; if the audit finds a defect in a judge-kept item or confirms a judge-rejected one, use the prescribed repair and re-judge path and record the evidence rather than editing ad hoc. (risk: low) — Turns publishable-pending-owner-approval into a published frontier with its evidence trail intact, and keeps judge noise from being silently absorbed in either direction. Evidence: The packet records the three remaining owner actions, a closed adjudication set with a false-positive tail, and a readiness verdict explicitly conditional on owner approval.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
