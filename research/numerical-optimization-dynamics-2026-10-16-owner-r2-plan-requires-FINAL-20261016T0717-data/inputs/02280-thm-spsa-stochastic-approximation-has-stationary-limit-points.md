---
id: thm-spsa-stochastic-approximation-has-stationary-limit-points
kind: theorem
title: "Summably biased SPSA has almost-sure stationary limit points"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-simulation-gradient-objective-and-payoff-oracle
  - alg-two-evaluation-spsa-gradient-estimator
  - thm-spsa-gradient-bias-is-second-order
  - thm-spsa-gradient-has-inverse-step-variance-bound
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - lem-robbins-siegmund-almost-supermartingale
  - lem-l-smoothness-descent-inequality
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-taking-out-what-is-known
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §§3–4"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
    - title: "J. C. Spall, An Overview of the Simultaneous Perturbation Method for Efficient Optimization, §§SPSA algorithm and gain sequences"
      url: "https://www.jhuapl.edu/spsa/PDF-SPSA/Spall_An_Overview.PDF"
---

## Statement

Assume AC. Let $f:\mathbb R^d\to\mathbb R$ be $C^1$, bounded below by a finite $f_{\inf}$, and have an $L$-Lipschitz gradient. Let $(\mathcal F_k)$ be a filtration, let $x_k$ be $\mathcal F_k$-measurable, and let $G_k$ be the output of the SPSA estimator in [[alg-two-evaluation-spsa-gradient-estimator]], measurable with respect to $\mathcal F_{k+1}$. At each iteration, draw $\Delta_k$ and the simulator random inputs freshly and independently of $\mathcal F_k$; the two paired calls may share their random input. Suppose $\Delta_k$ has a fixed perturbation law, the calls satisfy $\mathbb E[Y_k^\pm\mid\mathcal F_k,\Delta_k]=f(x_k\pm c_k\Delta_k)$, and their conditional bias and weighted second moments give, almost surely,
$\|\mathbb E[G_k\mid\mathcal F_k]-\nabla f(x_k)\|_2\le Bc_k^2,\qquad \operatorname{Var}(G_k\mid\mathcal F_k)\le Vc_k^{-2},\qquad \|\nabla f(x_k)\|_2\le G,$
with deterministic $B,V,G<\infty$, and $c_k\in(0,1]$. The bias and variance hypotheses are supplied, for example, by the bounds of [[thm-spsa-gradient-bias-is-second-order]] and [[thm-spsa-gradient-has-inverse-step-variance-bound]] when their smoothness and weighted-moment conditions hold at each history.

For deterministic $\alpha_k>0$, update $x_{k+1}=x_k-\alpha_kG_k$. Assume $X_k:=f(x_k)-f_{\inf}$ is nonnegative, adapted, and integrable at each $k$, and
$\sum_k\alpha_k=\infty,\qquad c_k\longrightarrow0,\qquad \sum_k\alpha_k c_k^2<\infty,\qquad \sum_k\frac{\alpha_k^2}{c_k^2}<\infty.$
Then $X_k$ converges almost surely,
$\sum_k\alpha_k\|\nabla f(x_k)\|_2^2<\infty\quad\text{almost surely},\qquad \liminf_{k\to\infty}\|\nabla f(x_k)\|_2=0\quad\text{almost surely}.$
This conclusion is a stationary-limit-point statement; it does not assert convergence to a minimizer or convergence of the full gradient sequence.

## Facts & Assumptions

**Given:** AC; the filtration-adapted SPSA update, conditional bias and variance bounds, gradient boundedness along the iterates, the integrable Lyapunov process $X_k$, and the four deterministic step-size conditions.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. AC is required by the conditional-expectation and Doob interfaces in [F5].

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: $x_k$ is $\mathcal F_k$-measurable, $G_k$ is $\mathcal F_{k+1}$-measurable, and the conditional vector second moment is the squared conditional mean plus the sum of coordinate conditional variances.

[F2] [[thm-spsa-gradient-bias-is-second-order]]: under its perturbation, differentiability, conditional-unbiased-call, and reciprocal-moment assumptions, the conditional SPSA bias is bounded by a deterministic constant times $c_k^2$.

[F3] [[thm-spsa-gradient-has-inverse-step-variance-bound]]: under its weighted conditional second-moment assumption, the conditional SPSA variance is bounded by a deterministic constant times $c_k^{-2}$.

[F4] [[lem-l-smoothness-descent-inequality]]: if $\nabla f$ is $L$-Lipschitz, then $f(y)\le f(x)+\langle\nabla f(x),y-x\rangle+(L/2)\|y-x\|_2^2$.

[F5] [[lem-robbins-siegmund-almost-supermartingale]]: under AC, nonnegative adapted integrable $X_k$ with $\mathbb E[X_{k+1}\mid\mathcal F_k]\le X_k-b_k+r_k$, for predictable nonnegative integrable $b_k$ and deterministic summable $r_k\ge0$, satisfies $X_k$ convergent almost surely and $\sum_k b_k<\infty$ almost surely.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] and [[thm-taking-out-what-is-known]]: conditional expectation is linear and an integrable $\mathcal F_k$-measurable factor may be taken outside it when the products are integrable.

## Proof

1.1 Put $m_k=\mathbb E[G_k\mid\mathcal F_k]$ and $b_k^{\mathrm{bias}}=m_k-\nabla f(x_k)$. By [F1] and [F6], the $\mathcal F_k$-measurable iterate and gradient can be taken outside the conditional moment calculations. The second-moment identity then gives, for a deterministic $K<\infty$, $\mathbb E[\|G_k\|_2^2\mid\mathcal F_k]=\|m_k\|_2^2+\operatorname{Var}(G_k\mid\mathcal F_k) \le (G+B)^2+Vc_k^{-2}\le K(1+c_k^{-2}),$ where the last inequality uses $c_k\le1$. [A1, given, F1, F6, algebra]

2.1 Apply [F4] to $y=x_k-\alpha_kG_k$ and condition on $\mathcal F_k$, using [F6] to take the known iterate and gradient outside conditional expectation. Since $m_k=\nabla f(x_k)+b_k^{\mathrm{bias}}$ and $\|\nabla f(x_k)\|_2\le G$, this gives $\mathbb E[X_{k+1}\mid\mathcal F_k]\le X_k-\alpha_k\|\nabla f(x_k)\|_2^2+GB\alpha_kc_k^2+\frac{LK}{2}\alpha_k^2(1+c_k^{-2}).$ For $c_k\le1$, $1+c_k^{-2}\le2c_k^{-2}$; hence the deterministic error $r_k:=GB\alpha_kc_k^2+LK\alpha_k^2c_k^{-2}$ is summable by the step-size assumptions. [A1, F1, F2, F3, F4, F6, step 1.1, given, algebra]

3.1 The process $b_k:=\alpha_k\|\nabla f(x_k)\|_2^2$ is nonnegative, $\mathcal F_k$-measurable, and integrable because $\|\nabla f(x_k)\|_2\le G$. Step 2.1 is the Robbins–Siegmund inequality with multiplicative error $a_k=0$, decrement $b_k$, and deterministic error $r_k$. [F1, F5, step 2.1, given]

4.1 By [F5], $X_k$ converges almost surely and $\sum_k\alpha_k\|\nabla f(x_k)\|_2^2<\infty$ almost surely. If $\liminf_k\|\nabla f(x_k)\|_2>0$ on a path, there are $\varepsilon>0$ and an index $k_0$ for which $\|\nabla f(x_k)\|_2^2\ge\varepsilon$ for all $k\ge k_0$ on that path. Then the weighted sum is at least $\varepsilon\sum_{k\ge k_0}\alpha_k=\infty$, contradicting its finiteness. Thus the liminf is zero almost surely. [A1, F5, step 3.1, given, algebra] ∎
