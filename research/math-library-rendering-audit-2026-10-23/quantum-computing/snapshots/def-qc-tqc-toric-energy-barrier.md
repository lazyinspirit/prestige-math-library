---
id: def-qc-tqc-toric-energy-barrier
kind: definition
title: Pauli-path energy barrier
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-qc-tqc-toric-hamiltonian
  - def-qc-tqc-toric-logical-loops
  - thm-qc-tqc-toric-code-dimension
  - def-qc-stabilizer-syndrome-and-logical-operators
  - def-qc-pauli-matrices
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by: []
proof_strategy: direct
axiom_use: "None; paths and syndrome-energy values are finite data."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Definition

Fix $L\ge3$, $J_e,J_m>0$, a unit vector $\psi$ in the toric code space, and
a specified nontrivial logical Pauli representative $Q$. An **elementary
Pauli path to $Q$** is a finite sequence $E_0,\ldots,E_T$ with $E_0=I$,
$E_T$ a scalar-phase multiple of $Q$, and
$E_{r+1}=P_rE_r$, where each $P_r$ is $X$, $Y$, or $Z$ on a single edge and
the identity on every other edge.

For any prefix Pauli $E$, define its energy excess
$\varepsilon(E):=\langle E\psi,H_LE\psi\rangle-E_{\rm code}$, where
$E_{\rm code}:=-L^2(J_e+J_m)$ is the energy of every code vector. The
**Pauli-path energy barrier** of $Q$ is

$$\mathcal B_L(Q):=\min_{(E_0,\ldots,E_T)}\max_{0\le r\le T}\varepsilon(E_r),$$

where the minimum ranges over elementary Pauli paths to $Q$. This is a
finite-code energy quantity; it is not a thermal lifetime.

## Facts & Assumptions

**Given:** The finite Hamiltonian, a nonzero toric code space, a unit code vector, and a specified logical Pauli representative.

[F1] [[def-qc-tqc-toric-hamiltonian]]: $H_L$ is the stated finite sum of star and plaquette checks.

[F2] [[thm-qc-tqc-toric-code-dimension]]: the code space has dimension four and every code vector has every check eigenvalue $+1$.

[F3] [[def-qc-stabilizer-syndrome-and-logical-operators]]: every Pauli is a phase-aware tensor product of one-qubit Pauli factors and its logical class is defined modulo scalar phase and stabilizers.

[F4] [[def-qc-pauli-matrices]]: the one-qubit Pauli factors are $I,X,Y,Z$, all unitary.

[F5] [[thm-qc-pauli-commutator-is-symplectic-pairing]]: conjugating a check by a Pauli changes its sign by a value in $\{+1,-1\}$ determined by their binary supports.

## Verification

1.1 For any unit code vector $\psi$, each check has eigenvalue $+1$ by [F2], so [F1] gives $\langle\psi,H_L\psi\rangle=-L^2(J_e+J_m)=E_{\rm code}$. For any Pauli prefix $E$ and any check $g$, [F5] gives $gE\psi=\pm Eg\psi=\pm E\psi$. Thus $E\psi$ has a joint check syndrome, and each term of $H_L$ has a fixed expectation on it. The sign pattern depends on $E$ and the checks, not on the choice of code vector $\psi$. Therefore $\varepsilon(E)$ is well-defined and independent of that choice. [F1, F2, F5, given, algebra]

1.2 Every $Q$ in [F3] is a finite tensor product of one-edge Pauli factors $I,X,Y,Z$ from [F4], up to scalar phase. Applying its nonidentity factors one edge at a time gives at least one elementary path, so the set of paths in the Definition is nonempty. [F3, F4, construct]

2.1 By [F1] and [F2], the energy excess of any prefix is $2J_ea+2J_mb$, where $a,b\in\{0,\ldots,L^2\}$ count its violated stars and plaquettes. This is a finite set of possible real values. Hence the set of peak excesses over the nonempty path family is a nonempty subset of a finite set, and its minimum exists. [F1, F2, step 1.2, algebra] ∎

