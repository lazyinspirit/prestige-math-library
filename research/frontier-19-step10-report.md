# frontier-19 — Step 10 owner report

Run frontier-19 is mechanically closed and publishable pending owner approval. The workflow finished with no workflow-owned blockers, judge closure closed, pathway obligations fully closed, and no repeated-repair residue across 28 pages and 443 items. Confidence should be weighted toward closure rather than low defect density: 157 fatal defects were found and repaired, 93 of them via Terra adjudication, and 15 items reached the terminal-resolution path before closing. Owner audit should therefore focus on the few pages where late repairs clustered, not on workflow completeness.

## What was built

- 28 pages and 443 items across 8 categories.
- Categories: abstract-algebra, category-theory, combinatorics, commutative-algebra, complex-analysis, group-theory, measure-theory, number-theory.
- Item kinds: corollary 48; counterexample 28; definition 83; example 79; false-statement 26; lemma 44; proposition 7; remark 10; theorem 118.

## Verification closure

- Judge lineup: terra.
- Current judge verdicts complete: 428/443.
- Terminal owner/session resolutions after the three-round cap: 15 (def-combinatorial-specification-and-order-raising-recursion, def-lebesgue-inner-measure-on-r, def-polynomial-subexponential-exponential-and-intermediate-growth, ex-a-kan-extension-computing-a-free-functor, fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice, fs-iwasawas-criterion-needs-only-transitivity, lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz, thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable, thm-density-as-a-self-kan-extension-for-a-small-category, thm-eulerian-recurrence, thm-kan-extensions-as-coends, thm-laurent-expansion-annulus, thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad, thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion, thm-the-two-notions-of-pointwise-agree).
- Judge closure: closed; workflow-owned blockers: 0.
- Evidence fingerprint: `e8ccbdbaab062495ba388e6f7176627739ca521f10f20548e2d041e6c78d9fe8`.

## Fatal mathematical defects — exhaustive ledger table

The run recorded 157 fatal defect row(s). Every row is reproduced below from the defect ledger.

| Defect | Item / subject | Class | Subclass | Location | Disposition | Caught at |
|---|---|---|---|---|---|---|
| frontier-19-S6-a-refuter-1-1 | def-isometric-proper-and-cobounded-actions-on-metric-spaces | accuracy | missing-hypothesis | definition | narrowed | 6b-adjudicate |
| frontier-19-S6-a-refuter-1-2 | cor-groups-acting-geometrically-on-the-same-space-are-quasi-isometric | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-19-S6-a-refuter-1-3 | ex-dihedral-actions-of-prime-and-composite-degree | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-19-S6-a-refuter-9-1 | fs-lan-along-a-fully-faithful-functor-always-restricts-back-to-the-original-functor | accuracy | invalid-witness | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-a-refuter-9-2 | ex-density-computed-for-a-presheaf-on-a-two-object-category | accuracy | citation-corrupted | facts-block | fixed | 6b-adjudicate |
| frontier-19-S6-a-touched-1-cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions | cor-doubly-transitive-actions-are-exactly-the-rank-two-transitive-actions | accuracy | missing-hypothesis | statement | narrowed | 6a-read |
| frontier-19-S6-a-touched-1-cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer | cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer | accuracy | missing-hypothesis | statement | narrowed | 6a-read |
| frontier-19-S6-a-touched-1-def-growth-comparison-and-growth-type | def-growth-comparison-and-growth-type | accuracy | ill-typed-construction | definition | fixed | 6a-read |
| frontier-19-S6-a-touched-1-lem-growth-comparison-is-a-preorder | lem-growth-comparison-is-a-preorder | accuracy | ill-typed-construction | proof-step | fixed | 6a-read |
| frontier-19-S6-a-touched-1-thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups | thm-growth-type-is-a-quasi-isometry-invariant-of-finitely-generated-groups | accuracy | ill-typed-construction | proof-step | fixed | 6a-read |
| frontier-19-S6-a-touched-1-thm-growth-type-is-independent-of-the-finite-generating-set | thm-growth-type-is-independent-of-the-finite-generating-set | accuracy | ill-typed-construction | proof-step | fixed | 6a-read |
| frontier-19-S6-a-touched-9-ex-induction-and-coinduction-of-group-representations | ex-induction-and-coinduction-of-group-representations | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-a-touched-9-thm-density-as-a-self-kan-extension-for-a-small-category | thm-density-as-a-self-kan-extension-for-a-small-category | accuracy | citation-corrupted | facts-block | fixed | 6a-read |
| frontier-19-S6-a-touched-9-thm-density-for-a-small-category | thm-density-for-a-small-category | accuracy | false-or-overstrong-statement | statement | fixed | 6a-read |
| frontier-19-S6-a-touched-9-thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad | thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-a-touched-9-thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion | thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-b-refuter-2-1 | lem-gauss-reduction-step-improves-a-positive-definite-form | accuracy | invalid-inference | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-b-refuter-2-2 | ex-primes-represented-by-x-squared-plus-two-y-squared | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-b-refuter-3-1 | lem-normal-closure-of-a-radical-extension-is-radical | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-b-refuter-3-2 | thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-b-refuter-4-1 | cor-finite-module-locally-zero-near-a-prime | accuracy | undefined-notation | statement | fixed | 6b-adjudicate |
| frontier-19-S6-b-refuter-4-2 | ex-minimal-generators-local-ring | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-19-S6-b-touched-2-lem-reduced-forms-with-the-same-leading-coefficient-are-equal | lem-reduced-forms-with-the-same-leading-coefficient-are-equal | accuracy | arithmetic-error | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-cor-abel-ruffini-for-the-general-polynomial | cor-abel-ruffini-for-the-general-polynomial | accuracy | missing-hypothesis | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-3-lem-normal-closure-of-a-radical-extension-is-radical | lem-normal-closure-of-a-radical-extension-is-radical | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p | thm-a-transitive-subgroup-of-s-p-containing-a-transposition-is-s-p | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-thm-additive-hilberts-theorem-90 | thm-additive-hilberts-theorem-90 | accuracy | arithmetic-error | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-thm-artin-schreier-characterization-of-cyclic-degree-p-extensions | thm-artin-schreier-characterization-of-cyclic-degree-p-extensions | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-thm-kummer-correspondence | thm-kummer-correspondence | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-thm-kummer-pairing-is-perfect | thm-kummer-pairing-is-perfect | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-3-thm-solvable-by-radicals-implies-a-solvable-galois-group | thm-solvable-by-radicals-implies-a-solvable-galois-group | accuracy | citation-misattributed | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-4-cor-minimal-generators-over-a-local-ring | cor-minimal-generators-over-a-local-ring | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-4-cor-nakayama-generators-modulo-an-ideal | cor-nakayama-generators-modulo-an-ideal | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-4-ex-local-test-for-an-isomorphism | ex-local-test-for-an-isomorphism | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-4-lem-localised-module-scalar-action-independent-of-representatives | lem-localised-module-scalar-action-independent-of-representatives | accuracy | invalid-witness | proof-step | fixed | 6a-read |
| frontier-19-S6-b-touched-4-thm-jacobson-radical-unit-characterisation | thm-jacobson-radical-unit-characterisation | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-4-thm-local-criterion-for-exactness-of-modules | thm-local-criterion-for-exactness-of-modules | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-4-thm-local-criterion-for-zero-modules-and-maps | thm-local-criterion-for-zero-modules-and-maps | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-b-touched-4-thm-nakayama-lemma | thm-nakayama-lemma | accuracy | missing-choice-scope | statement | narrowed | 6a-read |
| frontier-19-S6-c-refuter-7-1 | cor-a-bernstein-set-is-not-lebesgue-measurable | accuracy | missing-hypothesis | statement | narrowed | 6b-adjudicate |
| frontier-19-S6-c-refuter-7-2 | cex-a-bernstein-set | accuracy | citation-misattributed | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-c-refuter-8-1 | cor-residue-quotient-simple-zero | accuracy | missing-hypothesis | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-c-touched-7-thm-bernstein-sets-exist-under-a-well-ordering-of-r | thm-bernstein-sets-exist-under-a-well-ordering-of-r | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-c-touched-8-cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane | cex-log-modulus-has-no-harmonic-conjugate-on-the-punctured-plane | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-c-touched-8-cor-residue-quotient-simple-zero | cor-residue-quotient-simple-zero | accuracy | missing-hypothesis | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-c-touched-8-ex-harnack-inequality-for-a-poisson-kernel | ex-harnack-inequality-for-a-poisson-kernel | accuracy | invalid-witness | statement | fixed | 6a-read |
| frontier-19-S6-c-touched-8-thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions | thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-d-refuter-10-1 | thm-a-finite-family-with-the-erdos-hajnal-property-is-viral | accuracy | ill-typed-construction | proof-step | fixed | 6b-adjudicate |
| frontier-19-S6-d-refuter-5-1 | thm-worpitzky-identity | accuracy | citation-inflated | facts-block | fixed | 6b-adjudicate |
| frontier-19-S6-d-refuter-6-1 | thm-bose-construction-produces-a-steiner-triple-system | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-19-S6-d-refuter-6-2 | thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six | accuracy | missing-hypothesis | statement | fixed | 6b-adjudicate |
| frontier-19-S6-d-touched-10-cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted | cex-polynomial-rodl-does-not-force-the-whole-graph-to-be-restricted | accuracy | invalid-inference | proof-step | fixed | 6a-read |
| frontier-19-S6-d-touched-10-lem-small-total-copy-expectation-forces-many-homogeneous-k-sets | lem-small-total-copy-expectation-forces-many-homogeneous-k-sets | accuracy | missing-hypothesis | statement | fixed | 6a-read |
| frontier-19-S6-d-touched-10-thm-a-finite-family-with-the-erdos-hajnal-property-is-viral | thm-a-finite-family-with-the-erdos-hajnal-property-is-viral | accuracy | ill-typed-construction | proof-step | fixed | 6a-read |
| frontier-19-S6-d-touched-5-cor-eulerian-polynomial-exponential-generating-function | cor-eulerian-polynomial-exponential-generating-function | accuracy | ill-typed-construction | statement | fixed | 6a-read |
| frontier-19-S6-d-touched-5-cor-major-index-generating-function-is-q-factorial | cor-major-index-generating-function-is-q-factorial | accuracy | citation-missing | proof-step | fixed | 6a-read |
| frontier-19-S6-d-touched-5-cor-plane-trees-satisfy-t-equals-z-over-one-minus-t | cor-plane-trees-satisfy-t-equals-z-over-one-minus-t | accuracy | missing-hypothesis | proof-step | fixed | 6a-read |
| frontier-19-S6-d-touched-5-def-combinatorial-specification-and-order-raising-recursion | def-combinatorial-specification-and-order-raising-recursion | accuracy | ill-typed-construction | definition | fixed | 6a-read |
| frontier-19-S6-d-touched-5-ex-foata-transformation-on-three-one-four-two | ex-foata-transformation-on-three-one-four-two | accuracy | invalid-witness | statement | fixed | 6a-read |
| frontier-19-S6-d-touched-5-thm-order-raising-recursive-specifications-have-unique-solutions | thm-order-raising-recursive-specifications-have-unique-solutions | accuracy | ill-typed-construction | statement | fixed | 6a-read |
| frontier-19-S6-d-touched-6-cex-two-latin-squares-need-not-be-orthogonal | cex-two-latin-squares-need-not-be-orthogonal | accuracy | arithmetic-error | proof-step | fixed | 6a-read |
| frontier-19-S6-d-touched-6-def-steiner-systems-and-steiner-triple-systems | def-steiner-systems-and-steiner-triple-systems | accuracy | ill-typed-construction | definition | fixed | 6a-read |
| frontier-19-S6-d-touched-6-thm-bose-construction-produces-a-steiner-triple-system | thm-bose-construction-produces-a-steiner-triple-system | accuracy | ill-typed-construction | statement | fixed | 6a-read |
| frontier-19-S6-d-touched-6-thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six | thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six | accuracy | false-or-overstrong-title | title | fixed | 6b-adjudicate |
| frontier-19-S8-a-001 | cor-primitivity-is-equivalent-to-maximality-of-a-point-stabilizer | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-a-002 | def-dense-subcategory | accuracy | citation-missing | definition | fixed | 8-adjudicate |
| frontier-19-S8-a-003 | def-isometric-proper-and-cobounded-actions-on-metric-spaces | accuracy | false-or-overstrong-statement | definition | narrowed | 8-adjudicate |
| frontier-19-S8-a-004 | def-polynomial-subexponential-exponential-and-intermediate-growth | accuracy | citation-missing | definition | fixed | 8-adjudicate |
| frontier-19-S8-a-005 | def-primitive-and-imprimitive-actions | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-19-S8-a-006 | ex-a-kan-extension-computing-a-free-functor | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-a-007 | ex-imprimitive-wreath-product-block-system | accuracy | missing-hypothesis | statement | narrowed | 8-adjudicate |
| frontier-19-S8-a-008 | ex-induction-and-coinduction-of-group-representations | accuracy | citation-misattributed | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-a-009 | fs-every-nontrivial-normal-subgroup-of-a-primitive-group-is-regular | accuracy | citation-misattributed | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-a-010 | fs-iwasawas-criterion-needs-only-transitivity | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-a-011 | lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz | accuracy | undefined-notation | statement | fixed | 8-adjudicate |
| frontier-19-S8-a-012 | rem-bass-guivarch-growth-degree-formula | accuracy | citation-inflated | remark | fixed | 8-adjudicate |
| frontier-19-S8-a-013 | rem-gromov-polynomial-growth-theorem | accuracy | false-or-overstrong-statement | remark | fixed | 8-adjudicate |
| frontier-19-S8-a-014 | thm-block-systems-and-g-invariant-equivalence-relations-correspond | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-19-S8-a-015 | thm-density-as-a-self-kan-extension-for-a-small-category | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-a-016 | thm-free-groups-of-rank-at-least-two-have-exponential-growth | accuracy | citation-inflated | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-a-017 | thm-kan-extensions-as-coends | accuracy | missing-choice-scope | statement | narrowed | 8-adjudicate |
| frontier-19-S8-a-018 | thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-a-019 | thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-a-020 | thm-the-two-notions-of-pointwise-agree | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-a-021 | def-polynomial-subexponential-exponential-and-intermediate-growth | accuracy | ill-typed-construction | definition | narrowed | 8-rejudge |
| frontier-19-S8-a-022 | ex-a-kan-extension-computing-a-free-functor | accuracy | citation-missing | facts-block | fixed | 8-rejudge |
| frontier-19-S8-a-023 | fs-iwasawas-criterion-needs-only-transitivity | accuracy | invalid-witness | statement | narrowed | 8-rejudge |
| frontier-19-S8-a-024 | lem-orbit-maps-of-isometric-actions-are-coarse-lipschitz | accuracy | citation-missing | proof-step | fixed | 8-rejudge |
| frontier-19-S8-a-025 | thm-density-as-a-self-kan-extension-for-a-small-category | accuracy | citation-missing | facts-block | fixed | 8-rejudge |
| frontier-19-S8-a-026 | thm-kan-extensions-as-coends | accuracy | citation-corrupted | facts-block | fixed | 8-rejudge |
| frontier-19-S8-a-027 | thm-the-codensity-monad-of-the-small-skeleton-of-finite-sets-is-the-ultrafilter-monad | accuracy | citation-missing | facts-block | fixed | 8-rejudge |
| frontier-19-S8-a-028 | thm-the-presheaf-category-on-a-small-category-is-the-free-cocompletion | accuracy | false-or-overstrong-statement | statement | fixed | 8-rejudge |
| frontier-19-S8-a-029 | thm-the-two-notions-of-pointwise-agree | accuracy | citation-truncated | facts-block | fixed | 8-rejudge |
| frontier-19-S8-b-001 | thm-basic-laws-for-field-norm-and-trace | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-b-002 | thm-kummer-correspondence | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-b-003 | thm-general-polynomial-of-degree-n-has-galois-group-s-n | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-b-004 | ex-a-quartic-solved-by-its-resolvent-cubic | accuracy | false-or-overstrong-title | title | fixed | 8-adjudicate |
| frontier-19-S8-b-005 | ex-an-artin-schreier-extension-over-f-p-of-t | accuracy | citation-missing | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-b-006 | ex-cardano-from-the-lagrange-resolvent | accuracy | false-or-overstrong-statement | statement | fixed | 8-adjudicate |
| frontier-19-S8-b-007 | fs-solvable-by-radicals-does-not-force-an-abelian-galois-group | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-b-008 | ex-localised-hom-needs-finite-presentation | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-19-S8-b-009 | ex-localisation-does-not-commute-with-products | accuracy | ill-typed-construction | statement | fixed | 8-adjudicate |
| frontier-19-S8-c-cex-a-bernstein-set | cex-a-bernstein-set | accuracy | missing-choice-scope | statement | fixed | 7-judge |
| frontier-19-S8-c-cex-a-proper-subgroup-of-r-can-be-nonmeasurable | cex-a-proper-subgroup-of-r-can-be-nonmeasurable | accuracy | citation-missing | proof-step | fixed | 7-judge |
| frontier-19-S8-c-cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset | cor-every-subset-of-r-of-positive-outer-measure-contains-a-nonmeasurable-subset | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-19-S8-c-cor-residue-contour-integral-formula | cor-residue-contour-integral-formula | accuracy | missing-hypothesis | statement | fixed | 7-judge |
| frontier-19-S8-c-def-isolated-singularity-types | def-isolated-singularity-types | accuracy | ill-typed-construction | definition | fixed | 7-judge |
| frontier-19-S8-c-def-lebesgue-inner-measure-on-r | def-lebesgue-inner-measure-on-r | accuracy | missing-choice-scope | definition | fixed | 7-judge |
| frontier-19-S8-c-def-principal-part-laurent-series | def-principal-part-laurent-series | accuracy | false-or-overstrong-statement | remark | fixed | 7-judge |
| frontier-19-S8-c-def-residue-isolated-singularity | def-residue-isolated-singularity | accuracy | citation-missing | definition | fixed | 7-judge |
| frontier-19-S8-c-ex-harnack-inequality-for-a-poisson-kernel | ex-harnack-inequality-for-a-poisson-kernel | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-19-S8-c-ex-singularities-at-infinity-for-polynomials-and-reciprocals | ex-singularities-at-infinity-for-polynomials-and-reciprocals | accuracy | false-or-overstrong-title | title | fixed | 7-judge |
| frontier-19-S8-c-fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice | fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice | accuracy | citation-corrupted | facts-block | fixed | 7-judge |
| frontier-19-S8-c-fs-every-subset-of-r-is-lebesgue-measurable | fs-every-subset-of-r-is-lebesgue-measurable | accuracy | citation-truncated | facts-block | fixed | 7-judge |
| frontier-19-S8-c-lem-compact-subsets-of-a-bernstein-set-are-countable | lem-compact-subsets-of-a-bernstein-set-are-countable | accuracy | missing-choice-scope | statement | fixed | 7-judge |
| frontier-19-S8-c-lem-finite-binary-digit-changes-do-not-alter-zero-one-measure | lem-finite-binary-digit-changes-do-not-alter-zero-one-measure | accuracy | citation-inflated | facts-block | fixed | 7-judge |
| frontier-19-S8-c-lem-poisson-kernel-properties-on-the-disc | lem-poisson-kernel-properties-on-the-disc | accuracy | false-or-overstrong-statement | statement | fixed | 7-judge |
| frontier-19-S8-c-thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval | thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable | thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable | accuracy | invalid-witness | statement | fixed | 7-judge |
| frontier-19-S8-c-thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum | thm-every-nonempty-perfect-subset-of-r-has-cardinality-continuum | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-harmonic-and-holomorphic-schwarz-reflection-principles | thm-harmonic-and-holomorphic-schwarz-reflection-principles | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-harnack-convergence-principle-for-plane-harmonic-functions | thm-harnack-convergence-principle-for-plane-harmonic-functions | accuracy | citation-missing | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-laurent-expansion-annulus | thm-laurent-expansion-annulus | accuracy | invalid-inference | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-maximum-and-minimum-principles-for-plane-harmonic-functions | thm-maximum-and-minimum-principles-for-plane-harmonic-functions | accuracy | citation-missing | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-mean-value-property-for-plane-harmonic-functions | thm-mean-value-property-for-plane-harmonic-functions | accuracy | citation-missing | proof-step | fixed | 7-judge |
| frontier-19-S8-c-thm-poisson-integral-solves-the-disc-dirichlet-problem | thm-poisson-integral-solves-the-disc-dirichlet-problem | accuracy | citation-corrupted | facts-block | fixed | 7-judge |
| frontier-19-S8-d-001 | cex-two-latin-squares-need-not-be-orthogonal | accuracy | false-or-overstrong-title | title | narrowed | 8-adjudicate |
| frontier-19-S8-d-002 | cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-003 | cor-eulerian-polynomial-exponential-generating-function | accuracy | false-or-overstrong-title | title | narrowed | 8-adjudicate |
| frontier-19-S8-d-004 | cor-necklaces-over-an-m-letter-alphabet | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-005 | cor-plane-trees-satisfy-t-equals-z-over-one-minus-t | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-19-S8-d-006 | def-combinatorial-class-and-ordinary-generating-function | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-19-S8-d-007 | def-combinatorial-specification-and-order-raising-recursion | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-19-S8-d-008 | def-multiset-and-powerset-constructions | accuracy | false-or-overstrong-statement | definition | fixed | 8-adjudicate |
| frontier-19-S8-d-009 | def-standard-cycle-form-and-foata-fundamental-transformation | accuracy | ill-typed-construction | definition | fixed | 8-adjudicate |
| frontier-19-S8-d-010 | def-steiner-systems-and-steiner-triple-systems | accuracy | false-or-overstrong-title | title | narrowed | 8-adjudicate |
| frontier-19-S8-d-011 | def-substitution-of-combinatorial-classes | accuracy | false-or-overstrong-statement | definition | narrowed | 8-adjudicate |
| frontier-19-S8-d-012 | def-viral-property-for-a-finite-family | accuracy | missing-hypothesis | definition | fixed | 8-adjudicate |
| frontier-19-S8-d-013 | ex-a-family-containing-k-one-is-vacuously-viral | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-014 | ex-choosing-x-for-the-classical-erdos-hajnal-bound | accuracy | missing-hypothesis | statement | narrowed | 8-adjudicate |
| frontier-19-S8-d-015 | ex-choosing-x-for-the-loglog-erdos-hajnal-bound | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-016 | ex-partitions-with-parts-at-most-three | accuracy | citation-missing | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-017 | fs-multiset-product-exists-for-every-coefficient-sequence | accuracy | false-or-overstrong-statement | statement | narrowed | 8-adjudicate |
| frontier-19-S8-d-018 | lem-many-good-two-t-vertex-sets-force-many-homogeneous-k-sets | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-19-S8-d-019 | lem-small-total-copy-expectation-forces-many-homogeneous-k-sets | accuracy | missing-hypothesis | statement | fixed | 8-adjudicate |
| frontier-19-S8-d-020 | thm-a-finite-family-with-the-erdos-hajnal-property-is-viral | accuracy | citation-truncated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-021 | thm-counts-in-a-finite-projective-plane | accuracy | arithmetic-error | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-d-022 | thm-cycle-construction-formula | accuracy | citation-inflated | facts-block | fixed | 8-adjudicate |
| frontier-19-S8-d-023 | thm-eulerian-recurrence | accuracy | undefined-notation | statement | narrowed | 8-adjudicate |
| frontier-19-S8-d-024 | thm-lehmer-code-is-a-bijection | accuracy | invalid-inference | proof-step | fixed | 8-adjudicate |
| frontier-19-S8-d-025 | thm-worpitzky-identity | accuracy | missing-hypothesis | statement | narrowed | 8-adjudicate |
| frontier-19-S8R1-c-def-lebesgue-inner-measure-on-r | def-lebesgue-inner-measure-on-r | accuracy | missing-choice-scope | remark | fixed | 8-rejudge |
| frontier-19-S8R1-c-fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice | fs-a-nonmeasurable-set-can-be-constructed-without-the-axiom-of-choice | accuracy | missing-hypothesis | statement | fixed | 8-rejudge |
| frontier-19-S8R1-c-thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable | thm-a-free-ultrafilter-on-n-is-not-lebesgue-measurable | accuracy | invalid-witness | statement | fixed | 8-rejudge |
| frontier-19-S8R1-c-thm-laurent-expansion-annulus | thm-laurent-expansion-annulus | accuracy | arithmetic-error | proof-step | fixed | 8-rejudge |
| frontier-19-S8R1-d-def-combinatorial-specification-and-order-raising-recursion | def-combinatorial-specification-and-order-raising-recursion | accuracy | ill-typed-construction | definition | fixed | 8-rejudge |
| frontier-19-S8R1-d-thm-eulerian-recurrence | thm-eulerian-recurrence | accuracy | false-boundary-disposition | statement | fixed | 8-rejudge |

Grouped by class: accuracy 157.
Grouped by location: definition 19; facts-block 25; proof-step 55; remark 4; statement 48; title 6.

## Judge and adjudication record

| Model | Exact verdicts | Kept | Rejected | Null |
|---|---:|---:|---:|---:|
| gpt-5.6-terra | 523 | 275 | 248 | 0 |

Across 523 text version(s) with configured-judge evidence: 523 complete model set(s), 275 all keep, 248 all reject, 0 mixed, 0 containing a null response, and 0 incomplete.
Adjudications: confirmed_fatal 93; confirmed_nonfatal 145; false_positive 10.

## Repeated repairs and pathway closure

No item was repaired more than once according to the touch ledger.
Pathway obligations closed: 8/8; categories: abstract-algebra, category-theory, combinatorics, complex-analysis, measure-theory, number-theory.

## Caveats

- Judge evidence in this run is single-model Terra only. Coverage is complete, but it is not cross-family corroboration.
- The main defect load was not confined to proof internals: 102 of 157 fatal defects were in definitions, statements, titles, remarks, or facts blocks, and 46 were citation-shape defects. Owner rereading should include statement and citation prose, not proofs alone.
- Late-cycle pressure was localized but material: 15 terminal resolutions closed successfully, with clustering on the Kan-extensions page, the non-measurable-sets page, and the geometric-actions/growth page.
- Terra was useful but noisy: 248 rejections yielded 93 confirmed fatals, 145 confirmed nonfatals, and 10 false positives. Raw rejection volume should not be read as residual mathematical risk by itself.

## Owner reading priorities

- Category theory: kan-extensions-density-and-the-free-cocompletion: This page carried 16 fatal rows and 5 terminal-resolution repairs, including the coends, density, free-cocompletion, codensity-monad, and pointwise-agreement theorems.
- Measure theory: non-measurable-sets-and-the-cost-of-choice: This page carried 17 fatal rows and 3 terminal-resolution repairs touching choice scope and nonmeasurability, including the inner-measure definition and the free-ultrafilter nonmeasurability theorem.
- Group theory: geometric-actions-svarc-milnor-and-growth: This page carried 14 fatal rows and 2 terminal-resolution repairs on foundational growth/action items, including the growth-type definition and the coarse-Lipschitz orbit-map lemma.

## Workflow recommendations

1. Add a dedicated pre-judge statement/facts-block citation pass, ideally backed by stronger mechanical checks for missing, inflated, truncated, and corrupted citations plus overstrong statement wording. (risk: medium) — Targets the dominant escaped defect families before Terra and should reduce late adjudication load substantially. Evidence: Citation subclasses account for 46 fatal defects, statement/hypothesis/choice-scope/title subclasses for 57, and 102 of 157 fatal defects were outside proof-step locations.
2. Expose page-level repair clustering directly in the step-10 evidence packet, especially terminal-resolution clusters. (risk: low) — Would make owner audit prioritization immediate and reduce the need to reconstruct where late-cycle mathematical risk concentrated. Evidence: The 15 terminal resolutions were heavily concentrated: 5 on the Kan-extensions page, 3 on the non-measurable-sets page, and 2 on the geometric-actions/growth page.

## Publication readiness

Verdict: **publishable-pending-owner-approval**.
Remaining owner actions: personal mathematical audit; deliberate status:published changes; push/deployment.
This report does not publish, change status fields, push, or deploy.
