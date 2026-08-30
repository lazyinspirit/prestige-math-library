### bloch-schottky-and-picard
Read `research/plan-complex-analysis-track.md` §CA-23. The design declares CA-15, CA-12, and CA-8 as the load-bearing predecessors; the later remarks about CA-NV-2 and CA-MF-1 are explicitly agreement-only and non-load-bearing. The current closure already carries the stated prerequisites.
VERDICT: no-drift

### chain-complexes-and-homology
Read `research/plan-homological-algebra-track.md` §HA-1. The design requires `abelian-categories` and `exactness-and-the-member-calculus`, and the page text says nothing else is load-bearing at page level. The current closure already contains both.
VERDICT: no-drift

### context-free-grammars-and-normal-forms
Read `research/plan-computability-theory-track.md` §TC-6 and its dependency table. The design requires `formal-languages-encodings-and-decision-problems` and `ramsey-theory`; both are already in the page's declared closure.
VERDICT: no-drift

### deterministic-finite-automata-and-regular-languages
Read `research/plan-computability-theory-track.md` §TC-2 and the dependency table in §3. The design requires `formal-languages-encodings-and-decision-problems` and `finite-counting-and-binomial-coefficients`, and the current closure already contains both.
VERDICT: no-drift

### direct-matrix-factorisations-lu-cholesky-and-qr
Read `research/plan-algebra-track-expansion-v2.md` §LA-17 and the placement table in §3. The design requires `matrix-norms-condition-numbers-and-numerical-stability`, and the current closure already contains it.
VERDICT: no-drift

### induced-representations-and-frobenius-reciprocity
Read `research/plan-algebra-track-expansion.md` §RT-4 and the later §II.7 reshaping note. The design's explicit page-level prerequisites remain `characters-and-the-orthogonality-relations` and `free-modules-and-exact-sequences`; the representation-theory and Galois material mentioned around Burnside and Mackey is already reached through the existing closure, so there is no absent prerequisite.
VERDICT: no-drift

### mittag-leffler-and-runges-theorem
Read `research/plan-complex-analysis-track.md` §CA-19. The design requires CA-18, CA-11, and CA-9, namely `infinite-products-and-weierstrass-factorisation`, `the-riemann-sphere-and-mobius-transformations`, and `the-residue-theorem`. The current closure already carries that full set.
VERDICT: no-drift

### noether-normalisation-and-nullstellensatz
Read `research/plan-commutative-algebra-track.md` §CA-7 and the consumer seam in `research/plan-algebraic-geometry-track.md` §AV-1. The commutative-algebra design explicitly requires the algebraically closed-field point form from `algebraic-closure-embeddings-and-separability`, and that page was absent from the current closure even though the other CA-7 prerequisites were already present transitively.
VERDICT: drift-applied — added `algebraic-closure-embeddings-and-separability` (order 98)

### signed-and-complex-measures-hahn-and-jordan
Read `research/plan-measure-theory-track.md` §MT-12 and the inherited-boundary table in `research/plan-functional-analysis-track.md` §2. The design requires MT-8, MT-2, `series-and-nonnegative-tests`, `absolute-convergence-and-rearrangement`, and `rn-as-a-normed-space`; all of those are already present in the page's declared closure through the MT-11 chain.
VERDICT: no-drift

### smooth-partitions-of-unity-and-exhaustions
Read `research/plan-differential-geometry-track.md` §DG-2. The design explicitly requires `the-exponential-function` for the flat-function construction and its decay proof; that page was missing from the current closure, while the other listed DG-2 prerequisites were already present.
VERDICT: drift-applied — added `the-exponential-function` (order 175)

### tangent-cotangent-and-the-differential
Read `research/plan-differential-geometry-track.md` §DG-3. The design explicitly requires `dual-spaces-bilinear-forms-and-inertia`, `the-determinant-of-a-linear-operator`, and `the-fundamental-theorems-of-calculus` in addition to the manifold and total-derivative interfaces, and those three pages were absent from the pre-edit closure.
VERDICT: drift-applied — added `dual-spaces-bilinear-forms-and-inertia` (order 92), `the-determinant-of-a-linear-operator` (order 84), `the-fundamental-theorems-of-calculus` (order 239)

### the-diagram-lemmas-in-an-abelian-category
Read `research/plan-category-theory-track.md` §MA-11, with the homological-algebra citations checked in `research/plan-homological-algebra-track.md`. The design requires `exactness-and-the-member-calculus`, `abelian-categories`, and `free-modules-and-exact-sequences`; all three are already in the declared closure, even though the direct spec edge currently lands on the `-examples` companion.
VERDICT: no-drift

### the-gamma-function
Read `research/plan-complex-analysis-track.md` §CA-21. The design's explicit `requires` line adds MT-11 `product-measures-and-the-fubini-tonelli-theorems` to the complex-analysis and improper-integral pages, and that MT-11 page was absent from the current closure.
VERDICT: drift-applied — added `product-measures-and-the-fubini-tonelli-theorems` (order 288.021)

### the-riemann-mapping-theorem
Read `research/plan-complex-analysis-track.md` §CA-16. The design requires CA-15, CA-12, and CA-7; the Hurwitz and Green's-theorem uses named later in the section are already supplied inside the existing closure, so there is no absent prerequisite to add.
VERDICT: no-drift
