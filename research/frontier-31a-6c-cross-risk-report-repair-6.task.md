# Step 6c repair — risk-report

This file is the authority for repair cycle 6.
Primary gate: `risk-report`
Reason: ERROR risk-review-missing [lem-structure-presheaf-basic-open-well-defined]: lem-structure-presheaf-basic-open-well-defined is high risk and lacks a complete Alpha risk_review
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `lem-structure-presheaf-basic-open-well-defined`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
ORDINARY 2 [lem-distinct-components-commute] 2:boundary-sensitive language
ORDINARY 2 [thm-generalized-fitting-subgroup-contains-its-centralizer] 2:4 declared dependencies
ORDINARY 0 [fs-cfsg-says-every-finite-group-is-simple] no signals
ORDINARY 2 [fs-cfsg-composition-factors-determine-the-finite-group-up-to-isomorphism] 2:analytic limiting/completeness language
ORDINARY 0 [fs-all-finite-simple-groups-are-alternating-or-cyclic] no signals
ORDINARY 0 [fs-the-library-proves-the-classification-of-finite-simple-groups] no signals
MODERATE 4 [fs-the-second-generation-cfsg-proof-is-complete-as-of-2026] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [fs-groups-of-lie-type-are-developed-here-through-lie-algebra-structure] no signals
ORDINARY 1 [ex-cyclic-simple-groups-of-prime-order] 1:finite countermodel smoke test selected
ORDINARY 0 [ex-a-five-as-the-smallest-nonabelian-simple-group] no signals
ORDINARY 0 [ex-psl-two-seven-and-a-low-rank-coincidence] no signals
ORDINARY 0 [ex-a-suzuki-group-family-entry] no signals
ORDINARY 0 [ex-the-mathieu-groups-among-the-sporadics] no signals
ORDINARY 0 [cex-composition-factors-do-not-determine-the-extension] no signals
ORDINARY 2 [lem-every-finite-group-is-finitely-presented] 2:boundary-sensitive language
ORDINARY 2 [lem-hopf-formula-subgroups-are-normal-and-the-quotient-exists] 2:quotient or equivalence-class construction
MODERATE 4 [lem-five-term-homology-sequence-for-a-free-presentation] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [thm-hopf-formula-for-the-schur-multiplier] no signals
ORDINARY 2 [cor-hopf-formula-is-independent-of-the-free-presentation] 2:quotient or equivalence-class construction
ORDINARY 2 [cor-schur-multiplier-of-a-finitely-presented-group-is-finitely-generated] 2:quotient or equivalence-class construction
MODERATE 4 [prop-schur-multiplier-of-a-free-group-is-trivial] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [prop-schur-multiplier-of-a-cyclic-group-is-trivial] no signals
ORDINARY 0 [lem-exterior-square-has-the-alternating-universal-property] no signals
ORDINARY 2 [thm-schur-multiplier-of-an-abelian-group-is-its-exterior-square] 2:quotient or equivalence-class construction
ORDINARY 2 [lem-universal-central-extension-is-unique-up-to-unique-isomorphism] 2:existence, choice, uniqueness, or well-definedness
HIGH 5 [thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
ORDINARY 0 [lem-free-presentation-construction-is-a-central-extension] no signals
ORDINARY 2 [thm-free-presentation-construction-has-the-universal-property] 2:4 declared dependencies
ORDINARY 0 [cor-kernel-of-the-universal-central-extension-is-the-schur-multiplier] no signals
ORDINARY 0 [prop-universal-central-extension-group-is-superperfect] no signals
HIGH 5 [thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two] 2:4 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 2 [cor-central-extensions-of-perfect-groups-are-controlled-by-hom-from-the-schur-multiplier] 2:quotient or equivalence-class construction
ORDINARY 2 [lem-positive-degree-integral-homology-of-a-finite-group-is-order-torsion] 2:boundary-sensitive language
MODERATE 4 [lem-schur-multiplier-of-a-finite-group-is-finite] 2:4 declared dependencies; 2:analytic limiting/completeness language
MODERATE 4 [thm-existence-of-schur-covering-groups-for-finite-groups] 2:4 declared dependencies; 2:quotient or equivalence-class construction
ORDINARY 0 [fs-the-schur-multiplier-is-defined-as-h-two-cohomology-with-complex-units] no signals
ORDINARY 2 [fs-hopfs-formula-is-obviously-independent-of-the-presentation] 2:quotient or equivalence-class construction
MODERATE 3 [fs-every-group-has-a-universal-central-extension] 3:biconditional / both-direction claim
ORDINARY 0 [fs-every-central-extension-is-a-stem-extension] no signals
MODERATE 4 [fs-schur-covering-groups-are-unique-for-all-finite-groups] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 2 [fs-the-universal-coefficient-short-exact-sequence-splits-naturally] 2:boundary-sensitive language
ORDINARY 0 [ex-schur-multiplier-of-a-cyclic-group] no signals
ORDINARY 2 [ex-schur-multiplier-of-a-finite-abelian-group] 2:boundary-sensitive language
ORDINARY 2 [ex-the-binary-icosahedral-cover-of-a-five] 2:quotient or equivalence-class construction
MODERATE 4 [ex-hopf-formula-from-a-one-relator-presentation] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [ex-a-stem-extension-that-is-not-universal] no signals
MODERATE 4 [cex-nonuniqueness-of-schur-covering-groups] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant] 2:boundary-sensitive language
MODERATE 4 [cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous] 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-absolutely-continuous-functions-have-integrable-derivatives] 2:5 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
CRITICAL 8 [thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [thm-absolutely-continuous-functions-have-luzin-property-n] 2:4 declared dependencies; 2:boundary-sensitive language
MODERATE 4 [lem-luzin-property-n-gives-an-integral-growth-estimate] 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-banach-zarecki-characterisation-of-absolute-continuity] 3:9 declared dependencies; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
HIGH 6 [thm-countably-exceptional-differentiability-and-integrable-derivative-imply-absolute-continuity] 2:6 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [lem-the-product-of-two-absolutely-continuous-functions-is-absolutely-continuous] 2:boundary-sensitive language
MODERATE 4 [thm-integration-by-parts-for-absolutely-continuous-functions] 2:5 declared dependencies; 2:boundary-sensitive language
HIGH 7 [thm-change-of-variables-for-an-increasing-absolutely-continuous-function] 3:8 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition] 2:6 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-change-of-variables-for-an-absolutely-continuous-map-under-an-absolutely-continuous-composition-hypothesis] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [thm-total-variation-function-of-an-absolutely-continuous-function] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [thm-lipschitz-characterisation-within-absolutely-continuous-functions] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
ORDINARY 0 [thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous] no signals
ORDINARY 0 [thm-an-absolutely-continuous-function-after-a-monotone-lipschitz-function-is-absolutely-continuous] no signals
MODERATE 4 [cex-the-composition-of-two-absolutely-continuous-functions-need-not-be-absolutely-continuous] 2:6 declared dependencies; 2:analytic limiting/completeness language
ORDINARY 2 [fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous] 2:boundary-sensitive language
ORDINARY 2 [fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz] 2:boundary-sensitive language
ORDINARY 0 [fs-absolute-continuity-is-preserved-under-composition] no signals
ORDINARY 0 [fs-every-absolutely-continuous-function-is-lipschitz] no signals
ORDINARY 2 [fs-luzin-property-n-implies-absolute-continuity] 2:boundary-sensitive language
ORDINARY 2 [cex-x-squared-sine-one-over-x-squared-is-differentiable-everywhere-but-not-absolutely-continuous] 2:quotient or equivalence-class construction
HIGH 6 [ex-integration-by-parts-for-absolutely-continuous-functions] 2:4 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [ex-change-of-variables-through-an-increasing-absolutely-continuous-map-with-a-positive-measure-flat-set] 2:5 declared dependencies; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [cex-the-cantor-function-fails-luzin-property-n] 2:boundary-sensitive language
ORDINARY 0 [cex-the-classical-composition-of-absolutely-continuous-functions-is-not-absolutely-continuous] no signals
ORDINARY 2 [cex-luzin-property-n-does-not-imply-absolute-continuity] 2:boundary-sensitive language
ORDINARY 0 [lem-minkowski-functional-is-sublinear] no signals
ORDINARY 2 [lem-balanced-gauge-is-a-seminorm] 2:boundary-sensitive language
ORDINARY 2 [lem-open-convex-set-recovered-from-its-gauge] 2:analytic limiting/completeness language
MODERATE 3 [thm-separation-of-an-open-convex-set-and-a-point] 2:5 declared dependencies; 1:3 cited facts
ORDINARY 2 [thm-separation-of-disjoint-convex-sets-one-open] 2:boundary-sensitive language
HIGH 7 [thm-strong-separation-of-closed-and-compact-convex-sets] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [cor-closed-convex-set-is-an-intersection-of-closed-half-spaces] 2:boundary-sensitive language
MODERATE 3 [thm-geometric-hahn-banach-for-subspaces] 2:4 declared dependencies; 1:2 cited facts
ORDINARY 0 [cor-annihilator-detects-closure] no signals
HIGH 5 [cor-density-characterised-by-annihilator-zero] 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 6 [cor-finite-dimensional-subspaces-are-complemented] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim
CRITICAL 8 [cor-finite-codimensional-subspaces-are-complemented] 2:5 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
HIGH 7 [thm-closed-hyperplanes-are-kernels-of-nonzero-functionals] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language
MODERATE 4 [thm-mazur-weak-and-norm-closure-of-convex-sets] 2:4 declared dependencies; 2:boundary-sensitive language
MODERATE 4 [ex-gauges-of-norm-balls-and-ellipsoids] 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cex-gauge-of-a-nonbalanced-set-is-not-a-seminorm] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
MODERATE 3 [cex-two-closed-convex-sets-need-not-be-strongly-separated] 2:5 declared dependencies; 1:2 cited facts
ORDINARY 2 [ex-distance-to-a-subspace-via-annihilating-functionals] 2:boundary-sensitive language
ORDINARY 2 [lem-c-zero-is-a-closed-subspace-of-ell-infinity] 2:boundary-sensitive language
HIGH 5 [lem-uncountable-almost-disjoint-family-on-natural-numbers] 2:5 declared dependencies; 1:3 cited facts; 2:induction, recursion, or minimality
CRITICAL 11 [lem-quotient-by-c-zero-has-no-countable-separating-family] 2:6 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [thm-c-zero-is-not-complemented-in-ell-infinity] 2:6 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [ex-a-closed-uncomplemented-subspace] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 0 [lem-finite-coordinate-cylinders-form-a-pi-system] no signals
ORDINARY 2 [lem-finite-coordinate-cylinder-sets-form-an-algebra] 2:boundary-sensitive language
ORDINARY 2 [lem-cylinder-premeasure-from-consistent-finite-dimensional-laws-is-well-defined] 2:existence, choice, uniqueness, or well-definedness
CRITICAL 8 [lem-countable-product-cylinder-premeasure-is-countably-additive] 2:6 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-countable-product-of-probability-spaces] 3:7 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 3 [cor-coordinate-random-elements-on-a-countable-product-are-independent] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [cor-countable-independent-copies-exist] 2:4 declared dependencies
ORDINARY 0 [lem-finite-products-of-standard-borel-spaces-are-standard-borel] no signals
CRITICAL 10 [thm-borel-probability-measures-on-polish-spaces-are-inner-regular] 3:15 declared dependencies; 2:6 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
CRITICAL 11 [thm-kolmogorov-extension-for-standard-borel-coordinate-spaces] 3:11 declared dependencies; 2:6 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [cor-arbitrary-product-measure-for-standard-borel-probability-spaces] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 2 [cor-canonical-process-realizes-consistent-finite-dimensional-laws] 2:boundary-sensitive language
MODERATE 3 [thm-a-process-law-on-cylinder-space-is-determined-by-finite-dimensional-distributions] 2:4 declared dependencies; 1:2 cited facts
CRITICAL 10 [lem-cylinder-sigma-events-depend-on-countably-many-coordinates] 2:4 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 0 [ex-infinite-coin-toss-space] no signals
ORDINARY 2 [ex-iid-sequence-with-a-prescribed-law] 2:boundary-sensitive language
ORDINARY 0 [ex-independent-but-not-identically-distributed-coordinate-sequence] no signals
ORDINARY 0 [ex-canonical-random-walk-from-product-increments] no signals
ORDINARY 0 [ex-uncountable-bernoulli-coordinate-process] no signals
ORDINARY 2 [cex-modification-need-not-be-indistinguishable] 2:boundary-sensitive language
ORDINARY 2 [cex-consistent-marginals-alone-do-not-specify-joint-laws] 2:boundary-sensitive language
MODERATE 4 [cex-a-noncylinder-path-functional-may-fail-measurability] 2:4 declared dependencies; 2:boundary-sensitive language
ORDINARY 2 [lem-absolutely-summable-fourier-coefficients-give-uniform-convergence] 2:analytic limiting/completeness language
ORDINARY 2 [thm-wiener-algebra-is-a-banach-algebra] 2:analytic limiting/completeness language
ORDINARY 2 [lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz] 2:analytic limiting/completeness language
MODERATE 4 [lem-dyadic-fourier-coefficient-square-sum-bound-for-holder-functions] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [lem-holder-fourier-coefficients-have-weighted-ltwo-decay] 2:analytic limiting/completeness language
MODERATE 3 [thm-bernstein-absolute-convergence-theorem] 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 0 [lem-fourier-coefficients-of-a-periodic-weak-derivative] no signals
HIGH 5 [cor-one-ltwo-derivative-implies-an-absolutely-convergent-fourier-series] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 8 [thm-wiener-lemma-for-absolutely-convergent-fourier-series] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
HIGH 7 [cor-holomorphic-functional-calculus-in-the-wiener-algebra] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [ex-a-trigonometric-polynomial-in-the-wiener-algebra] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [ex-an-absolutely-convergent-non-smooth-fourier-series] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [cex-continuity-does-not-imply-absolute-fourier-convergence] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [cex-the-bernstein-holder-one-half-endpoint-can-fail] 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [cex-wiener-inversion-needs-nonvanishing] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 9 [thm-dirichlet-character-primitive-induction] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
HIGH 7 [thm-induced-dirichlet-l-finite-euler-factors] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
HIGH 7 [lem-primitive-gauss-sum-twist] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
ORDINARY 2 [thm-primitive-gauss-sum-norm] 2:quotient or equivalence-class construction
ORDINARY 2 [lem-fourier-transform-of-a-gaussian] 2:analytic limiting/completeness language
ORDINARY 2 [thm-dirac-comb-is-fourier-invariant] 2:analytic limiting/completeness language
MODERATE 3 [thm-twisted-poisson-summation] 1:2 cited facts; 2:quotient or equivalence-class construction
HIGH 7 [thm-primitive-dirichlet-l-analytic-continuation] 2:4 declared dependencies; 1:3 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
MODERATE 3 [thm-primitive-dirichlet-l-functional-equation] 1:2 cited facts; 2:quotient or equivalence-class construction
MODERATE 3 [cor-dirichlet-l-root-number-unit-modulus] 1:2 cited facts; 2:quotient or equivalence-class construction
HIGH 5 [cor-dirichlet-l-trivial-zeros] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [ex-primitive-ancestors-of-small-characters] 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-finite-euler-factors-under-character-induction] 2:quotient or equivalence-class construction
HIGH 5 [ex-gauss-sum-for-chi-four] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [ex-even-and-odd-character-theta-kernels] 1:2 cited facts; 2:quotient or equivalence-class construction
MODERATE 3 [ex-trivial-zeros-of-a-dirichlet-l-function] 1:2 cited facts; 2:boundary-sensitive language
HIGH 5 [cex-a-character-modulus-need-not-be-its-conductor] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
ORDINARY 0 [cex-gauss-sum-sign-is-not-canonical-without-conventions] no signals
HIGH 7 [cor-algebraic-integer-minimal-polynomial-criterion] 3:biconditional / both-direction claim; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 0 [thm-clearing-denominators-for-an-algebraic-number] no signals
MODERATE 3 [cor-trace-and-norm-of-an-algebraic-integer] 1:2 cited facts; 2:induction, recursion, or minimality
HIGH 7 [thm-ring-of-integers-free-of-rank-degree] 2:5 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [thm-orders-have-integral-bases-and-finite-index] 2:4 declared dependencies; 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
ORDINARY 0 [lem-discriminant-change-of-basis] no signals
ORDINARY 1 [thm-discriminant-as-an-embedding-determinant] 1:2 cited facts
HIGH 5 [thm-number-field-discriminant-is-well-defined-and-nonzero] 2:4 declared dependencies; 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 2 [thm-power-basis-discriminant-is-polynomial-discriminant] 2:induction, recursion, or minimality
MODERATE 3 [cor-order-index-discriminant-formula] 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 2 [cor-squarefree-power-basis-discriminant-gives-ring-of-integers] 2:analytic limiting/completeness language
ORDINARY 2 [thm-ring-of-integers-of-a-quadratic-field] 2:analytic limiting/completeness language
ORDINARY 2 [cor-discriminant-of-a-quadratic-field] 2:analytic limiting/completeness language
ORDINARY 2 [cor-ring-of-integers-is-a-dedekind-domain] 2:analytic limiting/completeness language
MODERATE 4 [ex-ring-of-integers-of-q] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
HIGH 5 [ex-gaussian-and-eisenstein-integer-bases] 1:2 cited facts; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
HIGH 5 [ex-ring-of-integers-of-q-sqrt-five] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [ex-pure-cubic-power-basis] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
MODERATE 3 [ex-nonmaximal-quadratic-order] 1:3 cited facts; 2:analytic limiting/completeness language
MODERATE 3 [ex-index-obstructs-naive-polynomial-factorization] 1:2 cited facts; 2:quotient or equivalence-class construction
CRITICAL 9 [thm-the-tensor-product-in-a-multitensor-category-is-biexact] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
ORDINARY 1 [thm-dualization-in-a-multitensor-category-is-exact] 1:3 cited facts
MODERATE 3 [thm-images-commute-with-tensor-products-in-a-multitensor-category] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [thm-tensoring-with-a-dualizable-object-preserves-projectives] 1:3 cited facts
MODERATE 4 [cor-the-unit-is-projective-exactly-when-the-tensor-category-is-semisimple] 1:2 cited facts; 3:biconditional / both-direction claim
MODERATE 4 [thm-the-unit-object-of-a-multitensor-category-is-semisimple] 2:6 declared dependencies; 2:5 cited facts
MODERATE 3 [thm-the-unit-object-of-a-tensor-category-is-simple] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 0 [cor-evaluation-is-monic-and-coevaluation-is-epic-for-nonzero-objects] no signals
ORDINARY 0 [thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful] no signals
HIGH 5 [thm-the-grothendieck-ring-multiplication-is-well-defined] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
ORDINARY 1 [thm-duality-induces-an-anti-involution-on-the-grothendieck-ring] 1:3 cited facts
ORDINARY 0 [thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category] no signals
HIGH 5 [fs-every-finite-k-linear-abelian-category-is-semisimple] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 1 [fs-every-rigid-k-linear-abelian-monoidal-category-is-a-tensor-category] 1:2 cited facts
ORDINARY 1 [fs-a-tensor-functor-is-just-a-strong-monoidal-functor] 1:2 cited facts
ORDINARY 0 [fs-the-grothendieck-ring-of-a-tensor-category-is-always-commutative] no signals
ORDINARY 1 [fs-objectwise-isomorphisms-x-isomorphic-to-x-double-dual-supply-a-pivotal-structure] 1:2 cited facts
ORDINARY 1 [ex-finite-dimensional-vector-spaces-form-a-fusion-category] 1:3 cited facts
ORDINARY 1 [ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces] 1:2 cited facts
ORDINARY 1 [ex-a-matrix-multifusion-category-with-nonsimple-unit] 1:2 cited facts
MODERATE 3 [ex-fusion-rules-for-a-supplied-finite-simple-family] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [prop-ext-zero-is-hom-for-the-injective-construction] 2:boundary-sensitive language
ORDINARY 2 [prop-ext-zero-is-hom-for-the-projective-construction] 2:boundary-sensitive language
ORDINARY 0 [prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable] no signals
ORDINARY 0 [prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable] no signals
ORDINARY 2 [prop-positive-ext-vanishes-on-an-injective-second-variable] 2:boundary-sensitive language
ORDINARY 2 [prop-positive-ext-vanishes-on-a-projective-first-variable] 2:boundary-sensitive language
ORDINARY 0 [lem-the-two-hom-double-complex-differentials-commute-before-signing] no signals
MODERATE 4 [lem-acyclic-assembly-by-exact-columns] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [lem-acyclic-assembly-by-exact-rows] no signals
ORDINARY 0 [lem-hom-from-a-projective-object-makes-the-injective-resolution-columns-exact] no signals
ORDINARY 0 [lem-hom-into-an-injective-object-makes-the-projective-resolution-rows-exact] no signals
MODERATE 3 [thm-projective-and-injective-constructions-of-ext-are-naturally-isomorphic] 3:7 declared dependencies
MODERATE 4 [lem-the-ext-balance-isomorphism-is-independent-of-resolution-comparison-data] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 4 [prop-the-ext-balance-isomorphism-is-natural-in-both-variables] 2:4 declared dependencies; 2:boundary-sensitive language
ORDINARY 2 [prop-the-ext-balance-isomorphisms-satisfy-change-of-resolution-cocycle-laws] 2:boundary-sensitive language
ORDINARY 0 [thm-long-exact-ext-sequence-in-the-second-variable] no signals
ORDINARY 0 [thm-long-exact-ext-sequence-in-the-first-variable] no signals
ORDINARY 2 [prop-the-two-ext-long-exact-sequences-agree-under-balance] 2:boundary-sensitive language
ORDINARY 2 [thm-ext-dimension-shifting-in-the-first-variable] 2:boundary-sensitive language
ORDINARY 0 [thm-ext-dimension-shifting-in-the-second-variable] no signals
ORDINARY 0 [cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable] no signals
ORDINARY 2 [cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable] 2:boundary-sensitive language
ORDINARY 2 [prop-exact-functors-compatible-with-hom-transport-ext-under-the-stated-adjunction-hypotheses] 2:existence, choice, uniqueness, or well-definedness
MODERATE 4 [lem-ext-one-of-z-mod-n-by-z-is-z-mod-n] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [fs-ext-is-defined-before-choosing-or-supplying-resolutions] no signals
ORDINARY 0 [fs-projective-ext-and-injective-ext-are-equal-by-definition] no signals
ORDINARY 0 [fs-ext-is-covariant-in-both-variables] no signals
MODERATE 4 [fs-positive-ext-vanishes-whenever-either-variable-is-injective] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [fs-a-double-complex-totalisation-is-unambiguous-with-infinite-diagonals] 2:boundary-sensitive language
ORDINARY 0 [fs-balance-of-ext-requires-the-spectral-sequence-pages] no signals
ORDINARY 2 [ex-ext-zero-as-hom-in-both-constructions] 2:boundary-sensitive language
ORDINARY 2 [ex-ext-from-a-two-term-projective-resolution] 2:boundary-sensitive language
ORDINARY 2 [ex-ext-of-a-cyclic-abelian-group-by-an-abelian-group] 2:boundary-sensitive language
ORDINARY 2 [ex-the-hom-double-complex-in-low-bidegrees] 2:boundary-sensitive language
ORDINARY 0 [ex-an-ext-dimension-shift] no signals
ORDINARY 2 [cex-positive-ext-does-not-vanish-for-an-injective-first-variable] 2:boundary-sensitive language
ORDINARY 0 [ex-naturality-of-the-balance-isomorphism] no signals
ORDINARY 2 [prop-a-morphism-of-extensions-is-an-isomorphism] 2:quotient or equivalence-class construction
MODERATE 4 [prop-equivalence-of-extensions-is-an-equivalence-relation] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [lem-pullback-and-pushout-descend-to-extension-classes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [lem-baer-sum-of-short-exact-sequence-classes-is-independent-of-representatives] 2:quotient or equivalence-class construction
HIGH 6 [thm-baer-sum-makes-extension-classes-an-abelian-group] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [prop-extension-classes-are-contravariant-in-the-quotient-and-covariant-in-the-subobject] 2:quotient or equivalence-class construction
ORDINARY 2 [lem-equivalent-extensions-have-the-same-ext-class] 2:boundary-sensitive language
MODERATE 4 [lem-every-ext-one-class-is-represented-by-an-extension] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [lem-two-extensions-with-the-same-ext-class-are-equivalent] 2:boundary-sensitive language
CRITICAL 8 [thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one] 2:5 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [lem-yoneda-splicing-is-well-defined-on-equivalence-classes] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [thm-yoneda-product-is-associative-and-unital] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [thm-higher-yoneda-ext-agrees-with-derived-ext] 2:5 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product] no signals
MODERATE 4 [thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective] 1:3 cited facts; 3:biconditional / both-direction claim
HIGH 7 [thm-projective-dimension-at-most-n-iff-higher-ext-vanishes] 2:5 declared dependencies; 2:5 cited facts; 3:biconditional / both-direction claim
MODERATE 3 [thm-injective-dimension-at-most-n-iff-higher-ext-vanishes] 3:biconditional / both-direction claim
HIGH 5 [cor-projective-dimension-is-the-largest-nondegenerate-ext-degree-when-finite] 3:biconditional / both-direction claim; 2:induction, recursion, or minimality
HIGH 7 [thm-global-dimension-is-the-supremum-of-nondegenerate-ext-degrees] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [prop-global-dimension-zero-characterises-semisimple-module-categories] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [prop-hereditary-rings-have-global-dimension-at-most-one] 2:boundary-sensitive language
CRITICAL 10 [lem-subgroups-of-free-abelian-groups-are-free] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
MODERATE 4 [thm-the-integers-have-global-dimension-one] 2:4 declared dependencies; 2:boundary-sensitive language
ORDINARY 2 [fs-an-extension-of-m-by-n-represents-ext-one-of-n-by-m] 2:boundary-sensitive language
MODERATE 4 [fs-baer-sum-is-formed-by-taking-only-the-direct-sum-of-middle-objects] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [fs-equivalence-classes-of-extensions-automatically-form-a-set] 2:quotient or equivalence-class construction
MODERATE 4 [fs-the-yoneda-product-is-graded-commutative-for-every-abelian-category] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [fs-projective-dimension-is-the-length-of-any-projective-resolution] 2:boundary-sensitive language
MODERATE 4 [fs-left-and-right-global-dimension-are-equal-by-definition] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [ex-the-split-extension-as-the-zero-baer-class] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [ex-baer-sum-of-two-extensions-of-cyclic-groups] no signals
MODERATE 4 [ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-splicing-two-short-exact-sequences] 2:boundary-sensitive language
MODERATE 4 [ex-a-noncommutative-yoneda-product] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-projective-dimension-of-a-cyclic-abelian-group] 2:boundary-sensitive language
ORDINARY 2 [ex-global-dimension-of-a-field-and-of-the-integers] 2:boundary-sensitive language
ORDINARY 2 [cex-two-equivalent-higher-extensions-with-no-single-isomorphism-of-middle-terms] 2:boundary-sensitive language
ORDINARY 2 [lem-the-tensor-total-differential-is-well-defined-and-squares-to-zero] 2:boundary-sensitive language
ORDINARY 2 [prop-tor-zero-is-the-tensor-product-in-either-construction] 2:boundary-sensitive language
ORDINARY 2 [prop-each-tor-construction-is-covariant-in-both-variables] 2:4 declared dependencies
ORDINARY 2 [prop-positive-tor-vanishes-when-the-resolved-variable-is-projective] 2:boundary-sensitive language
ORDINARY 0 [lem-projective-modules-are-flat-over-an-arbitrary-ring] no signals
ORDINARY 0 [lem-the-rows-of-the-augmented-tensor-double-complex-are-exact] no signals
ORDINARY 0 [lem-the-columns-of-the-augmented-tensor-double-complex-are-exact] no signals
HIGH 6 [thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic] 2:4 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
ORDINARY 0 [prop-the-tor-balance-isomorphism-is-natural-and-coherent-under-change-of-resolutions] no signals
ORDINARY 2 [thm-long-exact-tor-sequence-in-the-left-module-variable] 2:boundary-sensitive language
ORDINARY 0 [thm-long-exact-tor-sequence-in-the-right-module-variable] no signals
ORDINARY 0 [prop-tor-dimension-shifting] no signals
HIGH 5 [thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 5 [thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [cor-a-short-exact-sequence-stays-exact-after-tensoring-exactly-when-its-tor-boundary-obstruction-vanishes] 2:boundary-sensitive language
ORDINARY 2 [thm-tor-one-of-a-cyclic-abelian-group-detects-n-torsion] 2:boundary-sensitive language
MODERATE 4 [thm-tor-of-two-cyclic-abelian-groups] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [thm-higher-tor-over-the-integers-vanishes] 2:boundary-sensitive language
ORDINARY 2 [prop-torsion-free-abelian-groups-are-flat] 2:analytic limiting/completeness language
HIGH 5 [thm-over-a-pid-flat-is-equivalent-to-torsion-free] 3:biconditional / both-direction claim; 2:analytic limiting/completeness language
ORDINARY 0 [thm-tor-symmetry-over-a-commutative-ring] no signals
HIGH 5 [thm-flat-dimension-at-most-n-iff-higher-tor-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [prop-weak-global-dimension-is-at-most-corresponding-global-dimension] 2:analytic limiting/completeness language
ORDINARY 2 [thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric] 2:analytic limiting/completeness language
ORDINARY 2 [prop-semisimple-rings-have-vanishing-positive-tor-and-ext] 2:boundary-sensitive language
ORDINARY 2 [prop-the-integers-have-weak-and-global-dimension-one] 2:boundary-sensitive language
ORDINARY 0 [fs-tor-takes-two-left-modules-over-an-arbitrary-ring] no signals
ORDINARY 0 [fs-the-two-tor-constructions-are-equal-by-definition] no signals
ORDINARY 2 [fs-flat-modules-have-projective-dimension-zero] 2:boundary-sensitive language
ORDINARY 2 [fs-tor-one-vanishes-only-when-one-module-is-projective] 2:boundary-sensitive language
ORDINARY 2 [fs-tor-is-symmetric-over-every-noncommutative-ring] 2:boundary-sensitive language
MODERATE 4 [fs-tor-one-of-r-mod-i-and-m-is-always-the-i-torsion-submodule-of-m] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-tor-of-two-cyclic-groups-from-a-two-term-resolution] 2:boundary-sensitive language
ORDINARY 0 [ex-tor-detects-n-torsion] no signals
ORDINARY 2 [ex-a-flat-nonprojective-module] 2:boundary-sensitive language
ORDINARY 0 [ex-localization-is-flat-and-has-vanishing-positive-tor] no signals
ORDINARY 2 [ex-the-tensor-double-complex-in-low-degrees] 2:boundary-sensitive language
ORDINARY 0 [ex-tor-symmetry-over-a-commutative-ring] no signals
ORDINARY 0 [cex-a-noncommutative-handedness-error-in-tor] no signals
ORDINARY 2 [ex-weak-dimension-and-global-dimension-for-a-field-and-the-integers] 2:boundary-sensitive language
ORDINARY 2 [lem-the-hom-cochain-differential-squares-to-zero] 2:boundary-sensitive language
MODERATE 4 [lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 8 [thm-submodules-of-free-modules-over-a-pid-are-free] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 0 [lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free] no signals
ORDINARY 2 [lem-the-universal-coefficient-edge-map-for-homology-is-well-defined] 2:quotient or equivalence-class construction
MODERATE 4 [lem-the-universal-coefficient-tor-obstruction-map-for-homology] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [thm-universal-coefficient-theorem-for-homology-over-a-pid] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [thm-the-homology-universal-coefficient-sequence-splits-nonnaturally] 2:quotient or equivalence-class construction
MODERATE 4 [cex-the-universal-coefficient-splitting-cannot-in-general-be-chosen-naturally] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [lem-the-cohomology-universal-coefficient-extension-map] 2:boundary-sensitive language
ORDINARY 2 [thm-universal-coefficient-theorem-for-cohomology-over-a-pid] 2:boundary-sensitive language
ORDINARY 2 [thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally] 2:quotient or equivalence-class construction
ORDINARY 2 [cor-cohomology-with-a-divisible-abelian-coefficient-group-is-hom-of-homology] 2:boundary-sensitive language
ORDINARY 2 [prop-modules-over-a-field-are-projective-flat-and-injective] 2:4 declared dependencies
ORDINARY 0 [cor-cohomology-over-a-field-is-dual-to-homology-for-finite-dimensional-complexes] no signals
ORDINARY 2 [lem-the-kunneth-cross-product-map-is-well-defined-and-natural] 2:boundary-sensitive language
MODERATE 4 [lem-the-kunneth-tor-map] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [thm-kunneth-theorem-for-free-complexes-over-a-pid] 2:4 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [thm-the-kunneth-sequence-splits-nonnaturally] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [cor-kunneth-over-a-field] 2:boundary-sensitive language
ORDINARY 2 [cor-kunneth-when-one-homology-family-is-flat] 2:boundary-sensitive language
ORDINARY 0 [prop-euler-characteristic-is-multiplicative-under-the-finite-kunneth-hypotheses] no signals
ORDINARY 0 [prop-the-kunneth-cross-product-is-graded-commutative-under-the-twist-map] no signals
ORDINARY 2 [fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition] 2:boundary-sensitive language
ORDINARY 2 [fs-uct-for-homology-has-an-ext-term-and-uct-for-cohomology-a-tor-term] 2:boundary-sensitive language
ORDINARY 2 [fs-kunneth-over-a-pid-is-always-a-tensor-product-isomorphism] 2:boundary-sensitive language
ORDINARY 2 [fs-freeness-of-chain-groups-can-be-dropped-from-the-classical-kunneth-statement] 2:boundary-sensitive language
MODERATE 4 [fs-the-kunneth-short-exact-sequence-has-a-canonical-splitting] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [ex-uct-homology-with-z-mod-m-coefficients] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [ex-uct-cohomology-of-a-two-term-free-complex] no signals
ORDINARY 2 [ex-a-nonzero-tor-correction-in-universal-coefficients] 2:boundary-sensitive language
MODERATE 4 [ex-kunneth-for-two-cyclic-two-term-complexes] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-kunneth-over-a-field] 2:boundary-sensitive language
ORDINARY 2 [cex-a-nonnatural-choice-of-uct-splitting] 2:boundary-sensitive language
ORDINARY 2 [ex-euler-characteristic-of-a-tensor-product-complex] 2:boundary-sensitive language
ORDINARY 0 [thm-invariants-are-hom-from-the-trivial-group-ring-module] no signals
ORDINARY 0 [prop-the-invariants-functor-is-left-exact] no signals
ORDINARY 2 [prop-the-coinvariants-functor-is-right-exact] 2:boundary-sensitive language
MODERATE 4 [prop-degree-zero-group-cohomology-and-homology-are-invariants-and-coinvariants] 2:4 declared dependencies; 2:boundary-sensitive language
ORDINARY 0 [thm-long-exact-sequence-in-group-cohomology] no signals
ORDINARY 0 [thm-long-exact-sequence-in-group-homology] no signals
ORDINARY 2 [lem-the-bar-differential-is-group-equivariant-and-squares-to-zero] 2:boundary-sensitive language
ORDINARY 2 [lem-the-augmented-bar-complex-is-exact] 2:boundary-sensitive language
ORDINARY 2 [thm-the-bar-complex-is-a-free-resolution-of-the-trivial-module] 2:4 declared dependencies
ORDINARY 2 [lem-the-inhomogeneous-group-cochain-differential-squares-to-zero] 2:boundary-sensitive language
ORDINARY 0 [thm-homogeneous-and-inhomogeneous-group-cochains-are-isomorphic-complexes] no signals
MODERATE 3 [thm-the-bar-cochain-complex-computes-derived-group-cohomology] 3:10 declared dependencies
MODERATE 4 [lem-degenerate-bar-chains-form-a-contractible-subcomplex] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [thm-normalized-and-unnormalized-bar-complexes-are-chain-homotopy-equivalent] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [cor-normalized-cochains-compute-group-cohomology] no signals
ORDINARY 2 [thm-induction-is-left-adjoint-and-coinduction-right-adjoint-to-restriction] 2:induction, recursion, or minimality
ORDINARY 2 [lem-the-group-ring-is-free-over-a-subgroup-ring] 2:quotient or equivalence-class construction
ORDINARY 2 [thm-shapiro-lemma-for-group-cohomology] 2:induction, recursion, or minimality
ORDINARY 2 [thm-shapiro-lemma-for-group-homology] 2:quotient or equivalence-class construction
MODERATE 3 [thm-group-cohomological-dimension-is-detected-by-cohomology-vanishing] 3:biconditional / both-direction claim
MODERATE 4 [lem-corestriction-is-independent-of-the-coset-representatives] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [thm-restriction-corestriction-composite-is-multiplication-by-the-index] 2:quotient or equivalence-class construction
ORDINARY 2 [lem-positive-group-cohomology-of-the-trivial-group-vanishes] 2:boundary-sensitive language
ORDINARY 0 [prop-finite-groups-have-torsion-annihilation-in-positive-cohomology] no signals
MODERATE 4 [thm-groups-of-finite-integral-cohomological-dimension-are-torsion-free] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [fs-group-cohomology-is-the-derived-functor-of-coinvariants] no signals
ORDINARY 0 [fs-the-bar-contracting-homotopy-is-group-equivariant] no signals
ORDINARY 2 [fs-h-one-is-defined-here-as-crossed-homomorphisms-modulo-principal-ones] 2:quotient or equivalence-class construction
ORDINARY 2 [fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions] 2:quotient or equivalence-class construction
ORDINARY 2 [fs-shapiro-lemma-needs-no-distinction-between-induction-and-coinduction] 2:induction, recursion, or minimality
ORDINARY 2 [ex-group-cohomology-of-the-trivial-group] 2:boundary-sensitive language
MODERATE 4 [ex-degree-zero-invariants-and-coinvariants] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [ex-the-first-three-bar-differentials] no signals
ORDINARY 0 [ex-normalizing-an-inhomogeneous-cochain] no signals
ORDINARY 0 [ex-a-periodic-resolution-for-a-finite-cyclic-group] no signals
MODERATE 4 [ex-cohomology-of-a-finite-cyclic-group-from-the-periodic-resolution] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-shapiro-lemma-for-the-trivial-subgroup] 2:induction, recursion, or minimality
ORDINARY 0 [cex-the-underlying-bar-contraction-is-not-equivariant] no signals
MODERATE 4 [ex-cohomological-dimension-of-the-trivial-group-and-of-an-infinite-cyclic-group] 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 2 [lem-exterior-algebra-basis-monomials] 2:boundary-sensitive language
MODERATE 3 [lem-exterior-multiplication-koszul-sign-rule] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [lem-koszul-differential-coordinate-formula] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [lem-koszul-differential-square-pairwise-cancellation] 1:2 cited facts
HIGH 5 [lem-koszul-differential-is-well-defined-and-squares-to-zero] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [cor-empty-koszul-complex-is-the-coefficient-module] 2:boundary-sensitive language
ORDINARY 2 [lem-one-element-koszul-complex] 2:boundary-sensitive language
MODERATE 3 [cor-one-element-koszul-homology] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [thm-basic-koszul-homology] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [lem-koszul-complex-concatenation-tensor-isomorphism] 1:2 cited facts
MODERATE 3 [lem-koszul-append-one-element-mapping-cone-identification] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [lem-koszul-mapping-cone-homology-exact-sequence] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [thm-koszul-concatenation-and-mapping-cone] 1:3 cited facts; 2:boundary-sensitive language
MODERATE 3 [lem-koszul-generator-contraction-homotopy] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 0 [cor-sequence-ideal-annihilates-koszul-homology] no signals
MODERATE 3 [lem-koszul-generators-act-null-homotopically] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [cor-koszul-homology-supported-on-sequence-vanishing-set] 1:3 cited facts
ORDINARY 1 [lem-koszul-complex-localises-termwise] 1:2 cited facts
MODERATE 3 [cor-koszul-homology-localises] 1:2 cited facts; 2:quotient or equivalence-class construction
ORDINARY 1 [lem-koszul-complex-flat-base-change] 1:2 cited facts
MODERATE 3 [cor-koszul-homology-flat-base-change] 1:2 cited facts; 2:quotient or equivalence-class construction
MODERATE 3 [lem-koszul-generator-matrix-chain-map] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 0 [cor-koszul-complex-invariant-under-invertible-generator-change] no signals
MODERATE 4 [thm-functoriality-base-change-and-generator-change-for-koszul-complexes] 2:5 declared dependencies; 2:5 cited facts
MODERATE 4 [lem-regular-sequence-first-element-boundary] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [lem-regular-sequence-tail-on-quotient] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
ORDINARY 2 [cor-initial-subsequences-of-a-regular-sequence-are-regular] 2:quotient or equivalence-class construction
MODERATE 3 [thm-localisation-and-flat-base-change-of-regular-sequences] 1:3 cited facts; 2:quotient or equivalence-class construction
HIGH 5 [lem-regular-one-element-koszul-acyclicity] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [lem-regular-sequence-koszul-acyclicity-induction] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
CRITICAL 8 [thm-regular-sequences-give-acyclic-koszul-complexes] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 5 [cor-koszul-complex-resolves-a-regular-quotient] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 7 [lem-local-koszul-h-one-detects-first-regularity-failure] 3:8 declared dependencies; 2:8 cited facts; 2:boundary-sensitive language
HIGH 7 [lem-local-koszul-acyclicity-inductive-converse] 3:7 declared dependencies; 2:7 cited facts; 2:quotient or equivalence-class construction
CRITICAL 8 [thm-koszul-acyclicity-characterises-local-regular-sequences] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 5 [cor-local-koszul-acyclicity-iff-regular-sequence] 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
ORDINARY 2 [lem-koszul-regular-implies-h-one-regular] 2:boundary-sensitive language
CRITICAL 11 [lem-h-one-regular-local-implies-koszul-regular] 2:4 declared dependencies; 2:4 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [lem-regular-sequence-permutation-adjacent-swap] 1:3 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
ORDINARY 0 [cor-regular-sequences-permutable-local] no signals
HIGH 5 [lem-positive-powers-of-a-regular-sequence-remain-regular] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 8 [cor-regularity-notions-coincide-local-finite] 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 1 [thm-regularity-notions-and-permutation-invariance-local] 1:2 cited facts
HIGH 7 [lem-koszul-resolution-minimality-maximal-ideal-sequence] 1:3 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
MODERATE 3 [cor-complete-intersection-betti-numbers-binomial] 1:3 cited facts; 2:induction, recursion, or minimality
MODERATE 3 [ex-koszul-complex-one-and-two-elements] 1:3 cited facts; 2:boundary-sensitive language
ORDINARY 2 [ex-koszul-complex-polynomial-variables] 2:quotient or equivalence-class construction
HIGH 5 [ex-koszul-resolution-complete-intersection] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-koszul-homology-zero-divisor] 2:boundary-sensitive language
HIGH 5 [ex-nonpermutable-regular-sequence] 1:2 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [ex-koszul-homology-after-localisation] 2:boundary-sensitive language
HIGH 5 [ex-empty-and-unit-koszul-boundaries] 1:3 cited facts; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 3 [ex-koszul-d-square-sign-check-three-elements] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [ex-koszul-homology-of-a-zero-divisor] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-generator-change-koszul-isomorphism] 1:2 cited facts
MODERATE 3 [ex-regular-sequence-powers-and-permutation] 1:2 cited facts; 2:quotient or equivalence-class construction
HIGH 5 [ex-koszul-resolution-betti-table-complete-intersection] 1:2 cited facts; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
MODERATE 4 [lem-singular-boundary-descends-to-relative-chains] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 2 [prop-relative-homology-is-functorial-for-maps-of-pairs] 2:quotient or equivalence-class construction
ORDINARY 2 [prop-relative-homology-of-the-empty-and-total-subspace] 2:boundary-sensitive language
ORDINARY 2 [thm-long-exact-sequence-of-a-pair-in-singular-homology] 2:quotient or equivalence-class construction
ORDINARY 2 [lem-the-relative-connecting-map-is-independent-of-lift-and-representative] 2:boundary-sensitive language
ORDINARY 2 [thm-naturality-of-the-long-exact-sequence-of-a-pair] 2:quotient or equivalence-class construction
ORDINARY 2 [thm-barycentric-subdivision-is-a-chain-map] 2:induction, recursion, or minimality
ORDINARY 2 [thm-barycentric-subdivision-is-chain-homotopic-to-the-identity] 2:induction, recursion, or minimality
ORDINARY 2 [lem-mesh-of-iterated-barycentric-subdivision-tends-to-zero] 2:boundary-sensitive language
MODERATE 4 [lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision] 2:4 declared dependencies; 2:boundary-sensitive language
ORDINARY 2 [thm-cover-small-singular-chains-compute-singular-homology] 2:boundary-sensitive language
ORDINARY 0 [thm-cover-small-inclusion-is-a-chain-homotopy-equivalence] no signals
ORDINARY 2 [thm-excision-for-singular-homology] 2:quotient or equivalence-class construction
MODERATE 4 [cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
ORDINARY 0 [lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes] no signals
ORDINARY 0 [thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence] no signals
ORDINARY 2 [thm-mayer-vietoris-sequence-in-singular-homology] 2:boundary-sensitive language
ORDINARY 2 [lem-the-mayer-vietoris-connector-is-independent-of-small-chain-decomposition] 2:boundary-sensitive language
ORDINARY 0 [thm-naturality-of-singular-mayer-vietoris] no signals
MODERATE 4 [thm-simplicial-and-singular-homology-agree-for-simplicial-complexes] 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 2 [cor-homology-of-spheres] 2:boundary-sensitive language
ORDINARY 2 [cor-suspension-isomorphism-in-reduced-singular-homology] 2:boundary-sensitive language
ORDINARY 2 [ex-relative-homology-of-a-disk-and-its-boundary] 2:boundary-sensitive language
ORDINARY 2 [ex-relative-homology-of-an-interval-and-its-endpoints] 2:boundary-sensitive language
ORDINARY 2 [ex-first-barycentric-subdivision-of-a-triangle] 2:boundary-sensitive language
ORDINARY 2 [ex-cover-small-chains-for-the-two-arc-cover-of-a-circle] 2:boundary-sensitive language
ORDINARY 2 [ex-mayer-vietoris-computation-of-sphere-homology] 2:boundary-sensitive language
ORDINARY 2 [ex-mayer-vietoris-computation-of-the-torus-first-homology] 2:boundary-sensitive language
ORDINARY 2 [cex-excision-fails-without-the-closure-inside-interior-hypothesis] 2:boundary-sensitive language
ORDINARY 2 [cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small] 2:boundary-sensitive language
ORDINARY 2 [cex-relative-homology-is-not-the-homology-of-the-set-difference] 2:boundary-sensitive language
HIGH 5 [lem-homogeneous-polynomial-zero-locus-well-defined] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [thm-projective-zariski-topology] 2:boundary-sensitive language
ORDINARY 0 [lem-standard-projective-opens-are-affine-spaces] no signals
ORDINARY 0 [lem-homogenization-dehomogenization-correspondence] no signals
ORDINARY 2 [thm-ideal-projective-closure-saturation] 2:4 declared dependencies
MODERATE 3 [lem-projective-irreducibility-homogeneous-prime] 3:biconditional / both-direction claim
ORDINARY 0 [lem-projective-regular-function-chart-compatibility] no signals
HIGH 6 [thm-global-regular-functions-projective-variety] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 2 [lem-projective-coordinate-morphisms-well-defined] 2:boundary-sensitive language
ORDINARY 2 [thm-closed-projective-embedding-by-homogeneous-generators] 2:quotient or equivalence-class construction
ORDINARY 0 [lem-projective-variety-cone-irreducible] no signals
ORDINARY 0 [lem-projective-closure-dense-affine-chart] no signals
ORDINARY 0 [lem-projective-hypersurface-affine-pieces] no signals
ORDINARY 2 [cex-naive-homogenization-adds-component] 2:boundary-sensitive language
ORDINARY 2 [cex-inhomogeneous-equation-not-projectively-well-defined] 2:boundary-sensitive language
HIGH 6 [lem-structure-presheaf-basic-open-well-defined] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 4 [thm-structure-sheaf-affine-scheme] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 2 [thm-sections-basic-open-affine-scheme] 2:boundary-sensitive language
MODERATE 4 [thm-stalk-structure-sheaf-prime-localization] 2:5 declared dependencies; 2:analytic limiting/completeness language
ORDINARY 0 [cor-spectrum-with-structure-sheaf-locally-ringed] no signals
ORDINARY 0 [thm-global-sections-affine-scheme] no signals
MODERATE 3 [lem-spectrum-localization-open-immersion] 2:4 declared dependencies; 1:2 cited facts
MODERATE 3 [lem-spectrum-map-stalk-homomorphisms-local] 2:4 declared dependencies; 1:2 cited facts
MODERATE 3 [thm-affine-scheme-ring-anti-equivalence] 2:5 declared dependencies; 1:2 cited facts
MODERATE 3 [cor-affine-scheme-isomorphism-ring-isomorphism] 3:biconditional / both-direction claim
ORDINARY 1 [lem-classical-points-inside-affine-scheme] 1:2 cited facts
ORDINARY 2 [thm-spectrum-sober] 2:existence, choice, uniqueness, or well-definedness
ORDINARY 0 [thm-affine-schemes-determined-by-functor-of-points] no signals
MODERATE 3 [lem-basic-opens-quasi-compact] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 0 [cor-affine-scheme-quasi-compact] no signals
HIGH 5 [ex-spectrum-field-one-point] 2:6 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [ex-spectrum-zero-ring-empty] 2:boundary-sensitive language
CRITICAL 11 [ex-spectrum-integers-generic-and-closed-points] 3:8 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [ex-dual-numbers-one-point-nonreduced] 2:5 declared dependencies; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
MODERATE 4 [ex-spectrum-product-ring-disjoint-union] 2:5 declared dependencies; 2:boundary-sensitive language
ORDINARY 0 [ex-basic-open-affine-line] no signals
MODERATE 3 [cex-scheme-not-determined-by-underlying-space] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 0 [ex-functor-points-affine-line] no signals
CRITICAL 9 [cex-nonclosed-scheme-point-no-k-valued-coordinate] 3:7 declared dependencies; 1:2 cited facts; 3:biconditional / both-direction claim; 2:quotient or equivalence-class construction
MODERATE 4 [lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set] 3:7 declared dependencies; 1:3 cited facts
HIGH 5 [lem-transversal-wide-blocks-in-structural-comb-partitions-yields-a-pure-blockade] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 3 [lem-no-property-star-outcome-forces-a-small-structural-block-partition] 1:3 cited facts; 2:boundary-sensitive language
CRITICAL 11 [lem-integral-geometric-layers-have-rounded-cutoff-bounds] 2:6 declared dependencies; 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 1 [lem-homogeneous-sets-in-pure-blockade-patterns-lift-to-homogeneous-blockades] 1:3 cited facts
CRITICAL 9 [lem-a-wide-integral-geometric-layer-forces-a-property-star-blockade] 3:9 declared dependencies; 2:5 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 7 [lem-successive-small-integral-geometric-layers-contradict-a-large-x-part] 2:6 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
CRITICAL 10 [thm-the-structural-comb-partition-criterion-implies-property-star] 3:12 declared dependencies; 2:5 cited facts; 1:6 numbered proof steps; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [ex-a-large-y-part-in-a-structural-comb-partition] 2:boundary-sensitive language
ORDINARY 2 [ex-a-wide-transversal-in-four-structural-comb-partitions] 2:boundary-sensitive language
HIGH 5 [ex-integral-geometric-layers-for-fourteen-ordered-blocks] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [cex-omitting-cross-block-purity-breaks-the-transversal-conclusion] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 2 [lem-local-solvability-of-the-augmented-characteristic-ode] 2:existence, choice, uniqueness, or well-definedness
ORDINARY 0 [lem-quasilinear-solution-lifts-to-characteristics] no signals
ORDINARY 0 [lem-characteristic-strip-compatibility] no signals
ORDINARY 0 [lem-characteristic-strip-jacobian-at-the-initial-surface] no signals
MODERATE 4 [thm-local-quasilinear-cauchy-problem-by-characteristics] 2:6 declared dependencies; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 0 [lem-characteristic-solution-satisfies-the-quasilinear-pde] no signals
ORDINARY 2 [lem-burgers-slope-obeys-a-riccati-law-along-characteristics] 2:boundary-sensitive language
HIGH 6 [thm-inviscid-burgers-characteristic-formula-and-first-crossing-time] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [cor-burgers-classical-solution-persists-for-monotone-data] 2:boundary-sensitive language
ORDINARY 2 [thm-uniqueness-of-a-classical-quasilinear-solution-before-characteristic-crossing] 2:boundary-sensitive language
MODERATE 4 [lem-envelope-stationarity-implies-the-hamilton-jacobi-equation] 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 4 [lem-charpit-flow-preserves-the-pde-constraint] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
MODERATE 4 [lem-charpit-contact-compatibility-is-preserved] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 0 [lem-charpit-momentum-equation-from-differentiating-hamilton-jacobi] no signals
HIGH 5 [thm-local-fully-nonlinear-cauchy-problem-by-charpit] 3:7 declared dependencies; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 2 [ex-semilinear-characteristics-with-logistic-growth] 2:boundary-sensitive language
ORDINARY 0 [ex-inviscid-burgers-rarefying-data] no signals
ORDINARY 0 [ex-inviscid-burgers-gradient-catastrophe] no signals
ORDINARY 0 [cex-quasilinear-characteristics-can-cross-before-the-lifted-ode-blows-up] no signals
MODERATE 4 [ex-clairaut-complete-integral-and-envelope] 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 6 [ex-eikonal-cones-are-not-classical-at-the-vertex] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
ORDINARY 2 [cex-characteristic-initial-data-for-a-fully-nonlinear-equation] 2:existence, choice, uniqueness, or well-definedness
ORDINARY 0 [ex-cauchy-kovalevskaya-normal-form] no signals
ORDINARY 2 [ex-quadratic-hamilton-jacobi-data-produce-explicit-caustic-time] 2:boundary-sensitive language
ORDINARY 2 [ex-smooth-nonanalytic-transport-data-give-a-smooth-nonanalytic-solution] 2:analytic limiting/completeness language
ORDINARY 0 [lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear] no signals
ORDINARY 0 [prop-the-exterior-derivative-is-local] no signals
ORDINARY 2 [prop-exterior-derivative-of-a-function-is-its-differential] 2:boundary-sensitive language
ORDINARY 0 [thm-local-coordinate-formula-for-the-exterior-derivative] no signals
ORDINARY 2 [thm-the-exterior-derivative-is-a-graded-derivation] 2:boundary-sensitive language
ORDINARY 2 [thm-the-exterior-derivative-squares-to-zero] 2:boundary-sensitive language
MODERATE 4 [thm-existence-and-uniqueness-of-the-exterior-derivative] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 0 [prop-the-exterior-derivative-commutes-with-restriction] no signals
ORDINARY 0 [thm-the-exterior-derivative-commutes-with-pullback] no signals
ORDINARY 2 [cor-pullback-carries-closed-forms-to-closed-forms-and-exact-forms-to-exact-forms] 2:boundary-sensitive language
ORDINARY 2 [prop-the-exterior-derivative-does-not-enlarge-support] 2:boundary-sensitive language
MODERATE 4 [lem-the-flow-definition-of-tensor-lie-derivative-is-local-and-well-defined] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [prop-lie-derivative-agrees-with-x-on-functions-and-bracket-on-vector-fields] 2:boundary-sensitive language
ORDINARY 0 [thm-lie-derivative-is-a-derivation-of-the-tensor-algebra] no signals
ORDINARY 0 [prop-coordinate-formula-for-the-lie-derivative-of-a-covariant-tensor] no signals
ORDINARY 0 [prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor] no signals
HIGH 5 [prop-a-tensor-field-is-invariant-under-a-flow-if-and-only-if-its-lie-derivative-vanishes] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [prop-lie-derivative-of-forms-is-a-degree-zero-graded-derivation] 2:boundary-sensitive language
MODERATE 4 [thm-cartans-magic-formula] 2:5 declared dependencies; 2:boundary-sensitive language
ORDINARY 2 [cor-lie-derivative-commutes-with-the-exterior-derivative] 2:boundary-sensitive language
ORDINARY 2 [prop-cartan-commutator-identities] 2:4 declared dependencies
MODERATE 3 [prop-lie-derivatives-are-natural-for-related-vector-fields] 2:4 declared dependencies; 1:2 cited facts
ORDINARY 2 [thm-differentiation-of-a-pulled-back-form-along-a-time-dependent-flow] 2:4 declared dependencies
ORDINARY 2 [cor-a-closed-form-is-flow-invariant-when-its-contraction-is-exactly-zero] 2:boundary-sensitive language
ORDINARY 2 [lem-annihilator-ideal-of-a-distribution-is-frame-independent] 2:boundary-sensitive language
HIGH 5 [thm-pfaffian-frobenius-criterion] 2:4 declared dependencies; 3:biconditional / both-direction claim
HIGH 6 [cor-codimension-one-frobenius-criterion] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 5 [prop-closed-constant-rank-one-forms-define-integrable-hyperplane-fields] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 0 [fs-the-exterior-derivative-is-c-infinity-linear] no signals
ORDINARY 0 [fs-the-lie-derivative-is-c-infinity-linear-in-the-vector-field] no signals
ORDINARY 0 [fs-the-exterior-derivative-depends-on-a-riemannian-metric] no signals
ORDINARY 2 [fs-every-closed-differential-form-is-globally-exact] 2:boundary-sensitive language
ORDINARY 0 [fs-lie-derivative-and-interior-product-commute-for-all-vector-fields] no signals
HIGH 5 [fs-alpha-wedge-d-alpha-vanishes-for-every-one-form] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 0 [fs-pullback-of-a-compactly-supported-form-is-always-compactly-supported] no signals
ORDINARY 2 [ex-exterior-derivatives-of-coordinate-one-forms] 2:boundary-sensitive language
ORDINARY 0 [ex-the-euclidean-area-form-is-closed] no signals
ORDINARY 2 [ex-the-angular-one-form-on-the-punctured-plane-is-closed] 2:boundary-sensitive language
ORDINARY 2 [ex-the-angular-one-form-has-no-global-potential] 2:boundary-sensitive language
ORDINARY 0 [ex-curl-and-divergence-encoded-by-the-exterior-derivative] no signals
ORDINARY 0 [ex-lie-derivative-of-the-euclidean-metric-under-dilations] no signals
ORDINARY 0 [ex-lie-derivative-of-an-area-form-and-planar-divergence] no signals
ORDINARY 0 [ex-cartans-formula-for-a-coordinate-vector-field] no signals
HIGH 5 [ex-a-contact-form-on-three-space] 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 7 [ex-an-integrable-pfaffian-equation-with-a-local-first-integral] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [cex-a-nonproper-pullback-destroys-compact-support] no signals
ORDINARY 0 [ex-time-dependent-pullback-differentiation-for-a-translation] no signals
ORDINARY 0 [thm-universal-property-of-verma-modules] no signals
ORDINARY 0 [thm-pbw-model-of-a-verma-module] no signals
ORDINARY 2 [prop-weights-of-a-verma-module-lie-below-lambda] 2:boundary-sensitive language
MODERATE 3 [prop-formal-character-of-a-verma-module] 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 0 [lem-a-proper-verma-submodule-misses-the-highest-weight-line] no signals
MODERATE 3 [lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 4 [thm-verma-module-has-a-unique-simple-quotient] 2:existence, choice, uniqueness, or well-definedness; 2:quotient or equivalence-class construction
MODERATE 4 [lem-every-nonzero-verma-submodule-contains-a-singular-vector] 2:boundary-sensitive language; 2:induction, recursion, or minimality
MODERATE 3 [thm-existence-and-uniqueness-of-the-shapovalov-form] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 0 [lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal] no signals
HIGH 7 [prop-the-shapovalov-radical-is-the-maximal-submodule] 1:2 cited facts; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 10 [thm-shapovalov-determinant-formula] 3:8 declared dependencies; 2:4 cited facts; 1:9 numbered proof steps; 2:boundary-sensitive language; 2:quotient or equivalence-class construction
CRITICAL 8 [cor-verma-irreducibility-criterion-from-shapovalov-determinants] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [ex-sl2-verma-action-in-the-pbw-basis] 1:2 cited facts; 2:induction, recursion, or minimality
MODERATE 3 [ex-sl2-shapovalov-norm-product] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-sl2-reducible-and-generic-verma-modules] 1:2 cited facts
MODERATE 3 [ex-an-a2-verma-weight-space-of-dimension-two] 1:3 cited facts; 2:existence, choice, uniqueness, or well-definedness
ORDINARY 0 [cex-the-shapovalov-form-is-not-positive-definite-in-general] no signals
MODERATE 3 [ex-finite-dimensional-sl2-quotient-of-a-verma-module] 1:3 cited facts; 2:quotient or equivalence-class construction
ORDINARY 0 [lem-elementary-and-hyperelementary-subgroups-are-subgroup-closed] no signals
MODERATE 4 [lem-induction-ideal-of-a-subgroup-family-is-an-ideal] 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 2 [lem-p-primary-character-value-congruence] 2:boundary-sensitive language
HIGH 6 [lem-hyperelementary-permutation-subring-reduction] 2:5 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
ORDINARY 0 [lem-banaschewski-prime-obstruction] no signals
CRITICAL 9 [lem-elementary-detection-at-a-fixed-element] 3:7 declared dependencies; 1:3 cited facts; 1:6 numbered proof steps; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 0 [lem-isaacs-linear-character-step] no signals
CRITICAL 8 [lem-p-elementary-groups-are-supersolvable] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
MODERATE 4 [prop-faithful-irreducible-character-is-induced-from-a-proper-inertia-subgroup] 2:5 declared dependencies; 2:induction, recursion, or minimality
ORDINARY 2 [lem-nonabelian-supersolvable-group-has-a-noncentral-normal-abelian-subgroup] 2:analytic limiting/completeness language
HIGH 6 [lem-monomiality-lifts-along-a-quotient] 2:4 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction
CRITICAL 8 [thm-finite-supersolvable-groups-are-monomial] 2:6 declared dependencies; 2:induction, recursion, or minimality; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
HIGH 6 [lem-p-elementary-characters-are-induced-from-linear-characters] 2:4 declared dependencies; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
CRITICAL 8 [thm-brauer-induction] 2:6 declared dependencies; 2:4 cited facts; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
MODERATE 4 [cor-elementary-restriction-detects-generalized-characters] 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 7 [cor-elementary-local-integrality-criterion] 3:biconditional / both-direction claim; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 7 [cor-cyclotomic-field-splits-a-finite-group] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 0 [ex-elementary-and-hyperelementary-small-groups] no signals
MODERATE 4 [ex-brauer-induction-for-s3] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
ORDINARY 0 [ex-trivial-factors-in-an-elementary-group] no signals
MODERATE 4 [cex-cyclic-subgroups-do-not-give-integral-induction-in-general] 2:induction, recursion, or minimality; 2:analytic limiting/completeness language
HIGH 6 [lem-riemannian-gradient-vanishes-exactly-at-critical-points] 1:2 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 1 [lem-negative-gradient-energy-identity] 1:3 cited facts
MODERATE 3 [cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function] 1:3 cited facts; 2:analytic limiting/completeness language
HIGH 5 [prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold] 2:4 declared dependencies; 1:3 cited facts; 2:boundary-sensitive language
HIGH 5 [lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant] 1:2 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [lem-a-limit-point-of-a-gradient-trajectory-is-critical] 1:3 cited facts; 2:analytic limiting/completeness language
CRITICAL 8 [lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits] 2:4 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
HIGH 5 [lem-morse-trajectories-have-positive-energy-drop] 1:3 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
MODERATE 3 [thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces] 1:3 cited facts; 2:analytic limiting/completeness language
MODERATE 3 [lem-stable-and-unstable-manifolds-are-flow-invariant] 1:2 cited facts; 2:analytic limiting/completeness language
ORDINARY 0 [cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits] no signals
CRITICAL 8 [prop-proper-morse-slabs-give-complete-connecting-trajectories] 2:5 declared dependencies; 2:4 cited facts; 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 0 [ex-negative-gradient-lines-for-a-quadratic-morse-function] no signals
MODERATE 4 [ex-meridian-trajectories-for-height-on-the-sphere] 2:boundary-sensitive language; 2:quotient or equivalence-class construction
HIGH 6 [ex-gradient-flow-on-the-torus-morse-function] 2:boundary-sensitive language; 2:quotient or equivalence-class construction; 2:analytic limiting/completeness language
ORDINARY 2 [cex-positive-gradient-reverses-stable-and-unstable-dimensions] 2:boundary-sensitive language
ORDINARY 2 [cex-an-incomplete-gradient-flow-on-a-noncompact-manifold] 2:boundary-sensitive language
HIGH 6 [lem-bounded-quantifiers-preserve-primitive-recursiveness] 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 5 [thm-sigma-one-sets-are-exactly-ce-sets] 2:4 declared dependencies; 3:biconditional / both-direction claim
HIGH 5 [cor-delta-one-sets-are-exactly-decidable] 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [lem-prenex-normalization-preserves-level] 2:boundary-sensitive language
HIGH 5 [thm-halting-is-sigma-one-complete] 2:4 declared dependencies; 3:biconditional / both-direction claim
HIGH 7 [thm-totality-is-pi-two-complete] 2:5 declared dependencies; 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 2 [lem-oracle-computation-has-a-finite-query-witness] 2:induction, recursion, or minimality
HIGH 7 [thm-posts-theorem] 2:4 declared dependencies; 3:biconditional / both-direction claim; 2:induction, recursion, or minimality
MODERATE 3 [lem-diagonal-set-at-each-level] 3:biconditional / both-direction claim
ORDINARY 0 [thm-arithmetical-hierarchy-is-strict] no signals
MODERATE 4 [thm-shoenfield-limit-lemma] 2:4 declared dependencies; 2:analytic limiting/completeness language
ORDINARY 0 [fs-sigma-n-and-pi-n-are-disjoint] no signals
ORDINARY 2 [fs-limit-computable-has-a-known-stabilization-stage] 2:analytic limiting/completeness language
HIGH 7 [ex-sigma-one-sets-are-exactly-ce-sets] 3:biconditional / both-direction claim; 2:existence, choice, uniqueness, or well-definedness; 2:boundary-sensitive language
ORDINARY 2 [ex-shoenfield-limit-lemma] 2:analytic limiting/completeness language
ORDINARY 2 [cex-sigma-n-and-pi-n-are-disjoint] 2:boundary-sensitive language
MODERATE 4 [lem-effective-enumeration-of-clocked-machines] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [lem-time-diagonal-language-respects-its-budget] 2:4 declared dependencies
ORDINARY 0 [thm-deterministic-time-hierarchy] no signals
ORDINARY 0 [cor-p-is-properly-contained-in-exp] no signals
MODERATE 4 [thm-nondeterministic-time-hierarchy] 2:4 declared dependencies; 2:boundary-sensitive language
ORDINARY 2 [lem-space-bounded-universal-simulation] 2:boundary-sensitive language
ORDINARY 0 [lem-space-diagonal-machine-halts] no signals
MODERATE 4 [thm-deterministic-space-hierarchy] 2:4 declared dependencies; 2:analytic limiting/completeness language
ORDINARY 0 [lem-read-only-workspace-universal-simulation] no signals
ORDINARY 0 [lem-read-only-workspace-diagonal-machine-halts] no signals
ORDINARY 0 [thm-read-only-workspace-space-hierarchy] no signals
ORDINARY 0 [lem-read-only-workspace-simulates-in-all-tapes-space] no signals
ORDINARY 0 [cor-l-is-properly-contained-in-pspace] no signals
ORDINARY 0 [lem-padding-transfers-time-bounds] no signals
ORDINARY 0 [thm-gap-and-union-theorems-for-complexity-bounds] no signals
ORDINARY 2 [prop-hierarchy-theorems-do-not-separate-p-from-np] 2:4 declared dependencies
ORDINARY 0 [fs-unrestricted-diagonalization-respects-any-bound] no signals
ORDINARY 0 [ex-time-diagonal-language-respects-its-budget] no signals
ORDINARY 2 [ex-hierarchy-theorems-do-not-separate-p-from-np] 2:boundary-sensitive language
MODERATE 4 [cex-unrestricted-diagonalization-respects-any-bound] 2:boundary-sensitive language; 2:analytic limiting/completeness language
ORDINARY 2 [lem-logspace-machines-have-polynomially-many-configurations] 2:boundary-sensitive language
HIGH 5 [lem-logspace-reductions-compose] 3:biconditional / both-direction claim; 2:boundary-sensitive language
HIGH 5 [thm-directed-st-connectivity-is-nl-complete] 2:4 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language
HIGH 5 [thm-read-only-input-savitch-simulation] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
ORDINARY 1 [thm-nl-is-contained-in-dspace-log-squared-n] 1:2 cited facts
ORDINARY 0 [lem-reachability-count-is-verifiable-in-nl] no signals
HIGH 5 [lem-nonreachability-has-an-inductive-counting-certificate] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
CRITICAL 8 [thm-immerman-szelepcsenyi-nl-equals-conl] 2:6 declared dependencies; 1:3 cited facts; 3:biconditional / both-direction claim; 2:boundary-sensitive language
ORDINARY 0 [cor-nspace-is-closed-under-complement-above-logspace] no signals
ORDINARY 2 [lem-polynomial-time-computations-have-logspace-uniform-circuits] 2:induction, recursion, or minimality
MODERATE 3 [thm-circuit-value-is-p-complete] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [fs-nl-equals-conl-follows-by-state-swapping] 1:2 cited facts; 2:boundary-sensitive language
MODERATE 3 [ex-logspace-reductions-compose] 1:2 cited facts; 2:boundary-sensitive language
ORDINARY 1 [ex-circuit-value-is-p-complete] 1:2 cited facts
MODERATE 3 [cex-nl-equals-conl-follows-by-state-swapping] 1:2 cited facts; 2:boundary-sensitive language
risk-report: 1 error(s), 704 item(s) routed
ERROR risk-review-missing [lem-structure-presheaf-basic-open-well-defined]: lem-structure-presheaf-basic-open-well-defined is high risk and lacks a complete Alpha risk_review

```

## Advisory failures

```json
[
  {
    "stage": "6c-cross",
    "gate": "impact-audit-6c",
    "why": "ERROR receipt-changed-scope: research/frontier-31a-impact-6c.json: changed_interfaces must exactly match the computed interface changes"
  },
  {
    "stage": "6c-cross",
    "gate": "audit-manifest",
    "why": "liveness unreadable — summary line did not match /over (\\d+) item\\(s\\) in/; treating as unknown, not as a pass"
  }
]
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

