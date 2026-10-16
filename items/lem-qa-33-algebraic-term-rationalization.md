---
id: lem-qa-33-algebraic-term-rationalization
kind: lemma
title: Rational encoding preserves a promised local-Hamiltonian gap
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - def-qa-33-k-local-hamiltonian-promise
  - def-qa-33-effective-finite-matrix-encoding
  - thm-operator-norm-is-the-largest-singular-value
  - thm-complex-spectral-theorem-for-normal-endomorphisms
justified_by: []
proof_strategy: direct
axiom_use: None; finite matrix norms and Rayleigh quotients suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Julia Kempe, Alexei Kitaev, and Oded Regev, The Complexity of the Local Hamiltonian Problem"
      url: https://arxiv.org/pdf/quant-ph/0406180
      locator: §§4–5, rational local terms, PDF pp. 5–18
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
      locator: Chapter 14, §14.2, PDF pp. 116–120
---

## Statement

Fix $k$ and let $H=\sum_{j=1}^mH_j$ be an encoded $k$-local Hamiltonian with $m=\operatorname{poly}(n)$, local dimension at most $D=2^k$, and algebraic entries supplied by polynomial-time Cauchy procedures. For every rational $\tau>0$, a deterministic polynomial-time algorithm outputs rational Hermitian local matrices $\widetilde H_j$ with $\sum_j\|H_j-\widetilde H_j\|\le\tau$. Consequently $|\lambda_{\min}(H)-\lambda_{\min}(\widetilde H)|\le\tau$. If the original promise thresholds are $a<b$ with gap $\Delta=b-a$, choose $\tau\le\Delta/8$ and output thresholds $a+\tau,b-\tau$; the mapped YES and NO instances remain on their respective promise sides with gap at least $3\Delta/4$. A concrete polynomial running-time conclusion requires the stated polynomial-time Cauchy bounds for each algebraic entry encoding.

## Facts & Assumptions

**Given:** The finite local matrices and encodings, fixed $k$, polynomial $m$, and rational $\tau>0$.

[F1] [[def-qa-33-effective-finite-matrix-encoding]]: each entry can be approximated by rational real and imaginary parts in polynomial bit time at requested precision.

[F2] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: Hermitian matrices have finite orthonormal eigenbases and their least eigenvalue is the minimum unit Rayleigh quotient.

[F3] [[thm-operator-norm-is-the-largest-singular-value]]: the operator norm is the largest singular value and is bounded by the Frobenius norm.

[F4] [[def-qa-33-k-local-hamiltonian-promise]]: the explicit instance has finitely many fixed-arity Hermitian terms whose sum defines the promised Hamiltonian.

## Proof

1.1 Request each of the at most $D^2$ entries of each $H_j$ to absolute complex error at most $\tau/(2mD)$. Replace each entry by its rational approximation and symmetrize the matrix by $(A+A^*)/2$; this preserves rationality and Hermiticity, and does not increase the Frobenius error beyond the entrywise bound. The Frobenius norm of a $D\times D$ error matrix is at most $D$ times its largest entry error, so [F3] gives $\|H_j-\widetilde H_j\|\le\tau/(2m)$. The precision request has $O(\log(mD/\tau))$ bits beyond the input description and is computed in polynomial time by [F1]. The term list and common embedding are those of [F4]. [F1, F3, F4, given, construct]

2.1 Identity embedding preserves operator norm, so $\|H-\widetilde H\|\le\sum_j\|H_j-\widetilde H_j\|\le\tau/2\le\tau$. For each unit $v$, $|\langle Hv,v\rangle-\langle\widetilde Hv,v\rangle|\le\tau$; taking minima over the same unit sphere in both directions and using [F2] yields $|\lambda_{\min}(H)-\lambda_{\min}(\widetilde H)|\le\tau$. If $\lambda_{\min}(H)\le a$, then $\lambda_{\min}(\widetilde H)\le a+\tau$; if $\lambda_{\min}(H)\ge b$, then $\lambda_{\min}(\widetilde H)\ge b-\tau$. Their new gap is $\Delta-2\tau\ge3\Delta/4$. [F2, step 1.1, algebra] ∎
