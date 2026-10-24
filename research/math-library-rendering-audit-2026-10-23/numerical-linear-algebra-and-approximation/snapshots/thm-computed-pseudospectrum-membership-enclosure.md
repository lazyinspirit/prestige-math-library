---
id: thm-computed-pseudospectrum-membership-enclosure
kind: theorem
title: "A certified computed smallest singular value encloses pseudospectrum membership"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - def-closed-epsilon-pseudospectrum
  - cor-computed-singular-values-absolute-error-from-backward-stability
  - thm-bidiagonal-svd-backward-error-under-local-stability
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., §3.5"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §6.3"
      url: https://zhims.github.io/doc/note/computing/matrixComputations.pdf
---

## Statement

Let $A\in\mathbb C^{n\times n}$ with $n\ge1$, $z\in\mathbb C$, and $\epsilon>0$. Suppose a computed singular-value path returns $\widehat s\ge0$ and a certified $\delta\ge0$ with

$$|\widehat s-\sigma_{\min}(zI-A)|\le\delta.$$

Then the rule “inside” when $\widehat s+\delta\le\epsilon$ is sound, and the rule “outside” when $\widehat s-\delta>\epsilon$ is sound for the closed set [[def-closed-epsilon-pseudospectrum]]. In every other case the correct status is undecided.

## Facts & Assumptions

**Given:** The matrix, point, tolerance, and a certified pair $(\widehat s,\delta)$ satisfying the displayed error bound.

[F1] [[def-closed-epsilon-pseudospectrum]]: $z$ is inside exactly when $\sigma_{\min}(zI-A)\le\epsilon$.

[A1] [[cor-computed-singular-values-absolute-error-from-backward-stability]] supplies the absolute singular-value bound conditionally on its successful nearby-factorization hypothesis; its upstream premise is [[thm-bidiagonal-svd-backward-error-under-local-stability]]. For its specified real/complex scaled arithmetic, that theorem now instantiates the local Householder/Givens inequalities and the corollary adds any rounded final modulus-readout allowance. Thus a successful certified path supplies the required interval; the exact premise here still requires all arithmetic, deflation, readout and input-representation allowances, including any error in forming the stored matrix $zI-A$. Budget exhaustion or an unavailable bound remains undecided.

## Proof

1.1 By [A1] and the stated certificate, $\sigma_{\min}(zI-A)\le\widehat s+\delta$. If $\widehat s+\delta\le\epsilon$, then [F1] gives $z\in\Lambda_\epsilon(A)$. [given, F1, A1, algebra]

2.1 The same absolute-error inequality gives $\sigma_{\min}(zI-A)\ge\widehat s-\delta$. If $\widehat s-\delta>\epsilon$, then [F1] gives $z\notin\Lambda_\epsilon(A)$. If neither test passes, the interval $[\max(0,\widehat s-\delta),\widehat s+\delta]$ meets both sides of the threshold or includes the boundary, so these data alone justify only undecided. [given, F1, A1, step 1.1, algebra] ∎
