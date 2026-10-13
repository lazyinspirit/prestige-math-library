---
id: texp-sr-bell-rockets-thread
kind: thought-experiment
title: "Bell's rockets and thread: constant chart separation and the criterion for longitudinal expansion of the translated congruence"
status: published
origin: pipeline
domain: physics
dependency_level: 15
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [post-sr-inertial-covariance, def-sr-si-units-and-coordinate-conventions, def-sr-proper-acceleration, lem-sr-connecting-field-stretching, thm-sr-fermi-walker-and-rigid-observer-examples, def-sr-observer-congruence-and-kinematics, def-flat-covariant-derivative-on-affine-minkowski-space, def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-sr-proper-time, lem-sr-proper-time-parametrization, def-sr-regular-causal-curve-and-worldline, def-inertial-frame-and-inertial-chart, def-sr-affine-minkowski-model, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, thm-chain-rule, def-derivative, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-directional-and-partial-derivatives, lem-sr-future-causal-sums-and-inertial-coordinate-criterion, def-natural-logarithm, thm-logarithm-derivative-and-integral]
dependency_roles:
  def-natural-logarithm: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  post-sr-inertial-covariance: physical-assumption
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-sr-proper-acceleration: formulation-prerequisite
  lem-sr-connecting-field-stretching: mathematical-premise
  thm-sr-fermi-walker-and-rigid-observer-examples: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-chain-rule: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  lem-sr-future-causal-sums-and-inertial-coordinate-criterion: mathematical-premise
proof_strategy: direct
physical_scope: "A conditional kinematic thought experiment in flat classical special relativity about two prescribed rocket worldlines with equal chart-frame accelerations and a thread whose material points are modelled as following the translated congruence. It contains no dynamical or elastic model, no material failure criterion, no force law, no measurement and no empirical claim; breaking or tension of a real thread is explicitly not asserted, and no experimental data are used or invented. The preserved C2 worldline branch uses first-order C1 kinematics and an explicit C2 four-dimensional material family."
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.9.2 'Bell's spaceship paradox' pp. 70-72 (two rockets with equal accelerations as judged in the launch frame, a thread tied between them, the inertial observer's equal-spacing reasoning, and the conclusion that the thread is stretched relative to its unstressed length and under tension) and Section 9.5.2 pp. 206-207 (the congruence with du/dx = 0 and du/dt != 0 is Bell's paradox; there is a real expansion, and a solid object comes under increasing tension); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "D. Giulini, 'Algebraic and geometric structures of Special Relativity', arXiv:math-ph/0602018v2: Section 5.5 pp. 41-49 (Born rigidity L_u h = 0 and the classification of rigid motions, used only for the contrast between the Born-rigid Rindler congruence and the expanding translated congruence); signature (+---) converted to (-+++), u^2 = c^2 converted to eta(n,n) = -1"
      url: "https://arxiv.org/pdf/math-ph/0602018"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Statement

Adopt [[post-sr-inertial-covariance]] and the SI conventions $x^0=ct$ of [[def-sr-si-units-and-coordinate-conventions]] in an inertial chart ([[def-inertial-frame-and-inertial-chart]]). Let $J$ be an open interval containing $0$, let $q:J\to\mathbb R$ be $C^2$ with $|q'(t)|<c$, set $\beta=q'/c$ and $\gamma=(1-\beta^2)^{-1/2}$, let $L>0$, and fix transverse coordinates $(y_0,z_0)$. The rocket and thread-element worldlines are $x_\xi(t)=x^{-1}(ct,q(t)+\xi,y_0,z_0)$, with labels in an open interval $I$ containing $[0,L]$; the rockets are labels $0,L$.

(a) Every member is $C^2$ future timelike: its chart-time tangent is $(c,q',0,0)$ with squared norm $-c^2/\gamma^2<0$. Its common proper-time function is $\tau(t):=\int_0^t\gamma(v)^{-1}dv$, and its proper four-velocity is $U=\gamma(c,q',0,0)$ with squared norm $-c^2$. All members have equal chart velocity and acceleration, $q',q''$, and their chart separation is the constant $L$.

(b) The four-dimensional extension is essential for applying the material-family lemma. Choose open transverse intervals $Y,Z$ containing $y_0,z_0$, put $\sigma:=c\tau$, let $t=t(\sigma)$ be the inverse on $c\tau(J)$, and set

$$\Phi(\sigma,\xi,y,z):=x^{-1}(ct(\sigma),q(t(\sigma))+\xi,y,z),\qquad(\xi,y,z)\in B:=I\times Y\times Z.$$

This is an injective $C^2$ immersion onto an open set, with $dt/d\sigma=\gamma/c$ and $\partial_\sigma\Phi=n(\Phi)$, where $n=\gamma(1,\beta,0,0)$ is a $C^1$ future unit field. Apply the first-order definitions in [[lem-sr-connecting-field-stretching]], which agree with [[def-sr-observer-congruence-and-kinematics]] when smooth. The longitudinal unit rest vector is $s_\parallel:=\gamma(\beta,1,0,0)$, and

$$\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^3.$$

This agrees with [[thm-sr-fermi-walker-and-rigid-observer-examples]] (d), is nonzero exactly where $q'q''\ne0$, and changes sign with that product. When $q$ is smooth the full original smooth-congruence branch is recovered. Restricting the extension to fixed $y_0,z_0$ gives the prescribed thread.

(c) For its material label tangent $e=\partial_\xi\Phi=(0,1,0,0)$, $h(e,e)=\gamma^2$ and $h(e)/\gamma=s_\parallel$. The vector $e/\gamma$ generally is not $s_\parallel$, but horizontality implies $\theta(e/\gamma,e/\gamma)=\theta(s_\parallel,s_\parallel)$. The internal longitudinal material metric is $G_{11}=\gamma^2$, so its length at common flow parameter is

$$\mathcal L(t):=\int_0^L\sqrt{G_{11}}\,d\xi=\gamma(t)L.$$

It is an internal material metric length, not automatically the finite endpoint distance on one observer's orthogonal simultaneity hyperplane. The local evolution is

$$\frac{d}{d\tau}\log(\mathcal L/L)=c\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^2,\qquad\frac{d\mathcal L}{d\tau}=\gamma^4Lq'q''/c^2.$$

At a time with $q'=v$, $\mathcal L=L/\sqrt{1-v^2/c^2}\ge L$, with equality exactly for $v=0$. Chart separation stays $L$; the material length is constant precisely when $q'{}^2$ is constant, and has nonzero local rate wherever $q'q''\ne0$.

(d) Under the stipulated material reading that thread elements follow these flow lines, the initial internal length is $\gamma(0)L$ and its relative factor is $\gamma(t)/\gamma(0)$. Relative to that initial state it stretches where $\gamma(t)>\gamma(0)$, shrinks where $\gamma(t)<\gamma(0)$, and has equal length where the factors agree. In the special initially resting case $q'(0)=0$, the initial length is $L$ and every state with $q'(t)\ne0$ has stretch factor $\gamma(t)>1$. No elasticity or failure criterion is supplied, so neither breaking nor a definite tension of an actual thread follows.

(e) The Rindler congruence in [[thm-sr-fermi-walker-and-rigid-observer-examples]] (b) is Born rigid, with constant internal rest separations and unequal proper accelerations $c^2/\rho$ at distinct radial labels ([[def-sr-proper-acceleration]]). Equal chart-velocity and acceleration profiles in the translated family do not imply Born rigidity where $q'q''\ne0$. Constant chart separation and constant internal rest metric are distinct kinematic conditions.

(f) This is a conditional flat-spacetime deduction for prescribed worldlines and the stated material reading. It assumes no dynamical or elastic model, force law, material failure criterion, measurement or empirical fact, and asserts nothing about real threads or rockets. No choice principle is used.

## Facts & Assumptions

**Given:** $c>0$; an inertial chart $x$ with $x^0=ct$; an open interval $J\ni0$; a $C^2$ function $q:J\to\mathbb R$ with $|q'|<c$; $\beta=q'/c$, $\gamma=(1-\beta^2)^{-1/2}$; $L>0$; transverse $y_0,z_0$, intervals $Y\ni y_0$, $Z\ni z_0$; label interval $I\supset[0,L]$; the worldlines $x_\xi(t)=x^{-1}(ct,q(t)+\xi,y_0,z_0)$; and, in (b)-(c), the map $\Phi(\sigma,\xi,y,z)=x^{-1}(ct(\sigma),q(t(\sigma))+\xi,y,z)$ on $B=I\times Y\times Z$ with $\sigma=c\tau$.

[L1] The framework adopts the affine Minkowski model as spacetime with its causal structure ([[post-sr-inertial-covariance]], [[def-sr-affine-minkowski-model]]).

[L2] In every inertial chart $x^0=ct$, the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$ in the orthonormal frame, and points are determined by their coordinates ([[def-sr-si-units-and-coordinate-conventions]], [[def-inertial-frame-and-inertial-chart]]).

[L3] A curve is $C^k$ exactly when its coordinate representation is; its tangent is read in $V$; a $C^2$ curve has $C^1$-in-parameter tangents ([[def-sr-regular-causal-curve-and-worldline]] (a)).

[L4] Causal classification and the chart criterion: timelike means $\eta(v,v)<0$ and $C^+=\{v:v^0>|v_s|\}$ in every inertial chart ([[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]], [[lem-sr-future-causal-sums-and-inertial-coordinate-criterion]] (a)).

[L5] Four-velocity of a $C^1$ future timelike worldline: $U=x'/\tau'=cx'/\sqrt{-\eta(x',x')}$, with $\eta(U,U)=-c^2$; for $C^2$ curves the four-acceleration is the proper-time derivative of $U$ ([[def-sr-four-velocity-and-four-acceleration]] (a),(b), [[thm-sr-proper-time-and-observer-decomposition]] (a)).

[L6] Proper time $\tau(t)=\int_0^t c^{-1}\sqrt{-\eta(x',x')}\,dv$ up to a constant, and the reparametrization tangent $x'/\tau'$ ([[def-sr-proper-time]], [[lem-sr-proper-time-parametrization]]).

[L7] The Lorentz factor of the future unit field $n=\gamma(1,\beta,0,0)$ relative to the inertial chart observer $e_0$ is $\gamma\ge1$ with $\gamma=1$ iff $\beta=0$; along a congruence flow line the four-velocity is $cn$ ([[thm-sr-proper-time-and-observer-decomposition]] (d), (a)).

[L8] Material metric and its evolution: for a $C^2$ injective immersion $\Phi$ with material directions $e_I=\partial_{\xi^I}\Phi$, $G_{IJ}=h(e_I,e_J)$ is a $C^1$ positive-definite material metric; $\partial_\tau G_{IJ}=2c\theta(e_I,e_J)$; for nonzero $e_I$, $\ell_I=\sqrt{G_{II}}$ satisfies $\partial_\tau\ell_I=c\theta(u_I,u_I)\ell_I$ with $u_I=h(e_I)/\ell_I$; $\theta=0$ makes $G$ constant in the flow parameter; horizontality of $\theta$ gives $\theta(e_I/\ell_I,e_I/\ell_I)=\theta(u_I,u_I)$ ([[lem-sr-connecting-field-stretching]] (a)-(d)).

[L9] Born rigidity and expansion: for $C^1$ data the projected deformation $\theta_{ab}=h_a{}^ch_b{}^d\partial_{(c}n_{d)}$ kills $n$-components, and Born rigidity $\theta=0$ agrees with the smooth definition; restriction to a subfamily keeps the induced metric data ([[def-sr-observer-congruence-and-kinematics]] (c),(d), [[lem-sr-connecting-field-stretching]]).

[L10] Translated-congruence data: for the $C^1$ field $n=\gamma(1,\beta,0,0)$ of the translated worldlines the unit longitudinal rest vector is $s=\gamma(\beta,1,0,0)$ and $\theta(s,s)=\gamma^3q'q''/c^3$, nonzero exactly where $q'q''\ne0$; and the Rindler congruence is Born rigid with constant rest slices and accelerations $\rho^{-1}\partial_\rho$, $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})=\rho^{-2}$ ([[thm-sr-fermi-walker-and-rigid-observer-examples]] (b),(d)).

[L11] Proper acceleration of a congruence flow line: $a=c^2\sqrt{\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})}$, so $\rho$-const Rindler flow lines have proper acceleration $c^2/\rho$ ([[def-sr-proper-acceleration]] (b)).

[L12] The covariant derivative of a $C^1$ field along a curve is the ordinary derivative of its components; for $C^1$ data the first-order coordinate formulas of [[def-flat-covariant-derivative-on-affine-minkowski-space]] (d),(e) apply.

[L13] Chain rule and derivative algebra: for $C^1$ composable maps the total chain rule holds, and sums, products and composites of differentiable functions are differentiable with the usual rules ([[thm-chain-rule-for-total-derivatives]], [[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-derivative]], [[def-directional-and-partial-derivatives]]).

[L14] The natural logarithm is defined on positive real numbers; $(\log u)\prime=1/u$ there ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]). Thus for a positive differentiable length $\mathcal L$, $d\log(\mathcal L/L)/d\tau=(d\mathcal L/d\tau)/\mathcal L$ by [L13], where $L>0$ is constant.

## Proof

**Proof technique:** direct.

1.1 (The rocket tangents and chart separation.) For fixed $\xi$ the coordinate functions of $x_\xi$ are $t\mapsto ct$, $t\mapsto q(t)+\xi$, and the two constants; differentiating with [L13] gives $x_\xi'(t)=(c,q'(t),0,0)$, whose squared norm is $-c^2+q'^2=-c^2(1-\beta^2)=-c^2/\gamma^2<0$, with time component $c>|q'|$; hence $x_\xi'$ is future timelike by [L4] and $x_\xi$ is $C^2$ by [L3]. The chart separation of labels $\xi_1,\xi_2$ is $(q(t)+\xi_2)-(q(t)+\xi_1)=\xi_2-\xi_1$, in particular $L$ for the two rockets; the chart velocity and acceleration are $q'$ and $q''$ for every label. [L2, L3, L4, L13]

1.2 (The translated congruence data.) By [L10] the longitudinal unit rest vector of $n$ is $s_\parallel=\gamma(\beta,1,0,0)$, horizontal ($\eta(n,s_\parallel)=0$) with $\eta(s_\parallel,s_\parallel)=1$, and the first-order deformation satisfies $\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^3$, nonzero exactly where $q'q''\ne0$ and changing sign with that product; when $q$ is smooth these first-order expressions agree with the smooth congruence definitions by [L9], and Born rigidity is $\theta=0$. [L9, L10, L12]

2.1 (Common proper time and four-velocity.) By step 1.1 each worldline is $C^1$ future timelike, so its proper-time function is $\tau(t)=\int_0^tc^{-1}\sqrt{-\eta(x_\xi',x_\xi')}\,dv=\int_0^t\gamma(v)^{-1}dv$ by [L6] and step 1.1, the same function for every $\xi$. The four-velocity is $U=x_\xi'/\tau'=\gamma(c,q',0,0)$ by [L5], with $\eta(U,U)=\gamma^2(-c^2+q'^2)=-c^2$. [L5, L6, step 1.1]

3.1 (The four-dimensional extension.) Since $\tau$ is strictly increasing and $C^1$ with $\tau'=1/\gamma>0$, it has a $C^1$ inverse $t(\sigma)$ on $c\tau(J)$ with $dt/d\sigma=\gamma/c$ by [L6]; because $q$ is $C^2$, $\gamma$ is $C^1$ and $dt/d\sigma=(\gamma\circ t)/c$ is $C^1$, so $t$ is $C^2$. The image of $\Phi$ is the open set of events with $t\in J$, $x^1-q(t)\in I$, $x^2\in Y$ and $x^3\in Z$, with inverse $(\sigma,\xi,y,z)=(c\tau(t),x^1-q(t),x^2,x^3)$. Thus $\Phi$ is injective and $C^2$ in all variables, with $\partial_\xi\Phi=(0,1,0,0)$, $\partial_y\Phi=(0,0,1,0)$, $\partial_z\Phi=(0,0,0,1)$ and $\partial_\sigma\Phi=(c\,dt/d\sigma,q'\,dt/d\sigma,0,0)=(\gamma,\gamma\beta,0,0)=n$, using the chain rule [L13]; the four partial derivatives are linearly independent, so $\Phi$ is an immersion. The field $n=\gamma(1,\beta,0,0)$ has $\eta(n,n)=\gamma^2(-1+\beta^2)=-1$ and time component $\gamma>0$ with $|(n)_s|=\gamma|\beta|<\gamma$, so it is a future unit timelike field, $C^1$ because $q$ is $C^2$. [L2, L4, L6, L13, step 2.1]

3.2 (Clause (a).) Steps 1.1 and 1.2 give: every member $x_\xi$ is $C^2$ future timelike with squared tangent norm $-c^2/\gamma^2$; the common proper-time function is $\tau(t)=\int_0^t\gamma^{-1}$; the four-velocity is $U=\gamma(c,q',0,0)$ with $\eta(U,U)=-c^2$; all labels share the chart velocity $q'$ and chart acceleration $q''$; and the chart separation of any two labels is constant in $t$. [step 1.1, step 2.1, given]

4.1 (Clause (b): the material-family analysis applies.) By step 3.1 the map $\Phi$ is an injective $C^2$ immersion with $\partial_\sigma\Phi=n(\Phi)$, so the material metric $G$ of [L8] is defined on $B$; the material direction $e:=\partial_\xi\Phi=(0,1,0,0)$ is constant, and restricting $\Phi$ to $y=y_0$, $z=z_0$ gives the prescribed thread worldlines. The longitudinal rest vector of the family is $s_\parallel$ of step 1.2 and $\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^3$; when $q$ is smooth the smooth-congruence branch of [L9] is recovered. [L8, L9, step 3.1, step 1.2]

4.2 (Clause (e): contrast with the Born-rigid Rindler congruence.) By [L10] the Rindler congruence $n=\rho^{-1}\partial_\theta$ is Born rigid, so its rest slices $\theta=\text{const}$ are isometric with constant internal rest separations; the proper accelerations of its flow lines are $c^2\sqrt{\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})}=c^2/\rho$ by [L11] and [L10], which differ for distinct radial labels. In the translated family, by contrast, all members have equal chart velocity and acceleration profiles (step 3.2) and constant chart separation $L$, yet $\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^3$ is nonzero wherever $q'q''\ne0$ (step 1.2), so the congruence is not Born rigid there. Hence equal chart-frame accelerations and constant chart separation are distinct from Born rigidity and from constant internal rest metric. [L10, L11, step 1.2, step 3.2]

5.1 (Clause (c): the material length and its rate.) For $e=(0,1,0,0)$ and $n$ of step 3.1, $\eta(n,e)=\gamma\beta$, so by the identities of [L8] and [L9] $h(e,e)=\eta(e,e)+\eta(n,e)^2=1+\gamma^2\beta^2=\gamma^2$, and $h(e)/\gamma=\gamma(\beta,1,0,0)=s_\parallel$; also $e/\gamma\ne s_\parallel$ in general, but horizontality of $\theta$ gives $\theta(e/\gamma,e/\gamma)=\theta(s_\parallel,s_\parallel)$. Hence $G_{11}=h(e,e)=\gamma(t)^2$ and $\mathcal L(t)=\int_0^L\sqrt{G_{11}}\,d\xi=\gamma(t)L$. By the evolution formula of [L8] and the logarithm derivative of [L14], $\partial_\tau G_{11}=2c\theta(e,e)$ and $\partial_\tau\log(\mathcal L/L)=\tfrac12\partial_\tau G_{11}/G_{11}=c\theta(e,e)/\gamma^2=c\theta(s_\parallel,s_\parallel)=\gamma^3q'q''/c^2$; multiplying by $\mathcal L=\gamma L$ gives $d\mathcal L/d\tau=\gamma^4Lq'q''/c^2$. With $q'=v$, $\gamma=(1-v^2/c^2)^{-1/2}\ge1$ by [L7], so $\mathcal L=\gamma L\ge L$ with equality exactly for $v=0$; the chart separation remains $L$ by step 1.1, so the material length is constant exactly when $q'{}^2$ is constant and otherwise has the stated nonzero rate wherever $q'q''\ne0$. [L7, L8, L9, L14, step 3.1, step 1.2, step 4.1, algebra]

6.1 (Clause (d): the material reading.) Under the stipulated reading that the thread elements follow the flow lines, the internal length at common flow parameter is $\mathcal L(t)=\gamma(t)L$ by step 5.1, so the initial value is $\gamma(0)L$ and the relative factor is $\gamma(t)/\gamma(0)$; it stretches where $\gamma(t)>\gamma(0)$, shrinks where $\gamma(t)<\gamma(0)$, and is equal where the factors agree. In the special case $q'(0)=0$ one has $\gamma(0)=1$ and (by $|q'|<c$) $\gamma(t)>1$ whenever $q'(t)\ne0$ by [L7]. No elasticity or failure criterion is available in the given data, so neither breaking nor a definite tension follows; the statement asserts only the kinematic material reading. [L7, step 5.1]

7.1 (Clause (f): scope.) Every claim was derived for the prescribed $C^2$ family and the stated material reading, using only the cited definitional and kinematic suppliers: no elasticity, material failure criterion, force law, measurement or empirical input was used; the thread is an ideal material reading of the translated congruence, and no claim about real threads or rockets is made. All computations are finite-dimensional and no choice principle was used. [L1, step 3.2, step 5.1, step 6.1, step 4.2] ∎
