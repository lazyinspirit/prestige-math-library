---
id: thm-qa-21-lcu-block-correctness
kind: theorem
title: LCU projected-block and postselection correctness
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - alg-qa-21-lcu-block-encoding
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-dirac-notation-conversion
  - def-qa-21-clean-ancilla-postselection
  - thm-qa-21-clean-ancilla-postselection-probability-law
justified_by: []
proof_strategy: direct
axiom_use: None; all registers, sums, and branch weights are finite-dimensional.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.17)–(28.21), printed pp.142–143: the projected block and postselection branch."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eq. (9.3), printed p.74: the unnormalized zero-index output and success probability."
---

## Statement

Let $M=\sum_{j<m}c_jV_j$ be a finite LCU representation with $\alpha=\sum_j|c_j|>0$, let $W$ be the unitary from [[alg-qa-21-lcu-block-encoding]], and let $Jx=|0_{\rm anc}\rangle\otimes x$ include every coefficient and PREPARE-work ancilla. Then
$$J^\dagger WJ=M/\alpha.$$
For every unit input vector $\psi$, the clean-ancilla zero-branch vector is $M\psi/\alpha$ and its postselection weight, under [[def-qa-21-clean-ancilla-postselection]], is $\|M\psi\|^2/\alpha^2$. If this weight is positive, the conditional system vector is $M\psi/\|M\psi\|$; if it is zero, the conditional vector is undefined.

## Facts & Assumptions

**Given:** The finite LCU representation, complete PREPARE and SELECT access, explicitly supplied PREPARE$^\dagger$ access with its declared cost, and a unit system vector $\psi$.

[L1] [[alg-qa-21-lcu-block-encoding]]: $W=P^\dagger S_{\rm sel}P$, where PREPARE sends the all-zero ancilla to the coefficient-amplitude state, up to one global phase, and SELECT applies each coefficient phase with its unitary term.

[F1] [[def-qc-dirac-notation-conversion]]: the bra is the adjoint functional, and $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle_{\rm root}x$.

[F2] [[def-qc-register-and-computational-basis]]: the index register has the declared ordered computational basis, including its one-dimensional zero-qubit case.

[F3] [[def-qa-21-clean-ancilla-postselection]]: the zero-branch vector of $\phi$ is $J^\dagger\phi$ and its weight is the squared norm of that vector.

[F4] [[thm-qa-21-clean-ancilla-postselection-probability-law]]: the zero and complementary branch weights of a unit vector are in $[0,1]$ and sum to one; a normalized conditional vector exists only when the corresponding weight is positive.

[F5] [[thm-qc-computational-basis-orthonormal]]: the computational index basis, including the zero-qubit register's basis, is orthonormal.

## Proof

**Given:** As in Facts & Assumptions.

1.1 Write $\beta_j=\sqrt{|c_j|/\alpha}$ and $\omega_j=c_j/|c_j|$ for $c_j\ne0$ (take $\omega_j=1$ when $c_j=0$). PREPARE gives $e^{i\theta}\sum_{j<m}\beta_j|j,0_{\rm work}\rangle$ from the all-zero ancilla. After SELECT, the $j$th component is $e^{i\theta}\beta_j|j,0_{\rm work}\rangle\otimes\omega_jV_j\psi$. The all-zero matrix element of PREPARE$^\dagger$ on $|j,0_{\rm work}\rangle$ is $e^{-i\theta}\beta_j$ by [F1], so the global phase cancels and $J^\dagger WJ\psi=\sum_j\beta_j^2\omega_jV_j\psi=M\psi/\alpha$. Padded invalid indices have zero prepared amplitude. Since this holds for every $\psi$, it proves the block identity; orthonormality [F5] validates these basis matrix elements. [given, L1, F1, F2, F5, algebra]

2.1 Apply [F3] to $\phi=WJ\psi$: its zero-branch vector is $J^\dagger WJ\psi=M\psi/\alpha$. Its branch weight is therefore $\|M\psi\|^2/\alpha^2$, and [F4] makes this a valid probability in $[0,1]$. [given, F3, F4, step 1.1, algebra]

3.1 If $\|M\psi\|>0$, division of the branch vector by its norm gives $M\psi/\|M\psi\|$. If $M\psi=0$, the weight is zero and [F4] forbids assigning a normalized conditional vector to that branch. [F3, F4, step 2.1, cases] ∎
