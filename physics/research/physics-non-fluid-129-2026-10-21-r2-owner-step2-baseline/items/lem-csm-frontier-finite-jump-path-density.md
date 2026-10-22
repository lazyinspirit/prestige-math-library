---
id: lem-csm-frontier-finite-jump-path-density
kind: lemma
title: Path densities and finite jump counts for bounded finite-state rates
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-finite-rate-process
  - def-countable-choice
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - def-oriented-integral
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-of-archimedean
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  def-countable-choice: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  thm-of-archimedean: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is used through the well-defined Lebesgue measure on each finite-dimensional ordered jump-time simplex, via the stated Lebesgue-measure supplier.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Section 4.1, the ordered-jump-time path-weight formula and its no-jump case.
    - title: Joel L. Lebowitz and Herbert Spohn, A Gallavotti-Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics
      url: https://arxiv.org/pdf/cond-mat/9811220
      locator: Section 2.1, PDF pp. 3–4, exponential holding times and finite-state jump rates.
---

## Statement

Let $X_t$ be a finite-state continuous-time Markov jump process on $[0,T]$ under the first-jump rate convention, with initial law $\rho$ and bounded continuous rates $\kappa_{xy}(t)$, where $T\ge0$. Put $M:=\sup_{x\in E,\ 0\le t\le T}\lambda_x(t)<\infty$. For $n\ge0$, let $x_0,\ldots,x_n\in E$ with $x_{j-1}\ne x_j$ for $1\le j\le n$, let $0<t_1<\cdots<t_n<T$, and set $t_0:=0$, $t_{n+1}:=T$. Relative to counting measure on state sequences and Lebesgue measure on the ordered time simplex, the probability density of exactly this state sequence and these jump times is

$$\rho(x_0)\left(\prod_{j=1}^n\kappa_{x_{j-1}x_j}(t_j)\right) \exp\left(-\sum_{j=0}^n\int_{t_j}^{t_{j+1}}\lambda_{x_j}(s)\,ds\right).$$

Here an empty product is $1$ and for $n=0$ the formula is $\rho(x_0)\exp(-\int_0^T\lambda_{x_0}(s)\,ds)$; if $T=0$, this is the only path case. For any subinterval $J=[s,t]$ of length $\delta$ with $M\delta<1$, let $N_J$ count its jumps. Then for every integer $n\ge1$,

$$\mathbb P(N_J\ge n)\le(M\delta)^n,\qquad \mathbb E[N_J]\le\frac{M\delta}{1-M\delta}<\infty.$$

If $M=0$ there are no jumps. If $M>0$, divide $[0,T]$ into finitely many intervals with $M\delta<1$; the preceding bound then gives $\mathbb E[N_T]<\infty$. Thus bounded finite-state rates imply nonexplosion on every finite horizon.

## Statement references

[[def-csm-frontier-finite-rate-process]]

[[def-countable-choice]]

[[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]

## Facts & Assumptions

**Given:** A finite nonempty state set, a finite $T>0$, bounded continuous rates, an initial probability law, and the process rate convention in the Statement.

[F1] [[def-csm-frontier-finite-rate-process]]: $E$ is finite, the rates $\kappa_{xy}(t)$ are bounded and continuous, and conditional on state $x$ at time $s$ the next-jump survival is $H_x(s,t)=\exp(-\int_s^t\lambda_x(u)\,du)$ with next-jump density $H_x(s,t)\kappa_{xy}(t)$ to state $y\ne x$.

[A1] [[def-countable-choice]]: every countable family of nonempty sets has a choice function. This is the exact axiom used to treat the restricted Lebesgue outer measure as a complete measure on the finite-dimensional jump-time simplices.

[F2] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] and [[thm-lebesgue-measure-is-a-complete-measure]]: time-simplex densities use Lebesgue measure, and a box of side lengths $\delta_1,\ldots,\delta_n$ has volume $\prod_j\delta_j$.

[F3] [[thm-of-archimedean]]: for every real $r$ there is a positive integer $m>r$.

[F4] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[thm-monotone-convergence-for-the-integral]], and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: expectation is integration with respect to the probability measure, increasing nonnegative measurable functions have integrals increasing to the integral of their pointwise limit, and the integral is linear on integrable functions.


## Proof





**Given:** The process, rates, horizon, initial law, and Countable Choice as stated.

1.1 Conditional on state $x_0$ at time $0$, the first-jump convention in [F1] gives the survival factor $H_{x_0}(0,t_1)$ and jump density $H_{x_0}(0,t_1)\kappa_{x_0x_1}(t_1)$. After this jump, the Markov rule restarts at $x_1$. Multiplying the successive conditional survival and jump factors through state $x_n$, and then the final no-jump survival on $[t_n,T]$, gives exactly the stated path density. If $n=0$, the same convention gives $\rho(x_0)H_{x_0}(0,T)$, which is the stated boundary formula. [F1, construct, algebra]

1.2 Let $J=[s,t]$ have length $\delta$ with $M\delta<1$. The density of the first $n$ ordered jumps, with survival factors removed, is at most the product of the $n$ rates. Summing these products over each successive state gives at most $M^n$. The ordered time simplex is contained in the cube $J^n$, whose Lebesgue volume is $\delta^n$ by [F2]. Hence $\mathbb P(N_J\ge n)\le(M\delta)^n$. Pointwise $N_J=\sum_{n\ge1}\mathbf 1_{\{N_J\ge n\}}$; [F4] gives $\mathbb E[N_J]\le\sum_{n\ge1}(M\delta)^n=M\delta/(1-M\delta)$. [A1, F1, F2, F4, algebra]

2.1 If $T=0$ or $M=0$, there are no jumps. Otherwise choose a positive integer $m>MT$ by [F3] and partition $[0,T]$ into $m$ intervals of length $\delta=T/m$, so $M\delta<1$. Jump times have densities by step 1.1, hence no jump occurs at a fixed partition endpoint with positive probability. The total count is the sum of the interval counts almost surely; linearity of expectation [F4] and step 1.2 give $\mathbb E[N_T]\le mM\delta/(1-M\delta)<\infty$. If $\mathbb P(N_T=\infty)>0$, then $\mathbb E[N_T]\ge n\mathbb P(N_T=\infty)$ for every $n$, contradicting finiteness. Thus the process is nonexplosive and the countable path-density collection covers the path law. [F1, F3, F4, step 1.1, step 1.2, algebra] ∎

