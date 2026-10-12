---
id: def-gr-timelike-worldline-and-proper-time
kind: definition
title: "Timelike worldlines, proper time, length and four-velocity on a Lorentzian four-manifold"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, def-velocity-derivation-of-a-smooth-curve, def-causal-classification-of-lorentz-vectors, def-darboux-integral, thm-continuous-implies-integrable, def-rational-power, thm-real-power-continuity-and-derivatives, thm-coordinate-derivations-form-a-basis-of-the-tangent-space, thm-algebra-of-continuous-functions, def-continuity-real, thm-componentwise-limits-and-continuity, thm-chain-rule-for-total-derivatives, def-smooth-manifold]
dependency_roles:
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-velocity-derivation-of-a-smooth-curve: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-coordinate-derivations-form-a-basis-of-the-tangent-space: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-smooth-manifold: mathematical-premise
justified_by: [lem-gr-proper-time-reparametrization-and-four-velocity]
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 'worldlines' and 'proper time' (1.97), printed pp. 25-26 (PDF pp. 32-33) and 'four-velocity' (1.98)-(1.99), printed pp. 26-27 (PDF pp. 33-34)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), section 2.2 (2.4)-(2.9) and section 2.3 (2.14) on proper time and the four-velocity, printed pp. 27-30 (PDF pp. 28-31)"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), sections 1.1.1-1.1.2 on the particle action, the affine parameter and the four-velocity, printed pp. 24-30 (PDF pp. 31-37)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold
([[def-gr-smooth-lorentzian-objects]]) and let $c>0$ be a fixed real constant.
All curves below take values in $M$; the physical reading of $c$, of a
worldline as the history of a clock or body, and of the parameter values as
times is not part of this definition and is adopted separately in the
postulates of the framework.

**(a) Regularity classes.** Let $I\subseteq\mathbb R$ be an interval with
nonempty interior ([[def-interval]]) and let $\gamma:I\to M$ be a map. A
**chart representative** of $\gamma$ is the map $x\circ\gamma$ for a smooth
chart $(U,x)$ of $M$ ([[def-smooth-manifold]]).

- For $k\in\mathbb N_0\cup\{\infty\}$ and an interior point $t_0\in I$, the map
  $\gamma$ is **$C^k$ at $t_0$** when there is a chart representative
  $x\circ\gamma$ defined near $t_0$ that is $C^k$ there in the componentwise
  Euclidean sense. This condition is independent of the chart: on the overlap
  of two chart representatives the transition map is smooth and the chain rule
  applies ([[thm-chain-rule-for-total-derivatives]],
  [[def-c-r-and-smooth-maps-between-smooth-manifolds]]). If $t_0\in I$ is an
  included endpoint of $I$, the derivative conditions below are imposed on the
  relative interval $I\cap(t_0-\delta,t_0+\delta)$ for some $\delta>0$ and are
  one-sided at $t_0$. The map $\gamma$ is **$C^k$ on $I$** when it is $C^k$ at
  every point of $I$.

- Let $b\in\mathbb R$ and $\varepsilon>0$. A curve
  $\gamma:(b-\varepsilon,b]\to M$ has **left tangent** $v\in T_{\gamma(b)}M$
  at $b$ when for one — equivalently every — chart $(U,x)$ around
  $\gamma(b)$, writing $v=\sum_{a=0}^{3}v^a\partial_a|_{\gamma(b)}$
  ([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]), the
  difference quotients satisfy
  $\bigl(x^a(\gamma(t))-x^a(\gamma(b))\bigr)/(t-b)\to v^a$ as $t\uparrow b$ for
  $a=0,1,2,3$. A **right tangent** at the left end of a curve is defined
  analogously with $t\downarrow b$. Chart independence is the one-sided
  chain-rule computation for the smooth transition maps
  ([[thm-chain-rule-for-total-derivatives]]).

- A curve $\gamma:[a,b]\to M$ with $a<b$ is **piecewise $C^1$** when there is a
  finite partition $a=s_0<s_1<\cdots<s_m=b$ such that for every $i$ the
  restriction of $\gamma$ to $(s_{i-1},s_i)$ is $C^1$, and the right tangent
  at $s_{i-1}$ and the left tangent at $s_i$ exist for every $i$. Such a
  partition is called **admissible** for $\gamma$. Existence of the one-sided
  tangents implies continuity of $\gamma$ at the corners; no agreement of the
  two one-sided tangents at a corner is required.

**(b) Velocity.** If $\gamma$ is $C^1$ at an interior point $t$, its
**velocity** $\gamma'(t)\in T_{\gamma(t)}M$ is the velocity derivation of
[[def-velocity-derivation-of-a-smooth-curve]] translated to the parameter
value $t$. In a chart around $\gamma(t)$ the velocity has the component
expression

$$\gamma'(t)=\sum_{a=0}^{3}\frac{d}{dt}\bigl(x^a\circ\gamma\bigr)(t)\,\partial_a|_{\gamma(t)},$$

the coordinate expression of the derivation
([[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]]). At an
included endpoint of the domain, $\gamma'$ means the corresponding one-sided
tangent of clause (a).

**(c) Timelike worldlines.** A **$C^k$ future timelike worldline** is a $C^k$
curve $\gamma:I\to M$ whose velocity $\gamma'(t)$ is future timelike at every
$t\in I$, in the sense of [[def-causal-classification-of-lorentz-vectors]]
and [[def-gr-smooth-lorentzian-objects]]: $g_{\gamma(t)}(\gamma'(t),\gamma'(t))<0$
and $g_{\gamma(t)}(\gamma'(t),N_{\gamma(t)})<0$. A **piecewise-$C^1$ future
timelike worldline** is a piecewise-$C^1$ curve $\gamma:[a,b]\to M$ whose
velocity at every point of each open piece and whose one-sided tangents at the
two ends of each piece are future timelike; the definition is applied to a map
on an arbitrary interval $I$ with nonempty interior by requiring it on every
compact subinterval of $I$. A future timelike velocity is in particular
nonzero, so every future timelike worldline is regular.

**(d) Proper time and length.** Let $\gamma:[a,b]\to M$ be a piecewise-$C^1$
future timelike worldline and let $a=s_0<s_1<\cdots<s_m=b$ be an admissible
partition. On each open piece $(s_{i-1},s_i)$ the function

$$h_i(s):=\sqrt{-g_{\gamma(s)}\bigl(\gamma'(s),\gamma'(s)\bigr)}$$

is continuous and strictly positive: it is a finite sum of products of
continuous real functions in any chart around a point of the piece, as
$g_{ab}\circ\gamma$ and the components of $\gamma'$ are continuous
([[thm-componentwise-limits-and-continuity]],
[[thm-algebra-of-continuous-functions]], [[def-continuity-real]]), and the
square root is continuous on $(0,\infty)$ ([[def-rational-power]],
[[thm-real-power-continuity-and-derivatives]]). The future timelike hypothesis
on the one-sided tangents makes the one-sided limits of $h_i$ at $s_{i-1}$ and
$s_i$ strictly positive, and $h_i$ extends to a continuous function on
$[s_{i-1},s_i]$; hence it is Darboux integrable there
([[def-darboux-integral]], [[thm-continuous-implies-integrable]]). The
**proper-time increment** of $\gamma$ over $[a,b]$ is

$$\tau(b)-\tau(a):=\frac{1}{c}\sum_{i=1}^{m}\int_{s_{i-1}}^{s_i}h_i(s)\,ds,$$

and the **Lorentzian length** of $\gamma$ over $[a,b]$ is
$L_g(\gamma):=c\,(\tau(b)-\tau(a))$. For a base point $s_0\in I$ the
**proper-time function** $\tau:I\to\mathbb R$ of a future timelike worldline is
$\tau(s):=\tau(s)-\tau(s_0)$ for the increment over the compact subinterval
bounded by $s_0$ and $s$. That the increment is independent of the admissible
partition, so that $\tau$ is well defined, and that it is invariant under
increasing $C^1$ reparametrization are proved in
[[lem-gr-proper-time-reparametrization-and-four-velocity]]; the display is the
value for any admissible partition.

**(e) Four-velocity.** Let $\gamma$ be a piecewise-$C^1$ future timelike
worldline and let $t$ be a parameter value at which $\gamma$ is differentiable
(interior point of a piece, or an included endpoint with its one-sided
tangent). The **four-velocity** of $\gamma$ at $t$ is

$$U(t):=\frac{c\,\gamma'(t)}{\sqrt{-g_{\gamma(t)}\bigl(\gamma'(t),\gamma'(t)\bigr)}}\in T_{\gamma(t)}M .$$

By construction $g_{\gamma(t)}(U(t),U(t))=-c^2$, and
$\gamma'(t)=\bigl(\sqrt{-g(\gamma',\gamma')}/c\bigr)U(t)$ with a strictly
positive scalar factor. If $U$ is written as the derivative of $\gamma$ with
respect to proper time, $U=d\gamma/d\tau$, this is a statement proved in
[[lem-gr-proper-time-reparametrization-and-four-velocity]], not part of the
present definition.

**(f) Scope.** Proper time, length and four-velocity are defined only for
future timelike worldlines. A null or spacelike curve receives no proper time
and no four-velocity from this definition, and no limiting or distributional
extension of the square-root integrand to such curves is asserted. The
parametrization of a worldline is part of the data and is arbitrary in this
definition: no affine parameter, no geodesic equation, no completeness or
extendability of the domain, and no measurement or clock reading is assumed.
Null and spacelike regularity classes are not defined here beyond the general
$C^k$ and piecewise-$C^1$ notions of clause (a), which make no causal
requirement.

## Remarks

- **Units and the constant $c$.** This item treats $c$ as a positive real
number and fixes no numerical value or dimension for it. The framework's
physical reading of $c$ as the conversion constant with dimension
$\mathrm m\,\mathrm s^{-1}$, of $\tau$ as a duration in seconds and of $g$
with dimensionless components in length coordinates belongs to
`def-gr-si-unit-and-coordinate-conventions`, which is a physical item and is
therefore not a prerequisite of this mathematical definition.

- **Choice convention.** The charts, tangent spaces and derivations used here
are those of [[def-gr-smooth-lorentzian-objects]] and
[[def-velocity-derivation-of-a-smooth-curve]]; no further choice principle
occurs. The only inherited assumption is the $\mathrm{AC}_\omega$ recorded
with the smooth structure of $M$ in [[def-gr-smooth-lorentzian-objects]].
