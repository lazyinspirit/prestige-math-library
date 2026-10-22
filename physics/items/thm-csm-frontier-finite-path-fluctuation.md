---
id: thm-csm-frontier-finite-path-fluctuation
kind: theorem
title: Finite-time fluctuation identity for stationary path entropy
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-csm-frontier-finite-rate-process
  - lem-csm-frontier-finite-jump-path-density
  - thm-csm-frontier-finite-rate-forward-equation
  - def-csm-frontier-stationary-path-entropy
  - def-countable-choice
  - def-natural-logarithm
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-nonnegative-lebesgue-integral
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-integrals-are-invariant-under-measure-preserving-maps
dependency_roles:
  def-csm-frontier-finite-rate-process: mathematical-premise
  lem-csm-frontier-finite-jump-path-density: mathematical-premise
  thm-csm-frontier-finite-rate-forward-equation: mathematical-premise
  def-csm-frontier-stationary-path-entropy: mathematical-premise
  def-countable-choice: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-expectation-of-a-nonnegative-or-integrable-random-variable: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-linearity-of-the-lebesgue-integral-on-l-one: mathematical-premise
  def-nonnegative-lebesgue-integral: mathematical-premise
  thm-continuous-preimages-of-borel-sets-are-borel: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  thm-integrals-are-invariant-under-measure-preserving-maps: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: Countable Choice is used through Lebesgue measure on the finite-dimensional jump-time simplices, as recorded by the path-density prerequisite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Udo Seifert, Stochastic thermodynamics: From principles to the cost of precision (lecture notes, 2017)"
      url: https://arxiv.org/pdf/1707.03759
      locator: Sections 4.1–4.3, PDF pp. 6–7, path weights and the finite-time steady-state fluctuation relation.
    - title: Joel L. Lebowitz and Herbert Spohn, A Gallavotti-Cohen Type Symmetry in the Large Deviation Functional for Stochastic Dynamics
      url: https://arxiv.org/pdf/cond-mat/9811220
      locator: Sections 2.1–2.2, PDF pp. 3–7, stationary finite-state jump paths and time reversal; their scaled-cumulant symmetry is a separate long-time result.
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: Section VI.C.2, printed pp. 70–72 / PDF pp. 69–71, the Markov entropy fluctuation relation in its large-deviation scope.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $E$ be a finite nonempty state set and let $q_{xy}\ge0$ be finite time-homogeneous transition rates for $x\ne y$. Put $\lambda_x:=\sum_{y\ne x}q_{xy}$. Assume the positive-rate graph is irreducible (every ordered pair of states is joined by a finite directed path of positive-rate edges), the rates have symmetric support $q_{xy}>0$ if and only if $q_{yx}>0$, and $\pi$ is a strictly positive probability row vector satisfying $\pi Q=0$ for the row generator $Q$. The forward equation shows that $\pi$ is a stationary law when used as the initial distribution. Start the process with law $\pi$, and define $S_T$ by the stationary path-entropy definition for any finite nonnegative horizon $T$.

For every Borel set $B\subseteq\mathbb R$, the path law and its time reversal obey

$$\mathbb P(S_T\in B)=\int_{-B}e^{-u}\,\mu_T(du),\qquad \mathbb E[e^{-S_T}]=1,\qquad \mathbb E[S_T]\ge0,$$

where $\mu_T(C):=\mathbb P(S_T\in C)$ and $-B:=\{-s:s\in B\}$. Equivalently, as a measure identity, $\mu_T(ds)=e^s\mu_T(-ds)$. The identity is exact at finite time and does not assume that $\mu_T$ has a density.

## Statement references

[[def-csm-frontier-finite-rate-process]]

[[lem-csm-frontier-finite-jump-path-density]]

[[thm-csm-frontier-finite-rate-forward-equation]]

[[def-csm-frontier-stationary-path-entropy]]

## Facts & Assumptions

**Given:** A finite state set, finite rates, symmetric support, an irreducible positive-rate graph, a strictly positive stationary probability vector $\pi$, a finite horizon $T\ge0$, and Countable Choice for the Lebesgue path-space densities.

[F1] [[def-csm-frontier-finite-rate-process]]: a time-homogeneous finite-state process has row generator $Q_{xy}=q_{xy}$ for $x\ne y$ and $Q_{xx}=-\lambda_x$.

[F2] [[lem-csm-frontier-finite-jump-path-density]]: the density of a path with state sequence $x_0,\ldots,x_n$ and ordered jump times is its initial mass times the product of jump rates and holding-time survival factors; the jump count has finite expectation.

[F3] [[thm-csm-frontier-finite-rate-forward-equation]]: if $\pi Q=0$ and $X_0\sim\pi$, then $X_t\sim\pi$ throughout $[0,T]$.

[F4] [[def-csm-frontier-stationary-path-entropy]]: $S_T$ is the sum over jumps of $\log(\pi_{x_{j-1}}q_{x_{j-1}x_j}/(\pi_{x_j}q_{x_jx_{j-1}}))$, with an empty sum equal to zero.

[F5] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is used through the Lebesgue path-density prerequisite.

[F6] [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], and [[cor-mean-value-theorem]]: $\log$ is the inverse of the exponential, $\log'(u)=1/u$ for $u>0$, and the mean value theorem applies to functions continuous on closed intervals and differentiable on their interiors.

[F7] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[thm-linearity-of-the-lebesgue-integral-on-l-one]], and [[def-nonnegative-lebesgue-integral]]: expectation is integration, the integral is linear on integrable functions, and the integral of a nonnegative function is nonnegative.

[F8] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous real-valued map has Borel preimages of Borel sets; in particular, reflection sends Borel sets to Borel sets.

[F9] [[thm-linear-change-of-variables-for-lebesgue-measure]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], and [[thm-integrals-are-invariant-under-measure-preserving-maps]]: an affine bijection whose linear part has determinant of absolute value $1$ preserves Lebesgue measure and hence preserves integrals of nonnegative measurable functions.

## Proof





**Given:** The finite-state process, stationary initial law, symmetric support, and hypotheses in the Statement.

1.1 Since $X_0\sim\pi$ and $\pi Q=0$, [F3] gives $\mathbb P(X_t=x)=\pi_x$ for every $x\in E$ and every $t\in[0,T]$. Thus the process is stationary on the whole interval under the stated initial law. [F1, F3, given, algebra]

1.2 Fix a path with $n$ jumps, state sequence $x_0,\ldots,x_n$ and times $0<t_1<\cdots<t_n<T$. Its density is $$f(\gamma)=\pi_{x_0}\left(\prod_{j=1}^n q_{x_{j-1}x_j}\right)\exp\left(-\sum_{j=0}^n\lambda_{x_j}(t_{j+1}-t_j)\right),$$ where $t_0=0$ and $t_{n+1}=T$, by [F2]. The reversed path has state sequence $x_n,\ldots,x_0$ and jump times $T-t_n,\ldots,T-t_1$, and its holding-time exponent is the same because it spends exactly the same duration in each state. If any forward jump rate in the sequence is zero, symmetric support makes the corresponding reversed rate zero too, so both path densities vanish and the sequence contributes nothing. On every sequence with positive density, symmetric support makes all reversed jump rates positive. The ratio of forward to reversed density is therefore $$\frac{f(\gamma)}{f(\gamma^\dagger)} =\frac{\pi_{x_0}}{\pi_{x_n}}\prod_{j=1}^n\frac{q_{x_{j-1}x_j}}{q_{x_jx_{j-1}}} =\prod_{j=1}^n\frac{\pi_{x_{j-1}}q_{x_{j-1}x_j}}{\pi_{x_j}q_{x_jx_{j-1}}} =e^{S_T(\gamma)}.$$ The middle equality telescopes the factors $\pi_{x_{j-1}}/\pi_{x_j}$; for $n=0$ both densities are positive and their ratio is $1$. [given, F1, F2, F4, algebra]

2.1 For $n=0$, reversal fixes the no-jump path. For $n\ge1$, time reversal sends $(t_1,\ldots,t_n)$ to $(T-t_n,\ldots,T-t_1)$. This is an affine bijection of the ordered time simplex; its linear part is minus a coordinate-reversal permutation matrix, whose determinant has absolute value $1$. Thus [F9] shows it preserves Lebesgue measure and transports each nonnegative density integral to the reversed-path integral. The map also reverses the finite state sequence and sends $S_T$ to $-S_T$. Thus $-B$ is Borel by [F8]. Integrating the density identity in step 1.2 over paths with $S_T\in B$, and using the measure-preserving change of variables, gives $$\mu_T(B)=\int_{\{S_T\in -B\}}e^{-S_T}\,d\mathbb P =\int_{-B}e^{-u}\,\mu_T(du).$$ The countable union over $n$ covers all paths by [F2]. Taking $B=\mathbb R$ gives $\mathbb E[e^{-S_T}]=1$. The same identity is equivalent, by the change of variable $u=-s$, to $\mu_T(ds)=e^s\mu_T(-ds)$ as an equality of measures. [F2, F5, F7, F8, F9, step 1.2, algebra]

3.1 There are finitely many directed edges, all nonzero forward and reverse rates are positive, and every $\pi_x>0$. Thus the absolute value of each jump increment in [F4] is bounded by a finite constant $C$; if there are no edges, set $C=0$. Hence $|S_T|\le C N_T$, and [F2] gives $\mathbb E|S_T|<\infty$. For every $z>0$, the function $g(z):=z-1-\log z$ has $g(1)=0$ and derivative $g'(z)=1-1/z$, negative on $(0,1)$ and positive on $(1,\infty)$; the mean value theorem [F6] gives $g(z)\ge0$. Apply this pointwise with $z=e^{-S_T}$. The function $g(e^{-S_T})$ is nonnegative and integrable because $S_T$ is integrable and $\mathbb E[e^{-S_T}]=1$; its expectation is therefore nonnegative. By linearity [F7] and $\log(e^{-S_T})=-S_T$, $$0\le\mathbb E[g(e^{-S_T})]=\mathbb E[e^{-S_T}]-1+\mathbb E[S_T]=\mathbb E[S_T].$$ Therefore $\mathbb E[S_T]\ge0$. [F2, F4, F6, F7, step 2.1, algebra] ∎

