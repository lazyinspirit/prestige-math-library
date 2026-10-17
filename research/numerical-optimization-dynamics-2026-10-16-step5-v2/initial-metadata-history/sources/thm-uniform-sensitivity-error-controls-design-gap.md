---
id: thm-uniform-sensitivity-error-controls-design-gap
kind: theorem
title: "Uniform information errors control approximate D-optimal design gaps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-nonlinear-experimental-design-and-local-identifiability
  - lem-information-matrix-perturbation-bound
  - lem-logdet-information-perturbation-bound
  - thm-extreme-value-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §7.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book and all of §7.5 were read for the finite approximate-design simplex and log-determinant criterion."
    - title: "Leah R. McLean et al., Estimability Analysis and Optimal Design in Dynamic Multi-scale Models of Cardiac Electrophysiology, §2.3"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4906545/"
      locator: "The full article was retrieved and §2.3 inspected for information-matrix conditioning and D-optimality."
---

## Statement

Let $\mathcal X$ be a finite candidate set and let $\Xi$ be a nonempty compact metric space of approximate designs on $\mathcal X$. For each $x$, let $J_x$ and $J_{h,x}$ be exact and computed sensitivities and let $W_x$ be symmetric positive definite. Suppose uniformly over $x\in\mathcal X$ that $\|J_x\|_2\le K$, $\|J_{h,x}-J_x\|_2\le\eta$, and $\|W_x\|_2\le w$, where $K,\eta,w\ge0$. Put $\delta=w(2K\eta+\eta^2)$. Suppose the criteria $\Phi(\xi)=\log\det M(\xi)$ and $\Phi_h(\xi)=\log\det M_h(\xi)$ are continuous on $\Xi$, and for some $\alpha>0$ every matrix on every segment between $M(\xi)$ and $M_h(\xi)$ satisfies $v^TAv\ge\alpha\|v\|_2^2$. If $\xi^*$ maximizes $\Phi$ and $\widehat\xi$ is a $\tau$-approximate maximizer of $\Phi_h$, meaning $\Phi_h(\widehat\xi)\ge\max_{\xi\in\Xi}\Phi_h(\xi)-\tau$ with $\tau\ge0$, then
$$\Phi(\xi^*)-\Phi(\widehat\xi)\le\tau+\frac{2p\delta}{\alpha}.$$

## Facts & Assumptions

**Given:** The compact design set, exact/computed sensitivity matrices, precision matrices, uniform bounds, information-matrix eigenvalue floor, and $\tau$-approximate computed maximizer in the Statement.

[F1] [[def-nonlinear-experimental-design-and-local-identifiability]] defines $M(\xi)=\sum_x\xi_xJ_x^TW_xJ_x$ for approximate design weights; [[lem-information-matrix-perturbation-bound]] defines the computed matrix $M_h(\xi)=\sum_x\xi_xJ_{h,x}^TW_xJ_{h,x}$.

[F2] [[lem-information-matrix-perturbation-bound]]: the uniform sensitivity and weight bounds imply $\|M_h(\xi)-M(\xi)\|_2\le\delta$ for each $\xi$.

[F3] [[lem-logdet-information-perturbation-bound]]: if the segment eigenvalue floor is $\alpha$, then $|\Phi_h(\xi)-\Phi(\xi)|\le p\delta/\alpha$.

[F4] [[thm-extreme-value-metric]]: each continuous real-valued criterion on the nonempty compact metric space $\Xi$ attains its maximum.

## Proof

**Proof technique:** direct.

1.1 For each $\xi\in\Xi$, [F1] defines the two information matrices and [F2] gives $\|M_h(\xi)-M(\xi)\|_2\le\delta$. Applying [F3] on their segment gives the uniform bound $|\Phi_h(\xi)-\Phi(\xi)|\le e:=p\delta/\alpha$. By [F4], both maxima are attained; write $\xi_h$ for a computed maximizer. [given, F1, F2, F3, F4, construct]

2.1 The $\tau$-approximate maximality of $\widehat\xi$ gives $\Phi_h(\xi_h)-\Phi_h(\widehat\xi)\le\tau$. Write $\Phi(\xi^*)-\Phi(\widehat\xi)=[\Phi(\xi^*)-\Phi_h(\xi^*)]+[\Phi_h(\xi^*)-\Phi_h(\widehat\xi)]+[\Phi_h(\widehat\xi)-\Phi(\widehat\xi)]$. The middle term is at most $\tau$ because $\xi_h$ maximizes $\Phi_h$, and the first and last terms are at most $e$ by step 1.1. Thus the gap is at most $e+\tau+e=\tau+2p\delta/\alpha$, proving the bound. [given, step 1.1, algebra] ∎
