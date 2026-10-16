---
id: alg-qa-19-hypercube-state-transfer
kind: algorithm
title: Hypercube continuous-time state transfer
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-19-finite-matrix-dynamics
  - lem-qa-19-hadamard-uniform-state-preparation
  - def-qa-19-continuous-time-walk
  - def-qa-19-graph-generator-conventions
  - def-qa-19-hamiltonian-access-cost-model
  - def-qc-projective-measurement
  - def-qc-circuit-cost-model
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.2
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.2, PDF p.82 (printed p.74): hypercube adjacency is the sum of one-qubit Pauli-X terms and gives opposite-corner transfer."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hermitian evolution and the separate simulation-cost question."
---

## Definition

**Input:** An integer $n\ge0$, an ordered $n$-qubit register initialized to
$e_{0^n}$, and a Hamiltonian-access contract for
$$A_n:=\sum_{j=0}^{n-1}X_j,$$
where $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and
$X_j:=I_2^{\otimes j}\otimes X\otimes I_2^{\otimes(n-j-1)}$ is its tensor-map
extension acting on factor $j$ and as the identity on every other factor, by
[[def-qc-tensor-map]]. The contract must explicitly
supply either the whole operation $U_{A_n}(\pi/2)$ or the $n$ local operations
$U_{X_j}(\pi/2)$ in the declared ordered tensor factors. The local-operation option requests each one-qubit evolution separately; its
equivalence to the whole evolution is proved by the correctness argument and
is not assumed here. This contract does not make arbitrary matrix exponentiation free. Every supplied query, gate, description-bit,
and synthesis cost is recorded under
[[def-qa-19-hamiltonian-access-cost-model]] and
[[def-qc-circuit-cost-model]].

**Procedure:** If the whole operation is supplied, apply $U_{A_n}(\pi/2)$ once.
If the local operations are supplied, apply $U_{X_j}(\pi/2)$ once for each
$j=0,\ldots,n-1$ in increasing order. Then perform the computational-basis
projective measurement and return the observed $n$-bit word. For $n=0$, the
sum is empty, the register is the one-dimensional empty tensor product, the
evolution is the identity, and the output word is empty. For every $n$, the
operation and readout costs come from the declared access and circuit models;
the matrix formula alone supplies no implementation or cost.
