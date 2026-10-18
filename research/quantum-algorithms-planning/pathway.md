# Proposed quantum-algorithms pathway

Status: draft planning; proposed pages do not yet exist as library carriers.
This file records the intended branching route without creating unresolved page
links. A valid library `_pathway.md` can be authored after the A-page carriers
are registered and their actual prerequisite edges are reconciled.

The proposed first part establishes task, promise, circuit, oracle, and cost
conventions (QA-01), then develops reversible arithmetic and oracle conversion
(QA-02). The early-oracle branch continues through exact promise algorithms
(QA-03) and Simon’s algorithm (QA-04). A separate finite-group branch develops
Fourier analysis (QA-05), QFT circuits (QA-06), phase estimation (QA-07), order
finding (QA-08), factoring (QA-09), and finite abelian hidden-subgroup methods
(QA-10). Search methods form another branch: Grover search (QA-11), amplitude
amplification (QA-12), amplitude estimation (QA-13), then query lower bounds
(QA-14), polynomial methods (QA-15), and adversary methods (QA-16).

The walk branch develops discrete walks (QA-17), walk search and element
distinctness (QA-18), and continuous-time walks (QA-19). The matrix-simulation
branch develops product formulas (QA-20), linear combinations and Taylor
simulation (QA-21), block encodings (QA-22), signal processing (QA-23), singular
value transformation (QA-24), and qubitization (QA-25). Applications include
phase-estimation linear systems (QA-26), block-encoding linear systems (QA-27),
spectral estimation (QA-28), sampling and Monte Carlo (QA-29), and optimization
(QA-30). Number-theoretic extensions (QA-31), complexity and QMA (QA-32–33),
composition and dequantization (QA-34), communication (QA-35), and adiabatic
computation (QA-36) connect only to the prerequisites they actually use. Every
B companion is a logical leaf and is omitted from prerequisite parts.

QA37 forms a topology-facing branch from QC25–QC27, QC12's fixed-gate
compiler, QC04 measurement, QC06 output-distance bounds, and QA36's finite
adiabatic theorem. It defines encoded charge/fusion input, braid-letter access,
fusion readout, and separate gate, measurement, preparation, classical, and
physical-time costs. Its fixed-sector single-qubit Fibonacci compiler uses a
supplied certified SU(2) base net and gives the published braid-length and
output-distribution guarantees under the exact SK hypotheses. The exact QC
B₆ proof gives joint `SU(5)×SU(8)` density in both local charge blocks; the
complete spectator decomposition and braid-dependent one-qubit extension,
together with exact QSD, prove arbitrary-size triple-encoded approximation.
Logical error and leakage are bounded by the same ambient tolerances, even
after prior leakage. The dovetailed exhaustive compiler terminates under
certified Cauchy target access but has no useful word-length bound. No exact
leakage-free entangler is assumed. QA36's gap/regularity theorem controls band
leakage for a specified finite Hamiltonian family; it does not establish
physical phase existence or identify a real system's holonomy with the
categorical braid action.
