# Prerequisite audit: quantum algorithms

Status: draft planning, 2026-10-14. The six owner inventories and source ledgers have been integrated. This audit records inspected root supplier candidates, exact shared QC interfaces, and the namespace boundary; the merged item rows and source ledgers remain authoritative for exact dependencies, proof routes, and unresolved holds. No proposal item is certified by this audit. Physics-namespace items are never logical suppliers for this category.

## Root mathematical supplier candidates

| Need | Existing root item(s) found | Current disposition |
|---|---|---|
| Finite complex inner-product spaces, adjoints, norms, and spectral/SVD facts | `def-inner-product-space`; `def-real-and-complex-inner-product-space`; `def-adjoint-of-a-linear-map-between-inner-product-spaces`; `def-operator-norm-on-a-finite-dimensional-inner-product-space`; `def-non-negative-and-positive-operator`; `thm-complex-spectral-theorem-for-normal-endomorphisms`; `thm-operator-norm-is-the-largest-singular-value` | These are current published root carriers. The inner product convention is linear in the first argument. Section authors must check exact finite-dimensional scope, composition hypotheses, trace/norm conventions, and whether a named theorem proves the use made in each QA claim. QC01 is to reuse these rather than duplicate them. |
| Matrix trace and finite probability | `def-trace-of-a-square-matrix`; `prop-trace-is-linear`; `thm-trace-of-ab-equals-trace-of-ba`; `def-finite-probability-space-and-event`; `lem-finite-probability-basic-laws` | Published mathematical interfaces exist. Verify dimension, positivity, and normalization conclusions separately; no measurement or outcome law is imported from physics. |
| Finite groups, characters, fields, and modular arithmetic | `def-additive-character-of-a-finite-abelian-group`; `def-finite-field-and-its-order`; `thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form`; `thm-chinese-remainder-theorem`; `def-addition-and-multiplication-modulo-n`; `def-integers-modulo-n` | Published root candidates. QA05 still requires the normalized finite-abelian Fourier transform, its convention, inversion/Parseval/convolution, and subgroup-annihilator results; the available cyclic and representation-theoretic character items must not be treated as proving the whole general finite-abelian interface without a matching statement. |
| Continued fractions and rational reconstruction | `def-regular-continued-fraction`; `def-convergents-of-regular-continued-fraction`; `lem-continued-fraction-error-bound`; `thm-normalized-finite-continued-fraction-uniqueness`; `thm-continued-fraction-convergents-are-best-approximations` | Published root candidates. QA08 must state the precise approximation interval and denominator bound needed to recover a convergent; it must not infer that a sampled denominator is the group order. |
| Classical circuits and probability/cost context | `def-boolean-circuit-size-depth-fanin-and-basis`; `def-probabilistic-polynomial-time-machine-interface`; `def-polynomial-time-many-one-reduction` | Published root candidates. They do not supply reversible quantum circuits, uniformity or quantum acceptance definitions; those interfaces are assigned to QC and QA. |
| Promise domains | `def-promise-problem` (home: `the-polynomial-hierarchy-and-relativization`) | Published root definition: a promise is disjoint sets $Y,N\subseteq\{0,1\}^*$ with arbitrary answers outside their union. Reuse this exact item for promise domains; do not duplicate it in QC. QC14 supplies only quantum circuit/uniformity/access and acceptance semantics. |
| Finite Markov chains and graph/matrix facts | `def-time-homogeneous-markov-chain-with-transition-kernel`; `thm-finite-dimensional-laws-of-a-markov-chain`; `thm-time-reversal-of-a-stationary-markov-chain`; current finite graph and spectral-graph items | Current root candidates. The QA walk branch will use a finite transition matrix, stationary distribution, detailed balance, and an explicit discriminant; it must verify the conditions and may state a narrower finite result directly rather than import a more general theorem with unused measure-theoretic or choice hypotheses. |

The item-level inventories remain responsible for exact `deps`. An available
published supplier is included only when its proved statement and hypotheses
actually establish the claim being used. Any missing matrix exponential,
finite Fourier, Markov-chain, arithmetic, polynomial approximation, or
complexity lemma remains an owned local supplier proposal with its own complete
proof obligation. An unauthored supplier is unresolved; source citations do
not fill the dependency.

### Matrix and probability interfaces for advanced QA pages

QA27–30's supplier audit by qa_r5 found these current published root
mathematical items for finite matrices: `thm-singular-value-decomposition`,
`thm-operator-norm-is-the-largest-singular-value`,
`def-singular-values-of-an-endomorphism`, `prop-singular-values-are-well-defined`,
`thm-non-negative-operator-characterisations`,
`thm-non-negative-square-root-exists-and-is-unique`, `prop-adjoint-algebra`,
`def-trace-of-a-square-matrix`, `prop-trace-is-linear`,
`thm-trace-of-ab-equals-trace-of-ba`,
`def-functional-calculus-for-a-normal-endomorphism`, and
`prop-functional-calculus-for-normal-endomorphisms`. Their homes are the
existing spectral/SVD, inner-product, and matrix-of-a-linear-map A pages, and
the item-level dependency closure remains the exact mathematical authority.

For probability bounds, `def-finite-probability-space-and-event`,
`lem-finite-probability-basic-laws`, and
`lem-chernoff-bound-for-bernoulli-trials` are published suppliers. The
available `thm-hoeffding-independent-bounded-sums` is draft and is not used as
a supplier. The finite-dimensional
`lem-finite-dimensional-golden-thompson-trace-inequality` is also draft; qa_r5
audited its exact Hermitian statement and complete finite-matrix proof and
proposes it provisionally for the MMW route with an explicit review/publication
hold. It remains an unresolved draft dependency, not a published or accepted
supplier, and the proposal does not duplicate it locally. No dedicated general
finite-matrix exponential theorem or SDP strong-duality supplier was found. The existing
`ex-matrix-exponential-as-the-lie-group-exponential` has a narrower scope and
does not establish arbitrary Hermitian matrix exponentials. Any QA claim using
matrix exponentials, matrix multiplicative weights, or SDP duality must add
exact local supplier contracts and complete proof obligations, or state an
explicit input promise that makes the claim independent of the missing result.

### QA05 finite-abelian Fourier suppliers

QA05 is a proposed local finite-group Fourier interface; the existing cyclic
DFT and character pages are convention checks, not substitutes for the general
finite-abelian proof. The planned ordered chain is
`def-qa-finite-abelian-character-dual` →
`thm-qa-finite-abelian-character-dual-is-finite-abelian-group` →
`lem-qa-cyclic-group-has-n-characters` and
`lem-qa-character-dual-of-a-product-factors` →
`thm-qa-finite-abelian-dual-has-same-cardinality` →
`thm-qa-finite-abelian-dual-character-orthogonality` →
`def-qa-normalized-finite-abelian-fourier-transform` →
`thm-qa-finite-abelian-fourier-transform-is-unitary` →
`thm-qa-finite-abelian-fourier-inversion` and
`thm-qa-finite-abelian-parseval`. The transform convention is
`|G|^{-1/2} sum_x f(x) conjugate(chi(x))`. The separate unnormalized
convolution definition is
`def-qa-finite-abelian-convolution`, with result
`thm-qa-finite-abelian-fourier-convolution` recording its exact
`sqrt(|G|)` normalization factor.

The subgroup branch is
`def-qa-finite-abelian-subgroup-annihilator` →
`thm-qa-finite-abelian-subgroup-annihilator-cardinality` →
`thm-qa-finite-abelian-evaluation-map-isomorphism` →
`thm-qa-finite-abelian-double-annihilator`; the double-annihilator proof must
include character separation from the invariant-factor decomposition. The
coset calculation is `thm-qa-finite-abelian-coset-fourier-transform` and fixes
its phase convention. QA06 consumes the transform, unitary, inversion and
Parseval suppliers; QA10 consumes the subgroup/annihilator results and the
transform/unitarity; QA31 may consume the transform/unitarity/inversion. QA04
proves its specialized `F_2^n` Hadamard kernel locally and does not depend on
QA05.

The exact existing root dependencies checked by QA05 are
`def-additive-character-of-a-finite-abelian-group`,
`lem-additive-characters-are-one-dimensional-complex-representations`,
`lem-additive-character-orthogonality-from-representation-orthogonality`,
`thm-fundamental-theorem-of-finite-abelian-groups-invariant-factor-form`,
`thm-classification-of-cyclic-groups`, `thm-complex-nth-roots-and-roots-of-unity`,
`def-group`, `def-group-homomorphism`, `lem-group-homomorphism-basic-properties`,
`def-subgroup`, `def-quotient-group`, `thm-quotient-group-laws`,
`thm-lagrange`, `thm-product-rule`, `def-finite-cardinality`,
`def-function-space`, `def-finite-sum-in-a-commutative-monoid`,
`lem-finite-sum-reindexing-and-fubini`, `def-rational-power`,
`lem-rational-power-laws`, `thm-complex-numbers-form-a-field`, and
`lem-complex-conjugation-and-modulus-laws`. The root cyclic transform
cross-checks are `def-unitary-discrete-fourier-transform-on-z-mod-n`,
`lem-orthogonality-of-characters-on-a-finite-cyclic-group`,
`thm-finite-fourier-inversion`, `thm-finite-parseval-and-plancherel`,
`def-cyclic-convolution-on-z-mod-n`, and
`lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product`;
they are used directly only where QA06 states an actual cyclic interface and do
not replace QA05's general proof. Their root page homes are included in the
QA05/QA06 `requires` closures.

## Inherited root prerequisite-closure status

The [actual combined check](../quantum-planning-review/mechanical-check.json) remains FAIL: its direct QA/QC proposal rows, item graph, local order and page reachability pass, but transitive closure reaches ten existing root remark items (rem-heine-criterion-choice-cost, rem-sup-conventions, rem-metric-axiom-conventions, rem-real-and-complex-normed-space-convention, rem-real-exponents-deferred, rem-zero-times-infinity-convention-for-pointwise-products, rem-complex-plane-euclidean-dictionary, rem-euclidean-topology-dictionary, rem-complex-contours-as-planar-rectifiable-paths, rem-plane-star-shaped-and-convex-dictionary). The [SHA-bound repair plan](../quantum-planning-review/prerequisite-repairs.json) contains 18 existing-consumer recipes and 14 typed prerequisite suppliers. The [planned-repair check](../quantum-planning-review/planned-repair-check.json) reports PASS for a virtual 2729-node closure with zero checker errors. That result is contingent on applying the recipes: the plan says actual library closure is HOLD, and no root item was changed by this QA planning integration.

## Shared QC interfaces

The QC integrator reserved the following exact IDs as the planned QA boundary;
QC report reconciliation may clarify hypotheses, but QA will not redefine
these items or make a reverse QC-to-QA edge:

- Finite-dimensional matrix and notation interface: QC01 owns
  `def-qc-dirac-notation-conversion`, which translates the root linear-first
  inner product to Dirac brackets, states bra linearity, and fixes the matrix
  coordinates of $|x\rangle\langle y|$ as $xy^\dagger$. QA items that use
  amplitudes, bras/kets, adjoints, or rank-one matrix formulas should consume
  this exact supplier and retain the corresponding QC01 page in their
  `requires` closure.

- Registers and tensor order: `def-qc-register-and-computational-basis`,
  `def-qc-ordered-bitstring-encoding`,
  `def-qc-tensor-register-and-permutation`, `def-qc-partial-trace`.
- State, channels, and measurement: `def-qc-pure-state-and-ray`,
  `def-qc-density-operator`, `def-qc-ensemble-and-purification`,
  `def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`,
  `def-qc-instrument-and-conditional-state`, `def-qc-quantum-channel`,
  `thm-qc-finite-kraus-choi-stinespring-equivalence`,
  `def-qc-trace-distance`, `def-qc-fidelity`, `def-qc-diamond-norm`,
  `thm-qc-diamond-norm-ancilla-dimension-bound`,
  `thm-qc-measurement-variation-at-most-trace-distance`,
  `thm-qc-channel-composition-hybrid-bound`,
  `thm-qc-channel-tensor-error-bound`.
- Circuit access and semantics: `def-qc-controlled-unitary-access`,
  `def-qc-inverse-unitary-access`, `def-qc-relative-phase`,
  `def-qc-reflection`, `thm-qc-reflection-unitary-involution`,
  `thm-qc-rank-one-reflection-phase-and-control-sign`,
  `def-qc-circuit-syntax-and-register-order`,
  `def-qc-circuit-denotational-semantics`,
  `def-qc-classical-control-and-measurement-circuit`,
  `def-qc-clean-and-dirty-ancillas`, `alg-qc-reversible-embedding`,
  `thm-qc-reversible-embedding-cost`, `def-qc-coherent-function-oracle`.
- Computation and state preparation: `def-qc-uniform-circuit-family`,
  `def-qc-promise-computation-model`,
  `def-qc-quantum-acceptance-probability`,
  `def-qc-circuit-cost-model`, `def-qc-bqp-promise-class`,
  `alg-qc-bounded-error-amplification`, `thm-qc-bounded-error-amplification-correct`,
  `def-qc-state-preparation-cost-model`, `alg-qc-state-preparation`,
  `thm-qc-state-preparation-cost`,
  `thm-qc-state-preparation-rotation-level-upper-bound`.
- Exact/approximate gate compilation and elementary resources:
  `def-qc-one-qubit-gate-alphabet-and-rotations`,
  `def-qc-controlled-phase-rotation`, `def-qc-elementary-circuit-resources`,
  `alg-qc-solovay-kitaev-unitary-compiler`,
  `thm-qc-solovay-kitaev-error-and-resource-bound`.
- Global and controlled phase (both QC08 `controlled-gates-phase-and-entanglement`):
  `thm-qc-standalone-global-phase-invariance` and
  `thm-qc-controlled-global-phase-is-relative-phase`.

These IDs are present in the reconciled QC proposal. QA uses each exact
contract only when its item-level dependency applies; the final QC item
inventory remains the authority for its hypotheses, proof obligations, and
root dependencies. QC01 binds the finite-dimensional matrix interfaces to
audited root suppliers. Algorithms must still say whether controlled/inverse
access, state preparation, or ancilla cleanup is required; shared access and
state-preparation procedures carry the explicit costs in their contracts.

QC14's `def-qc-uniform-circuit-family` uses a fixed deterministic generator on
input $1^n$ that emits the full self-delimiting gate-list for $C_n$ in
polynomial time, over a fixed finite labeled gate alphabet with binary wire
labels. Input loading, clean ancillas, output registers, and the classical
decision predicate are explicit; gate matrices have exact finite definitions.
This is not silently identified with a polynomial-time indexed-gate generator
or with the stronger root `def-logspace-uniform-circuit-family`; a conversion
requires its own finite-encoding proof. QA's promise-computation and class
definitions inherit this exact QC14 choice.

The root inner product is linear in its first argument. QC's shared Dirac
notation is $\langle x|y\rangle_D=\langle y,x\rangle_{root}$ and
$\langle x|z\rangle$ is the linear functional $z\mapsto\langle z,x\rangle_{root}$.
Consequently $|x\rangle\langle y|$ maps $z$ to $\langle z,y\rangle_{root}x$
and has coordinate matrix $xy^{\dagger}$. QA proofs must translate textbook
formulas that use the conjugate convention rather than copy them verbatim.

QC-owned page homes are `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
(QC01), `registers-tensor-products-and-partial-trace` (QC02),
`pure-and-mixed-states-ensembles-and-schmidt-decomposition` (QC03),
`measurements-povms-and-instruments` (QC04),
`channels-kraus-choi-and-stinespring-representations` (QC05),
`trace-distance-fidelity-and-information-limits` (QC06),
`qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (QC07),
`controlled-gates-phase-and-entanglement` (QC08),
`circuit-syntax-denotational-semantics-and-measurement` (QC09),
`reversible-computation-ancillas-and-coherent-oracles` (QC10),
`continuous-gate-universality-and-exact-synthesis` (QC11),
`approximate-universality-and-solovay-kitaev` (QC12),
`clifford-t-exact-and-approximate-synthesis` (QC13),
`uniform-circuit-families-promise-problems-and-complexity` (QC14),
`pauli-and-clifford-groups-binary-symplectic-tableaux` (QC15),
`stabilizer-circuits-and-gottesman-knill-simulation` (QC16),
`bell-states-teleportation-and-dense-coding` (QC17),
`classical-and-quantum-error-correcting-codes` (QC18),
`knill-laflamme-recovery-and-subsystem-codes` (QC19),
`stabilizer-css-codes-syndromes-and-procedures` (QC20),
`noise-fault-tolerance-concatenation-and-thresholds` (QC21),
`graph-states-and-measurement-based-computation` (QC22),
`circuit-optimization-resource-tradeoffs-and-lower-bounds` (QC23), and
`state-preparation-isometry-synthesis-and-limits` (QC24). Only QC pages whose
items an A-page proposal actually consumes belong in its `requires` closure.
The gate-compiler homes are QC07 for `def-qc-one-qubit-gate-alphabet-and-rotations`,
QC08 for `def-qc-controlled-phase-rotation`, QC09 for
`def-qc-elementary-circuit-resources`, and QC12 for
`alg-qc-solovay-kitaev-unitary-compiler` plus
`thm-qc-solovay-kitaev-error-and-resource-bound`.

The QC10 reversible-circuit cost theorem is fanout-sensitive. A fresh target
copy uses $X(t)$ followed by CNOT from source to target; a shared value is
copied with round-based CNOT fanout trees and then uncomputed. For a Boolean
circuit of size $S$, edge count $E$, depth $D$, maximum per-wire per-layer
fanout $F$, and $m$ outputs, the proposed reversible compiler charges
$O(S+E+m)$ gates/work and depth
$2D(2\lceil\log_2(F+1)\rceil+3)+2\lceil\log_2(m+1)\rceil+1$. A source
DAG's depth alone does not bound coherent fanout depth. QA query bounds remain
at the abstract oracle level unless the corresponding circuit is explicitly
compiled and its gate, width, depth, ancilla, and classical preprocessing costs
are included.

## Physics-library review boundary

The existing `physics/library/non-relativistic-quantum-mechanics/` collection
contains state geometry, composite systems, Born probabilities, measurement,
instruments, and dynamics. It is read for conventions and proof ideas. The
following carriers illustrate why its namespace cannot be silently imported:

- `physics/items/def-nrqm-state-geometry-state-vectors-and-rays` has
  `domain: mathematics` and defines nonzero vectors, unit vectors, rays,
  normalization, and phase classes using root Hilbert-space suppliers. It can
  inform a root-local definition, but its ID is not a resolving root supplier.
- `physics/items/def-nrqm-state-geometry-pure-mixed-states-and-purity` is a
  mathematical density-operator definition for general Hilbert spaces and has
  a large trace-class/choice dependency closure. QA only needs finite
  dimensions, so the QC state interface should state and prove the finite
  specialization from root-local mathematical dependencies.
- `physics/items/lem-nrqm-state-geometry-ray-to-rank-one-projection` is a
  proved mathematical lemma but depends on the physics-namespace ray
  definition. Its argument can guide a separately authored finite-dimensional
  root lemma; it cannot close that proof by citation alone.
- `physics/items/def-nrqm-state-geometry-framework-state-space` imports the
  declared physical state postulate and is therefore not a mathematical
  supplier for this algorithm category.
- `physics/items/def-nrqm-measurement-framework-declared-measurements-and-instruments`
  and the `physics-theorem` measurement results describe adopted physical
  formulations or consequences conditional on them. They are never QA proof
  premises. The QA probability law is defined mathematically from finite
  density matrices and effects; its positivity and normalization are proved
  in root-local QC suppliers.

The source ledgers preserve source-by-source scope and any physically formulated material read by section authors; physical material is convention context or excluded provenance only. No physical postulate, physical theorem, experiment, observation, or remark may be in `deps`, `justified_by`, a proof premise, or an algorithm correctness route.

## Relevant mathematical proofs inspected in the physics namespace

The following existing proof bodies were read as mathematical source context;
their local proofs and hypotheses identify what a finite-dimensional root
supplier must reproduce or specialize:

| Physics carrier | Mathematical content observed | QA disposition |
|---|---|---|
| `lem-nrqm-state-geometry-normalization-and-phase-classes` and `lem-nrqm-state-geometry-ray-to-rank-one-projection` | Unit representatives of a ray differ by a phase; a normalized rank-one operator is the orthogonal rank-one projection. The proof uses the physics ray definition plus root inner-product/projection facts. | Translate the phase convention and prove a root-local finite-dimensional statement from QC's state definitions; do not use either physics ID as a dependency. |
| `lem-nrqm-composites-rank-one-operator-calculus` | For $T_{u,v}x=\langle x,v\rangle u$, establishes boundedness, trace class, trace norm $\|u\|\|v\|$, trace $\langle u,v\rangle$, adjoint, bounded-operator products, trace-class products, and trace pairing. It is stated on general Hilbert spaces and carries a countable-choice hypothesis. | QC may use simpler finite matrix outer-product/trace calculations from root linear algebra. If an infinite-dimensional statement is needed, it requires an explicit root-local proof and choice accounting; the physics lemma itself is not imported. |
| `lem-nrqm-composites-density-and-scalar-spectral-probability` | Uses compact self-adjoint spectral decomposition and trace-class arguments to expand density operators; proves PVM outcome set functions are probability measures and records scalar moments for self-adjoint operators. Its hypotheses include Countable Choice and, for a moment clause, Choice and unbounded PVM calculus. | QA adopts only a finite-dimensional density/effect law as a definition and proves positivity/normalization locally. No general PVM or unbounded spectral law is needed for finite circuit outputs. |
| `lem-nrqm-measurement-selective-luders-update` | For a projection $P$ and nonzero outcome weight, proves $P\rho P/p$ is positive trace class of trace one, supported in $\operatorname{ran}P$, and gives its pure-state formula. It relies on infinite-dimensional trace-class cyclicity/ideal facts. | A local finite-dimensional compression lemma may follow from QC's matrix trace and state definitions; the proof must state the zero-probability branch separately and translate the inner-product convention. |
| `lem-nrqm-measurement-nonselective-luders-map` | For finite/countable orthogonal projections with strong sum $I$, proves trace-norm convergence of the Kraus sum, trace preservation, commutation/support identities, discarded-outcome ensemble, and a coherence example. | QA circuits have finitely many outcomes/register bits. A finite sum proof may be supplied locally; do not import the strong-sum or infinite trace-class claims. |
| `pthm-nrqm-measurement-finite-effects-dilation` and `pthm-nrqm-measurement-countable-kraus-instruments` | Conditional measurement statements are tied to adopted framework postulates; the countable theorem also uses countable Kraus normalization and repeatability hypotheses. | Physical theorem IDs remain excluded from logical use. QC's finite mathematical POVM dilation or channel equivalence requires its own proof and explicit finite assumptions. |

The corresponding state, measurement, and composite pages were inspected:
`qm-state-geometry`, `qm-measurement-and-instruments`,
`qm-composites-entanglement-and-reduced-states`, and
`qm-framework-and-quantities`. They label physical state/composition,
probability, and conditional-measurement postulates separately from their
mathematical lemmas; QA adopts none of those postulates. The finite QC category
is responsible for the local state, measurement, partial-trace, and channel
interfaces QA consumes.


Binding operational definitions for the advanced construction families are in [operational-contracts.md](operational-contracts.md). Machine rows bind OP0–OP8/OP1A, including bare-input coefficient/complement/phase generation, finite failure/cap branches, declared access and charged arithmetic. These finite definitions do not certify the separate correctness, precision, termination or resource proof obligations. The final scoped check has 896 proposed contracts/120 pages and 1,834 inherited root prerequisites; only the original ten forbidden inherited remarks and draft Golden–Thompson warning remain.
