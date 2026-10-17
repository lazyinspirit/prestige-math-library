---
id: lem-information-matrix-perturbation-bound
kind: lemma
title: "Computed Jacobian error controls the weighted information-matrix error"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - def-induced-matrix-p-norm
  - def-matrix-product-and-identity-matrix
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-operator-norm-is-the-largest-singular-value
  - thm-singular-value-decomposition
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §§2.1–2.3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "The complete article was retrieved and read; §§2.1–2.3 define sensitivity and information matrices and discuss their conditioning."
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition, Ch. 10"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "The complete 683-page book was retrieved and §10.1 equations (10.3)–(10.5) and §10.3 were inspected for sensitivity Gram matrices and the distinct residual-curvature term."
---

## Statement

Use the finite observation designs of [[def-nonlinear-experimental-design-and-local-identifiability]]. Suppose uniformly over $x\in\mathcal X$ that $\|J_x\|_2\le K$, $\|J_{h,x}-J_x\|_2\le\eta$, and $\|W_x\|_2\le w$, where $K,\eta,w\ge0$. For every approximate design $\xi$,
$$\|M_h(\xi)-M(\xi)\|_2\le\delta:=w(2K\eta+\eta^2),$$
where $M_h(\xi)=\sum_x\xi_xJ_{h,x}^TW_xJ_{h,x}$. If $M(\xi)$ satisfies $v^TM(\xi)v\ge\alpha\|v\|_2^2$ for every $v$ with some $\alpha>\delta$, then
$$v^TM_h(\xi)v\ge(\alpha-\delta)\|v\|_2^2$$
for every $v$, so the computed information matrix remains positive definite.

## Facts & Assumptions

**Given:** A finite approximate design $\xi$, the Jacobians and weights in the Statement, and the uniform matrix-norm bounds $K,\eta,w,\alpha$.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]]: $M(\xi)=\sum_x\xi_xJ_x^TW_xJ_x$, with $\xi_x\ge0$ and $\sum_x\xi_x=1$; the matrices $W_x$ are symmetric.

[F2] [[def-induced-matrix-p-norm]] and [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: at $p=2$, the Euclidean induced matrix norm satisfies both $\|AB\|_2\le\|A\|_2\|B\|_2$ and $\|Av\|_2\le\|A\|_2\|v\|_2$.

[F3] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], [[thm-singular-value-decomposition]], and [[thm-operator-norm-is-the-largest-singular-value]]: the induced Euclidean matrix norm is the operator norm; a real matrix and its transpose have the same largest singular value, since transposing an SVD preserves its positive singular values.

[F4] [[def-matrix-product-and-identity-matrix]]: matrix products associate and distribute over sums.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$.

## Proof

**Proof technique:** direct.

1.1 Put $E_x=J_{h,x}-J_x$. By [F4], $J_{h,x}^TW_xJ_{h,x}-J_x^TW_xJ_x=J_x^TW_xE_x+E_x^TW_xJ_x+E_x^TW_xE_x$. By [F2] and [F3], the Euclidean operator norm of the right side is at most $\|J_x\|_2\|W_x\|_2\|E_x\|_2+\|E_x\|_2\|W_x\|_2\|J_x\|_2+\|E_x\|_2\|W_x\|_2\|E_x\|_2\le w(2K\eta+\eta^2)=\delta$. [given, F1, F2, F3, F4, algebra]

2.1 Taking the design-weighted sum and using the triangle inequality gives $\|M_h(\xi)-M(\xi)\|_2\le\sum_x\xi_x\delta=\delta$, since the weights are nonnegative and sum to one. [step 1.1, F1, algebra]

3.1 Let $v\in\mathbb R^p$. By step 2.1, the operator norm bound and Cauchy–Schwarz [F5], $|v^T(M_h-M)v|\le\|v\|_2\|(M_h-M)v\|_2\le\delta\|v\|_2^2$. Therefore $v^TM_hv\ge v^TMv-|v^T(M_h-M)v|\ge(\alpha-\delta)\|v\|_2^2$. Since $\alpha>\delta$, this is positive for every nonzero $v$, proving positive definiteness. [given, step 2.1, F1, F2, F5, algebra] ∎
