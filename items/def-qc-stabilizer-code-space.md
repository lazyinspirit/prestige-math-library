---
id: def-qc-stabilizer-code-space
kind: definition
title: Stabilizer code space
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-binary-pauli-label-and-quotient
  - def-qc-binary-symplectic-form
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-quantum-code-isometry-and-code-projector
  - def-qc-register-and-computational-basis
  - thm-qc-hermitian-pauli-phase-criterion
  - thm-qc-pauli-commutator-is-symplectic-pairing
justified_by:
  - thm-qc-stabilizer-projector-and-dimension
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §20.1'
      url: https://arxiv.org/pdf/1907.09415
---

## Definition

Let $n\ge1$ and let $S$ be an abelian subgroup of the Hermitian elements of
the phase-aware Pauli group $\mathcal P_n$ on the ordered $n$-qubit register.
Assume $-I\notin S$. The **stabilizer code space** is the common $+1$
eigenspace

$$\mathcal C(S):=\{\psi\in(\mathbb C^2)^{\otimes n}:g\psi=\psi\text{ for every }g\in S\}.$$

If $g_1,\ldots,g_r$ are independent generators of $S$, the associated
stabilizer rank is $r$; independence means no nonempty product of distinct
generators is $I$. The code-space projector and its nonzero dimension are
established by [[thm-qc-stabilizer-projector-and-dimension]].

## Remarks

The subgroup elements here are Hermitian Paulis in the phase-aware
$i^kX^xZ^z$ convention. The binary label records commutation but does not
replace the phase needed to determine whether a generator fixes the code with
eigenvalue $+1$.
