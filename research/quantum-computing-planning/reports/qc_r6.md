# QC researcher 6 — QC/QA interface audit and foundational bridges

Status: complete full-text read of the assigned Childs corpus and an independent
complete de Wolf course corpus; cross-track audit and local supplier map
completed. This is planning research only. The only written paths are this
report, sources/qc_r6/, and source-ledgers/qc_r6.json.

## Reading and evidence boundary

The assigned source is Andrew M. Childs, *Lecture Notes on Quantum
Algorithms*, author-hosted at
<https://www.cs.umd.edu/~amchilds/qa/qa.pdf>. The URL returned HTTP 200 with
application/pdf, unchanged final URL, and 1,438,768 bytes. The PDF is 191
pages; its SHA-256 is
6e3a32f0aede35e954d665c909fec41f716b955f041957e723e2724ae3efabd1. I
extracted all pages with MuPDF to sources/qc_r6/childs-lecture-notes.txt
(442,537 Unicode characters, 462,433 bytes; SHA-256
f7456fdbf599429bf093c9345c45536cbeb979d37be762819a151e6d2497c8b5) and
read physical PDF pages 1–191 sequentially in 20 chunks: 1–10, 11–20, …,
171–180, 181–191. The source-fetch checker independently stamped the full
PDF at sources/qc_r6/coverage.json.

For independent full-course comparison, I read Ronald de Wolf, *Quantum
Computing: Lecture Notes*, arXiv:1907.09415v6, author-hosted at
<https://arxiv.org/pdf/1907.09415>. The 239-page PDF has SHA-256
b797f4165555d28180438586412e7629fecadb94a7ea81c761de8bdfd37a1fc1 and
1,432,933 bytes. I read all physical pages 1–239 sequentially in the 24
read-only chunks under sources/qc_r3/read-chunks-10p/, pages 1–10, 11–20,
…, 221–230, 231–239. The source cache remains qc_r3-owned and was not edited.
Its extracted-text cache has SHA-256
ea2d701fd56e377670038855ccf14e0c87cbaa58491a5019aa1fe7e2123d3a34; the
independently retrieved qc_r1 duplicate of the same PDF has a different
extraction pipeline and hash, so the physical PDF hash, not a text-cache
hash, is the binding identity for this full read. The read receipt and
extraction details are in the source ledger.

These are source-reading receipts, not proof acceptance. Childs describes
the notes as rough and invites corrections. Several results are stated with
proofs omitted or technical estimates deferred; the report marks those
authoring obligations rather than treating citations as proofs.

## Cross-track contracts QA must receive from QC

The QC integrator has frozen the shared homes as follows: QC14 owns
def-qc-quantum-acceptance-probability and def-qc-circuit-cost-model;
QC23 consumes the cost model. QC24 owns alg-qc-state-preparation. QA22,
not QC, owns def-qa-22-block-encoding. This ownership avoids a QC→QA→QC
dependency cycle.

| Mathematical interface | QC contract needed | QA uses and obligations |
|---|---|---|
| Controlled unitary access | Distinguish a controlled gate implemented from a known circuit from a black-box controlled oracle. State the control register, target action on both control sectors, chosen representative of global phase, and whether the controlled call costs one or more queries/gates. A matrix or an uncontrolled black box alone does not grant controlled access. | Phase estimation, Hadamard tests, and signal-processing procedures need controlled calls. Childs §4.3 (printed p.19) explicitly assumes either an explicit circuit or a black box providing controlled powers; it does not derive controlled access from arbitrary U access. |
| Inverse access | State whether U† is available, whether it is synthesized by reversing an explicit circuit, or is an independent oracle primitive with its own query cost. For a finite gate list, inverse synthesis needs inverse gate labels and reverses gate order. | Phase estimation, amplitude amplification, QSVT/block encoding, walks, and many lower-bound normal forms use inverse calls. A general black-box U does not entail U† at zero cost. The standard XOR function oracle is self-inverse, a special case. |
| Coherent classical oracle and reversible arithmetic | Define the finite binary action O_f on computational basis labels (x,y) by (x,y) ↦ (x,y xor f(x)), including registers and wire order. Keep x, compute into clean work, copy the output, then reverse the computation and restore work. Give exact gate/work/depth bounds in the chosen reversible basis. A clean-subspace specification must say what valid-workspace states the caller may use and what unitary circuit implements the interface. | QA02–04 and oracle algorithms use coherent arithmetic. Phase kickback is a derived use of the bit oracle with a stated output eigenstate; a phase oracle is not the general definition of a function oracle. O_f is an involution. A non-injective map from label x to label f(x) is not a unitary in general. |
| Circuit family, promise, acceptance | Fix an effective encoding and a uniformity generator for each circuit size. Define disjoint yes/no promise sets, the input preparation, the final accept effect, and the real probability p_C(x) through QC09/04 semantics. For example, yes inputs require p≥2/3, no inputs p≤1/3, with off-promise inputs unconstrained. State the finite gate alphabet and how angle/precision descriptions are encoded. | QA01 and every BQP or promise-BQP claim use these interfaces. Childs §1.5 (printed p.3) uses a polynomial-time classical machine that outputs the nth circuit; de Wolf §13.2 (printed pp.110–111) instead describes indexed gate/wire queries. The root logspace-uniform supplier is for Boolean circuits and does not silently choose or prove a quantum uniformity convention. |
| Cost and precision | def-qc-circuit-cost-model should keep separate gate count, depth, qubits/width, clean and dirty ancillas, oracle calls, classical bit operations, preprocessing/input length, and approximation/error. Identify the basis, gate arity, and whether parallelism is allowed. Do not call query complexity total running time. | QA reductions and lower bounds need a declared cost vector. An algorithm with a free state-preparation call, controlled oracle, reflection, inverse, or table lookup has a different model from an explicit finite circuit. |
| Amplification and success | Define decision acceptance probability separately from state-output error. Repetition/majority needs independent fresh runs and its classical tail bound; coherent amplitude amplification needs the preparation unitary, its inverse, and implementable reflections about the initial and success subspaces. Charge those calls. | QA11–13 need the initial preparation/reflection interface; query overhead and gate overhead are distinct. Childs §1.6 only gives informal repetition, while Childs Ch.28 and de Wolf Ch.7 discuss coherent amplification under unitary access. |
| State preparation | alg-qc-state-preparation must take a finite classical description plus an explicit access model and return a circuit/procedure preparing a specified target ray or state to a stated error, with gates, qubits, workspace, query, and preprocessing costs. State whether it is deterministic or heralded and define failure. For isometries, specify the input subspace and how the unitary completion is accessed. | QA algorithms must pass the preparation procedure or oracle as an input and count it. HHL in de Wolf §10.1 (printed pp.83–84) explicitly assumes a circuit of B two-qubit gates to prepare a target vector state; de Wolf §19.3 (printed pp.167–168) calls efficient preparation of classical vectors a strong assumption. A list of amplitudes is not a free preparation device. |
| Hamiltonian and sparse/block access | Define H as a finite Hermitian matrix on the chosen register basis; define e^{-itH} by finite-dimensional spectral calculus or the matrix exponential and prove it unitary from the root spectral theorem. Sparse input must include reversible row/column-location and finite-precision value oracles, inverse/control availability, and costs. | QA19–22 should define time, scaling, target error (usually operator norm, or a restricted clean-ancilla action norm), and query/gate costs. QA22’s block encoding needs a finite matrix, ancilla projector, normalization α, exact or approximate operator-norm error, and U/U†/controlled-U access. A bare matrix does not furnish a block encoding. |
| Error and output metric | Reuse the finite-dimensional operator norm for unitary/matrix approximation; define state/ray distance or fidelity for state outputs and total variation distance for classical outputs. State whether global phase is quotiented. A phase ignored for an uncontrolled state can become relative phase under control. | QA phase-estimation/Hamiltonian-simulation error claims, algorithm success, and preparation accuracy must state which of these is meant. Do not substitute an amplitude error, operator-norm error, channel error, and output-distribution error without a proved conversion bound. |

### Exact Childs/de Wolf interfaces that should drive the bridge proofs

Childs §1.4 (printed pp.2–3) gives the reversible pattern: store
intermediate values, XOR the answer into a target, then run the computation
backward; it warns that |x>→|f(x)> is not automatically valid, even for a
bijection, without an efficient inverse in its formulation. The local QC10
proof should strengthen this into an exact circuit theorem. For a Boolean
DAG, one clean route is to allocate clean output bits for gate values, use
X/CNOT/Toffoli (and NOT/De Morgan) to evaluate, copy the designated output
bits to y, then apply the inverse circuit in reverse topological order. State
fan-out/copy costs and workspace explicitly; the root classical circuit page
does not supply this reversible semantics.

Childs §2.1 (printed pp.7–8) proves a telescoping product error estimate:
if each unitary gate is within ε in operator norm then t successive
substitutions change the whole unitary by at most tε. Its Solovay–Kitaev
theorem (§2.3, pp.8–10) assumes finite universal gate sets closed under
inverses and states a synthesis algorithm and logarithmic precision overhead.
Use the norm proof as support for QC12/23 only after the local gate and
ancilla model is fixed. The statement does not license arbitrary real gate
angles without an encoding or precision cost.

Childs §4.3 (printed pp.19–20) states the phase-estimation input as either a
known circuit for U or black-box access to controlled-U^j for integer j, and
also supplies an eigenvector promise. Its definition is a direct warning
against treating controlled powers as free consequences of one U call.
Childs Ch.21 (printed pp.97–102) and de Wolf Ch.11–12 (printed pp.89–106)
use function-oracle query models for query complexity and lower bounds.
De Wolf §2.4 (printed pp.17–20) spells out the bit-flip map and phase
kickback; a target in |-> converts a one-bit XOR query to a phase query.

Childs Ch.27 (printed pp.133–138) treats a sparse Hamiltonian through row
and column access and analyzes matrix-evolution error; Ch.28 (pp.139–142)
uses linear combinations of unitaries and oblivious amplitude amplification;
Ch.29 §§29.1–29.4 (pp.143–148) defines a block encoding by its ancilla-zero
matrix block, discusses a rescaling α, constructs encodings under explicit
sparse row/column-computability assumptions, and states that polynomial
transformations use d calls to U and U† plus a controlled-U. It omits the
technical truncation tail estimate for its Hamiltonian-simulation
application. De Wolf Ch.9 §§9.1–9.4 (printed pp.71–78) independently defines
finite Hermitian H and e^{-itH}, measures simulation in operator norm (with
a separate clean-ancilla restricted error when extra qubits are used), and
spells out sparse access as value and location oracles plus their inverses.
Its state-preparation and HHL assumptions give a concrete warning about
input costs. These two courses agree on the interface; they are not
substitutes for local proofs of the new QC/QA lemmas.

## Audit by approved QC topic

The approved 24 topics remain intact. This table records the reusable math,
the source evidence, and what the QC/QA boundary still requires.

| QC | Source-backed scope and interface gap |
|---|---|
| QC01 finite complex inner products and matrices | Root proof reuse is unusually strong; exact items/routes are listed below. Normalize inner products as linear in the first argument (root) and translate any bra/ket source formula that is linear in the second. Define the operator norm convention and the computational basis later; neither register order nor endian convention comes from linear algebra. |
| QC02 registers, tensor products, partial trace | De Wolf Ch.1 (pp.1–12) and Childs Ch.1 (pp.1–4) use finite tensor registers. Local QC must fix ordered alphabet products, bit strings and endian order, tensor permutations, and finite partial trace. Root tensor-products-of-modules is algebraic context; it does not supply computational-register indexing or partial trace. |
| QC03 pure/mixed states, ensembles, purification, Schmidt | De Wolf Ch.1 (§§1.2–1.5) and Childs Ch.1 use normalized vectors/density matrices and finite registers. Reuse root spectral/trace/adjoint facts; prove positivity and trace-one preservation under convex mixtures, purification and Schmidt from finite SVD. No physical state postulate is needed. |
| QC04 measurements and instruments | De Wolf Ch.1 §§1.2.2–1.2.3 (pp.4–7) treats projective measurement; later quantum-information chapters cover POVMs. Root finite probability spaces define a destination law but not the quantum measurement law. QC must prove effects sum to I give normalized finite outcomes, condition only on positive-probability branches, and specify the state update/instrument. |
| QC05 channels, Kraus/Choi/Stinespring | De Wolf’s treatment includes finite channels and dilations in its quantum-information chapters; Childs Ch.1 gives circuit unitaries. Reuse root adjoint, trace-cyclicity, tensor and positivity proofs. QC still needs finite equivalence proofs and to state trace preservation versus trace nonincrease separately. |
| QC06 trace distance, fidelity, information limits | De Wolf’s measurement and quantum-information material supports the standard interfaces; Childs Ch.2 provides operator-norm circuit error composition. Root finite operator norm/SVD are reusable, but distinguishability/contractivity and channel/trace-norm conversion proofs are QC obligations. Any no-cloning statement must specify pure-state distinguishability and the allowed map. |
| QC07 qubits, Pauli/Bloch, one-qubit gates | De Wolf Ch.1 §§1.3–1.4 (pp.7–10) and Ch.20 provide finite matrix examples. Root complex spectral and norm facts support calculations. Derive Pauli identities and Bloch sphere coordinates locally, and distinguish exact gate matrices from equivalence up to scalar phase. |
| QC08 control, phase, entanglement | De Wolf Ch.1 §§1.4–1.5 and Ch.2 show controlled-gate semantics; Childs Ch.4 uses controlled powers. A global scalar does not affect an uncontrolled ray but does affect the controlled block diag(I,U). Specify controlled and inverse black-box access separately from gates in an explicit circuit. |
| QC09 circuit semantics and measurement | De Wolf Ch.2 §§2.1–2.2 (pp.13–17) gives circuit wire order, gate action, circuit inverse and standard measurement; Childs Ch.1 supplies gate, query, depth distinctions. QC should define syntax/semantics of finite labeled circuits and prove composition/measurement deferral under finite instruments, including the workspace and classical-control registers. |
| QC10 reversible computation and coherent oracles | Childs §1.4 (pp.2–3) and de Wolf §2.4 (pp.17–20) give compute-copy-uncompute and XOR-oracle contracts. Add a root-local QC proof with explicit gate count, clean workspace, inverse, and query/gate costs; for layered depth, construct/uncompute coherent CNOT fanout trees and state the fanout-sensitive bound rather than claiming constant-factor Boolean-DAG depth. Classical computability and Boolean circuits do not imply coherent execution. |
| QC11 continuous-gate universality | Childs Ch.2 and de Wolf Ch.2 discuss finite-dimensional unitary synthesis; Childs’s note assumes inverses in Solovay–Kitaev. Reuse root SVD/spectral facts and unitary/adjoint facts; define exact target class, global-phase convention and two-level gate costs. |
| QC12 approximate universality and Solovay–Kitaev | Childs Ch.2 §§2.1–2.4 (pp.7–10) has the commutator/net proof and inverse-closed finite gate-set condition. De Wolf Ch.2 and its exercises give independent universality/error context. Local proof must state metric, dimension, density, inverse closure, precision input encoding and compilation cost; a bare density claim is insufficient. |
| QC13 Clifford+T synthesis | Childs Ch.3 (pp.11–14) gives the exact algebraic characterization and approximate rounding direction; de Wolf Ch.20 discusses stabilizer/Clifford structure. Root finite fields/number theory are reusable only where their exact ring hypotheses match. Approximate synthesis needs a gate/error/ancilla budget; do not claim every unitary is exactly Clifford+T. |
| QC14 circuit families and promise complexity | Childs §1.5–1.6 (p.3) and de Wolf §13.2 (pp.109–111) define effective circuit families and bounded-error classes, but use different generator encodings. Reuse root def-promise-problem in the-polynomial-hierarchy-and-relativization for disjoint yes/no sets and the off-promise convention. Freeze one QC14 uniformity contract and define only quantum acceptance semantics with def-qc-quantum-acceptance-probability; put size/resource conventions in def-qc-circuit-cost-model. Repetition amplification requires a local independent-run/tail proof and must be separated from coherent amplification. |
| QC15 Pauli/Clifford and symplectic binary model | De Wolf Ch.20 (printed pp.171–176) provides stabilizer/Clifford matrices and binary data. Root finite fields do not silently mean F₂; define binary vector/matrix operations, phases and symplectic form locally. |
| QC16 stabilizer circuits and Gottesman–Knill | De Wolf Ch.20 §20.3 (pp.174–176) states and explains measurement updates and polynomial classical simulation. A QC16 theorem still needs a complete finite update proof including deterministic versus random Pauli outcomes and adaptive classical control. |
| QC17 Bell states, teleportation, dense coding | De Wolf §1.5 (pp.10–12) gives teleportation as an exact finite circuit/protocol. Formalize the outcome law, Pauli corrections, input/output registers, shared-resource count and classical communication; physical transmission language is not a logical assumption. |
| QC18 finite classical/quantum codes | Childs does not give a code theory; de Wolf’s stabilizer chapter is not a complete classical-code or quantum-code development. Use root finite fields and finite probability, then prove code definitions/distance, encoding and decoding contracts. QC researcher 5’s Cleve/Preskill reading is the independent source route for this scope; full Preskill Ch.7 reading remained in progress at the time of this audit. |
| QC19 Knill–Laflamme and recovery | The two algorithm courses do not supply a complete finite recovery theorem. Need local operator-error and code-subspace definitions, a necessary-and-sufficient criterion proof, trace-preserving recovery, and explicit subsystem scope; do not use a physics theorem as a supplier. The remaining full QEC source treatment is an integrator dependency. |
| QC20 stabilizer/CSS codes and procedures | De Wolf Ch.20 is a stabilizer-state/circuit support, not an encoding/decoding theorem for all QC20 codes. Root F₂ operations may support matrix row reduction, but QC must prove the code’s stabilizer constraints, dimensions, syndrome correctness, and each stated circuit’s exact output/ancilla behavior. |
| QC21 noise and thresholds | Childs §1.7 (printed pp.3–4) simply says a threshold theorem exists and assumes ideal fault-tolerant protocols thereafter. De Wolf’s fault-tolerance chapter is explicitly succinct/sketchy. Keep the approved scope but require a named finite noise model, fault locations, gadget correctness, concatenation recursion, quantitative contraction and overhead proof; otherwise flag this as an unresolved authoring hold, not a mathematical open problem. |
| QC22 graph states and MBQC | De Wolf Ch.20 supports stabilizer states and measurement-controlled Clifford circuits; it does not by itself establish all graph-state/measurement-pattern equivalence claims. Define graph-state preparation and adaptive patterns as finite circuits/instruments, then prove by explicit branchwise semantics and correction rules. |
| QC23 resource tradeoffs and lower bounds | Childs Ch.21–26 (pp.97–130) and de Wolf Ch.11–13 (pp.89–115) support query lower-bound methods and finite-gate counting; Childs Ch.2 supports error accumulation. They do not make query bounds into circuit-gate bounds. Use QC14’s frozen cost model, finite encoded gate basis, input encoding, ancilla/precision assumptions and exact lower-bound model; root Boolean-circuit size/depth cannot be relabeled as quantum cost. |
| QC24 state prep and isometry synthesis | De Wolf §10.1 (pp.83–84) explicitly charges B two-qubit gates to prepare a target state and warns HHL returns a quantum state, not an amplitude list; §19.3 (pp.167–168) labels classical-vector state preparation a strong assumption. Childs Ch.30 (pp.151–156) assumes an “easy” starting ground state but does not define generic data loading costs. Require an explicit input/access model, precision, deterministic/heralded success, clean work, U/U†/control, and circuit/preprocessing costs; prove any generic synthesis bound separately. No QRAM from a raw matrix or vector. |

The QA interface dependency route should therefore be acyclic: QA algorithms
consume QC01–09 mathematical semantics, QC10 coherent arithmetic/oracles,
QC14 acceptance/uniformity/cost, and QC24 preparation as appropriate. QA’s
Hamiltonian simulation page consumes the finite-Hamiltonian contract and
QA22’s block-encoding interface; it must not make QC depend back on QA.

## Lead bridge proposals for the four shared QC foundations

These are proposed proof-bearing contracts, not accepted item records.
Existing fixed item IDs above remain unchanged.

**QC10 — reversible bridge from classical circuits to coherent oracles.**
Define the reversible gate basis by its bit actions: X toggles one bit, CNOT
maps (a,b) to (a,b xor a), and Toffoli maps (a,b,c) to (a,b,c xor ab).
For a Boolean DAG C with S non-input gates, m output positions, E input-port
uses, D topological gate layers, and bounded fan-in, with disjoint input,
output, and clean-work registers, allocate a fresh target bit for each gate
output. AND into a clean target is Toffoli. NOT into a
fresh target t is X(t) followed by CNOT(a,t), giving t=1 xor a while
preserving a; X(t) alone would not depend on a. OR into a fresh target is two
CNOTs and one Toffoli because a or b = a xor b xor ab.

Do not execute gates that share a control in a single circuit layer. In each
Boolean layer, for every source wire with f uses in that layer, make f
computational-basis copies in clean work by a binary CNOT copy tree. In each
round, every available copy controls at most one CNOT into a fresh bit; after
r rounds there are 2^r-1 possible new copies, so stop when f copies exist.
This uses at most f new bits and depth at most ceil(log2(f+1)); assign one
distinct copy to each gate input port. This is a coherent reversible operation: on a
superposition of source bits it creates the required entangled copy
registers, not clones of arbitrary states. Evaluate the layer gates on
distinct copied input ports and fresh, distinct output targets in at most
three disjoint-support sublayers. Reverse each fanout tree immediately after
the layer gates; its copied leaves were controls and were not modified, so
this resets those work bits. Repeat for all D layers. If F is the maximum
per-wire number of input-port uses in any one layer, the clean-evaluation
depth is at most D(2 ceil(log2(F+1))+3).

Copy the m designated output positions to an arbitrary target register y
using a second balanced CNOT fanout/unfanout construction. If m positions
repeat a source bit, use private copied controls so the CNOT targets are
disjoint. This output step has depth at most 2 ceil(log2(m+1))+1. Reverse
the whole clean evaluation circuit to reset the gate-output work. The exact
overall action is (x,y,0^w) ↦ (x,y xor C(x),0^w), with gate count
O(S+E+m), workspace w=O(S+E+m), and depth at most
2D(2 ceil(log2(F+1))+3)+2 ceil(log2(m+1))+1 under this layer/fanout
convention. Since bounded fan-in gives E=O(S), the size/work bounds simplify
to O(S+m); the depth bound remains explicitly fanout-sensitive and is
O(D log(F+1)+log(m+1)), not a constant-factor copy of the original Boolean
DAG depth. A fully serial reversible schedule is also valid, but has a
separate O(S+E+m) depth bound and must not be presented as constant-depth
parallelization. Define the coherent function oracle as this finite
unitary implementation; count either its one abstract query or the
reversible circuit cost, never both implicitly. This route supplies a direct
local proof and lets Childs §1.4 and de Wolf §2.4 serve as independent source
corroboration.

**QC14 — effective decision model and acceptance bridge.** Keep the frozen
IDs def-qc-quantum-acceptance-probability and
def-qc-circuit-cost-model. Reuse root def-promise-problem from
the-polynomial-hierarchy-and-relativization for the disjoint yes/no sets Y,N
and its off-promise convention; do not add a duplicate QC promise definition.
Add a quantum-family definition that chooses one effective, finite encoding
and one uniform generator (full circuit output or indexed gate/wire
description; state which). The local quantum acceptance definition attaches
the QC09 circuit denotation and QC04 outcome law to that root promise pair:
for a final accept projector Pacc, define p_C(x), and state correctness as
p_C(x)≥2/3 on Y and p_C(x)≤1/3 on N, unconstrained elsewhere. State
gate-description precision in the family definition. Prove amplification
separately: repeat the measured decision circuit on independent fresh
work/input copies, take majority, and use the exact finite binomial tail bound
to get O(log(1/δ)) repetitions for error δ; multiply all relevant gate, query,
space and input-preparation costs. If coherent amplification is also claimed,
add its preparation inverse and two reflection implementations as explicit
inputs and charged costs. QA-01 is the direct cross-track consumer of the
root promise-problem item and QC14 acceptance interface; promise-algorithm
pages downstream should use QA-01’s contract instead of redeclaring promise
sets. This avoids a hidden assumption that a poly-size circuit family is
uniformly constructible or that reflection access is free.

**QC23 — resource ledger before any optimization theorem.** Use the frozen
QC14 cost-model item as the single definition of a resource tuple:
gate count, depth, live qubits, clean/dirty ancillas, query counts by oracle
type, classical bit operations, description length/preprocessing, and
approximation tolerance. State fixed gate arity/basis and parallelism.
Prove a simple compilation bridge only under an explicit premise: if each
call to a named oracle has an implementation of G gates and D depth, then T
calls cost at most TG gates and TD depth in serial composition, plus the
stated inter-query circuit costs. Keep this distinct from query lower bounds.
For finite gate-count lower bounds, fix a finite encoded gate set and count
circuits; if continuously parameterized gates are permitted, include parameter
precision/description bits and use an approximation-net proof. Theorem
hypotheses must specify encoding, ancilla, width, arity, error and gate model;
do not transfer a query lower bound into a circuit lower bound without the
compilation bridge.

**QC24 — state and isometry preparation as input procedures.** The frozen
alg-qc-state-preparation should accept a finite classical encoding (for
example, an amplitude list with each real and imaginary part encoded to p
bits) or an explicit reversible value/address oracle. Its correctness
contract says what normalized target state/ray is prepared, from which
initial basis state, in which registers, with clean workspace; its algorithm
states exact/approximate precision, deterministic/heralded branches and
failure behavior; its resource report separately charges classical reading,
preprocessing, query, gate, depth and ancilla costs. For an isometry, require
orthonormal columns and specify the input subspace map and a unitary
completion, but charge the actual circuit for that completion. Use QC06’s
state metric or a specified phase-minimized vector norm and prove conversions
rather than changing metrics silently. An unstructured amplitude list can
have exponential length in qubit count; no circuit follows at low cost unless
the finite encoding/access oracle supplies that capability. If later QA
algorithms need reflection or inverse access, include implementations or
oracle access and charge them as part of the preparation interface.

## Exact root mathematical suppliers and proof routes

The following are actual published root items, not proposed QC items. Their
proofs were inspected in items/ and are appropriate dependency targets
when their hypotheses match:

| Root item(s) | Existing mathematical proof route and QC use |
|---|---|
| def-inner-product-space, def-real-and-complex-inner-product-space, def-inner-product-norm; cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases | Root uses the inner product linear in the first variable; the orthonormal-basis corollary follows by choosing a finite basis and applying Gram–Schmidt. Preserve this convention or translate every formula. |
| def-adjoint-of-a-linear-map-between-inner-product-spaces, thm-adjoint-exists-and-is-unique-in-finite-dimension, thm-matrix-of-the-adjoint-is-the-conjugate-transpose, prop-adjoint-algebra | Finite-dimensional Riesz representation gives existence and uniqueness; the coordinate proof identifies the adjoint matrix with the conjugate transpose. Reuse for unitary gates, channel adjoints and inner-product identities. |
| def-self-adjoint-and-normal-endomorphism, thm-complex-spectral-theorem-for-normal-endomorphisms, thm-the-complex-numbers-are-algebraically-closed, thm-schur-triangularisation, lem-normal-upper-triangular-matrix-is-diagonal, prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases | The spectral theorem proof factors through complex algebraic closure, Schur triangularization and normal-upper-triangular diagonalization; the matrix criterion transports normality to an orthonormal basis. This is the finite-dimensional route for Hermitian matrices, measurement projectors, and eigenvalue definitions. |
| def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, thm-of-square-roots, thm-non-negative-square-root-exists-and-is-unique | Positivity is equivalent to self-adjointness with nonnegative eigenvalues / an orthonormal diagonal form / S* S; square roots are built on that eigenbasis and uniqueness is proved on each eigenspace. Use instead of importing infinite-dimensional C*-algebra results. |
| def-singular-values-of-an-endomorphism, prop-singular-values-are-well-defined, thm-singular-value-decomposition, thm-polar-decomposition, def-operator-norm-on-a-finite-dimensional-inner-product-space, thm-operator-norm-is-the-largest-singular-value, cor-operator-norm-submultiplicative-and-t-star-t-identity | SVD comes from the positive square root of T* T, an eigenbasis, normalization of nonzero image vectors, and orthonormal extension. The operator norm is then the top singular value and is submultiplicative. These are exact reusable finite error/norm routes. |
| def-matrix-space, def-matrix-product-and-identity-matrix, thm-matrix-of-a-composition-is-the-product | Matrices are zero-based functions on finite row/column indices; products are finite sums and degenerate shapes are explicit. QC still defines product-register order and bit endianness. |
| def-trace-of-a-square-matrix, thm-trace-of-ab-equals-trace-of-ba | Trace is the diagonal finite sum; the rectangular cyclic trace identity is a finite double-sum reindexing and holds even for empty dimensions. Use for unitary trace preservation and finite density/channel calculations. |
| def-induced-matrix-p-norm, def-frobenius-matrix-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison | Reuse only after matching the chosen QC operator and trace-norm convention; trace distance, channel contractivity and diamond-norm results remain local QC work. |
| def-finite-probability-space-and-event, def-finite-real-random-variable-and-distribution, def-expectation-on-a-finite-probability-space | Finite normalized outcome weights and expectation are supplied mathematically. QC must define weights from its measurement/instrument maps and prove normalization. |
| def-boolean-circuit-size-depth-fanin-and-basis, def-circuit-family-and-p-poly, def-logspace-uniform-circuit-family, lem-polynomial-time-computations-have-logspace-uniform-circuits | These prove classical circuit/family and uniformity interfaces only. P/poly explicitly does not require an efficient circuit generator. They do not supply reversible circuit semantics, quantum gate costs, or BQP. |
| def-computable-and-partial-computable-function | Supplies computability, not a polynomial time bound or an efficient reversible implementation. |
| def-finite-field-and-its-order and finite-field/vector-space suppliers | Supply field and finite cardinality assumptions but do not identify every finite field with Z/qZ; QC15 and QC18 need the exact field (especially F₂), operations, code matrices and proof routes. |

The repository’s existing prerequisite audit records the corresponding
linear algebra, probability and physics-namespace inventory. No QC dependency
should point to physics/items/ or
physics/library/non-relativistic-quantum-mechanics*.

## Physics mathematical context without logical import

The physics collections are useful context for finite proof patterns and
conventions: lem-nrqm-composites-hilbert-tensor-construction,
lem-nrqm-composites-density-and-scalar-spectral-probability,
thm-nrqm-composites-finite-partial-trace-and-schmidt,
lem-nrqm-composites-finite-effects-and-instruments,
lem-nrqm-composites-finite-naimark-compression, and
lem-nrqm-composites-finite-ancilla-complete-positivity are explicitly
mathematical and may guide an independently proved root-local QC variant.
They are still outside the root logical dependency graph. Infinite-dimensional
domain/completeness assumptions must be removed or proved anew for the finite
QC objects.

Physical framework items such as
post-nrqm-framework-observable-and-probability,
post-nrqm-framework-ideal-conditional-measurement, and the state/composition
postulate cannot prove a QC statement. Define a finite complex state space,
density operator, outcome law, instrument/channel and circuit evolution as
mathematics. For Hamiltonian algorithms define a finite Hermitian matrix H and
the matrix e^{-itH}; use the root spectral theorem to prove it unitary. Do
not claim that this follows logically from a physical evolution postulate.

## Unresolved authoring obligations

1. QC10 must prove a clean reversible embedding with a finite gate/wire
   encoding and explicit time, depth, workspace and output-copy costs; its
   root classical suppliers alone do not establish coherent execution.
2. QC14 must resolve the polynomial-time-full-description versus
   indexed-gate uniformity conventions, fix a finite effective gate
   description, define promise acceptance through QC09/04 semantics, and
   prove the claimed amplification with fresh-register and query accounting.
3. QC23 must define the full cost vector once, then prove each tradeoff or
   lower bound under that model. Finite-gate counting and oracle query bounds
   are distinct theorems.
4. QC24 must define classical input encodings and access to vectors/matrices,
   precision, success, and the preparation isometry. It must account for
   classical loading/preprocessing and provide the inverse/control/reflection
   access needed by QA procedures. QRAM is an explicit access assumption with
   implementation and query/preprocessing costs, never a consequence of
   receiving a matrix.
5. QA22 must define block encoding and its normalization, ancilla block,
   approximation metric, and U/U†/controlled-call cost; sparse constructions
   must state the row/column/value access oracles and precision.
6. QC21 remains a substantial proof obligation. Childs gives only a threshold
   pointer and de Wolf is sketch-level; the complete finite gadget/concatenation
   route must arrive from QC’s QEC research, or the integrator must preserve an
   explicit authoring hold.

No new math item, proof, dependency edge, acceptance status or gate result is
created by this audit.

```json
{
  "plan_id": "inherited-root-remark-repair-plan",
  "status": "proposal-only-no-root-mutations",
  "source_snapshot": {
    "consumer_inventory": {
      "path": "research/quantum-planning-review/inherited-remark-edges.json",
      "sha256": "fbc334175b78a160cc11a2ca2c99fa47d57157226719fd95e3145ba07972388e"
    },
    "closure": {
      "path": "research/quantum-planning-review/root-prerequisite-closure.json",
      "sha256": "d9ffb738cea0c948875734a5919e4ab8ddd124387a318545117d113f7216c199",
      "item_count": 1832
    },
    "scope": "Only direct nonremark consumers of rem-sup-conventions and rem-real-and-complex-normed-space-convention in the supplied inventory and current closure."
  },
  "supremum_contract": {
    "real": {
      "ambient_type": "R",
      "domain": "A nonempty subset of R bounded above in R.",
      "definition": "def-complete-ordered-field",
      "uniqueness": "lem-sup-unique",
      "infimum_existence": "thm-infimum-property",
      "repair": "def-metric-bounded-diameter already proves its distance set nonempty and bounded above before using the real least-upper-bound property. Keep those hypotheses. Do not assign sup-empty or unbounded values in R."
    },
    "extended": {
      "ambient_type": "overline R, separate from R",
      "definition": "def-extended-reals",
      "complete_order_result": "lem-extended-reals-complete",
      "repair": "The existing theorem supplies every-subset sup/inf in overline R, including sup-empty = negative infinity and sup of an unbounded real subset = positive infinity, and states agreement with the real sup on nonempty bounded-above real sets. The metric-diameter consumer does not need this separate operation."
    },
    "new_item_need": "None for these direct consumers: the exact real and extended-real types/hypotheses already have proper root definitions/results. Do not rely on rem-sup-conventions for either contract."
  },
  "complex_norm_bridge": {
    "scope": "All complex normed spaces, with no finite-dimensionality or completeness assumption.",
    "root_boundary": "def-norm-and-normed-space remains real-only. No complex case is imported through remark or silently treated as real.",
    "proposed_items": [
      {
        "id": "def-complex-norm-and-complex-normed-space",
        "kind": "definition",
        "contract": "For a C-vector space V, N:V->R is a norm when it separates zero, satisfies N(lambda v)=|lambda|_C N(v) for every lambda in C, and satisfies the triangle inequality. Values are finite reals. Complex absolute homogeneity is part of the definition.",
        "deps": [
          "def-vector-space",
          "def-complex-numbers-and-arithmetic",
          "def-complex-conjugate-real-imaginary-part-and-modulus"
        ],
        "proof_route": "Definition only; instantiate the field-parametric vector-space item at C and use the existing complex modulus definition. No remark dependency."
      },
      {
        "id": "lem-complex-modulus-of-real-embedding-equals-real-absolute-value",
        "kind": "lemma",
        "contract": "The complex modulus of the canonical embedding of a real r into C equals the real absolute value of r.",
        "deps": [
          "def-complex-numbers-and-arithmetic",
          "def-complex-conjugate-real-imaginary-part-and-modulus",
          "def-abs-value",
          "lem-of-abs-value",
          "thm-of-square-roots"
        ],
        "proof_route": "Write the embedded scalar as r+0i. The complex modulus is the nonnegative square root of r^2; the real absolute value is nonnegative and has square r^2; uniqueness of nonnegative square roots identifies them."
      },
      {
        "id": "lem-complex-norm-realification-is-a-real-norm",
        "kind": "lemma",
        "contract": "For a complex normed (V,N), the realification V_R with the same N is a real normed space with the same underlying set, addition, norm values, and induced metric.",
        "deps": [
          "def-complex-norm-and-complex-normed-space",
          "def-realification-of-a-complex-vector-space",
          "def-norm-and-normed-space",
          "lem-complex-modulus-of-real-embedding-equals-real-absolute-value"
        ],
        "proof_route": "Separation and triangle inequality are inherited. For real r, restriction of scalars and the modulus-restriction lemma give N(rv)=|r|_R N(v). The metric is identical because the underlying addition and N are unchanged. Do not replace full C-homogeneity with real homogeneity."
      },
      {
        "id": "lem-complex-coordinate-l1-is-a-norm",
        "kind": "lemma",
        "contract": "The finite coordinate sum of complex moduli on C^n is a complex norm, including n=0.",
        "deps": [
          "def-complex-norm-and-complex-normed-space",
          "lem-complex-conjugation-and-modulus-laws",
          "def-finite-sum",
          "lem-finite-sum-laws"
        ],
        "proof_route": "Use modulus definiteness, multiplicativity for complex homogeneity, subadditivity for the triangle inequality, and finite-sum monotonicity. Treat C^0 as the singleton zero space."
      },
      {
        "id": "def-complex-normed-subspace",
        "kind": "definition",
        "contract": "A complex-linear subspace of a complex normed space with the restricted complex norm.",
        "deps": [
          "def-complex-norm-and-complex-normed-space",
          "def-linear-subspace"
        ],
        "proof_route": "Definition; the restricted axioms follow by restriction."
      },
      {
        "id": "lem-complex-normed-subspace-realifies-to-real-normed-subspace",
        "kind": "lemma",
        "contract": "A complex normed subspace W of V realifies to a real normed subspace W_R of V_R with identical restricted norm metric. A finite complex basis b_0,...,b_(n-1) induces the finite real basis b_0, ib_0,...,b_(n-1), ib_(n-1).",
        "deps": [
          "def-complex-normed-subspace",
          "def-realification-of-a-complex-vector-space",
          "lem-complex-norm-realification-is-a-real-norm",
          "def-normed-subspace",
          "def-linear-basis"
        ],
        "proof_route": "Restrict scalar multiplication and norm using the norm-realification lemma. Expand complex coefficients into real and imaginary parts for spanning; group a real dependence into a complex dependence for independence. This is a finite supplied-list proof and uses no choice."
      },
      {
        "id": "def-equivalent-complex-norms",
        "kind": "definition",
        "contract": "Two complex norms on one complex vector space are equivalent when positive real constants c,C bound one by the other in both directions.",
        "deps": [
          "def-complex-norm-and-complex-normed-space",
          "def-complete-ordered-field"
        ],
        "proof_route": "Definition only. Keep def-equivalent-norms real-typed; do not apply it directly to a complex vector space."
      }
    ],
    "no_remark_dependency_rule": "No proposed math item's deps include rem-real-and-complex-normed-space-convention or any other remark ID."
  },
  "remarks_and_consumers": [
    {
      "remark": {
        "id": "rem-sup-conventions",
        "path": "items/rem-sup-conventions.md",
        "raw_sha256": "ec48061f3b27c888264a3a42f64f4d68a9c3abeac87eda5cf72b7d84afd08f70",
        "current_deps": [
          "def-complete-ordered-field",
          "def-infimum",
          "thm-infimum-property",
          "fs-every-set-has-sup",
          "lem-sup-epsilon",
          "lem-inf-epsilon",
          "lem-sup-monotone",
          "lem-sup-translate",
          "lem-sup-scale",
          "lem-sup-sum",
          "lem-sup-unique",
          "lem-max-is-sup"
        ],
        "replacement_deps": null,
        "body_edit_loci": [],
        "consumer_review_duties": [
          "Keep this remark outside every dependency and justified_by list.",
          "Check def-metric-bounded-diameter against the real/extended supremum contracts rather than routing logic through this remark."
        ],
        "disposition": "No mutation of the remark is proposed; it remains explanatory prose. Remove it as a dependency of its consumer."
      },
      "direct_nonremark_consumers": [
        {
          "id": "def-metric-bounded-diameter",
          "path": "items/def-metric-bounded-diameter.md",
          "status": "published",
          "raw_sha256": "1314dd6d8834da6f0fc2bd0f55ff0e4c1d2604f9632dd909e4a53a91019c1de5",
          "current_deps": [
            "def-metric-space",
            "def-metric-ball",
            "def-bounded-set",
            "def-infimum",
            "thm-infimum-property",
            "lem-sup-unique",
            "def-complete-ordered-field",
            "lem-metric-nonnegativity",
            "rem-sup-conventions",
            "lem-of-add-order",
            "def-ordered-field"
          ],
          "replacement_deps": [
            "def-metric-space",
            "def-metric-ball",
            "def-bounded-set",
            "def-infimum",
            "thm-infimum-property",
            "lem-sup-unique",
            "def-complete-ordered-field",
            "lem-metric-nonnegativity",
            "lem-of-add-order",
            "def-ordered-field"
          ],
          "body_edit_loci": [
            "Definition paragraph headed Every one of the three scope restrictions is load bearing.",
            "Bullets stating exactly when diameter and point/set distances are defined."
          ],
          "edit_contract": "Keep diameter only for nonempty bounded A, prove D(A) nonempty and bounded above before using the real LUB property, and keep point/set distances only for nonempty sets. Existing def-complete-ordered-field, lem-sup-unique, def-infimum and thm-infimum-property supply the typed real contracts. Remove the citation to rem-sup-conventions. If extended-real commentary remains, cite def-extended-reals and lem-extended-reals-complete as a different ambient operation; never type it as a real supremum.",
          "consumer_review_duties": [
            "Check no later diameter formula uses an empty or unbounded A.",
            "Check every real sup expression follows nonempty and bounded-above proof obligations.",
            "Check any extended-real sup is explicitly in overline R and uses lem-extended-reals-complete."
          ]
        }
      ]
    },
    {
      "remark": {
        "id": "rem-real-and-complex-normed-space-convention",
        "path": "items/rem-real-and-complex-normed-space-convention.md",
        "raw_sha256": "83d74ad1a6af72cca9eeb7ecbbc1f59fec124c705139bbb2ddf0a8b3fcee07e4",
        "current_deps": [
          "def-norm-and-normed-space",
          "thm-complex-numbers-form-a-field",
          "def-complex-conjugate-real-imaginary-part-and-modulus"
        ],
        "replacement_deps": null,
        "body_edit_loci": [],
        "consumer_review_duties": [
          "Keep this remark outside every dependency and justified_by list.",
          "Check all five direct consumers against the complex norm definition and realification lemma before dropping the remark edges."
        ],
        "disposition": "No mutation of the remark is proposed. Promote the complex norm and realification contracts to proper definitions/results, then retain this remark only as nonlogical commentary or retire it after owner review."
      },
      "direct_nonremark_consumers": [
        {
          "id": "cor-inner-product-induces-a-norm",
          "path": "items/cor-inner-product-induces-a-norm.md",
          "status": "published",
          "raw_sha256": "06d3d95d221417947e74b966617d4c00cf515cc18daa5e8a92b15e5be189e921",
          "current_deps": [
            "thm-cauchy-schwarz-in-an-inner-product-space",
            "def-inner-product-norm",
            "def-norm-and-normed-space",
            "rem-real-and-complex-normed-space-convention",
            "lem-complex-conjugation-and-modulus-laws",
            "lem-of-abs-value",
            "lem-of-square-monotone",
            "thm-nth-roots-exist",
            "def-complex-conjugate-real-imaginary-part-and-modulus"
          ],
          "replacement_deps": [
            "thm-cauchy-schwarz-in-an-inner-product-space",
            "def-inner-product-norm",
            "def-norm-and-normed-space",
            "def-complex-norm-and-complex-normed-space",
            "lem-complex-conjugation-and-modulus-laws",
            "lem-of-abs-value",
            "lem-of-square-monotone",
            "thm-nth-roots-exist",
            "def-complex-conjugate-real-imaginary-part-and-modulus"
          ],
          "body_edit_loci": [
            "Statement final clause dispatching real/complex cases.",
            "Facts and Assumptions A3.",
            "Proof step 3.1."
          ],
          "edit_contract": "Use the real norm definition for R and the new complex norm definition for C. Preserve step 1.2's full complex homogeneity; do not replace it by real homogeneity.",
          "consumer_review_duties": [
            "Check complex homogeneity still uses lambda conjugate-lambda and the complex modulus.",
            "Check separation and triangle inequality remain proved in both scalar fields."
          ]
        },
        {
          "id": "thm-coordinate-map-for-a-finite-dimensional-normed-space",
          "path": "items/thm-coordinate-map-for-a-finite-dimensional-normed-space.md",
          "status": "published",
          "raw_sha256": "237d9cdc90a3d94070d187ba70ed847805f39aef6e055efb14fefdc51464ad9b",
          "current_deps": [
            "def-linear-basis",
            "thm-unique-coordinates-with-respect-to-an-ordered-basis",
            "def-topological-isomorphism-of-normed-spaces",
            "thm-all-norms-on-rn-are-equivalent",
            "thm-complex-numbers-are-the-real-coordinate-plane",
            "rem-real-and-complex-normed-space-convention"
          ],
          "replacement_deps": [
            "def-linear-basis",
            "thm-unique-coordinates-with-respect-to-an-ordered-basis",
            "def-topological-isomorphism-of-normed-spaces",
            "thm-all-norms-on-rn-are-equivalent",
            "thm-complex-numbers-are-the-real-coordinate-plane",
            "def-complex-norm-and-complex-normed-space",
            "def-realification-of-a-complex-vector-space",
            "lem-complex-modulus-of-real-embedding-equals-real-absolute-value",
            "lem-complex-norm-realification-is-a-real-norm",
            "lem-complex-coordinate-l1-is-a-norm"
          ],
          "body_edit_loci": [
            "Statement scalar-field typing sentence.",
            "Facts and Assumptions L4–L5.",
            "Proof step 1.3 and final inverse-bound argument."
          ],
          "edit_contract": "Type X by the real or complex norm definition. In the complex branch realify X and C^n, prove the coordinate l1 function is a complex norm, and apply the real norm-equivalence theorem to the realified coordinate norm. Preserve finite-dimensional scope and the zero-dimensional branch.",
          "consumer_review_duties": [
            "Verify complex l1 homogeneity for every complex scalar.",
            "Verify realification preserves the same norm metric and gives real dimension 2n.",
            "Verify n=0 remains explicit."
          ]
        },
        {
          "id": "def-bounded-linear-operator",
          "path": "items/def-bounded-linear-operator.md",
          "status": "published",
          "raw_sha256": "f69680f8b17c0d94ef03388b9bb10ac8417f995c53950f3a53827bfccfae417d",
          "current_deps": [
            "def-linear-map",
            "def-norm-and-normed-space",
            "rem-real-and-complex-normed-space-convention"
          ],
          "replacement_deps": [
            "def-linear-map",
            "def-norm-and-normed-space",
            "def-complex-norm-and-complex-normed-space"
          ],
          "body_edit_loci": [
            "Opening definition sentence that types the common scalar field."
          ],
          "edit_contract": "For K=R cite the real definition; for K=C cite the complex definition. Keep the operator linear over the same field as its domain and codomain. Keep its bound a nonnegative real constant.",
          "consumer_review_duties": [
            "Review downstream complex operator definitions for same-field linearity and complex norm typing.",
            "Do not silently treat a complex-linear map as merely real-linear."
          ]
        },
        {
          "id": "cor-finite-dimensional-subspaces-are-closed",
          "path": "items/cor-finite-dimensional-subspaces-are-closed.md",
          "status": "published",
          "raw_sha256": "6e89fb61918274b2ea9039e955ad02887f05ad1fa725b6c9b07a9bcb2d652b1b",
          "current_deps": [
            "cor-finite-dimensional-normed-spaces-are-banach",
            "def-normed-subspace",
            "def-linear-basis",
            "thm-rationals-countable",
            "thm-n-cross-n-countable",
            "lem-q-and-irrationals-dense-r",
            "thm-recursion",
            "thm-well-ordering-principle",
            "cor-archimedean-reciprocal",
            "rem-real-and-complex-normed-space-convention",
            "thm-complex-numbers-are-the-real-coordinate-plane"
          ],
          "replacement_deps": [
            "cor-finite-dimensional-normed-spaces-are-banach",
            "def-normed-subspace",
            "def-linear-basis",
            "thm-rationals-countable",
            "thm-n-cross-n-countable",
            "lem-q-and-irrationals-dense-r",
            "thm-recursion",
            "thm-well-ordering-principle",
            "cor-archimedean-reciprocal",
            "thm-complex-numbers-are-the-real-coordinate-plane",
            "def-complex-norm-and-complex-normed-space",
            "def-complex-normed-subspace",
            "def-realification-of-a-complex-vector-space",
            "lem-complex-norm-realification-is-a-real-norm",
            "lem-complex-normed-subspace-realifies-to-real-normed-subspace"
          ],
          "body_edit_loci": [
            "Statement scalar-field and subspace wording.",
            "Facts and Assumptions L7.",
            "Proof steps 1.2, 3.1, 4.1 and 5.1."
          ],
          "edit_contract": "Keep the real proof. For complex V and W use proper complex normed-space/subspace definitions; realify both, show a finite complex basis induces the finite real basis b_j, i b_j, and run the real metric argument on the identical restricted norm metric.",
          "consumer_review_duties": [
            "Verify W_R is a real-linear subspace of V_R and the restricted metric is unchanged.",
            "Verify a finite complex basis becomes a finite real basis, including dimension zero.",
            "Review transitive consumers cor-finite-dimensional-normed-spaces-are-banach and def-topological-isomorphism-of-normed-spaces after the new norm contract is integrated."
          ]
        },
        {
          "id": "thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent",
          "path": "items/thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent.md",
          "status": "published",
          "raw_sha256": "5911fdeae042c0fae53ac12be7af71996fcad21a31f65c0d648d4de28ab965da",
          "current_deps": [
            "thm-coordinate-map-for-a-finite-dimensional-normed-space",
            "def-equivalent-norms",
            "thm-all-norms-on-rn-are-equivalent",
            "thm-complex-numbers-are-the-real-coordinate-plane",
            "rem-real-and-complex-normed-space-convention"
          ],
          "replacement_deps": [
            "thm-coordinate-map-for-a-finite-dimensional-normed-space",
            "def-equivalent-complex-norms",
            "thm-all-norms-on-rn-are-equivalent",
            "thm-complex-numbers-are-the-real-coordinate-plane"
          ],
          "body_edit_loci": [
            "Statement typing of the two norms and equivalence.",
            "Facts and Assumptions L2.",
            "Proof step 3.1."
          ],
          "edit_contract": "Use def-complex-equivalent-norms for the conclusion and type both input functions as complex norms. Keep the coordinate proof and finite-dimensional scope. The real-only def-equivalent-norms must not be applied directly to a complex vector space.",
          "consumer_review_duties": [
            "Check the comparison constants are positive reals.",
            "Check both input norms retain full complex absolute homogeneity.",
            "Check both inequalities still follow from the two coordinate isomorphisms."
          ]
        }
      ]
    }
  ],
  "review_result": {
    "direct_nonremark_consumer_count": 6,
    "consumer_raw_hashes_verified_against_disk": true,
    "full_remarks_read": [
      "items/rem-sup-conventions.md",
      "items/rem-real-and-complex-normed-space-convention.md"
    ],
    "root_items_or_engine_files_edited": false,
    "merged_inventory_or_closure_files_edited": false,
    "closure_status": "This is a prerequisite repair plan, not proof that the closure passes. Each proposed math item needs authoring and proof review before consumer replacement edges are accepted."
  }
}
```
