---
id: thm-local-information-positive-definite-iff-full-column-rank
kind: theorem
title: "The weighted information matrix is positive definite exactly at full sensitivity rank"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - def-euclidean-inner-product
  - def-matrix-product-and-identity-matrix
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.1"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "The complete article was retrieved and §§2.1–2.3 inspected for stacked sensitivity matrices and the positive-definite information criterion."
---

## Statement

For the finite nonlinear observation design of [[def-nonlinear-experimental-design-and-local-identifiability]], fix $\theta\in\Theta$ and an approximate design $\xi$. The matrix $M_\theta(\xi)$ is positive definite, meaning symmetric with $v^TM_\theta(\xi)v>0$ for every nonzero $v\in\mathbb R^p$, if and only if the stacked support sensitivity Jacobian $J_\xi(\theta)$ has trivial kernel, equivalently full column rank.

## Facts & Assumptions

**Given:** The objects and hypotheses of [[def-nonlinear-experimental-design-and-local-identifiability]], at a fixed $\theta$ and design $\xi$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: $M_\theta(\xi)=\sum_x\xi_xJ_x(\theta)^TW_xJ_x(\theta)$, each support weight is positive, and each $W_x$ is symmetric positive definite.

[F2] [[def-matrix-product-and-identity-matrix]]: for compatible real matrices and vectors, products associate and $(J_xv)^TW_x(J_xv)=v^TJ_x^TW_xJ_xv$ by the coordinate product rule.

[F3] [[def-euclidean-inner-product]]: $z^TW_xz>0$ for every nonzero $z$ is the positive-definiteness condition on $W_x$; the Euclidean quadratic form is $\|z\|_2^2=z^Tz$.

## Proof

**Proof technique:** direct.

1.1 For any $v\in\mathbb R^p$, [F1] and [F2] give $v^TM_\theta(\xi)v=\sum_{x\in\operatorname{supp}(\xi)}\xi_x(J_x(\theta)v)^TW_x(J_x(\theta)v)$. Every term is nonnegative by [F3], and a term is strictly positive exactly when $J_x(\theta)v\ne0$, since $\xi_x>0$ on the support and $W_x$ is positive definite. [F1, F2, F3, given, algebra]

2.1 If $J_\xi(\theta)v=0$, every support component $J_x(\theta)v$ is zero, so step 1.1 gives $v^TM_\theta(\xi)v=0$. Conversely, if $v^TM_\theta(\xi)v=0$, the finite sum of nonnegative terms in step 1.1 can vanish only if every support component $J_x(\theta)v=0$, hence $J_\xi(\theta)v=0$. Thus the quadratic form is positive on every nonzero $v$ exactly when $\ker J_\xi(\theta)=\{0\}$, as claimed. [step 1.1, algebra] ∎
