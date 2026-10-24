---
id: def-qc-binary-pauli-label-and-quotient
kind: definition
title: Binary Pauli label and quotient
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-phase-aware-n-qubit-pauli-group
  - thm-qc-pauli-product-and-adjoint
  - thm-z-mod-p-is-a-field
  - def-finite-field-and-its-order
  - def-vector-space
  - def-linear-basis
  - def-dimension
justified_by:
  - thm-qc-binary-pauli-quotient-isomorphism
dependency_level: 7
sources:
  references:
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
    - title: "M. Hein et al., Entanglement in Graph States and Its Applications"
      url: https://arxiv.org/pdf/quant-ph/0602096
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "None; this is a finite quotient construction."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Definition

Let $Z_n$ be the scalar center of $\mathcal P_n$. Define $P\sim Q$ when $P^{-1}Q\in Z_n$, and let $Q_n$ be the set of equivalence classes $[P]=PZ_n$. The proposed coset product is $[P][Q]=[PQ]$. The quotient theorem verifies this product is well-defined and proves that the assignment

$$\lambda:Q_n\longrightarrow V_n:=\mathbb F_2^n\oplus\mathbb F_2^n,\qquad [P(k,x,z)]\longmapsto(x,z)$$

is a group isomorphism to the additive group of $V_n$. A binary label deliberately forgets the scalar phase.
