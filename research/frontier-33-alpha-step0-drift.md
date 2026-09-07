# frontier-33 Alpha prerequisite-drift review

### hausdorff-measure-and-hausdorff-dimension

Read `research/plan-measure-theory-track.md`, §MT-21. The design requires MT-3, MT-4, MT-11, `metric-spaces`, `cantor-set-baire-and-measure-zero`, and `the-logarithm-and-general-powers`; all are already in the closure of the declared Radon-measure predecessor.

VERDICT: no-drift

### dual-spaces-adjoint-operators-and-annihilators

Read `research/plan-functional-analysis-track.md`, §FA-7. The design requires FA-2 and FA-4 through FA-6, plus MT-16 for concrete Lp duality; the declared FA-6 companion already reaches every one of those suppliers.

VERDICT: no-drift

### weak-laws-and-series-of-independent-random-variables

Read `research/plan-probability-track.md`, §PT-5. The design requires PT-1 through PT-4, MT-8, MT-11, MT-14, and the published real-series Cauchy and summation-by-parts machinery; the PT-4 companion's closure contains them.

VERDICT: no-drift

### divergence-and-almost-everywhere-convergence-of-fourier-series

Read `research/plan-fourier-analysis-track.md`, §FR-5. The design requires FR-1, the functional-analysis uniform boundedness theorem, and measure convergence theorems; all occur in the closure of the declared FR-4 companion.

VERDICT: no-drift

### classical-zero-free-region-and-the-prime-number-theorem

Read `research/plan-number-theory-track.md`, §NT-16. The design requires NT-11 through NT-15, the complex-analysis Jensen/canonical-product/Hadamard machinery, and the relevant Gamma and zeta pages, with NT-13 used for the progression theorem; the NT-15 companion's closure contains those interfaces.

VERDICT: no-drift

### derived-categories

Read `research/plan-homological-algebra-track.md`, §HA-14 and its bounded-versus-unbounded scope denial. The page requires `triangulated-categories`, `derived-functors`, `yoneda-extensions-and-homological-dimension`, and `tor-flatness-and-global-dimension`; the declared triangulated-categories companion already reaches all four.

VERDICT: no-drift

### regular-local-rings-and-homological-dimension

Read `research/plan-commutative-algebra-track.md`, §CA-18 and the CA-18 enrichment additions. Besides CA-8, CA-10 through CA-13, and CA-16 through CA-17, the design explicitly consumes HA-5, HA-8, HA-9, and HA-10 for resolutions, Ext, projective dimension, Tor, Betti numbers, and global dimension. The old depth-page closure stopped before HA-9 and HA-10, so the HA-10 A page was added; its closure supplies the earlier HA interfaces too.

VERDICT: drift-applied — added tor-flatness-and-global-dimension (order 365.055)

### decomposition-inertia-and-frobenius

Read `research/plan-number-theory-track.md`, §NT-21. The design requires NT-17, NT-20, CA-13 completion machinery, and the abstract Galois-correspondence, finite-field, and restriction-in-towers interfaces; the declared NT-20 companion's closure contains them.

VERDICT: no-drift

### homology-axioms-degree-and-classical-applications

Read `research/plan-algebraic-topology-track.md`, §AT-5. Its only page-level prerequisite is `cw-complexes-and-cellular-homology`; the declared companion of that page includes the required A page in its closure.

VERDICT: no-drift

### dimension-constructible-images-and-dimensions-of-fibres

Read `research/plan-algebraic-geometry-track.md`, §AV-5 and the inherited-interface preface. The design requires AV-1 through AV-4, `krull-dimension-and-height-theorems`, `noether-normalisation-and-nullstellensatz`, and the transcendence-degree interface; the declared AV-4 companion already reaches each supplier.

VERDICT: no-drift

### fibre-products-base-change-and-scheme-theoretic-fibres

Read `research/plan-algebraic-geometry-track.md`, §AV-13. The design requires AV-11, AV-12, and tensor products; all are in the closure of the declared AV-12 companion.

VERDICT: no-drift

### co-bird-free-comb-structure

Read `research/plan-combinatorics-and-categories.md`, §§16.1 through 16.3, especially the 439/440 row. The page owns the P2+P1/P3+P1 witnesses, E-overlap relation, and Lemma 6.5 after the co-E Lemma 6.4 pair; the declared `co-e-free-comb-structure` predecessor reaches the earlier blockade and comb machinery.

VERDICT: no-drift

### maximum-principles-harnack-and-liouville-in-rn

Read `research/plan-pde-track.md`, §PDE-4. The design requires PDE-3 and the published compactness, connectedness, and Euclidean-geometry items; the declared PDE-3 companion's closure contains all of them.

VERDICT: no-drift

### integration-of-forms-and-the-general-stokes-theorem

Read `research/plan-differential-geometry-track.md`, §DG-14, together with the applied seam amendment in `research/plan-realanalysis-completion-track.md`, §5.6. The DG-2, DG-4, DG-11 through DG-13, Riemann-in-Rn, and Fubini suppliers were already closed, but the design also requires line integrals and now cites RC-8 and RC-9 for the classical surface/divergence/Stokes statements. Adding RC-9 supplies RC-8 and line integrals transitively.

VERDICT: drift-applied — added the-divergence-theorem-and-classical-stokes (order 288.00017)

### category-o-finiteness-duality-and-blocks

Read `research/plan-representation-theory-lie-track.md`, the authority boundary and “Declared `requires` by pair” table for RL-4. The design requires RL-1 through RL-3 and HA-1 for abelian/complex vocabulary. The RL-3 companion supplied the RL chain but not HA-1, so the HA-1 A page was added.

VERDICT: drift-applied — added chain-complexes-and-homology (order 365.037)

### clifford-theory-over-normal-subgroups

Read `research/plan-representation-theory-groups-track.md`, §RG-4. Its load-bearing prerequisites are the abstract-algebra representation pages; RG-3 is explicitly only for a non-load-bearing field-of-definition remark. The declared RG-3 companion's closure already contains the abstract representation interfaces.

VERDICT: no-drift

### sublevel-deformation-and-the-handle-attachment-theorem

Read `research/plan-differential-topology-track.md`, the AT reconciliation table and §DT-5. The design requires DT-1 through DT-4, DG collars/tubes/flows, and the unresolved `AT-n[singular-homology]` interface for the relative-homology corollary. The DT-4 companion supplied the DT and DG prerequisites but no AT page; adding the cellular-homology A page resolves the token and transitively supplies singular chains, relative homology, excision, and Mayer--Vietoris.

VERDICT: drift-applied — added cw-complexes-and-cellular-homology (order 366.007)

### the-polynomial-hierarchy-and-relativization

Read `research/plan-computability-theory-track.md`, §TC-27. The design requires `boolean-circuits-and-nonuniform-complexity` and `space-complexity-savitch-and-tqbf`, exactly matching the declared prerequisites.

VERDICT: no-drift

### arithmetization-and-the-sum-check-protocol

Read `research/plan-computability-theory-track.md`, §TC-31. The design requires `interactive-proof-systems-and-public-coins` and `algebraic-extensions-degree-and-finite-fields`, exactly matching the declared prerequisites.

VERDICT: no-drift

### expander-graphs-and-constraint-graphs

Read `research/plan-computability-theory-track.md`, §TC-33. The design requires `boolean-circuits-and-nonuniform-complexity`, `the-spectral-theorem-and-singular-value-decomposition`, and `graphs-walks-and-connectivity`, exactly matching the declared prerequisites.

VERDICT: no-drift

### formal-set-theoretic-syntax-structures-and-satisfaction

Read `research/plan-set-theory-completion-track.md`, the genuine dependency graph and §SET-1. The design starts from published naturals, whose closure already reaches relations and functions; this matches the declared predecessor.

VERDICT: no-drift

### well-founded-relations-rank-and-the-cumulative-hierarchy

Read `research/plan-set-theory-completion-track.md`, the genuine dependency graph and §SET-4. The design requires the published ordinals/transfinite-recursion page, exactly matching the declared prerequisite.

VERDICT: no-drift

### weak-choice-principles-and-sierpinskis-theorem

Read `research/plan-set-theory-completion-track.md`, the genuine dependency graph and §SET-6. The design requires published cardinal arithmetic and filters/ultrafilters, exactly matching the two declared prerequisites.

VERDICT: no-drift

### club-stationary-sets-and-pressing-down

Read `research/plan-set-theory-completion-track.md`, the genuine dependency graph and §SET-8. The design requires published cardinal arithmetic/cofinality, exactly matching the declared prerequisite.

VERDICT: no-drift
