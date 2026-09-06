# frontier-31a — Alpha step-0 prerequisite-drift review

Each conclusion compares the cited design passage with the current transitive
closure in `research/plan-spec.json`.  The three applied edges were validated
immediately after their respective edits with `node tools/validate-plan.mjs
research/plan-spec.json`.

### the-finite-simple-group-classification-landscape

Read `research/plan-group-theory-track.md`, GT-20.  Its stated prerequisites
are the socle/Onan--Scott, composition-series, and Sylow spines; all are in
the declared closure (the latter two through the socle spine).
VERDICT: no-drift

### koszul-complexes-and-regular-sequences

Read `research/plan-commutative-algebra-track.md`, CA-16.  The design requires
the named commutative-algebra interfaces, HA-1--HA-4 (including the long exact
sequence), tensor products, and free modules; each is already in the closure.
VERDICT: no-drift

### absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus

Read the MT-19 design entry in `research/plan-measure-theory-track.md`.  It
states the AC/Luzin-(N)/sharp-FTC scope but adds no prerequisite beyond the
declared closure; the gauge-integral predecessor is already declared.
VERDICT: no-drift

### geometric-hahn-banach-and-convex-separation

Read `research/plan-functional-analysis-track.md`, FA-5.  Its FA-2, FA-4,
and published elementary-convexity prerequisites are already reached through
the analytic Hahn--Banach predecessor.
VERDICT: no-drift

### infinite-product-measures-and-kolmogorov-extension

Read `research/plan-probability-track.md`, PT-3.  PT-1--PT-2, MT-1--MT-3 and
MT-11, product topology, and the Polish-space interface are all in the
declared closure, including `complete-metrizability-and-baire`.
VERDICT: no-drift

### absolute-convergence-and-the-wiener-algebra

Read `research/plan-fourier-analysis-track.md`, FR-3.  FR-1, FR-2, Parseval,
and FA-18's Wiener lemma are already in the closure.  The weak-derivatives
page is expressly a forward citation only, not a retained prerequisite.
VERDICT: no-drift

### quasilinear-characteristics-and-cauchy-kovalevskaya

Read `research/plan-pde-track.md`, PDE-2.  PDE-1, smooth ODE existence/
uniqueness/dependence, and the inverse/implicit-function interface are in the
closure through the two declared predecessors.
VERDICT: no-drift

### primitive-dirichlet-l-functions-and-functional-equations

Read `research/plan-number-theory-track.md`, NT-14.  NT-13, Gamma theory,
and the fixed-normalization Poisson/Fourier interfaces are already in the
declared closure.
VERDICT: no-drift

### number-fields-rings-of-integers-and-discriminants

Read `research/plan-number-theory-track.md`, NT-19.  The integral-closure,
finite-integral-closure/trace-pairing, finite-separable-extension, and
field-norm/trace interfaces are all already in the closure.
VERDICT: no-drift

### tensor-and-fusion-categories

Read `research/plan-category-theory-track.md`, MA-18.  Rigidity, abelian and
finite-category structure, exactness, and monoidal-category prerequisites are
all reached through `enriched-categories-examples`.
VERDICT: no-drift

### ext-and-balanced-resolutions

Read `research/plan-homological-algebra-track.md`, HA-8.  Delta-functor
universality and derived functors are already in the closure.
VERDICT: no-drift

### yoneda-extensions-and-homological-dimension

Read `research/plan-homological-algebra-track.md`, HA-9.  Balanced Ext,
projective/injective resolutions, and the chain-condition interface are all
already in the closure.
VERDICT: no-drift

### tor-flatness-and-global-dimension

Read `research/plan-homological-algebra-track.md`, HA-10.  In addition to
the header's Ext/Yoneda/tensor/chain-condition inputs, its prose explicitly
cites MOD-3's flatness and projective-implies-flat results; that page had been
absent from the closure and is lower-order and cross-category.
VERDICT: drift-applied — added flatness-and-faithful-flatness (order 111.023)

### universal-coefficients-and-kunneth-theorems

Read `research/plan-homological-algebra-track.md`, HA-11.  Tor, balanced Ext,
and the long-exact-sequence interface named by the design are already in the
closure.
VERDICT: no-drift

### group-cohomology-as-a-derived-functor

Read `research/plan-homological-algebra-track.md`, HA-12.  Its group-algebra
and module correspondence is an explicit required seam and was absent from
the closure; it is lower-order and cross-category, so it was added.
VERDICT: drift-applied — added the-group-algebra-and-representations (order 143)

### schur-multipliers-and-universal-central-extensions

Read `research/plan-group-theory-track.md`, GT-23.  Second cohomology, group
cohomology, Ext, and tensor products are all already reached by the two
declared predecessor paths.
VERDICT: no-drift

### relative-homology-excision-and-mayer-vietoris

Read `research/plan-algebraic-topology-track.md`, AT-3.  Singular homology,
the homology long exact sequence, and metric compactness are already in the
closure.
VERDICT: no-drift

### projective-algebraic-sets-projective-morphisms-and-cones

Read `research/plan-algebraic-geometry-track.md`, AV-3.  AV-1/AV-2 and the
graded-ring/homogeneous-ideal interfaces are already supplied by the declared
affine-morphism predecessor's closure; the projective Zariski topology is
constructed on this page rather than imported as a prime-spectrum dependency.
VERDICT: no-drift

### affine-schemes-and-the-structure-sheaf

Read `research/plan-algebraic-geometry-track.md`, AV-11.  AV-9, AV-10, and
localization were already in closure, but its explicitly required
prime-spectrum Zariski topology was not; the lower-order cross-category edge
was added.
VERDICT: drift-applied — added zariski-topology-on-prime-spectra (order 256.001)

### the-structural-criterion-for-property-star

Read the 433/434 design row in
`research/plan-combinatorics-and-categories.md`.  It makes the preceding
property-star/comb-outcomes result the sole prerequisite, which is declared.
VERDICT: no-drift

### the-exterior-derivative-and-cartan-calculus

Read `research/plan-differential-geometry-track.md`, DG-12.  DG-9, DG-10,
and DG-11 — vector-field flow/Lie derivative, Frobenius, and tensor/form
interfaces — are all already declared in the closure.
VERDICT: no-drift

### verma-modules-and-shapovalov-forms

Read `research/plan-representation-theory-lie-track.md`, RL-2.  The design
places the Verma/PBW and central-character material immediately after the
RL-1 spine; the Harish--Chandra predecessor closure already supplies the
root-system and highest-weight interfaces used here.
VERDICT: no-drift

### brauer-induction-and-elementary-subgroups

Read `research/plan-representation-theory-groups-track.md`, RG-2.  RG-1 and
the four abstract-algebra representation pages are already in the closure of
the declared Artin-induction predecessor.
VERDICT: no-drift

### gradient-like-vector-fields-and-morse-trajectories

Read `research/plan-differential-topology-track.md`, DT-3.  DT-1--DT-2 and
the Riemannian-gradient and flow prerequisites are all already in the
declared closure.
VERDICT: no-drift

### the-arithmetical-hierarchy-and-posts-theorem

Read `research/plan-computability-theory-track.md`, TC-17.  Its sole stated
predecessor, acceptable numberings/SMN/the recursion theorem, is declared.
VERDICT: no-drift

### time-and-space-hierarchy-theorems

Read `research/plan-computability-theory-track.md`, TC-24.  Space
complexity/Savitch/TQBF and halting-problem diagonalization are both declared.
VERDICT: no-drift

### logarithmic-space-nl-and-reachability

Read `research/plan-computability-theory-track.md`, TC-25.  Space
complexity/Savitch/TQBF and graph connectivity are both declared.
VERDICT: no-drift
