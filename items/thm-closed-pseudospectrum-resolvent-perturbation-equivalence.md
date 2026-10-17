---
id: thm-closed-pseudospectrum-resolvent-perturbation-equivalence
kind: theorem
title: "Closed pseudospectrum equals the resolvent, singular-value, and perturbation tests"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-closed-epsilon-pseudospectrum
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-singular-values-of-an-endomorphism
  - thm-operator-norm-is-the-largest-singular-value
  - thm-singular-value-decomposition
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., Proposition 3.7"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "Mark Embree, Matrix Theory course notes, Theorem 5.2"
      url: https://personal.math.vt.edu/embree/math5524/chapter5.pdf
---

## Statement

Let $A\in\mathbb C^{n\times n}$ with $n\ge1$ and $\epsilon>0$. With the closed convention of [[def-closed-epsilon-pseudospectrum]], the following sets are equal:

$$\Lambda_\epsilon(A)=\{z\in\mathbb C:\|(zI-A)^{-1}\|_2\ge\epsilon^{-1}\}=\bigcup_{\|E\|_2\le\epsilon}\sigma(A+E).$$

where the resolvent norm is defined to be $+\infty$ when $zI-A$ is singular. Equivalently, $z\in\Lambda_\epsilon(A)$ exactly when $\sigma_{\min}(zI-A)\le\epsilon$. The non-strict inequalities include the boundary.

## Facts & Assumptions

**Given:** A complex square matrix $A$, a point $z\in\mathbb C$, and $\epsilon>0$.

[F1] [[def-closed-epsilon-pseudospectrum]]: membership means $\sigma_{\min}(zI-A)\le\epsilon$.

[F2] [[thm-singular-value-decomposition]]: $zI-A$ has unitary left and right singular-vector bases, and its smallest singular value is attained on a unit right singular vector.

[F3] [[thm-operator-norm-is-the-largest-singular-value]]: the spectral operator norm is the largest singular value.

[F4] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: $z$ is an eigenvalue of a matrix exactly when that matrix has a nonzero eigenvector for $z$.

## Proof

1.1 Suppose $z\in\Lambda_\epsilon(A)$. By [F1] and [F2], choose a unit right singular vector $v$ of $zI-A$ with $r=(zI-A)v$ and $\|r\|_2=\sigma_{\min}(zI-A)\le\epsilon$. Define $E=rv^*$. Then $Ev=r$, so $(A+E)v=zv$. Moreover $\|E\|_2=\|r\|_2$: for every unit $x$, $\|Ex\|_2=\|r\|_2|v^*x|\le\|r\|_2$, with equality at $x=v$. Thus $\|E\|_2\le\epsilon$ and [F4] gives $z\in\sigma(A+E)$. [given, F1, F2, F4, algebra]

1.2 Conversely, suppose $z\in\sigma(A+E)$ for some $\|E\|_2\le\epsilon$. By [F4], choose a unit eigenvector $v$ with $(A+E)v=zv$. Then $(zI-A)v=Ev$, hence $\sigma_{\min}(zI-A)\le\|(zI-A)v\|_2=\|Ev\|_2\le\|E\|_2\le\epsilon$. By [F1], $z\in\Lambda_\epsilon(A)$. [given, F1, F4, algebra]

2.1 If $z\notin\sigma(A)$, write $zI-A=U\Sigma V^*$ by [F2], with every diagonal singular value positive. Its inverse is $V\Sigma^{-1}U^*$, so [F3] and unitary invariance give $\|(zI-A)^{-1}\|_2=1/\sigma_{\min}(zI-A)$. If $z\in\sigma(A)$, then $\sigma_{\min}(zI-A)=0$ and the adopted resolvent convention is $+\infty$. Therefore the resolvent test agrees with [F1], including equality at $\epsilon^{-1}$. [given, F1, F2, F3, algebra] ∎
