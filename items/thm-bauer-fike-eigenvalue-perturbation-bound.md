---
id: thm-bauer-fike-eigenvalue-perturbation-bound
kind: theorem
title: "Bauer-Fike bounds eigenvalue motion by the eigenvector condition number"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - cor-operator-norm-submultiplicative-and-t-star-t-identity
  - lem-neumann-invertibility-for-finite-matrices
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
    - title: "Youcef Saad, Numerical Methods for Large Eigenvalue Problems, 2nd ed., §3.2.1"
      url: https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf
    - title: "James W. Demmel, Applied Numerical Linear Algebra, Theorem 4.5"
      url: https://djvu.online/file/8IjSh7jVb5j09
---

## Statement

Let $n\ge1$, let $A=V D V^{-1}\in\mathbb C^{n\times n}$ be diagonalizable, where $D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n)$, and let $E\in\mathbb C^{n\times n}$. Every $\mu\in\sigma(A+E)$ satisfies

$$\operatorname{dist}(\mu,\sigma(A))\le\kappa_2(V)\|E\|_2,\qquad \kappa_2(V)=\|V\|_2\|V^{-1}\|_2.$$

No estimate independent of $V$ is asserted for a nonnormal diagonalization.

## Facts & Assumptions

**Given:** A diagonalization $A=VDV^{-1}$, a perturbation $E$, and an eigenvalue $\mu$ of $A+E$.

[F1] [[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]: an eigenvalue has a nonzero eigenvector.

[F2] [[cor-operator-norm-submultiplicative-and-t-star-t-identity]]: the operator norm is submultiplicative.

[F3] [[lem-neumann-invertibility-for-finite-matrices]]: if $\|X\|_2<1$, then $I+X$ is invertible.

## Proof

1.1 Similarity by the invertible $V$ preserves singularity, so $\sigma(A)=\{\lambda_1,\ldots,\lambda_n\}$. If $\mu\in\sigma(A)$, the distance is zero and the claim holds. Otherwise let $d=\min_j|\lambda_j-\mu|>0$ and suppose for contradiction that $d>\kappa_2(V)\|E\|_2$. Since $D-\mu I$ is diagonal, $\|(D-\mu I)^{-1}\|_2=1/d$. [given, F1, algebra]

2.1 By [F2], $X=(D-\mu I)^{-1}V^{-1}EV$ satisfies $\|X\|_2\le d^{-1}\|V^{-1}\|_2\|E\|_2\|V\|_2<1$. The Neumann lemma [F3] makes $I+X$ invertible. [given, F2, F3, step 1.1]

3.1 Similarity gives $V^{-1}(A+E-\mu I)V=(D-\mu I)+V^{-1}EV=(D-\mu I)(I+X)$, which is invertible by step 2.1. This contradicts $\mu\in\sigma(A+E)$, so the supposition was false and $d\le\kappa_2(V)\|E\|_2$. [step 2.1, F1, algebra] ∎
