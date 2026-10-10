---
id: ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries
kind: example
title: "Explicit hypothesis and convention check for the moving-patch flux"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-em-complex-plane-wave, def-em-moving-patch, def-em-surface-distribution, lem-em-continuous-localization, lem-em-coulomb-dipole-remainder, lem-em-point-current-continuity, lem-em-quadratic-stress-identity, lem-em-interface-derivatives, lem-em-joint-smooth-potentials, lem-em-moving-flux, lem-em-period-average, lem-em-interface-wave-linear-system, def-type-i-type-ii-and-elementary-green-regions, def-multidimensional-rectangle-and-volume, def-riemann-integral-over-a-jordan-set, def-multidimensional-darboux-sums, def-multidimensional-darboux-integral, def-multidimensional-grid-partition, def-ck-euclidean-maps-and-diffeomorphisms, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, def-cross-product-in-r3, def-euclidean-inner-product, def-divergence-and-curl-of-a-c1-vector-field, thm-the-classical-stokes-theorem-for-a-c2-surface-patch, def-the-induced-boundary-chain-of-a-c2-surface-patch, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-positive-orientation-for-elementary-region-boundaries, def-oriented-unit-normal-and-flux-of-a-surface-patch]
dependency_roles:
  def-em-complex-plane-wave: mathematical-premise
  def-em-moving-patch: mathematical-premise
  def-em-surface-distribution: mathematical-premise
  lem-em-continuous-localization: mathematical-premise
  lem-em-coulomb-dipole-remainder: mathematical-premise
  lem-em-point-current-continuity: mathematical-premise
  lem-em-quadratic-stress-identity: mathematical-premise
  lem-em-interface-derivatives: mathematical-premise
  lem-em-joint-smooth-potentials: mathematical-premise
  lem-em-moving-flux: mathematical-premise
  lem-em-period-average: mathematical-premise
  lem-em-interface-wave-linear-system: mathematical-premise
  def-type-i-type-ii-and-elementary-green-regions: mathematical-premise
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-darboux-integral: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  thm-the-classical-stokes-theorem-for-a-c2-surface-patch: mathematical-premise
  def-the-induced-boundary-chain-of-a-c2-surface-patch: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-positive-orientation-for-elementary-region-boundaries: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
sources:
  references:
    - title: "I. Galili, D. Kaplan, Y. Lehavi, Teaching Faraday's law of electromagnetic induction in an introductory physics course, Am. J. Phys. 74, 337 (2006), Appendix"
      url: "http://materias.df.uba.ar/f3Aa2013c1/files/2012/07/FaradayLaw-AJP000337.pdf"
    - title: "M. E. Taylor, Introduction to Analysis in Several Variables, §3.2 and §4.4"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
verification:
  precheck: pass
---

## Example

Take the unit square $D=[0,1]^2$ as parameter region, an open interval $I\subseteq\mathbb R$, a function $a\in C^2(I)$ with $a>0$ everywhere, and

$$r(u,v,t):=\bigl(a(t)u,\ a(t)v,\ 0\bigr),\qquad B:=e_3,\qquad v(x,t):=\frac{a'(t)}{a(t)}\,(x_1,x_2,0).$$

Then $r$ is of class $C^2$ on the open set $\mathbb R^2\times I$, the tangent vectors are $r_u=(a,0,0)$ and $r_v=(0,a,0)$ with $r_u\times r_v=(0,0,a^2)\ne0$ on $D^\circ\times I^\circ=D^\circ\times I$, the field $B$ is constant with $\operatorname{div}B=0$, and $v$ is $C^1$ on $\mathbb R^3\times I$ with $v(r(u,v,t),t)=(a'(t)u,a'(t)v,0)=r_t(u,v,t)$; so the data satisfy the standing hypotheses of [[def-em-moving-patch]]. For every $t\in I$ the parametrized flux is $\Phi(t)=a(t)^2$, hence $\Phi'(t)=2a(t)a'(t)$; the fixed-time surface integral of $\partial_tB$ is $0$; and $\operatorname{curl}(v\times B)=-2(a'(t)/a(t))\,e_3$, so patch Stokes gives $\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r=-2a(t)a'(t)$, exactly the sign in the formula of [[lem-em-moving-flux]]. Dropping the term $-\oint(v\times B)\cdot d\mathbf r$ — that is, treating the moving patch as fixed — would leave $\Phi'=0$, which the direct derivative contradicts whenever $a'(t)\ne0$. All maps are of the stated regularity and no singular support is involved; the example verifies the sign convention and the necessity of the motion term, and asserts no physical law.

## Facts & Assumptions

**Given:** The unit square $D=[0,1]^2$; an open interval $I\subseteq\mathbb R$; a function $a\in C^2(I)$ with $a>0$; the maps $r$, $B$, $v$ displayed in the Example; and a fixed time $t\in I$.

[L1] Moving patch and transport identity: in the setting of [[def-em-moving-patch]] under the declared $\mathrm{AC}_\omega$, with $\operatorname{div}B=0$ on its domain, the flux $\Phi(\tau)=\int_D\langle B(r(p,\tau),\tau),r_u(p,\tau)\times r_v(p,\tau)\rangle\,dp$ is differentiable on $I$ and, at every $\tau\in I$ at which $r_u\times r_v$ is nonvanishing on $D^\circ$, satisfies $\Phi'(\tau)=\int_{S(\tau)}\partial_\tau B\cdot n\,dS-\oint_{\partial S(\tau)}(v\times B)\cdot d\mathbf r$, with the induced orientation and boundary chain ([[lem-em-moving-flux]]).

[L2] The unit square is an elementary Green region: with $a_0=0$, $b_0=1$, $\alpha\equiv0$, $\beta\equiv1$ on $[0,1]$, the set $D$ has both the Type I description $\{(x,y):0\le x\le1,\ 0\le y\le1\}$ and the analogous Type II description, so it is a compact elementary Green region, hence a finite elementary Green region, and it is compact and Jordan measurable; its volume is $\operatorname{vol}(D)=(1-0)(1-0)=1$ ([[def-type-i-type-ii-and-elementary-green-regions]], [[def-multidimensional-rectangle-and-volume]]).

[L3] Integrals of constants over $D$: for every constant $c$, the Riemann integral over the Jordan set $D$ is $\int_Dc\,du\,dv=c$. Indeed $D$ is its own nondegenerate bounding rectangle, so by [[def-riemann-integral-over-a-jordan-set]] $\int_Dc$ is the Darboux integral of $c$ over $D$; on every cell of every grid partition both the infimum and the supremum of $c$ equal $c$, so every lower and upper Darboux sum equals $c\sum_i\operatorname{vol}(Q_i)=c\operatorname{vol}(D)=c$ by [[def-multidimensional-darboux-sums]], [[def-multidimensional-darboux-integral]] and [[def-multidimensional-grid-partition]], whence the common value is $c$ ([[def-multidimensional-rectangle-and-volume]]).

[L4] Calculus and vector analysis rules: $a>0$ makes $a'/a$ of class $C^1$ on $I$ and $v$ of class $C^1$ jointly in $(x,t)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-algebra-of-derivatives]]); the product rule gives $(a^2)'=2aa'$, and the time derivative of the constant field $B$ satisfies $\partial_tB\equiv0$; the partial derivatives, divergence, curl, cross product and Euclidean inner product are those of [[def-divergence-and-curl-of-a-c1-vector-field]], [[def-cross-product-in-r3]] and [[def-euclidean-inner-product]] ([[thm-chain-rule-for-total-derivatives]]).

[L5] Patch Stokes: for a $C^2$ patch over a finite elementary Green region and a $C^1$ field $G$ on a neighbourhood of its image, $\oint_{\varphi(\partial D)}G\cdot d\mathbf r=\int_D\langle(\operatorname{curl}G)\circ\varphi,\varphi_u\times\varphi_v\rangle$, with the induced boundary chain, the positive boundary orientation and the line integrals as cited ([[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]], [[def-the-induced-boundary-chain-of-a-c2-surface-patch]], [[def-positive-orientation-for-elementary-region-boundaries]], [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[def-oriented-unit-normal-and-flux-of-a-surface-patch]]).

## Verification

**Proof technique:** direct; evaluate the parametrized flux and its derivative, evaluate the two terms of the transport identity by explicit vector calculus and Stokes, and compare.

1.1 Setting and regularity. The map $r(u,v,t)=(a(t)u,a(t)v,0)$ is of class $C^2$ on the open set $\mathbb R^2\times I$, since it is polynomial in $(u,v)$ with $C^2$ coefficients, with $r_u=(a,0,0)$, $r_v=(0,a,0)$ and $r_u\times r_v=(0,0,a^2)\ne0$ on $D^\circ\times I$ because $a>0$; further $v(x,t)=\frac{a'(t)}{a(t)}(x_1,x_2,0)$ is $C^1$ jointly, and $v(r(u,v,t),t)=\frac{a'}{a}(au,av,0)=(a'u,a'v,0)=r_t(u,v,t)$, while $\operatorname{div}B=0$ for the constant field $B=e_3$. Thus the geometric and analytic hypotheses of [L1] hold, and $D$ is the elementary Green region of [L2]. At each time $D$ has connected interior and $r(\cdot,t)$ is injective since $a(t)>0$, so it is a regular patch for the Stokes application [L5]. [given, L1, L2, L4, algebra]

2.1 The flux and its derivative. At each $\tau$, $\langle B(r),\ r_u\times r_v\rangle=\langle e_3,(0,0,a(\tau)^2)\rangle=a(\tau)^2$, a constant in $(u,v)$; hence by [L3] $\Phi(\tau)=\int_Da(\tau)^2\,du\,dv=a(\tau)^2$. Therefore $\Phi'(t)=2a(t)a'(t)$ for every $t\in I$ by the product rule of [L4]. [step 1.1, L3, L4, algebra]

2.2 The two terms on the right-hand side. Since $B$ is constant, $\partial_tB\equiv0$ and the surface integral $\int_{S(t)}\partial_tB\cdot n\,dS$ vanishes. For the boundary term, [L4] gives $v\times B=\frac{a'}{a}(x_1,x_2,0)\times(0,0,1)=\frac{a'}{a}(x_2,-x_1,0)$ and then $\operatorname{curl}(v\times B)=\bigl(0,0,\partial_1(-\tfrac{a'}{a}x_1)-\partial_2(\tfrac{a'}{a}x_2)\bigr)=(0,0,-2\tfrac{a'}{a})=-2\tfrac{a'}{a}e_3$ at time $t$; consequently $(\operatorname{curl}(v\times B))\circ r=-2\tfrac{a'}{a}e_3$ is constant on $D$, and patch Stokes [L5] together with the constant-integral fact [L3] gives $\oint_{\partial S(t)}(v\times B)\cdot d\mathbf r=\int_D\langle-2\tfrac{a'}{a}e_3,(0,0,a^2)\rangle\,du\,dv=-2\tfrac{a'}{a}a^2\int_Ddu\,dv=-2a(t)a'(t)$. [step 1.1, L3, L4, L5, algebra]

3.1 Comparison. The direct computations of steps 2.1 and 2.2 give $2a(t)a'(t)=0-(-2a(t)a'(t))$, so the transport formula holds here by direct computation without Choice; under the declared $\mathrm{AC}_\omega$ it also instantiates [[lem-em-moving-flux]], with the boundary term contributing $+2a(t)a'(t)$ to $\Phi'$; if that boundary term is dropped, the identity would read $\Phi'(t)=0$, contradicting step 2.1 whenever $a'(t)\ne0$. The example therefore checks the sign convention and the necessity of the motion term at the stated $C^2$/$C^1$ regularity without singular support, and it asserts no physical law. [step 2.1, step 2.2, L1, algebra] ∎

## Remarks

- When $a$ is constant, $\Phi(t)=a^2$ is constant, both terms of the identity vanish, and the contrast with the fixed-patch reading disappears; the example's discriminating case is therefore any $t$ with $a'(t)\ne0$.
- The computation uses no choice principle; it is finite algebra and one application of the published Stokes theorem for a patch over the unit square.
