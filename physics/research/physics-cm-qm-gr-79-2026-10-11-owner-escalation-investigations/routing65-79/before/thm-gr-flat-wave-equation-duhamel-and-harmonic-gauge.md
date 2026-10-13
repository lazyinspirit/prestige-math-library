---
id: thm-gr-flat-wave-equation-duhamel-and-harmonic-gauge
kind: theorem
title: "All-space smooth wave equation with zero data, and harmonic gauge on flat space"
status: draft
origin: session
domain: mathematics
dependency_level: 12
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-flat-linearized-perturbation, thm-gr-flat-linearized-curvature-and-gauge, def-gr-minkowski-model-and-inertial-chart, def-laplacian-of-a-c2-function, def-euclidean-spheres-and-closed-balls, def-polar-surface-measure-on-the-unit-sphere, lem-euclidean-chart-measure-agrees-with-polar-surface-measure, cor-volume-of-a-closed-three-ball, thm-volume-recursion-for-closed-euclidean-balls, thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-polar-coordinates-formula-for-lebesgue-measure, thm-differentiation-under-the-integral-sign, thm-continuity-under-the-integral-sign, lem-derivative-of-an-integral-with-moving-endpoints, thm-clairaut-schwarz-mixed-partials, thm-ftc-first-part, thm-linear-change-of-variables-for-lebesgue-measure, def-countable-choice, def-c-r-and-smooth-maps-between-smooth-manifolds, def-interval]
dependency_roles:
  def-gr-flat-linearized-perturbation: mathematical-premise
  thm-gr-flat-linearized-curvature-and-gauge: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  def-polar-surface-measure-on-the-unit-sphere: mathematical-premise
  lem-euclidean-chart-measure-agrees-with-polar-surface-measure: mathematical-premise
  cor-volume-of-a-closed-three-ball: mathematical-premise
  thm-volume-recursion-for-closed-euclidean-balls: mathematical-premise
  thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  thm-polar-coordinates-formula-for-lebesgue-measure: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-continuity-under-the-integral-sign: mathematical-premise
  lem-derivative-of-an-integral-with-moving-endpoints: mathematical-premise
  thm-clairaut-schwarz-mixed-partials: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-linear-change-of-variables-for-lebesgue-measure: mathematical-premise
  def-countable-choice: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "G. B. Folland, Real Analysis, 2nd ed., Theorem 2.49 (polar coordinates) and Theorem 2.27 (differentiation under the integral sign)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6: the retarded Green function, the wave equation Box hbar = -16 pi G T and the harmonic gauge condition, printed pp. 145-151 (PDF pp. 152-158)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "V. Ivrii, Partial Differential Equations (University of Toronto, 2018), sections 9.1.1-9.1.3, equations (9.1.8)-(9.1.14), printed pp. 281-285: signed-time Kirchhoff/Duhamel formulas and spherical means; section 2.5.2: the Duhamel construction and endpoint differentiation"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice, $\mathrm{AC}_\omega$, as carried by
the cited polar-surface and divergence suppliers
([[def-countable-choice]], [[def-polar-surface-measure-on-the-unit-sphere]],
[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]). Let
$\sigma$ be the polar surface measure on the unit sphere $S^2\subseteq
\mathbb R^3$, with $\sigma(S^2)=4\pi$ as established in [F1]
([[def-polar-surface-measure-on-the-unit-sphere]],
[[thm-polar-coordinates-formula-for-lebesgue-measure]],
[[thm-volume-recursion-for-closed-euclidean-balls]],
[[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]],
[[cor-volume-of-a-closed-three-ball]]), let $c>0$ be a real parameter, and
let $\Delta$ be the Laplacian of $\mathbb R^3$
([[def-laplacian-of-a-c2-function]]).

**(a) Spherical means.** For $f\in C^\infty(\mathbb R^3)$, signed
$r\in\mathbb R$ and $x\in\mathbb R^3$ define

$$M_rf(x):=\frac1{4\pi}\int_{S^2}f(x+r\omega)\,d\sigma(\omega),\qquad H_f(x,s):=s\,M_{cs}f(x).$$

Then $Mf:(x,r)\mapsto M_rf(x)$ and $H_f$ are $C^\infty$ on
$\mathbb R^3\times\mathbb R$,
$M_{-r}f=M_rf$, $M_0f=f$, $\partial_x^\alpha M_rf=M_r(\partial^\alpha f)$ for every multiindex
$\alpha$, and for every $r>0$

$$r^2\,\partial_rM_rf(x)=\frac1{4\pi}\int_{B_r(x)}\Delta f(y)\,dy\quad(r>0),\qquad \partial_r^2M_rf+\frac2r\,\partial_rM_rf=\Delta M_rf\quad(r\ne0).$$

Moreover $H_f(x,0)=0$, $\partial_sH_f(x,0)=f(x)$ and
$(c^{-2}\partial_s^2-\Delta_x)H_f=0$ on $\mathbb R^3\times\mathbb R$.

**(b) Duhamel solution with zero data.** Let $I\subseteq\mathbb R$ be an
open interval, $t_0\in I$ and $F\in C^\infty(\mathbb R^3\times I)$. Then

$$u(x,t):=c^2\int_{t_0}^tH_{F(\cdot,v)}(x,t-v)\,dv\qquad((x,t)\in\mathbb R^3\times I)$$

is $C^\infty$ on $\mathbb R^3\times I$, satisfies
$u(\cdot,t_0)=0$, $\partial_tu(\cdot,t_0)=0$ and

$$(c^{-2}\partial_t^2-\Delta_x)u=F\qquad\text{on }\mathbb R^3\times I,$$

and every partial derivative of $u$ is bounded on $K\times[a,b]$ for every
compact $K\subseteq\mathbb R^3$ and every compact interval
$[a,b]\subseteq I$.

**(c) Harmonic gauge.** Let $h$ be a smooth symmetric covariant $2$-tensor
field on $\mathbb R^4$ with components $h_{ab}$ in the identity chart, let
$\bar h$ be its trace reverse and set
$F_b:=-\partial^a\bar h_{ab}\in C^\infty(\mathbb R^4)$
([[def-gr-flat-linearized-perturbation]] clauses (b)-(c)). Then there is a
smooth covector field $\xi_b$ on $\mathbb R^4$ with
$\Box\xi_b=\partial^a\bar h_{ab}$, and for
$h'_{ab}:=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$,

$$\partial^a\bar h'{}_{ab}=0,\qquad G^{(1)}_{ab}(h')=-\tfrac12\,\Box\bar h'{}_{ab},$$

where $G^{(1)}$ is the first-order Einstein coefficient of
[[def-gr-flat-linearized-perturbation]] clause (b).

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$; let $c>0$, let $\sigma$ be the polar surface measure on $S^2$, let $f\in C^\infty(\mathbb R^3)$, $F\in C^\infty(\mathbb R^3\times I)$ for an open interval $I$, and let $h$ be a smooth symmetric covariant $2$-tensor field on $\mathbb R^4$.

[F1] The surface measure of the chart boundary of a ball agrees with the polar measure: for continuous $g$ and $r>0$, $\int_{\partial B_r(x)}g\,dS=r^2\int_{S^2}g(x+r\omega)\,d\sigma(\omega)$, and $\omega\mapsto x+r\omega$ multiplies surface measure by $r^2$ ([[lem-euclidean-chart-measure-agrees-with-polar-surface-measure]], [[def-polar-surface-measure-on-the-unit-sphere]], [[def-euclidean-spheres-and-closed-balls]]). The closed unit $3$-ball is Jordan measurable with content $4\pi/3$ by [[thm-volume-recursion-for-closed-euclidean-balls]] and [[cor-volume-of-a-closed-three-ball]], so [[thm-jordan-measurable-sets-are-lebesgue-measurable-with-equal-content]] gives its Lebesgue measure $4\pi/3$. Applying the polar-coordinate formula to its indicator gives $\lambda_3(\overline B_3(0,1))=\sigma(S^2)\int_0^1r^2\,dr=\sigma(S^2)/3$, hence $\sigma(S^2)=4\pi$ ([[thm-polar-coordinates-formula-for-lebesgue-measure]]).

[F2] For $g\in C^2$ on a neighborhood of $\overline{B_r(x)}$, $\int_{\partial B_r(x)}\nabla g\cdot\nu\,dS=\int_{B_r(x)}\Delta g\,dy$; and the polar-coordinates formula gives $\int_{B_r(x)}g\,dy=\int_0^r\int_{\partial B_s(x)}g\,dS\,ds$, with $s\mapsto\int_{\partial B_s(x)}g\,dS$ continuous ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]], [[thm-polar-coordinates-formula-for-lebesgue-measure]], [[def-laplacian-of-a-c2-function]], [F1], [[thm-continuity-under-the-integral-sign]]).

[F3] Differentiation under the integral sign: if $f(x,t)$ is integrable in $x$ for each $t$ and $|\partial_tf(x,t)|\le g(x)$ with $g$ integrable for $t$ in an interval, then $\frac{d}{dt}\int f(x,t)\,dx=\int\partial_tf(x,t)\,dx$; and $\frac{d}{dt}\int_{\alpha(t)}^{\beta(t)}G(t,y)\,dy=G(t,\beta(t))\beta'(t)-G(t,\alpha(t))\alpha'(t)+\int_{\alpha(t)}^{\beta(t)}\partial_tG(t,y)\,dy$ for $C^1$ endpoints and $G$ with continuous partial derivative ([[thm-differentiation-under-the-integral-sign]], [[lem-derivative-of-an-integral-with-moving-endpoints]]). For coincident or reversed endpoints, use oriented integrals: locally choose a fixed $v_*$ and write $\int_{\alpha(t)}^{\beta(t)}G(t,v)\,dv=P(t,\beta(t))-P(t,\alpha(t))$, where $P(t,z)=\int_{v_*}^{z}G(t,v)\,dv$. Differentiation under the integral gives $\partial_tP=\int_{v_*}^{z}\partial_tG\,dv$ and the fundamental theorem gives $\partial_zP=G(t,z)$; the chain rule then gives the same endpoint formula, including $\alpha=\beta$.

[F4] The first part of the fundamental theorem of calculus: if $G$ is continuous on an interval and $H(r):=\int_{r_0}^rG(s)\,ds$, then $H'=G$; mixed partial derivatives of a $C^2$ function commute; smoothness is a local property ([[thm-ftc-first-part]], [[thm-clairaut-schwarz-mixed-partials]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[F5] The antipodal map $\omega\mapsto-\omega$ preserves the polar surface measure $\sigma$: for Borel $E\subseteq S^2$, its cone $\{r\omega:\omega\in E,\ 0<r\le1\}$ is mapped to the cone of $-E$ by $-I_3$, whose determinant has absolute value $1$; the cone-volume definition of $\sigma$ and the linear change-of-variables theorem therefore give $\sigma(-E)=\sigma(E)$ ([[def-polar-surface-measure-on-the-unit-sphere]], [[thm-linear-change-of-variables-for-lebesgue-measure]]).

[L1] The first-order Einstein coefficient is $G^{(1)}_{ab}(h)=-\tfrac12\Box\bar h_{ab}+\partial^c\partial_{(a}\bar h_{b)c}-\tfrac12\eta_{ab}\partial^c\partial^d\bar h_{cd}$, the gauge transformation satisfies $\partial^a\bar h'{}_{ab}=\partial^a\bar h_{ab}-\Box\xi_b$, and if $\partial^a\bar h'{}_{ab}=0$ then $G^{(1)}_{ab}(h')=-\tfrac12\Box\bar h'{}_{ab}$ ([[thm-gr-flat-linearized-curvature-and-gauge]] clauses (c)-(d), [[def-gr-flat-linearized-perturbation]] clauses (c)-(d)).

## Proof

**Proof technique:** direct; construct the spherical means, derive the radial identity from the divergence theorem, solve the wave equation by Duhamel's formula with zero data, then apply the flat gauge identity.

1.1 (Smooth signed-radius means and derivatives under the integral.) For fixed $x,r$ the integration is over the finite-measure space $(S^2,\sigma)$ with $\sigma(S^2)=4\pi$; for $(x,r)$ in a compact set the integrand $\omega\mapsto f(x+r\omega)$ and each of its derivatives in $(x,r)$ is continuous on the compact set $S^2\times K$ and hence bounded, so [F3] applies on every compact parameter neighborhood and shows that $Mf$ is $C^\infty$ on $\mathbb R^3\times\mathbb R$, with $\partial_x^\alpha M_rf=M_r(\partial^\alpha f)$ and all $r$-derivatives obtained by differentiating under the integral. By [F5], changing variables $\omega\mapsto-\omega$ gives $M_{-r}f=M_rf$, and [F1]'s normalization gives $M_0f=f$. Since $(x,s)\mapsto(x,cs)$ and $s\mapsto s$ are smooth, $H_f$ is smooth, $H_f(x,0)=0$ and $\partial_sH_f(x,0)=f(x)$. [F1, F3, F5, given, algebra]

2.1 (Ball-mean identity.) For $r>0$ write $A(r):=\int_{\partial B_r(x)}f\,dS$. By [F1], $A(r)=r^2\int_{S^2}f(x+r\omega)\,d\sigma=4\pi r^2M_rf(x)$, and differentiating this identity with the product rule and [F3] (the derivative of the integrand in $r$ is $\nabla f(x+r\omega)\cdot\omega$) gives $A'(r)=8\pi rM_rf(x)+r^2\int_{S^2}\nabla f(x+r\omega)\cdot\omega\,d\sigma$. By [F1] again, $\int_{S^2}\nabla f(x+r\omega)\cdot\omega\,d\sigma=r^{-2}\int_{\partial B_r(x)}\nabla f\cdot\nu\,dS$; by the divergence theorem in [F2] this equals $r^{-2}\int_{B_r(x)}\Delta f\,dy$. Hence $$r^2\partial_rM_rf(x)=\partial_r\bigl(r^2M_rf(x)\bigr)-2rM_rf(x)=\tfrac1{4\pi}A'(r)-\tfrac{2r}{4\pi r^2}A(r)=\frac1{4\pi}\int_{B_r(x)}\Delta f\,dy,$$ which is the first display of (a). [F1, F2, F3, step 1.1, algebra]

3.1 (Radial identity.) Differentiate the identity of step 2.1 in $r$: on the left, $2r\partial_rM_rf+r^2\partial_r^2M_rf$; on the right, $\frac1{4\pi}\frac{d}{dr}\int_{B_r(x)}\Delta f\,dy=\frac1{4\pi}\int_{\partial B_r(x)}\Delta f\,dS$ by [F2] and [F4]; by [F1] this equals $r^2M_r(\Delta f)(x)$. Dividing by $r^2>0$ and using $\Delta M_rf=M_r(\Delta f)$ from step 1.1 gives the second display of (a). [step 1.1, step 2.1, F1, F2, F4, algebra]

4.1 (The wave equation for the spherical mean and its data.) Set $r=cs$ and differentiate $H_f(x,s)=sM_{cs}f(x)$: $\partial_sH_f=M_{cs}f+sc\partial_rM_rf$ and $\partial_s^2H_f=2c\partial_rM_rf+sc^2\partial_r^2M_rf=c\bigl(2\partial_rM_rf+r\partial_r^2M_rf\bigr)=cr\,\Delta M_rf=cr\,\Delta_x\bigl(M_rf\bigr)$, where the third equality inserts the radial identity of step 3.1. For $r<0$, that radial identity follows from $M_{-r}=M_r$: differentiating the even extension gives $\partial_rM_r=-\partial_{(-r)}M_{-r}$ and $\partial_r^2M_r=\partial_{(-r)}^2M_{-r}$, so $\partial_r^2M_r+(2/r)\partial_rM_r=\Delta M_r$. Thus the calculation holds for every $s\ne0$, and by smoothness from step 1.1 it also holds at $s=0$. Since $\Delta_xH_f=s\Delta_xM_rf=(r/c)\Delta_xM_rf$, this gives $\partial_s^2H_f=c^2\Delta_xH_f$. Together with the boundary values of step 1.1 this proves all remaining claims of (a). [step 1.1, step 3.1, algebra]

5.1 (Duhamel solution.) Define $G(x,t,v):=H_{F(\cdot,v)}(x,t-v)$. From the defining integral, [step 1.1, step 4.1, F3, given, algebra]

6.1 (Harmonic gauge.) Apply (b) with $I=\mathbb R$, $t_0=0$ to the components $F_b=-\partial^a\bar h_{ab}$ of the smooth covector field $F$, obtaining a smooth covector field $\xi_b:=u_b$ with $(c^{-2}\partial_t^2-\Delta)\xi_b=F_b$. Since $\Box=-\partial_0^2+\partial_1^2+\partial_2^2+\partial_3^2=-c^{-2}\partial_t^2+\Delta$ in the inertial chart with $t=x^0/c$, this reads $-\Box\xi_b=-\partial^a\bar h_{ab}$, that is, $\Box\xi_b=\partial^a\bar h_{ab}$. By [L1] the gauge-transformed perturbation $h'_{ab}=h_{ab}-\partial_a\xi_b-\partial_b\xi_a$ satisfies $\partial^a\bar h'{}_{ab}=\partial^a\bar h_{ab}-\Box\xi_b=0$, and since it is in harmonic gauge, $G^{(1)}_{ab}(h')=-\tfrac12\Box\bar h'{}_{ab}$. This proves (c). [step 5.1, L1, algebra] ∎

## Remarks

- **Zero data only.** The construction produces the solution of the wave equation with zero Cauchy data at $t_0$; it is not the general solution with prescribed nonzero data and no uniqueness statement is made beyond the explicit formula. For $t\ge t_0$ the formula integrates source times $t_0\le v\le t$; for $t<t_0$ it is the backward zero-Cauchy-data construction with an oriented integral. No whole-slab retarded or zero-incoming condition is asserted.
- **No decay hypothesis.** Every value and derivative of $u$ at a point samples only a compact sphere and a finite time interval, so no spatial decay, compact support or finite-energy assumption is used; the price is that the estimates are only local in space.
- **Use.** Clause (c) supplies the existence step of the harmonic-gauge reduction of the flat linearization, which is the gauge prerequisite for the wave and weak-field applications on this track. The construction is used only in the exact flat regime: a curved or bounded-domain wave operator is not covered.
