---
id: alg-qa-quantum-phase-estimation
kind: algorithm
title: Quantum phase estimation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-eigenphase-estimation-model
  - def-qc-dirac-notation-conversion
  - def-qc-controlled-unitary-access
  - thm-qa-exact-binary-qft-circuit-correct
  - def-qc-circuit-denotational-semantics
  - def-qa-cyclic-quantum-fourier-transform
  - def-qc-register-and-computational-basis
  - def-qc-ordered-bitstring-encoding
  - def-qc-tensor-register-and-permutation
  - def-qc-one-qubit-gate-alphabet-and-rotations
  - def-qc-projective-measurement
  - def-non-negative-and-positive-operator
  - def-qc-povm-and-outcome-law
  - thm-qc-projective-measurement-outcome-law
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - def-qc-completely-positive-map
  - def-qc-instrument-and-conditional-state
justified_by: []
axiom_use: "None; the procedure uses finite registers and supplied unitary access."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, §4.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6, §4.6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Definition

**Input.** An integer $m\ge1$; an $m$-qubit phase register; a finite-dimensional system register $H$; a unitary $U:H\to H$; a unit eigenvector $\psi$ with promised phase $\theta\in[0,1)$; and one of the forward access capabilities in [[def-qa-eigenphase-estimation-model]].

**Output.** A classical label $y\in\{0,\ldots,Q-1\}$ and its phase estimate $y/Q$, where $Q=2^m$.

**Instructions.**

1. Initialize the phase register in $|0^m\rangle$ and the system register in $\psi$.
2. Apply the Hadamard $H=(X+Z)/\sqrt2$ of [[def-qc-one-qubit-gate-alphabet-and-rotations]] to each phase wire. This prepares $Q^{-1/2}\sum_{x=0}^{Q-1}|x\rangle\otimes\psi$ in the declared big-endian order.
3. For $j=0,\ldots,m-1$, apply the supplied controlled $U^{2^j}$ to control wire $q_{m-1-j}$ and the system. Under single controlled-unitary access, implement that operation with $2^j$ sequential calls to $C(U)$, as specified by the access model.
4. Apply the inverse of the positive-sign exact binary QFT circuit of [[def-qa-cyclic-quantum-fourier-transform]] and [[thm-qa-exact-binary-qft-circuit-correct]]. Construct it by reversing the chronological gate list and replacing each gate by its adjoint, including the final swaps and negating controlled-phase angles.
5. Perform the computational-basis projective measurement on the phase register. Its specified Lüders instrument has branch map $Z\mapsto (|y\rangle\langle y|\otimes I_H)Z(|y\rangle\langle y|\otimes I_H)$ for each label $y$ ([[def-qc-projective-measurement]], [[def-qc-instrument-and-conditional-state]]). Output the observed label $y$ and the ratio $y/Q$.

The inverse in step 4 is the inverse QFT, not $U^{-1}$; a forward QPE run makes no controlled inverse-unitary query. The coherent prefix is the circuit through step 4 before measurement. A consumer that coherently uncomputes this prefix needs the separate controlled inverse-power capability from [[def-qa-eigenphase-estimation-model]].

## Remarks

For the instrument clause in step 5, let $\mathcal H_{\rm joint}=(\mathbb C^2)^{\otimes m}\otimes H$ and $P_y=|y\rangle\langle y|\otimes I_H$. The phase-register basis projectors are self-adjoint idempotents, mutually orthogonal and complete, so $(P_y)_{y=0}^{Q-1}$ is a projective measurement on $\mathcal H_{\rm joint}$ ([[def-qc-projective-measurement]], [[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]]). The space $\mathcal H_{\rm joint}$ is nonzero and finite-dimensional because $m\ge1$ and the input includes a unit vector in finite-dimensional $H$ ([[def-qa-eigenphase-estimation-model]]). For every $v\in\mathcal H_{\rm joint}$,
$$\langle P_yv,v\rangle=\langle P_y^2v,v\rangle=\langle P_yv,P_yv\rangle\ge0.$$
Thus each $P_y$ is nonnegative ([[def-non-negative-and-positive-operator]]) and the complete family is a finite POVM ([[def-qc-povm-and-outcome-law]]). Since $P_y$ is itself nonnegative and $P_y^2=P_y$, uniqueness of the nonnegative square root gives $P_y^{1/2}=P_y$ ([[thm-non-negative-square-root-exists-and-is-unique]]). Applying [[thm-qc-luders-instrument-of-a-povm-is-valid]] to this POVM therefore proves that the branch maps $Z\mapsto P_y ZP_y$ specified in step 5 form a valid finite instrument.
