### monoidal-categories-and-monoidal-functors
Read `research/plan-category-theory-track.md` MA-12. The design requires `limits-and-colimits`, `categories-functors-and-natural-transformations`, `adjunctions-units-and-counits`, and contingently `tensor-products-of-modules`; all are already in the current declared closure.
VERDICT: no-drift

### the-five-cycle-and-erdos-hajnal
Read `research/plan-combinatorics-and-categories.md` §16.2-§16.4, especially the 415/416 row and the C_5 route notes. The design uses the cograph/perfect-pattern and comb/blockade machinery, and those suppliers are already in the current declared closure.
VERDICT: no-drift

### valuation-rings-and-discrete-valuation-rings
Read `research/plan-commutative-algebra-track.md` CA-8 as the owning design, with the algebraic-geometry references as downstream uses only. CA-8 requires CA-1 through CA-3, CA-6, and the published fraction-field/localisation/PID/UFD material; all are already in the current declared closure.
VERDICT: no-drift

### simply-connected-plane-domains
Read `research/plan-complex-analysis-track.md` CA-17. The design requires CA-16 plus `the-fundamental-group`, `covering-spaces-and-lifting`, and `the-fundamental-group-of-the-circle`, and the page text's homotopy/compactness ingredients are already reached by the current declared closure.
VERDICT: no-drift

### the-riemann-zeta-function
Read `research/plan-complex-analysis-track.md` CA-22. The design explicitly requires FA-23 and FA-25, and its theta/Mellin functional-equation proof says the Poisson-summation interface from those two pages is mandatory; both pages are lower-order but still planned, unpublished, and out of this run, so hard edges would make CA-22 unbuildable.
DEFERRED FROM ACTIVE SCOPE: the canonical plan now carries the two missing prerequisite edges. The complete Zeta scaffold is preserved in `research/frontier-25-deferred-the-riemann-zeta-function.manifest.json`; see `research/frontier-25-deferred-pairs.json`.

### nondeterministic-finite-automata-and-subset-construction
Read `research/plan-computability-theory-track.md` TC-3. The design requires `deterministic-finite-automata-and-regular-languages` and `the-zfc-axioms-and-basic-set-constructions`, and both are already in the current declared closure.
VERDICT: no-drift

### pushdown-automata-and-context-free-languages
Read `research/plan-computability-theory-track.md` TC-7. The page's closure-under-intersection-with-regular-languages item makes the regular-language supplier load-bearing, but the declared closure did not reach `deterministic-finite-automata-and-regular-languages`.
VERDICT: drift-applied — added deterministic-finite-automata-and-regular-languages (order 583)

### turing-machines-configurations-and-computation
Read `research/plan-computability-theory-track.md` TC-9. The design's stated suppliers are `formal-languages-encodings-and-decision-problems` and `graphs-walks-and-connectivity`, and both are already in the current declared closure.
VERDICT: no-drift

### rank-theorems-and-embedded-submanifolds
Read `research/plan-differential-geometry-track.md` DG-4, including the 2026-08-19 seam amendment. The live closure already covered the old DG-4 prerequisites and RC-1, but the amendment now requires RC-2 `constant-rank-submersions-and-regular-level-sets` for the Euclidean base case and that supplier was absent.
VERDICT: drift-applied — added constant-rank-submersions-and-regular-level-sets (order 288.00003)

### chain-homotopy-and-the-homotopy-category
Read `research/plan-homological-algebra-track.md` HA-2. The design requires `chain-complexes-and-homology`, and the page's categorical proof obligations that lean on exactness are already covered by the current declared closure.
VERDICT: no-drift

### the-moore-penrose-pseudoinverse-and-regularised-least-squares
Read `research/plan-algebra-track-expansion-v2.md` LA-18. The design requires LA-17, and its SVD and numerical-rank inputs are already reached in the current declared closure through the existing dependency chain.
VERDICT: no-drift

### eigenvalue-iterations-and-the-qr-algorithm
Read `research/plan-algebra-track-expansion-v2.md` LA-19. The design requires LA-17, and the norm/backward-error and spectral prerequisites it uses are already in the current declared closure.
VERDICT: no-drift

### the-radon-nikodym-theorem-and-lebesgue-decomposition
Read `research/plan-measure-theory-track.md` MT-13. The design requires MT-12, MT-8, MT-6, and MT-2, and all four are already in the current declared closure.
VERDICT: no-drift

### arithmetic-functions-and-dirichlet-convolution
Read `research/plan-number-theory-track.md` NT-9. The design explicitly reuses the four published Mobius items on `incidence-algebras-and-mobius-inversion`, and that supplier page was absent from the declared closure.
VERDICT: drift-applied — added incidence-algebras-and-mobius-inversion (order 203)
