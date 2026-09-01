### braided-and-symmetric-monoidal-categories
Read `research/plan-category-theory-track.md`, MA-15. The design explicitly requires `strictification-and-mac-lanes-coherence-theorem`, `monoidal-categories-and-monoidal-functors`, `free-groups-and-presentations`, `symmetric-groups-and-the-sign-homomorphism`, and `conjugacy-and-simplicity-in-the-symmetric-groups`; all are already in the current closure.
VERDICT: no-drift

### leaf-reducibility-and-wonderful-families
Read `research/plan-combinatorics-and-categories.md`, §16.2 added A/B pairs row `425/426`. The design scopes the page to leaf-reducibility, wonderfulness, and Lemmas 2.1–2.2 with their pattern-embedding proof, but it does not state any prerequisite outside the current declared closure.
VERDICT: no-drift

### rees-modules-artin-rees-and-hilbert-samuel-theory
Read `research/plan-commutative-algebra-track.md`, CA-11. The design requires CA-1--CA-5 and CA-10 plus published polynomial-ring material; the current closure from `krull-dimension-and-height-theorems-examples` already reaches that commutative-algebra chain and `polynomial-rings-and-roots`.
VERDICT: no-drift

### diagonalization-and-the-halting-problem
Read `research/plan-computability-theory-track.md`, TC-12. The design's `requires` line is exactly `decidable-recognizable-and-enumerable-languages`, which is already the current backward prerequisite.
VERDICT: no-drift

### p-np-conp-and-polynomial-reductions
Read `research/plan-computability-theory-track.md`, TC-20. The design requires only `resource-bounds-and-machine-invariance`; the nearby graph, probability, Cook--Levin, and hierarchy pages are downstream consumers, not missing prerequisites.
VERDICT: no-drift

### whitney-embedding-tubular-neighbourhoods-and-approximation
Read `research/plan-differential-geometry-track.md`, DG-7, and the differential-topology interface notes in `research/plan-differential-topology-track.md`. DG-7 explicitly requires `sard-theorem-and-transversality`, `smooth-vector-bundles-and-sections`, `smooth-partitions-of-unity-and-exhaustions`, `compactness`, and `homotopy-and-homotopy-equivalence`; the current closure already had `compactness` transitively but was missing `homotopy-and-homotopy-equivalence`.
VERDICT: drift-applied — added homotopy-and-homotopy-equivalence (order 289)

### bounded-linear-operators-and-quotient-spaces
Read `research/plan-functional-analysis-track.md`, FA-2. The design requires FA-1 plus the published quotient-set universal property and finite products from FA-1; the current closure already contains `normed-and-banach-spaces`, `relations-functions-and-quotients`, and the product/quotient topology material that FA-1 brings in.
VERDICT: no-drift

### small-cancellation-and-dehn-algorithms
Read `research/plan-group-theory-track.md`, GT-8. The design requires `decision-problems-for-finitely-presented-groups` and `hnn-extensions-and-brittons-lemma`; both are already in the current closure.
VERDICT: no-drift

### modular-representations-and-projective-covers
Read `research/plan-group-theory-track.md`, GT-18, and the representation-theory cross-reference in `research/plan-representation-theory-groups-track.md`. GT-18 explicitly requires `induced-representations-and-frobenius-reciprocity`, `modules-and-module-homomorphisms`, `chain-conditions-and-semisimple-modules`, `valuation-rings-and-discrete-valuation-rings`, and `inverse-limits-and-noetherian-completion`; I added the missing backward edges for the published valuation page and for `inverse-limits-and-noetherian-completion`, and the latter is still planned below GT-18 and itself depends on `flatness-and-faithful-flatness`.
VERDICT: drift-minted — flatness-and-faithful-flatness (order 111.023), inverse-limits-and-noetherian-completion (order 111.025)

### inverse-systems-profinite-groups-and-completion
Read `research/plan-group-theory-track.md`, GT-16. The design requires `uniform-spaces` and `normal-subgroups-and-quotient-groups`; both are already in the current closure, and the nearby commutative-algebra mention is confined to the non-load-bearing Mal'cev remark.
VERDICT: no-drift

### projective-and-injective-resolutions
Read `research/plan-homological-algebra-track.md`, HA-5. The design requires `long-exact-sequences-in-homology`, `subobject-lattices-generators-and-the-grothendieck-axioms`, and `free-modules-and-exact-sequences`; the current closure already reaches all three.
VERDICT: no-drift

### the-duality-of-lp-and-lq
Read `research/plan-measure-theory-track.md`, MT-16, and the functional-analysis predecessor table in `research/plan-functional-analysis-track.md`. MT-16's actual `requires` line is MT-14, MT-15, MT-13, MT-12, and MT-2, all already in the current closure; the `rem-dual-of-l-infinity` mention is explicitly an order-relative note, not a prerequisite edge for this step.
VERDICT: no-drift

### chebyshev-bounds-and-mertens-theorems
Read `research/plan-number-theory-track.md`, NT-11. The design requires NT-9--NT-10, the authored Abel-summation lemma, binomial coefficients, and logarithms, and those are already in the current closure through `average-orders-divisor-sums-and-representation-counts-examples`, `absolute-convergence-and-rearrangement`, `finite-counting-and-binomial-coefficients`, and `the-logarithm-and-general-powers`. The mention of planned Gamma/zeta pages is tied to the source route for the exact third-Mertens constant, not a buildable page edge for this run; hard-wiring `the-riemann-zeta-function` here would create the same kind of unbuildable future prerequisite the drift gate rejects.
VERDICT: no-drift
