# frontier-24 — Step 10 owner report

The packet supports publication readiness at the workflow level: verification closure is recorded, no workflow-owned blocker remains, pathway obligations are closed, and no repeated-repair pattern is reported. The remaining risk is owner-side, not engine-side: several mathematically material repairs were terminal session repairs or scope narrowings, so the final decision should turn on a targeted owner audit of the repaired statements, proofs, and rewritten pathways before any deliberate status promotion or deployment.

## What was built

- 28 pages and 451 items across 9 categories.
- Categories: abstract-algebra, category-theory, commutative-algebra, complex-analysis, computability-theory, homological-algebra, linear-algebra, measure-theory, real-analysis.
- Item kinds: corollary 36; counterexample 17; definition 72; example 74; false-statement 41; lemma 64; proposition 23; remark 9; theorem 115.

## Verification closure

- Judge lineup: terra.
- Current judge verdicts complete: 475/493.
- Terminal owner/session resolutions after the 2-cycle cap: 18 (cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language, cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake, def-permutation-matrix-partial-pivoting-and-pivot-growth, def-principal-part-at-an-isolated-point, def-real-and-complex-givens-transformations, def-velocity-derivation-of-a-smooth-curve, ex-the-tangent-bundle-of-the-circle-is-a-cylinder, ex-the-tangent-space-of-the-sphere-from-curve-velocities, fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language, lem-chart-bump-at-a-point-with-prescribed-support, lem-two-omitted-values-rule-out-an-essential-singularity, thm-chomsky-normal-form, thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors, thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model, thm-stirling-formula-gamma, thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-zero-divisor-theorem-on-plane-domains).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `59e58247a648efa94070d951214f3cb89934f6d49ca7d5b8f3abc2ee7d37e37a`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 180 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| frontier-24-a-step8-001 | cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-002 | ex-noether-normalisation-triangular-change | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-003 | ex-the-published-module-five-lemma-as-an-instance | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-24-a-step8-004 | rem-induced-representation-agrees-with-the-tensor-product-model | accuracy | missing-hypothesis | remark | fixed | 8-adjudicate |
| frontier-24-a-step8-005 | thm-burnsides-p-a-q-b-theorem | accuracy | missing-case | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-006 | thm-four-lemma-in-an-abelian-category | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-007 | thm-nine-lemma-in-an-abelian-category | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-008 | thm-nine-lemma-variants-by-which-rows-are-assumed-exact | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-009 | thm-sharp-nine-lemma | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-010 | thm-short-five-lemma-in-an-abelian-category | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-011 | thm-symmetric-nine-lemma | accuracy | citation-misattributed | facts-block | fixed | 8-adjudicate |
| frontier-24-a-step8-012 | thm-weak-four-lemma-with-the-exactness-hypotheses-named | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-a-step8-r1-001 | cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-24-c-step8-r1-001 | def-principal-part-at-an-isolated-point | accuracy | citation-missing | definition | fixed | 8-rejudge |
| frontier-24-c-step8-r1-002 | lem-two-omitted-values-rule-out-an-essential-singularity | accuracy | missing-hypothesis | statement | fixed | 8-rejudge |
| frontier-24-c-step8-r1-003 | thm-stirling-formula-gamma | accuracy | citation-inflated | facts-block | fixed | 8-rejudge |
| frontier-24-c-step8-r1-004 | thm-zero-divisor-theorem-on-plane-domains | accuracy | citation-truncated | proof-step | fixed | 8-rejudge |
| frontier-24-d-step8-001 | def-extended-dfa-transition-function | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-24-d-step8-002 | def-dfa-acceptance-and-recognized-language | accuracy | citation-missing | definition | fixed | 8-adjudicate |
| frontier-24-d-step8-003 | thm-elimination-of-useless-symbols | accuracy | ill-typed-construction | proof-step | fixed | 8-adjudicate |
| frontier-24-d-step8-004 | thm-elimination-of-unit-productions | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-24-d-step8-005 | thm-chomsky-normal-form | accuracy | ill-formed | proof-step | fixed | 8-adjudicate |
| frontier-24-d-step8-006 | lem-gnf-substitution-step-preserves-language | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-d-step8-007 | fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-24-d-step8-008 | cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-24-d-step8r1-009 | cex-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language | accuracy | citation-truncated | facts-block | fixed | 8-rejudge |
| frontier-24-d-step8r1-010 | fs-an-ambiguous-cfg-need-not-generate-an-inherently-ambiguous-language | accuracy | citation-truncated | facts-block | fixed | 8-rejudge |
| frontier-24-d-step8r1-011 | thm-chomsky-normal-form | accuracy | false-claim | proof-step | fixed | 8-rejudge |
| frontier-24-S6-a-refuter-1-1 | cor-noether-normalisation-dimension-lower-bound | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-1-2 | cor-noether-normalisation-module-finiteness | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-1-3 | ex-noether-normalisation-finite-field-weight-choice | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-1-4 | lem-noether-normalisation-inductive-integrality | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-1 | cor-the-kernel-cokernel-sequence-of-a-composite-is-a-snake | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-2 | ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-3 | ex-the-snake-lemma-applied-to-multiplication-by-an-integer | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-4 | thm-four-lemma-in-an-abelian-category | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-5 | thm-naturality-of-the-connecting-morphism | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-6 | thm-sharp-nine-lemma | accuracy | other | facts-block | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-7 | thm-snake-lemma-under-the-weaker-stacks-hypotheses | accuracy | other | facts-block | fixed | 6b-adjudicate |
| frontier-24-S6-a-refuter-7-8 | thm-weak-four-lemma-with-the-exactness-hypotheses-named | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-a-touched-1-cor-affine-radical-ideal-point-separation | cor-affine-radical-ideal-point-separation | accuracy | other | statement | fixed | 6a-read |
| frontier-24-S6-a-touched-1-cor-strong-nullstellensatz-two-inclusions | cor-strong-nullstellensatz-two-inclusions | accuracy | other | statement | fixed | 6a-read |
| frontier-24-S6-a-touched-1-lem-rabinowitsch-substitution-clears-denominators | lem-rabinowitsch-substitution-clears-denominators | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-a-touched-2-cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction | cor-every-irreducible-complex-character-occurs-in-the-induction-of-an-irreducible-constituent-of-its-restriction | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-a-touched-2-thm-mackey-double-coset-formula-for-restricting-an-induced-character | thm-mackey-double-coset-formula-for-restricting-an-induced-character | accuracy | other | facts-block | fixed | 6a-read |
| frontier-24-S6-a-touched-7-lem-half-nine-lemma | lem-half-nine-lemma | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-a-touched-7-thm-nine-lemma-variants-by-which-rows-are-assumed-exact | thm-nine-lemma-variants-by-which-rows-are-assumed-exact | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-a-touched-7-thm-the-connecting-morphism-exists-and-is-unique | thm-the-connecting-morphism-exists-and-is-unique | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-a-touched-7-thm-the-splitting-lemma-follows-from-the-nine-lemma | thm-the-splitting-lemma-follows-from-the-nine-lemma | accuracy | other | statement | fixed | 6a-read |
| frontier-24-S6-b-refuter-3-1 | def-ldu-factorisation | accuracy | false-claim | definition | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-10 | thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts | accuracy | false-claim | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-11 | thm-successive-householder-or-givens-transformations-produce-full-and-reduced-qr-with-operation-counts | accuracy | false-claim | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-3 | thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-4 | thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound | accuracy | false-claim | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-5 | thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-6 | thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-7 | thm-plu-factorisation-exists-for-every-square-matrix-and-detects-singularity | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-8 | thm-exact-column-pivoted-qr-of-a-rank-r-matrix-has-an-invertible-leading-block-and-zero-trailing-block | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-24-S6-b-refuter-3-9 | thm-reduced-qr-solves-full-column-rank-least-squares-without-squaring-the-condition-number | accuracy | citation-inflated | facts-block | narrowed | 6b-adjudicate |
| frontier-24-S6-b-refuter-8-5 | thm-the-first-isomorphism-theorem-for-complexes | accuracy | citation-misattributed | facts-block | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-9-2 | fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-b-refuter-9-3 | lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-b-touched-3-ex-givens-qr-on-a-sparse-matrix | ex-givens-qr-on-a-sparse-matrix | accuracy | arithmetic-error | proof-step | fixed | 6a-read |
| frontier-24-S6-b-touched-3-ex-plu-factorisation-by-hand | ex-plu-factorisation-by-hand | accuracy | arithmetic-error | proof-step | fixed | 6a-read |
| frontier-24-S6-b-touched-3-thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost | thm-cholesky-solves-hermitian-positive-definite-systems-and-has-half-the-lu-factorisation-cost | accuracy | arithmetic-error | statement | fixed | 6a-read |
| frontier-24-S6-b-touched-3-thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound | thm-gaussian-elimination-with-partial-pivoting-computes-a-nearby-factorisation-with-pivot-growth-bound | accuracy | false-or-overstrong-title | title | narrowed | 6b-adjudicate |
| frontier-24-S6-b-touched-8-prop-a-subcomplex-is-the-kernel-of-its-quotient-map | prop-a-subcomplex-is-the-kernel-of-its-quotient-map | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-24-S6-b-touched-8-prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps | prop-an-additive-functor-applies-degreewise-to-complexes-and-chain-maps | accuracy | missing-hypothesis | statement | narrowed | 6a-read |
| frontier-24-S6-b-touched-8-prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials | prop-products-and-coproducts-of-complexes-are-degreewise-when-they-exist-and-preserve-differentials | accuracy | missing-hypothesis | statement | narrowed | 6a-read |
| frontier-24-S6-b-touched-8-thm-the-category-of-complexes-in-an-additive-category-is-additive | thm-the-category-of-complexes-in-an-additive-category-is-additive | accuracy | ill-formed | statement | fixed | 6a-read |
| frontier-24-S6-b-touched-9-lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation | lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-24-S6-b-touched-9-lem-curve-velocity-depends-only-on-the-contact-class | lem-curve-velocity-depends-only-on-the-contact-class | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-24-S6-b-touched-9-prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component | prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-24-S6-b-touched-9-thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity | thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity | accuracy | false-or-overstrong-statement | statement | fixed | 6a-read |
| frontier-24-S6-c-gate-4-1 | prop-simple-integrals-are-bounded-by-total-variation | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-c-gate-4-2 | thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-4-1 | cex-countable-partitions-can-be-strictly-better-than-finite-ones-for-a-complex-measure | accuracy | other | title | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-4-2 | def-total-variation-of-a-signed-or-complex-measure | accuracy | other | definition | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-4-3 | def-simple-integral-against-a-signed-or-complex-measure | accuracy | other | definition | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-4-4 | ex-delta-one-minus-delta-minus-one-has-the-obvious-hahn-and-jordan-decomposition | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-5-3 | lem-riemann-map-extremal-derivative-is-attained | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-5-4 | thm-area-theorem-for-exterior-univalent-functions | accuracy | other | facts-block | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-5-5 | thm-montel-caratheodory-theorem | accuracy | other | statement | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-1 | def-principal-part-at-an-isolated-point | accuracy | other | definition | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-2 | lem-runge-pole-pushing-lemma | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-3 | thm-mittag-leffler-theorem-on-the-plane | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-4 | thm-mittag-leffler-theorem-on-plane-domains | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-5 | thm-mittag-leffler-expansion-of-pi-cotangent | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-6 | thm-hankel-representation-for-reciprocal-gamma | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-refuter-6-7 | thm-stirling-formula-gamma | accuracy | other | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-c-touched-4-cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation | cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation | accuracy | other | facts-block | fixed | 6a-read |
| frontier-24-S6-c-touched-4-ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions | ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions | accuracy | other | statement | fixed | 6a-read |
| frontier-24-S6-c-touched-4-fs-finite-values-and-finite-additivity-force-finite-total-variation | fs-finite-values-and-finite-additivity-force-finite-total-variation | accuracy | other | facts-block | fixed | 6a-read |
| frontier-24-S6-c-touched-4-lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass | lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-4-thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data | thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-4-thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation | thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-4-thm-continuity-from-below-and-above-for-signed-measures | thm-continuity-from-below-and-above-for-signed-measures | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-6-cor-partial-fraction-expansion-of-pi-squared-cosecant-squared | cor-partial-fraction-expansion-of-pi-squared-cosecant-squared | accuracy | other | facts-block | fixed | 6a-read |
| frontier-24-S6-c-touched-6-ex-pole-pushing-along-three-discs | ex-pole-pushing-along-three-discs | accuracy | other | statement | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-beta-gamma-identity | thm-beta-gamma-identity | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-euler-gamma-function-is-holomorphic | thm-euler-gamma-function-is-holomorphic | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-euler-limit-formula-for-gamma | thm-euler-limit-formula-for-gamma | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-euler-reflection-formula | thm-euler-reflection-formula | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-gamma-meromorphic-continuation | thm-gamma-meromorphic-continuation | accuracy | other | statement | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-gamma-weierstrass-product | thm-gamma-weierstrass-product | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-c-touched-6-thm-zero-divisor-theorem-on-plane-domains | thm-zero-divisor-theorem-on-plane-domains | accuracy | other | proof-step | fixed | 6a-read |
| frontier-24-S6-d-gate-10-1 | def-deterministic-finite-automaton | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-2 | def-dfa-acceptance-and-recognized-language | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-3 | prop-every-finite-language-is-regular | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-4 | thm-product-dfa-for-union-and-intersection | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-5 | thm-complementing-accept-states-complements-the-language | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-6 | thm-dfa-for-language-difference | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-7 | def-context-free-grammar | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-8 | def-parse-tree-and-yield | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-gate-10-9 | thm-cfl-closure-under-union-concatenation-star-and-homomorphism | accuracy | other | frontmatter | fixed | 6c-cross |
| frontier-24-S6-d-refuter-10-1 | def-parse-tree-and-yield | accuracy | ill-formed | definition | fixed | 6b-adjudicate |
| frontier-24-S6-d-refuter-10-2 | thm-derivation-parse-tree-correspondence | accuracy | false-or-overstrong-statement | statement | fixed | 6b-adjudicate |
| frontier-24-S6-d-refuter-10-3 | def-ambiguity-and-inherent-ambiguity | accuracy | false-or-overstrong-statement | definition | fixed | 6b-adjudicate |
| frontier-24-S6-d-refuter-10-4 | ex-extended-dfa-transition-respects-concatenation | accuracy | missing-hypothesis | proof-step | fixed | 6b-adjudicate |
| frontier-24-S6-d-refuter-10-6 | thm-greibach-normal-form | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| frontier-24-S6-d-touched-10-lem-gnf-substitution-step-preserves-language | lem-gnf-substitution-step-preserves-language | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-24-S6-d-touched-10-thm-greibach-normal-form | thm-greibach-normal-form | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-24-S8-b-001 | cex-a-pointwise-finite-smooth-family-whose-sum-is-not-continuous | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-b-002 | cor-the-tangent-space-of-an-n-manifold-has-dimension-n | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-003 | def-cholesky-factorisation-with-positive-diagonal | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-004 | def-contact-equivalence-of-smooth-curves-at-a-point | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-005 | def-coordinate-derivations-at-a-point | accuracy | ill-typed-construction | frontmatter | fixed | 8-adjudicate |
| frontier-24-S8-b-006 | def-differential-of-a-smooth-real-valued-function | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-007 | def-ldu-factorisation | accuracy | false-or-overstrong-statement | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-008 | def-normalised-lu-factorisation | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-009 | def-permutation-matrix-partial-pivoting-and-pivot-growth | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-010 | def-real-and-complex-givens-transformations | accuracy | undefined-notation | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-011 | def-the-local-algebra-of-smooth-function-germs | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-012 | def-velocity-derivation-of-a-smooth-curve | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-24-S8-b-013 | ex-a-smooth-partition-on-real-space-subordinate-to-two-half-spaces | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-014 | ex-tangent-basis-change-between-cartesian-and-polar-coordinates | accuracy | invalid-witness | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-015 | ex-the-tangent-bundle-of-the-circle-is-a-cylinder | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-016 | ex-the-tangent-space-of-the-sphere-from-curve-velocities | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-017 | fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-b-018 | fs-an-arbitrary-pointwise-sum-of-smooth-functions-is-smooth | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-b-019 | fs-curve-velocities-in-two-charts-have-the-same-coordinate-tuple | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-b-020 | fs-the-cotangent-bundle-uses-the-same-transition-matrices-as-the-tangent-bundle | accuracy | invalid-witness | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-b-021 | lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-b-022 | lem-chart-bump-at-a-point-with-prescribed-support | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-b-023 | prop-finite-biproducts-of-complexes-are-computed-degreewise | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-024 | thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors | accuracy | missing-case | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-025 | thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-24-S8-b-026 | thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-b-027 | thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-001 | cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation | accuracy | undefined-notation | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-002 | cex-moving-a-total-variation-null-set-changes-a-hahn-decomposition | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-c-003 | cex-total-variation-can-exceed-the-absolute-value-of-the-set-value | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-c-004 | def-principal-part-at-an-isolated-point | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-24-S8-c-005 | def-signed-measure | accuracy | false-or-overstrong-statement | definition | fixed | 8-adjudicate |
| frontier-24-S8-c-006 | ex-pole-pushing-along-three-discs | accuracy | false-boundary-disposition | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-007 | fs-a-hahn-decomposition-is-unique | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-c-008 | fs-finite-values-and-finite-additivity-force-finite-total-variation | accuracy | undefined-notation | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-009 | fs-total-variation-always-equals-the-absolute-value-of-the-set-value | accuracy | invalid-witness | facts-block | fixed | 8-adjudicate |
| frontier-24-S8-c-010 | lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass | accuracy | ill-typed-construction | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-011 | lem-riemann-map-extremal-family-is-nonempty | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-012 | lem-runge-pole-pushing-lemma | accuracy | missing-case | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-013 | lem-two-omitted-values-rule-out-an-essential-singularity | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-014 | prop-simple-integrals-are-bounded-by-total-variation | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-015 | thm-gamma-weierstrass-product | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-016 | thm-mittag-leffler-theorem-on-plane-domains | accuracy | ill-typed-construction | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-017 | thm-stirling-formula-gamma | accuracy | false-computation | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-018 | thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-019 | thm-total-variation-of-a-complex-measure-is-finite | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-020 | thm-zero-divisor-theorem-on-plane-domains | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-24-S8-c-hash-form-001 | research/frontier-24-judge-adjudications.jsonl | breaking-runtime | prompt-transcription | contract-row | fixed | 8-adjudicate |
| frontier-24-S8R1-b-001 | def-permutation-matrix-partial-pivoting-and-pivot-growth | accuracy | missing-hypothesis | definition | fixed | 8-rejudge |
| frontier-24-S8R1-b-002 | def-real-and-complex-givens-transformations | accuracy | missing-hypothesis | definition | fixed | 8-rejudge |
| frontier-24-S8R1-b-003 | def-velocity-derivation-of-a-smooth-curve | accuracy | missing-hypothesis | definition | fixed | 8-rejudge |
| frontier-24-S8R1-b-004 | ex-the-tangent-bundle-of-the-circle-is-a-cylinder | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-24-S8R1-b-005 | ex-the-tangent-space-of-the-sphere-from-curve-velocities | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-24-S8R1-b-006 | lem-chart-bump-at-a-point-with-prescribed-support | accuracy | citation-truncated | facts-block | fixed | 8-rejudge |
| frontier-24-S8R1-b-007 | thm-gaussian-elimination-multipliers-produce-the-normalised-lu-factors | accuracy | missing-hypothesis | statement | fixed | 8-rejudge |
| frontier-24-S8R1-b-008 | thm-householder-qr-is-backward-stable-in-the-standard-floating-point-model | accuracy | invalid-inference | proof-step | fixed | 8-rejudge |
| frontier-24-S8R1-b-009 | thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure | accuracy | missing-choice-scope | statement | narrowed | 8-rejudge |
| frontier-24-S8R1-b-010 | thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure | accuracy | missing-choice-scope | statement | narrowed | 8-rejudge |

Grouped by class: accuracy 179; breaking-runtime 1.
Grouped by location: contract-row 1; definition 23; facts-block 23; frontmatter 10; proof-step 80; remark 1; statement 40; title 2.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-5.6-terra | 560 | 243 | 317 | 0 |

Across 560 text version(s) with configured-judge evidence: 560 complete model set(s), 243 all keep, 317 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 105; confirmed_nonfatal 222; false_positive 10.

## Repeated repairs and pathway closure

No item was repaired more than once according to the touch ledger.
Pathway obligations closed: 7/7; categories: abstract-algebra, category-theory, complex-analysis, linear-algebra, measure-theory, real-analysis.

## Caveats

- The readiness verdict is explicitly conditional on owner approval, with owner actions still remaining for mathematical audit, deliberate `status:published` changes, and deployment.
- Closure is not a pure all-pass story; the packet records a mix of kept verdicts, adjudicated rejections, and terminal repaired resolutions.
- Some accepted repairs narrowed scope rather than merely fixing prose, especially where statements had overclaimed field, arithmetic-model, or foundational scope.
- The fatal-defect pattern was concentrated in statements, facts blocks, and proof steps, with invalid inference and missing-hypothesis issues prominent in the packet.
- Pathway closure was achieved by rewrites, so reading order and exposition changed in addition to item-level mathematics.

## Owner reading priorities

- Scope-narrowed numerical linear algebra results: Several core results were repaired by restricting claimed scope to the real case or to `R/C`, so the owner should confirm that the published contract still matches intended coverage.
- Choice-sensitive geometry and algebra statements: The packet records explicit foundational-scope repairs, including Choice-sensitive items and tangent/cotangent bundle material, so the owner should verify that the repository's intended foundational stance is now stated correctly.
- Exact-sequence and diagram-chase family: Multiple snake-, four-, five-, and nine-lemma related items were materially rebuilt or reread after invalid-inference findings, making this a high-value cluster for owner spot-checking.
- Rewritten pathways across affected categories: Pathway obligations closed by rewrite rather than by no-op confirmation, so the owner should review whether the new sequencing and prose still reflect the intended reader journey.

## Workflow recommendations

1. Do the owner mathematical audit as a targeted pass over scope-narrowed items and terminal repaired flagship statements before changing any publication status. (risk: low) — Reduces the main remaining publication risk, which is semantic overclaim or repaired-proof mismatch rather than workflow incompleteness. Evidence: The packet reports no workflow-owned blockers, but it explicitly leaves owner audit and deliberate `status:published` changes outstanding, and it records terminal repaired resolutions plus statement/title narrowings.
2. Review the numerical linear algebra page set with special attention to statements whose scope was narrowed to real arithmetic or to `R/C`. (risk: medium) — Prevents publishing narrower theorems under broader expectations and catches any downstream page-summary mismatch. Evidence: The packet specifically notes narrowed scope for Gaussian elimination, Householder QR, PLU, pivoted QR, and least-squares related results.
3. Review the Choice-sensitive and foundational-scope items as a policy decision, not just a proof check. (risk: medium) — Makes the final publication stance coherent on whether foundational assumptions are surfaced explicitly in user-facing mathematics. Evidence: The packet records missing-choice-scope and explicit Axiom of Choice repairs in repaired algebraic-geometry and manifold-structure material.
4. Inspect the rewritten pathways before deployment and publish only the exact attested content snapshot. (risk: low) — Protects both instructional coherence and release integrity at the final handoff. Evidence: The packet says pathway obligations closed by rewrite and includes a specific `content_sha256` for the readiness snapshot.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
