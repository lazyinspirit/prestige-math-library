---
id: lem-qa-26-phase-to-eigenvalue-unwrapping
kind: lemma
title: "Signed phase decoding has no alias on the promised spectrum"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - def-qa-26-hhl-access-model
  - alg-qa-quantum-phase-estimation
  - thm-qa-exact-binary-qft-circuit-correct
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-qa-19-matrix-exponential-unitary-properties
  - lem-qa-13-pi-rational-bounds
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof diagonalizes a finite-dimensional self-adjoint matrix."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Aram W. Harrow, Avinatan Hassidim, and Seth Lloyd, Quantum algorithm for linear systems of equations"
      url: https://arxiv.org/pdf/0811.3171
      locator: "Appendix A, especially §§A1–A3, PDF pp. 5–11; Hermitian embedding §A4, PDF pp. 11–12."
    - title: "Andrew M. Childs, Robin Kothari, and Rolando D. Somma, Quantum algorithm for systems of linear equations with exponentially improved dependence on precision"
      url: https://arxiv.org/pdf/1511.02306
      locator: "QLSP oracle model and Theorem 2, PDF pp. 2–5; used to compare, not to replace a local sparse-simulation proof."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Complete 191-page notes; phase estimation §4.3, printed p. 19; amplitude amplification §19.3; Hamiltonian simulation chapters 27 and 29."
---

## Statement

Let $0<\epsilon\le1$, $\kappa\ge1$, $t_0=2048\kappa/\epsilon$, and let $T$ be the least power of two with $T\ge8(t_0+1)$. For $H=H^*$ with $\|H\|\le1$, phase estimation using powers of $e^{+iHt_0/T}$ has exact eigenphase angle $\lambda t_0/T$ on an eigenvector of eigenvalue $\lambda$. This lies strictly in $(-\pi,\pi)$; signed decoding $k=y$ for $y<T/2$ and $k=y-T$ otherwise uses the unique centered representative. Its eigenvalue grid is $\widetilde\lambda=2\pi k/t_0$, with spacing $2\pi/t_0$.

## Facts & Assumptions

**Given:** A self-adjoint finite-dimensional $H$, the OP5 scale, and $T$ as above.

[F1] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a self-adjoint finite-dimensional operator has an orthonormal eigenbasis and real eigenvalues.

[F2] [[thm-qa-19-matrix-exponential-unitary-properties]]: $U_H(t)=e^{-itH}$; on an eigenvector with eigenvalue $\lambda$, replacing $t$ by $-s$ gives $e^{+is\lambda}$.

[F3] [[alg-qa-quantum-phase-estimation]] and [[thm-qa-exact-binary-qft-circuit-correct]]: phase estimation uses Fourier-basis labels modulo $T$.

[F4] [[lem-qa-13-pi-rational-bounds]]: $\pi>3$.

## Proof

1.1 By [F1], it is enough to evaluate the circuit on one eigenvector $|u\rangle$ with eigenvalue $\lambda\in[-1,1]$. Each controlled power has eigenphase $\lambda 2^jt_0/T$, so their binary phase-estimation base is $e^{+iHt_0/T}$ and its phase angle is $\lambda t_0/T$. [given, F1, F2, F3]

1.2 Since $T\ge8(t_0+1)$, $|\lambda t_0/T|\le t_0/T<1/8<\pi$ by [F4]. Thus this angle is already in the centered interval and cannot be confused with an angle shifted by $2\pi$. Centered decoding gives the stated signed integer $k$ and adjacent eigenvalue grid values differ by $2\pi/t_0$. [given, F4, step 1.1, algebra] ∎
