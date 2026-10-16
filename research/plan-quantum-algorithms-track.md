# Quantum algorithms

Status: draft research plan; original scope 2026-10-14, QA37 TQC-algorithm
expansion 2026-10-16. This document proposes a future
mathematical category and item graph. It does not author library items, register
canonical pages, assert source reading complete, claim proof acceptance, or
change an autopilot run. Page identities and initial branches are in
`research/quantum-algorithms-planning/pages.json`; the planning pathway without
unregistered page links is in `research/quantum-algorithms-planning/pathway.md`.

## Scope and mathematical boundary

The track treats a quantum algorithm as a finite procedure on explicitly
encoded finite-dimensional complex vector spaces. It defines its registers,
state preparation, operations, measurements, probability law, classical
post-processing, and access model. It proves algorithmic correctness,
termination, output distributions, success probability, and resource bounds in
separate result items. Statements of physical motivation may appear in
nonlogical remarks, but physics postulates, experiments, physical theorems, and
observations are never premises or dependency targets.

The category consumes the quantum-computing track's shared mathematical
interfaces for finite-dimensional operators and Dirac conventions, registers, tensor products, density operators, instruments,
channels, circuit semantics, controlled and inverse access, ancillas,
reflections, uniform circuit families, and state preparation. The following
stable interface stems confirmed in the reconciled QC proposal include
`def-qc-dirac-notation-conversion`,
`def-qc-register-and-computational-basis`,
`def-qc-ordered-bitstring-encoding`, `def-qc-tensor-register-and-permutation`,
`def-qc-partial-trace`, `def-qc-pure-state-and-ray`,
`def-qc-density-operator`, `def-qc-ensemble-and-purification`,
`def-qc-projective-measurement`, `def-qc-povm-and-outcome-law`,
`def-qc-instrument-and-conditional-state`, `def-qc-quantum-channel`,
`thm-qc-finite-kraus-choi-stinespring-equivalence`,
`def-qc-trace-distance`, `def-qc-fidelity`,
`def-qc-diamond-norm`, `thm-qc-diamond-norm-ancilla-dimension-bound`,
`thm-qc-measurement-variation-at-most-trace-distance`,
`thm-qc-channel-composition-hybrid-bound`,
`thm-qc-channel-tensor-error-bound`,
`def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`,
`def-qc-relative-phase`, `def-qc-reflection`,
`thm-qc-reflection-unitary-involution`,
`thm-qc-rank-one-reflection-phase-and-control-sign`,
`def-qc-circuit-syntax-and-register-order`,
`def-qc-circuit-denotational-semantics`,
`def-qc-classical-control-and-measurement-circuit`,
`def-qc-clean-and-dirty-ancillas`, `alg-qc-reversible-embedding`,
`thm-qc-reversible-embedding-cost`, `def-qc-coherent-function-oracle`,
`def-qc-uniform-circuit-family`, `def-qc-promise-computation-model`,
`def-qc-quantum-acceptance-probability`, `def-qc-circuit-cost-model`,
`def-qc-bqp-promise-class`, `alg-qc-bounded-error-amplification`,
`thm-qc-bounded-error-amplification-correct`,
`def-qc-state-preparation-cost-model`, `alg-qc-state-preparation`,
`thm-qc-state-preparation-cost`, and
`thm-qc-state-preparation-rotation-level-upper-bound`. QA consumes each exact
shared contract only when its item-level proof uses it and does not create a
dependency from QC to QA.

All amplitudes and matrix formulas depend on QC01's
`def-qc-dirac-notation-conversion` and inherit the root library convention that
the complex inner product is linear in its first argument. The shared QC
Dirac convention translates this as $\langle x|y\rangle_D:=\langle y,x\rangle_{root}$
and $\langle x|:y\mapsto\langle y,x\rangle_{root}$; thus
$|x\rangle\langle y|$ sends $z$ to $\langle z,y\rangle_{root}x$ and has matrix
coordinates $xy^{\dagger}$. Every source formula using the opposite convention
must be translated before it is used in a QA contract or proof.

Every algorithm contract will state: finite input and output sets; encoding and
register order; admissible input/promise; initial state or a costed state
preparation procedure; each gate, oracle, controlled operation, and inverse
query it uses; loop bounds and failure branches; measurement and classical
post-processing; whether output is classical or a quantum state; and separate
query, gate, and classical bit costs. Correctness, termination, precision,
probability, and cost are proved elsewhere. A bare matrix does not grant an
efficient controlled or inverse oracle. A state-preparation/QRAM assumption is
charged and stated explicitly. Relative and global phase are distinguished
because a phase that is global for an isolated operation can become observable
under control. Clean ancillas are returned to a specified fiducial state;
dirty ancillas are arbitrary unknown inputs restored exactly. Exact synthesis
is separated from approximation, and promise problems from total problems.

Definitions and algorithms do not list their own correctness or
well-definedness theorem in `deps`. If a later theorem establishes that a
procedure is well-defined, it depends on the procedure and is named in that
definition's `justified_by` field when the schema's direction applies. No B
example, counterexample, or remark supplies a dependency. B pages are logical
leaves. A-page inventories should normally contain 10–35 items; topics exceeding
60 proposed A items must be split into new A/B pairs while retaining all
approved scope and branch dependencies. There are 36 originally approved
topic areas; QA37 is an owner-authorized scaffold expansion, with each topic
visible as an A page and examples companion.

## Branch architecture

The route is a dependency graph, not a single sequence. The foundations branch
starts with problem, promise, encoding, and cost models (QA-01), then reversible
arithmetic and oracle conversion (QA-02). Exact oracle algorithms and Simon's
algorithm depend on that interface. Finite abelian Fourier analysis (QA-05)
feeds QFT circuits (QA-06), phase estimation (QA-07), order finding (QA-08),
factoring (QA-09), and finite abelian hidden-subgroup algorithms (QA-10).
Search forms a separate branch through Grover rotations (QA-11), general
amplitude amplification (QA-12), and estimation/counting (QA-13). Query lower
bounds (QA-14), the polynomial method (QA-15), and adversary methods (QA-16)
use only the query and algebraic prerequisites they need.

Discrete-time quantum walks (QA-17) lead to walk search and element
distinctness (QA-18), while continuous-time walks (QA-19) lead into Hamiltonian
simulation (QA-20). Simulation advances through LCU and Taylor methods (QA-21),
block encodings (QA-22), quantum signal processing (QA-23), quantum singular
value transformation (QA-24), and qubitization (QA-25). These branches support
linear-system algorithms (QA-26–27), spectral estimation and matrix functions
(QA-28), sampling and Monte Carlo (QA-29), and optimization/SDP/variational
models (QA-30). Number-theoretic extensions (QA-31), complexity classes and
QMA (QA-32–33), algorithm composition and dequantization (QA-34), communication
(QA-35), and adiabatic computation (QA-36) consume only their stated interfaces.
The precise page-level graph is recorded in `pages.json`; item-level edges in
`proposed-items.json` remain the authority for logical use.

## Topic coverage and proof obligations

| Topic | Required mathematical content and local proof route |
|---|---|
| QA-01 | Define finite computational tasks, total functions and promise relations, encodings, uniform circuit/oracle models, output/error criteria, reductions, and separate query/gate/bit costs. Prove basic model conversions only with their stated overhead. |
| QA-02 | Define reversible maps on finite bit strings and their unitary basis action. Give exact compute-copy-uncompute and bit-to-phase oracle procedures; prove clean-up and phase-kickback identities and include gate/ancilla costs. |
| QA-03 | Define the Deutsch, Deutsch–Jozsa, and Bernstein–Vazirani promise sets, exact oracle calls, and output conventions. Prove each output distribution directly and compare classical deterministic/randomized query models separately. |
| QA-04 | Define Simon's function promise, hidden subgroup/period, oracle encoding, and sample procedure. Prove the needed $\mathbb F_2^n$ Hadamard-kernel/character orthogonality locally, prove Fourier samples lie in the annihilator, bound rank-deficiency for independent uniform samples, and prove Gaussian elimination returns the hidden period; count bounded repetitions. This specialized proof does not create a QA04 dependency on the general finite-abelian Fourier page QA05. |
| QA-05 | Define characters of finite abelian groups and a fixed Fourier sign/normalization. Prove character orthogonality, inversion, Parseval, convolution, annihilators, and quotient/subgroup identities, with explicit finite sums. Reuse audited root character/group suppliers; add only missing interfaces. |
| QA-06 | Specify the QFT over cyclic and binary registers, bit order, controlled rotations, bit reversal, and exact/approximate circuit conventions. Prove the gate identity and a telescoping operator-norm error for truncation, then give the resulting ideal elementary-rotation gate bound. For a finite gate alphabet, invoke the exact QC11/QC12 Solovay–Kitaev compiler and error/resource theorem with its hypotheses, while separating synthesis error from QFT truncation error and stating exactly whether classical angle-description bit time is charged. |
| QA-07 | Define phase modulo one, eigenstate and superposition output semantics, controlled powers, inverse access, and finite precision. Prove the phase-estimation amplitude formula and a tail bound, including degeneracies and the probability law of the measured estimate. |
| QA-08 | Define order-finding promise and sample acceptance, rational reconstruction, and good/bad phase samples. Prove a good-sample criterion with continued fractions, preserve the denominator-vs-order distinction, and prove the bounded-repetition success bound under an explicit distribution. |
| QA-09 | Specify Shor's factoring as classical randomized reduction plus modular-exponentiation quantum subroutine, all exceptional cases, output verification, and arithmetic gate/bit cost. Prove the order-to-factor implication and success lower bound only with cited local number-theory prerequisites. |
| QA-10 | Define finite abelian HSP input encoding, hiding function/oracle, Fourier sampling, and subgroup recovery. Prove the sampling law and recovery bounds under exact group representation assumptions; state nonabelian obstacles as scope limitations, not failed claims of generality. |
| QA-11 | Define the marked subset, phase oracle, uniform initial state, and Grover iterate. Prove the invariant two-plane action, exact amplitudes after integer iterations, and edge cases for zero/all/one marked items and overshoot. |
| QA-12 | Define a state-preparation unitary and success projector, good/bad subspaces, reflections and phase conventions. Prove amplitude amplification's rotation and robust guarantees, charge each controlled call/reflection, and separate unknown-success-probability variants. |
| QA-13 | Define amplitude estimation/counting targets, error and confidence conventions, and each algorithm variant. Prove precision and failure bounds from the specified phase-estimation/amplification primitive, with query and controlled-query costs and boundary cases. |
| QA-14 | Fix bit-query and phase-query oracle models and input promise. Prove the hybrid/Bennett–Bernstein–Brassard–Vazirani lower bound and unstructured-search lower bound, then compare with QA-11 under matching cost conventions. |
| QA-15 | Define acceptance polynomials for a specified phase or bit oracle model and approximate degree. Prove the polynomial representation and selected degree lower bounds, preserving exact promise/domain assumptions. |
| QA-16 | Define adversary matrices, filtered adversary bounds, and the relevant norm conventions. Prove the spectral lower-bound theorem and the established general-adversary tightness theorem with their matching upper constructions. Those are local proof obligations even if a full proof has not yet been authored. Only a different, precisely formulated claim shown genuinely unproved after status review may be an open problem. |
| QA-17 | Define finite reversible Markov chains, discriminants, coin/reflection spaces, and the walk operator. Prove unitarity, invariant subspaces, and spectral mapping with irreducibility/reversibility hypotheses stated exactly. |
| QA-18 | Define marked vertices, stationary mass, spectral gap, hitting/search tasks, and element-distinctness oracle. Prove the selected walk-search bound and element-distinctness query complexity under its walk and input assumptions. |
| QA-19 | Define continuous-time walk evolution as a matrix exponential of a declared finite Hermitian graph generator, including adjacency/Laplacian normalization. Prove unitarity and worked spatial-search bounds with graph-size and access costs explicit. |
| QA-20 | Define Hamiltonian input representations and simulation error in operator norm, including sparse/term-list access costs. Prove first- and higher-order product-formula error from commutator bounds with time, norm, degree, and precision dependence exposed. |
| QA-21 | Define LCU normalization, select-unitary access, ancilla preparation, and oblivious amplification. Prove the block/projection identity, truncated Taylor remainder, success amplification, and total query/gate cost. |
| QA-22 | Define an $(alpha,a,epsilon)$ block encoding (or the chosen exact specialization), signal projector, normalization, and controlled access. Prove composition, adjoint, and error rules; charge preparation/select costs and identify exactness assumptions. |
| QA-23 | Fix QSP phase and parity conventions, signal unitary, target polynomial, and boundedness assumptions. Prove polynomial characterization and a constructive synthesis result under the theorem's precise hypotheses, including numerical precision. |
| QA-24 | Define singular-value subspaces and polynomial action with explicit signal/block-encoding conventions. Prove the transformation theorem, error propagation, parity constraints, and query/resource accounting, including zero singular values and degenerate subspaces. |
| QA-25 | Define qubiterate and exact oracle assumptions. Derive its spectral relation to the encoded matrix and prove the chosen near-optimal simulation bound. State comparison lower bounds only in the same access model. |
| QA-26 | State the HHL/phase-estimation solver's matrix promise, condition-number bounds, eigenvalue cutoff, input state, precision, and output as a conditional quantum state. Prove reciprocal approximation, success/postselection bound, and full resource dependence; no classical full-vector output claim. |
| QA-27 | Define block-encoded inverse, polynomial approximation, variable stopping times, and variable-time amplification. Prove solution-state fidelity/success/cost under explicit spectral assumptions and state all normalization, preparation, and quantum-output limits. |
| QA-28 | Define matrix access, eigenvalue/singular-value target, measurement output, and function approximation domains. Prove estimation or QSVT-based matrix-function guarantee with conditioning, scaling, precision, and output access costs. |
| QA-29 | Define the target distribution or expectation, observable, and data-access/preparation model. Prove sampling/expectation bounds via amplitude estimation and compare with classical Monte Carlo only after matching input and precision costs. |
| QA-30 | Define optimization/SDP instance encoding, feasible set, objective, oracle, measurement estimator, and approximation criterion. Prove only specified guarantees; include counterexamples to unsupported universal advantage/convergence claims. |
| QA-31 | Define finite-group period, hidden shift, discrete logarithm, and any lattice/dihedral promise and access model. Prove discrete-log and supported extensions from Fourier/order-finding interfaces; delimit regimes without a proved algorithm. |
| QA-32 | Define EQP, BQP, ZQP, uniformity, error, oracle and reduction conventions. Prove amplification and elementary containments in the chosen model; present oracle separations with exact quantifiers and make no unproved BQP/classical separation claim. |
| QA-33 | Define QMA verifier, completeness/soundness, witness register, amplification, and local-Hamiltonian encodings. Construct the Feynman–Kitaev history-state Hamiltonian and prove locality, completeness/soundness gap, and reduction size from explicit intermediate lemmas. |
| QA-34 | Define composition interfaces, precision/error budgets, verification, input/output costs, and dequantization. Prove error/resource composition and each advertised correspondence; a bibliography or empirical speedup is not a substitute. |
| QA-35 | Define finite-dimensional communication protocols, shared resources, message dimensions, output relation, error, and communication cost. Prove the selected fingerprinting protocol and communication bounds, distinguishing classical and quantum messages. |
| QA-36 | Define a finite-dimensional Hermitian path, endpoint encodings, differentiability/regularity, minimum gap, and adiabatic schedule. Prove the selected adiabatic error theorem and circuit equivalence under its hypotheses; state no empirical postulate. |
| QA-37 | Define finite anyon tasks, fusion-tree input access, braid-word and fusion-measurement costs, and phase-sensitive control. Compile fixed-sector Fibonacci single-qubit circuits with a supplied certified inverse-closed SU(2) base net; prove termination, operator/output-distribution error, braid length, and finite-precision costs under Cauchy-name assumptions. Prove arbitrary-size triple-encoded approximation from joint SU(5)×SU(8) B₆ density, full spectator decomposition, braid-dependent one-qubit extensions, exact QSD, and summed projective-logical/leakage bounds, including after prior leakage. Compose with the finite JRS bound only for a specified C², isolated, uniformly gapped band. The dovetailed compiler terminates under certified target access but has no useful length bound; efficient joint-block compilation and physical realization remain separate cost/model obligations. No exact leakage-free entangler is assumed. |

## Existing mathematical suppliers and physical-source boundary

The root library already has substantial mathematical suppliers relevant to
this track. The current candidate audit includes `def-inner-product-space`,
`def-adjoint-of-a-linear-map-between-inner-product-spaces`,
`def-operator-norm-on-a-finite-dimensional-inner-product-space`,
`def-non-negative-and-positive-operator`,
`thm-complex-spectral-theorem-for-normal-endomorphisms`,
`thm-operator-norm-is-the-largest-singular-value`, and `prop-trace-is-linear`;
finite probability suppliers `def-finite-probability-space-and-event` and
`lem-finite-probability-basic-laws`; finite-group/character and field suppliers
such as `def-additive-character-of-a-finite-abelian-group` and
`def-finite-field-and-its-order`; continued-fraction suppliers including
`thm-normalized-finite-continued-fraction-uniqueness` and
`lem-continued-fraction-error-bound`; and computational supplier
`def-boolean-circuit-size-depth-fanin-and-basis`. Candidate status, actual
statements and proof scope, precise dependency closure, and any gaps are being
checked against the carriers and the assigned researchers' inventories before
these items are inserted as logical dependencies. The authoritative exact
supplier and alias disposition will be recorded in
`research/quantum-algorithms-planning/prerequisite-audit.md`.

The physics library's non-relativistic quantum pages and `physics/items/` are
reviewed for conventions and reusable mathematical proof ideas. The namespace
contains state-vector/ray and density-operator mathematics alongside explicit
physical formulation, postulates, and physical theorems. For example,
`def-nrqm-state-geometry-state-vectors-and-rays` is tagged `domain: mathematics`,
whereas `def-nrqm-state-geometry-framework-state-space` imports a physical state
postulate, and the measurement `pthm-nrqm-*` results are conditional on adopted
physical postulates. No `physics/` ID enters a QA item's `deps`,
`justified_by`, or proof premises. Where a complete argument is useful, a
root-local finite-dimensional supplier is proposed with its own hypotheses and
proof obligations; the physics item is recorded only as nonlogical provenance
or convention context. Adopted mathematical probability laws are definitions;
normalization, positivity, invariance, representation equivalence, and
algorithmic correctness require proved local suppliers.

## Sources and status

Research sections are assigned by topic: qa_r1 owns QA-01–06; qa_r2 owns
QA-07–10 and QA-31; qa_r3 owns QA-11–16; qa_r4 owns QA-17–21, QA-25, and
QA-36; qa_r5 owns QA-22–24 and QA-26–30; qa_r6 owns QA-32–35 and a cross-track
interface audit. Each A page must have two independent full-text treatments,
including one comprehensive text/course across the corpus; partial reading is
marked by exact chapter/page ranges. Full source
identity, retrieval attempts, hashes, extraction lengths, complete read chunks,
proof locators, supported claims, and failures belong in each section's source
ledger. The integrator's `source-manifest.json` is assembled from the actual
received ledgers only. PDF extraction or a fetch receipt alone is not evidence
that text was read. The current `coverage.md` maps all A/B pages to item-level
source locators and points to the ledgers for unread or unsupported areas.

At this integration checkpoint, all six section inventories and source ledgers have been merged into a 538-item proposal across 36 A/B pairs (464 A-page items; 10–27 per A page). The actual combined check at [mechanical-check.json](quantum-planning-review/mechanical-check.json) remains FAIL on ten inherited root remark suppliers; the direct QA/QC proposal rows, item graph, local item order, and supplier-page reachability pass. Root’s [SHA-bound prerequisite-repair plan](quantum-planning-review/prerequisite-repairs.json) records 18 existing-consumer recipes and 14 proposed typed suppliers. The linked [planned-repair check](quantum-planning-review/planned-repair-check.json) reports a PASS for its virtual 2,729-node closure, with zero checker errors; the actual library closure remains HOLD because those recipes have not been executed. These are planned suppliers and proof obligations, not changes to root library items or proof acceptance. The raw QA source ledgers and item-level unresolved obligations remain authoritative. No item is marked proved or accepted by this planning document.


Binding operational definitions for the advanced construction families are in [operational-contracts.md](quantum-algorithms-planning/operational-contracts.md). Machine rows bind OP0–OP8/OP1A, including bare-input coefficient/complement/phase generation, finite failure/cap branches, declared access and charged arithmetic. These finite definitions do not certify the separate correctness, precision, termination or resource proof obligations. The final scoped check has 896 proposed contracts/120 pages and 1,834 inherited root prerequisites; only the original ten forbidden inherited remarks and draft Golden–Thompson warning remain.

## QA37 topological-algorithm expansion, 2026-10-16

QA37 adds a fixed-sector Fibonacci braid compiler and an explicit fusion
measurement interface. The compiler requires the published QC inverse-closed
dense-SU(2) contract, its finite base-net certificate, rational per-gate
tolerances, and the published Solovay–Kitaev error, length, and bit-complexity
theorems. The derived length is
`O(G log^3.97(G/ε))` for `G` one-qubit gates and total operator error `ε`;
the bit-time claim is conditional on the exact Cauchy-name, algebraic-entry,
and fixed-certificate hypotheses. Controlled operations retain their phase
reference. The exact QC `B₆` proof gives joint `SU(5)×SU(8)` density in the two local
charge blocks. It approximates `U⊕(det U)⁻¹` and
`U⊕diag((det U)⁻¹,1,1,1)` simultaneously; the full spectator decomposition
preserves the operator-error bound on the entire register. A braid-dependent
one-qubit extension makes the same estimate valid after prior leakage. The
exact QSD supplier and these local gates prove arbitrary-size
triple-encoded circuit approximation. A dovetailed exhaustive compiler
terminates with certified Cauchy target access but has no useful resource
bound. Efficient joint-block compilation and physical realization remain
separate obligations, and no exact leakage-free entangler is required.

The adiabatic branch consumes the existing finite JRS theorem only under its
`C²` path, isolated constant-rank spectral band, positive gap, and derivative
bounds. A local Hamiltonian family, topological phase, and identification of
its adiabatic transport with category `F/R` data are explicit model/physical
inputs, not consequences of the finite path estimate. Detailed item contracts
and proof routes are in
[`sections/qa37-topological-algorithms.md`](quantum-algorithms-planning/sections/qa37-topological-algorithms.md).
