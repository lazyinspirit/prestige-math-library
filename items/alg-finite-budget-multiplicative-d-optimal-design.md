---
id: alg-finite-budget-multiplicative-d-optimal-design
kind: algorithm
title: "Finite-budget multiplicative update for approximate D-optimal design"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-approximate-linear-model-design-and-optimality-criteria
  - def-nonlinear-experimental-design-and-local-identifiability
  - thm-d-optimality-equivalence-theorem
justified_by:
  - thm-multiplicative-design-update-well-defined-and-terminates
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Holger Dette, Andrey Pepelyshev, and Anatoly Zhigljavsky, Improving Updating Rules in Multiplicative Algorithms for Computing D-optimal Designs, §§1–2"
      url: "https://eldorado.tu-dortmund.de/bitstreams/45748862-e3e2-4e73-b8a5-7528e8b409c0/download"
      locator: "The complete 15-page paper was retrieved and read; §§1–2 define finite approximate designs, sensitivity values, and multiplicative updates. Its convergence theorem is not imported as this finite-budget procedure makes no convergence claim."
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §§7.5.1–7.5.2"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete 714-page book was retrieved; §7.5 was read for the exact integer versus relaxed design distinction and D-optimal objective."
---

## Definition

Let $p\ge1$, let $\mathcal X$ be a finite nonempty candidate set, and let $f_x\in\mathbb R^p$ be the feature vector for each $x\in\mathcal X$. An approximate design $\xi$ and information matrix $M(\xi)=\sum_x\xi_xf_xf_x^T$ use the convention of [[def-approximate-linear-model-design-and-optimality-criteria]]. The same vectors may be scalar-observation sensitivities at a fixed parameter, as in [[def-nonlinear-experimental-design-and-local-identifiability]], with a scalar precision absorbed into $f_x$. The procedure uses exact arithmetic.

**Input:** A finite nonempty $\mathcal X$, $p\ge1$, its feature vectors $(f_x)_{x\in\mathcal X}$, an approximate initial design $\xi^{(0)}$, and a finite nonnegative integer budget $N$ counting weight updates.

**Procedure:** Form $M_0=M(\xi^{(0)})$. If $M_0$ is not positive definite, return $(\xi^{(0)},\text{undefined violation},\text{invalid initial design})$. Otherwise, for $k=0,1,\ldots,N$, with current $\xi^{(k)}$ and $M_k=M(\xi^{(k)})$, compute
$$s_x^{(k)}=f_x^TM_k^{-1}f_x\quad(x\in\mathcal X),\qquad v_k=\max_{x\in\mathcal X}s_x^{(k)}-p.$$
If $v_k=0$, return $(\xi^{(k)},v_k,\text{equivalence-certified})$. If $k=N$, return $(\xi^{(k)},v_k,\text{budget-exhausted})$. Otherwise set
$$\xi_x^{(k+1)}=\xi_x^{(k)}\frac{s_x^{(k)}}p\quad(x\in\mathcal X),$$
form $M_{k+1}=\sum_x\xi_x^{(k+1)}f_xf_x^T$, and continue.

## Remarks

[[thm-multiplicative-design-update-well-defined-and-terminates]] proves preservation of positive definiteness and the bounds of at most $N$ updates and $N+1$ sensitivity scans. A nonzero returned violation is reported as-is; it is not an exact D-optimality certificate. The exact integer allocation problem remains separate from this approximate-weight procedure.
