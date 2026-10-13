---
id: ex-sr-time-dilation-at-beta-three-fifths
kind: example
domain: mathematics
title: "Worked time dilation at speed 3c/5"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-sr-boost-time-length-and-velocity-formulas, def-lorentz-boost, def-sr-proper-time, def-sr-four-velocity-and-four-acceleration, def-inertial-frame-and-inertial-chart, thm-sr-proper-time-and-observer-decomposition]
dependency_roles:
  lem-sr-boost-time-length-and-velocity-formulas: mathematical-premise
  def-lorentz-boost: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Sections 1.1-2.1 pp. 12-28 (vector representation of observer motion, operational radar calibration, time dilation, length-contraction road-trip example), Sections 3.5 and 3.7 pp. 60-68 (four-velocity, acceleration, projection operator), Section 3.9.3 pp. 73-74 (local failure of accelerated simultaneity), Sections 7.1-7.3 pp. 147-151 (Rindler coordinates and nonuniform proper acceleration), Section 8.1 pp. 165-169 (rotating synchronization), Section 9.5 pp. 205-211 (congruences, expansion, Born rigidity); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997): Chapter 1 pp. 8-16 (inertial frames built from rigid rods and synchronized clocks, simultaneity, time dilation, length contraction) and pp. 26-27 (worldline, proper time (1.97)-(1.99), four-velocity); Chapter 3 pp. 68-71 (proper-time functional)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

In an inertial chart $x$ with metric $\operatorname{diag}(-1,1,1,1)$ let $v=3c/5$, $\gamma=(1-v^2/c^2)^{-1/2}=5/4$, and consider the smooth worldline $y:\mathbb R\to A$ whose $x$-coordinates are $y(t)=(ct,\tfrac{3c}{5}t,0,0)$.

(a) $y'(t)=(c,\tfrac{3c}{5},0,0)$ and $\eta(y',y')=-c^2+\tfrac{9c^2}{25}=-\tfrac{16}{25}c^2$, so $y$ is future timelike and its proper-time rate is $\tau'(t)=\tfrac1c\sqrt{\tfrac{16}{25}c^2}=\tfrac45$: between coordinate times $t_0<t_1$ the model elapsed proper time is $\tfrac45(t_1-t_0)=(t_1-t_0)/\gamma$, with rate factor $4/5=1/\gamma$ ([[def-sr-proper-time]], [[def-inertial-frame-and-inertial-chart]]).

(b) The four-velocity is $U=y'/\tau'=(\tfrac{5c}{4},\tfrac{3c}{4},0,0)$ with $\eta(U,U)=-\tfrac{25c^2}{16}+\tfrac{9c^2}{16}=-c^2$, and the dimensionless velocity is $u=U/c=\tfrac54(1,\tfrac35,0,0)=\gamma\bigl(e_0+\tfrac35e_1\bigr)$ for the chart's first coordinate basis vector $e_0$: this is exactly the boost relation of clause (i) of [[lem-sr-boost-time-length-and-velocity-formulas]] ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]]).

(c) Described in the boosted chart $x'$ in which the clock is at rest (boost speed $3c/5$ along the first axis, [[def-lorentz-boost]]), its $x'$-time rate equals its proper-time rate, and the inverse statement $\Delta t=\gamma\,\Delta\tau$ holds with $\gamma=5/4$.

## Facts & Assumptions

**Given:** An inertial chart $x$ with metric $\operatorname{diag}(-1,1,1,1)$, the numbers $v=3c/5$, $\gamma=5/4$, and the smooth worldline $y:\mathbb R\to A$ whose $x$-coordinates are $y(t)=(ct,\tfrac{3c}{5}t,0,0)$ ([[def-inertial-frame-and-inertial-chart]], [[def-sr-proper-time]]).

[L1] For a $C^1$ future timelike worldline the proper-time function satisfies $\tau(b)-\tau(a)=c^{-1}\int_a^b\sqrt{-\eta(y',y')}\,ds$; in an inertial chart $\eta(u,u)=-(u^0)^2+(u^1)^2+(u^2)^2+(u^3)^2$ ([[def-sr-proper-time]], [[def-inertial-frame-and-inertial-chart]]).

[L2] The four-velocity is $U=x'/\tau'$, its norm is $\eta(U,U)=-c^2$, and the dimensionless velocity $u=U/c$ is future unit ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]]).

[L3] Clause (i) of [[lem-sr-boost-time-length-and-velocity-formulas]]: the worldline $x^{-1}(\lambda,\tfrac{v}{c}\lambda+a_1,a_2,a_3)$ has proper-time rate $1/\gamma$ with respect to the coordinate time of $x$ and its tangent is future timelike; in the chart $x'$ of the boost with parameter $v$ the clock is at rest.

## Verification

**Proof technique:** direct.

1.1 The coordinate derivative of $y$ is $y'(t)=(c,\tfrac{3c}{5},0,0)$, and by [L1] $\eta(y',y')=-c^2+\tfrac{9}{25}c^2=-\tfrac{16}{25}c^2<0$ with $y'^0=c>0$, so $y$ is future timelike; the proper-time rate is $\tau'(t)=\tfrac1c\sqrt{\tfrac{16}{25}c^2}=\tfrac45$. Hence for $t_0<t_1$ the proper time elapsed is $\tfrac45(t_1-t_0)=\tfrac{t_1-t_0}{5/4}$, i.e. the model proper-time rate is $4/5=1/\gamma$; equivalently $\Delta t=\gamma\,\Delta\tau=\tfrac54\Delta\tau$. [L1, L3, algebra]

1.2 The four-velocity is $U=y'/\tau'=\tfrac54(c,\tfrac{3c}{5},0,0)=(\tfrac{5c}{4},\tfrac{3c}{4},0,0)$, whose norm is $\eta(U,U)=-\tfrac{25}{16}c^2+\tfrac{9}{16}c^2=-c^2$ by [L1], in agreement with [L2]; the dimensionless velocity is $u=U/c=\tfrac54(1,\tfrac35,0,0)=\gamma(e_0+\tfrac35e_1)$, which is the unit tangent vector of clause (i) of [L3] with $v/c=3/5$ and $\gamma=5/4$. [L2, L3, algebra]

2.1 In the chart $x'$ of the boost with parameter $v=3c/5$ the spatial coordinates of $y$ are constant, so the clock is at rest in $x'$; a clock at rest in its own chart has $\tau'=1$ with respect to that chart's coordinate time, so its $x'$-time rate equals its proper-time rate, and the relation $\Delta t=\gamma\Delta\tau$ of step 1.1 is the inverse statement with $\gamma=5/4$. [L3, step 1.1, algebra]

3.1 Conclusion: steps 1.1-2.1 verify the three clauses (a), (b), (c) of the Example: the worldline is future timelike with proper-time rate $4/5=(1/\gamma)$, its four-velocity is $(\tfrac{5c}{4},\tfrac{3c}{4},0,0)$ of norm $-c^2$, the dimensionless velocity is the inverse passive-boost image $\gamma(e_0+\tfrac35e_1)$, and in the rest chart of the clock the time rate is the proper-time rate, so the inverse dilation $\Delta t=\gamma\Delta\tau$ holds with $\gamma=5/4$. [step 1.1, step 1.2, step 2.1] ∎
