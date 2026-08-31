# frontier-26 — Step 10 owner report

The evidence packet supports `publishable-pending-owner-approval`: workflow-owned closure is complete, mathematical coverage is closed through current verdicts plus terminal session resolutions, and there is no repeated-repair residue. The remaining judgment is owner-side: inspect the late accepted-after-review or narrowed items, confirm the rewritten pathways, then decide whether to apply `status: published` changes and deploy the exact audited tree.

## What was built

- 28 pages and 384 items across 10 categories.
- Categories: category-theory, combinatorics, commutative-algebra, complex-analysis, computability-theory, differential-geometry, homological-algebra, linear-algebra, measure-theory, number-theory.
- Item kinds: corollary 28; counterexample 15; definition 59; example 66; false-statement 26; lemma 41; proposition 45; remark 17; theorem 87.

## Verification closure

- Judge lineup: terra.
- Current judge verdicts complete: 418/441.
- Terminal owner/session resolutions after the 2-cycle cap: 23 (cex-the-cfl-pumping-lemma-characterizes-cfls, cor-ideal-divisibility-reverses-inclusion-dedekind, def-effective-encoding-of-turing-machines, def-generalized-nfa, def-grade-and-relative-minimal-polynomial-of-a-start-vector, def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-universal-turing-machine, def-vector-subbundle, fs-cfg-equivalence-is-decidable-by-normalization, fs-the-cfl-pumping-lemma-characterizes-cfls, lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set, lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs, lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade, lem-step-by-step-interpreter-for-machine-codes, prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle, prop-cones-preserve-chain-homotopy-equivalences-of-arrows, prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector, thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization, thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade, thm-mac-lane-strictification, thm-multitape-machines-have-one-tape-simulations, thm-one-way-and-two-way-tapes-are-equivalent, thm-stay-put-moves-can-be-eliminated).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `bb1e52bdcb86f4f1552919c421f19569b624e33d4faaba6842063da1d121ad35`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 270 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| f26-b-ref7-01 | prop-cones-preserve-chain-homotopy-equivalences-of-arrows | accuracy | false-claim | Statement | fixed | 6b-adjudicate |
| f26-b-ref9-01 | def-smooth-vector-bundle-rank-fibre-and-trivial-bundle | accuracy | false-claim | Definition | fixed | 6b-adjudicate |
| f26-b-ref9-02 | fs-a-fibrewise-linear-continuous-bundle-map-is-automatically-smooth | accuracy | unlicensed-inference | Statement and Refutation | fixed | 6b-adjudicate |
| f26-b-ref9-03 | cor-every-smooth-manifold-admits-a-riemannian-metric | accuracy | missing-hypothesis | title-and-statement | fixed | 6b-adjudicate |
| f26-b-ref9-04 | ex-the-tangent-and-cotangent-bundles-as-vector-bundles | accuracy | missing-hypothesis | title-and-statement | fixed | 6b-adjudicate |
| f26-b-ref9-05 | rem-the-hairy-ball-theorem-for-even-dimensional-spheres | accuracy | false-claim | Remark | fixed | 6b-adjudicate |
| f26-b-t6-02 | cor-coherence-follows-from-freeness | accuracy | unsupported-inference | proof-step 2.1 | fixed | 6a-read |
| f26-b-t6-14 | thm-mac-lane-coherence-in-the-canonical-map-form | accuracy | ill-typed-claim | statement-and-proof | fixed | 6a-read |
| f26-b-t6-19 | thm-the-word-category-is-the-free-monoidal-category-on-one-generator | accuracy | unsupported-universal-property | statement-and-proof | fixed | 6a-read |
| f26-b-t7-01 | def-mapping-cylinder-of-a-chain-map | accuracy | false-claim | Definition | fixed | 6a-read |
| f26-b-t7-04 | prop-the-quotient-of-the-mapping-cylinder-by-its-source-is-the-mapping-cone | accuracy | false-claim | proof-step | fixed | 6a-read |
| f26-b-t7-05 | thm-a-chain-map-is-a-homotopy-equivalence-exactly-when-its-cone-is-contractible | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-b-t7-06 | thm-a-chain-map-is-a-quasi-isomorphism-exactly-when-its-cone-is-acyclic | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-b-t7-07 | thm-the-mapping-cylinder-factors-a-chain-map | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-b-t9-02 | ex-the-tautological-line-bundle-over-real-projective-space | accuracy | arithmetic-error | verification step 1.1 | fixed | 6a-read |
| f26-b-t9-03 | lem-every-vector-in-a-fibre-extends-to-a-compactly-supported-smooth-section | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-c-ref2-01 | cor-hermitian-simple-eigenpair-derivative-simplifications | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| f26-c-ref2-02 | prop-ritz-residual-formula-for-an-arnoldi-ritz-pair | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| f26-c-ref2-03 | thm-arnoldi-reduces-gmres-to-a-small-hessenberg-least-squares-problem | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| f26-c-ref4-01 | def-analytic-continuation-along-a-path | accuracy | missing-hypothesis | definition | fixed | 6b-adjudicate |
| f26-c-ref4-02 | thm-end-germ-of-path-continuation-is-independent-of-the-chain | accuracy | false-claim | statement | fixed | 6b-adjudicate |
| f26-c-ref4-03 | thm-uniqueness-of-analytic-continuation | accuracy | false-claim | statement | fixed | 6b-adjudicate |
| f26-c-ref4-04 | def-complete-analytic-function | accuracy | ill-formed | definition | fixed | 6b-adjudicate |
| f26-c-ref4-05 | thm-monodromy-theorem | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| f26-c-ref4-07 | ex-the-geometric-series-has-only-one-singular-boundary-point | accuracy | citation-misattributed | facts-block | fixed | 6b-adjudicate |
| f26-c-ref4-08 | thm-circle-of-convergence-contains-a-singular-point | accuracy | citation-misattributed | facts-block | fixed | 6b-adjudicate |
| f26-c-ref4-09 | thm-pringsheim-theorem | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| f26-c-t2-04 | thm-derivative-of-matrix-inversion | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-c-t2-06 | thm-directional-derivative-of-a-simple-positive-singular-value | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-c-t3-02 | rem-lyapunov-inequality-is-equivalent-to-log-convexity-of-p-to-log-norm | accuracy | false-or-overstrong-statement | remark | fixed | 6a-read |
| f26-c-t3-03 | thm-equality-case-in-minkowski-inequality | accuracy | missing-case | statement | fixed | 6a-read |
| f26-c-t3-08 | thm-lyapunov-interpolation-inequality-for-l-p-norms | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-c-t3-09 | thm-minkowski-inequality-for-integrals | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-c-t4-01 | cor-single-valued-continuation-on-simply-connected-domains | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| f26-c-t4-02 | def-singular-boundary-point-and-natural-boundary | accuracy | false-claim | definition | fixed | 6a-read |
| f26-c-t4-04 | lem-refinement-of-analytic-continuation-chains | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-A8-a-001 | cor-ideal-divisibility-reverses-inclusion-dedekind | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-002 | cor-ideals-in-a-dedekind-domain-are-two-generated | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-003 | thm-principal-divisor-exact-sequence | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-004 | thm-dedekind-pid-class-group-characterisation | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-005 | ex-semilocal-dedekind-domain-is-a-pid | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-006 | ex-divisor-of-a-fractional-ideal | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-007 | cor-ideal-divisibility-reverses-inclusion-dedekind | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-008 | cor-ideals-in-a-dedekind-domain-are-two-generated | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-009 | thm-principal-divisor-exact-sequence | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-010 | thm-dedekind-pid-class-group-characterisation | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-011 | ex-semilocal-dedekind-domain-is-a-pid | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-012 | ex-divisor-of-a-fractional-ideal | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-26-A8-a-013 | cor-ideal-divisibility-reverses-inclusion-dedekind | accuracy | citation-inflated | facts-block | fixed | 8-rejudge |
| frontier-26-A8-c-001 | def-calligraphic-l-p-on-a-measure-space | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-26-A8-c-002 | def-compatible-left-and-right-eigenvectors-for-a-simple-eigenvalue | accuracy | ill-typed-claim | definition | fixed | 8-adjudicate |
| frontier-26-A8-c-003 | def-condition-number-of-a-simple-eigenvalue | accuracy | ill-formed | definition | fixed | 8-adjudicate |
| frontier-26-A8-c-004 | def-grade-and-relative-minimal-polynomial-of-a-start-vector | accuracy | ill-formed | definition | fixed | 8-adjudicate |
| frontier-26-A8-c-005 | def-real-frechet-derivative-on-real-and-complex-matrix-spaces | accuracy | ill-typed-claim | definition | fixed | 8-adjudicate |
| frontier-26-A8-c-006 | ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-26-A8-c-007 | ex-finite-counting-measure-on-n-points-recovers-rn-p-norms | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-008 | ex-indicator-of-the-rationals-has-zero-essential-supremum-but-pointwise-supremum-one | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-26-A8-c-009 | ex-k-to-the-minus-a-membership-in-ell-p | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-010 | ex-logarithm-continuation-around-the-unit-circle-shifts-by-two-pi-i | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-26-A8-c-011 | ex-matrix-free-gmres-for-a-sparse-operator | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-26-A8-c-012 | ex-square-root-continuation-around-the-origin-changes-sign | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-26-A8-c-013 | fs-every-l-p-cauchy-sequence-converges-pointwise-almost-everywhere | accuracy | ill-typed-claim | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-014 | prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-015 | prop-lucky-arnoldi-breakdown-is-equivalent-to-krylov-invariance | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-016 | rem-covering-maps-among-complete-analytic-functions | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-26-A8-c-017 | rem-finite-counting-measure-holder-and-cauchy-schwarz-agree-with-published-finite-inequalities | accuracy | citation-inaccurate | remark | fixed | 8-adjudicate |
| frontier-26-A8-c-018 | rem-finite-counting-measure-minkowski-agrees-with-the-published-finite-theorem | accuracy | citation-inflated | remark | fixed | 8-adjudicate |
| frontier-26-A8-c-019 | rem-schwarz-reflection-as-analytic-continuation | accuracy | missing-hypothesis | remark | fixed | 8-adjudicate |
| frontier-26-A8-c-020 | thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-021 | thm-monodromy-theorem | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-26-A8-c-022 | thm-riemann-surface-of-the-logarithm | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-26-A8-c-r1-001 | def-grade-and-relative-minimal-polynomial-of-a-start-vector | accuracy | missing-hypothesis | definition | fixed | 8-rejudge |
| frontier-26-A8-c-r1-002 | prop-krylov-subspace-is-the-polynomial-image-of-the-start-vector | accuracy | missing-hypothesis | statement | fixed | 8-rejudge |
| frontier-26-A8-c-r1-003 | thm-arnoldi-produces-an-orthonormal-krylov-basis-and-upper-hessenberg-factorization | accuracy | citation-truncated | facts-block | fixed | 8-rejudge |
| frontier-26-b-step8-001 | def-normal-and-conormal-bundles-of-an-embedded-submanifold | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-26-b-step8-002 | def-the-category-of-right-module-endofunctors | accuracy | ill-formed | definition | fixed | 8-adjudicate |
| frontier-26-b-step8-003 | def-vector-subbundle | accuracy | ill-formed | definition | fixed | 8-adjudicate |
| frontier-26-b-step8-004 | ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-005 | ex-the-tangent-bundle-of-the-circle-is-trivial | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-006 | ex-the-tautological-line-bundle-over-real-projective-space | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-007 | ex-the-word-category-on-words-of-length-three | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-26-b-step8-008 | fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting | accuracy | invalid-refutation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-009 | fs-every-diagram-in-a-monoidal-category-commutes | accuracy | invalid-refutation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-010 | fs-every-monoidal-category-is-isomorphic-to-a-strict-one | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-26-b-step8-011 | fs-the-mapping-cone-differential-needs-no-minus-sign | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-012 | fs-the-mapping-cylinder-factorization-is-a-model-category-factorization | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-26-b-step8-013 | prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-014 | prop-cones-preserve-chain-homotopy-equivalences-of-arrows | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-015 | prop-normal-and-conormal-bundles-are-smooth-vector-bundles | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-016 | rem-strictification-gives-equivalence-and-never-isomorphism | accuracy | false-claim | remark | fixed | 8-adjudicate |
| frontier-26-b-step8-017 | rem-the-choice-cost-of-strictification | accuracy | false-claim | remark | narrowed | 8-adjudicate |
| frontier-26-b-step8-018 | rem-the-hairy-ball-theorem-for-even-dimensional-spheres | accuracy | citation-missing | remark | fixed | 8-adjudicate |
| frontier-26-b-step8-019 | thm-mac-lane-coherence-in-the-canonical-map-form | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-020 | thm-mac-lane-strictification | accuracy | ill-typed-claim | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-001 | def-normal-and-conormal-bundles-of-an-embedded-submanifold | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-002 | def-the-category-of-right-module-endofunctors | accuracy | ill-formed | definition | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-003 | def-vector-subbundle | accuracy | ill-formed | definition | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-004 | ex-the-normal-bundle-of-the-sphere-in-euclidean-space-is-trivial | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-005 | ex-the-tangent-bundle-of-the-circle-is-trivial | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-006 | ex-the-tautological-line-bundle-over-real-projective-space | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-007 | ex-the-word-category-on-words-of-length-three | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-26-b-step8-guard-008 | fs-a-short-exact-sequence-of-vector-bundles-has-a-canonical-splitting | accuracy | invalid-refutation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-009 | fs-every-diagram-in-a-monoidal-category-commutes | accuracy | invalid-refutation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-010 | fs-every-monoidal-category-is-isomorphic-to-a-strict-one | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-26-b-step8-guard-011 | fs-the-mapping-cone-differential-needs-no-minus-sign | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-012 | fs-the-mapping-cylinder-factorization-is-a-model-category-factorization | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-26-b-step8-guard-013 | prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-014 | prop-cones-preserve-chain-homotopy-equivalences-of-arrows | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-015 | prop-normal-and-conormal-bundles-are-smooth-vector-bundles | accuracy | missing-choice-scope | statement | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-016 | rem-strictification-gives-equivalence-and-never-isomorphism | accuracy | false-claim | remark | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-017 | rem-the-choice-cost-of-strictification | accuracy | false-claim | remark | narrowed | 8-adjudicate |
| frontier-26-b-step8-guard-018 | rem-the-hairy-ball-theorem-for-even-dimensional-spheres | accuracy | citation-missing | remark | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-019 | thm-mac-lane-coherence-in-the-canonical-map-form | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-guard-020 | thm-mac-lane-strictification | accuracy | ill-typed-claim | proof-step | fixed | 8-adjudicate |
| frontier-26-b-step8-rejudge-1-001 | def-normal-and-conormal-bundles-of-an-embedded-submanifold | accuracy | missing-hypothesis | definition | fixed | 8-rejudge |
| frontier-26-b-step8-rejudge-1-002 | def-vector-subbundle | accuracy | undefined-notation | definition | fixed | 8-rejudge |
| frontier-26-b-step8-rejudge-1-003 | prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle | accuracy | citation-inflated | facts-block | fixed | 8-rejudge |
| frontier-26-b-step8-rejudge-1-004 | prop-cones-preserve-chain-homotopy-equivalences-of-arrows | accuracy | false-computation | proof-step | fixed | 8-rejudge |
| frontier-26-b-step8-rejudge-1-005 | thm-mac-lane-strictification | accuracy | missing-map | proof-step | fixed | 8-rejudge |
| frontier-26-S6-a-refuter-1-1 | ex-nondedekind-ideal-not-invertible | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-1-2 | ex-steinitz-class-rank-two-module | accuracy | false-claim | statement | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-1-5 | thm-invertible-ideal-characterisations | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-1-6 | thm-local-characterisation-of-dedekind-domains | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-1-7 | thm-localisation-of-a-dedekind-domain | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-5-2 | lem-normalized-two-square-count-is-multiplicative | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-5-3 | lem-normalized-two-square-count-is-multiplicative | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-5-4 | lem-summatory-logarithm-asymptotic | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-a-refuter-5-5 | thm-euler-totient-summatory-estimate | accuracy | false-claim | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-a-touched-1-cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension | cor-integral-closure-of-a-dedekind-domain-in-a-finite-separable-extension | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-ex-nondedekind-ideal-not-invertible | ex-nondedekind-ideal-not-invertible | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-ex-pid-as-dedekind-domain | ex-pid-as-dedekind-domain | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-26-S6-a-touched-1-ex-steinitz-class-rank-two-module | ex-steinitz-class-rank-two-module | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-26-S6-a-touched-1-lem-finite-support-of-ideal-valuations | lem-finite-support-of-ideal-valuations | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-lem-fractional-ideal-operations-well-defined | lem-fractional-ideal-operations-well-defined | accuracy | invalid-witness | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-lem-rank-one-summand-of-a-finite-projective-dedekind-module | lem-rank-one-summand-of-a-finite-projective-dedekind-module | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-thm-finite-integral-closure-in-a-finite-separable-extension | thm-finite-integral-closure-in-a-finite-separable-extension | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-thm-finite-torsionfree-modules-over-dedekind-domains | thm-finite-torsionfree-modules-over-dedekind-domains | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-26-S6-a-touched-1-thm-nonzero-ideals-in-dedekind-domains-are-invertible | thm-nonzero-ideals-in-dedekind-domains-are-invertible | accuracy | ill-typed-construction | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-1-thm-submodules-of-projectives-over-dedekind-domains | thm-submodules-of-projectives-over-dedekind-domains | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-26-S6-a-touched-1-thm-unique-factorisation-of-ideals-in-dedekind-domains | thm-unique-factorisation-of-ideals-in-dedekind-domains | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-a-touched-5-lem-normalized-two-square-count-is-multiplicative | lem-normalized-two-square-count-is-multiplicative | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-alpha-6c-gate-10-1 | thm-regular-expression-to-epsilon-nfa | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-10-2 | thm-regular-expression-to-epsilon-nfa | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-10-3 | thm-kleenes-theorem | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-10-4 | thm-closure-under-left-and-right-quotient | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-10-5 | thm-closure-under-left-and-right-quotient | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-10-6 | thm-cfls-are-closed-under-reversal | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-1 | def-effective-encoding-of-turing-machines | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-10 | thm-nondeterministic-and-deterministic-recognizability-agree | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-11 | thm-nondeterministic-and-deterministic-recognizability-agree | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-12 | thm-ram-register-and-turing-computability-agree | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-13 | thm-ram-register-and-turing-computability-agree | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-14 | def-universal-turing-machine | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-15 | lem-step-by-step-interpreter-for-machine-codes | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-16 | lem-step-by-step-interpreter-for-machine-codes | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-17 | lem-step-by-step-interpreter-for-machine-codes | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-18 | thm-existence-of-a-universal-turing-machine | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-19 | def-church-turing-thesis | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-2 | thm-stay-put-moves-can-be-eliminated | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-20 | fs-universality-decides-halting | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-21 | ex-stay-put-moves-can-be-eliminated | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-3 | thm-stay-put-moves-can-be-eliminated | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-4 | thm-stay-put-moves-can-be-eliminated | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-5 | thm-one-way-and-two-way-tapes-are-equivalent | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-6 | thm-one-way-and-two-way-tapes-are-equivalent | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-7 | thm-multitape-machines-have-one-tape-simulations | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-8 | thm-multitape-machines-have-one-tape-simulations | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-11-9 | thm-multitape-machines-have-one-tape-simulations | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-alpha-6c-gate-8-1 | thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-26-S6-d-adjudicate-thm-existence-of-a-universal-turing-machine | thm-existence-of-a-universal-turing-machine | accuracy | ill-typed-construction | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-d-refuter-11-1 | def-universal-turing-machine | accuracy | ill-formed | definition | fixed | 6b-adjudicate |
| frontier-26-S6-d-refuter-11-2 | cex-universality-decides-halting | accuracy | ill-formed | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-d-refuter-11-3 | fs-universality-decides-halting | accuracy | ill-formed | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-d-refuter-11-4 | lem-multitape-simulation-has-quadratic-time-overhead | accuracy | false-claim | statement | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-10 | thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade | accuracy | false-claim | statement | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-2 | lem-a-semisparse-blockade-can-be-sampled-to-anticonnected-blocks-with-nearly-pure-relations | accuracy | invalid-inference | proof-step | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-3 | lem-a-sparse-co-p-five-free-graph-has-a-large-nearly-covered-sparse-pair | accuracy | false-claim | statement | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-4 | lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-5 | lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade | accuracy | invalid-inference | proof-step | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-6 | lem-the-star-expansion-of-a-forest-containing-a-long-path-contains-the-corresponding-cycle | accuracy | false-claim | statement | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-7 | thm-a-cycle-and-a-forest-complement-have-the-erdos-hajnal-property | accuracy | overstrong-title-or-statement | statement | narrowed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-8 | thm-a-long-blockade-without-a-large-pure-pair-contains-a-rainbow-forest-or-complement | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-26-S6-d-refuter-8-9 | thm-a-long-blockade-yields-a-wide-cograph-pattern-subblockade-or-a-rainbow-forest | accuracy | invalid-inference | proof-step | narrowed | 6b-adjudicate |
| frontier-26-S6-d-touched-10-def-marked-position-decomposition | def-marked-position-decomposition | accuracy | false-claim | definition | fixed | 6a-read |
| frontier-26-S6-d-touched-10-lem-height-and-yield-bound-for-cnf-trees | lem-height-and-yield-bound-for-cnf-trees | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-d-touched-10-lem-state-elimination-preserves-path-language | lem-state-elimination-preserves-path-language | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-d-touched-10-thm-ogdens-lemma | thm-ogdens-lemma | accuracy | false-or-overstrong-statement | statement | fixed | 6a-read |
| frontier-26-S6-d-touched-10-thm-pumping-lemma-for-context-free-languages | thm-pumping-lemma-for-context-free-languages | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-26-S6-d-touched-11-ex-effective-enumeration-of-turing-machines | ex-effective-enumeration-of-turing-machines | accuracy | false-computation | statement | fixed | 6a-read |
| frontier-26-S6-d-touched-11-lem-step-by-step-interpreter-for-machine-codes | lem-step-by-step-interpreter-for-machine-codes | accuracy | ill-typed-construction | statement | fixed | 6a-read |
| frontier-26-S6-d-touched-8-ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five | ex-an-upside-down-comb-with-anticonnected-blocks-creates-a-co-p-five | accuracy | invalid-witness | proof-step | fixed | 6a-read |
| frontier-26-S6-d-touched-8-lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components | lem-a-hatted-five-cycle-free-rooted-stable-tooth-comb-yields-a-large-pure-blockade-of-components | accuracy | invalid-witness | proof-step | fixed | 6a-read |
| frontier-26-S8-d-001 | cex-the-cfl-pumping-lemma-characterizes-cfls | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-002 | def-church-turing-thesis | accuracy | ill-typed-construction | definition | fixed | 7-judge |
| frontier-26-S8-d-003 | def-effective-encoding-of-turing-machines | accuracy | ill-typed-construction | definition | fixed | 7-judge |
| frontier-26-S8-d-004 | def-generalized-nfa | accuracy | ill-typed-construction | definition | fixed | 7-judge |
| frontier-26-S8-d-005 | def-nice-graph | accuracy | ill-typed-claim | definition | fixed | 7-judge |
| frontier-26-S8-d-006 | def-star-expansion-of-a-graph | accuracy | citation-inaccurate | definition | fixed | 7-judge |
| frontier-26-S8-d-007 | def-universal-turing-machine | accuracy | ill-typed-construction | definition | fixed | 7-judge |
| frontier-26-S8-d-008 | ex-a-layout-with-a-single-wrong-decided-pair | accuracy | undefined-notation | proof-step | fixed | 7-judge |
| frontier-26-S8-d-009 | ex-effective-enumeration-of-turing-machines | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-010 | ex-the-star-expansion-of-the-four-vertex-path | accuracy | ill-typed-construction | proof-step | fixed | 7-judge |
| frontier-26-S8-d-011 | fs-cfg-equivalence-is-decidable-by-normalization | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-012 | fs-state-elimination-has-a-unique-output-expression | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-013 | fs-the-cfl-pumping-lemma-characterizes-cfls | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-014 | lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-015 | lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair | accuracy | ill-typed-claim | statement | fixed | 7-judge |
| frontier-26-S8-d-016 | lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-017 | lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-018 | lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-019 | lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-020 | lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-021 | lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-022 | lem-machine-encoding-is-injective-and-decodable | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-023 | lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-024 | lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-025 | lem-small-anticonnected-components-yield-a-complete-blockade | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-026 | lem-step-by-step-interpreter-for-machine-codes | accuracy | ill-typed-construction | proof-step | fixed | 7-judge |
| frontier-26-S8-d-027 | lem-the-minimal-sparsity-parameter-drops-below-the-target | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-028 | thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-029 | thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade | accuracy | ill-typed-claim | statement | fixed | 7-judge |
| frontier-26-S8-d-030 | thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade | accuracy | citation-inaccurate | proof-step | fixed | 7-judge |
| frontier-26-S8-d-031 | thm-existence-of-a-universal-turing-machine | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-032 | thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-033 | thm-multitape-machines-have-one-tape-simulations | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-034 | thm-one-way-and-two-way-tapes-are-equivalent | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-035 | thm-ram-register-and-turing-computability-agree | accuracy | ill-typed-construction | proof-step | fixed | 7-judge |
| frontier-26-S8-d-036 | thm-regular-expression-to-epsilon-nfa | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-037 | thm-stay-put-moves-can-be-eliminated | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-038 | thm-the-five-vertex-path-has-the-polynomial-rodl-property | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-039 | thm-the-hatted-five-cycle-and-its-complement-have-the-erdos-hajnal-property | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-040 | thm-the-star-expansion-four-family-of-a-forest-has-the-erdos-hajnal-property | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-001 | def-nice-graph | accuracy | other | definition | fixed | 7-judge |
| frontier-26-S8-d-duplicate-002 | lem-small-anticonnected-components-yield-a-complete-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-003 | thm-regular-expression-to-epsilon-nfa | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-004 | lem-a-sparse-p-five-free-graph-has-an-anticomplete-two-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-005 | def-generalized-nfa | accuracy | other | definition | fixed | 7-judge |
| frontier-26-S8-d-duplicate-006 | lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-007 | lem-a-sparse-co-p-five-free-graph-either-sparsifies-further-or-yields-a-pure-blockade-or-a-large-sparse-pair | accuracy | other | statement | fixed | 7-judge |
| frontier-26-S8-d-duplicate-008 | lem-an-x-sparse-blockade-iteration-yields-further-sparsification-or-a-pure-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-009 | lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-010 | thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade | accuracy | other | statement | fixed | 7-judge |
| frontier-26-S8-d-duplicate-011 | lem-a-maximal-layout-has-at-most-epsilon-inverse-blocks | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-012 | lem-refining-the-largest-layout-block-forces-local-blockade-length-at-least-epsilon-inverse | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-013 | thm-local-pure-or-x-sparse-blockades-yield-a-nice-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-014 | fs-the-cfl-pumping-lemma-characterizes-cfls | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-015 | lem-no-vertex-is-mixed-on-many-blocks-of-a-semisparse-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-016 | fs-state-elimination-has-a-unique-output-expression | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-017 | lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-018 | fs-cfg-equivalence-is-decidable-by-normalization | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-019 | lem-a-sparse-co-p-five-free-graph-yields-a-complete-or-anticomplete-blockade-or-a-sparser-subgraph | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-020 | lem-the-minimal-sparsity-parameter-drops-below-the-target | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-021 | thm-co-p-five-free-graphs-yield-a-polynomial-restricted-set-or-a-complete-or-anticomplete-blockade | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-022 | cex-the-cfl-pumping-lemma-characterizes-cfls | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-023 | thm-the-five-vertex-path-has-the-polynomial-rodl-property | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8-d-duplicate-024 | ex-a-layout-with-a-single-wrong-decided-pair | accuracy | other | proof-step | fixed | 7-judge |
| frontier-26-S8R1-d-001 | cex-the-cfl-pumping-lemma-characterizes-cfls | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-002 | def-effective-encoding-of-turing-machines | accuracy | ill-typed-construction | definition | fixed | 8-rejudge |
| frontier-26-S8R1-d-003 | def-generalized-nfa | accuracy | undefined-notation | definition | fixed | 8-rejudge |
| frontier-26-S8R1-d-004 | def-universal-turing-machine | accuracy | invalid-inference | definition | fixed | 8-rejudge |
| frontier-26-S8R1-d-005 | fs-cfg-equivalence-is-decidable-by-normalization | accuracy | citation-inaccurate | facts-block | fixed | 8-rejudge |
| frontier-26-S8R1-d-006 | fs-the-cfl-pumping-lemma-characterizes-cfls | accuracy | invalid-inference | facts-block | fixed | 8-rejudge |
| frontier-26-S8R1-d-007 | lem-a-sparse-co-p-five-free-graph-yields-deeper-sparsification-or-a-complete-blockade-or-a-large-anticomplete-set | accuracy | citation-inaccurate | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-008 | lem-an-iterative-sparsification-step-for-sparse-co-p-five-free-graphs | accuracy | citation-inaccurate | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-009 | lem-anticonnected-block-contraction-turns-an-upside-down-comb-into-a-pure-blockade | accuracy | undefined-notation | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-010 | lem-step-by-step-interpreter-for-machine-codes | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-011 | thm-co-p-five-free-graphs-admit-a-pure-or-x-sparse-polynomial-blockade | accuracy | citation-inaccurate | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-012 | thm-multitape-machines-have-one-tape-simulations | accuracy | ill-typed-construction | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-013 | thm-one-way-and-two-way-tapes-are-equivalent | accuracy | ill-typed-construction | proof-step | fixed | 8-rejudge |
| frontier-26-S8R1-d-014 | thm-stay-put-moves-can-be-eliminated | accuracy | ill-typed-construction | proof-step | fixed | 8-rejudge |

Grouped by class: accuracy 270.
Grouped by location: definition 30; Definition 2; facts-block 7; frontmatter 28; proof-step 122; proof-step 2.1 1; remark 11; Remark 1; statement 60; Statement 1; Statement and Refutation 1; statement-and-proof 2; title 1; title-and-statement 2; verification step 1.1 1.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-5.6-terra | 529 | 210 | 319 | 0 |

Across 529 text version(s) with configured-judge evidence: 529 complete model set(s), 210 all keep, 319 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 217; confirmed_nonfatal 219; false_positive 50.

## Repeated repairs and pathway closure

No item was repaired more than once according to the touch ledger.
Pathway obligations closed: 6/6; categories: category-theory, combinatorics, complex-analysis, linear-algebra, measure-theory, number-theory.

## Caveats

- Owner-only work remains: personal mathematical audit, deliberate `status: published` changes, and push/deployment.
- Some late issues closed by narrowing claims or by accepted-after-review terminal resolution rather than by broad content rewrite, so those items are the highest-value manual spot checks.
- Pathway obligations closed by rewrite, so readiness establishes mathematical/process closure but does not substitute for owner approval of the final reading flow.

## Owner reading priorities

- Terminal session resolutions: These items sit closest to the publication boundary and include both accepted-after-review closures and targeted repairs, making them the strongest final spot-check set.
- Computability machine-encoding and tape-simulation thread: The packet concentrates repeated defects and terminal attention around `def-effective-encoding-of-turing-machines`, `def-universal-turing-machine`, `lem-step-by-step-interpreter-for-machine-codes`, and the tape-simulation theorems, so this dependency chain is a high-yield audit target.
- Sparse-graph blockade thread: Several repaired or narrowed claims lie in the `co-p-five-free` and blockade chain, indicating a region where source-faithfulness and hypothesis control were especially fragile.
- Rewritten pathways in `category-theory`, `combinatorics`, `complex-analysis`, `linear-algebra`, `measure-theory`, and `number-theory`: Those pathways were closed by rewrite, so they merit owner review for sequencing, emphasis, and fit with the intended publication experience.

## Workflow recommendations

1. Audit the terminal-resolution set before any publication toggle, with first attention on items that were accepted after review or repaired at the end of the cycle. (risk: medium) — Concentrates the owner’s final mathematical review on the items closest to the readiness boundary. Evidence: The packet marks closure closed and shows current scope completion through a mix of current verdict coverage and terminal session resolutions, including both `accepted-after-review` and `repaired` dispositions.
2. Review the computability cluster as one dependency thread rather than as isolated items. (risk: medium) — Reduces the chance of publishing a local mismatch between definitions, encodings, and simulation results. Evidence: Repeated defects or terminal attention appear around `def-effective-encoding-of-turing-machines`, `def-universal-turing-machine`, `lem-step-by-step-interpreter-for-machine-codes`, `thm-multitape-machines-have-one-tape-simulations`, `thm-one-way-and-two-way-tapes-are-equivalent`, and `thm-stay-put-moves-can-be-eliminated`.
3. Check each narrowed claim for content-contract fit, not just for corrected truth conditions. (risk: low) — Protects the intended scope, titles, and pedagogical promises after repairs that made statements smaller or more conditional. Evidence: The packet records narrowed fatal-defect dispositions for items such as `fs-every-monoidal-category-is-isomorphic-to-a-strict-one`, `fs-the-mapping-cylinder-factorization-is-a-model-category-factorization`, `rem-the-choice-cost-of-strictification`, and the sparse-graph thread.
4. Perform pathway review and deployment against the exact audited tree recorded in the packet. (risk: low) — Keeps the owner’s final approval aligned with the hash-bound corpus and the rewritten reading paths. Evidence: The readiness section provides a content hash, lists push/deployment as owner work, and the pathway section records all obligations closed by rewrite rather than untouched carry-through.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
