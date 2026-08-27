### subgroups-of-free-groups-and-schreier-rewriting
Read `research/plan-group-theory-track.md` §"GT-5. Subgroups of Free Groups and Schreier Rewriting". The design's `requires` line names `free-groups-and-presentations` and `group-actions-and-cayleys-theorem`, and its action-on-a-tree note explicitly says GT-14 is not a dependency of this page; the current closure from `socles-and-the-onan-scott-landscape-examples` already contains the two real prerequisites.
VERDICT: no-drift

### pell-equations-and-generalized-pell-orbits
Read `research/plan-number-theory-track.md` §"NT-8. Pell equations and generalized Pell orbits". The design requires NT-7, the authored integer-arithmetic/congruence stack, and finite pigeonhole arguments while explicitly refusing the later quadratic-field/unit-theorem route; the current closure from `regular-continued-fractions-and-diophantine-approximation-examples` already reaches that lower foundation.
VERDICT: no-drift

### artinian-rings-and-length
Read `research/plan-commutative-algebra-track.md` §"CA-4. Artinian rings and finite length". The design requires CA-1--CA-3 plus the Artinian-module / composition-series / module-length material on `chain-conditions-and-semisimple-modules`; the current closure from `prime-spectra-and-radicals-examples` already reaches `localisation-of-modules-and-support`, `noetherian-rings-and-hilbert-basis`, `prime-spectra-and-radicals`, and the chain-conditions page.
VERDICT: no-drift

### the-spectral-theorem-and-singular-value-decomposition
Read `research/plan-algebra-track.md` §"II.9 X-2 — `the-spectral-theorem-and-singular-value-decomposition`", especially II.9.a–II.9.b. The design itself says the live spec `requires` are "unchanged and correct", and II.9.a explicitly rejects compactness or the extreme-value theorem as prerequisites; the current closure already contains `the-fundamental-theorem-of-algebra`, `inner-product-spaces-and-orthogonality`, and `triangularisation-and-jordan-canonical-form`.
VERDICT: no-drift

### the-group-algebra-and-representations
Read `research/plan-algebra-track-expansion.md` §"RT-1. The Group Algebra and Representations of Finite Groups". The design's `requires` line matches the live spec exactly: `chain-conditions-and-semisimple-modules`, `the-fundamental-theorem-of-algebra`, `sylow-theorems-and-nilpotent-groups`, and `matrices-and-the-matrix-of-a-linear-map`; the extra cited group-action/sign facts are already in closure.
VERDICT: no-drift

### integer-partitions-and-the-twelvefold-way
Read `research/plan-combinatorics-and-categories.md` §"CB-8 (ENRICHED). Integer Partitions and the Twelvefold Way". The anchor requires CB-7, `formal-power-series`, and CB-15; the current closure from `set-partitions-stirling-numbers-and-exponential-generating-functions` already reaches CB-7 and CB-15's actual page `combinatorial-classes-and-the-symbolic-method`, and the CB-17 box-count note is explicitly a later proof target rather than a prerequisite.
VERDICT: no-drift

### counting-up-to-symmetry-burnside-and-polya
Read `research/plan-combinatorics-and-categories.md` §"CB-10 (ENRICHED). Counting up to Symmetry: the Cycle Index and Pólya Enumeration". The anchor requires `group-actions-and-cayleys-theorem`, `symmetric-groups-and-the-sign-homomorphism`, CB-16, CB-15, and `polynomial-rings-and-roots`; the current closure already reaches CB-16 as `permutation-statistics-inversions-and-eulerian-numbers`, CB-15 as `combinatorial-classes-and-the-symbolic-method`, and the polynomial-ring side through the live stack.
VERDICT: no-drift

### the-lebesgue-and-riemann-integrals-compared
Read `research/plan-measure-theory-track.md` §"MT-9. The Lebesgue and Riemann Integrals Compared". The design's `requires` line names MT-8, MT-4, MT-6, `the-riemann-integral`, `the-riemann-integral-in-rn-and-jordan-content`, `improper-integrals`, `bounded-variation-and-riemann-stieltjes`, `cantor-set-baire-and-measure-zero`, and `the-fundamental-theorems-of-calculus`; the current closure from `the-lebesgue-integral-and-the-convergence-theorems-examples` already contained every named prerequisite except `improper-integrals`, so I added the missing backward edge.
VERDICT: drift-applied — added improper-integrals (order 165)

### amenable-groups-and-folner-criteria
Read `research/plan-group-theory-track.md` §"GT-13. Amenable Groups and Følner Criteria". The design requires `cayley-graphs-word-metrics-and-quasi-isometry` and `free-products-and-amalgamation`; the current closure from `hyperbolic-spaces-and-hyperbolic-groups-examples` already reaches both, and the later tree/cohomology/profinite pages in the evidence are downstream topics rather than prerequisites of this block.
VERDICT: no-drift

### the-argument-principle-and-rouche
Read `research/plan-complex-analysis-track.md` §"CA-10. The Argument Principle and Rouché's Theorem". The design's explicit `requires` line is CA-9, and the surrounding prose only spends earlier material already inside CA-9's closure, including `contour-integration` and `the-winding-number-and-the-global-cauchy-theorem`; no extra page outside the live closure is made load-bearing.
VERDICT: no-drift

### domains-of-holomorphy-and-pseudoconvexity
Read `research/plan-complex-analysis-track.md` §"SC-4. Domains of Holomorphy, Plurisubharmonicity and Pseudoconvexity". The design's `requires` line names SC-2, SC-1, CA-14, CA-18, CA-19, and `convexity`, and its plane-domain theorem explicitly spends CA-18/CA-19's Weierstrass/Mittag-Leffler construction; those two pages are lower-order but still planned, unpublished, and out of this run, so a hard edge would make SC-4 unbuildable. The authorized repair is to rescope this slot onto those missing prerequisites.
VERDICT: drift-rescoped — build infinite-products-and-weierstrass-factorisation (order 337), mittag-leffler-and-runges-theorem (order 339) instead

### abelian-categories
Read `research/plan-category-theory-track.md` §"MA-8. Abelian Categories". The design's `requires` line names `preadditive-and-additive-categories-and-biproducts`, `limits-and-colimits`, `free-modules-and-exact-sequences`, and `the-structure-of-finite-abelian-groups`; the Freyd/Mitchell additivity discussion is internal page content, not an extra page prerequisite, and the current closure from `preadditive-and-additive-categories-and-biproducts-examples` already contains the full named stack.
VERDICT: no-drift

### pure-pairs-forests-and-path-antipath-classes
Read `research/plan-combinatorics-and-categories.md` §16.2, row 409/410. That scope line adds pure pairs, forest/path-antipath results, and leaf/co-leaf viral preservation, but it does not name a prerequisite beyond the earlier Erdős–Hajnal/blockade machinery already reached from the declared `blockades-combs-and-pattern-graphs`; the live closure already contains `polynomial-rodl-and-viral-equivalence` and the earlier EH pages that row presupposes.
VERDICT: no-drift

### quotient-blockades-and-mixing-relations
Read `research/plan-combinatorics-and-categories.md` §16.2, row 435/436. The scope line is "Mixed-block equivalence, quotients, termination and Lemmas 6.1–6.2" and does not introduce a prerequisite outside the earlier blockade/EH foundation already in closure from `blockades-combs-and-pattern-graphs`.
VERDICT: no-drift
