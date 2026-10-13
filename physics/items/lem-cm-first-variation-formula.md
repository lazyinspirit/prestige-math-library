---
id: lem-cm-first-variation-formula
kind: lemma
title: "The first variation of a time-dependent action on a finite interval: admissibility, the integral formula and continuity of the Euler-Lagrange coefficient"
status: published
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-time-dependent-lagrangian-and-action, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-chain-rule-for-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-total-derivative-in-euclidean-space, def-ck-euclidean-maps-and-diffeomorphisms, def-ck-and-multi-index-notation-in-several-variables, def-jacobian-matrix-and-gradient, def-directional-and-partial-derivatives, def-vector-valued-derivative-and-integral, def-interval, def-darboux-integral, thm-continuous-implies-integrable, thm-linearity-of-the-integral, thm-extreme-value-metric, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-rn, lem-relative-compact-closed-sets-have-a-positive-distance-gap, def-metric-ball, def-metric-continuity, def-continuity-real, thm-metric-continuity-characterisations, def-abs-value, def-derivative]
dependency_roles:
  def-cm-time-dependent-lagrangian-and-action: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
  def-darboux-integral: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  lem-relative-compact-closed-sets-have-a-positive-distance-gap: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  def-abs-value: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Cline, Variational Principles in Classical Mechanics (2nd edition, University of Rochester River Campus Libraries, open textbook, CC BY-NC-SA 4.0), Section 5.2 (Euler's Differential Equation: the first variation by integration by parts) and Section 5.5 (Functions with Several Independent Variables)"
      url: "https://downloads.libretexts.org/api/v1/download/phys-9557/pdf"
    - title: "D. Tong, Classical Dynamics (University of Cambridge Part II Mathematical Tripos), Section 2.1 (first variation of the action and integration by parts), printed pages 10-13"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
---

## Statement

Let $(O,\mathcal L)$ be a time-dependent Lagrangian chart over $[a,b]\times U$ in the sense of
[[def-cm-time-dependent-lagrangian-and-action]], let $q:[a,b]\to U$ be a $C^2$ admissible curve and
let $\eta$ be a variation of $q$. Then:

1. there is $\varepsilon_0>0$ such that for every $\varepsilon\in(-\varepsilon_0,\varepsilon_0)$
   the curve $q+\varepsilon\eta$ is again a $C^2$ admissible curve with values in $U$;
2. for every such $\varepsilon$ the action $S(q+\varepsilon\eta)$ is defined, the function
   $\varepsilon\mapsto S(q+\varepsilon\eta)$ is differentiable on $(-\varepsilon_0,\varepsilon_0)$
   and

$$\delta S(q)[\eta]=\int_a^b\Bigl[\mathcal L_q\bigl(t,q(t),q'(t)\bigr)\cdot\eta(t)+\mathcal L_v\bigl(t,q(t),q'(t)\bigr)\cdot\eta'(t)\Bigr]dt ;$$

3. the Euler–Lagrange expression $E_{\mathcal L}(q):[a,b]\to\mathbb R^n$ of
   [[def-cm-time-dependent-lagrangian-and-action]] is continuous.

## Facts & Assumptions

**Given:** The chart data $(O,\mathcal L)$ with $O$ open satisfying
$[a,b]\times U\times\mathbb R^n\subseteq O$, a $C^2$ curve $q:[a,b]\to U$, and a $C^2$ variation
$\eta$ with $\eta(a)=\eta(b)=0$. Write
$\psi(\varepsilon,t):=\bigl(t,q(t)+\varepsilon\eta(t),q'(t)+\varepsilon\eta'(t)\bigr)$.

[F1] The set $[a,b]\subseteq\mathbb R$ is compact by [[thm-heine-borel-rn]] (it is closed and
bounded), the curve $q$ is continuous on $[a,b]$, and a continuous image of a compact set is
compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); hence $q[a,b]\subseteq U$ is a
nonempty compact subset. If $U\ne\mathbb R^n$, then the complement $\mathbb R^n\setminus U$ is a
nonempty closed set disjoint from $q[a,b]$, and
[[lem-relative-compact-closed-sets-have-a-positive-distance-gap]] supplies $d>0$ with
$\|q(t)-c\|_2\ge d$ for all $t\in[a,b]$ and all $c\notin U$.

[F2] The continuous function $\eta:[a,b]\to\mathbb R^n$ attains a maximum of $\|\eta(t)\|_2$
([[thm-extreme-value-metric]]); write $m_\eta:=\max_{t\in[a,b]}\|\eta(t)\|_2\ge0$.

[F3] The map $\psi$ is continuous on $\mathbb R\times[a,b]$ and is continuously partially
differentiable in $\varepsilon$, with
$$\frac{\partial\psi}{\partial\varepsilon}(\varepsilon,t)=\bigl(0,\eta(t),\eta'(t)\bigr),$$
because $\eta$ is $C^1$; hence $\psi$ is totally differentiable in $(\varepsilon,t)$ with the
displayed derivatives and the derivative depends continuously on $(\varepsilon,t)$
([[def-total-derivative-in-euclidean-space]],
[[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-jacobian-matrix-and-gradient]]).

[F4] The chain rule computes the derivative of a composite through the total derivatives
([[thm-chain-rule-for-total-derivatives]]). In particular, if
$g(\varepsilon,t):=\mathcal L(\psi(\varepsilon,t))$ on the domain where $\psi$ takes values in
$O$, then
$$\frac{\partial g}{\partial\varepsilon}(\varepsilon,t)=\mathcal L_q\bigl(\psi(\varepsilon,t)\bigr)\cdot\eta(t)+\mathcal L_v\bigl(\psi(\varepsilon,t)\bigr)\cdot\eta'(t),$$
which is continuous in $(\varepsilon,t)$ because $\mathcal L_q,\mathcal L_v,\eta,\eta'$ are
continuous and $\psi$ is continuous.

[F5] Differentiation under the integral sign on a compact rectangle
([[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]): if
$g,h:[\alpha,\beta]\times[a,b]\to\mathbb R$ are continuous and for each fixed $t$ the map
$\varepsilon\mapsto g(\varepsilon,t)$ is differentiable on $(\alpha,\beta)$ with derivative
$h(\varepsilon,t)$, then $\varepsilon\mapsto\int_a^bg(\varepsilon,t)\,dt$ has derivative
$\int_a^bh(\varepsilon,t)\,dt$ at every $\varepsilon\in[\alpha,\beta]$.

[F6] Integrals used below are Darboux integrals of the continuous integrands over $[a,b]$
([[def-darboux-integral]], [[thm-continuous-implies-integrable]]); the integral is linear and
preserves sums ([[thm-linearity-of-the-integral]]); norms and distances are those of
$\mathbb R^n$ ([[def-abs-value]], [[def-metric-ball]], [[def-continuity-real]],
[[thm-metric-continuity-characterisations]], [[def-metric-continuity]],
[[def-vector-valued-derivative-and-integral]], [[def-interval]], [[def-derivative]]).

## Proof

**Proof technique:** direct; trap the curve in a positive distance shell of $U$, then differentiate
under the integral on a compact rectangle.

1.1 Clause 1, the case $U=\mathbb R^n$: take $\varepsilon_0:=1$; then for every $\varepsilon\in(-1,1)$ the map $q+\varepsilon\eta$ is $C^2$ by the algebra of $C^2$ maps on an open interval and takes values in $\mathbb R^n=U$. [given, F3]

1.2 Clause 1, the case $U\ne\mathbb R^n$: by [F1] choose $d>0$ with $\|q(t)-c\|_2\ge d$ for all $t\in[a,b]$ and all $c\notin U$, and by [F2] put $m_\eta:=\max\|\eta\|_2$. If $m_\eta=0$ then $\eta=0$ identically and $\varepsilon_0:=1$ works. Otherwise take $\varepsilon_0:=d/(2m_\eta)$. For $|\varepsilon|<\varepsilon_0$ and $t\in[a,b]$, $$\|q(t)+\varepsilon\eta(t)-q(t)\|_2=|\varepsilon|\,\|\eta(t)\|_2<d/2<d,$$ so if $q(t)+\varepsilon\eta(t)$ were outside $U$, the distance from $q(t)$ to the complement would be $<d$, contradicting the choice of $d$. Hence $q+\varepsilon\eta$ takes values in $U$; it is $C^2$ by the algebra of $C^2$ maps. This proves clause 1. [F1, F2, algebra]

2.1 Clause 2: fix $0<\delta<\varepsilon_0$ and consider $R:=[-\delta,\delta]\times[a,b]$; by clause 1, $\psi(R)\subseteq\{(t,x,w):(t,x,w)\in O\}$, so $g(\varepsilon,t):=\mathcal L(\psi(\varepsilon,t))$ is defined and continuous on $R$. By [F3], [F4] the partial derivative $h:=\partial g/\partial\varepsilon$ exists and is continuous on $R$, and for each fixed $t$ it is the derivative of $\varepsilon\mapsto g(\varepsilon,t)$. Hence [F5] applies and gives $$\frac{d}{d\varepsilon}\int_a^b g(\varepsilon,t)\,dt=\int_a^b h(\varepsilon,t)\,dt \qquad(|\varepsilon|\le\delta).$$ Evaluating at $\varepsilon=0$ and inserting the description of $h$ from [F4] gives the displayed formula for $\delta S(q)[\eta]$. [F3, F4, F5, F6, step 1.2, algebra]

3.1 Clause 3: the map $t\mapsto\psi(0,t)=(t,q(t),q'(t))$ is $C^1$ on an open interval around $[a,b]$ and takes values in $O$; since $\mathcal L_v$ is $C^1$, the composite $t\mapsto\mathcal L_v(t,q(t),q'(t))$ is $C^1$ by the chain rule, with continuous derivative because the derivative is a composite of continuous maps; and $t\mapsto\mathcal L_q(t,q(t),q'(t))$ is continuous. The difference $E_{\mathcal L}(q)$ of these two continuous maps is continuous. [F3, F4, given, algebra] ∎

## Remarks

- The formula is stated for the chartwise finite-interval setting. The autonomous smooth version
  on a manifold, where the same computation is performed in every coordinate chart and assembled
  by a partition argument, is the published theorem on the Hamiltonian-mechanics page of the
  differential-geometry track; the present statement is the one needed when the Lagrangian
  depends explicitly on time and $C^2$ data on a fixed interval are used.

- Only the differentiability of $\varepsilon\mapsto S(q+\varepsilon\eta)$ at $\varepsilon=0$ is
  used later. The proof establishes differentiability on the whole small interval, which is the
  natural output of the compact-rectangle theorem.
