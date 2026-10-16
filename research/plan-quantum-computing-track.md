# Quantum computing

Status: draft prose scaffold; original scope 2026-10-14, TQC expansion
2026-10-16. This proposal preserves all twenty-four approved
quantum-computing topics and adds a three-pair topological-quantum-computing
branch with explicit mathematical prerequisites. It does not
register canonical library pages or items, author proofs, change a live plan,
or claim any gate or proof acceptance. The machine-readable proposals are
`research/quantum-computing-planning/pages.json` and
`research/quantum-computing-planning/proposed-items.json`; they contain 48
page records (24 A/B pairs) and 358 proposed items, including four
cross-track reflection/state-preparation interfaces and a worked example on
each B page. The source evidence index is
`research/quantum-computing-planning/source-manifest.json`, the local root and
physics audit is in
`research/quantum-computing-planning/prerequisite-audit.md`, and the proposed
branching pathway is described in
`research/quantum-computing-planning/pathway.md`.

## Mathematical boundary and conventions

Both quantum-computing and the separately commissioned quantum-algorithms
track are mathematics categories. The QC track defines finite-dimensional
complex state spaces, ordered finite registers and tensor maps, rays and
density operators, finite measurement/instrument laws, channels and unitary
evolution as mathematical objects. It does not assert empirical quantum
postulates or a physical realization. An adopted outcome law is a definition;
positivity, trace normalization, existence, invariance, dilation and
representation equivalences require proved suppliers. A physical origin may
be mentioned only in a clearly nonlogical remark. No `rem-` item appears in
any `deps` or `justified_by` list.

The item-level inner-product convention is the root library's convention:
linear in the first argument and conjugate-linear in the second. If this
pairing is denoted by `〈·,·〉_root`, define Dirac notation by
`〈x|y〉_D := 〈y,x〉_root`; the bra `〈x|` is the linear functional
`y ↦ 〈y,x〉_root`. Therefore `|x〉〈y|` acts as
`z ↦ 〈z,y〉_root x` and has coordinate matrix `x y†`. Every QC amplitude,
adjoint, outer-product, purification and channel proof must use this explicit
translation. Every tensor register fixes its finite alphabet and basis order,
with bit order and endianness stated explicitly. State vectors, rays and density operators are
distinct objects; pure and mixed states, ensembles and purifications are
related only through proved finite-dimensional results. Measurements specify
outcome sets, effects or projectors, conditional maps, and what is undefined
on zero-probability branches. Channels specify their input/output spaces and
trace/positivity preservation. Circuits specify registers, wire order, gate
access, classical control, branches and output type. Multiplying a
stand-alone nonzero state vector by a unit-modulus scalar preserves its ray and
all defined POVM outcome probabilities; this is a proved mathematical
statement about the specified state and measurement map. The controlled
matrices for $U$ and $e^{i\theta}U$ generally differ and can induce different
channels and outcome probabilities. Exact and approximate synthesis, clean and dirty
ancillas, classical and quantum-state outputs, promise and total problems,
oracle-query and gate/bit costs, and physical motivation and mathematical
claims remain distinct.

Algorithms are definition-like procedures under SCHEMA.md. Each `alg-qc-`
proposal specifies finite inputs, outputs, domains, access assumptions and
exact instructions, including branches, loops, failures and subroutine calls.
Correctness, termination, success probability and complexity are separate
claims with separate proof obligations. A procedure cannot depend on its own
correctness or well-definedness theorem; a genuine well-definedness result
uses `justified_by` under the schema's acyclic rule. No efficient controlled
operation, inverse, state-preparation oracle or QRAM access is inferred from a
matrix description alone.

## Page scope and order

Each numbered row is one A page with an examples companion B page. B pages
contain worked cases and sharp convention checks and are logical leaves. This
list preserves the full commissioned scope; prerequisite order is a DAG, not
a requirement to read every earlier page before every later one.

| Label | Proposed A page | Scope |
|---|---|---|
| QC01 | `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` | Finite complex inner products, bra/ket notation, adjoints, trace, positivity, spectral/SVD interfaces, and matrix norms; reuse root linear algebra. |
| QC02 | `registers-tensor-products-and-partial-trace` | Registers, ordered computational bases, binary encoding/endianness, tensor maps, permutations, and partial trace. |
| QC03 | `pure-and-mixed-states-ensembles-and-schmidt-decomposition` | Pure states/rays, density operators, ensembles, convexity, purification, and Schmidt decomposition. |
| QC04 | `measurements-povms-and-instruments` | Projective measurements, POVMs, instruments, finite outcome laws, conditional states, normalization, and zero-probability branches. |
| QC05 | `channels-kraus-choi-and-stinespring-representations` | Isometries, unitary channels, CPTP maps, and finite Kraus/Choi/Stinespring equivalences. |
| QC06 | `trace-distance-fidelity-and-information-limits` | Trace distance, fidelity, distinguishability, contractivity, tensor/composition bounds, and precisely scoped no-cloning/no-broadcasting. |
| QC07 | `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` | Qubits, Bloch sphere, Pauli algebra, and exact one-qubit gates and rotations. |
| QC08 | `controlled-gates-phase-and-entanglement` | Controlled operations, CNOT/CZ/SWAP, multicontrol, relative phase, and entanglement. |
| QC09 | `circuit-syntax-denotational-semantics-and-measurement` | Circuit syntax and semantics, wire order, composition, measurement, classical control, and deferred measurement. |
| QC10 | `reversible-computation-ancillas-and-coherent-oracles` | Reversible Boolean computation, Toffoli/Fredkin, clean/dirty ancillas, Bennett uncomputation, and coherent function oracles. |
| QC11 | `continuous-gate-universality-and-exact-synthesis` | Continuous gate universality, two-level and Euler decompositions, and exact multi-qubit synthesis. |
| QC12 | `approximate-universality-and-solovay-kitaev` | Discrete approximate universality, group density, Solovay–Kitaev hypotheses/proof obligations, and resource scaling. |
| QC13 | `clifford-t-exact-and-approximate-synthesis` | Clifford+T exact/approximate synthesis, algebraic number rings, ancillas, precision, and the limits of exact finite gates. |
| QC14 | `uniform-circuit-families-promise-problems-and-complexity` | Circuit families/uniformity, computation and promise models, acceptance, bounded-error amplification, and complexity interfaces. |
| QC15 | `pauli-and-clifford-groups-binary-symplectic-tableaux` | Pauli/Clifford groups, binary symplectic representation, and tableaux. |
| QC16 | `stabilizer-circuits-and-gottesman-knill-simulation` | Stabilizer states/circuits and exact Gottesman–Knill updates, including measurements. |
| QC17 | `bell-states-teleportation-and-dense-coding` | Bell states, mathematical teleportation and dense coding, with correction and resource semantics. |
| QC18 | `classical-and-quantum-error-correcting-codes` | Classical finite-field codes, quantum code subspaces, distance, and error detection. |
| QC19 | `knill-laflamme-recovery-and-subsystem-codes` | Knill–Laflamme criterion, recovery maps, and subsystem variants with complete local proof routes. |
| QC20 | `stabilizer-css-codes-syndromes-and-procedures` | Stabilizer/CSS codes, syndromes, encoders/decoders, and worked small codes. |
| QC21 | `noise-fault-tolerance-concatenation-and-thresholds` | Mathematical noise models, fault locations/gadgets, concatenation, and a precise threshold theorem route. |
| QC22 | `graph-states-and-measurement-based-computation` | Graph states, adaptive measurement patterns, and circuit equivalence. |
| QC23 | `circuit-optimization-resource-tradeoffs-and-lower-bounds` | Circuit optimization, ancilla/time/space tradeoffs, and lower bounds under explicit models. |
| QC24 | `state-preparation-isometry-synthesis-and-limits` | State/isometry preparation, information limits, and exact mathematical access interfaces; no free data loading. |
| QC25 | `unitary-fusion-spaces-f-and-r-symbols-and-anyon-models` | Unitary fusion spaces, F/R symbols, pentagon and hexagon, gauge covariance, ribbon twist and modularity, with fixed-convention Ising and Fibonacci fusion sectors. |
| QC26 | `topological-braid-gates-encodings-and-universality` | Unitary braid gates on fixed-total-charge spaces, projective phase and encoding, the Ising/Majorana Clifford restriction, Fibonacci single-qubit density, exact joint SU(5)×SU(8) B₆ density, and arbitrary-size triple-encoded universality with explicit logical-error and leakage bounds. |
| QC27 | `toric-code-anyons-logical-operators-and-protection` | Periodic toric-code stabilizers, e/m excitations, strings and logical operators, distance, contractible-region indistinguishability, exact finite Hamiltonian gap, and a constant energy-barrier upper bound. |

The page-level `requires` edges are recorded exactly in `pages.json`. In
particular, finite state/register foundations feed outcomes and channels;
gates and semantics form a parallel branch; complexity and synthesis depend
on the relevant circuit interfaces; stabilizer and error-correction pages
branch from their own suppliers. QC21's threshold work is not shortened to a
physics theorem or recast as an open problem: if full decomposition is not
complete in this planning pass, its remaining items stay explicit
`unresolved_obligations`.

## Reuse of established mathematics

The root library already contains published finite-dimensional suppliers for
complex inner products, orthonormal bases, adjoints and their matrix formula,
orthogonal projections, finite-dimensional isometries, trace and trace
cyclicity, Hermitian/normal spectral theory, positive operators and square
roots, singular-value decomposition, polar decomposition, and matrix norms.
It also contains finite fields, finite probability, Boolean circuit
complexity, randomized complexity/amplification, and finite abelian character
orthogonality. A published explicit binary code family with constant rate and
distance and a Reed–Solomon/linear-inner concatenation also exists on the gap
amplification page; its definition depends on a CSP-reduction item, so QC18
uses it only where that exact code-family contract fits (for example, a B-page
illustration) and otherwise keeps the general code interfaces local. The
exact IDs and page homes actually inspected are recorded in
`prerequisite-audit.md`; the item proposal must list only suppliers that were
checked for the specific statement and hypotheses. Quantum-specific state,
measurement, channel, fidelity, gate, reversible-computation, stabilizer,
code and threshold carriers were not found in root `items/` and must be
proposed locally with mathematical definitions and complete proof routes.

The independent physics tree contains useful mathematical developments on
tensor products, density operators, partial traces, Schmidt decomposition,
effects, instruments and channels. Physics-only IDs are never logical QC
suppliers, including items marked `domain: mathematics` under `physics/`.
When one informs a root-local proof, the plan must record its exact origin,
hypotheses and proof obligations and then give a self-contained root-local
argument. Physical postulates, empirical observations and experiments are
excluded from logical dependencies and proof premises. The detailed audit is
in `prerequisite-audit.md`.

## Cross-track interface

The QC category owns its shared mathematical primitives; quantum algorithms
may consume them through exact item IDs but may not recreate those definitions
or make QC depend on QA. Shared interfaces under reconciliation include
`def-qc-register-and-computational-basis`,
`def-qc-ordered-bitstring-encoding`,
`def-qc-tensor-register-and-permutation`, `def-qc-partial-trace`,
`def-qc-pure-state-and-ray`, `def-qc-density-operator`,
`def-qc-ensemble-and-purification`, `def-qc-projective-measurement`,
`def-qc-povm-and-outcome-law`, `def-qc-instrument-and-conditional-state`,
`def-qc-quantum-channel`, `thm-qc-finite-kraus-choi-stinespring-equivalence`,
`def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`,
`def-qc-relative-phase`, `def-qc-circuit-syntax-and-register-order`,
`def-qc-circuit-denotational-semantics`,
`def-qc-classical-control-and-measurement-circuit`,
`def-qc-clean-and-dirty-ancillas`, `alg-qc-reversible-embedding`,
`thm-qc-reversible-embedding-cost`, and
`def-qc-coherent-function-oracle`. The phase consequences are separate
proof-bearing items: `thm-qc-standalone-global-phase-invariance` proves that
unit scalars preserve a ray and all its defined POVM probabilities;
`thm-qc-controlled-global-phase-is-relative-phase` gives a finite control
and X-measurement witness that `C(U)` and `C(e^{iθ}U)` generally differ.
`def-qc-reflection` on QC08 defines both exact projector signs,
`R_Π=2Π−I` and `S_Π=I−2Π=−R_Π`, specifies their controlled-phase relation,
and requires explicit primitive, inverse and controlled access accounting.
`thm-qc-reflection-unitary-involution` and
`thm-qc-rank-one-reflection-phase-and-control-sign` discharge the finite
complex projector, unitary, rank-one, phase and control-sign identities.
Exact one-qubit and QFT phase interfaces
are `def-qc-one-qubit-gate-alphabet-and-rotations` and
`def-qc-controlled-phase-rotation`; the earlier fixed-alphabet resource
interface is `def-qc-elementary-circuit-resources` on QC09.

QC14 reuses the root `def-promise-problem` for disjoint YES and NO subsets of
binary strings and their unconstrained off-promise inputs. It does not remint
that general definition. `def-qc-uniform-circuit-family`,
`def-qc-promise-computation-model`,
`def-qc-quantum-acceptance-probability`, `def-qc-circuit-cost-model`,
`def-qc-bqp-promise-class`, and
`alg-qc-bounded-error-amplification` provide the complexity interface. QC14's
cost model refines QC09's gate/depth/qubit/ancilla counts with explicit input
encoding, oracle/query and classical bit costs; QC10–13 do not depend on the
later QC14 definition. The BQP promise class uses YES acceptance at least
`2/3`, NO acceptance at most `1/3`, and no off-promise condition; no
BQP/classical separation is assumed. The uniform complexity class uses an
exact finite algebraic alphabet `H,T,T†,CNOT`, with entries in
`Q(ζ8)=Q(i,√2)` and only finite gate labels/wire indices in descriptions.
Acceptance probabilities can have the form `A+B√2` after rational scaling;
any BQP-to-PP proof must establish its GapP coefficient representation and
algebraic comparison at the bounded-error margin rather than assume rational
path counts. QC24 defines state preparation only
from a declared finite input/access model and a specified target error.
`alg-qc-solovay-kitaev-unitary-compiler` and
`thm-qc-solovay-kitaev-error-and-resource-bound` on QC12 provide the proposed
finite-gate approximation interface; finite-precision bit-time remains an
explicit obligation if its input/arithmetic assumptions are not proved.
`alg-qc-state-preparation` and `thm-qc-state-preparation-cost` on QC24 give
the amplitude-table input boundary, rotation construction, bounded-arity
gate and clean-workspace counts, and separate table-reading and precision
charges. The exact proposed item IDs, page homes and dependency edges are
frozen in `proposed-items.json` and `pages.json`; their source routes and
root-supplier audits are recorded in `source-manifest.json` and
`prerequisite-audit.md`. QC01 reuses root finite-dimensional linear algebra
directly rather than minting duplicate linear-algebra definitions.

## Source and proof status

The six QC researchers completed their assigned full-text reading and root /
physics supplier audits. Their reports, caches and ledgers are retained under
`research/quantum-computing-planning/`; `source-manifest.json` links each
report and ledger with hashes and retains the source records. `coverage.md`
records the six reading scopes and maps each A page to item-level source
treatments. Preskill Chapter 4 remains marked author-incomplete, the typed
Chapter 8 is not claimed read, and the no-broadcasting and fault-tolerance
proof limitations remain explicit. The integrator does not claim personal
sequential reading of those corpora. Any unavailable source and every
unresolved proof obligation remain visible. Citations document routes; they
do not certify proofs.

The latest combined QC/QA proposal check passes the structural page/item
graph checks for 120 pages and 896 proposed items, but the current 1,834-item
root prerequisite closure still reaches ten inherited root remarks, so the
actual checker remains `fail` and the pre-authoring hold remains open. A
read-only, SHA-bound repair bundle is ready at
[`prerequisite-repairs.json`](quantum-planning-review/prerequisite-repairs.json):
18 existing-consumer recipes and 14 proposed typed suppliers. The virtual
overlay check passes for 2,729 planned-closure nodes; it is contingent on
applying those proposals and is not a current-library closure or proof
acceptance result. The repair bundle and both current/virtual checker receipts
are summarized in [`prerequisite-audit.md`](quantum-computing-planning/prerequisite-audit.md),
with current status in
[`mechanical-check.json`](quantum-planning-review/mechanical-check.json) and
overlay status in
[`planned-repair-check.json`](quantum-planning-review/planned-repair-check.json).
Do not claim current full prerequisite closure or start dependent authoring
until root applies the repairs and the actual checker passes; this QC planning
work does not edit published root sources.

All proposed records remain `draft-planning`. No placeholder item carriers,
canonical plan registration, acceptance/readiness/verification stamps,
autopilot changes or gate claims are part of this scaffold. The root owner
will review the combined dependency graph and planning evidence before any
separate authoring work is considered.

## Exhaustive scaffold audit and repair, 2026-10-14

The independent audit reviewed all 334 original proposed contracts and all 24 topic scopes. The current inventory has 358 records after adding 24 explicit suppliers; exact per-item dispositions, repairs and consumer closures are recorded in [the audit report](scaffold-audit-2026-10-14/quantum-computing.md) and its coverage JSON. The current proposed-items.json and pages.json supersede the embedded original researcher export snapshots. Algorithms now declare finite instructions and their arithmetic/access models. Exact-arithmetic SK and arbitrary-angle preparation do not claim finite-precision Turing cost; the named bit-stability authoring hold remains. Bell preparation/decoding, partial-output acceptance, CSS nesting/logical quotient, diamond ancilla reduction, surface-code boundary counts, MBQC transports and charged circuit-counting models have focused repairs. Isometry synthesis is now explicitly represented. This is a contract audit, not proof acceptance. Root refreshed its combined checks after graph stabilization: 896 proposed items on 120 pages; actual closure still FAILS only on the original ten inherited remarks (1,834 root prerequisites), with a draft Golden–Thompson supplier warning. The conditional virtual overlay passes at 2,729 nodes, 18 recipes and 14 proposed prerequisite suppliers. Neither structural result is proof acceptance.

## Topological quantum computing scaffold expansion, 2026-10-16

QC25–QC27 add unitary fusion categories and fusion spaces, coordinate F/R
symbols with pentagon/hexagon and gauge changes, fixed-convention Ising and
Fibonacci braid data, encoded gates, and an exact toric-code construction.
Arbitrary algebraic braid or Hecke representations are not treated as unitary.
The F/R coherence section states the root associator/braiding identities as
explicit operator formulas and derives their matrix equations by summing over
every fusion label and multiplicity index. The displayed Ising results are
scoped to the three-σ sector and the explicit Majorana/parity representation;
no missing all-label Ising table is used as a premise. The density proof uses
the two-dimensional three-anyon total-τ sector and published SU(2)/SO(3),
closed-subgroup, irrational-rotation, and finite-matrix suppliers. Exact local
Lie-rank certificates in dimensions five and eight and a subdirect-product
argument prove joint `SU(5)×SU(8)` density in both six-anyon charge blocks. A
full fusion-space spectator decomposition and braid-dependent one-qubit
extensions yield arbitrary-size triple-encoded universality with explicit
logical-error and leakage bounds; no exact leakage-free entangler is needed.
An efficient joint-block compiler remains a separate resource obligation. The
toric-code Hamiltonian is a finite mathematical model; gap, exact local
indistinguishability, distance, and energy-barrier claims are for that model
only. Physical phase existence, adiabatic realization, and perturbation
stability remain contextual assumptions or physics-side obligations. Full
definitions and proof routes are in
[`sections/tqc-expansion.md`](quantum-computing-planning/sections/tqc-expansion.md),
and exact current suppliers and source reading are in
[`scaffold-audit-2026-10-16/topological-quantum-computing/`](scaffold-audit-2026-10-16/topological-quantum-computing/).
