---
id: prop-emg-fx-conditional-bootstrap
kind: proposition
title: An explicit conditional nonlinear energy closure
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-absolutely-continuous-function
  - def-countable-choice
  - def-dependent-choice
  - cor-mean-value-theorem
  - cor-primitives-of-a-continuous-function
  - thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous
  - thm-absolutely-continuous-functions-have-integrable-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions
  - thm-logarithm-derivative-and-integral
  - thm-real-power-continuity-and-derivatives
  - thm-emg-fx-coupled-potential-energy
dependency_roles:
  def-absolutely-continuous-function: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  cor-primitives-of-a-continuous-function: mathematical-premise
  thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous: mathematical-premise
  thm-absolutely-continuous-functions-have-integrable-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-emg-fx-coupled-potential-energy: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Mihalis Dafermos and Igor Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), full lecture notes"
      url: https://arxiv.org/pdf/0811.0354
      locator: "Sections 5.2.6 and 7.1, PDF pp. 68–69 and 86–87, place energy estimates inside explicit bootstrap and non-extremal redshift hypotheses. The scalar ODE implication and its exact coefficient threshold are proved locally here."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), full paper"
      url: https://arxiv.org/pdf/1904.04926
      locator: "Sections 1.2–1.4 and 7, PDF pp. 3–7 and 55–56, state the exact transformed systems, small-charge hypotheses, gauge conditions and reconstruction used for the full linear result. The present proposition is only an ODE implication and does not inherit that theorem."
verification:
  precheck: pass
---

## Statement

Let $I=[0,T)$ with $0<T\le\infty$, and let $E:I\to[0,\infty)$ be the energy functional of a wave system of the kind specified in the preceding positive matrix-potential energy theorem, restricted to its existence interval. Here absolute continuity on compact subintervals has the endpoint-increment meaning in the cited definition. Suppose $E$ is absolutely continuous on every compact subinterval of $I$ and, for constants $C\ge0$, $\delta>0$, satisfies for almost every $t\in I$
$$E'(t)\le C(1+t)^{-1-\delta}E(t)^{3/2}.$$
If $E(0)>0$ and $C\sqrt{E(0)}<2\delta$, then
$$E(t)\le E(0)\left[1-\frac{C\sqrt{E(0)}}{2\delta}\right]^{-2}\qquad(t\in I).$$
This is a bound only on the given existence interval; a separate continuation theorem is needed to infer global existence. For comparison, if $C>0$ and the coefficient is changed to $(1+t)^{-1}$, the equality model $E'=C(1+t)^{-1}E^{3/2}$ with the same positive initial value blows up at the finite time $\exp(2/(C\sqrt{E(0)}))-1$. This comparison is an ODE example, not a claim that an RN or Kerr–Newman perturbation satisfies either differential inequality. Time and energy are dimensionless in this scalar comparison.

## Statement references

[[thm-emg-fx-coupled-potential-energy]]

## Facts & Assumptions

**Given:** The nonnegative energy from the coupled-potential estimate, the stated interval, absolute continuity, constants $C,\delta$, the differential inequality, $\mathrm{AC}_\omega$, and $\mathrm{DC}$.

[F1] [[thm-emg-fx-coupled-potential-energy]]: its matrix wave energy is nonnegative and absolutely continuous for the stated smooth solutions, with its exact energy functional and finite-time derivative identity.

[F2] [[def-absolutely-continuous-function]]: $F$ is absolutely continuous on $[a,b]$ when for every $\varepsilon>0$ there is $\eta>0$ such that every finite family of pairwise interior-disjoint subintervals of total length below $\eta$ has total endpoint increments below $\varepsilon$; taking a single interval also gives continuity.

[F3] [[thm-absolutely-continuous-functions-have-integrable-derivatives]]: under $\mathrm{AC}_\omega$, an absolutely continuous real function has a derivative almost everywhere and that derivative is integrable.

[F4] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: under $\mathrm{AC}_\omega$ and $\mathrm{DC}$, an absolutely continuous $F$ satisfies $F(b)-F(a)=\int_a^bF'(t)\,dt$.

[F5] [[thm-a-lipschitz-function-after-an-absolutely-continuous-function-is-absolutely-continuous]]: composing an absolutely continuous function with a Lipschitz function on its image preserves absolute continuity.

[F6] [[cor-mean-value-theorem]]: for a continuous function on $[a,b]$ differentiable on $(a,b)$, its endpoint increment is $f'(c)(b-a)$ for some $c\in(a,b)$.

[F7] [[thm-real-power-continuity-and-derivatives]]: for every real $\alpha$, $x\mapsto x^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$; in particular $(x^{-1/2})'=-\tfrac12x^{-3/2}$.

[F8] [[thm-chain-rule-for-total-derivatives]]: at every point where $E$ is differentiable and $h$ is differentiable at $E(t)$, $(h\circ E)'(t)=h'(E(t))E'(t)$.

[F9] [[cor-primitives-of-a-continuous-function]] [[thm-real-power-continuity-and-derivatives]]: the primitive of a continuous scalar function evaluates by the oriented integral; applying the power derivative in [F7] to $-(1+s)^{-\delta}/\delta$ gives $\int_0^t(1+s)^{-1-\delta}ds=[1-(1+t)^{-\delta}]/\delta$.

[F10] [[thm-logarithm-derivative-and-integral]]: $(\log(1+t))'=1/(1+t)$ for $t>-1$.

[A1] $E(0)>0$, $C\ge0$, $\delta>0$, and $C\sqrt{E(0)}<2\delta$.

[A2] $E'(t)\le C(1+t)^{-1-\delta}E(t)^{3/2}$ for almost every $t$ in the existence interval.

[A3] The real-analysis suppliers use countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]) and dependent choice $\mathrm{DC}$ ([[def-dependent-choice]]); no full axiom of choice is assumed.

[A4] In the comparison example only, $C>0$.

## Proof

1.1 Fix $t>0$ in the positive component of $\{s:E(s)>0\}$ containing $0$. Since $E$ is absolutely continuous on $[0,t]$, [F2]'s definition applied to a single subinterval gives continuity there; positivity on this component and compactness then give a positive minimum and a finite maximum for $E$ on $[0,t]$. The derivative of $h(x):=x^{-1/2}$ is bounded on this range by [F7]. If the range is a singleton then $h$ is constant on it; otherwise [F6] makes $h$ Lipschitz there by the mean value theorem. In either case [F5] makes $z:=h\circ E$ absolutely continuous. By [F3], $E'$ exists almost everywhere, and [F8] gives
$$z'(t)=-\frac12E(t)^{-3/2}E'(t)\ge-\frac C2(1+t)^{-1-\delta}.$$
The absolutely continuous fundamental theorem [F4] and the primitive evaluation [F9] now give
$$z(t)\ge E(0)^{-1/2}-\frac{C}{2\delta}\bigl(1-(1+t)^{-\delta}\bigr)\ge E(0)^{-1/2}-\frac{C}{2\delta}>0.$$
Taking inverse squares gives the claimed bound wherever $E(t)>0$ in that component. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, A1, A2, A3, algebra]

2.1 If $E$ reaches $0$, the claimed inequality is immediate at that time. It cannot later become positive: otherwise some connected component $(a,b)$ of $\{t:E(t)>0\}$ has $a$ at or after a zero and $E(a)=0$, by continuity from [F2]. For any fixed $t\in(a,b)$ and $s\in(a,t)$, the same compact-interval argument as in step 1.1 makes $z$ absolutely continuous on $[s,t]$. Integrating with [F4] gives $z(t)\ge z(s)-C/(2\delta)$. As $s\downarrow a$, continuity gives $E(s)\to0$ and $z(s)\to\infty$, contradicting finite $z(t)$. Thus after a zero $E$ remains zero, and the bound holds throughout $I$. [step 1.1, F2, F3, F4, F5, F6, F7, F8, F9, A2, A3, algebra]

3.1 For the comparison kernel $(1+t)^{-1}$, set
$$t_*:=\exp\!\left(\frac{2}{C\sqrt{E(0)}}\right)-1,\qquad E(t):=\left(E(0)^{-1/2}-\frac C2\log(1+t)\right)^{-2}\quad(0\le t<t_*).$$
The denominator is positive on this interval and tends to $0$ as $t\uparrow t_*$. By [F10], [F7], and [F8], differentiation gives $E'=C(1+t)^{-1}E^{3/2}$, so this solution is unbounded on its existence interval. Therefore the nonintegrable coefficient does not give the uniform bound proved above. [given, F7, F8, F10, A1, A4, algebra] ∎

## Remarks

No continuation criterion or PDE estimate establishing [A2] is included. The proposition cannot by itself be used as a global stability theorem.
