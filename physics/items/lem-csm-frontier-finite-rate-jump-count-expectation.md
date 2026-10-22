---
id: lem-csm-frontier-finite-rate-jump-count-expectation
kind: lemma
title: Expected directed jump counts for a finite-state rate process
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-finite-rate-process
  - lem-csm-frontier-finite-jump-path-density
  - def-countable-choice
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-oriented-integral
  - thm-monotone-convergence-for-the-integral
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-path-density: mathematical-premise
  def-countable-choice: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice enters through the Lebesgue path densities and countable summation used in the proof.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Section 5.2, forward/backward jump-count means in the asymmetric walk; Section 4.1, path weights.
    - title: Joel L. Lebowitz and Herbert Spohn, A Gallavotti-Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics
      url: https://arxiv.org/pdf/cond-mat/9811220
      locator: Section 2.1, PDF pp. 3–4, finite-state jump rates and generator.
---

## Statement

Let $X_t$ be a finite-state continuous-time Markov jump process with finite horizon $[0,T]$, initial law $\rho$, and bounded continuous rates $\kappa_{xy}(t)$. For distinct states $x,y$, let $N_{xy}(T)$ be the number of jumps from $x$ to $y$ on $[0,T]$, and let $p_x(t):=\mathbb P(X_t=x)$. Then

$$\mathbb E[N_{xy}(T)]=\int_0^T p_x(t)\kappa_{xy}(t)\,dt.$$

The integral is finite; no stationarity assumption is required.

## Statement references

[[def-csm-frontier-finite-rate-process]]

[[lem-csm-frontier-finite-jump-path-density]]

## Facts & Assumptions

**Given:** A finite-state process with bounded continuous rates and initial law $\rho$.

[F1] [[def-csm-frontier-finite-rate-process]]: conditional on state $x$ at time $s$, no-jump survival to $t$ is $H_x(s,t)=\exp(-\int_s^t\lambda_x(u)\,du)$, with bounded total rate $\lambda_x$; the process is Markov.

[F2] [[lem-csm-frontier-finite-jump-path-density]]: for each finite path, its density is the product of its initial mass, jump rates and holding-time survival factors; the total jump count is integrable.

[F3] [[thm-monotone-convergence-for-the-integral]]: an increasing sequence of nonnegative measurable functions has integrals increasing to the integral of its pointwise limit.

[F4] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative measurable function on a sigma-finite product has equal product and iterated integrals, including when the value is infinite.

[F5] [[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]]: a bounded continuous function on a nondegenerate compact interval is Lebesgue measurable and its Lebesgue integral equals its Riemann integral.

[F6] [[def-oriented-integral]]: the Riemann integral over a degenerate interval is zero.

[A1] [[def-countable-choice]]: Countable Choice, used through the Lebesgue path densities and increasing sums over the possible jump counts.

## Proof





**Given:** The finite-state process and Countable Choice in the Statement.

1.1 On the canonical path space, write a path with $n$ jumps as its state sequence and ordered jump times. Its jump count is $$N_{xy}(T)=\sum_{j=1}^n\mathbf 1_{\{x_{j-1}=x,\ x_j=y\}}.$$ Using the nonnegative path densities [F2], the expectation is the sum over $n\ge1$, state sequences, and ordered jump-time simplices of this count times the path density. The state-sequence sums are finite at each $n$, and their union over $n$ is countable; the increasing partial sums and [F3] justify the countable sum. For each fixed $n$ and jump index $j$, write the ordered-time simplex integral as an integral over $[0,T]^n$ with its simplex indicator. This is a nonnegative measurable function: the factors are continuous rates and survival functions, and the simplex is Borel. Lebesgue measure on the cube is finite and counting measure on the finite state sequences is finite, so [F4] permits integrating first in the selected jump time $s=t_j$ and then summing the other times. Summing over $n$ and $j$ is again an increasing nonnegative sum, so [A1] and [F3] justify its rearrangement. [F2, F3, F4, A1]

2.1 For each selected jump at time $s$, the Markov property factors its path density into the prefix density through state $x$, the transition factor $\kappa_{xy}(s)\,ds$, and the suffix density starting in $y$. At fixed $s$, all finite prefixes ending in $x$ partition $\{X_s=x\}$ up to the null event of a jump at the fixed time $s$, so their densities sum to $p_x(s)$. All finite suffix densities starting in $y$ sum to $1$ by the normalization and nonexplosion conclusion of [F2]. The nonnegative sum/integral interchange justified in step 1.1 therefore gives the Lebesgue integral $\int_{[0,T]}p_x(s)\kappa_{xy}(s)\,d\lambda_1(s)$. [F1, F2, F4, step 1.1, algebra]

3.1 Conditional on $X_s=x$, the probability of at least one jump by time $t>s$ is $1-H_x(s,t)=1-e^{-u}$ with $u:=\int_s^t\lambda_x(r)\,dr\ge0$. The inequality $1-e^{-u}\le u$ and the rate bound give this probability at most $M(t-s)$, uniformly in $x$. Hence $|p_x(t)-p_x(s)|\le\mathbb P(X_t\ne X_s)\le M|t-s|$, so each $p_x$ is continuous. The product $p_x(t)\kappa_{xy}(t)$ is consequently continuous and bounded on $[0,T]$, so its Lebesgue integral is finite. If $T>0$, [F5] identifies that integral with the Riemann integral in the Statement. If $T=0$, both the count and integral are zero by [F6]. This proves the identity for every $T\ge0$. [F1, F5, F6, step 2.1, algebra] ∎

