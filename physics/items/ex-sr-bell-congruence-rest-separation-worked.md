---
id: ex-sr-bell-congruence-rest-separation-worked
kind: example
title: "Bell congruence worked: internal material length gamma(t)L and constant chart separation"
status: published
origin: pipeline
domain: mathematics
dependency_level: 15
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-sr-connecting-field-stretching, thm-sr-fermi-walker-and-rigid-observer-examples, def-sr-observer-congruence-and-kinematics, def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, thm-chain-rule, def-derivative, lem-sr-proper-time-parametrization, def-sr-proper-time, thm-chain-rule-for-total-derivatives, def-natural-logarithm, thm-logarithm-derivative-and-integral]
dependency_roles:
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  lem-sr-connecting-field-stretching: mathematical-premise
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-sr-proper-time: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.9.2 pp. 70-72 and Section 9.5.2 pp. 206-207 (Bell's translated rockets, the constant spacing in the launch frame, the expansion and the stretching of the thread); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Giulini, 'Algebraic and geometric structures of Special Relativity', arXiv:math-ph/0602018v2: Section 5.5 pp. 41-49 (Born rigidity and the evolution of the rest metric of a congruence); signature (+---) converted to (-+++), u^2 = c^2 converted to eta(n,n) = -1"
      url: "https://arxiv.org/pdf/math-ph/0602018"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Example

Worked computation of the internal material length for the Bell congruence of [[thm-sr-fermi-walker-and-rigid-observer-examples]] (d) and the material metric of [[lem-sr-connecting-field-stretching]]. Fix $c > 0$ and $\alpha > 0$, let $J := (-c/\alpha, c/\alpha)$, put $q(t) := \frac12 \alpha t^2$ on $J$ and let $x_\xi(t) := x^{-1}(c t, q(t) + \xi, 0, 0)$ for $\xi$ in an open interval containing $[0,L]$, $L > 0$, in the inertial chart $x$ with $x^0 = c t$. Then $|q'(t)| = \alpha|t| < c$ on the two-sided domain $J$; write $\beta(t) := \alpha t/c$ and $\gamma(t) := (1 - \beta(t)^2)^{-1/2}$.

(a) The translated congruence field is $n = \gamma (1, \beta, 0, 0)$ and the material field $e := \partial_\xi$ is the constant $(0,1,0,0)$; since $\eta(n,e) = \gamma \beta$, the $h$-length of $e$ is $|e|_h = \sqrt{\eta(e,e) + \eta(n,e)^2} = \sqrt{1 + \gamma^2 \beta^2} = \gamma(t)$ ([[lem-sr-connecting-field-stretching]] (a), [[thm-sr-fermi-walker-and-rigid-observer-examples]] (d)). Hence the internal longitudinal material-metric length between labels $0$ and $L$ is $|e|_h L = \gamma(t) L > L$ for every $t \neq 0$, with minimum $L$ at $t = 0$, while the chart-frame separation is $q(t) + L - q(t) = L$ for every $t$ in $J$.

(b) The longitudinal expansion of the translated congruence is $\theta(s,s) = \gamma^3 q' q''/c^3 = \gamma^3 \alpha^2 t/c^3$, with unit rest vector $s = \gamma(\beta,1,0,0)$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (d)); it vanishes at $t = 0$ and is nonzero for every $t \neq 0$, negative for $t < 0$ and positive for $t > 0$. By [[lem-sr-connecting-field-stretching]] (b) the internal longitudinal material metric component is $G_{11} = h(e,e) = \gamma(t)^2$ and its derivatives in geometric proper length $\sigma = c \tau$ are $d/d\sigma G_{11} = 2 \theta(e,e)$ and $d/d\tau G_{11} = 2 c \theta(e,e)$; with horizontal unit direction $h(e)/\gamma = s$, equivalently the fractional rate of change of the rest separation per unit proper time is $d/d\tau \log\gamma = c \theta(s,s) = \gamma^3 \alpha^2 t/c^2$, and $d(\gamma L)/d \tau = \gamma^4 L \alpha^2 t/c^2$.

(c) Explicit check at $\alpha t = 3c/5$, i.e. $t = 3c/(5\alpha)$ in $J$: $\beta = 3/5$, $\gamma = 5/4$ and $\sinh$ and $\cosh$ are not needed; the rest separation is $5L/4 > L$, the internal metric component is $G_{11} = 25/16 > 1$, the expansion is $\theta(s,s) = (125/64)(3\alpha/(5c^2)) = 75\alpha/(64c^2)$, and using [L7], the fractional rest-separation rate is $c \theta(s,s) = 75\alpha/(64c)$. At $t = 0$ the rest separation takes its minimum $L$ and the expansion vanishes; the domain is the two-sided interval $(-c/\alpha, c/\alpha)$, so both the decelerating branch $t < 0$ (negative expansion) and the accelerating branch $t > 0$ (positive expansion) are included.

(d) **Scope.** The length $\gamma(t)L$ is the integral of the local rest metric over the material-label segment at common flow parameter; no finite endpoint-hyperplane distance is inferred. The computation is exact kinematics of the specified family: it uses no elasticity, no material failure criterion, no force law, no measurement and no empirical claim, and it draws no conclusion about real threads; no choice principle is used.

## Facts & Assumptions

**Given:** $c>0$, $\alpha>0$, $J=(-c/\alpha,c/\alpha)$, $q(t)=\frac12\alpha t^2$ on $J$, $L>0$, an open label interval containing $[0,L]$, an inertial chart $x$ with $x^0=ct$, the worldlines $x_\xi(t)=x^{-1}(ct,q(t)+\xi,0,0)$, and $\beta=\alpha t/c$, $\gamma=(1-\beta^2)^{-1/2}$.

[L1] Model and chart: $(A,V,\eta,C^+)$ with coordinate identification $x(p)$ and $\eta=\operatorname{diag}(-1,1,1,1)$ in the orthonormal frame ([[def-sr-affine-minkowski-model]], [[def-inertial-frame-and-inertial-chart]]).

[L2] Derivatives: $q'=\alpha t$, $q''=\alpha$, and the chain rule plus the total chain rule differentiate composites of the data functions ([[def-derivative]], [[thm-chain-rule]], [[thm-chain-rule-for-total-derivatives]]).

[L3] Translated-congruence first-order data: the unit field is $n=\gamma(1,\beta,0,0)$, the unit longitudinal rest vector is $s=\gamma(\beta,1,0,0)$, and $\theta(s,s)=\gamma^3q'q''/c^3$, nonzero exactly where $q'q''\ne0$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (d), [[def-sr-observer-congruence-and-kinematics]] (c)).

[L4] Material metric: for an injective $C^2$ immersion with $\partial_s\Phi=n(\Phi)$ and material directions $e_I$, $G_{IJ}=h(e_I,e_J)$ and $\partial_sG_{IJ}=2\theta(e_I,e_J)$, i.e. $\partial_\tau G_{IJ}=2c\theta(e_I,e_J)$ with $\tau=s/c$; $\theta$ kills the $n$-component, so $\theta(e,e)=\gamma^2\theta(s,s)$ when $h(e)=\gamma s$ ([[lem-sr-connecting-field-stretching]] (a),(b),(d)).

[L5] Rest form: $h(e,e)=\eta(e,e)+\eta(n,e)^2$ for the first-order rest projection $h$ ([[def-sr-observer-congruence-and-kinematics]] (a), [[lem-sr-connecting-field-stretching]]).

[L6] Proper time and four-velocity: the flow lines have four-velocity $cn$ with $\eta(cn,cn)=-c^2$, and the flow parameter satisfies $\sigma=c\tau$ for the proper time $\tau$, with $\gamma\ge1$ and $\gamma=1$ iff $\beta=0$ ([[def-sr-four-velocity-and-four-acceleration]], [[thm-sr-proper-time-and-observer-decomposition]] (a),(d), [[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]).

[L7] The natural logarithm is defined on positive real numbers and has derivative $1/u$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]); hence $d\log\gamma/d\tau=(d\gamma/d\tau)/\gamma$ by [L2]. This is the fractional rate of $\gamma L$ for constant $L>0$.

## Verification

**Proof technique:** direct.

1.1 (Basic data.) On $J$ one has $q'(t)=\alpha t$ and $q''(t)=\alpha$ by [L2], so $|q'(t)|=\alpha|t|<c$ exactly on the stated two-sided domain, and $\beta=\alpha t/c\in(-1,1)$; hence $\gamma=(1-\beta^2)^{-1/2}$ is well defined and positive, and $1+\gamma^2\beta^2=1/(1-\beta^2)=\gamma^2$. [L1, L2, given, algebra]

2.1 (The unit field and the material direction.) To realize the hypotheses of [L4], let $\tau(t)=\int_0^t\gamma(v)^{-1}dv$ and $\sigma=c\tau$. By [L6] its inverse $t(\sigma)$ is $C^1$ with $t'=\gamma/c$; the smooth data bootstrap this inverse to smoothness. The map $\Phi(\sigma,\xi,y,z)=x^{-1}(ct(\sigma),q(t(\sigma))+\xi,y,z)$ on the open product of the parameter image, the stated label interval and $\mathbb R^2$ has the explicit inverse $(c\tau(t),x^1-q(t),x^2,x^3)$, so is an injective smooth immersion onto an open set; its flow derivative is $\partial_\sigma\Phi=\gamma(1,\beta,0,0)=n$. By [L3] the translated congruence field is $n=\gamma(1,\beta,0,0)$, and the material direction is $e=\partial_\xi\Phi=(0,1,0,0)$; then $\eta(n,e)=\gamma\beta$, and by [L5] the rest form of $e$ is $h(e,e)=\eta(e,e)+\eta(n,e)^2=1+\gamma^2\beta^2=\gamma(t)^2$, while $h(e)/\gamma=\gamma(\beta,1,0,0)=s$ is the horizontal unit rest vector of [L3]. [L3, L4, L5, L6, step 1.1, algebra]

3.1 (Clause (a): the material length.) By step 2.1 the $h$-length of $e$ is $|e|_h=\sqrt{h(e,e)}=\gamma(t)>0$, so the internal longitudinal material-metric length between labels $0$ and $L$ at common flow parameter is $\int_0^L\sqrt{G_{11}}\,d\xi=\gamma(t)L$ by [L4]; since $\gamma^2=1/(1-\beta^2)>1$ for $t\ne0$ by step 1.1 and [L6], this exceeds $L$ for every $t\ne0$ and equals $L$ only at $t=0$ (where $\beta=0$). The chart separation is $(q(t)+L)-q(t)=L$ for every $t\in J$. [L4, L6, step 1.1, step 2.1, algebra]

3.2 (Clause (b): the expansion and the metric component.) By [L3] the longitudinal expansion is $\theta(s,s)=\gamma^3q'q''/c^3=\gamma^3\alpha^2t/c^3$, which vanishes at $t=0$ and has the sign of $t$ elsewhere because $\gamma>0$; and by step 2.1, $G_{11}=h(e,e)=\gamma(t)^2$. [L3, step 1.1, step 2.1, algebra]

4.1 (Clause (b): the rates.) By [L4], $d/d\sigma G_{11}=2\theta(e,e)$ and $d/d\tau G_{11}=2c\theta(e,e)$; since $\theta(e,e)=\gamma^2\theta(s,s)$ by [L4] and step 2.1, using [L7], the fractional rest-separation rate is $d/d\tau\log\gamma=\frac12\partial_\tau G_{11}/G_{11}=c\theta(e,e)/\gamma^2=c\theta(s,s)=\gamma^3\alpha^2t/c^2$, and multiplying by $\gamma L$ gives $d(\gamma L)/d\tau=\gamma^4L\alpha^2t/c^2$. [L4, L7, step 2.1, step 3.2, algebra]

5.1 (Clause (c): the numerical check.) At $t=3c/(5\alpha)$: $\beta=3/5$ and $\gamma=(1-9/25)^{-1/2}=(16/25)^{-1/2}=5/4$; the rest separation is $\gamma L=5L/4>L$ and the metric component is $G_{11}=\gamma^2=25/16>1$ by steps 2.1 and 3.2; the expansion is $\theta(s,s)=\gamma^3\alpha^2t/c^3=(125/64)\cdot\alpha^2\cdot(3c/(5\alpha))/c^3=(125\cdot3\alpha)/(64\cdot5c^2)=75\alpha/(64c^2)$, and the fractional rate is $c\theta(s,s)=75\alpha/(64c)$ by step 4.1. At $t=0$ the separation is $L$ and the expansion vanishes, and the two-sided domain contains both signs of $t$, hence both signs of the expansion. [step 3.1, step 3.2, step 4.1, algebra]

6.1 (Clause (d): scope.) Everything computed is the material-label integral $\gamma(t)L$ of the rest metric at common flow parameter, with its exact local rates; no endpoint distance on a single simultaneity hyperplane, no elasticity, failure criterion, force law, measurement or empirical claim enters, and every step is finite-dimensional algebra or calculus from the cited suppliers, so no choice principle is used. [L4, step 3.1, step 4.1, step 5.1] ∎
