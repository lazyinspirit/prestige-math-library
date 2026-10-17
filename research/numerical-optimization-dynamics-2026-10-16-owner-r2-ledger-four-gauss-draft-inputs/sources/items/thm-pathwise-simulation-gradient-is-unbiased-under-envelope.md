---
id: thm-pathwise-simulation-gradient-is-unbiased-under-envelope
kind: theorem
title: "A dominated pathwise simulation gradient is unbiased"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-pathwise-simulation-gradient-estimator
  - def-simulation-gradient-objective-and-payoff-oracle
  - thm-dominated-convergence
  - thm-chain-rule-for-total-derivatives
  - thm-ftc-second-part
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
provenance:
  statement: literature-derived
  proof: ai-altered
justified_by: []
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Paul Glasserman, Monte Carlo Methods in Financial Engineering, §7.2.2"
      url: "https://ai.stanford.edu/~bangpeng/download/book/Monte_Carlo_Methods_in_Financial_Engineering__--_by_Paul_Glasserman.pdf"
    - title: "Michael C. Fu, Stochastic Gradient Estimation, preprint of Handbook of Simulation Optimization, §3.1"
      url: "https://drum.lib.umd.edu/bitstreams/87a3c71b-9eca-4d5d-9287-e1e432f68a69/download"
---

## Statement

Let $\Theta\subseteq\mathbb R^d$ be open, let $H:\Theta\times\Omega\to\mathbb R$ be the simulation payoff from [[def-simulation-gradient-objective-and-payoff-oracle]], and fix $\theta_0\in\Theta$. Suppose there is an open ball $U$ about $\theta_0$ such that for almost every $\omega$, $H(\cdot,\omega)$ is continuously differentiable on $U$ and $\nabla_\theta H(\cdot,\omega)$ is continuous there, and $\nabla_\theta H(\theta,\cdot)$ is measurable for every $\theta\in U$. Assume $\|\nabla_\theta H(\theta,\omega)\|_2\le M(\omega)$ for all $\theta\in U$ outside one measurable null set, where $M$ is nonnegative and integrable, and assume $\mathbb E\|\nabla_\theta H(\theta_0,\cdot)\|_2^2<\infty$. Then $J(\theta)=\mathbb E H(\theta,\cdot)$ is Fréchet differentiable at $\theta_0$ and
$\nabla J(\theta_0)=\mathbb E[\nabla_\theta H(\theta_0,\cdot)].$
Thus the pathwise estimator from [[def-pathwise-simulation-gradient-estimator]] is unbiased at $\theta_0$ and has finite coordinate variances.

## Facts & Assumptions

**Given:** The payoff and objective, $\theta_0$, the neighborhood and pathwise differentiability, the common integrable derivative envelope, and the square-integrable pathwise gradient in the Statement.

[F1] [[def-pathwise-simulation-gradient-estimator]]: when the same random input is held fixed, the pathwise estimator is $D_\theta H(\theta,Z)$; the definition by itself does not assert unbiasedness.

[F2] [[thm-chain-rule-for-total-derivatives]]: for a differentiable composition, $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$.

[F3] [[thm-ftc-second-part]]: if a real function $q$ is differentiable on $[a,b]$ and $q'$ is integrable, then $\int_a^b q'(t)\,dt=q(b)-q(a)$.

[F4] [[thm-dominated-convergence]]: almost-everywhere convergence under one integrable majorant permits passage of the limit through the integral.

[F5] [[def-moments-variance-and-covariance]] and [[lem-variance-and-covariance-identities-for-random-variables]]: for square-integrable $X$, $\operatorname{Var}(X)=\mathbb E[X^2]-(\mathbb E X)^2\le\mathbb E[X^2]$.

## Proof

1.1 Fix $h\in\mathbb R^d$ with $\theta_0+h\in U$. For almost every $\omega$, set $q_\omega(t)=H(\theta_0+th,\omega)$ on $[0,1]$. By [F2], $q_\omega'(t)=\nabla_\theta H(\theta_0+th,\omega)\cdot h$, which is continuous and integrable; [F3] gives $H(\theta_0+h,\omega)-H(\theta_0,\omega)-\nabla_\theta H(\theta_0,\omega)\cdot h=\int_0^1\bigl(\nabla_\theta H(\theta_0+th,\omega)-\nabla_\theta H(\theta_0,\omega)\bigr)\cdot h\,dt.$ [given, F2, F3]

1.2 For each such $h$, the random variable $M_h(\omega):=\sup_{r\in\mathbb Q\cap[0,1]}\|\nabla_\theta H(\theta_0+rh,\omega)-\nabla_\theta H(\theta_0,\omega)\|_2$ is measurable: continuity in $t$ makes this countable supremum equal the supremum over $[0,1]$. It satisfies $0\le M_h\le2M$ almost surely. As $h\to0$, continuity of the sample gradient at $\theta_0$ gives $M_h\to0$ almost surely. [given, F1]

2.1 Taking expectations in step 1.1 and using Cauchy–Schwarz in $\mathbb R^d$ bounds the absolute first-order remainder divided by $\|h\|_2$ by $\mathbb E M_h$. Along every sequence $h_n\to0$, [F4] with majorant $2M$ gives $\mathbb E M_{h_n}\to0$. Hence $J(\theta_0+h)-J(\theta_0)-\mathbb E[\nabla_\theta H(\theta_0,\cdot)]\cdot h=o(\|h\|_2),$ which is the Fréchet derivative formula. [step 1.1, step 1.2, F4, algebra]

3.1 Each coordinate of the unbiased estimator is square-integrable by the stated second-moment assumption. [F5] therefore gives finite variance for each coordinate. [given, F1, F5, step 2.1] ∎
