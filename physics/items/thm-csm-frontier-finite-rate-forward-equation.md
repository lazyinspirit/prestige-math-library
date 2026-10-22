---
id: thm-csm-frontier-finite-rate-forward-equation
kind: theorem
title: Forward equation and stationary laws for finite-state rate processes
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-finite-rate-process
  - lem-csm-frontier-finite-jump-path-density
  - def-countable-choice
  - def-oriented-integral
  - thm-ftc-first-part
  - thm-ftc-second-part
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-path-density: mathematical-premise
  def-countable-choice: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-ftc-second-part: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is carried by the Lebesgue path-density prerequisite; the forward-equation and uniqueness steps use no additional choice.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Section 2.2, finite-state transition rates and master equation.
    - title: Joel L. Lebowitz and Herbert Spohn, A Gallavotti-Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics
      url: https://arxiv.org/pdf/cond-mat/9811220
      locator: Section 2.1, PDF pp. 3–4, finite-state generator and forward master equation.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $X_t$ be a finite-state continuous-time Markov jump process on $[0,T]$ with finite state set $E$, bounded continuous rates $\kappa_{xy}(t)$, and row generator $Q(t)$ under the first-jump convention. Let $p_x(t):=\mathbb P(X_t=x)$ and regard $p(t)$ as a row vector. If $T>0$, then $p$ is continuously differentiable on $(0,T)$ with the corresponding one-sided derivatives at the endpoints, and

$$p_y'(t)=\sum_{x\in E,\ x\ne y}p_x(t)\kappa_{xy}(t)-p_y(t)\lambda_y(t),\qquad p'(t)=p(t)Q(t).$$

If $T=0$, the differential assertion is vacuous and the only time marginal is $p(0)$. In either case, if a probability row vector $\pi$ satisfies $\pi Q(t)=0$ for every $t\in[0,T]$ and $p(0)=\pi$, then $p(t)=\pi$ for all $t\in[0,T]$. For constant rates this says that every generator-stationary probability vector is an invariant law of the process.

## Statement references

[[def-csm-frontier-finite-rate-process]]

## Facts & Assumptions

**Given:** A finite state set, bounded continuous rates, the rate-process convention, and an initial probability row vector.

[F1] [[def-csm-frontier-finite-rate-process]]: conditional on state $x$ at time $t$, the no-jump survival over $[t,t+h]$ is $\exp(-\int_t^{t+h}\lambda_x(s)\,ds)$, and the density of a first jump to $y\ne x$ at time $s$ is the survival to $s$ times $\kappa_{xy}(s)$.

[F2] [[lem-csm-frontier-finite-jump-path-density]]: on a short interval, the probability of at least two jumps is $O(h^2)$, and each finite path has the stated jump-time density.

[F3] [[def-oriented-integral]] and [[thm-ftc-first-part]]: the integral of a continuous matrix-valued function is defined componentwise and differentiates to that function.

[F4] [[thm-ftc-second-part]] evaluates the integral of an integrable derivative as the endpoint difference, including one-sided endpoint derivatives.

[A1] [[def-countable-choice]]: Countable Choice, carried by the Lebesgue path-density argument in [F2].

## Proof




**Given:** The data in the Statement.

1.1 If $T=0$, the only time is $t=0$ and $p(0)$ is its initial law. Suppose $T>0$. By the first-jump convention, the no-jump probability from $x$ over $[t,t+h]$ is $H_x(t,t+h)=\exp(-\int_t^{t+h}\lambda_x(s)\,ds)=1-\lambda_x(t)h+o(h)$. For $x\ne y$, the probability of exactly one jump $x\to y$ and no further jump is $\int_t^{t+h}H_x(t,s)\kappa_{xy}(s)H_y(s,t+h)\,ds=\kappa_{xy}(t)h+o(h)$. Paths with at least two jumps contribute $O(h^2)$ by [F2]. Hence the conditional endpoint transition probabilities equal $\kappa_{xy}(t)h+o(h)$ for $y\ne x$, and $1-\lambda_x(t)h+o(h)$ for $y=x$. Averaging this expansion over the finite states gives $|p_y(t+h)-p_y(t)|=O(h)$; the same estimate from the left shows $p$ is continuous. By the Markov property, for each $y\in E$,
$$p_y(t+h)=p_y(t)(1-\lambda_y(t)h)+\sum_{x\ne y}p_x(t)\kappa_{xy}(t)h+o(h).$$
There are finitely many states, so the remainder remains $o(h)$ after summation. Dividing by $h$ and taking $h\downarrow0$ gives the stated forward equation; applying the same expansion at $t-h$ gives the left derivative. Its right-hand side is continuous because the rate functions and each $p_x$ are continuous, hence $p$ is continuously differentiable on the interior, with the corresponding one-sided derivatives at the endpoints. [A1, F1, F2, F3, algebra]

2.1 Suppose $\pi Q(t)=0$ and $p(0)=\pi$. The constant function $p(t)=\pi$ satisfies the forward equation. If $d(t)$ is the difference of any other solution and $\pi$, then $d(0)=0$ and $d'=dQ$. For $t>0$, each component of $d$ is differentiable on $[0,t]$, with one-sided endpoint derivatives, and its derivative is continuous, hence integrable. Applying the second fundamental theorem in [F4] componentwise gives
$$d(t)=\int_0^t d(s)Q(s)\,ds.$$
For $t=0$ this identity holds by the zero-interval convention. Use the vector $1$-norm $\|d\|_1:=\sum_x|d_x|$ and let $B:=\sup_{s\in[0,T]}\max_x\sum_y|Q_{xy}(s)|<\infty$, the maximum absolute row sum. Let $D:=\sup_{s\in[0,T]}\|d(s)\|_1<\infty$. Since $d$ is a row vector, the triangle inequality gives $\|d(s)Q(s)\|_1\le\sum_x|d_x(s)|\sum_y|Q_{xy}(s)|\le B\|d(s)\|_1$. Iterating the integral equation yields $\|d(t)\|_1\le D(Bt)^n/n!$ for every integer $n\ge1$. This bound tends to zero as $n\to\infty$, so $d(t)=0$ for every $t$. Therefore $p(t)=\pi$. [F3, F4, step 1.1, algebra]

3.1 In the constant-rate case, $\pi Q=0$ is exactly the coordinate condition $\sum_{x\ne y}\pi_x\kappa_{xy}=\pi_y\lambda_y$ for each $y$, so step 2.1 proves invariance of the stated generator-stationary law. [step 2.1, algebra] ∎

