### strictification-and-mac-lanes-coherence-theorem
Read `research/plan-category-theory-track.md` MA-13. The design explicitly requires `monoidal-categories-and-monoidal-functors`, `universal-properties-and-the-yoneda-lemma`, and `limits-and-colimits`; all three are already in the current closure via `monoidal-categories-and-monoidal-functors-examples`. The contingent note about tensor products is explicitly non-load-bearing.
VERDICT: no-drift

### star-expansions-and-erdos-hajnal
Read the Erdős–Hajnal block row at `research/plan-combinatorics-and-categories.md` 417/418. The design scopes theorem 1.9 and the `C_6`, `C_7`, and `hat-C_5` consequences, but it does not introduce a prerequisite outside the current closure inherited from `the-five-cycle-and-erdos-hajnal`.
VERDICT: no-drift

### iterative-sparsification-and-the-five-vertex-path
Read the Erdős–Hajnal block row at `research/plan-combinatorics-and-categories.md` 419/420. The design names the nice-graph route to the full `P_5`/co-`P_5` theorem, with no extra page-level prerequisite stated beyond the existing closure from `the-five-cycle-and-erdos-hajnal`.
VERDICT: no-drift

### dedekind-domains-and-ideal-classes
Read `research/plan-commutative-algebra-track.md` CA-9. Its design requires CA-1 through CA-3, CA-6, CA-8, the fraction-field and ideal machinery, projective modules, PID/UFD material, and the tensor-product page; the current closure already contains those through `valuation-rings-and-discrete-valuation-rings-examples`.
VERDICT: no-drift

### analytic-continuation-and-monodromy
Read `research/plan-complex-analysis-track.md` CA-20, including the prose around rows 25 to 27. The design requires CA-17, CA-6, and `covering-spaces-and-lifting`; its extra well-definedness inputs for chain refinement, monodromy, and the germ-space atlas are already in closure through those pages and their predecessors.
VERDICT: no-drift

### regular-expressions-and-kleenes-theorem
Read `research/plan-computability-theory-track.md` TC-4. The design requires `nondeterministic-finite-automata-and-subset-construction`, and the page's syntax/denotation and closure items do not force any additional prerequisite absent from the current closure.
VERDICT: no-drift

### context-free-pumping-ogden-and-parsing
Read `research/plan-computability-theory-track.md` TC-8. The design explicitly requires `pushdown-automata-and-context-free-languages` and `finite-counting-and-binomial-coefficients`, and both are already in the current closure.
VERDICT: no-drift

### robust-machine-models-and-universal-computation
Read `research/plan-computability-theory-track.md` TC-10. The design requires `turing-machines-configurations-and-computation`, and the model-equivalence and universal-machine items do not state a further page-level prerequisite absent from the present closure.
VERDICT: no-drift

### smooth-vector-bundles-and-sections
Read `research/plan-differential-geometry-track.md` DG-5. The design explicitly requires `rank-theorems-and-embedded-submanifolds`, `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `vector-spaces-and-subspaces`, `linear-maps-rank-nullity-and-quotient-spaces`, and `dual-spaces-bilinear-forms-and-inertia`; the current closure already contains the three linear-algebra prerequisites transitively.
VERDICT: no-drift

### mapping-cones-cylinders-and-chain-triangles
Read `research/plan-homological-algebra-track.md` HA-3. The design explicitly requires `chain-homotopy-and-the-homotopy-category` and `exactness-and-the-member-calculus`, and both are already in the current closure via `chain-homotopy-and-the-homotopy-category-examples`.
VERDICT: no-drift

### krylov-subspaces-arnoldi-and-gmres
Read `research/plan-algebra-track-expansion-v2.md` LA-20. The design explicitly requires `eigenvalue-iterations-and-the-qr-algorithm`; the GMRES least-squares and Ritz-value content is scoped inside the page and does not state a further prerequisite absent from the current closure.
VERDICT: no-drift

### matrix-differentiation-and-first-order-spectral-perturbation
Read `research/plan-algebra-track-expansion-v2.md` LA-21. The design explicitly requires `the-inverse-function-theorem-completed` and `the-moore-penrose-pseudoinverse-and-regularised-least-squares`, and both are already in the current closure.
VERDICT: no-drift

### the-lp-spaces-holder-minkowski-and-riesz-fischer
Read `research/plan-measure-theory-track.md` MT-14 and checked the predecessor summaries in the functional-analysis and probability track docs. The design requires MT-8, MT-10, MT-2, `rn-as-a-normed-space`, `the-logarithm-and-general-powers`, `convexity`, and `metric-spaces`; all are already in closure via `the-radon-nikodym-theorem-and-lebesgue-decomposition-examples`.
VERDICT: no-drift

### average-orders-divisor-sums-and-representation-counts
Read `research/plan-number-theory-track.md` NT-10. The two-square representation block explicitly uses NT-4's prime-representation and uniqueness results, but `sums-of-two-squares` was absent from this page's closure, so I added the backward prerequisite directly.
VERDICT: drift-applied — added sums-of-two-squares (order 57.007)
