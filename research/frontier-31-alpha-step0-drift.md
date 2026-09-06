# frontier-31 alpha prerequisite-drift review

Reviewed the assigned A pages against the cited design passages and the
current `research/plan-spec.json` closures. Candidate ids in the evidence were
treated as pointers to the passages, not as findings. Each post-edit validation
had the pre-existing unrelated `distributions-integral-manifolds-and-the-frobenius-theorem`
→ `the-seifert-van-kampen-theorem` undeclared-item error; none reported an
error introduced by the edits below.

### the-finite-simple-group-classification-landscape
Read `research/plan-group-theory-track.md` GT-20 (L2548): the design requires
`socles-and-the-onan-scott-landscape`, composition series/solvability, and
Sylow/nilpotence. The latter two were already transitive; the published socles
page was absent, so I added the backward edge.
VERDICT: drift-applied — added socles-and-the-onan-scott-landscape (order 71.007)

### schur-multipliers-and-universal-central-extensions
Read `research/plan-group-theory-track.md` GT-22 (L2860): the stated inputs
are group cohomology, second cohomology, Ext, and tensor products. All are in
the declared closure.
VERDICT: no-drift

### koszul-complexes-and-regular-sequences
Read `research/plan-commutative-algebra-track.md` CA-16 (L1314): besides
CA-2 and CA-10--CA-13, it requires the HA-1--HA-4 complexes-through-long-exact-
sequences route. The closure omitted that route, so I added its transitive
reduction `long-exact-sequences-in-homology`. Since it was forward, I moved
the full direct-descendant chain together after its companion, preserving every
existing edge as backward.
VERDICT: drift-reordered — koszul-complexes-and-regular-sequences (order 256.003 -> 365.901), koszul-complexes-and-regular-sequences-examples (order 256.004 -> 365.902), depth-and-cohen-macaulay-modules (order 256.005 -> 365.903), depth-and-cohen-macaulay-modules-examples (order 256.006 -> 365.904), regular-local-rings-and-homological-dimension (order 256.007 -> 365.905), regular-local-rings-and-homological-dimension-examples (order 256.008 -> 365.906), absolute-values-completions-and-p-adic-numbers (order 302.017 -> 365.907), absolute-values-completions-and-p-adic-numbers-examples (order 302.018 -> 365.908), hilbert-symbols-and-the-quadratic-local-global-principle (order 348.017 -> 365.909), hilbert-symbols-and-the-quadratic-local-global-principle-examples (order 348.018 -> 365.910), number-fields-rings-of-integers-and-discriminants (order 348.019 -> 365.911), number-fields-rings-of-integers-and-discriminants-examples (order 348.02 -> 365.912), prime-ideal-decomposition-ramification-and-the-different (order 348.021 -> 365.913), prime-ideal-decomposition-ramification-and-the-different-examples (order 348.022 -> 365.914), decomposition-inertia-and-frobenius (order 348.023 -> 365.915), decomposition-inertia-and-frobenius-examples (order 348.024 -> 365.916), minkowski-theory-and-number-field-class-groups (order 348.025 -> 365.917), minkowski-theory-and-number-field-class-groups-examples (order 348.026 -> 365.918), dirichlets-unit-theorem-regulators-and-s-units (order 348.027 -> 365.919), dirichlets-unit-theorem-regulators-and-s-units-examples (order 348.028 -> 365.920), cyclotomic-arithmetic-and-reciprocity-via-frobenius (order 348.029 -> 365.921), cyclotomic-arithmetic-and-reciprocity-via-frobenius-examples (order 348.03 -> 365.922)

### absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus
Read `research/plan-measure-theory-track.md` MT-19 (L3475): its seam amendment
retains the HK/Lebesgue comparison at this page and explicitly adds RC-11,
`the-gauge-integral-and-cousins-lemma`. The other named measure and calculus
inputs were already in closure; RC-11 was not.
VERDICT: drift-applied — added the-gauge-integral-and-cousins-lemma (order 288.00021)

### geometric-hahn-banach-and-convex-separation
Read `research/plan-functional-analysis-track.md` FA-5 (L525): its geometric
separation argument requires the stated FA-2 and FA-4 convexity and
Hahn--Banach groundwork, all already in the declared closure.
VERDICT: no-drift

### infinite-product-measures-and-kolmogorov-extension
Read `research/plan-probability-track.md` PT-3 (L435), together with its
Polish-space seam statement: arbitrary-index Kolmogorov extension waits for
the topology definition of Polish space. Its unique owner is the published
`complete-metrizability-and-baire`, absent from this closure, so I added it.
VERDICT: drift-applied — added complete-metrizability-and-baire (order 277)

### absolute-convergence-and-the-wiener-algebra
Read `research/plan-fourier-analysis-track.md` FR-3 (L297): FR-1, FR-2, and
the stated FA Fourier foundation are all in closure. The Sobolev reference is
an explicit later citation, not a prerequisite of this page.
VERDICT: no-drift

### quasilinear-characteristics-and-cauchy-kovalevskaya
Read `research/plan-pde-track.md` PDE-2 (L567): the design requires PDE-1,
the published smooth-dependence ODE theorem, and the inverse/implicit-function
theorems. The smooth-dependence theorem is owned by
`euclidean-ordinary-differential-equations-with-smooth-dependence`, which was
absent and forward. I added that edge and moved every direct descendant of
PDE-2 after its companion so the full dependency chain remains backward.
VERDICT: drift-reordered — quasilinear-characteristics-and-cauchy-kovalevskaya (order 288.143 -> 458.001), quasilinear-characteristics-and-cauchy-kovalevskaya-examples (order 288.144 -> 458.002), harmonic-functions-and-mean-values-in-rn (order 288.145 -> 458.003), harmonic-functions-and-mean-values-in-rn-examples (order 288.146 -> 458.004), maximum-principles-harnack-and-liouville-in-rn (order 288.147 -> 458.005), maximum-principles-harnack-and-liouville-in-rn-examples (order 288.148 -> 458.006), fundamental-solutions-newtonian-potentials-and-green-functions (order 288.149 -> 458.007), fundamental-solutions-newtonian-potentials-and-green-functions-examples (order 288.15 -> 458.008), poisson-problems-and-interior-harmonic-estimates (order 288.151 -> 458.009), poisson-problems-and-interior-harmonic-estimates-examples (order 288.152 -> 458.010), the-heat-kernel-and-the-cauchy-problem (order 288.153 -> 458.011), the-heat-kernel-and-the-cauchy-problem-examples (order 288.154 -> 458.012), heat-equation-maximum-principles-duhamel-and-smoothing (order 288.155 -> 458.013), heat-equation-maximum-principles-duhamel-and-smoothing-examples (order 288.156 -> 458.014), wave-equation-representation-formulas (order 288.157 -> 458.015), wave-equation-representation-formulas-examples (order 288.158 -> 458.016), wave-energy-finite-propagation-and-huygens (order 288.159 -> 458.017), wave-energy-finite-propagation-and-huygens-examples (order 288.16 -> 458.018), weak-derivatives-and-sobolev-spaces (order 288.161 -> 458.019), weak-derivatives-and-sobolev-spaces-examples (order 288.162 -> 458.020), smooth-approximation-and-sobolev-extension (order 288.163 -> 458.021), smooth-approximation-and-sobolev-extension-examples (order 288.164 -> 458.022), sobolev-traces-and-zero-boundary-values (order 288.165 -> 458.023), sobolev-traces-and-zero-boundary-values-examples (order 288.166 -> 458.024), sobolev-poincare-and-morrey-inequalities (order 288.167 -> 458.025), sobolev-poincare-and-morrey-inequalities-examples (order 288.168 -> 458.026), rellich-kondrachov-and-sobolev-compactness (order 288.169 -> 458.027), rellich-kondrachov-and-sobolev-compactness-examples (order 288.17 -> 458.028), lax-milgram-and-weak-elliptic-solutions (order 288.171 -> 458.029), lax-milgram-and-weak-elliptic-solutions-examples (order 288.172 -> 458.030), fredholm-elliptic-problems-and-the-elliptic-spectrum (order 288.173 -> 458.031), fredholm-elliptic-problems-and-the-elliptic-spectrum-examples (order 288.174 -> 458.032), interior-and-boundary-sobolev-elliptic-regularity (order 288.175 -> 458.033), interior-and-boundary-sobolev-elliptic-regularity-examples (order 288.176 -> 458.034), schauder-and-lp-elliptic-estimates (order 288.177 -> 458.035), schauder-and-lp-elliptic-estimates-examples (order 288.178 -> 458.036), weak-elliptic-maximum-principles-and-holder-regularity (order 288.179 -> 458.037), weak-elliptic-maximum-principles-and-holder-regularity-examples (order 288.18 -> 458.038), the-direct-method-and-euler-lagrange-equations (order 288.181 -> 458.039), the-direct-method-and-euler-lagrange-equations-examples (order 288.182 -> 458.040), constrained-variational-problems-and-variational-inequalities (order 288.183 -> 458.041), constrained-variational-problems-and-variational-inequalities-examples (order 288.184 -> 458.042), strongly-continuous-semigroups-and-hille-yosida (order 288.185 -> 458.043), strongly-continuous-semigroups-and-hille-yosida-examples (order 288.186 -> 458.044), analytic-semigroups-and-linear-evolution-equations (order 288.187 -> 458.045), analytic-semigroups-and-linear-evolution-equations-examples (order 288.188 -> 458.046), hamilton-jacobi-equations-and-viscosity-solutions (order 288.189 -> 458.047), hamilton-jacobi-equations-and-viscosity-solutions-examples (order 288.19 -> 458.048), scalar-conservation-laws-and-entropy-solutions (order 288.191 -> 458.049), scalar-conservation-laws-and-entropy-solutions-examples (order 288.192 -> 458.050)

### primitive-dirichlet-l-functions-and-functional-equations
Read `research/plan-number-theory-track.md` NT-14 (L1286): NT-13, gamma, and
the planned Fourier/distribution inputs named there are already transitive
requirements in the declared closure.
VERDICT: no-drift

### number-fields-rings-of-integers-and-discriminants
Read `research/plan-number-theory-track.md` NT-19 (L1651): CA-6, CA-9, GA-1,
and GA-4 are all already in closure. This page's order moved only as a
necessary descendant of the repaired Koszul chain, not for a prerequisite
missing from its own design closure.
VERDICT: no-drift

### tensor-and-fusion-categories
Read `research/plan-category-theory-track.md` CT-22 (L2992): the stated
duality/rigidity, abelian, subobject, exactness, and monoidal foundations are
all declared transitively.
VERDICT: no-drift

### ext-and-balanced-resolutions
Read `research/plan-homological-algebra-track.md` HA-8 (L1661): the required
delta-functor, derived-functor, and resolution material is already in closure.
VERDICT: no-drift

### relative-homology-excision-and-mayer-vietoris
Read `research/plan-algebraic-topology-track.md` AT-3 (L503): singular chains,
long exact sequences, compactness, and the stated pair/excision foundations
are all in closure.
VERDICT: no-drift

### projective-algebraic-sets-projective-morphisms-and-cones
Read `research/plan-algebraic-geometry-track.md` AV-3 (L210): AV-1, AV-2, and
the graded/homogeneous coordinate interfaces named in the design are already
declared transitively.
VERDICT: no-drift

### affine-schemes-and-the-structure-sheaf
Read `research/plan-algebraic-geometry-track.md` scheme-theory entry (L663):
the stated affine, Zariski, localisation, and sheaf inputs are all in closure.
VERDICT: no-drift

### the-structural-criterion-for-property-star
Read `research/plan-combinatorics-and-categories.md` Lemma 5.1 entry (L3916):
it specifies the property-star criterion and its partition, lifting, and
geometric layers, but no additional plan page prerequisite beyond the declared
property-star foundation.
VERDICT: no-drift

### the-exterior-derivative-and-cartan-calculus
Read `research/plan-differential-geometry-track.md` DG-12 (L2964): DG-9,
DG-10, and DG-11 are the stated inputs and are all in the closure.
VERDICT: no-drift

### verma-modules-and-shapovalov-forms
Read `research/plan-representation-theory-lie-track.md` reading-order entry
(L108): the designated Harish--Chandra and Lie-theoretic preparation is
already declared; the passage introduces no omitted named prerequisite.
VERDICT: no-drift

### brauer-induction-and-elementary-subgroups
Read `research/plan-representation-theory-groups-track.md` RG-2 (L261): RG-1,
group algebras, characters, Maschke, and induced representations are all in
the closure.
VERDICT: no-drift

### gradient-like-vector-fields-and-morse-trajectories
Read `research/plan-differential-topology-track.md` DT-3 (L397): DT-1, DT-2,
and the Riemannian gradient/flow inputs stated by the design are all in
closure.
VERDICT: no-drift

### the-arithmetical-hierarchy-and-posts-theorem
Read `research/plan-computability-theory-track.md` CT-5 (L757): acceptable
numberings are the stated prerequisite and are declared.
VERDICT: no-drift

### kolmogorov-complexity-and-algorithmic-randomness
Read `research/plan-computability-theory-track.md` CT-17 (L1501): acceptable
numberings, randomized complexity, and finite probability are all in closure.
VERDICT: no-drift

### time-and-space-hierarchy-theorems
Read `research/plan-computability-theory-track.md` CT-11 (L1018): the space,
Savitch, and diagonalisation prerequisites are all declared transitively.
VERDICT: no-drift

### logarithmic-space-nl-and-reachability
Read `research/plan-computability-theory-track.md` CT-12 (L1053): the required
space/Savitch and graph foundations are already in closure.
VERDICT: no-drift

### boolean-circuits-and-nonuniform-complexity
Read `research/plan-computability-theory-track.md` CT-13 (L1090): Cook--Levin
and finite-counting inputs are already in closure.
VERDICT: no-drift

### counting-complexity-and-sharpp
Read `research/plan-computability-theory-track.md` CT-15 (L1199): randomized
complexity and Cook--Levin are both declared transitively.
VERDICT: no-drift

### interactive-proof-systems-and-public-coins
Read `research/plan-computability-theory-track.md` CT-16 (L1240): randomized
complexity and Savitch's theorem are both already in closure.
VERDICT: no-drift
