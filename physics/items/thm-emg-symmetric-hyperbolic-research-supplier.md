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
deps: [def-emg-periodic-high-sobolev-state, def-gr-periodic-symmetric-hyperbolic-system, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence, lem-gr-periodic-sobolev-embedding, lem-gr-periodic-fourier-differentiation-and-norm-equivalence]
dependency_roles:
  def-emg-periodic-high-sobolev-state: mathematical-premise
  def-gr-periodic-symmetric-hyperbolic-system: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-periodic-fourier-differentiation-and-norm-equivalence: mathematical-premise
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

[F4] [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]: two classical solutions of the same system, with equal initial values $u(0)=v(0)$, values in a common compact subset of $O$ and a common finite $H^s$ bound, coincide on their common open interval containing $0$; the theorem also gives the stated $H^{s-1}$ continuous-dependence estimate for solutions produced by the existence theorem.

[F5] [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]: smooth initial data give a smooth solution on the original common interval.

[F6] [[lem-gr-periodic-sobolev-embedding]]: in three dimensions $H^q$ has a unique $C^m$ representative when $q-m>3/2$, continuously in the $H^q$ norm.

[F7] [[lem-gr-periodic-fourier-differentiation-and-norm-equivalence]]: the derivative $H^s$ norm is equivalent to $N_s(u)^2=\sum_k(1+|k|^2)^s|\widehat u(k)|^2$; finite partial sums of this nonnegative Fourier series are continuous under $H^{s-1}$ convergence and increase to $N_s(u)^2$.

## Proof

1.1 Apply [F3] to the state class and coefficient family in [F1]–[F2]. Its hypotheses match term by term: the unknown has $m$ real components on the specified $2\pi$-periodic torus, the coefficients are smooth on the same open state domain, $A^\mu$ are symmetric, $A^0$ is positive definite, the data range in compact $K\Subset K'$, and the integer regularity is $s\ge5$. It gives the common interval, value range, solution regularity and bounds. [given, F1, F2, F3]

1.2 (Every solution in the stated Sobolev class is classical.) Let $v$ be any Sobolev solution on $(-T,T)$ with values in $K'$. Since $s\ge5$, the embedding [F6] with $q=s-1$ and $m=1$ applies, so $v$ and its first spatial derivatives have representatives continuous jointly in $(t,x)$; continuity in $t$ follows from $v\in C^0H^{s-1}$. On each compact time subinterval, the matrix $A^0(t,x,v(t,x))$ is uniformly invertible: it is positive definite and its arguments range over a compact subset of $I\times\mathbb T^3_{2\pi}\times K'$. Define the continuous function $P_v:=-(A^0(t,x,v))^{-1}\bigl(\sum_iA^i(t,x,v)\partial_i v+B(t,x,v)\bigr)$. The distributional equation and the a.e.-in-time $L^2$ equation in the Sobolev-solution definition imply $\partial_tv=P_v$ as a spacetime distribution. For every smooth spatial test function $\varphi$, the continuous scalar function $t\mapsto\int v(t,x)\varphi(x)\,d\mu(x)$ therefore has distributional derivative $\int P_v(t,x)\varphi(x)\,d\mu(x)$; the ordinary fundamental theorem of calculus gives $v(t)-v(t_0)=\int_{t_0}^tP_v(r)\,dr$ in $L^2$ for every $t,t_0$. Both sides have continuous spatial representatives, so this equality holds pointwise. Thus $v$ is $C^1$ in spacetime and solves $(\star)$ pointwise. Its original $L^\infty H^s$ and $L^\infty H^{s-1}$ time-derivative bounds make it a classical solution in the exact sense of [[def-gr-periodic-symmetric-hyperbolic-system]]. [given, F2, F6, algebra]

2.1 Let $u,v$ be two Sobolev solutions in the class specified by the Statement with the same initial state. Their essential $H^s$ bounds extend to every time: for any $t$, choose times outside the exceptional null set converging to $t$; continuity in $H^{s-1}$ makes every finite Fourier partial sum of $N_s(u(t))^2$ the limit of the corresponding sums at those times, so it is bounded by the essential bound, and taking the supremum over finite subsets gives a finite $N_s(u(t))$. The two norm-equivalence bounds in [F7] then give a pointwise $H^s$ bound. The same argument applies to $v$. With $K'$ as the compact value set and a common finite radius $R_*$ for these pointwise bounds, step 1.2 and [F4] give $u=v$ on $(-T,T)$. The continuous-dependence estimate in [F4] is exactly the claimed $H^{s-1}$ statement for the solutions from 1.1. [given, step 1.2, F4, F7, algebra]

3.1 When the initial state is smooth, [F5] applies to the same solution from 1.1 and preserves smoothness on that same interval. No new interval or coupled Einstein-Maxwell conclusion is inferred. [step 1.1, given, F5] ∎
