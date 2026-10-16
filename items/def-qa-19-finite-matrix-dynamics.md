---
id: def-qa-19-finite-matrix-dynamics
kind: definition
title: Finite Hermitian matrix dynamics
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-self-adjoint-and-normal-endomorphism
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-functional-calculus-for-a-normal-endomorphism
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.1
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.1, PDF pp.81–82 (printed p.74 on PDF p.82): finite graph-generator evolution."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hermitian Hamiltonian evolution by the spectral functional calculus."
---

## Definition

In this page a **Hamiltonian** is a self-adjoint endomorphism $H$ of a
finite-dimensional complex inner-product space $V$; no physical postulate is
part of the term. Let $\sigma(H)$ be the set of its distinct eigenvalues and
let $P_\lambda$ be the orthogonal projection onto the $\lambda$-eigenspace.
For real time $t$, define the finite matrix evolution

$$U_H(t):=\sum_{\lambda\in\sigma(H)}e^{-it\lambda}P_\lambda = f_t(H),\qquad f_t(\lambda)=e^{-it\lambda}.$$

The second expression uses the finite spectral functional calculus
[[def-functional-calculus-for-a-normal-endomorphism]]. If $V$ is the zero
space, the spectrum is empty and the empty sum is the unique endomorphism,
which is also the identity on $V$. This definition specifies a mathematical
unitary from a finite matrix; it makes no claim that the operation has an
efficient circuit or a free access cost.
