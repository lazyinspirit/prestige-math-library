---
id: thm-emg-symmetric-hyperbolic-research-supplier
kind: theorem
title: Exact periodic positive symmetric-hyperbolic supplier
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: direct
deps: [def-emg-periodic-high-sobolev-state, def-gr-periodic-symmetric-hyperbolic-system, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]
dependency_roles:
  def-emg-periodic-high-sobolev-state: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), section 3.1"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Section 3.1 states the quasilinear symmetric-hyperbolic system class and discusses its local existence, uniqueness, stability and smooth persistence. Its proof sketch is not used in place of the exact current GR14 suppliers cited below."
verification:
  precheck: pending
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $s\ge5$ be an integer, let $O\subseteq\mathbb R^m$ be open, and let $A^\mu,B$ ($\mu=0,1,2,3$) be a periodic symmetric-hyperbolic coefficient family on $I\times\mathbb T^3_{2\pi}\times O$ in the exact sense of [[def-gr-periodic-symmetric-hyperbolic-system]]: the coefficient maps are smooth, each $A^\mu$ is a real symmetric matrix, and $A^0$ is positive definite. Let $K\subseteq\operatorname{int}K'\subseteq O$ be compact and let $R\ge0$. Then there are $T>0$ and $C<\infty$, uniform over all $u_0\in\mathcal S_s(K,R)$ of [[def-emg-periodic-high-sobolev-state]], such that the system

$$A^0(t,x,u)\partial_tu+\sum_{i=1}^3A^i(t,x,u)\partial_i u+B(t,x,u)=0$$

has a unique Sobolev solution $u:(-T,T)\to H^s(\mathbb T^3_{2\pi};\mathbb R^m)$ with $u(0)=u_0$, values in $K'$, $u\in L^\infty H^s\cap C^0H^{s-1}$, and $\partial_tu\in L^\infty H^{s-1}$. The corresponding norm and time-derivative bounds are those in [[thm-gr-periodic-symmetric-hyperbolic-existence]]. Solutions are unique in the stated bounded classical class and depend continuously on initial data in $H^{s-1}$ by [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]. If $u_0$ is smooth, the same solution is smooth on this same interval by [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]].

This theorem supplies only the analytic conclusion for a system whose coefficient hypotheses have already been verified. It does not assert that a particular gauge-fixed Einstein-Maxwell reduction has these matrices; that is a separate mathematical obligation.

## Facts & Assumptions

**Given:** Countable Choice, integer $s\ge5$, the periodic coefficient family, compact $K\subseteq\operatorname{int}K'\subseteq O$, $R\ge0$, and an initial state in $\mathcal S_s(K,R)$.

[F1] [[def-emg-periodic-high-sobolev-state]]: $\mathcal S_s(K,R)$ consists of real $m$-component periodic $H^s$ classes with continuous representatives valued in $K$ and norm at most $R$; only $\mathrm{AC}_\omega$ is assumed.

[F2] [[def-gr-periodic-symmetric-hyperbolic-system]]: the coefficient family and Sobolev solution class have exactly the smoothness, symmetry, positivity, range and time-regularity hypotheses stated in this theorem.

[F3] [[thm-gr-periodic-symmetric-hyperbolic-existence]]: for every such datum there are a common $T>0$ and uniform bounds, with values in $K'$.

[F4] [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]: same data give the same bounded classical solution, and the solution map is continuous in $H^{s-1}$ on the existence interval.

[F5] [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]: smooth initial data give a smooth solution on the original common interval.

## Proof

1.1 Apply [F3] to the state class and coefficient family in [F1]–[F2]. Its hypotheses match term by term: the unknown has $m$ real components on the specified $2\pi$-periodic torus, the coefficients are smooth on the same open state domain, $A^\mu$ are symmetric, $A^0$ is positive definite, the data range in compact $K\Subset K'$, and the integer regularity is $s\ge5$. It gives the common interval, value range, solution regularity and bounds. [given, F1, F2, F3]

1.2 For any two solutions in the stated bounded class with equal initial data, [F4] applies on the common interval and gives equality; its continuous-dependence estimate is exactly the claimed $H^{s-1}$ statement. [given, F2, F4]

2.1 When the initial state is smooth, [F5] applies to the same solution from 1.1 and preserves smoothness on that same interval. No new interval or coupled Einstein-Maxwell conclusion is inferred. [step 1.1, given, F5] ∎