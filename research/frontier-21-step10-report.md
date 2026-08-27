# frontier-21 — Step 10 owner report

The packet supports Step-10 readiness in the narrow workflow sense: no workflow-owned blockers remain, verification closure is closed for the configured judge set, and pathway obligations are closed. The remaining work is explicitly owner-held rather than engine-held, with residual mathematical attention best focused on repeated-repair items and session-level terminal resolutions.

## What was built

- 28 pages and 424 items across 9 categories.
- Categories: abstract-algebra, category-theory, combinatorics, commutative-algebra, complex-analysis, group-theory, linear-algebra, measure-theory, number-theory.
- Item kinds: corollary 37; counterexample 23; definition 59; example 92; false-statement 35; lemma 30; proposition 12; remark 13; theorem 123.

## Verification closure

- Judge lineup: terra.
- Current judge verdicts complete: 425/433.
- Terminal owner/session resolutions after the 2-cycle cap: 8 (cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis, def-weighted-zero-and-pole-counts-on-cycle, fs-folner-sequences-exist-for-every-uncountable-amenable-group, lem-schreier-rewriting-is-invariant-under-free-reduction, thm-argument-principle-null-homologous-cycle, thm-cartan-thullen-theorem, thm-domains-of-holomorphy-are-hartogs-pseudoconvex, thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `3b70829e25e8c52bf40c69e55cd8aa1bae6dcf34a9c3300841d6ea2bc138d30a`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 177 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| frontier-21-c-step8-001 | cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause | accuracy | invalid-witness | statement | fixed | 7-judge |
| frontier-21-c-step8-002 | cor-rayleigh-quotient-extreme-eigenvalue-characterisation | accuracy | missing-hypothesis | statement | narrowed | 7-judge |
| frontier-21-c-step8-003 | def-levi-pseudoconvex-domain | accuracy | undefined-notation | definition | fixed | 7-judge |
| frontier-21-c-step8-004 | def-logarithmic-derivative-meromorphic-function | accuracy | false-or-overstrong-statement | remark | narrowed | 7-judge |
| frontier-21-c-step8-005 | def-operator-norm-on-a-finite-dimensional-inner-product-space | accuracy | false-or-overstrong-title | title | narrowed | 7-judge |
| frontier-21-c-step8-006 | def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity | accuracy | false-or-overstrong-statement | definition | fixed | 7-judge |
| frontier-21-c-step8-007 | def-polydisc-boundary-radius | accuracy | undefined-notation | definition | fixed | 7-judge |
| frontier-21-c-step8-008 | def-semisimple-and-nilpotent-endomorphisms | accuracy | ill-typed-construction | definition | fixed | 7-judge |
| frontier-21-c-step8-009 | def-weighted-zero-and-pole-counts-on-cycle | accuracy | undefined-notation | definition | narrowed | 7-judge |
| frontier-21-c-step8-010 | ex-hermitian-two-by-two-unitary-diagonalisation | accuracy | arithmetic-error | statement | fixed | 7-judge |
| frontier-21-c-step8-011 | ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence | accuracy | invalid-witness | statement | fixed | 7-judge |
| frontier-21-c-step8-012 | ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc | accuracy | undefined-notation | proof-step | fixed | 7-judge |
| frontier-21-c-step8-013 | fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective | accuracy | invalid-witness | facts-block | fixed | 7-judge |
| frontier-21-c-step8-014 | lem-levi-pseudoconvexity-is-independent-of-defining-function | accuracy | false-or-overstrong-statement | proof-step | narrowed | 7-judge |
| frontier-21-c-step8-015 | lem-riemann-integrable-function-has-borel-darboux-envelopes | accuracy | ill-typed-construction | proof-step | fixed | 7-judge |
| frontier-21-c-step8-016 | thm-additive-jordan-chevalley-decomposition | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-21-c-step8-017 | thm-argument-principle-null-homologous-cycle | accuracy | missing-hypothesis | statement | narrowed | 7-judge |
| frontier-21-c-step8-018 | thm-cartan-thullen-theorem | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-21-c-step8-019 | thm-continuity-principle-for-domains-of-holomorphy | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-21-c-step8-020 | thm-domains-of-holomorphy-are-hartogs-pseudoconvex | accuracy | false-or-overstrong-statement | statement | fixed | 7-judge |
| frontier-21-c-step8-021 | thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-21-c-step8-022 | thm-maximum-principle-for-plurisubharmonic-functions | accuracy | false-or-overstrong-statement | statement | narrowed | 7-judge |
| frontier-21-c-step8-023 | thm-weyl-inequalities-for-self-adjoint-sums | accuracy | missing-hypothesis | statement | narrowed | 7-judge |
| frontier-21-c-step8-r1-001 | def-weighted-zero-and-pole-counts-on-cycle | accuracy | ill-typed-construction | definition | fixed | 8-rejudge |
| frontier-21-c-step8-r1-002 | thm-argument-principle-null-homologous-cycle | accuracy | ill-typed-construction | statement | fixed | 8-rejudge |
| frontier-21-c-step8-r1-003 | thm-cartan-thullen-theorem | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-21-c-step8-r1-004 | thm-domains-of-holomorphy-are-hartogs-pseudoconvex | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-21-c-step8-r1-005 | thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains | accuracy | invalid-witness | proof-step | fixed | 8-rejudge |
| frontier-21-c-step8-r1-006 | thm-dirichlet-and-thomae-continuity-sets | accuracy | citation-inflated | facts-block | fixed | 8-rejudge |
| frontier-21-d-step8-001 | def-ferrers-young-diagram-conjugate-partition-and-durfee-square | accuracy | undefined-notation | definition | fixed | 7-judge |
| frontier-21-d-step8-002 | def-partition-counting-functions-and-restricted-families | accuracy | false-boundary-disposition | definition | fixed | 7-judge |
| frontier-21-d-step8-003 | ex-a-vertex-can-be-mixed-on-a-quotient-block-while-pure-on-each-member-block | accuracy | invalid-witness | statement | fixed | 7-judge |
| frontier-21-d-step8-004 | thm-glaisher-bijection-between-odd-and-distinct-partitions | accuracy | arithmetic-error | proof-step | fixed | 7-judge |
| frontier-21-d-step8-005 | thm-path-and-antipath-free-graphs-have-the-strong-erdos-hajnal-property | accuracy | missing-hypothesis | statement | narrowed | 7-judge |
| frontier-21-S6-a-refuter-1-1 | ex-boundary-expansion-in-the-free-group | accuracy | undefined-notation | proof-step | fixed | 6b-adjudicate |
| frontier-21-S6-a-touched-1-cex-amenability-does-not-imply-subexponential-growth | cex-amenability-does-not-imply-subexponential-growth | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable | cor-groups-containing-a-rank-two-free-subgroup-are-nonamenable | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-cor-solvable-and-locally-finite-groups-are-amenable | cor-solvable-and-locally-finite-groups-are-amenable | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-def-schreier-generator | def-schreier-generator | accuracy | undefined-notation | definition | fixed | 6a-read |
| frontier-21-S6-a-touched-1-def-schreier-rewriting-map | def-schreier-rewriting-map | accuracy | undefined-notation | definition | fixed | 6a-read |
| frontier-21-S6-a-touched-1-ex-finite-and-locally-finite-amenable-groups | ex-finite-and-locally-finite-amenable-groups | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-ex-the-lamplighter-group-is-amenable | ex-the-lamplighter-group-is-amenable | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-fs-schreier-generators-are-always-a-free-basis | fs-schreier-generators-are-always-a-free-basis | accuracy | false-or-overstrong-statement | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-lem-directed-union-of-amenable-subgroups-is-amenable | lem-directed-union-of-amenable-subgroups-is-amenable | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-lem-schreier-rewriting-is-invariant-under-free-reduction | lem-schreier-rewriting-is-invariant-under-free-reduction | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-a-touched-1-thm-abelian-groups-are-amenable | thm-abelian-groups-are-amenable | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups | thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-thm-extensions-of-amenable-groups-are-amenable | thm-extensions-of-amenable-groups-are-amenable | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-a-touched-1-thm-folner-criterion-for-amenability | thm-folner-criterion-for-amenability | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-thm-free-group-of-rank-two-is-nonamenable | thm-free-group-of-rank-two-is-nonamenable | accuracy | citation-inflated | proof-step | fixed | 6a-read |
| frontier-21-S6-a-touched-1-thm-reidemeister-schreier-presentation | thm-reidemeister-schreier-presentation | accuracy | citation-inflated | facts-block | fixed | 6a-read |
| frontier-21-S6-a-touched-1-thm-schreier-generating-lemma | thm-schreier-generating-lemma | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-a-touched-1-thm-subexponential-growth-implies-amenability | thm-subexponential-growth-implies-amenability | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-thm-subgroups-and-quotients-of-amenable-groups-are-amenable | thm-subgroups-and-quotients-of-amenable-groups-are-amenable | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-a-touched-1-thm-tarski-alternative | thm-tarski-alternative | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-b-refuter-2-1 | thm-generalized-pell-solutions-have-finitely-many-orbits | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-21-S6-b-refuter-2-2 | thm-negative-pell-period-parity-criterion | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| frontier-21-S6-b-refuter-2-3 | ex-generalized-pell-bounded-representatives | accuracy | arithmetic-error | proof-step | fixed | 6b-adjudicate |
| frontier-21-S6-b-touched-2-cor-all-integral-pell-solutions | cor-all-integral-pell-solutions | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-b-touched-2-thm-all-positive-pell-solutions-are-fundamental-powers | thm-all-positive-pell-solutions-are-fundamental-powers | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-b-touched-2-thm-negative-pell-period-parity-criterion | thm-negative-pell-period-parity-criterion | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-b-touched-3-cor-artinian-quotients-and-localisations | cor-artinian-quotients-and-localisations | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-b-touched-3-thm-artinian-local-ring-has-nilpotent-maximal-ideal | thm-artinian-local-ring-has-nilpotent-maximal-ideal | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-b-touched-3-thm-artinian-ring-characterisation-by-primes | thm-artinian-ring-characterisation-by-primes | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-b-touched-3-thm-artinian-ring-has-finite-length | thm-artinian-ring-has-finite-length | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-b-touched-3-thm-artinian-ring-has-finitely-many-maximal-ideals | thm-artinian-ring-has-finitely-many-maximal-ideals | accuracy | missing-choice-scope | proof-step | fixed | 6a-read |
| frontier-21-S6-b-touched-3-thm-artinian-ring-is-noetherian | thm-artinian-ring-is-noetherian | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-b-touched-3-thm-nilradical-of-artinian-ring-is-nilpotent | thm-nilradical-of-artinian-ring-is-nilpotent | accuracy | missing-choice-scope | proof-step | fixed | 6a-read |
| frontier-21-S6-b-touched-3-thm-structure-theorem-for-artinian-rings | thm-structure-theorem-for-artinian-rings | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-21-S6-c-page-8-domains-of-holomorphy-and-pseudoconvexity | domains-of-holomorphy-and-pseudoconvexity | accuracy | false-or-overstrong-statement | page-summary | fixed | 6b-adjudicate |
| frontier-21-S6-c-page-8-domains-of-holomorphy-and-pseudoconvexity-examples | domains-of-holomorphy-and-pseudoconvexity-examples | richness | scope-drop | page-summary | fixed | 6b-adjudicate |
| frontier-21-S6-c-refuter-4-1 | thm-additive-jordan-chevalley-decomposition | accuracy | missing-choice-scope | facts-block | narrowed | 6b-adjudicate |
| frontier-21-S6-c-refuter-7-1 | cex-semicontinuous-function-almost-everywhere-equal-to-no-riemann-integrable-function | accuracy | missing-choice-scope | facts-block | narrowed | 6b-adjudicate |
| frontier-21-S6-c-refuter-7-2 | cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable | accuracy | missing-choice-scope | facts-block | narrowed | 6b-adjudicate |
| frontier-21-S6-c-refuter-8-1 | thm-holomorphic-inverse-contour-formula | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-refuter-8-2 | thm-holomorphic-pullback-of-plurisubharmonic-functions | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-refuter-8-3 | thm-upper-envelope-theorem-for-plurisubharmonic-functions | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-refuter-8-4 | thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-4-cor-rank-equals-number-of-nonzero-singular-values | cor-rank-equals-number-of-nonzero-singular-values | accuracy | false-or-overstrong-title | title | fixed | 6a-read |
| frontier-21-S6-c-touched-4-def-singular-values-of-an-endomorphism | def-singular-values-of-an-endomorphism | accuracy | false-or-overstrong-title | title | fixed | 6a-read |
| frontier-21-S6-c-touched-4-prop-operator-positivity-agrees-with-form-positivity-over-the-reals | prop-operator-positivity-agrees-with-form-positivity-over-the-reals | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-c-touched-4-thm-operator-norm-is-the-largest-singular-value | thm-operator-norm-is-the-largest-singular-value | accuracy | false-boundary-disposition | statement | fixed | 6a-read |
| frontier-21-S6-c-touched-4-thm-singular-value-decomposition | thm-singular-value-decomposition | accuracy | false-or-overstrong-title | title | fixed | 6a-read |
| frontier-21-S6-c-touched-7-cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable | cex-the-sine-integral-is-improperly-riemann-integrable-and-not-lebesgue-integrable | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-c-touched-7-lem-riemann-integrable-function-has-borel-darboux-envelopes | lem-riemann-integrable-function-has-borel-darboux-envelopes | accuracy | citation-missing | facts-block | fixed | 6a-read |
| frontier-21-S6-c-touched-7-thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral | thm-riemann-stieltjes-integral-agrees-with-lebesgue-stieltjes-integral | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-21-S6-c-touched-8-cex-a-domain-of-holomorphy-need-not-be-convex | cex-a-domain-of-holomorphy-need-not-be-convex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle | cex-e-to-one-over-z-shows-essential-singularities-break-the-argument-principle | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex | cex-the-bidisc-minus-the-origin-is-not-holomorphically-convex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cex-weak-boundary-inequality-does-not-suffice-for-rouche | cex-weak-boundary-inequality-does-not-suffice-for-rouche | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause | cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cor-argument-principle-counts-preimages | cor-argument-principle-counts-preimages | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cor-convex-domains-are-domains-of-holomorphy | cor-convex-domains-are-domains-of-holomorphy | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cor-local-zero-count-via-rouche | cor-local-zero-count-via-rouche | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic | cor-log-modulus-of-a-holomorphic-function-is-plurisubharmonic | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-continuous-family-of-analytic-discs | def-continuous-family-of-analytic-discs | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-holomorphically-convex-hull-and-domain | def-holomorphically-convex-hull-and-domain | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-levi-form-and-strict-plurisubharmonicity | def-levi-form-and-strict-plurisubharmonicity | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-levi-pseudoconvex-domain | def-levi-pseudoconvex-domain | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity | def-plurisubharmonic-exhaustion-and-hartogs-pseudoconvexity | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-plurisubharmonic-function | def-plurisubharmonic-function | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-def-polydisc-boundary-radius | def-polydisc-boundary-radius | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-a-convex-domain-is-a-domain-of-holomorphy | ex-a-convex-domain-is-a-domain-of-holomorphy | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-a-cubic-image-curve-has-winding-number-three-about-the-origin | ex-a-cubic-image-curve-has-winding-number-three-about-the-origin | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc | ex-e-to-z-minus-three-z-has-one-zero-in-the-unit-disc | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence | ex-hurwitz-preserves-a-simple-zero-under-local-uniform-convergence | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space | ex-minus-log-boundary-distance-is-plurisubharmonic-on-a-half-space | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-the-ball-is-levi-pseudoconvex | ex-the-ball-is-levi-pseudoconvex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-the-bidisc-is-holomorphically-convex | ex-the-bidisc-is-holomorphically-convex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc | ex-the-holomorphic-hull-of-a-circle-in-c-is-the-filled-disc | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc | ex-the-holomorphic-hull-of-a-product-torus-in-the-bidisc-is-the-polydisc | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-the-inverse-contour-formula-recovers-a-local-inverse-value | ex-the-inverse-contour-formula-recovers-a-local-inverse-value | accuracy | invalid-witness | proof-step | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two | ex-z-five-plus-three-z-plus-one-has-four-zeros-in-the-annulus-one-to-two | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc | ex-z-five-plus-three-z-plus-one-has-one-zero-in-the-unit-disc | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective | fs-a-locally-uniform-limit-of-injective-holomorphic-functions-is-injective | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-fs-every-domain-in-c-n-is-a-domain-of-holomorphy | fs-every-domain-in-c-n-is-a-domain-of-holomorphy | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-fs-the-argument-principle-counts-zeros-without-multiplicity | fs-the-argument-principle-counts-zeros-without-multiplicity | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy | fs-the-union-of-two-domains-of-holomorphy-is-a-domain-of-holomorphy | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-lem-affine-line-independence-in-the-definition-of-plurisubharmonicity | lem-affine-line-independence-in-the-definition-of-plurisubharmonicity | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-lem-basic-properties-of-the-holomorphic-hull | lem-basic-properties-of-the-holomorphic-hull | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-lem-cauchy-estimates-propagate-to-holomorphic-hulls | lem-cauchy-estimates-propagate-to-holomorphic-hulls | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point | lem-finite-dimensional-separation-of-a-compact-convex-set-and-a-point | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-lem-levi-pseudoconvexity-is-independent-of-defining-function | lem-levi-pseudoconvexity-is-independent-of-defining-function | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-lem-logarithmic-derivative-order-residue | lem-logarithmic-derivative-order-residue | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-rem-fundamental-theorem-of-algebra-via-rouche | rem-fundamental-theorem-of-algebra-via-rouche | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-argument-principle-as-image-winding-number | thm-argument-principle-as-image-winding-number | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-argument-principle-null-homologous-cycle | thm-argument-principle-null-homologous-cycle | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-c-two-levi-criterion-for-plurisubharmonicity | thm-c-two-levi-criterion-for-plurisubharmonicity | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-cartan-thullen-boundary-radius-theorem | thm-cartan-thullen-boundary-radius-theorem | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-cartan-thullen-theorem | thm-cartan-thullen-theorem | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-continuity-of-zeros-locally-uniform-convergence | thm-continuity-of-zeros-locally-uniform-convergence | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-continuity-principle-for-domains-of-holomorphy | thm-continuity-principle-for-domains-of-holomorphy | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-convex-domains-are-holomorphically-convex | thm-convex-domains-are-holomorphically-convex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-decreasing-limits-of-plurisubharmonic-functions | thm-decreasing-limits-of-plurisubharmonic-functions | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-domains-of-holomorphy-are-hartogs-pseudoconvex | thm-domains-of-holomorphy-are-hartogs-pseudoconvex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity | thm-equivalent-psh-exhaustion-and-boundary-distance-pseudoconvexity | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-holomorphic-inverse-contour-formula | thm-holomorphic-inverse-contour-formula | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-holomorphic-pullback-of-plurisubharmonic-functions | thm-holomorphic-pullback-of-plurisubharmonic-functions | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-hurwitz-injective-limit | thm-hurwitz-injective-limit | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-hurwitz-zero-free-limit | thm-hurwitz-zero-free-limit | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains | thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-maximum-principle-for-plurisubharmonic-functions | thm-maximum-principle-for-plurisubharmonic-functions | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-rouche-theorem | thm-rouche-theorem | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-stability-operations-for-plurisubharmonic-functions | thm-stability-operations-for-plurisubharmonic-functions | accuracy | false-or-overstrong-statement | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-upper-envelope-theorem-for-plurisubharmonic-functions | thm-upper-envelope-theorem-for-plurisubharmonic-functions | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-21-S6-c-touched-8-thm-weighted-argument-principle | thm-weighted-argument-principle | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-gate-10-2 | ex-the-quotient-witness-reduction-in-a-four-block-configuration | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-21-S6-d-gate-10-3 | thm-erdos-hajnal-pach-pure-pair-theorem | accuracy | false-or-overstrong-statement | statement | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-1 | lem-quotient-blocks-preserve-connectedness-and-anticonnectedness | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-10 | thm-leaf-and-coleaf-deletion-preserves-virality-of-a-finite-family | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-11 | thm-leaf-deletion-preserves-virality-of-a-finite-family | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-2 | ex-the-quotient-witness-reduction-in-a-four-block-configuration | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-3 | cor-forest-and-complement-free-graphs-have-the-erdos-hajnal-property | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-4 | cor-leaf-and-coleaf-deletion-preserves-the-erdos-hajnal-property | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-5 | ex-the-forest-theorem-specialized-to-the-four-vertex-path | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-6 | ex-the-leaf-coleaf-corollary-recovers-the-five-vertex-path-case-from-the-four-vertex-path-case | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-7 | thm-erdos-hajnal-pach-pure-pair-theorem | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-8 | thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-10-9 | thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex | richness | scope-drop | title | fixed | 6b-adjudicate |
| frontier-21-S6-d-refuter-6-1 | thm-partitions-with-k-parts-equal-largest-part-k | accuracy | false-boundary-disposition | proof-step | fixed | 6b-adjudicate |
| frontier-21-S6-d-touched-10-1 | ex-the-quotient-witness-reduction-in-a-four-block-configuration | accuracy | false-or-overstrong-title | title | fixed | 6a-read |
| frontier-21-S6-d-touched-6-1 | thm-cycle-index-of-alternating-group | accuracy | undefined-notation | statement | fixed | 6a-read |
| frontier-21-S6-d-touched-6-2 | thm-edge-set-orbits-on-two-subsets-by-polya | accuracy | missing-choice-scope | statement | fixed | 6a-read |
| frontier-21-S8-a-001 | cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis | accuracy | arithmetic-error | proof-step | fixed | 8-adjudicate |
| frontier-21-S8-a-002 | lem-schreier-rewriting-is-invariant-under-free-reduction | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-21-S8-a-003 | thm-folner-criterion-for-amenability | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-21-S8-a-004 | thm-free-group-of-rank-two-is-nonamenable | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-21-S8-a-005 | ex-paradoxical-decomposition-of-a-free-group | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-21-S8-a-006 | thm-amenability-is-a-quasi-isometry-invariant-for-finitely-generated-groups | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-21-S8-a-007 | thm-tarski-alternative | accuracy | invalid-inference | proof-step | narrowed | 8-adjudicate |
| frontier-21-S8-a-008 | thm-kernel-and-cokernel-are-mutually-inverse-order-anti-isomorphisms-between-subobjects-and-quotient-objects | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-21-S8-a-009 | thm-marshall-hall-free-factor-theorem | accuracy | citation-inflated | proof-step | fixed | 8-adjudicate |
| frontier-21-S8-a-010 | rem-the-freyd-mitchell-embedding-theorem | accuracy | false-or-overstrong-title | title | narrowed | 8-adjudicate |
| frontier-21-S8-a-011 | fs-folner-sequences-exist-for-every-uncountable-amenable-group | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-21-S8-a-r1-001 | cex-an-arbitrary-transversal-does-not-give-the-reduced-schreier-basis | accuracy | ill-typed-construction | facts-block | fixed | 8-rejudge |
| frontier-21-S8-a-r1-002 | lem-schreier-rewriting-is-invariant-under-free-reduction | accuracy | missing-hypothesis | statement | fixed | 8-rejudge |
| frontier-21-S8-a-r1-003 | fs-folner-sequences-exist-for-every-uncountable-amenable-group | accuracy | ill-typed-construction | statement | fixed | 8-rejudge |

Grouped by class: accuracy 115; richness 62.
Grouped by location: definition 10; facts-block 10; page-summary 2; proof-step 36; remark 1; statement 51; title 67.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-5.6-terra | 482 | 212 | 270 | 0 |

Across 482 text version(s) with configured-judge evidence: 482 complete model set(s), 212 all keep, 270 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 50; confirmed_nonfatal 205; false_positive 15.

## Repeated repairs and pathway closure

Items repaired more than once: thm-dirichlet-and-thomae-continuity-sets (2); thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains (2).
Pathway obligations closed: 8/8; categories: abstract-algebra, category-theory, combinatorics, complex-analysis, linear-algebra, measure-theory, number-theory.

## Caveats

- This is not an auto-publish state: the packet leaves personal mathematical audit, deliberate status:published changes, and push/deployment to the owner.
- Some items closed through session-level terminal resolution rather than a straightforward keep path, so owner approval should treat those closures as the main spot-check set.
- thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains carries the strongest residual caution signal because it was narrowed earlier, repaired again later, and appears in terminal resolution as repaired.

## Owner reading priorities

- thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains: It combines Step-6 narrowing, repeated Step-8 repair history, and a terminal resolution recorded as repaired, so it is the clearest candidate for a final owner proof read.
- thm-dirichlet-and-thomae-continuity-sets: It is flagged for repeated repair activity, including a later citation-inflation defect during rejudge, so the supporting facts and citations deserve direct owner inspection.
- accepted-after-review terminal resolutions: Items including def-weighted-zero-and-pole-counts-on-cycle, thm-argument-principle-null-homologous-cycle, thm-cartan-thullen-theorem, and thm-domains-of-holomorphy-are-hartogs-pseudoconvex closed as accepted-after-review, making them the natural audit set before approval.

## Workflow recommendations

1. Read thm-levi-and-hartogs-pseudoconvexity-for-c-two-domains first and decide whether its final narrowed claim and proof meet your publication bar. (risk: high) — This concentrates owner attention on the item with the strongest combined repair and resolution signal. Evidence: The packet records Step-6 narrowing, repeated repairs, and a terminal resolution with disposition repaired for this theorem.
2. Use the repeated-repair items and accepted-after-review terminal resolutions as the targeted owner mathematical audit set before any publication-status change. (risk: medium) — This keeps the audit focused on the residual judgment hotspots instead of re-reading already closed routine material. Evidence: The packet separately flags repeated repairs and lists session-level terminal resolutions accepted after review.
3. Treat publication as a deliberate owner act only after that targeted audit, then perform the remaining status and deployment steps in sequence. (risk: low) — This preserves the engine's closed process state while keeping the final go or no-go decision with the owner. Evidence: The packet reports no workflow-owned blockers, closed pathway obligations, and owner-held remaining actions: personal mathematical audit, deliberate status:published changes, and push/deployment.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
