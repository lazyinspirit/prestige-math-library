---
id: thm-svrg-epoch-expected-linear-contraction
kind: theorem
title: Expected linear contraction of an SVRG epoch
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-svrg-finite-sum-method
  - lem-svrg-unbiasedness-and-variance-bound
  - lem-finite-sum-gradient-is-average
  - lem-l-smoothness-descent-inequality
  - def-strong-convex-composite-objective
  - lem-strong-convexity-implies-strong-monotonicity-of-gradient
  - thm-differentiable-convex-functions-and-gradient-inequality
  - def-euclidean-inner-product
  - lem-finite-sum-laws
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Rie Johnson and Tong Zhang, Accelerating Stochastic Gradient Descent using Predictive Variance Reduction, NeurIPS 2013"
      url: https://proceedings.neurips.cc/paper_files/paper/2013/file/ac1dd209cbcc5e5d1c6e28598e8cbbe8-Paper.pdf
      locator: Sections 2–3, Theorem 1 proof, especially inequality (8) and the epoch telescope.
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Section 6.3, Lemma 6.4 and the complete proof of Theorem 6.5.
---

## Statement

Let $n,d\ge1$, and let $f_i:\mathbb R^d\to\mathbb R$ be convex, continuously differentiable, with $L$-Lipschitz gradients for a common $L>0$. Put $F=n^{-1}\sum_{i=1}^n f_i$, assume $F$ is $\mu$-strongly convex for $\mu>0$, and let $x^*$ satisfy $\nabla F(x^*)=0$. In one SVRG epoch [[alg-svrg-finite-sum-method]], take a deterministic snapshot $\widetilde x$, set $x_0=\widetilde x$, choose

$$\eta=\frac1{10L},\qquad m=2n,$$

and choose each uniform inner index independently of the past. Assume $n\ge10L/\mu$. Choose the output index $J$ independently and uniformly from $\{0,\ldots,m-1\}$. Then

$$\mathbb E[F(x_J)-F(x^*)]\le q\bigl(F(\widetilde x)-F(x^*)\bigr),\qquad q=\frac{1}{\mu\eta(1-2L\eta)m}+\frac{2L\eta}{1-2L\eta}\le\frac78.$$

The expectation is over the inner indices and $J$; this is an epoch expectation bound and asserts no almost-sure convergence.

## Facts & Assumptions

**Given:** The functions, smoothness, strong convexity, stationary minimizer, snapshot, inner iteration, and independent uniform output index in the Statement. All finite-time moments exist because a finite horizon has only finitely many index histories and each update evaluates finite gradients at finite points.

[F1] [[alg-svrg-finite-sum-method]]: $x_{t+1}=x_t-\eta v_t$, with $v_t=\nabla f_{I_t}(x_t)-\nabla f_{I_t}(\widetilde x)+\nabla F(\widetilde x)$ and independent uniform $I_t$.

[F2] [[lem-svrg-unbiasedness-and-variance-bound]]: conditionally on the history, $\mathbb E[v_t]=\nabla F(x_t)$ and $\mathbb E\|v_t\|_2^2\le4L(F(x_t)-F(x^*))+4L(F(\widetilde x)-F(x^*))$.

[F3] [[lem-l-smoothness-descent-inequality]]: an $L$-Lipschitz gradient gives $f_i(z)\le f_i(w)+\langle\nabla f_i(w),z-w\rangle+(L/2)\|z-w\|_2^2$.

[F4] [[lem-finite-sum-gradient-is-average]]: $\nabla F(w)=n^{-1}\sum_i\nabla f_i(w)$.

[F5] [[lem-strong-convexity-implies-strong-monotonicity-of-gradient]]: $F(y)\ge F(x)+\langle\nabla F(x),y-x\rangle+(\mu/2)\|y-x\|_2^2$.

[F6] [[thm-differentiable-convex-functions-and-gradient-inequality]]: convex differentiable $F$ satisfies $F(y)\ge F(x)+\langle\nabla F(x),y-x\rangle$.

[F7] [[def-euclidean-inner-product]]: $\|z\|_2^2=\langle z,z\rangle$ and the inner product is bilinear.

[F8] [[lem-finite-sum-laws]]: finite sums are additive, obey scaling, and telescope.

[A1] [[def-axiom-of-choice]]: AC is assumed for the conditional-expectation interfaces used in [F2].

## Proof

**Given:** The objects and assumptions in the Statement.

1.1 Write $\Delta_t=F(x_t)-F(x^*)$ and $\widetilde\Delta=F(\widetilde x)-F(x^*)$. Averaging [F3] and using [F4], [F8] gives the $L$-smooth descent inequality for $F$. By [F1], [F2], [F6], and [F7], expansion of the squared distance and the convex gradient inequality yield $\mathbb E[\|x_{t+1}-x^*\|_2^2\mid\mathcal F_t]\le\|x_t-x^*\|_2^2-2\eta\Delta_t+\eta^2\mathbb E[\|v_t\|_2^2\mid\mathcal F_t]\le\|x_t-x^*\|_2^2-2\eta(1-2L\eta)\Delta_t+4\eta^2L\widetilde\Delta$. [A1, F1, F2, F3, F4, F6, F7, F8, given, algebra]

2.1 Average the conditional inequality in step 1.1 over the finite index histories and sum for $t=0,\ldots,m-1$. By [F8] the finite sum telescopes; the terminal squared distance is nonnegative and $x_0=\widetilde x$, hence $m^{-1}\sum_{t=0}^{m-1}\mathbb E[\Delta_t]\le\|\widetilde x-x^*\|_2^2/[2\eta(1-2L\eta)m]+[2\eta L/(1-2L\eta)]\widetilde\Delta$. By [F5] and $\nabla F(x^*)=0$, $\|\widetilde x-x^*\|_2^2\le2\widetilde\Delta/\mu$; the independent uniform $J$ makes its expected gap the average on the left, giving the stated $q$. [A1, F5, F8, step 1.1, given, algebra]

3.1 With $\eta=1/(10L)$ and $m=2n$, $1-2L\eta=4/5$, so $q=25L/(4\mu n)+1/4\le5/8+1/4=7/8$ by $n\ge10L/\mu$. This proves the Statement. [step 2.1, given, algebra] ∎
