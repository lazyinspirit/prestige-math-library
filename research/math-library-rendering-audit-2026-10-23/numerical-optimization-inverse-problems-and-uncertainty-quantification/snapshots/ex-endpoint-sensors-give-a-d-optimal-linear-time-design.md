---
id: ex-endpoint-sensors-give-a-d-optimal-linear-time-design
kind: example
title: "Endpoint sensor times are D-optimal for an intercept-slope model"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-finite-budget-multiplicative-d-optimal-design
  - def-approximate-linear-model-design-and-optimality-criteria
  - def-nonlinear-experimental-design-and-local-identifiability
  - thm-equivalence-violation-bounds-d-optimal-design-gap
  - thm-multiplicative-design-update-well-defined-and-terminates
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization, §7.5"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "The complete book and §7.5 were read for approximate designs, D-optimality, and the separate integer allocation problem."
    - title: "Holger Dette, Andrey Pepelyshev, and Anatoly Zhigljavsky, Improving Updating Rules in Multiplicative Algorithms for Computing D-optimal Designs, §2"
      url: "https://eldorado.tu-dortmund.de/bitstreams/45748862-e3e2-4e73-b8a5-7528e8b409c0/download"
      locator: "The complete 15-page paper and §2 were read for the multiplicative update recurrence and sensitivity function."
---

## Example

For the linear time-response model $F_t(\theta)=\theta_0+\theta_1t$ with candidate sensor times $t\in\{0,1,2\}$ and unit precision, the equal-weight endpoint design is D-optimal. Starting from uniform weights and using a one-update budget, the multiplicative procedure returns a positive equivalence violation instead of claiming exact optimality.

## Facts & Assumptions

**Given:** Candidate features $f_t=(1,t)^T$ at $t=0,1,2$, parameter dimension $p=2$, unit precision, and initial approximate design $\xi^{(0)}=(1/3,1/3,1/3)$ in that order.

[F1] [[def-approximate-linear-model-design-and-optimality-criteria]]: $M(\xi)=\sum_t\xi_tf_tf_t^T$ and D-optimality maximizes $\log\det M(\xi)$ among nonsingular approximate designs.

[F2] [[alg-finite-budget-multiplicative-d-optimal-design]]: with $s_t=f_t^TM^{-1}f_t$, the update is $\xi_t^+=\xi_ts_t/p$ and the returned violation is $\max_ts_t-p$.

[F3] [[thm-multiplicative-design-update-well-defined-and-terminates]]: each exact update preserves the approximate-design simplex and nonsingularity.

[F4] [[thm-equivalence-violation-bounds-d-optimal-design-gap]]: zero violation certifies D-optimality, and a positive violation bounds every nonsingular competitor's log-determinant gap.

[F5] [[thm-logarithm-derivative-and-integral]] gives $\log'(x)=1/x>0$ for $x>0$. For $0<a<b$, the logarithm is continuous on $[a,b]$ and differentiable inside, so [[cor-mean-value-theorem]] gives $\log b-\log a=(b-a)/c>0$ for some $c\in(a,b)$. Thus $\log$ is strictly increasing on $(0,\infty)$.

## Verification

1.1 For an arbitrary approximate design $\xi$, write $\mu=\sum_t\xi_tt$ and $\nu=\sum_t\xi_tt^2$. Direct multiplication gives $M(\xi)=\begin{bmatrix}1&\mu\\\mu&\nu\end{bmatrix}$ and $\det M(\xi)=\nu-\mu^2$. Since $0\le t\le2$, $(t-1)^2\le1$, so $\nu-\mu^2=\sum_t\xi_t(t-1)^2-(\mu-1)^2\le1$. The equal endpoint design $\xi^*=(1/2,0,1/2)$ has $M(\xi^*)=\begin{bmatrix}1&1\\1&2\end{bmatrix}$ and determinant $1$, so it maximizes the determinant and hence $\log\det M$ among nonsingular designs because $\log$ is strictly increasing by [F5]. [given, F1, F5, algebra]

1.2 For $\xi^{(0)}$, $M_0=\begin{bmatrix}1&1\\1&5/3\end{bmatrix}$ and $M_0^{-1}=\begin{bmatrix}5/2&-3/2\\-3/2&3/2\end{bmatrix}$. Thus $(s_0,s_1,s_2)=(5/2,1,5/2)$ and $v_0=1/2$. One update gives $\xi^{(1)}=(5/12,1/6,5/12)$; the update is defined by [F2] and remains nonsingular by [F3]. [given, F2, F3, algebra]

2.1 The updated matrix is $M_1=\begin{bmatrix}1&1\\1&11/6\end{bmatrix}$, with inverse $M_1^{-1}=\begin{bmatrix}11/5&-6/5\\-6/5&6/5\end{bmatrix}$. Therefore $(s_0,s_1,s_2)=(11/5,1,11/5)$ and $v_1=11/5-2=1/5$. With budget $N=1$, the procedure returns the updated design with status budget-exhausted and violation $1/5$. [step 1.2, F2, F3, algebra]

3.1 For the endpoint design $\xi^*$, $M(\xi^*)^{-1}=\begin{bmatrix}2&-1\\-1&1\end{bmatrix}$, so its sensitivities at $0,1,2$ are $2,1,2$ and its violation is zero. By [F4] this is an exact D-optimality certificate; [F4] also bounds the log-determinant gap of the one-update output by $1/5$. The weights are approximate-design weights; integer run counts are a separate problem by [F1]. [step 1.1, step 2.1, F1, F4, algebra] ∎
