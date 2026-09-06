# Step-6 Alpha

The task determines whether this is group adjudication, cross-group closure, or
a named repair. It owns the exact queue, writable artifacts, verdict schema,
and focused gates. Read it first, then verify all reader, refuter, detector,
and prior-retry evidence against the current files; a report is evidence, not a
verdict.

Work only in the task's live scope. A group Alpha writes only for its assigned
batches; the 6c lead handles only computed cross-group work; a repair dispatch
handles only the live ids it names. You may open dependencies outside that
scope to test a claim. Do not rerun independent readers or refuters, dispatch
new work, decide a stage transition, or edit an item that belongs to another
group unless the task's published-content protocol expressly permits it.

Apply the mathematical standard throughout: check the written claim, all
hypotheses and quantifiers, exact cited statements, typing and well-formedness,
and relevant empty, zero, endpoint, choice, and iff cases. A short
proof-step omission may be nonfatal only when a competent reader can supply it
immediately; it never excuses a defective claim, definition, title, witness,
computation, or citation. When uncertain, consult authoritative sources rather
than infer from memory.

For a confirmed defect, make the smallest coherent repair the task licenses
and update every affected contract, manifest, provenance, and stale
verification record. Preserve stable item ids. Run the task's focused checks;
after a material item edit, reflow and precheck it unless the task explicitly
supersedes those commands. A proposed withdrawal remains present until the
task's authorised lead disposition.

Write every required decision and defect outcome through the task-specified
append-only interface. Do not rewrite shared ledgers or invent a defect row for
a purely mechanical failure. A clean decision needs evidence; an unresolved
case is a named blocker.

You neither judge nor stamp. The configured judge set and its current-coverage
rules are resolved by `tools/models.mjs`; do not hard-code, substitute, or
self-certify a judge outcome. Do not request permissions.


---

# This dispatch

run: frontier-31a
role: alpha
label: 6c-gate-audit-manifest-4

# Step 6c repair — audit-manifest

This file is the authority for repair cycle 4.
Primary gate: `audit-manifest`
Reason: ERROR unresolved: lem-structure-presheaf-basic-open-well-defined (frontier-31a-batch-14) declares dependency "lem-sheaf-condition-check-on-basis", which resolves to no published or in-run item
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `lem-structure-presheaf-basic-open-well-defined`, `lem-sheaf-condition-check-on-basis`, `thm-structure-sheaf-affine-scheme`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
# Audit manifest

## Batches
- frontier-31a-batch-1: the-finite-simple-group-classification-landscape, the-finite-simple-group-classification-landscape-examples, schur-multipliers-and-universal-central-extensions, schur-multipliers-and-universal-central-extensions-examples
- frontier-31a-batch-2: absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples
- frontier-31a-batch-3: geometric-hahn-banach-and-convex-separation, geometric-hahn-banach-and-convex-separation-examples
- frontier-31a-batch-4: infinite-product-measures-and-kolmogorov-extension, infinite-product-measures-and-kolmogorov-extension-examples
- frontier-31a-batch-5: absolute-convergence-and-the-wiener-algebra, absolute-convergence-and-the-wiener-algebra-examples
- frontier-31a-batch-6: primitive-dirichlet-l-functions-and-functional-equations, primitive-dirichlet-l-functions-and-functional-equations-examples, number-fields-rings-of-integers-and-discriminants, number-fields-rings-of-integers-and-discriminants-examples
- frontier-31a-batch-7: tensor-and-fusion-categories, tensor-and-fusion-categories-examples
- frontier-31a-batch-8: ext-and-balanced-resolutions, ext-and-balanced-resolutions-examples, yoneda-extensions-and-homological-dimension, yoneda-extensions-and-homological-dimension-examples
- frontier-31a-batch-9: tor-flatness-and-global-dimension, tor-flatness-and-global-dimension-examples, universal-coefficients-and-kunneth-theorems, universal-coefficients-and-kunneth-theorems-examples
- frontier-31a-batch-10: group-cohomology-as-a-derived-functor, group-cohomology-as-a-derived-functor-examples
- frontier-31a-batch-11: koszul-complexes-and-regular-sequences, koszul-complexes-and-regular-sequences-examples
- frontier-31a-batch-12: relative-homology-excision-and-mayer-vietoris, relative-homology-excision-and-mayer-vietoris-examples
- frontier-31a-batch-13: projective-algebraic-sets-projective-morphisms-and-cones, projective-algebraic-sets-projective-morphisms-and-cones-examples
- frontier-31a-batch-14: affine-schemes-and-the-structure-sheaf, affine-schemes-and-the-structure-sheaf-examples
- frontier-31a-batch-15: the-structural-criterion-for-property-star, the-structural-criterion-for-property-star-examples
- frontier-31a-batch-16: quasilinear-characteristics-and-cauchy-kovalevskaya, quasilinear-characteristics-and-cauchy-kovalevskaya-examples
- frontier-31a-batch-17: the-exterior-derivative-and-cartan-calculus, the-exterior-derivative-and-cartan-calculus-examples
- frontier-31a-batch-18: verma-modules-and-shapovalov-forms, verma-modules-and-shapovalov-forms-examples
- frontier-31a-batch-19: brauer-induction-and-elementary-subgroups, brauer-induction-and-elementary-subgroups-examples
- frontier-31a-batch-20: gradient-like-vector-fields-and-morse-trajectories, gradient-like-vector-fields-and-morse-trajectories-examples
- frontier-31a-batch-21: the-arithmetical-hierarchy-and-posts-theorem, the-arithmetical-hierarchy-and-posts-theorem-examples, time-and-space-hierarchy-theorems, time-and-space-hierarchy-theorems-examples
- frontier-31a-batch-22: logarithmic-space-nl-and-reachability, logarithmic-space-nl-and-reachability-examples

## Edge summary
- cross-batch: 25
- published-backward: 745
- same-batch: 1413
- unresolved: 2

## Relationships to audit outside a single batch
- [dependency; published-backward] rem-simple-groups-as-composition-factors (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> thm-jordan-holder-theorem-for-groups (composition-series-and-solvable-groups)
- [dependency; published-backward] def-quasisimple-group-component-and-layer (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> def-simple-group (conjugacy-and-simplicity-in-the-symmetric-groups)
- [dependency; published-backward] def-quasisimple-group-component-and-layer (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> def-commutator-and-commutator-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] def-quasisimple-group-component-and-layer (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> def-subnormal-normal-series-refinement-and-equivalence (composition-series-and-solvable-groups)
- [dependency; published-backward] def-generalized-fitting-subgroup (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> def-fitting-subgroup-of-a-finite-group (sylow-theorems-and-nilpotent-groups)
- [dependency; published-backward] thm-generalized-fitting-subgroup-contains-its-centralizer (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> lem-centralizer-of-a-normal-subgroup-is-normal (sylow-theorems-and-nilpotent-groups)
- [dependency; published-backward] thm-generalized-fitting-subgroup-contains-its-centralizer (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups (socles-and-the-onan-scott-landscape)
- [dependency; published-backward] def-p-local-subgroup (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> def-normalizer-of-a-subgroup (group-actions-and-cayleys-theorem)
- [dependency; published-backward] rem-cyclic-and-alternating-simple-families (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> cor-prime-order-group-is-cyclic (cosets-and-lagranges-theorem)
- [dependency; published-backward] rem-cyclic-and-alternating-simple-families (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> thm-alternating-group-is-simple-for-n-at-least-five (conjugacy-and-simplicity-in-the-symmetric-groups)
- [dependency; published-backward] fs-cfsg-says-every-finite-group-is-simple (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> def-simple-group (conjugacy-and-simplicity-in-the-symmetric-groups)
- [dependency; published-backward] fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism (the-finite-simple-group-classification-landscape, frontier-31a-batch-1) -> thm-jordan-holder-theorem-for-groups (composition-series-and-solvable-groups)
- [dependency; published-backward] ex-cyclic-simple-groups-of-prime-order (the-finite-simple-group-classification-landscape-examples, frontier-31a-batch-1) -> cor-prime-order-group-is-cyclic (cosets-and-lagranges-theorem)
- [dependency; published-backward] ex-cyclic-simple-groups-of-prime-order (the-finite-simple-group-classification-landscape-examples, frontier-31a-batch-1) -> def-simple-group (conjugacy-and-simplicity-in-the-symmetric-groups)
- [dependency; published-backward] ex-a-five-as-the-smallest-nonabelian-simple-group (the-finite-simple-group-classification-landscape-examples, frontier-31a-batch-1) -> thm-alternating-group-is-simple-for-n-at-least-five (conjugacy-and-simplicity-in-the-symmetric-groups)
- [dependency; published-backward] cex-composition-factors-do-not-determine-the-extension (the-finite-simple-group-classification-landscape-examples, frontier-31a-batch-1) -> def-composition-series-composition-factors-and-length (composition-series-and-solvable-groups)
- [dependency; published-backward] cex-composition-factors-do-not-determine-the-extension (the-finite-simple-group-classification-landscape-examples, frontier-31a-batch-1) -> def-external-direct-product-of-groups (cyclic-groups-and-direct-products)
- [dependency; cross-batch] def-schur-multiplier-of-a-group (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-group-homology-as-a-derived-functor (group-cohomology-as-a-derived-functor)
- [dependency; published-backward] def-free-presentation-kernel-data (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-free-group (free-groups-and-presentations)
- [dependency; published-backward] def-free-presentation-kernel-data (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-normal-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-commutator-and-commutator-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-normal-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; cross-batch] lem-five-term-homology-sequence-for-a-free-presentation (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-group-homology-as-a-derived-functor (group-cohomology-as-a-derived-functor)
- [dependency; published-backward] def-exterior-square-of-an-abelian-group (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-tensor-product-of-modules-by-generators-and-relations (tensor-products-of-modules)
- [dependency; published-backward] lem-exterior-square-has-the-alternating-universal-property (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> thm-universal-property-of-module-tensor-products (tensor-products-of-modules)
- [dependency; published-backward] def-central-and-stem-extensions (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-extension-inducing-a-prescribed-abelian-kernel-action (second-cohomology-and-abelian-kernel-extensions)
- [dependency; published-backward] def-central-and-stem-extensions (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-commutator-and-commutator-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] def-perfect-group (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-commutator-and-commutator-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] def-perfect-group (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> thm-derived-subgroup-is-characteristic-and-abelianization-is-universal (composition-series-and-solvable-groups)
- [dependency; cross-batch] def-superperfect-group (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-group-homology-as-a-derived-functor (group-cohomology-as-a-derived-functor)
- [dependency; cross-batch] thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-group-cohomology-as-a-derived-functor (group-cohomology-as-a-derived-functor)
- [dependency; cross-batch] thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> thm-universal-coefficient-theorem-for-cohomology-over-a-pid (universal-coefficients-and-kunneth-theorems)
- [dependency; cross-batch] thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally (universal-coefficients-and-kunneth-theorems)
- [dependency; published-backward] cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> thm-h-two-classifies-extensions-with-fixed-abelian-kernel-action (second-cohomology-and-abelian-kernel-extensions)
- [dependency; cross-batch] lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion (schur-multipliers-and-universal-central-extensions, frontier-31a-batch-1) -> def-group-homology-as-a-derived-functor (group-cohomology-as-a-derived-functor)
- [dependency; published-backward] ex-schur-multiplier-of-a-finite-abelian-group (schur-multipliers-and-universal-central-extensions-examples, frontier-31a-batch-1) -> thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form (the-structure-of-finite-abelian-groups)
- [dependency; published-backward] def-indefinite-lebesgue-integral-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-integrable-real-and-complex-functions-and-their-integrals (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] def-indefinite-lebesgue-integral-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-integral-over-a-measurable-set (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] def-total-variation-function-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-bounded-variation-and-total-variation (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] rem-absolute-continuity-conventions-and-hierarchy-agreement (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] rem-absolute-continuity-conventions-and-hierarchy-agreement (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-vitali-covering-theorem-for-fine-covers-on-the-line (differentiation-of-monotone-functions-and-the-vitali-covering-theorem)
- [dependency; published-backward] cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-absolute-continuity-of-the-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-integrable-derivatives (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-integrable-derivatives (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-integrable-derivatives (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-integrable-derivatives (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-jordan-decomposition-for-bv-functions (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-integrable-derivatives (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem)
- [dependency; published-backward] thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-first-fundamental-theorem-of-calculus-for-l-one (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] rem-sharp-and-classical-fundamental-theorems-of-calculus-agreement (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-ftc-first-part (properties-of-the-integral-and-the-working-ftc)
- [dependency; published-backward] rem-sharp-and-classical-fundamental-theorems-of-calculus-agreement (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-ftc-second-part (properties-of-the-integral-and-the-working-ftc)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-luzin-property-n (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-luzin-property-n (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-absolutely-continuous-functions-have-luzin-property-n (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-lebesgue-outer-regularity-for-arbitrary-subsets (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] lem-luzin-property-n-gives-an-integral-growth-estimate (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-integrable-real-and-complex-functions-and-their-integrals (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] lem-luzin-property-n-gives-an-integral-growth-estimate (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-lebesgue-outer-regularity-for-arbitrary-subsets (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] thm-banach-zarecki-characterisation-of-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-banach-zarecki-characterisation-of-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-bounded-variation-and-total-variation (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-banach-zarecki-characterisation-of-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-jordan-decomposition-for-bv-functions (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-banach-zarecki-characterisation-of-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-bv-functions-are-differentiable-almost-everywhere (differentiation-of-monotone-functions-and-the-vitali-covering-theorem)
- [dependency; published-backward] thm-banach-zarecki-characterisation-of-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase (differentiation-of-monotone-functions-and-the-vitali-covering-theorem)
- [dependency; published-backward] thm-banach-zarecki-characterisation-of-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-absolute-continuity-of-the-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> lem-countable-sets-are-null (cantor-set-baire-and-measure-zero)
- [dependency; published-backward] lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-integration-by-parts-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-integration-by-parts-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-integration-by-parts-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] thm-change-of-variables-for-an-increasing-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-change-of-variables-for-an-increasing-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-change-of-variables-for-an-increasing-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-monotone-class (sigma-algebras-and-borel-sets)
- [dependency; published-backward] thm-change-of-variables-for-an-increasing-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-monotone-convergence-for-the-integral (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] thm-change-of-variables-for-an-increasing-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-lebesgue-outer-regularity-for-arbitrary-subsets (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-total-variation-function-of-an-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-total-variation-function-of-an-absolutely-continuous-function (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-lipschitz-characterisation-within-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-lipschitz-characterisation-within-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-lipschitz-characterisation-within-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-absolutely-continuous-function (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> cor-bounded-derivative-implies-lipschitz (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> rem-henstock-kurzweil-vs-lebesgue (deferred-measure-and-integration)
- [dependency; published-backward] rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-henstock-kurzweil-integral-on-a-compact-interval (the-gauge-integral-and-cousins-lemma)
- [dependency; published-backward] rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-every-derivative-is-henstock-kurzweil-integrable (the-gauge-integral-and-cousins-lemma)
- [dependency; published-backward] rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> cor-indefinite-henstock-kurzweil-integral-is-a-primitive (the-gauge-integral-and-cousins-lemma)
- [dependency; published-backward] rem-henstock-kurzweil-and-lebesgue-integral-comparison-on-a-compact-interval (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-integrable-real-and-complex-functions-and-their-integrals (the-lebesgue-integral-and-the-convergence-theorems)
- [dependency; published-backward] fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] fs-absolute-continuity-is-preserved-under-composition (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] fs-luzin-property-n-implies-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] rem-bounded-derivative-design-correction (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> cor-bounded-derivative-implies-lipschitz (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] rem-bounded-derivative-design-correction (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> thm-c1-lipschitz-ac-bv-hierarchy (bounded-variation-and-riemann-stieltjes)
- [dependency; published-backward] ex-integration-by-parts-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] ex-integration-by-parts-for-absolutely-continuous-functions (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> thm-first-fundamental-theorem-of-calculus-for-l-one (the-maximal-function-and-lebesgue-differentiation)
- [dependency; published-backward] cex-the-cantor-function-fails-luzin-property-n (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] cex-luzin-property-n-does-not-imply-absolute-continuity (absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples, frontier-31a-batch-2) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] def-absorbing-balanced-and-absolutely-convex-set (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-norm-and-normed-space (rn-as-a-normed-space)
- [dependency; published-backward] def-absorbing-balanced-and-absolutely-convex-set (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] lem-open-convex-set-recovered-from-its-gauge (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-norm-and-normed-space (rn-as-a-normed-space)
- [dependency; published-backward] def-weak-and-strict-separation (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] def-weak-and-strict-separation (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> rem-real-and-complex-normed-space-convention (normed-and-banach-spaces)
- [dependency; published-backward] thm-separation-of-an-open-convex-set-and-a-point (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-hahn-banach-dominated-extension (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] thm-separation-of-an-open-convex-set-and-a-point (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> lem-real-part-determines-a-complex-linear-functional (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] thm-strong-separation-of-closed-and-compact-convex-sets (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> lem-distance-to-set-is-lipschitz (metric-spaces)
- [dependency; published-backward] thm-strong-separation-of-closed-and-compact-convex-sets (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-extreme-value-metric (compactness-in-metric-spaces)
- [dependency; published-backward] thm-strong-separation-of-closed-and-compact-convex-sets (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-metric-compactness (compactness-in-metric-spaces)
- [dependency; published-backward] cor-closed-convex-set-is-an-intersection-of-closed-half-spaces (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-metric-topology (metric-spaces)
- [dependency; published-backward] def-continuous-annihilator-of-a-subspace (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] def-continuous-annihilator-of-a-subspace (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-linear-subspace (vector-spaces-and-subspaces)
- [dependency; published-backward] thm-geometric-hahn-banach-for-subspaces (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-norm-preserving-extension-from-any-subspace (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] thm-geometric-hahn-banach-for-subspaces (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-metric-closure-characterisation (metric-spaces)
- [dependency; published-backward] thm-geometric-hahn-banach-for-subspaces (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-normed-subspace (normed-and-banach-spaces)
- [dependency; published-backward] cor-finite-dimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-coordinate-map-for-a-finite-dimensional-normed-space (finite-dimensional-normed-spaces-and-riesz-lemma)
- [dependency; published-backward] cor-finite-dimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> cor-finite-dimensional-subspaces-are-closed (finite-dimensional-normed-spaces-and-riesz-lemma)
- [dependency; published-backward] cor-finite-dimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-norm-preserving-extension-from-any-subspace (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] cor-finite-dimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-complemented-subspace (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-finite-dimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-complemented-subspace-iff-range-of-a-bounded-projection (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-finite-codimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-quotient-seminorm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-finite-codimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-finite-codimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-coordinate-map-for-a-finite-dimensional-normed-space (finite-dimensional-normed-spaces-and-riesz-lemma)
- [dependency; published-backward] cor-finite-codimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-complemented-subspace (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] cor-finite-codimensional-subspaces-are-complemented (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> thm-complemented-subspace-iff-range-of-a-bounded-projection (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] def-linear-hyperplane (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-linear-subspace (vector-spaces-and-subspaces)
- [dependency; published-backward] def-linear-hyperplane (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-quotient-vector-space-coset-notation (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] def-linear-hyperplane (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-dimension (linear-independence-bases-and-dimension)
- [dependency; published-backward] thm-closed-hyperplanes-are-kernels-of-nonzero-functionals (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] thm-closed-hyperplanes-are-kernels-of-nonzero-functionals (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-metric-topology (metric-spaces)
- [dependency; published-backward] thm-mazur-weak-and-norm-closure-of-convex-sets (geometric-hahn-banach-and-convex-separation, frontier-31a-batch-3) -> def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] cex-two-closed-convex-sets-need-not-be-strongly-separated (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-derivative-of-exponential (the-exponential-function)
- [dependency; published-backward] cex-two-closed-convex-sets-need-not-be-strongly-separated (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> cor-differentiable-implies-continuous (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] cex-two-closed-convex-sets-need-not-be-strongly-separated (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-exponential-two-point-convexity (the-logarithm-and-general-powers)
- [dependency; published-backward] cex-two-closed-convex-sets-need-not-be-strongly-separated (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-exponential-is-strictly-increasing (the-exponential-function)
- [dependency; published-backward] def-c-zero-and-ell-infinity (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-norm-and-normed-space (rn-as-a-normed-space)
- [dependency; published-backward] def-c-zero-and-ell-infinity (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-sequence (sequences-and-limits)
- [dependency; published-backward] lem-c-zero-is-a-closed-subspace-of-ell-infinity (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-metric-topology (metric-spaces)
- [dependency; published-backward] lem-uncountable-almost-disjoint-family-on-natural-numbers (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> cor-irrationals-uncountable (countability-and-uncountability)
- [dependency; published-backward] lem-uncountable-almost-disjoint-family-on-natural-numbers (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> lem-q-and-irrationals-dense-r (topology-of-r)
- [dependency; published-backward] lem-uncountable-almost-disjoint-family-on-natural-numbers (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-rationals-countable (countability-and-uncountability)
- [dependency; published-backward] lem-uncountable-almost-disjoint-family-on-natural-numbers (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-well-ordering-principle (construction-of-the-natural-numbers)
- [dependency; published-backward] lem-uncountable-almost-disjoint-family-on-natural-numbers (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-countable (countability-and-uncountability)
- [dependency; published-backward] lem-quotient-by-c-zero-has-no-countable-separating-family (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-quotient-seminorm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] lem-quotient-by-c-zero-has-no-countable-separating-family (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] lem-quotient-by-c-zero-has-no-countable-separating-family (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-dual-space-of-a-normed-space (the-analytic-hahn-banach-theorem)
- [dependency; published-backward] lem-quotient-by-c-zero-has-no-countable-separating-family (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-countable-union-of-countable (countability-and-uncountability)
- [dependency; published-backward] thm-c-zero-is-not-complemented-in-ell-infinity (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-complemented-subspace (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-c-zero-is-not-complemented-in-ell-infinity (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> thm-complemented-subspace-iff-range-of-a-bounded-projection (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] thm-c-zero-is-not-complemented-in-ell-infinity (geometric-hahn-banach-and-convex-separation-examples, frontier-31a-batch-3) -> def-quotient-seminorm (bounded-linear-operators-and-quotient-spaces)
- [dependency; published-backward] def-coordinate-maps-and-cylinder-sigma-algebra (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-measurable-space (sigma-algebras-and-borel-sets)
- [dependency; published-backward] def-coordinate-maps-and-cylinder-sigma-algebra (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-product-sigma-algebra-and-finite-product-sigma-algebras (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] lem-finite-coordinate-cylinders-form-a-pi-system (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-pi-system (sigma-algebras-and-borel-sets)
- [dependency; published-backward] lem-finite-coordinate-cylinder-sets-form-an-algebra (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-algebra-of-subsets (sigma-algebras-and-borel-sets)
- [dependency; published-backward] def-consistent-family-of-finite-dimensional-distributions (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] def-consistent-family-of-finite-dimensional-distributions (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-product-sigma-algebra-and-finite-product-sigma-algebras (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] lem-countable-product-cylinder-premeasure-is-countably-additive (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] lem-countable-product-cylinder-premeasure-is-countably-additive (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-continuity-from-above-for-measures (measures-and-their-basic-properties)
- [dependency; published-backward] lem-countable-product-cylinder-premeasure-is-countably-additive (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] lem-countable-product-cylinder-premeasure-is-countably-additive (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-countable-union-of-countable (countability-and-uncountability)
- [dependency; published-backward] lem-countable-product-cylinder-premeasure-is-countably-additive (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-countable-product-of-probability-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-caratheodory-extension-theorem (outer-measure-and-the-caratheodory-extension-theorem)
- [dependency; published-backward] thm-countable-product-of-probability-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-countable-product-of-probability-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] thm-countable-product-of-probability-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-dynkin-pi-lambda (sigma-algebras-and-borel-sets)
- [dependency; published-backward] cor-coordinate-random-elements-on-a-countable-product-are-independent (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-independent-random-elements (independence-borel-cantelli-and-zero-one-laws)
- [dependency; published-backward] cor-countable-independent-copies-exist (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-law-or-distribution-of-a-random-element (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] cor-countable-independent-copies-exist (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] cor-countable-independent-copies-exist (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-dependent-choice (compactness-in-metric-spaces)
- [dependency; published-backward] def-stochastic-process-and-finite-dimensional-distributions (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-law-modification-and-indistinguishability-of-processes (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-law-or-distribution-of-a-random-element (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] def-law-modification-and-indistinguishability-of-processes (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-product-sigma-algebra-and-finite-product-sigma-algebras (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] def-standard-borel-space (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-measurable-space (sigma-algebras-and-borel-sets)
- [dependency; published-backward] def-standard-borel-space (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-polish-space (complete-metrizability-and-baire)
- [dependency; published-backward] lem-finite-products-of-standard-borel-spaces-are-standard-borel (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-product-sigma-algebra-and-finite-product-sigma-algebras (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-polish-space (complete-metrizability-and-baire)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-probability-measure (measures-and-their-basic-properties)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-borel-sigma-algebra (sigma-algebras-and-borel-sets)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> lem-countable-iff-surjection-from-n (countability-and-uncountability)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-metric-ball (metric-spaces)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-totally-bounded (compactness-in-metric-spaces)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-metric-open-set-algebra (metric-spaces)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-continuity-from-below-for-measures (measures-and-their-basic-properties)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-finite-and-countable-subadditivity-of-measures (measures-and-their-basic-properties)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> prop-measure-of-a-set-difference (measures-and-their-basic-properties)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-complete-subspace-iff-closed (completeness-and-uniform-continuity)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-complete-and-totally-bounded-implies-compact (compactness-in-metric-spaces)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-dynkin-pi-lambda (sigma-algebras-and-borel-sets)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-borel-probability-measures-on-polish-spaces-are-inner-regular (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-compact-space (compactness)
- [dependency; published-backward] thm-kolmogorov-extension-for-standard-borel-coordinate-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-axiom-of-choice (relations-functions-and-quotients)
- [dependency; published-backward] thm-kolmogorov-extension-for-standard-borel-coordinate-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] thm-kolmogorov-extension-for-standard-borel-coordinate-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-caratheodory-extension-theorem (outer-measure-and-the-caratheodory-extension-theorem)
- [dependency; published-backward] thm-kolmogorov-extension-for-standard-borel-coordinate-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-dynkin-pi-lambda (sigma-algebras-and-borel-sets)
- [dependency; published-backward] cor-arbitrary-product-measure-for-standard-borel-probability-spaces (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique (product-measures-and-the-fubini-tonelli-theorems)
- [dependency; published-backward] thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-dynkin-pi-lambda (sigma-algebras-and-borel-sets)
- [dependency; published-backward] lem-cylinder-sigma-events-depend-on-countably-many-coordinates (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-generated-sigma-algebra (sigma-algebras-and-borel-sets)
- [dependency; published-backward] lem-cylinder-sigma-events-depend-on-countably-many-coordinates (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> def-countable-choice (countability-and-uncountability)
- [dependency; published-backward] lem-cylinder-sigma-events-depend-on-countably-many-coordinates (infinite-product-measures-and-kolmogorov-extension, frontier-31a-batch-4) -> thm-countable-union-of-countable (countability-and-uncountability)
- [dependency; published-backward] ex-independent-but-not-identically-distributed-coordinate-sequence (infinite-product-measures-and-kolmogorov-extension-examples, frontier-31a-batch-4) -> def-law-or-distribution-of-a-random-element (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] cex-modification-need-not-be-indistinguishable (infinite-product-measures-and-kolmogorov-extension-examples, frontier-31a-batch-4) -> thm-lebesgue-measure-of-a-box-of-every-kind (lebesgue-measure-on-euclidean-space)
- [dependency; published-backward] cex-a-noncylinder-path-functional-may-fail-measurability (infinite-product-measures-and-kolmogorov-extension-examples, frontier-31a-batch-4) -> def-random-element-and-real-random-variable (probability-spaces-random-variables-and-expectation)
- [dependency; published-backward] cex-a-noncylinder-path-functional-may-fail-measurability (infinite-product-measures-and-kolmogorov-extension-examples, frontier-31a-batch-4) -> def-axiom-of-choice (relations-functions-and-quotients)
- [dependency; published-backward] def-wiener-algebra-of-the-circle (absolute-convergence-and-the-wiener-algebra, frontier-31a-batch-5) -> def-period-one-fourier-coefficients-partial-sums-and-convolution (dirichlet-kernel-localisation-and-pointwise-fourier-convergence)
- [dependency; published-backward] lem-absolutely-summable-fourier-coefficients-give-uniform-convergence (absolute-convergence-and-the-wiener-algebra, frontier-31a-batch-5) -> thm-abel-means-converge-in-lp-uniformly-and-at-lebesgue-points (fejer-and-poisson-summability-of-fourier-series)
- [dependency; published-backward] lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions (absolute-convergence-and-the-wiener-algebra, frontier-31a-batch-5) -> def-period-one-fourier-coefficients-partial-sums-and-convolution (dirichlet-kernel-localisation-and-pointwise-fourier-convergence)
- [dependency; published-backward] def-periodic-ltwo-weak-derivative (absolute-convergence-and-the-wiener-algebra, frontier-31a-batch-5) -> def-period-one-fourier-coefficients-partial-sums-and-convolution (dirichlet-kernel-localisation-and-pointwise-fourier-convergence)
- [dependency; published-backward] ex-an-absolutely-convergent-non-smooth-fourier-series (absolute-convergence-and-the-wiener-algebra-examples, frontier-31a-batch-5) -> thm-riemann-lebesgue-lemma-for-fourier-coefficients (dirichlet-kernel-localisation-and-pointwise-fourier-convergence)
- [dependency; published-backward] def-induced-dirichlet-character (primitive-dirichlet-l-functions-and-functional-equations, frontier-31a-batch-6) -> def-dirichlet-character-modulo-q (dirichlet-characters-l-functions-and-primes-in-progressions)
- [dependency; published-backward] thm-dirichlet-character-primitive-induction (primitive-dirichlet-l-functions-and-functional-equations, frontier-31a-batch-6) -> thm-chinese-remainder-theorem (congruences-and-the-chinese-remainder-theorem)
- [dependency; published-backward] thm-induced-dirichlet-l-finite-euler-factors (primitive-dirichlet-l-functions-and-functional-equations, frontier-31a-batch-6) -> def-dirichlet-l-function (dirichlet-characters-l-functions-and-primes-in-progressions)
- [dependency; published-backward] thm-induced-dirichlet-l-finite-euler-factors (primitive-dirichlet-l-functions-and-functional-equations, frontier-31a-batch-6) -> thm-dirichlet-l-euler-product (dirichlet-characters-l-functions-and-primes-in-pro

[autopilot truncated 70446 characters from the middle of this gate output; reproduce the primary gate on the current tree for the complete diagnostics]

affine-line (affine-schemes-and-the-structure-sheaf-examples, frontier-31a-batch-14) -> def-algebra-over-a-commutative-ring (tensor-products-of-modules)
- [dependency; published-backward] cex-nonclosed-scheme-point-no-k-valued-coordinate (affine-schemes-and-the-structure-sheaf-examples, frontier-31a-batch-14) -> def-polynomial-ring-over-a-commutative-ring (polynomial-rings-and-roots)
- [dependency; published-backward] cex-nonclosed-scheme-point-no-k-valued-coordinate (affine-schemes-and-the-structure-sheaf-examples, frontier-31a-batch-14) -> thm-field-of-fractions-is-a-field-and-the-domain-embeds (the-field-of-fractions-and-localisation)
- [dependency; published-backward] cex-nonclosed-scheme-point-no-k-valued-coordinate (affine-schemes-and-the-structure-sheaf-examples, frontier-31a-batch-14) -> def-algebra-over-a-commutative-ring (tensor-products-of-modules)
- [dependency; published-backward] cex-nonclosed-scheme-point-no-k-valued-coordinate (affine-schemes-and-the-structure-sheaf-examples, frontier-31a-batch-14) -> thm-quotient-is-domain-iff-ideal-prime (ideals-and-quotient-rings)
- [dependency; published-backward] def-structural-comb-partition-hypothesis (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-erdos-hajnal-property-and-constant (erdos-hajnal-property-and-homogeneous-sets)
- [dependency; published-backward] def-structural-comb-partition-hypothesis (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-comb-in-a-graph (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] def-structural-comb-partition-hypothesis (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-pattern-graph-of-a-pure-blockade (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] def-structural-comb-partition-hypothesis (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-complete-anticomplete-pure-and-x-sparse-blockades (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] def-structural-comb-partition-hypothesis (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-graph-isomorphism-and-complement (graphs-walks-and-connectivity)
- [dependency; published-backward] def-structural-comb-partition-hypothesis (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-h-free-and-family-free-graph (induced-subgraphs-and-hereditary-graph-classes)
- [dependency; published-backward] lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-erdos-hajnal-property-and-constant (erdos-hajnal-property-and-homogeneous-sets)
- [dependency; published-backward] lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-clique-stable-set-and-numbers (induced-subgraphs-and-hereditary-graph-classes)
- [dependency; published-backward] lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-real-power (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-natural-logarithm-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-exponential-is-strictly-increasing (the-exponential-function)
- [dependency; published-backward] lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-complete-anticomplete-pure-and-x-sparse-blockades (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-blockade-length-and-width (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] def-integral-geometric-layers-of-a-decreasing-block-partition (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-blockade-length-and-width (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] def-integral-geometric-layers-of-a-decreasing-block-partition (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-integral-geometric-layers-have-rounded-cutoff-bounds (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-integral-geometric-layers-have-rounded-cutoff-bounds (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> lem-rational-power-monotone (roots-and-rational-powers)
- [dependency; published-backward] lem-integral-geometric-layers-have-rounded-cutoff-bounds (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-agrees-with-rational-exponent (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-integral-geometric-layers-have-rounded-cutoff-bounds (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-of-archimedean (foundations-of-the-real-numbers)
- [dependency; published-backward] lem-integral-geometric-layers-have-rounded-cutoff-bounds (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-well-ordering-principle (construction-of-the-natural-numbers)
- [dependency; published-backward] lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-pattern-graph-of-a-pure-blockade (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-complete-anticomplete-pure-and-x-sparse-blockades (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-blockade-length-and-width (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-erdos-hajnal-property-and-constant (erdos-hajnal-property-and-homogeneous-sets)
- [dependency; published-backward] lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-real-power (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-natural-logarithm-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-exponential-is-strictly-increasing (the-exponential-function)
- [dependency; published-backward] lem-successive-small-integral-geometric-layers-contradict-a-large-x-part (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-geometric-series (series-and-nonnegative-tests)
- [dependency; published-backward] lem-successive-small-integral-geometric-layers-contradict-a-large-x-part (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] lem-successive-small-integral-geometric-layers-contradict-a-large-x-part (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> lem-rational-power-monotone (roots-and-rational-powers)
- [dependency; published-backward] lem-successive-small-integral-geometric-layers-contradict-a-large-x-part (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-agrees-with-rational-exponent (the-logarithm-and-general-powers)
- [dependency; published-backward] thm-the-structural-comb-partition-criterion-implies-property-star (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-property-star-for-a-finite-family (property-star-and-comb-outcomes)
- [dependency; published-backward] thm-the-structural-comb-partition-criterion-implies-property-star (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-comb-in-a-graph (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] thm-the-structural-comb-partition-criterion-implies-property-star (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> def-real-power (the-logarithm-and-general-powers)
- [dependency; published-backward] thm-the-structural-comb-partition-criterion-implies-property-star (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-real-power-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] thm-the-structural-comb-partition-criterion-implies-property-star (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-natural-logarithm-laws (the-logarithm-and-general-powers)
- [dependency; published-backward] thm-the-structural-comb-partition-criterion-implies-property-star (the-structural-criterion-for-property-star, frontier-31a-batch-15) -> thm-exponential-is-strictly-increasing (the-exponential-function)
- [dependency; published-backward] cex-omitting-cross-block-purity-breaks-the-transversal-conclusion (the-structural-criterion-for-property-star-examples, frontier-31a-batch-15) -> def-comb-in-a-graph (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] cex-omitting-cross-block-purity-breaks-the-transversal-conclusion (the-structural-criterion-for-property-star-examples, frontier-31a-batch-15) -> def-pattern-graph-of-a-pure-blockade (blockades-combs-and-pattern-graphs)
- [dependency; published-backward] cex-omitting-cross-block-purity-breaks-the-transversal-conclusion (the-structural-criterion-for-property-star-examples, frontier-31a-batch-15) -> def-edges-between-sets-and-pure-mixed-pairs (induced-subgraphs-and-hereditary-graph-classes)
- [dependency; published-backward] def-semilinear-and-quasilinear-first-order-cauchy-problems (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> def-linear-semilinear-quasilinear-and-fully-nonlinear-pde (partial-differential-equations-and-characteristics)
- [dependency; published-backward] def-semilinear-and-quasilinear-first-order-cauchy-problems (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> def-noncharacteristic-first-order-cauchy-surface (partial-differential-equations-and-characteristics)
- [dependency; published-backward] lem-local-solvability-of-the-augmented-characteristic-ode (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-smooth-dependence-of-ode-solutions-on-parameters (euclidean-ordinary-differential-equations-with-smooth-dependence)
- [dependency; published-backward] lem-quasilinear-solution-lifts-to-characteristics (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] lem-characteristic-strip-compatibility (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] thm-local-quasilinear-cauchy-problem-by-characteristics (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-euclidean-inverse-function-theorem (inverse-and-implicit-function-theorems)
- [dependency; published-backward] lem-characteristic-solution-satisfies-the-quasilinear-pde (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] lem-burgers-slope-obeys-a-riccati-law-along-characteristics (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] def-fully-nonlinear-first-order-pde-and-complete-integral (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> def-linear-semilinear-quasilinear-and-fully-nonlinear-pde (partial-differential-equations-and-characteristics)
- [dependency; published-backward] lem-envelope-stationarity-implies-the-hamilton-jacobi-equation (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-euclidean-implicit-function-theorem (inverse-and-implicit-function-theorems)
- [dependency; published-backward] lem-envelope-stationarity-implies-the-hamilton-jacobi-equation (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] lem-charpit-flow-preserves-the-pde-constraint (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] lem-charpit-contact-compatibility-is-preserved (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-chain-rule (the-derivative-and-mean-value-theorems)
- [dependency; published-backward] thm-local-fully-nonlinear-cauchy-problem-by-charpit (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-continuous-dependence-of-odes-on-initial-data-and-parameters (picard-lindelof-and-first-order-odes)
- [dependency; published-backward] thm-local-fully-nonlinear-cauchy-problem-by-charpit (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-c1-dependence-of-solutions-on-initial-data (euclidean-ordinary-differential-equations-with-smooth-dependence)
- [dependency; published-backward] thm-local-fully-nonlinear-cauchy-problem-by-charpit (quasilinear-characteristics-and-cauchy-kovalevskaya, frontier-31a-batch-16) -> thm-euclidean-inverse-function-theorem (inverse-and-implicit-function-theorems)
- [dependency; published-backward] def-graded-derivation-of-the-algebra-of-differential-forms (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-smooth-differential-k-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] def-graded-derivation-of-the-algebra-of-differential-forms (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-differential-forms-form-a-graded-commutative-algebra (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] def-exterior-derivative-by-the-invariant-vector-field-formula (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-smooth-differential-k-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] def-exterior-derivative-by-the-invariant-vector-field-formula (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-lie-bracket-of-smooth-vector-fields (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-leibniz-rules-for-the-lie-bracket-with-function-multiples (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] prop-exterior-derivative-of-a-function-is-its-differential (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-global-differential-or-tangent-map (tangent-cotangent-and-the-differential)
- [dependency; published-backward] thm-local-coordinate-formula-for-the-exterior-derivative (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-local-coordinate-expression-for-a-differential-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] thm-local-coordinate-formula-for-the-exterior-derivative (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-coordinate-vector-fields-commute (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] thm-the-exterior-derivative-commutes-with-pullback (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-pullback-of-a-differential-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] thm-the-exterior-derivative-commutes-with-pullback (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] prop-the-exterior-derivative-does-not-enlarge-support (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-smooth-section-local-section-and-support (smooth-vector-bundles-and-sections)
- [dependency; published-backward] def-lie-derivative-of-a-tensor-field (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-local-and-global-flow (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] def-lie-derivative-of-a-tensor-field (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-pullback-of-a-covariant-tensor-field (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] def-lie-derivative-of-a-tensor-field (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-smooth-tensor-field (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> thm-fundamental-theorem-on-flows (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-lie-derivative-of-a-function (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] thm-lie-derivative-is-a-derivation-of-the-tensor-algebra (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-tensor-products-and-contractions-of-smooth-tensor-fields-are-smooth (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-coordinate-vector-fields-commute (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-smoothness-of-a-tensor-field-is-equivalent-to-smooth-coordinate-components (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] def-lie-derivative-of-a-differential-form (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-smooth-differential-k-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-wedge-product-of-differential-forms (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] thm-cartans-magic-formula (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-interior-product-on-forms-is-a-graded-antiderivation (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] prop-cartan-commutator-identities (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-interior-product-on-forms-is-a-graded-antiderivation (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] prop-cartan-commutator-identities (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> thm-lie-derivative-of-a-vector-field-equals-the-lie-bracket (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] prop-lie-derivatives-are-natural-for-related-vector-fields (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-related-vector-fields-have-related-lie-brackets (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-time-dependent-vector-field-and-evolution-operator (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> thm-time-dependent-vector-fields-have-local-smooth-evolution-operators (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-time-dependent-evolution-satisfies-the-two-time-cocycle-law (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-annihilator-ideal-of-a-distribution-is-frame-independent (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-annihilator-bundle-of-a-distribution (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] lem-annihilator-ideal-of-a-distribution-is-frame-independent (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-double-annihilator-recovers-a-finite-rank-distribution (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] thm-pfaffian-frobenius-criterion (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-involutive-distribution (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] thm-pfaffian-frobenius-criterion (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> prop-involutivity-can-be-checked-on-a-local-frame (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] cor-codimension-one-frobenius-criterion (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> thm-frobenius-local-coordinate-theorem (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-integrable-distribution (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-pullback-of-a-differential-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported (the-exterior-derivative-and-cartan-calculus, frontier-31a-batch-17) -> def-smooth-section-local-section-and-support (smooth-vector-bundles-and-sections)
- [dependency; published-backward] ex-an-integrable-pfaffian-equation-with-a-local-first-integral (the-exterior-derivative-and-cartan-calculus-examples, frontier-31a-batch-17) -> cor-frobenius-local-first-integrals (distributions-integral-manifolds-and-the-frobenius-theorem)
- [dependency; published-backward] cex-a-nonproper-pullback-destroys-compact-support (the-exterior-derivative-and-cartan-calculus-examples, frontier-31a-batch-17) -> def-pullback-of-a-differential-form (tensor-fields-exterior-algebra-and-differential-forms)
- [dependency; published-backward] cex-a-nonproper-pullback-destroys-compact-support (the-exterior-derivative-and-cartan-calculus-examples, frontier-31a-batch-17) -> def-smooth-section-local-section-and-support (smooth-vector-bundles-and-sections)
- [dependency; published-backward] def-one-dimensional-borel-module-of-weight-lambda (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> thm-triangular-decomposition-from-a-chosen-positive-root-system (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] def-verma-module (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> def-universal-enveloping-algebra-as-a-tensor-quotient (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] thm-universal-property-of-verma-modules (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> def-highest-weight-vector-and-cyclic-highest-weight-module (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] thm-pbw-model-of-a-verma-module (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> thm-triangular-decomposition-from-a-chosen-positive-root-system (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] thm-pbw-model-of-a-verma-module (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] lem-every-nonzero-verma-submodule-contains-a-singular-vector (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> def-highest-weight-vector-and-cyclic-highest-weight-module (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] def-chevalley-contravariant-form (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> thm-triangular-decomposition-from-a-chosen-positive-root-system (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] def-chevalley-contravariant-form (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> def-highest-weight-vector-and-cyclic-highest-weight-module (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] thm-shapovalov-determinant-formula (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> def-weyl-vector-rho-for-a-chosen-positive-system (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] thm-shapovalov-determinant-formula (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> def-root-reflections-and-the-weyl-group-action (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] thm-shapovalov-determinant-formula (verma-modules-and-shapovalov-forms, frontier-31a-batch-18) -> prop-casimir-eigenvalue-on-a-highest-weight-module (harish-chandra-isomorphism-casimir-and-central-characters)
- [dependency; published-backward] def-p-elementary-and-p-hyperelementary-finite-groups (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-finite-p-group (group-actions-and-cayleys-theorem)
- [dependency; published-backward] def-p-elementary-and-p-hyperelementary-finite-groups (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-generated-subgroup (monoids-groups-and-subgroups)
- [dependency; published-backward] def-p-elementary-and-p-hyperelementary-finite-groups (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-external-semidirect-product (semidirect-products-and-automorphism-groups)
- [dependency; published-backward] lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> lem-subgroups-of-finite-p-groups-are-p-groups (group-actions-and-cayleys-theorem)
- [dependency; published-backward] lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-sylow-first-theorem (sylow-theorems-and-nilpotent-groups)
- [dependency; published-backward] def-induction-ideal-of-a-family-of-subgroups (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-virtual-character-and-character-ring-of-a-finite-group (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] def-induction-ideal-of-a-family-of-subgroups (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-induced-character-of-a-complex-representation (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-induction-ideal-of-a-subgroup-family-is-an-ideal (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-p-primary-character-value-congruence (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-virtual-character-and-character-ring-of-a-finite-group (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-p-primary-character-value-congruence (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional (the-group-algebra-and-representations)
- [dependency; published-backward] lem-hyperelementary-permutation-subring-reduction (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-mackey-double-coset-formula-for-restricting-an-induced-character (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-hyperelementary-permutation-subring-reduction (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-transitivity-of-induction-for-finite-groups (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-banaschewski-prime-obstruction (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-character-of-a-permutation-representation-counts-fixed-points (characters-and-the-orthogonality-relations)
- [dependency; published-backward] lem-elementary-detection-at-a-fixed-element (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> lem-cyclic-generator-class-functions-by-moebius-inversion (artin-induction-and-rational-characters)
- [dependency; published-backward] lem-elementary-detection-at-a-fixed-element (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-sylow-p-subgroup (sylow-theorems-and-nilpotent-groups)
- [dependency; published-backward] lem-elementary-detection-at-a-fixed-element (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-frobenius-formula-for-induced-characters (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-isaacs-linear-character-step (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-p-group-fixed-point-congruence (group-actions-and-cayleys-theorem)
- [dependency; published-backward] lem-isaacs-linear-character-step (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-external-semidirect-product (semidirect-products-and-automorphism-groups)
- [dependency; published-backward] def-supersolvable-groups-and-monomial-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-normal-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] def-supersolvable-groups-and-monomial-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-quotient-group (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] def-supersolvable-groups-and-monomial-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-subrepresentation-and-irreducible-representation (the-group-algebra-and-representations)
- [dependency; published-backward] def-supersolvable-groups-and-monomial-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-induced-character-of-a-complex-representation (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-p-elementary-groups-are-supersolvable (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-nontrivial-center-of-a-finite-p-group (group-actions-and-cayleys-theorem)
- [dependency; published-backward] lem-p-elementary-groups-are-supersolvable (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-quotient-group (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-subrepresentation-and-irreducible-representation (the-group-algebra-and-representations)
- [dependency; published-backward] prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-induced-character-of-a-complex-representation (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order (maschkes-theorem-and-complete-reducibility)
- [dependency; published-backward] prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-normal-subgroup (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-quotient-group (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] lem-monomiality-lifts-along-a-quotient (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient (characters-and-the-orthogonality-relations)
- [dependency; published-backward] lem-monomiality-lifts-along-a-quotient (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-transitivity-of-induction-for-finite-groups (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] lem-monomiality-lifts-along-a-quotient (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-quotient-group (normal-subgroups-and-quotient-groups)
- [dependency; published-backward] thm-finite-supersolvable-groups-are-monomial (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-transitivity-of-induction-for-finite-groups (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] thm-finite-supersolvable-groups-are-monomial (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-a-finite-group-is-abelian-iff-all-its-irreducible-complex-characters-have-degree-one (characters-and-the-orthogonality-relations)
- [dependency; published-backward] lem-p-elementary-characters-are-induced-from-linear-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-virtual-character-and-character-ring-of-a-finite-group (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] thm-brauer-induction (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-transitivity-of-induction-for-finite-groups (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cor-elementary-restriction-detects-generalized-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cor-elementary-restriction-detects-generalized-characters (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-virtual-character-and-character-ring-of-a-finite-group (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cor-elementary-local-integrality-criterion (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> prop-induction-and-restriction-satisfy-the-projection-formula-on-character-rings (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cor-elementary-local-integrality-criterion (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> def-virtual-character-and-character-ring-of-a-finite-group (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cor-cyclotomic-field-splits-a-finite-group (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order (maschkes-theorem-and-complete-reducibility)
- [dependency; published-backward] cor-cyclotomic-field-splits-a-finite-group (brauer-induction-and-elementary-subgroups, frontier-31a-batch-19) -> thm-transitivity-of-induction-for-finite-groups (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] ex-elementary-and-hyperelementary-small-groups (brauer-induction-and-elementary-subgroups-examples, frontier-31a-batch-19) -> def-external-semidirect-product (semidirect-products-and-automorphism-groups)
- [dependency; published-backward] ex-brauer-induction-for-s3 (brauer-induction-and-elementary-subgroups-examples, frontier-31a-batch-19) -> thm-frobenius-formula-for-induced-characters (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cex-cyclic-subgroups-do-not-give-integral-induction-in-general (brauer-induction-and-elementary-subgroups-examples, frontier-31a-batch-19) -> def-cyclic-induction-subgroup (artin-induction-and-rational-characters)
- [dependency; published-backward] cex-cyclic-subgroups-do-not-give-integral-induction-in-general (brauer-induction-and-elementary-subgroups-examples, frontier-31a-batch-19) -> def-virtual-character-and-character-ring-of-a-finite-group (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] cex-cyclic-subgroups-do-not-give-integral-induction-in-general (brauer-induction-and-elementary-subgroups-examples, frontier-31a-batch-19) -> thm-frobenius-formula-for-induced-characters (induced-representations-and-frobenius-reciprocity)
- [dependency; published-backward] def-riemannian-gradient-of-a-smooth-function (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] def-riemannian-gradient-of-a-smooth-function (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-differential-of-a-smooth-real-valued-function (tangent-cotangent-and-the-differential)
- [dependency; published-backward] def-riemannian-gradient-of-a-smooth-function (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-smooth-vector-field-as-a-tangent-bundle-section (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-riemannian-gradient-vanishes-exactly-at-critical-points (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-critical-point-and-critical-value-of-a-smooth-function (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] def-negative-gradient-trajectory-of-a-morse-function (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-morse-function-and-excellent-morse-function (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] def-negative-gradient-trajectory-of-a-morse-function (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-integral-curve-of-a-vector-field (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-negative-gradient-energy-identity (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-chain-rule-for-differentials-of-smooth-maps (tangent-cotangent-and-the-differential)
- [dependency; published-backward] cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-unique-maximal-integral-curve-through-each-point (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] def-downward-gradient-like-vector-field (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-morse-function-and-excellent-morse-function (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] def-downward-gradient-like-vector-field (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-smooth-vector-field-as-a-tangent-bundle-section (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-morse-function-and-excellent-morse-function (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> cor-every-smooth-vector-field-on-a-compact-manifold-is-complete (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-compact-space (compactness)
- [dependency; published-backward] lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-fundamental-theorem-on-flows (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> cor-every-smooth-vector-field-on-a-compact-manifold-is-complete (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] def-stable-and-unstable-sets-of-a-critical-point (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-local-and-global-flow (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-nondegenerate-critical-point-nullity-index-and-coindex (morse-critical-points-hessians-and-indices)
- [dependency; published-backward] thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-fundamental-theorem-on-flows (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] lem-stable-and-unstable-manifolds-are-flow-invariant (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-fundamental-theorem-on-flows (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] def-proper-smooth-function-and-compact-morse-slab (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-compact-space (compactness)
- [dependency; published-backward] def-proper-smooth-function-and-compact-morse-slab (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-continuous-map-top (topological-spaces-and-continuity)
- [dependency; published-backward] prop-proper-morse-slabs-give-complete-connecting-trajectories (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-unique-maximal-integral-curve-through-each-point (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] prop-proper-morse-slabs-give-complete-connecting-trajectories (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] rem-noncompact-flow-completeness-is-an-extra-hypothesis (gradient-like-vector-fields-and-morse-trajectories, frontier-31a-batch-20) -> def-complete-vector-field (vector-fields-flows-and-lie-derivatives)
- [dependency; published-backward] def-bounded-arithmetic-formula (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-primitive-recursive-function (primitive-recursive-and-partial-computable-functions)
- [dependency; published-backward] lem-bounded-quantifiers-preserve-primitive-recursiveness (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-primitive-recursive-function (primitive-recursive-and-partial-computable-functions)
- [dependency; published-backward] thm-sigma-one-sets-are-exactly-ce-sets (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-computable-and-partial-computable-function (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] thm-sigma-one-sets-are-exactly-ce-sets (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-decidable-and-recognizable-language (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] thm-sigma-one-sets-are-exactly-ce-sets (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> thm-kleene-normal-form (primitive-recursive-and-partial-computable-functions)
- [dependency; published-backward] cor-delta-one-sets-are-exactly-decidable (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-decidable-and-recognizable-language (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] def-arithmetical-level-completeness (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-computable-many-one-reduction (computable-reductions-and-rices-theorem)
- [dependency; published-backward] thm-halting-is-sigma-one-complete (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-universal-and-acceptable-numbering (acceptable-numberings-smn-and-the-recursion-theorem)
- [dependency; published-backward] thm-halting-is-sigma-one-complete (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-kleene-t-predicate-and-output-function (primitive-recursive-and-partial-computable-functions)
- [dependency; published-backward] thm-totality-is-pi-two-complete (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-kleene-t-predicate-and-output-function (primitive-recursive-and-partial-computable-functions)
- [dependency; published-backward] thm-totality-is-pi-two-complete (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> thm-smn-parameter-theorem (acceptable-numberings-smn-and-the-recursion-theorem)
- [dependency; published-backward] thm-totality-is-pi-two-complete (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-computable-many-one-reduction (computable-reductions-and-rices-theorem)
- [dependency; published-backward] def-relative-computability-and-enumerability (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-turing-reduction (computable-reductions-and-rices-theorem)
- [dependency; published-backward] def-relative-computability-and-enumerability (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-universal-and-acceptable-numbering (acceptable-numberings-smn-and-the-recursion-theorem)
- [dependency; published-backward] def-limit-computable-function (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> def-computable-and-partial-computable-function (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] fs-limit-computable-has-a-known-stabilization-stage (the-arithmetical-hierarchy-and-posts-theorem, frontier-31a-batch-21) -> thm-halting-is-recognizable-and-undecidable (diagonalization-and-the-halting-problem)
- [dependency; published-backward] def-efficient-universal-simulation-with-clock (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-effective-encoding-of-turing-machines (robust-machine-models-and-universal-computation)
- [dependency; published-backward] def-efficient-universal-simulation-with-clock (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-time-and-space-constructible-function (resource-bounds-and-machine-invariance)
- [dependency; published-backward] def-efficient-universal-simulation-with-clock (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-effective-enumeration-of-clocked-machines (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-effective-encoding-of-turing-machines (robust-machine-models-and-universal-computation)
- [dependency; published-backward] lem-time-diagonal-language-respects-its-budget (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-time-and-space-constructible-function (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-time-diagonal-language-respects-its-budget (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] thm-deterministic-time-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] thm-deterministic-time-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-asymptotic-resource-comparison (resource-bounds-and-machine-invariance)
- [dependency; published-backward] cor-p-is-properly-contained-in-exp (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-p (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] cor-p-is-properly-contained-in-exp (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-exp-and-nexp (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] thm-nondeterministic-time-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-time-and-space-constructible-function (resource-bounds-and-machine-invariance)
- [dependency; published-backward] thm-nondeterministic-time-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-space-bounded-universal-simulation (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-space-bounded-universal-simulation (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-time-and-space-constructible-function (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-space-diagonal-machine-halts (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> lem-space-bounded-machines-have-exponentially-many-configurations (space-complexity-savitch-and-tqbf)
- [dependency; published-backward] lem-space-diagonal-machine-halts (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-time-and-space-constructible-function (resource-bounds-and-machine-invariance)
- [dependency; published-backward] thm-deterministic-space-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] thm-deterministic-space-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-asymptotic-resource-comparison (resource-bounds-and-machine-invariance)
- [dependency; published-backward] def-read-only-input-workspace-classes (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-asymptotic-resource-comparison (resource-bounds-and-machine-invariance)
- [dependency; published-backward] def-read-only-input-workspace-classes (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-multitape-and-nondeterministic-machines (turing-machines-configurations-and-computation)
- [dependency; published-backward] thm-read-only-workspace-space-hierarchy (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-asymptotic-resource-comparison (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-read-only-workspace-simulates-in-all-tapes-space (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] cor-l-is-properly-contained-in-pspace (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-pspace-and-npspace (space-complexity-savitch-and-tqbf)
- [dependency; published-backward] lem-padding-transfers-time-bounds (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] thm-gap-and-union-theorems-for-complexity-bounds (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-computable-and-partial-computable-function (decidable-recognizable-and-enumerable-languages)
- [dependency; published-backward] prop-hierarchy-theorems-do-not-separate-p-from-np (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-p (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] prop-hierarchy-theorems-do-not-separate-p-from-np (time-and-space-hierarchy-theorems, frontier-31a-batch-21) -> def-np-by-verifiers (p-np-conp-and-polynomial-reductions)
- [dependency; published-backward] cex-unrestricted-diagonalization-respects-any-bound (time-and-space-hierarchy-theorems-examples, frontier-31a-batch-21) -> def-effective-encoding-of-turing-machines (robust-machine-models-and-universal-computation)
- [dependency; published-backward] def-read-only-input-logspace-machine (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; cross-batch] def-l-and-nl (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-read-only-input-workspace-classes (time-and-space-hierarchy-theorems)
- [dependency; published-backward] def-directed-st-connectivity (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-multigraph-loop-and-digraph (graphs-walks-and-connectivity)
- [dependency; published-backward] def-directed-st-connectivity (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-directed-walk-trail-path-cycle-and-strong-connectivity (eulerian-and-hamiltonian-graphs)
- [dependency; cross-batch] thm-read-only-input-savitch-simulation (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-read-only-input-workspace-classes (time-and-space-hierarchy-theorems)
- [dependency; cross-batch] thm-nl-is-contained-in-dspace-log-squared-n (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-read-only-input-workspace-classes (time-and-space-hierarchy-theorems)
- [dependency; cross-batch] thm-immerman-szelepcsenyi-nl-equals-conl (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-read-only-input-workspace-classes (time-and-space-hierarchy-theorems)
- [dependency; published-backward] def-p-complete-under-logspace-reductions (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
- [dependency; published-backward] lem-polynomial-time-computations-have-logspace-uniform-circuits (logarithmic-space-nl-and-reachability, frontier-31a-batch-22) -> def-dtime-ntime-dspace-and-nspace (resource-bounds-and-machine-invariance)
ERROR unresolved: lem-structure-presheaf-basic-open-well-defined (frontier-31a-batch-14) declares dependency "lem-sheaf-condition-check-on-basis", which resolves to no published or in-run item
ERROR unresolved: thm-structure-sheaf-affine-scheme (frontier-31a-batch-14) declares dependency "lem-sheaf-condition-check-on-basis", which resolves to no published or in-run item
audit-manifest: 2185 relationship(s) over 910 item(s) in 22 batch(es); 2 defect(s)

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
`research/frontier-31a-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

# Step 6c — cross-batch audit and closure

Read `research/frontier-31a-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/frontier-31a-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run frontier-31a --id ITEM_ID` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/frontier-31a-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.



## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
