# Step 6c repair — audit-manifest

This file is the authority for repair cycle 2.
Primary gate: `audit-manifest`
Reason: - [dependency; published-backward] thm-pi-system-criterion-for-independent-sigma-algebras (independence-borel-cantelli-and-zero-one-laws, frontier-30-batch-5) -> def-pi-system (sigma-algebras-and-borel-sets)
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `*`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
# Audit manifest

## Batches
- frontier-30-batch-1: brauer-characters-and-decomposition-matrices, brauer-characters-and-decomposition-matrices-examples, second-cohomology-and-abelian-kernel-extensions, second-cohomology-and-abelian-kernel-extensions-examples
- frontier-30-batch-2: zariski-topology-on-prime-spectra, zariski-topology-on-prime-spectra-examples
- frontier-30-batch-3: differentiation-of-monotone-functions-and-the-vitali-covering-theorem, differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples
- frontier-30-batch-4: the-analytic-hahn-banach-theorem, the-analytic-hahn-banach-theorem-examples
- frontier-30-batch-5: independence-borel-cantelli-and-zero-one-laws, independence-borel-cantelli-and-zero-one-laws-examples
- frontier-30-batch-6: fejer-and-poisson-summability-of-fourier-series, fejer-and-poisson-summability-of-fourier-series-examples
- frontier-30-batch-7: partial-differential-equations-and-characteristics, partial-differential-equations-and-characteristics-examples
- frontier-30-batch-8: dirichlet-characters-l-functions-and-primes-in-progressions, dirichlet-characters-l-functions-and-primes-in-progressions-examples, hilbert-symbols-and-the-quadratic-local-global-principle, hilbert-symbols-and-the-quadratic-local-global-principle-examples
- frontier-30-batch-9: enriched-categories, enriched-categories-examples
- frontier-30-batch-10: delta-functors-and-universality, delta-functors-and-universality-examples
- frontier-30-batch-11: singular-chains-and-singular-homology, singular-chains-and-singular-homology-examples
- frontier-30-batch-12: morphisms-local-rings-and-rational-maps-of-affine-varieties, morphisms-local-rings-and-rational-maps-of-affine-varieties-examples
- frontier-30-batch-13: sheaf-operations-exactness-ringed-spaces-and-module-pullback, sheaf-operations-exactness-ringed-spaces-and-module-pullback-examples
- frontier-30-batch-14: from-generalized-niceness-to-erdos-hajnal, from-generalized-niceness-to-erdos-hajnal-examples, property-star-and-comb-outcomes, property-star-and-comb-outcomes-examples
- frontier-30-batch-15: distributions-integral-manifolds-and-the-frobenius-theorem, distributions-integral-manifolds-and-the-frobenius-theorem-examples
- frontier-30-batch-16: harish-chandra-isomorphism-casimir-and-central-characters, harish-chandra-isomorphism-casimir-and-central-characters-examples
- frontier-30-batch-17: artin-induction-and-rational-characters, artin-induction-and-rational-characters-examples
- frontier-30-batch-18: morse-functions-critical-values-and-genericity, morse-functions-critical-values-and-genericity-examples
- frontier-30-batch-19: post-correspondence-and-language-undecidability, post-correspondence-and-language-undecidability-examples, acceptable-numberings-smn-and-the-recursion-theorem, acceptable-numberings-smn-and-the-recursion-theorem-examples
- frontier-30-batch-20: classical-np-completeness-reductions, classical-np-completeness-reductions-examples

## Edge summary
- published-backward: 681
- same-batch: 1138
- unresolved: 68

## Relationships to audit outside a single batch
- [dependency; published-backward] def-teichmuller-lift-in-a-splitting-p-modular-system (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> def-splitting-p-modular-system-for-a-finite-group (modular-representations-and-projective-covers)
- [dependency; published-backward] thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> def-class-function-and-the-space-of-complex-class-functions (characters-and-the-orthogonality-relations)
- [dependency; published-backward] thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions (characters-and-the-orthogonality-relations)
- [dependency; published-backward] def-decomposition-map-from-ordinary-to-modular-grothendieck-groups (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> def-og-lattice-and-reduction-modulo-the-maximal-ideal (modular-representations-and-projective-covers)
- [dependency; published-backward] def-decomposition-map-from-ordinary-to-modular-grothendieck-groups (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> lem-reduction-of-an-og-lattice-is-a-finite-dimensional-kg-module (modular-representations-and-projective-covers)
- [dependency; published-backward] def-projective-indecomposable-characters-and-cartan-invariants (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras (modular-representations-and-projective-covers)
- [dependency; published-backward] def-projective-indecomposable-characters-and-cartan-invariants (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> thm-indecomposable-projective-kg-modules-correspond-to-simple-kg-modules (modular-representations-and-projective-covers)
- [dependency; published-backward] def-p-blocks-by-primitive-central-idempotents (brauer-characters-and-decomposition-matrices, frontier-30-batch-1) -> def-splitting-p-modular-system-for-a-finite-group (modular-representations-and-projective-covers)
- [dependency; published-backward] ex-brauer-characters-of-a-p-group (brauer-characters-and-decomposition-matrices-examples, frontier-30-batch-1) -> cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p (modular-representations-and-projective-covers)
- [dependency; published-backward] def-extension-inducing-a-prescribed-abelian-kernel-action (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient (group-extensions-complements-and-schur-zassenhaus)
- [dependency; published-backward] lem-cohomologous-two-cocycles-give-equivalent-extensions (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient (group-extensions-complements-and-schur-zassenhaus)
- [dependency; published-backward] cor-zero-h-two-class-is-equivalent-to-splitting (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products (group-extensions-complements-and-schur-zassenhaus)
- [dependency; published-backward] def-baer-sum-of-abelian-kernel-extensions (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient (group-extensions-complements-and-schur-zassenhaus)
- [dependency; published-backward] thm-five-term-exact-sequence-as-extension-and-transgression-data (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology (crossed-homomorphisms-complements-and-first-cohomology)
- [dependency; published-backward] thm-five-term-exact-sequence-as-extension-and-transgression-data (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> thm-inflation-restriction-exact-sequence-in-degree-one (crossed-homomorphisms-complements-and-first-cohomology)
- [dependency; published-backward] rem-nonabelian-extension-obstruction-in-h-three (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> rem-nonabelian-extension-obstruction-and-h-two-torsor (group-extensions-complements-and-schur-zassenhaus)
- [dependency; published-backward] fs-equivalent-extensions-mean-only-that-the-middle-groups-are-isomorphic (second-cohomology-and-abelian-kernel-extensions, frontier-30-batch-1) -> def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient (group-extensions-complements-and-schur-zassenhaus)
- [dependency; published-backward] def-irreducible-topological-space-and-subset (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-topological-space (topological-spaces-and-continuity)
- [dependency; published-backward] def-irreducible-topological-space-and-subset (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-subspace-topology-top (topological-spaces-and-continuity)
- [dependency; published-backward] def-noetherian-topological-space (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-topological-space (topological-spaces-and-continuity)
- [dependency; published-backward] def-specialisation-and-generic-point (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-topological-space (topological-spaces-and-continuity)
- [dependency; published-backward] def-specialisation-and-generic-point (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-interior-closure-boundary-top (topological-spaces-and-continuity)
- [dependency; published-backward] lem-zariski-closed-set-axioms (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-spectrum-and-vanishing-sets (prime-spectra-and-radicals)
- [dependency; published-backward] lem-zariski-closed-set-axioms (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-vanishing-set-identities (prime-spectra-and-radicals)
- [dependency; published-backward] lem-every-zariski-closed-set-has-a-radical-defining-ideal (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-spectrum-and-vanishing-sets (prime-spectra-and-radicals)
- [dependency; published-backward] lem-every-zariski-closed-set-has-a-radical-defining-ideal (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-radical-as-intersection-of-primes (prime-spectra-and-radicals)
- [dependency; published-backward] lem-every-zariski-closed-set-has-a-radical-defining-ideal (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-vanishing-sets-detect-radicals (prime-spectra-and-radicals)
- [dependency; published-backward] lem-distinguished-opens-cover-every-open (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-principal-distinguished-subset-of-spectrum (prime-spectra-and-radicals)
- [dependency; published-backward] lem-distinguished-open-refinement-at-a-point (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-principal-distinguished-subset-of-spectrum (prime-spectra-and-radicals)
- [dependency; published-backward] cor-spectrum-is-a-contravariant-topological-functor (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-prime-spectrum-map-by-contraction (prime-spectra-and-radicals)
- [dependency; published-backward] lem-quotient-spectrum-map-is-closed (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-prime-spectrum-of-a-quotient-bijection (prime-spectra-and-radicals)
- [dependency; published-backward] lem-localisation-spectrum-map-homeomorphism-onto-image (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-prime-spectrum-of-a-localisation-bijection (prime-spectra-and-radicals)
- [dependency; published-backward] cor-principal-localisation-spectrum-is-distinguished-open (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-principal-distinguished-subset-of-spectrum (prime-spectra-and-radicals)
- [dependency; published-backward] lem-spectrum-compactness-open-cover-to-unit-ideal (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-proper-ideal-contained-in-maximal-ideal (ideals-and-quotient-rings)
- [dependency; published-backward] lem-spectrum-compactness-unit-expression-finite-subcover (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-principal-distinguished-subset-of-spectrum (prime-spectra-and-radicals)
- [dependency; published-backward] lem-spectrum-compactness-unit-expression-finite-subcover (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-distinguished-subset-identities (prime-spectra-and-radicals)
- [dependency; published-backward] thm-prime-spectrum-is-compact (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-compact-space (compactness)
- [dependency; published-backward] cor-every-distinguished-open-is-compact (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-compact-space (compactness)
- [dependency; published-backward] lem-closure-of-a-point-is-its-vanishing-set (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-spectrum-and-vanishing-sets (prime-spectra-and-radicals)
- [dependency; published-backward] cor-closed-points-of-spectrum-are-maximal-ideals (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-and-maximal-ideals (ideals-and-quotient-rings)
- [dependency; published-backward] thm-irreducible-closed-subsets-and-prime-ideals (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-and-maximal-ideals (ideals-and-quotient-rings)
- [dependency; published-backward] thm-irreducible-closed-subsets-and-prime-ideals (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-vanishing-set-identities (prime-spectra-and-radicals)
- [dependency; published-backward] thm-irreducible-components-and-minimal-primes (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-spectrum-and-vanishing-sets (prime-spectra-and-radicals)
- [dependency; published-backward] thm-irreducible-components-and-minimal-primes (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-minimal-prime-over-an-ideal-exists (prime-spectra-and-radicals)
- [dependency; published-backward] thm-noetherian-ring-has-noetherian-spectrum (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-noetherian-ring-ideal-characterisations (noetherian-rings-and-hilbert-basis)
- [dependency; published-backward] cor-noetherian-spectrum-has-finitely-many-irreducible-components (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-noetherian-ring-has-finitely-many-minimal-primes (prime-spectra-and-radicals)
- [dependency; published-backward] lem-clopen-subset-gives-idempotent-decomposition (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> cor-nilradical-as-intersection-of-primes (prime-spectra-and-radicals)
- [dependency; published-backward] lem-clopen-subset-gives-idempotent-decomposition (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-chinese-remainder-theorem-for-comaximal-ideals (artinian-rings-and-length)
- [dependency; published-backward] lem-clopen-subset-gives-idempotent-decomposition (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-proper-ideal-contained-in-maximal-ideal (ideals-and-quotient-rings)
- [dependency; published-backward] lem-idempotent-gives-clopen-spectrum-partition (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-principal-distinguished-subset-of-spectrum (prime-spectra-and-radicals)
- [dependency; published-backward] lem-idempotent-gives-clopen-spectrum-partition (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-distinguished-subset-identities (prime-spectra-and-radicals)
- [dependency; published-backward] lem-idempotent-gives-clopen-spectrum-partition (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-prime-and-maximal-ideals (ideals-and-quotient-rings)
- [dependency; published-backward] cor-spectrum-connected-iff-no-nontrivial-idempotents (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-connected-space (connectedness)
- [dependency; published-backward] cor-spectrum-connected-iff-no-nontrivial-idempotents (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> thm-connectedness-characterisations (connectedness)
- [dependency; published-backward] cor-spectrum-connected-iff-no-nontrivial-idempotents (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> cor-nilradical-as-intersection-of-primes (prime-spectra-and-radicals)
- [dependency; published-backward] lem-support-is-specialisation-closed (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> def-support-of-a-module (localisation-of-modules-and-support)
- [dependency; published-backward] lem-support-is-specialisation-closed (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> lem-support-membership-by-annihilator (localisation-of-modules-and-support)
- [dependency; published-backward] cor-closed-points-dense-in-affine-spectra (zariski-topology-on-prime-spectra, frontier-30-batch-2) -> cor-affine-closed-points-detect-radicals (noether-normalisation-and-nullstellensatz)
- [dependency; published-backward] ex-zariski-spectrum-of-the-integers (zariski-topology-on-prime-spectra-examples, frontier-30-batch-2) -> def-principal-distinguished-subset-of-spectrum (prime-spectra-and-radicals)
- [dependency; published-backward] ex-nonclosed-support-without-finiteness (zariski-topology-on-prime-spectra-examples, frontier-30-batch-2) -> thm-support-of-arbitrary-direct-sums (localisation-of-modules-and-support)
- [dependency; published-backward] ex-nonclosed-support-without-finiteness (zariski-topology-on-prime-spectra-examples, frontier-30-batch-2) -> lem-support-of-a-cyclic-module-is-its-vanishing-set (localisation-of-modules-and-support)
- [dependency; published-backward] def-four-dini-derivatives-at-a-point (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] def-four-dini-derivatives-at-a-point (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-one-sided-limits (limits-of-real-functions)
- [dependency; published-backward] def-four-dini-derivatives-at-a-point (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-extended-reals (limsup-and-subsequential-limits)
- [dependency; published-backward] thm-dini-derivatives-exist-are-ordered-and-detect-differentiability (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] thm-dini-derivatives-exist-are-ordered-and-detect-differentiability (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-extended-reals (limsup-and-subsequential-limits)
- [dependency; published-backward] thm-dini-derivatives-exist-are-ordered-and-detect-differentiability (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-two-sided-limit-iff-both-one-sided (limits-of-real-functions)
- [dependency; published-backward] def-vitali-cover-and-fine-cover-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-interval (monotone-sequences-and-cauchy-completeness)
- [dependency; published-backward] thm-riesz-rising-sun-lemma (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-continuity-real (continuity-ivt-evt-and-uniform-continuity)
- [dependency; published-backward] thm-riesz-rising-sun-lemma (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-interval (monotone-sequences-and-cauchy-completeness)
- [dependency; published-backward] thm-riesz-rising-sun-lemma (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-open-subsets-of-r-structure (topology-of-r)
- [dependency; published-backward] thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-lebesgue-measure-and-the-lebesgue-sigma-algebra (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-one-sided-hardy-littlewood-inequality-for-continuous-monotone-functions (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-lebesgue-measure-and-the-lebesgue-sigma-algebra (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-countable-union-of-null-is-null (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-density-theorem (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] thm-continuous-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] def-jump-function-of-an-increasing-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-bounded-set (suprema-and-infima)
- [dependency; published-backward] def-jump-function-of-an-increasing-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-complete-ordered-field (foundations-of-the-real-numbers)
- [dependency; published-backward] def-jump-function-of-an-increasing-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-finite-sum (roots-and-rational-powers)
- [dependency; published-backward] def-jump-function-of-an-increasing-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] def-jump-function-of-an-increasing-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-one-sided-limits (limits-of-real-functions)
- [dependency; published-backward] def-jump-function-of-an-increasing-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-monotone-one-sided-limits-exist (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-increasing-functions-split-uniquely-as-jump-plus-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-increasing-functions-split-uniquely-as-jump-plus-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-froda (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-increasing-functions-split-uniquely-as-jump-plus-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-monotone-discontinuities-are-jumps (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-increasing-functions-split-uniquely-as-jump-plus-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-monotone-one-sided-limits-exist (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-jump-functions-have-derivative-zero-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-jump-functions-have-derivative-zero-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] thm-jump-functions-have-derivative-zero-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-froda (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-countable-union-of-null-is-null (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-lebesgue-outer-measure (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-measure-zero-and-content-zero (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-finite-and-countable-subadditivity-of-measures (measures-and-their-basic-properties)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-heine-borel-characterisation-r (topology-of-r)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-outer-measure-is-an-outer-measure-agreeing-with-volume (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-mini-vitali-fine-cover-characterisation-of-null-sets (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-mini-vitali-fine-cover-characterisation-of-null-sets (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-measure-zero-and-content-zero (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] thm-mini-vitali-fine-cover-characterisation-of-null-sets (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-countable-union-of-null-is-null (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] thm-mini-vitali-fine-cover-characterisation-of-null-sets (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-one-sided-limits (limits-of-real-functions)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-countable-union-of-null-is-null (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-froda (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-null-agrees-with-elementary-measure-zero-on-the-line (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-monotone-functions-are-differentiable-almost-everywhere-via-lebesgue-stieltjes-measures (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-stieltjes-correspondence-with-distribution-functions (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-integrable-real-and-complex-functions-and-their-integrals (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-integral-over-a-measurable-set (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-arithmetic-and-lattice-operations-preserve-measurability (measurable-functions-and-simple-approximation)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-fatou-lemma (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-monotone-real-functions-are-borel-measurable (measurable-functions-and-simple-approximation)
- [dependency; published-backward] thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-the-lebesgue-integral-respects-almost-everywhere-equality (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] def-singular-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-continuity-real (continuity-ivt-evt-and-uniform-continuity)
- [dependency; published-backward] def-singular-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] def-singular-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-interval (monotone-sequences-and-cauchy-completeness)
- [dependency; published-backward] def-singular-function (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-absolute-continuity-of-the-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition (the-radon-nikodym-theorem-and-lebesgue-decomposition)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-first-fundamental-theorem-of-calculus-for-l-one (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-interval-formulas-and-atoms-for-lebesgue-stieltjes-measures (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] thm-right-continuous-increasing-functions-split-as-absolutely-continuous-plus-jump-plus-singular-continuous (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-lebesgue-stieltjes-correspondence-with-distribution-functions (lebesgue-stieltjes-measures-and-distribution-functions)
- [dependency; published-backward] thm-bv-functions-are-differentiable-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-bounded-variation-and-total-variation (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-bv-functions-are-differentiable-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-jordan-decomposition-for-bv-functions (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-sequence (sequences-and-limits)
- [dependency; published-backward] thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-countable-union-of-null-is-null (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-every-continuous-function-is-differentiable-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-takagi-function-is-continuous-and-nowhere-differentiable (approximation-and-compactness-in-ck)
- [dependency; published-backward] fs-every-increasing-function-satisfies-newton-leibniz (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-function-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-every-increasing-function-satisfies-newton-leibniz (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-set-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-every-increasing-function-satisfies-newton-leibniz (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-the-lebesgue-integral-respects-almost-everywhere-equality (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] fs-vitali-covering-theorem-holds-for-arbitrary-covers (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-interval (monotone-sequences-and-cauchy-completeness)
- [dependency; published-backward] fs-zero-derivative-almost-everywhere-implies-constancy (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> cor-cantor-function-is-continuous (monotone-functions-and-discontinuities)
- [dependency; published-backward] fs-zero-derivative-almost-everywhere-implies-constancy (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] fs-zero-derivative-almost-everywhere-implies-constancy (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-function-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-zero-derivative-almost-everywhere-implies-constancy (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-set-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-bounded-variation-implies-absolute-continuity (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> cor-cantor-function-is-continuous (monotone-functions-and-discontinuities)
- [dependency; published-backward] fs-bounded-variation-implies-absolute-continuity (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] fs-bounded-variation-implies-absolute-continuity (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-bounded-variation-and-total-variation (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] fs-bounded-variation-implies-absolute-continuity (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-monotone-function (monotone-functions-and-discontinuities)
- [dependency; published-backward] fs-bounded-variation-implies-absolute-continuity (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-function-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> cor-cantor-set-is-an-uncountable-lebesgue-null-set (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-cantor-function (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-function-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] fs-monotone-functions-have-at-most-countably-many-nondifferentiability-points (differentiation-of-monotone-functions-and-the-vitali-covering-theorem, frontier-30-batch-3) -> thm-cantor-set-ternary-description (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> cor-cantor-function-is-continuous (monotone-functions-and-discontinuities)
- [dependency; published-backward] ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> cor-cantor-set-is-an-uncountable-lebesgue-null-set (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-cantor-function (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-cantor-function-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] ex-cantor-function-has-zero-derivative-almost-everywhere-is-not-differentiable-on-the-cantor-set-and-rises-by-one (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-cantor-set-ternary-description (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] ex-pure-jump-function-with-dense-discontinuities-and-zero-derivative-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-rationals-countable (countability-and-uncountability)
- [dependency; published-backward] ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-cantor-function-properties (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-pi-via-first-positive-cosine-zero (sine-cosine-and-the-definition-of-pi)
- [dependency; published-backward] ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-quarter-turn-values-and-shift-formulas (sine-cosine-and-the-definition-of-pi)
- [dependency; published-backward] ex-the-dini-derivatives-of-x-sine-of-one-over-x-at-zero-are-four-distinct-values (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-sine-cosine-zero-sets-and-fundamental-period (sine-cosine-and-the-definition-of-pi)
- [dependency; published-backward] ex-jump-and-continuous-parts-of-x-plus-rational-jumps (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] ex-jump-and-continuous-parts-of-x-plus-rational-jumps (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> thm-rationals-countable (countability-and-uncountability)
- [dependency; published-backward] cex-vitali-covering-theorem-needs-a-fine-cover (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-interval (monotone-sequences-and-cauchy-completeness)
- [dependency; published-backward] ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-bounded-variation-and-total-variation (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] ex-a-bv-function-with-a-jump-is-differentiable-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples, frontier-30-batch-3) -> def-derivative (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] def-sublinear-functional (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-vector-space (vector-spaces-and-subspaces)
- [dependency; published-backward] lem-hahn-banach-one-step-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-algebraic-dual-and-linear-functional (dual-spaces-bilinear-forms-and-inertia)
- [dependency; published-backward] lem-hahn-banach-one-step-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-linear-subspace (vector-spaces-and-subspaces)
- [dependency; published-backward] lem-union-of-a-chain-of-dominated-extensions (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-algebraic-dual-and-linear-functional (dual-spaces-bilinear-forms-and-inertia)
- [dependency; published-backward] lem-union-of-a-chain-of-dominated-extensions (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-chain (order-zorn-and-the-axiom-of-choice)
- [dependency; published-backward] thm-hahn-banach-dominated-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> thm-zorn (order-zorn-and-the-axiom-of-choice)
- [dependency; published-backward] def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-space-of-bounded-linear-operators (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-algebraic-dual-and-linear-functional (dual-spaces-bilinear-forms-and-inertia)
- [dependency; published-backward] def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] thm-hahn-banach-norm-preserving-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-bounded-linear-operator (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-hahn-banach-norm-preserving-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-operator-norm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-hahn-banach-norm-preserving-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-normed-subspace (normed-and-banach-spaces)
- [dependency; published-backward] thm-hahn-banach-norm-preserving-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] lem-real-part-determines-a-complex-linear-functional (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> def-algebraic-dual-and-linear-functional (dual-spaces-bilinear-forms-and-inertia)
- [dependency; published-backward] lem-real-part-determines-a-complex-linear-functional (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] thm-complex-hahn-banach-norm-preserving-extension (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] thm-norm-preserving-extension-from-any-subspace (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] rem-choice-strength-of-hahn-banach (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-halpern-levy-bpi-not-ac (deferred-set-theory-beyond-choice)
- [dependency; unresolved] rem-choice-strength-of-hahn-banach (the-analytic-hahn-banach-theorem, frontier-30-batch-4) -> rem-hahn-banach-choice-strength (deferred-functional-analysis)
- [dependency; published-backward] ex-norming-functionals-in-lp-from-the-measure-duality-page (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> cor-l-p-norm-recovery-by-unit-l-q-pairings (the-duality-of-lp-and-lq)
- [dependency; published-backward] ex-banach-limit-from-hahn-banach (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> def-cesaro-mean (equivalent-forms-of-completeness)
- [dependency; published-backward] ex-banach-limit-from-hahn-banach (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> def-limsup-liminf (limsup-and-subsequential-limits)
- [dependency; published-backward] ex-banach-limit-from-hahn-banach (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> thm-limsup-subadditive (limsup-and-subsequential-limits)
- [dependency; published-backward] ex-banach-limit-from-hahn-banach (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> def-sequence (sequences-and-limits)
- [dependency; published-backward] lem-banach-limit-properties (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> def-limsup-liminf (limsup-and-subsequential-limits)
- [dependency; published-backward] lem-banach-limit-properties (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> def-cesaro-mean (equivalent-forms-of-completeness)
- [dependency; published-backward] lem-banach-limit-properties (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> thm-limsup-subadditive (limsup-and-subsequential-limits)
- [dependency; published-backward] rem-hahn-banach-open-choice-questions (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> rem-hahn-banach-hamel-basis-open (open-problems-and-research-frontier)
- [dependency; published-backward] rem-hahn-banach-open-choice-questions (the-analytic-hahn-banach-theorem-examples, frontier-30-batch-4) -> rem-hahn-banach-discontinuous-additive-open (open-problems-and-research-frontier)
- [dependency; published-backward] def-independent-families-of-event-classes (independence-borel-cantelli-and-zero-one-laws, frontier-30-batch-5) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] def-independent-sigma-algebras-and-events (independence-borel-cantelli-and-zero-one-laws, frontier-30-batch-5) -> def-sigma-algebra (sigma-algebras-and-borel-sets)
- [dependency; published-backward] lem-independent-events-remain-independent-under-complements (independence-borel-cantelli-and-zero-one-laws, frontier-30-batch-5) -> lem-probability-measure-basic-identities (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] thm-pi-system-criterion-for-independent-sigma-algebras (independence-borel-cantelli-and-zero-one-laws, frontier-30-batch-5) -> def-pi-system (sigma-algebras-and-borel-sets)

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id ITEM_ID` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/<run>-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

