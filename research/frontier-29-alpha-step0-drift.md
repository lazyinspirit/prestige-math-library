### group-extensions-complements-and-schur-zassenhaus
Read `research/plan-group-theory-track.md` §"GT-9. Group Extensions, Complements, and Schur--Zassenhaus". The design `requires` line names `semidirect-products-and-automorphism-groups` and `sylow-theorems-and-nilpotent-groups`, and the live closure already contains both.
VERDICT: no-drift

### henselian-rings-and-equicharacteristic-cohen-structure
Read `research/plan-commutative-algebra-track.md` §"CA-14. Henselian rings and equicharacteristic Cohen structure". The design requires CA-2, CA-7, CA-10--CA-13, and the published `formal-power-series` page; the live closure already reached the CA pages but missed `formal-power-series`, so I added that edge and moved the dependent CA tail to keep every downstream edge backward.
VERDICT: drift-reordered — henselian-rings-and-equicharacteristic-cohen-structure (order 111.027 -> 194.001), henselian-rings-and-equicharacteristic-cohen-structure-examples (order 111.028 -> 194.002), zariski-topology-on-prime-spectra (order 111.029 -> 194.003), zariski-topology-on-prime-spectra-examples (order 111.03 -> 194.004), koszul-complexes-and-regular-sequences (order 111.031 -> 194.005), koszul-complexes-and-regular-sequences-examples (order 111.032 -> 194.006), depth-and-cohen-macaulay-modules (order 111.033 -> 194.007), depth-and-cohen-macaulay-modules-examples (order 111.034 -> 194.008), regular-local-rings-and-homological-dimension (order 111.035 -> 194.009), regular-local-rings-and-homological-dimension-examples (order 111.036 -> 194.01)

### absolute-values-completions-and-p-adic-numbers
Read `research/plan-number-theory-track.md` §"NT-17. Absolute values, completions, and p-adic numbers". The design requires the valuation/completion pages already in closure, CA-14's complete-adic Hensel theorem already in closure, and GT-17 `pro-p-groups-and-the-p-adic-integers`, which was missing; I added that edge and moved the whole dependent NT local/global chain after GT-17.
VERDICT: drift-reordered — absolute-values-completions-and-p-adic-numbers (order 111.037 -> 302.017), absolute-values-completions-and-p-adic-numbers-examples (order 111.038 -> 302.018), hilbert-symbols-and-the-quadratic-local-global-principle (order 111.039 -> 302.019), hilbert-symbols-and-the-quadratic-local-global-principle-examples (order 111.04 -> 302.02), number-fields-rings-of-integers-and-discriminants (order 111.041 -> 302.021), number-fields-rings-of-integers-and-discriminants-examples (order 111.042 -> 302.022), prime-ideal-decomposition-ramification-and-the-different (order 111.043 -> 302.023), prime-ideal-decomposition-ramification-and-the-different-examples (order 111.044 -> 302.024), decomposition-inertia-and-frobenius (order 111.045 -> 302.025), decomposition-inertia-and-frobenius-examples (order 111.046 -> 302.026), minkowski-theory-and-number-field-class-groups (order 111.047 -> 302.027), minkowski-theory-and-number-field-class-groups-examples (order 111.048 -> 302.028), dirichlets-unit-theorem-regulators-and-s-units (order 111.049 -> 302.029), dirichlets-unit-theorem-regulators-and-s-units-examples (order 111.05 -> 302.03), cyclotomic-arithmetic-and-reciprocity-via-frobenius (order 111.051 -> 302.031), cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples (order 111.052 -> 302.032)

### modular-representations-and-projective-covers
Read `research/plan-group-theory-track.md` §"GT-18. Modular Representations and Projective Covers". The design `requires` line names `induced-representations-and-frobenius-reciprocity`, `modules-and-module-homomorphisms`, `chain-conditions-and-semisimple-modules`, `valuation-rings-and-discrete-valuation-rings`, and `inverse-limits-and-noetherian-completion`, and the live closure already contains the whole set.
VERDICT: no-drift

### the-maximal-function-and-lebesgue-differentiation
Read `research/plan-measure-theory-track.md` §"MT-17. The Maximal Function and Lebesgue Differentiation". The design requires MT-14, MT-11, MT-4, MT-13, MT-15, `the-topology-of-euclidean-space`, and `compactness-in-metric-spaces`; the current closure already reaches those measure and topology pages.
VERDICT: no-drift

### finite-dimensional-normed-spaces-and-riesz-lemma
Read `research/plan-functional-analysis-track.md` §"FA-3 — Finite-dimensional spaces, Riesz's lemma, and metric embeddings". The design requires FA-1, FA-2, `rn-as-a-normed-space`, and the published Euclidean compactness/product results, all of which are already in the current closure.
VERDICT: no-drift

### probability-spaces-random-variables-and-expectation
Read `research/plan-probability-track.md` §"PT-1 — Probability spaces, random variables, and expectation". The design requires the published finite-probability pages plus MT-1, MT-2, MT-6--MT-8, MT-11, and MT-14, and the current closure already reaches that measure-theory foundation.
VERDICT: no-drift

### dirichlet-kernel-localisation-and-pointwise-fourier-convergence
Read `research/plan-fourier-analysis-track.md` §"FR-1. Dirichlet kernel, localisation, and pointwise convergence". The design requires `orthonormal-bases-parseval-and-fourier-series`, `density-separability-and-convolution-in-lp`, and the Banach--Steinhaus page; the current closure already had the FA pages but missed `density-separability-and-convolution-in-lp`, so I added that backward edge.
VERDICT: drift-applied — added density-separability-and-convolution-in-lp (order 288.029)

### pro-p-groups-and-the-p-adic-integers
Read `research/plan-group-theory-track.md` §"GT-17. Pro-$p$ Groups and the $p$-Adic Integers". The design `requires` line names `inverse-systems-profinite-groups-and-completion`, `frattini-subgroups-and-the-burnside-basis-theorem`, and `cyclic-groups-and-direct-products`, and the live closure already contains all three.
VERDICT: no-drift

### the-riemann-zeta-function
Read `research/plan-complex-analysis-track.md` §"CA-22. The Riemann Zeta Function". The design requires CA-21, CA-18, `primes-and-the-fundamental-theorem-of-arithmetic`, FA-23, and FA-25, and the live closure already contains the corresponding page stack.
VERDICT: no-drift

### dirichlet-series-and-euler-products
Read `research/plan-number-theory-track.md` §"NT-12. Dirichlet series and Euler products". The design explicitly requires the planned CA-22 items `def-riemann-zeta-function` and `thm-euler-product-for-riemann-zeta`; the current closure already reached NT-9--NT-11 through `chebyshev-bounds-and-mertens-theorems` but missed the owning page `the-riemann-zeta-function`, so I added that backward edge.
VERDICT: drift-applied — added the-riemann-zeta-function (order 345)

### duality-and-rigidity-in-monoidal-categories
Read `research/plan-category-theory-track.md` §"MA-16. Duality and Rigidity in Monoidal Categories". The design requires `braided-and-symmetric-monoidal-categories`, `strictification-and-mac-lanes-coherence-theorem`, `adjunctions-units-and-counits`, `abelian-categories`, and `dual-spaces-bilinear-forms-and-inertia`, and the live closure already reaches that full stack.
VERDICT: no-drift

### derived-functors
Read `research/plan-homological-algebra-track.md` §"HA-6. Left and Right Derived Functors — Data-Supplied Construction". The design `requires` line names `projective-and-injective-resolutions` and `preadditive-and-additive-categories-and-biproducts`, and both are already in the current closure.
VERDICT: no-drift

### crossed-homomorphisms-complements-and-first-cohomology
Read `research/plan-group-theory-track.md` §"GT-21. Crossed Homomorphisms, Complements, and First Cohomology". The design requires `group-extensions-complements-and-schur-zassenhaus` and `group-cohomology-as-a-derived-functor`; the current closure already reached the cohomology page but missed `group-extensions-complements-and-schur-zassenhaus`, so I added that backward edge. This explicit run carries GT-9 at lower order and records the in-run dependency exception in its scope ledger, so GT-21 remains in the requested scope.
VERDICT: drift-applied — added group-extensions-complements-and-schur-zassenhaus (order 71.017)

### simplicial-complexes-and-simplicial-homology
Read `research/plan-algebraic-topology-track.md` §"AT-1. Simplicial Complexes and Simplicial Homology". The design requires `subspaces-products-and-quotients`, `free-modules-and-exact-sequences`, and `chain-complexes-and-homology`, and the current closure already reaches all three.
VERDICT: no-drift

### affine-algebraic-sets-and-coordinate-rings
Read `research/plan-algebraic-geometry-track.md` §"AV-1. Affine algebraic sets and coordinate rings". The design requires `noether-normalisation-and-nullstellensatz` plus the polynomial-ring and ideal/quotient interfaces; the current closure already contained `polynomial-rings-and-roots` and `ideals-and-quotient-rings` but missed `noether-normalisation-and-nullstellensatz`, so I added that backward edge.
VERDICT: drift-applied — added noether-normalisation-and-nullstellensatz (order 111.013)

### presheaves-sheaves-stalks-and-sheafification
Read `research/plan-algebraic-geometry-track.md` §"AV-9. Presheaves, sheaves, stalks, and sheafification". The design requires the category/functor and directed-colimit interfaces, and the current closure already reaches those through the existing path into `categories-functors-and-natural-transformations` and `limits-and-colimits`.
VERDICT: no-drift

### generalized-niceness-and-reduction-outcomes
Read `research/plan-combinatorics-and-categories.md` §16.2, row 427/428. That scope line only advances the existing Erdős--Hajnal blockade chain, and the current closure already contains the immediately preceding prerequisite pair `leaf-reducibility-and-wonderful-families`.
VERDICT: no-drift

### vector-fields-flows-and-lie-derivatives
Read `research/plan-differential-geometry-track.md` §"DG-9. Vector Fields, Flows, Lie Brackets, and Lie Derivatives". The design `requires` line names `euclidean-ordinary-differential-equations-with-smooth-dependence`, `smooth-vector-bundles-and-sections`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-partitions-of-unity-and-exhaustions`, and `whitney-embedding-tubular-neighbourhoods-and-approximation`, and the live closure already contains the whole set.
VERDICT: no-drift

### morse-critical-points-hessians-and-indices
Read `research/plan-differential-topology-track.md` §"DT-1 — Morse critical points, Hessians, and indices". The design requires the DG smooth-maps page, the tangent/cotangent page, and the DG Hessian/connection material, and the current closure already reaches that differential-geometry foundation.
VERDICT: no-drift

### computable-reductions-and-rices-theorem
Read `research/plan-computability-theory-track.md` §"TC-13. Computable Reductions and Rice's Theorem". The design `requires` line names `diagonalization-and-the-halting-problem`, and the live closure already contains it.
VERDICT: no-drift

### the-cook-levin-theorem
Read `research/plan-computability-theory-track.md` §"TC-21. The Cook--Levin Theorem". The design `requires` line names `p-np-conp-and-polynomial-reductions`, and the live closure already contains it.
VERDICT: no-drift

### space-complexity-savitch-and-tqbf
Read `research/plan-computability-theory-track.md` §"TC-23. Space Complexity, Savitch's Theorem, and TQBF". The design requires `p-np-conp-and-polynomial-reductions` and `graphs-walks-and-connectivity`, and the current closure already reaches both.
VERDICT: no-drift

### randomized-complexity-and-amplification
Read `research/plan-computability-theory-track.md` §"TC-28. Randomized Complexity and Amplification". The design requires `p-np-conp-and-polynomial-reductions` and `finite-probability-spaces-and-random-variables`, and the current closure already contains both.
VERDICT: no-drift
