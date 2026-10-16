---
id: thm-qa-28-polynomial-matrix-function-error
kind: theorem
title: Uniform polynomial approximation transfers to a Hermitian matrix
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 0
deps:
  - def-functional-calculus-for-a-normal-endomorphism
  - prop-functional-calculus-for-normal-endomorphisms
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-spectral-resolution-and-polynomial-spectral-projections
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
justified_by: []
axiom_use: "None; the proof uses the finite spectral resolution and finite orthogonal sums."
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29 §29.3"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, §§2–3"
      url: "https://arxiv.org/pdf/1806.01838"
---

## Statement

Let $V$ be a finite-dimensional complex inner-product space, let $H:V\to V$ be Hermitian, and let $I\subseteq\mathbb R$ contain its spectrum. For functions $f:I\to\mathbb C$ and a polynomial $p\in\mathbb C[x]$, if $|p(\lambda)-f(\lambda)|\le\eta$ for every $\lambda\in\sigma(H)$, then
$$\|p(H)-f(H)\|\le\eta.$$
In particular, a uniform bound on all of $I$ suffices. Here $f(H)$ is the finite spectral functional calculus.

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $V$, a Hermitian endomorphism $H$, an interval $I\supseteq\sigma(H)$, functions $f:I\to\mathbb C$ and $p\in\mathbb C[x]$, and $\eta\ge0$ with $|p(\lambda)-f(\lambda)|\le\eta$ on $\sigma(H)$.

[F1] [[thm-spectral-resolution-and-polynomial-spectral-projections]]: $H=\sum_{\lambda\in\sigma(H)}\lambda P_\lambda$, where the distinct-eigenvalue projections are pairwise orthogonal and sum to the identity.

[F2] [[def-functional-calculus-for-a-normal-endomorphism]] and [[prop-functional-calculus-for-normal-endomorphisms]]: $g(H)=\sum_\lambda g(\lambda)P_\lambda$ for every function $g$ on the finite spectrum, and polynomial evaluation agrees with this calculus.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|=\sup_{\|v\|=1}\|Tv\|$.

[F4] [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]: the squared norm of a finite sum of pairwise orthogonal vectors is the sum of their squared norms.

## Proof

1.1 If $V=0$, [F3] defines the operator norm as zero, so the result is immediate. Otherwise [F1]–[F2] give $p(H)-f(H)=\sum_\lambda (p(\lambda)-f(\lambda))P_\lambda$. For any $v\in V$, the vectors $P_\lambda v$ are pairwise orthogonal by [F1]; hence [F4] gives $\|(p(H)-f(H))v\|^2=\sum_\lambda |p(\lambda)-f(\lambda)|^2\|P_\lambda v\|^2\le\eta^2\sum_\lambda\|P_\lambda v\|^2=\eta^2\|v\|^2$, with the last equality following from $\sum_\lambda P_\lambda=I$ and [F4]. [F1, F2, F3, F4, given]

2.1 For every unit vector $v$, step 1.1 yields $\|(p(H)-f(H))v\|\le\eta$. Taking the supremum over unit vectors using [F3] proves the asserted operator-norm bound. A bound on all of $I$ implies the required bound on its subset $\sigma(H)$. [F3, step 1.1, algebra] ∎
