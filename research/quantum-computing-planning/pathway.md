# Proposed quantum-computing pathway

Status: draft planning. This describes the intended branching route only. Page
carriers have not yet been registered, so it does not link to library pages.
The machine-readable page proposal will carry the exact page-level edges.

## Finite state and register foundations

QC01 reuses the root finite-dimensional complex inner-product, adjoint, trace,
positive-operator, spectral and matrix-norm suppliers. QC02 fixes register
alphabets, computational basis order, tensor maps and partial trace. QC03
defines rays, density operators, ensembles, purification and Schmidt
decomposition. These interfaces form the mathematical state layer consumed by
all later branches.

## Outcomes, channels and elementary gates

QC04 defines projective measurements, POVMs, instruments, outcome laws,
normalization and zero-probability branches. QC05 proves finite-dimensional
Kraus, Choi and Stinespring equivalences for channels, and QC06 establishes
distinguishability, trace-distance and fidelity inequalities. In a parallel
branch QC07 defines qubits, Bloch coordinates, Pauli operators and elementary
one-qubit gates; QC08 gives exact control, phase, entanglement and multi-qubit
gate contracts. QC08 also owns reflections for arbitrary complex orthogonal
projectors, fixes both signs `R_Π=2Π−I` and `S_Π=I−2Π`, and keeps controlled
reflection access and cost explicit. QC09 supplies circuit syntax and
denotational semantics and connects measurements with classical control.
QC10 makes Boolean functions reversible with explicit clean/dirty ancillas,
compute-copy-uncompute and coherent oracle access, including a
fanout-sensitive parallel-depth contract.

## Synthesis and computation models

QC11 proves continuous-gate decompositions and states exact synthesis models;
QC12 develops approximate universality, with each Solovay–Kitaev hypothesis
and resource bound exposed; QC13 separates exact from approximate Clifford+T
synthesis and accounts for algebraic precision and ancillas. QC14 defines
uniform families, promise computation, acceptance, circuit costs and
bounded-error amplification. These pages provide the shared circuit and
complexity interfaces for the algorithms category.

## Stabilizer, communication and coding branches

QC15 develops Pauli/Clifford algebra and its binary symplectic representation;
QC16 proves stabilizer-state and circuit rules, including measurement
updates and classical simulation. QC17 treats Bell-state protocols,
teleportation and dense coding with precise corrections and communication
resources. Independently, QC18 defines classical and quantum codes,
subspaces, distance and detection; QC19 proves the Knill–Laflamme criterion
and recovery interfaces; QC20 specializes to stabilizer and CSS codes.

## Computation structure and limits

QC21 defines a finite mathematical noise and fault-location model, then
decomposes gadgets, concatenation and quantitative threshold obligations.
QC22 gives graph-state and adaptive measurement-based semantics and proves
their circuit interface. QC23 compares circuit costs, ancilla/time/space
tradeoffs and lower bounds under named models. QC24 defines state and isometry
preparation from explicit finite classical inputs and access assumptions, then
proves synthesis costs and information-theoretic limits. Its shared cost
theorem separates amplitude-table input/storage, continuous-angle gates,
bounded-arity gates, workspace and precision from any QRAM assumption. This
ordering retains the commission's topics without imposing a single linear
prerequisite chain.

The integrated proposal contains 306 substantive A-page supplier contracts
plus four cross-track reflection/state-preparation interfaces, and 24 worked
B-page examples. All 334 records remain draft planning. Exact page edges, item
dependencies, source locators, and remaining proof obligations are recorded in
the machine inventories and source manifest.
