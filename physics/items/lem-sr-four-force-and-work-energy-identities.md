---
id: lem-sr-four-force-and-work-energy-identities
kind: lemma
title: "Four-force identities and the work-energy relation in an inertial frame"
status: published
origin: pipeline
domain: mathematics
deps:
  - def-sr-observed-energy-momentum-and-kinetic-energy
  - lem-sr-energy-momentum-observer-identities
  - lem-sr-four-momentum-in-inertial-frame
  - def-sr-proper-time-derivative-and-four-force
  - thm-sr-proper-time-and-observer-decomposition
  - def-sr-four-velocity-and-four-acceleration
  - def-sr-proper-time
  - lem-sr-proper-time-parametrization
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-euclidean-inner-product
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-real-power-continuity-and-derivatives
  - thm-real-power-agrees-with-rational-exponent
  - def-rational-power
  - lem-rational-power-laws
  - def-vector-valued-derivative-and-integral
  - def-derivative
  - def-lorentz-form-and-inertia
  - def-linear-map
  - def-interval
  - def-sr-affine-minkowski-model
dependency_roles:
  def-sr-observed-energy-momentum-and-kinetic-energy: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  lem-sr-four-momentum-in-inertial-frame: mathematical-premise
  def-sr-proper-time-derivative-and-four-force: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-real-power-agrees-with-rational-exponent: mathematical-premise
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-linear-map: mathematical-premise
  def-interval: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
dependency_level: 15
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t; Section 4.3.4 p. 96 (p = m gamma v; the momentum approaches infinity as v approaches c), Section 4.5.2 pp. 103-104 (the force measured by an observer F_o = dp/dt and its timelike power component) and Section 4.5.4 pp. 105-106 (the work relation dE/dx = F and dE/dp = v)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1; PDF page = printed page + 7; printed p. 27, equation (1.102) (f^mu = dp^mu/d tau, the tensorial analogue of f = dp/dt)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Statement

Let $(A,V,\eta,C^+)$ be the oriented time-oriented affine Minkowski model
([[def-sr-affine-minkowski-model]]), $c>0$, and let
$(o;e_0,e_1,e_2,e_3)$ be an inertial frame with $n:=e_0$
([[def-inertial-frame-and-inertial-chart]]). Let $x$ be a $C^2$ future
timelike worldline whose chart coordinate path is $t\mapsto(ct,r(t))$, with
coordinate velocity $w:=r'$, coordinate acceleration $a:=w'$ and
$\gamma:=(1-|w|^2/c^2)^{-1/2}$
([[def-spatial-euclidean-structure-of-an-inertial-frame]]); let $m>0$ be
constant, $P:=mU$ with $U=\gamma(c,w)$ the four-velocity
([[def-sr-four-velocity-and-four-acceleration]],
[[thm-sr-proper-time-and-observer-decomposition]]\,(e)), $E:=E_n(P)$,
$\mathbf p:=m\gamma w:I\to\mathbb R^3$, so that
$q_n(P)=\sum_{i=1}^3p^ie_i$, $F:=\dot P$ the four-force
of [[def-sr-proper-time-derivative-and-four-force]] and
$\mathbf f:=\frac{d}{dt}\mathbf p$ the coordinate three-force.

**(a)** $F=mA$, where $A$ is the four-acceleration, and $\eta(P,F)=0$;
equivalently $\eta(U,F)=0$ and the mass shell $\eta(P,P)=-m^2c^2$ has
vanishing proper-time derivative.

**(b)** $\frac{dE}{dt}=\mathbf f\cdot\mathbf w$, the Euclidean inner product
of the coordinate vectors.

**(c)** $F=\gamma\,(\mathbf f\cdot\mathbf w/c,\ \mathbf f)$, that is
$F^0=\gamma\,\mathbf f\cdot\mathbf w/c$ and $F^i=\gamma\mathbf f^i$ for
$i=1,2,3$.

**(d)** If instead $m:I\to(0,\infty)$ is $C^1$ and $P=mU$ with this variable
parameter, define $F:=\dot P$ by the general derivative clause (a) of
[[def-sr-proper-time-derivative-and-four-force]]. Then
$\eta(P,F)=-mc^2\,\frac{dm}{d\tau}$, the derivative being taken
with respect to the proper-time parameter.

## Facts & Assumptions

**Given:** the affine Minkowski model $(A,V,\eta,C^+)$; $c>0$; an inertial frame with $n=e_0$; a $C^2$ future timelike worldline $x$ with chart path $t\mapsto(ct,r(t))$; a constant $m>0$ with $P=mU$; for (d) a $C^1$ function $m:I\to(0,\infty)$ with $P=mU$.

[F1] ([[def-sr-proper-time-derivative-and-four-force]], Definition): for a $C^1$ field $P:I\to V$ along $x$ the proper-time derivative is $\dot P(s)=P'(s)/\tau'(s)$; when $P=mU$ with $m>0$ constant and $U$ of class $C^1$, $F:=\dot P$ is the four-force.

[F2] ([[def-sr-four-velocity-and-four-acceleration]], Definition): $U=x'/\tau'$ and, for $C^2$ worldlines, $A=U'/\tau'$; $U$ and $A$ are continuous and $U$ is future timelike.

[F3] ([[thm-sr-proper-time-and-observer-decomposition]], clauses (a), (b) and (e)): $\eta(U,U)=-c^2$; if $x$ is $C^2$ then $\eta(U,A)=0$; and in the chart, $|w|<c$, $U=\gamma_w(c,w)$ and $\tau'=c^{-1}\sqrt{c^2-|w|^2}=1/\gamma_w$, so $dt/d\tau=\gamma_w$.

[F4] ([[lem-sr-proper-time-parametrization]], Statement): $\tau'>0$, $\tau$ is $C^1$ and strictly increasing, and the proper-time parametrisation is related to the chart parametrisation by the chain rule; for a $C^1$ field $Q$ along $x$, $\dot Q=\gamma_w\,dQ/dt$ in the chart parametrisation of [F3].

[F5] ([[def-inertial-frame-and-inertial-chart]] and [[def-spatial-euclidean-structure-of-an-inertial-frame]]): in the frame the components of a vector are read in $(e_0,e_1,e_2,e_3)$, the spatial part lies in $S=e_0^\perp$ with positive definite restriction, and $s\cdot t$ is the Euclidean inner product there, with $|w|^2=w\cdot w$.

[F6] ([[lem-sr-four-momentum-in-inertial-frame]], clause (b)): $E_n(P)=m\gamma_wc^2$ and $q_n(P)=\sum_im\gamma_ww^ie_i$.

[F7] ([[def-sr-observed-energy-momentum-and-kinetic-energy]], Definition): $E_n(Q)=-c\,\eta(Q,n)$ and $q_n(Q)=h(Q)$ for $Q\in\mathrm{cl}(C^+)$.

[F8] ([[thm-algebra-of-derivatives]], [[thm-real-power-continuity-and-derivatives]], [[thm-chain-rule]], [[thm-real-power-agrees-with-rational-exponent]] and [[def-rational-power]]): sums, scalar multiples and products of real differentiable functions and the positive power $t\mapsto(1-t/c^2)^{-1/2}$ are differentiable with the usual rules; with $t=|w|^2$ and $w$ of class $C^1$ this gives $\gamma_w'=\gamma_w^3(w\cdot a)/c^2$ and $\gamma_w^2(1-|w|^2/c^2)=1$.

[F9] ([[def-vector-valued-derivative-and-integral]], Definition): a $V$-valued or $\mathbb R^3$-valued function of one real variable is differentiable exactly when all its components are, and then the derivative is componentwise; the coordinate vector $\mathbf p$ of [F6] is differentiable when $w$ and $\gamma_w$ are.

[F10] ([[def-lorentz-form-and-inertia]], Definition): $\eta$ is symmetric and bilinear, so for differentiable $P$ the product rule gives $\frac{d}{d\tau}\eta(P,P)=2\eta(P,\dot P)$.

## Proof

**Proof technique:** differentiate the explicit frame components $E=m\gamma_wc^2$, $\mathbf p=m\gamma_w\mathbf w$ in chart time, then translate to proper time with $dt/d\tau=\gamma_w$.

1.1 By [F3] and [F4], in this chart parametrisation $\tau'=1/\gamma_w$, hence $d\tau/dt=1/\gamma_w$ and $dt/d\tau=\gamma_w$; therefore for every $C^1$ field $Q$ along $x$, $\dot Q=\gamma_w\,dQ/dt$, and in particular $A=U'/\tau'=\gamma_w\,dU/dt$ and $F=\dot P=\gamma_w\,dP/dt$ by [F1] and [F2]. Since $x$ is $C^2$, $w$ is $C^1$ and $\gamma_w$ is $C^1$ by [F8], so $U=\gamma_w(c,w)$ is $C^1$ and $F$ exists as a continuous field. [F1, F2, F3, F4, F8]

1.2 By [F3], $\eta(U,U)=-c^2$ and $\eta(U,A)=0$; since $P=mU$ with $m$ constant, [F10] gives $\eta(P,P)=m^2\eta(U,U)=-m^2c^2$, so the mass shell of the statement holds. [F3, F10]

1.3 By [F3], $|w|<c$ and $\gamma_w^2(1-|w|^2/c^2)=1$ by [F8], while [F6] and [F7] give $E=m\gamma_wc^2$ and the coordinate vector $\mathbf p=m\gamma_w\mathbf w$; differentiating in $t$ by [F9] and [F8], $\frac{dE}{dt}=mc^2\gamma_w'=m\gamma_w^3(w\cdot a)$ and $\mathbf f=\frac{d\mathbf p}{dt}=m\gamma_w'\mathbf w+m\gamma_w\mathbf a$, with $\mathbf a$ the coordinate vector of $a$. [F3, F6, F7, F8, F9]

2.1 Clause (a): since $m$ is constant, $F=\gamma_w\,\frac{dP}{dt}=\gamma_w\,m\frac{dU}{dt}=mA$ by [step 1.1] and [F9]; hence $\eta(P,F)=m^2\eta(U,A)=0$ by [step 1.2], equivalently $\eta(U,F)=0$ after dividing by $m>0$; and [F10] with $\eta(P,P)=-m^2c^2$ of [step 1.2] gives $\frac{d}{d\tau}\eta(P,P)=2\eta(P,\dot P)=2\eta(P,F)=0$, so the mass shell has vanishing proper-time derivative. [F9, F10, step 1.1, step 1.2]

2.2 Clause (b): from [step 1.3], $\mathbf f\cdot\mathbf w=m\gamma_w^3(w\cdot a)\frac{|w|^2}{c^2}+m\gamma_w(a\cdot w)=m\gamma_w(w\cdot a)\bigl(\gamma_w^2\frac{|w|^2}{c^2}+1\bigr)$; since $\gamma_w^2(1-|w|^2/c^2)=1$ gives $\gamma_w^2|w|^2/c^2=\gamma_w^2-1$ by [F8], this is $m\gamma_w(w\cdot a)\gamma_w^2=m\gamma_w^3(w\cdot a)=\frac{dE}{dt}$, which is (b). [F5, F8, step 1.3]

2.3 Clause (d): let $m:I\to(0,\infty)$ be $C^1$ and $P=mU$, so that $P$ is $C^1$ and $F=\dot P$ exists by [F1]; along the worldline $\eta(P,P)=m^2\eta(U,U)=-m(t)^2c^2$ by [step 1.2], and differentiating with respect to proper time using [F10] and the product and chain rules [F8] gives $2\eta(P,F)=\frac{d}{d\tau}\eta(P,P)=-2mc^2\,\frac{dm}{d\tau}$, hence $\eta(P,F)=-mc^2\,\frac{dm}{d\tau}$. [F1, F8, F10, step 1.2]

3.1 Clause (c): by [step 1.1], $F=\gamma_w\frac{dP}{dt}$ with $P=m\gamma_w(c,\mathbf w)$, so $\frac{dP}{dt}=(mc\gamma_w',\,m\gamma_w'\mathbf w+m\gamma_w\mathbf a)$; substituting $\gamma_w'=\gamma_w^3(w\cdot a)/c^2$ from [F8] gives $F^0=\gamma_wmc\gamma_w'=\gamma_w\,\frac{m\gamma_w^3(w\cdot a)}{c}=\gamma_w\frac{\mathbf f\cdot\mathbf w}{c}$ and $F^i=\gamma_w(m\gamma_w'w^i+m\gamma_wa^i)=\gamma_wf^i$, where the first equality uses [step 2.2]; this is (c). [F8, F9, step 1.1, step 2.2]

4.1 Collecting: clause (a) is [step 2.1], clause (b) is [step 2.2], clause (c) is [step 3.1], clause (d) is [step 2.3]; no force law, no equation of motion and no measurement is used, the identities being conditional on the stated four-momentum field. [step 2.1, step 2.2, step 2.3, step 3.1] ∎
