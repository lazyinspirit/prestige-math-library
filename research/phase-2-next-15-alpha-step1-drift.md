# `phase-2-next-15` prerequisite-drift review

I reviewed `research/phase-2-next-15-scope-ledger.json`, all ten assigned batch
manifests, every corresponding A-page prose design, the task and brief, the
generated candidate evidence, and `research/plan-spec.json`. Candidate names
were treated as a reading list rather than findings. The scope ledger forbids
in-run dependencies, and every declared direct edge below points to an earlier,
published page. No plan correction, new pair, rescope, or ordering change was
needed or applied.

For the less familiar proof joints, I read the relevant complete arguments in
the Stacks Project, [Tags 015J](https://stacks.math.columbia.edu/tag/015J),
[015M](https://stacks.math.columbia.edu/tag/015M), and
[015N](https://stacks.math.columbia.edu/tag/015N) (Cartan--Eilenberg and
Grothendieck spectral sequences); Kleshchev, [*Lectures on Infinite
Dimensional Lie
Algebras*](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), printed
pp. 123--139 (Casimir, denominator identity, and Weyl--Kac); Craven, [*The
Theory of Blocks of Finite
Groups*](https://web.mat.bham.ac.uk/D.A.Craven/docs/theses/2004diss.pdf),
Chapter 1, printed pp. 1--11 (Brauer's First Main Theorem);
Seiferas--Fischer--Meyer, ["Separating Nondeterministic Time Complexity
Classes"](https://www.researchgate.net/publication/220430544_Separating_Nondeterministic_Time_Complexity_Classes),
printed pp. 147--155 (simulation, fixed point, recursive padding, and
separation); Lietz, [*Set
Theory*](https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf),
§§7.2--7.3, printed pp. 57--61 (condensation, GCH in L, and diamond in L); and
Neeman, [*Forcing*](https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf),
the forcing-theorem and formal-transfer arguments.

### brauers-first-main-theorem

The RG-16 design (`research/plan-representation-theory-groups-track.md`, lines
1299--1338) uses exactly `blocks-defect-groups-and-the-brauer-homomorphism`
(order 510.057), `vertices-sources-and-the-green-correspondence` (order
510.059), `modular-representations-and-projective-covers` (order 150.001), and
`brauer-characters-and-decomposition-matrices` (order 150.003). The complete
source proof resolves existence, uniqueness, control, and transitivity through
block induction and the Brauer homomorphism; Green correspondence is needed
only for the design's stated compatibility consequences. The declared closure
therefore supplies every nonlocal interface. Remaining uncertainty is ordinary
authoring and independent proof review, not a missing page prerequisite.
VERDICT: no-drift

### central-limit-theorems

The PT-9 design (`research/plan-probability-track.md`, lines 1317--1377) matches
the probability spine `probability-spaces-random-variables-and-expectation`
(order 288.097), `independence-borel-cantelli-and-zero-one-laws` (order
288.099), `infinite-product-measures-and-kolmogorov-extension` (order 288.101),
`modes-of-convergence-for-random-variables` (order 288.103),
`weak-laws-and-series-of-independent-random-variables` (order 288.105),
`strong-laws-of-large-numbers` (order 288.107),
`weak-convergence-tightness-and-representation` (order 288.109), and
`characteristic-functions-inversion-and-continuity` (order 288.111). Its
analytic roots are `the-lebesgue-integral-and-the-convergence-theorems` (order
288.015), `product-measures-and-the-fubini-tonelli-theorems` (order 288.021),
`the-lp-spaces-holder-minkowski-and-riesz-fischer` (order 288.027),
`the-spectral-theorem-and-singular-value-decomposition` (order 141), and
`darboux-lhopital-and-taylor` (order 155). These cover characteristic-function
limits, tightness, Cramér--Wold, positive-semidefinite square roots, and Taylor
remainders; the Lindeberg and Lyapunov arguments are local. No unresolved
prerequisite uncertainty remains beyond review of those local proofs.
VERDICT: no-drift

### condensation-gch-and-diamond-in-l

The SET-12 contract (`research/plan-set-theory-completion-track.md`, lines
568--578) declares `the-constructible-hierarchy-and-inner-models` (order 675),
`set-theoretic-trees-delta-systems-and-diamond` (order 671), and
`arithmetization-incompleteness-and-relative-consistency` (order 659). The
complete constructibility argument uses the first root for L, definability,
Skolem hulls, and collapse; condensation then bounds constructible subsets
below the successor cardinal and proves GCH. The diamond construction uses the
canonical L-well-order, condensation, and the earlier club/stationary
interface in the tree root. The third root is precisely what converts the
semantic inner-model result into the stated formal relative-consistency
theorem. The closure does not use the deferred set-theory catalogue. No
mathematical or metatheoretic prerequisite remains unresolved.
VERDICT: no-drift

### cup-cap-cross-products-and-cohomology-rings

The AT-7 design (`research/plan-algebraic-topology-track.md`, lines 1016--1072)
uses `cw-complexes-and-cellular-homology` (order 366.007) and
`singular-cohomology-and-coefficient-theorems` (order 366.011). Their transitive
closure contains singular chains, chain homotopy, relative homology,
Eilenberg--Zilber algebra, tensor/Tor interfaces, and coefficient exact
sequences. Alexander--Whitney, cup, cap, cross, relative-product, and ring
computations are explicitly built on this page; no later duality page is being
used backward. Remaining uncertainty is confined to the page-local sign and
homotopy checks.
VERDICT: no-drift

### distributions-test-functions-and-differentiation

The FA-24 design (`research/plan-functional-analysis-track.md`, lines
1762--1835) has the two declared roots `schwartz-space-and-the-plancherel-theorem`
(order 288.091) and `the-divergence-theorem-and-classical-stokes` (order
288.00017). The first root's closure supplies Euclidean smooth cutoffs,
Schwartz/test-function conventions, measure and convergence theory; the second
is the explicit supplier for the Newtonian-kernel distributional computation.
The LF test-function topology, local finite-order theorem, support,
convolution, mollification, point-support structure, and sheaf gluing are
owned by FA-24. Smooth partitions on Euclidean open sets can be constructed
from the supplied bump functions in that local gluing proof, so they do not
expose a new substantial page edge. That construction remains a normal proof
review obligation, not unresolved prerequisite drift.
VERDICT: no-drift

### geodesics-the-exponential-map-completeness-and-hopf-rinow

The DG-20 design (`research/plan-differential-geometry-track.md`, lines
5224--5449) matches `euclidean-ordinary-differential-equations-with-smooth-dependence`
(order 457), `vector-fields-flows-and-lie-derivatives` (order 459),
`riemannian-metrics-length-distance-and-volume` (order 477),
`connections-levi-civita-and-parallel-transport` (order 479), `compactness`
(order 255), and `completeness-and-uniform-continuity` (order 118). These roots
supply the geodesic spray and smooth-dependence interface, metric length and
distance, Levi--Civita transport, compactness, and metric completeness. Normal
and convex neighborhoods, first variation, Gauss lemma, minimizing segments,
and the Hopf--Rinow equivalences are local. No additional global-analysis page
is presupposed; only independent checking of the local completeness argument
remains.
VERDICT: no-drift

### grothendieck-spectral-sequences-and-computations

The HA-17 design (`research/plan-homological-algebra-track.md`, lines
3740--3940) declares `double-complexes-exact-couples-and-convergence` (order
365.067), `derived-functors` (order 365.047),
`delta-functors-and-universality` (order 365.049),
`group-cohomology-as-a-derived-functor` (order 365.059),
`universal-coefficients-and-kunneth-theorems` (order 365.057), and
`group-extensions-complements-and-schur-zassenhaus` (order 71.017). The Stacks
Project's complete Cartan--Eilenberg argument confirms that the first three
roots provide the double-complex, resolution, acyclicity, and convergence
machinery for the Grothendieck spectral sequence. The last three supply the
UCT/Künneth and Lyndon--Hochschild--Serre applications. No additional derived
category or later spectral-sequence page is needed. Remaining uncertainty is
only implementation-level indexing and convergence review.
VERDICT: no-drift

### hurewicz-whitehead-freudenthal-and-cw-approximation

The AT-12 design (`research/plan-algebraic-topology-track.md`, lines
1667--1714) matches `relative-homology-excision-and-mayer-vietoris` (order
366.005), `cw-complexes-and-cellular-homology` (order 366.007),
`higher-homotopy-groups-and-cofiber-sequences` (order 366.019), and
`fibrations-fiber-bundles-and-homotopy-exact-sequences` (order 366.021).
Relative Hurewicz uses the first and third roots; cellular and CW approximation
use the second; the homotopy exact sequences and connectivity comparisons use
the third and fourth. Whitehead, homotopy excision/Blakers--Massey, and
Freudenthal are the page's own substantial arguments, not imports from later
pages. Their proof review remains demanding, but it reveals no missing
prerequisite supplier.
VERDICT: no-drift

### measure-preserving-transformations-and-poincare-recurrence

The MT-22 design (`research/plan-measure-theory-track.md`, lines 4415--4566)
uses `measure-preserving-systems-and-mixing-criteria` (order 288.0421),
`weak-mixing-and-the-chacon-transformation` (order 288.0423),
`the-lebesgue-integral-and-the-convergence-theorems` (order 288.015),
`measures-and-their-basic-properties` (order 288.003),
`lebesgue-measure-on-euclidean-space` (order 288.007),
`the-maximal-function-and-lebesgue-differentiation` (order 288.033),
`outer-measure-and-the-caratheodory-extension-theorem` (order 288.005),
`compactness` (order 255), `countability-and-uncountability` (order 18),
`the-topology-of-euclidean-space` (order 257), and `sequences-and-limits`
(order 112). This closes recurrence, induced-map/Kac calculations, standard
examples, second-countable topological recurrence, and the compact-metric
Krylov--Bogolyubov subsequence construction. The stated countable-choice use is
already explicit in the design. No operator-theory or later ergodic page is a
hidden premise; ordinary local proof checking is the only remaining uncertainty.
VERDICT: no-drift

### nondeterministic-recursive-padding-and-time-separation

The UC-73 addition (`research/plan-computability-theory-track.md`, lines
3279--3342) declares `effective-numberings-reductions-resources-and-randomness`
(order 612.2), `resource-bounds-and-machine-invariance` (order 617), and
`robust-machine-models-and-universal-computation` (order 599). The full
Seiferas--Fischer--Meyer argument confirms that the proof needs prefix-free
program codes, constant-factor nondeterministic simulation, clocks/running
times, a recursion-theorem fixed point, and recursive padding; these are
exactly the declared suppliers and the local lemmas commissioned in the prose.
The quantitative downward induction and contradiction with the unary gross
separation theorem are local. The published errata do not introduce another
interface. Independent verification of the exact constants and translated
time bounds remains, but there is no missing page prerequisite.
VERDICT: no-drift

### sat-tableaux-and-quantified-space-completeness

The SAT/TQBF design (`research/plan-computability-theory-track.md`, lines
3235--3278) uses `effective-numberings-reductions-resources-and-randomness`
(order 612.2) and `turing-machines-configurations-and-computation` (order 597).
The first root already defines the uniform time/space and verifier/reduction
interfaces; the second supplies configuration encodings and computation
tableaux. Cook--Levin consistency clauses, 3SAT conversion, polynomial-space
configuration reachability, and the quantified-formula recursion are explicitly
proved locally. Consequently the page does not depend on the later published
Cook--Levin or TQBF pages, nor does it need `resource-bounds-and-machine-invariance`
(order 617) as an extra direct edge. Remaining uncertainty is local reduction
bookkeeping only.
VERDICT: no-drift

### the-de-rham-theorem-and-degree

The DG-17 design (`research/plan-differential-geometry-track.md`, lines
4362--4595) exactly matches `sard-theorem-and-transversality` (order 453),
`whitney-embedding-tubular-neighbourhoods-and-approximation` (order 455),
`manifolds-with-boundary-collars-and-orientations` (order 467),
`integration-of-forms-and-the-general-stokes-theorem` (order 469),
`the-de-rham-complex-homotopy-and-mayer-vietoris` (order 471),
`singular-cochains-mayer-vietoris-and-smooth-singular-comparison` (order 473),
`singular-cohomology-and-coefficient-theorems` (order 366.011),
`cup-cap-cross-products-and-cohomology-rings` (order 366.013),
`orientations-poincare-lefschetz-and-alexander-duality` (order 366.015),
`chain-complexes-and-homology` (order 365.037),
`chain-homotopy-and-the-homotopy-category` (order 365.039),
`long-exact-sequences-in-homology` (order 365.043), and
`free-modules-and-exact-sequences` (order 104). These close simplex
integration, Stokes, smooth-singular comparison, Mayer--Vietoris, ring
compatibility, compact supports, orientations, and degree. The local-to-global
connector and sign conventions still require independent review, but no
external supplier is absent.
VERDICT: no-drift

### the-forcing-theorem-and-formal-consistency-transfer

The SET-14 contract (`research/plan-set-theory-completion-track.md`, lines
590--603) declares `forcing-orders-names-and-generic-extensions` (order 679)
and `arithmetization-incompleteness-and-relative-consistency` (order 659). The
complete forcing proof obtains the atomic recursion, definability lemma, truth
lemma, ZF/ZFC verification, and ordinal preservation from the forcing root.
The separate finite-fragment/Boolean-valued formalization uses the
arithmetization root to obtain the proof-theoretic consistency transfer; it
does not infer that transfer from the stronger countable-transitive-model
narrative. The transitive closure includes the required syntax, deduction,
reflection, and Boolean-algebra interfaces and never reaches the deferred
set-theory catalogue. No prerequisite uncertainty or owner decision remains.
VERDICT: no-drift

### the-weyl-kac-character-formula

The RL-15 design (`research/plan-representation-theory-lie-track.md`, lines
1417--1452) uses `kac-moody-algebras-from-generalized-cartan-matrices` (order
510.023) and `integrable-highest-weight-kac-moody-modules` (order 510.027).
Kleshchev's complete proof confirms that the symmetrizable invariant form,
formal character algebra, Casimir restriction, Weyl action, and denominator
calculation come from the first root or are constructed locally, while
integrability and Weyl invariance of the highest-weight character come from
the second. The affine specialization does not require the intervening loop
realization page: its level terminology and intrinsic GCM data are already in
the declared closure. The source orders the denominator identity via the
zero-weight specialization whereas the scaffold permits an independent local
route, but both routes use the same suppliers; this is a proof-design review
point, not prerequisite drift.
VERDICT: no-drift

### weak-and-weak-star-topologies

The FA-8 design (`research/plan-functional-analysis-track.md`, lines 711--774)
declares `locally-convex-spaces-and-continuous-separation` (order 288.0603) and
`nets-and-filters` (order 259). Their closure supplies locally convex initial
topologies, continuous separation, duality/Hahn--Banach, sequential uniform
boundedness, and nets. The page locally develops weak and weak-star bases,
annihilators, transpose continuity, bounded weakly convergent sequences,
failure of first countability, and strong/weak operator topologies. Its stated
countable-choice uses are already visible in the prose. No compactness theorem
from the later Banach--Alaoglu page is used backward; only routine proof review
remains.
VERDICT: no-drift

Validation: `node tools/drift-review-check.mjs --run phase-2-next-15
--before-apply` passed with 15 pages reviewed and decisions valid, with
materialization/buildability pending. `node tools/validate-plan.mjs
research/plan-spec.json` passed: declared page order is acyclic and consistent,
with no item-level cycles, forward references, B-page dependencies, or
unresolved IDs among the 1,022 pages whose item lists are present. Its standing
note is that 597 planned pages have no item list yet and are therefore validated
only at page/order level.
