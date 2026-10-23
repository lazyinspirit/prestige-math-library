---
id: pthm-fd-newtonian-kinetic-decay
kind: physics-theorem
title: "Closed smooth incompressible kinetic-energy dissipation"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - lem-fd-c1-domain-jordan-integrals
  - thm-riemann-fubini-on-product-rectangles
  - thm-newton-leibniz-with-interior-derivative
  - cor-mean-value-theorem
  - thm-heine-cantor-metric
  - thm-multidimensional-integral-properties
  - def-fd-incompressible-newtonian-model
dependency_roles:
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-fd-incompressible-newtonian-model: formulation-prerequisite
justified_by: []
aliases: []
physical_scope: >-
  Conditional kinetic-energy identity for an actual smooth unforced,
  constant-density incompressible Newtonian solution on a fixed no-slip domain
  or periodic domain. It asserts no existence, uniqueness, long-time
  regularity, global solution or empirical realization.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part II lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§3.1.2, printed pp. 61–63"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§6.5.3, printed pp. 244–245"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Let $I\subset\mathbb R$ be a nonempty open time interval containing $0$. Use SI units: time is measured in seconds, spatial coordinates and lengths in metres, $\rho_0$ in $\mathrm{kg\,m^{-3}}$, $\mu$ in $\mathrm{Pa\,s}$, $u$ in $\mathrm{m\,s^{-1}}$, and $p$ in $\mathrm{Pa}$. A bounded $C^1$ domain means a bounded open set locally on one side of a continuously differentiable boundary graph. The fixed spatial region $\Omega$ is either a nonempty bounded $C^1$ domain in $\mathbb R^3$ or one rectangular period cell $[0,L_1]\times[0,L_2]\times[0,L_3]$ with side lengths $L_1,L_2,L_3>0$ metres. In the bounded-domain case, let $\mathcal O\subset I\times\mathbb R^3$ be open and contain $I\times\overline\Omega$, and suppose $u\in C^2(\mathcal O,\mathbb R^3)$ and $p\in C^1(\mathcal O,\mathbb R)$. In the periodic case, take $u$ and $p$ on $I\times\mathbb R^3$, periodic with their derivatives on opposite faces of the stated cell. In either case suppose the smooth fields satisfy on the stated spacetime domain the pointwise constant-density incompressible Newtonian model equations
$$ \rho=\rho_0>0,\qquad \operatorname{div}u=0,\qquad \sigma=-pI_3+2\mu D,\qquad \rho_0D_tu=\operatorname{div}\sigma, $$
where $\mu\ge0$ is constant, the body force is zero, $D=(\nabla u+\nabla u^T)/2$, $D_tu=\partial_tu+(u\cdot\nabla)u$, and $\operatorname{div}\sigma$ is the rowwise divergence. In the bounded-domain case impose the no-slip condition $u=0$ on $I\times\partial\Omega$; in the periodic case the model equations hold on the periodic lift to $\mathbb R^3$.

For matrices $A,B\in\mathbb R^{3\times3}$ define the Frobenius contraction $A:B:=\sum_{i,j=1}^3A_{ij}B_{ij}$ and the squared norm $|D|^2:=D:D=\sum_{i,j=1}^3D_{ij}^2$. Let $E_k(t)=\frac{\rho_0}{2}\int_\Omega |u(t,x)|^2\,dx$, using one period cell in the periodic case. For every $t_1<t_2$ in $I$,
$$ E_k(t_2)+2\mu\int_{t_1}^{t_2}\int_\Omega |D(t,x)|^2\,dx\,dt=E_k(t_1). $$
Thus $E_k$ is nonincreasing; strict decay is not claimed when $D$ vanishes. The theorem is conditional on an actual smooth solution and supplies no existence or long-time regularity result.

## Statement references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §3.1.2, printed pp. 61–63](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.5.3, printed pp. 244–245](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** The smooth pointwise model solution on the fixed spatial domain or periodic lift, its stress law, positive constant density, zero force, and the applicable boundary condition in the Statement.

[A1] [[def-fd-incompressible-newtonian-model]]: $\rho=\rho_0>0$, $\operatorname{div}u=0$, $\mu\ge0$ is constant, $\sigma=-pI_3+2\mu D$, and $D_tu=\partial_tu+(u\cdot\nabla)u$. Its current batch-11 Definition gives this exact branch.

[A2] The body force is zero. The boundary is fixed; either the velocity vanishes there or opposite periodic faces have matching fields and derivatives.

[F1] [[lem-fd-c1-domain-jordan-integrals]]: a bounded open $C^1$ region and its closure are Jordan measurable, its boundary has content zero, and continuous volume integrals over the region and closure agree. Here volume integrals of continuous fields use this Jordan/Riemann convention, and rectangular and time integrals use Riemann integrals.

[F2] [[thm-riemann-fubini-on-product-rectangles]] and [[thm-newton-leibniz-with-interior-derivative]]: continuous integrands on closed rectangles can be integrated by coordinates; for a continuous function with continuous interior derivative, its derivative integral is its endpoint difference.

[F3] [[cor-mean-value-theorem]] and [[thm-heine-cantor-metric]]: a difference quotient is bounded by the derivative supremum on the joining interval, and a continuous function on a compact metric space is uniformly continuous.

[F4] [[thm-multidimensional-integral-properties]]: Riemann integration is linear and monotone, obeys $|\int f|\le\int|f|$, and is additive over finite coordinate subdivisions. The zero-extension convention gives the same bounds on Jordan sets.

## Proof

1.1 The pointwise model equation in [A1] holds on the same fixed spatial region used in the energy integral (or on its periodic lift). Dot $\rho_0D_tu=\operatorname{div}\sigma$ with $u$. The component product rule gives $u_i\partial_{x_j}\sigma_{ij}=\partial_{x_j}(\sigma_{ij}u_i)-\sigma_{ij}\partial_{x_j}u_i$, while $D_t(|u|^2/2)=u\cdot D_tu$. Since $\rho_0$ is constant and $\operatorname{div}u=0$, this yields
$$ \partial_t\left(\frac{\rho_0|u|^2}{2}\right) +\operatorname{div}\left(\frac{\rho_0|u|^2}{2}u-\sigma^Tu\right) =-\sigma:\nabla u. $$
[A1, A2, algebra]

2.1 Fix $t$ and put $e=\rho_0|u|^2/2$ and $F=eu-\sigma^Tu$. In the periodic case, [F2] integrates each $\partial_jF_j$ first in $x_j$; opposite endpoint values agree, so $\int_\Omega\operatorname{div}F=0$. In the bounded-domain case, $F$ is $C^1$ on a neighborhood of $\overline\Omega$ and vanishes on $\partial\Omega$. Here is a direct zero-flux argument requiring no additional choice axiom. Use a finite cubic mesh of side $h$ in a fixed containing box and let $P_h$ be the union of the closed mesh cubes contained in $\Omega$. Let $B_h$ be the union of mesh cubes at distance at most $4\sqrt3h$ from $\partial\Omega$. Since this compact boundary has content zero by [F1], $\operatorname{vol}(B_h)\to0$: for any finite open box cover of the boundary, all sufficiently small $B_h$ lie in that cover, and such covers have arbitrarily small total volume. Also $\Omega\setminus P_h\subseteq B_h$. Applying [F2] on each cube of $P_h$ and cancelling common faces expresses $\int_{P_h}\operatorname{div}F$ as the sum of the exposed face integrals. Each exposed face is within $2\sqrt3h$ of the boundary. The derivative of $F$ is bounded by a constant $M$ on a compact neighborhood of that boundary, so the segment mean-value estimate [F3] and $F|_{\partial\Omega}=0$ give $|F|\le2\sqrt3Mh$ on these faces for sufficiently small $h$. Their number is at most six times the number of cubes in $B_h$. Thus [F4] bounds the absolute sum of face integrals by $12\sqrt3M\operatorname{vol}(B_h)\to0$. The omitted volume integral is bounded by $\sup_{\overline\Omega}|\operatorname{div}F|\operatorname{vol}(B_h)\to0$. Hence $\int_\Omega\operatorname{div}F=0$ also in this case. [given, A2, F1, F2, F3, F4, step 1.1, algebra]

3.1 On every compact time interval, $e$ and $e_t$ are continuous on its product with $\overline\Omega$. For fixed $t$ and small nonzero $k$, the mean-value estimate gives
$$\sup_{x\in\overline\Omega}\left|\frac{e(t+k,x)-e(t,x)}{k}-e_t(t,x)\right|\le\sup_{\substack{|s-t|\le|k|\\x\in\overline\Omega}}|e_t(s,x)-e_t(t,x)|\longrightarrow0,$$
by [F3]. Every spatial integral exists by [F1] or rectangular continuity. Multiplying the displayed uniform error by the finite volume and using [F4] proves $E_k'(t)=\int_\Omega e_t(t,x)\,dx$; the same estimate without the quotient proves continuity of this derivative. Integrating step 1.1 spatially and applying step 2.1 therefore gives $E_k'(t)=-\int_\Omega\sigma:\nabla u\,dx$. [given, F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 Using the Frobenius contraction and $|D|^2=D:D$ defined in the Statement, write $\nabla u=D+W$, where $W=(\nabla u-\nabla u^T)/2$ is skew-symmetric. A symmetric matrix is Frobenius-orthogonal to a skew-symmetric matrix, so $D:W=0$. The stress law gives $\sigma:\nabla u=(-pI_3+2\mu D):(D+W)=-p\,\operatorname{div}u+2\mu|D|^2=2\mu|D|^2$. Thus $\frac{d}{dt}E_k=-2\mu\int_\Omega|D|^2\,dx$. The spatial dissipation integral is continuous in time by the same uniform-continuity estimate as step 3.1. Applying [F2] in time from $t_1$ to $t_2$ proves the stated energy equality and nonincrease because $\mu\ge0$. [A1, F2, step 3.1, algebra] ∎

