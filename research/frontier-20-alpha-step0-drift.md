### socles-and-the-onan-scott-landscape
Read `research/plan-group-theory-track.md` §"GT-4. Socles and the O'Nan--Scott Landscape". The design's `requires` line names `blocks-primitivity-and-multiple-transitivity` and `composition-series-and-solvable-groups`, and the current closure from `blocks-primitivity-and-multiple-transitivity-examples` already contains both.
VERDICT: no-drift

### hyperbolic-spaces-and-hyperbolic-groups
Read `research/plan-group-theory-track.md` §"GT-12. Hyperbolic Spaces and Hyperbolic Groups". The design requires `geometric-actions-svarc-milnor-and-growth` and `small-cancellation-and-dehn-algorithms`; the live closure from `geometric-actions-svarc-milnor-and-growth-examples` already reaches both pages.
VERDICT: no-drift

### regular-continued-fractions-and-diophantine-approximation
Read `research/plan-number-theory-track.md` §"NT-7. Regular continued fractions and Diophantine approximation". The design keeps the page on low real-number, Euclidean-algorithm, induction, and matrix foundations, and the current closure from `positive-definite-binary-quadratic-forms-and-reduction-examples` already contains those lower pages.
VERDICT: no-drift

### prime-spectra-and-radicals
Read `research/plan-commutative-algebra-track.md` §"CA-3. Prime spectra and radicals (algebraic low block)". The design requires CA-1, CA-2, `ideals-and-quotient-rings`, and `the-field-of-fractions-and-localisation`; the present closure from `localisation-of-modules-and-support-examples` already contains that algebraic stack.
VERDICT: no-drift

### the-fundamental-theorem-of-algebra
Read `research/plan-algebra-track.md` §"II.8 X-1 — `the-fundamental-theorem-of-algebra`", especially II.8.b and II.8.e. The Artin–Galois route there requires `solvability-by-radicals-and-kummer-theory`, `sylow-theorems-and-nilpotent-groups`, and `continuity-ivt-evt-and-uniform-continuity`; the current closure already contains those pages and the needed `field-extensions-and-the-complex-numbers` input.
VERDICT: no-drift

### set-partitions-stirling-numbers-and-exponential-generating-functions
Read `research/plan-combinatorics-and-categories.md` §"CB-7. Set Partitions, Stirling Numbers and Exponential Generating Functions". The design's explicit low prerequisites are `lattice-paths-and-catalan-numbers` and `inclusion-exclusion-and-the-pigeonhole-principle`, and its formal-EGF route is already covered by the live closure through `combinatorial-classes-and-the-symbolic-method`, `formal-power-series`, and `the-exponential-function`.
VERDICT: no-drift

### blockades-combs-and-pattern-graphs
Read `research/plan-combinatorics-and-categories.md` §16.2–§16.4, where row 407/408 scopes this page to blockades, combs, patterns, sparse orientations, and Lemmas 2.3 and 2.6. No extra prerequisite is named there beyond the earlier Erdős–Hajnal machinery, and the current closure from `polynomial-rodl-and-viral-equivalence` already reaches the relevant earlier graph pages.
VERDICT: no-drift

### lebesgue-stieltjes-measures-and-distribution-functions
Read `research/plan-measure-theory-track.md` §"MT-6. Lebesgue–Stieltjes Measures and Distribution Functions". The design requires MT-3, MT-4, `monotone-functions-and-discontinuities`, `bounded-variation-and-riemann-stieltjes`, and `limits-of-real-functions`; the current closure from `non-measurable-sets-and-the-cost-of-choice-examples` already contains those prerequisites.
VERDICT: no-drift

### the-residue-theorem
Read `research/plan-complex-analysis-track.md` §"CA-9. The Residue Theorem and the Evaluation of Real Integrals". Its explicit `requires` line names CA-8, CA-7, `improper-integrals`, and `convexity`, and the Jordan-lemma trap again spends `cor-second-derivative-characterises-convexity`; `convexity` was absent from the declared closure, so I added the backward edge.
VERDICT: drift-applied — added convexity (order 157)

### subharmonic-functions-and-the-dirichlet-problem
Read `research/plan-complex-analysis-track.md` §"CA-14. Subharmonic Functions and the Dirichlet Problem". The design requires CA-13, `the-topology-of-euclidean-space`, and the measure-theory Lebesgue-integral / monotone-Fatou interface. I added `the-lebesgue-integral-and-the-convergence-theorems` to `research/plan-spec.json`, but that MT-8 pair is planned below order 329 and is not yet published, so this run has to build that prerequisite pair first.
VERDICT: drift-minted — lebesgue-stieltjes-measures-and-distribution-functions (order 288.011), measurable-functions-and-simple-approximation (order 288.013), the-lebesgue-integral-and-the-convergence-theorems (order 288.015)

### the-hartogs-phenomena
Read `research/plan-complex-analysis-track.md` §"SC-2. The Hartogs Phenomena". The design's `requires` line names SC-1, CA-8, CA-14, `cantor-set-baire-and-measure-zero`, and the MT-8 integration/Fatou interface. I added `subharmonic-functions-and-the-dirichlet-problem` to `research/plan-spec.json`, but because CA-14 itself now depends on the still-unpublished MT-8 pair, this run must build CA-14 before it can honestly carry Hartogs.
VERDICT: drift-applied — added subharmonic-functions-and-the-dirichlet-problem (order 329)

### preadditive-and-additive-categories-and-biproducts
Read `research/plan-category-theory-track.md` §"MA-7. Preadditive and Additive Categories, Biproducts". The design requires `adjunctions-units-and-counits`, `limits-and-colimits`, `rings-subrings-and-integral-domains`, `modules-and-module-homomorphisms`, `free-modules-and-exact-sequences`, and `matrices-and-the-matrix-of-a-linear-map`; the current closure from `kan-extensions-density-and-the-free-cocompletion-examples` already contains that full stack.
VERDICT: no-drift
