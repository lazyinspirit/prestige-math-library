### solvability-by-radicals-and-kummer-theory
Read `research/plan-algebra-track.md` §"GA-4. Norm and Trace, Cyclic and Kummer Extensions, and Solvability by Radicals". The design's `requires` line names `finite-fields-and-cyclotomic-extensions`, `composition-series-and-solvable-groups`, `the-field-of-fractions-and-localisation`, and `dual-spaces-bilinear-forms-and-inertia`; the Hilbert 90 / trace-form prose also spends the solvable-group page and the dual-spaces page. I added the two missing lower-order pages to `research/plan-spec.json`.
VERDICT: drift-applied — added composition-series-and-solvable-groups (order 66), dual-spaces-bilinear-forms-and-inertia (order 92)

### kan-extensions-density-and-the-free-cocompletion
Read `research/plan-category-theory-track.md` §"MA-6. Kan Extensions, Density and the Free Cocompletion". The design's `requires` line names `ends-coends-and-weighted-limits`, `adjunctions-units-and-counits`, `universal-properties-and-the-yoneda-lemma`, and `monads-comonads-and-their-algebras`. The current closure from `ends-coends-and-weighted-limits-examples` already contains all four.
VERDICT: no-drift

### set-partitions-stirling-numbers-and-exponential-generating-functions
Read `research/plan-combinatorics-and-categories.md` §"CB-7 (ENRICHED). Set Partitions, Stirling Numbers and Exponential Generating Functions". The design requires CB-16, `inclusion-exclusion-and-the-pigeonhole-principle`, CB-15, `the-exponential-function` (for Dobinski), and `matrices-and-the-matrix-of-a-linear-map`. The live closure already reached the matrix page, but it lacked the two named CB pages and `the-exponential-function`. I minted `combinatorial-classes-and-the-symbolic-method` / `-examples` at orders 194.1/194.2 and `permutation-statistics-inversions-and-eulerian-numbers` / `-examples` at 198.1/198.2, and added those ids plus `the-exponential-function` to this page's `requires`.
VERDICT: drift-minted — combinatorial-classes-and-the-symbolic-method (order 194.1), permutation-statistics-inversions-and-eulerian-numbers (order 198.1)

### block-designs-and-finite-projective-planes
Read `research/plan-combinatorics-and-categories.md` §"CB-14a (ENRICHED, split). Block Designs, Steiner Systems and Fisher's Inequality". The design requires CB-13, `congruences-and-the-chinese-remainder-theorem`, `inclusion-exclusion-and-the-pigeonhole-principle`, `determinants-of-matrices-over-a-commutative-ring`, `eigenvalues-eigenvectors-and-the-characteristic-polynomial`, and cyclic-group facts for Bose's construction. The current closure already reaches the determinant page and, by my reading of the existing published id, the cyclic-group material through `cyclic-groups-and-direct-products`; `eigenvalues-eigenvectors-and-the-characteristic-polynomial` was the missing lower-order edge, so I added it.
VERDICT: drift-applied — added eigenvalues-eigenvectors-and-the-characteristic-polynomial (order 86)

### classical-and-loglog-erdos-hajnal-bounds
Read `research/plan-combinatorics-and-categories.md` §16.2–§16.4 of the Erdős–Hajnal block. The design scopes page 403 to "the classical and log-log general EH lower bounds quoted in the introduction" and routes "general bounds" to 403; unlike the anchored CB sections, this block does not add a broader page-level prerequisite list beyond the EH foundation and the Rödl/Nikiforov page already declared.
VERDICT: no-drift

### polynomial-rodl-and-viral-equivalence
Read `research/plan-combinatorics-and-categories.md` §16.2–§16.4 of the Erdős–Hajnal block. The design scopes page 405 to "Polynomial Rödl, viral properties and Bucić–Fox–Pham equivalence (1.3)". The extra finite-family exponent / hereditary amplification / induced-count lemmas in §16.3 are local scaffolding obligations for this page, not additional page prerequisites outside the current closure from `erdos-hajnal-property-and-homogeneous-sets` and `sparse-restricted-subgraphs-and-rodl-nikiforov`.
VERDICT: no-drift

### localisation-of-modules-and-support
Read `research/plan-commutative-algebra-track.md` §"CA-2. Localisation of modules, support, and Nakayama's lemma". The design requires CA-1, `the-field-of-fractions-and-localisation`, the published module / quotient-module / exact-sequence pages, `tensor-products-of-modules`, and the determinant trick on `chain-conditions-and-semisimple-modules`. The current closure from `noetherian-rings-and-hilbert-basis-examples` already reaches that stack.
VERDICT: no-drift

### isolated-singularities-and-laurent-series
Read `research/plan-complex-analysis-track.md` §"CA-8. Isolated Singularities and Laurent Series". The design's `requires` line is just CA-7, and the Laurent/reflection prose repeatedly says CA-7 is the load-bearing prior page. The current closure from `the-winding-number-and-the-global-cauchy-theorem` matches it.
VERDICT: no-drift

### harmonic-functions-and-the-poisson-integral
Read `research/plan-complex-analysis-track.md` §"CA-13. Harmonic Functions and the Poisson Integral". The design's `requires` line names CA-7, CA-6, and `mixed-partials-taylor-and-extrema`. The current spec already declares exactly those prerequisites.
VERDICT: no-drift

### blocks-primitivity-and-multiple-transitivity
Read `research/plan-group-theory-track.md` §"GT-3. Blocks, Primitivity, and Multiple Transitivity". The design's `requires` line names `group-actions-and-cayleys-theorem` and `semidirect-products-and-automorphism-groups`. The closure from `extraspecial-p-groups-and-central-products-examples` already includes both.
VERDICT: no-drift

### geometric-actions-svarc-milnor-and-growth
Read `research/plan-group-theory-track.md` §"GT-11. Geometric Actions, the Svarc--Milnor Lemma, and Growth". The design's `requires` line names `cayley-graphs-word-metrics-and-quasi-isometry` and `composition-series-and-solvable-groups`. The closure from `cayley-graphs-word-metrics-and-quasi-isometry-examples` already reaches both.
VERDICT: no-drift

### non-measurable-sets-and-the-cost-of-choice
Read `research/plan-measure-theory-track.md` §"MT-5. Non-Measurable Sets and the Cost of Choice". The design's `requires` line is MT-4 `lebesgue-measure-on-euclidean-space`; the long AC / DC and Steinhaus / Solovay / Shelah prose is internal page content, not extra page prerequisites. The current closure from `lebesgue-measure-on-euclidean-space-examples` matches it.
VERDICT: no-drift

### positive-definite-binary-quadratic-forms-and-reduction
Read `research/plan-number-theory-track.md` §"NT-6. Positive-definite binary quadratic forms and reduction". The design requires NT-3–NT-4, the authored integer/congruence pages, and the authored matrix/group-action material through `splitting-fields`; the item list explicitly cites matrix inversion and the `SL_2(\mathbb Z)` action. The current closure from `lagrange-four-square-theorem-examples` already reached the congruence / splitting-field side but not `group-actions-and-cayleys-theorem` or `matrices-and-the-matrix-of-a-linear-map`. I added both to `requires`, moved this pair to orders 78.1/78.2, and moved the immediate continued-fractions / Pell chain to 78.3–78.6 so every edge stays backward.
VERDICT: drift-reordered — positive-definite-binary-quadratic-forms-and-reduction (order 57.011 -> 78.1), regular-continued-fractions-and-diophantine-approximation (order 57.013 -> 78.3), pell-equations-and-generalized-pell-orbits (order 57.015 -> 78.5)
