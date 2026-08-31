---
id: thm-determinant-differential-and-jacobis-formula
kind: theorem
title: "The determinant differential is $D\\det(A)[H]=\\operatorname{tr}(\\operatorname{adj}(A)H)$ at every matrix, and Jacobi's formula holds on the invertible locus"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-frechet-derivative-on-real-and-complex-matrix-spaces,
       thm-derivative-of-matrix-inversion,
       def-trace-of-a-square-matrix,
       def-invertible-matrix-and-general-linear-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement

Let $A$ be an $n\times n$ matrix and let $H$ be a direction matrix. Then

$$D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H).$$

If $A$ is invertible, then

$$D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H).$$

## Facts & Assumptions

**Given:** An $n\times n$ matrix $A$ and a perturbation direction $H$.

[L1] On the invertible locus, the derivative of inversion is
$D\operatorname{inv}(A)[H]=-A^{-1}HA^{-1}$
([[thm-derivative-of-matrix-inversion]]).

## Proof
**Proof technique:** direct.

1.1 The determinant is multilinear in the columns. In $\det(A+tH)$, the coefficient of $t$ comes from replacing exactly one column of $A$ by the corresponding column of $H$. Those cofactors are precisely the entries of $\operatorname{adj}(A)$, so $D\det(A)[H]=\operatorname{tr}(\operatorname{adj}(A)H)$. [given, algebra]

2.1 If $A$ is invertible, then $\operatorname{adj}(A)=\det(A)A^{-1}$. Substituting this identity into step 1.1 gives $D\det(A)[H]=\det(A)\operatorname{tr}(A^{-1}H)$, which is Jacobi's formula on the invertible locus. The domain restriction matters because $A^{-1}$ appears explicitly there, unlike the adjugate formula of step 1.1. [L1, step 1.1, algebra] ∎