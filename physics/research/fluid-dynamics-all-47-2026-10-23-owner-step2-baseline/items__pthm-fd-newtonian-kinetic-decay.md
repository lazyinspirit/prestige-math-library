---
id: pthm-fd-newtonian-kinetic-decay
kind: physics-theorem
title: "Closed smooth incompressible kinetic-energy dissipation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-incompressible-newtonian-model
  - lem-fd-local-balance-equivalence
dependency_roles:
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  lem-fd-local-balance-equivalence: mathematical-premise
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
---

## Statement

Let $I\subset\mathbb R$ be a nonempty open time interval containing $0$. Suppose a smooth solution of the constant-density incompressible Newtonian model has $\rho=\rho_0>0$, $\operatorname{div}u=0$, constant $\mu\ge0$, zero body force, and stress $\sigma=-pI_3+2\mu D$. Assume the complete $\mathrm{AC}_\omega$, smooth-motion, positive-density, contact/stress-regularity, continuity, and separate linear/angular-momentum and total-energy balance hypotheses of the mathematical local-balance equivalence result, as specified in Facts & Assumptions. The spatial region is either a nonempty bounded $C^1$ domain fixed in time with no-slip condition $u=0$ on its boundary, or a periodic domain with the fields and their derivatives periodic on opposite faces of a rectangular period cell with positive side lengths. For the periodic case, interpret the local balance assumptions on the periodic lift to $\mathbb R^3$.

For $D=(\nabla u+\nabla u^T)/2$, let $E_k(t)=\frac{\rho_0}{2}\int_\Omega |u(t,x)|^2\,dx$, using one period cell in the periodic case. For every $t_1<t_2$ in $I$,
$$ E_k(t_2)+2\mu\int_{t_1}^{t_2}\int_\Omega |D(t,x)|^2\,dx\,dt=E_k(t_1). $$
Thus $E_k$ is nonincreasing; strict decay is not claimed when $D$ vanishes. The theorem is conditional on an actual smooth solution and supplies no existence or long-time regularity result.

## Statement references

[David Tong, *Fluid Mechanics*, Part II lecture notes, §3.1.2, printed pp. 61–63](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §6.5.3, printed pp. 244–245](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** A smooth solution of the adopted incompressible Newtonian branch, its stress law, positive constant density, zero force, and one of the two boundary conditions in the Statement.

[A1] [[def-fd-incompressible-newtonian-model]]: $\rho=\rho_0>0$, $\operatorname{div}u=0$, $\mu\ge0$ is constant, $\sigma=-pI_3+2\mu D$, and $D_tu=\partial_tu+(u\cdot\nabla)u$. Its current batch-11 Definition gives this exact branch.

[L1] [[lem-fd-local-balance-equivalence]]: assume $\mathrm{AC}_\omega$; a nonempty bounded open reference region $B\subset\mathbb R^3$ with $C^1$ boundary; an open neighborhood $U\supset\overline B$; a $C^2$ motion on an interval containing $0$ whose slices are orientation-preserving bijections with $C^2$ inverses; $C^1$ positive density and fields on swept neighborhoods; the pointwise continuity equation; the Cauchy contact conclusion $t_c=\sigma\nu$ with separately assumed $C^1$ stress; and separate linear-momentum, angular-momentum and total-energy integral balances on every material $C^1$ subdomain. With $A:B=\sum_{i,j}A_{ij}B_{ij}$ and rowwise stress divergence, it concludes $\sigma=\sigma^T$ and $\rho D_tu=\rho b+\operatorname{div}\sigma$, as well as the kinetic and internal-energy identities. The current batch-8 proof was inspected and step1Decision currently reports ready; its Cauchy-contact and transport prerequisites also have current ready records. This records authoring readiness only, not independent review approval.

[A2] The body force is zero. The boundary is fixed; either the velocity vanishes there or opposite periodic faces have matching fields and derivatives.

## Proof

1.1 Apply [L1] with $b=0$. It gives the local momentum equation $\rho_0D_tu=\operatorname{div}\sigma$ and symmetric stress. Dot the equation with $u$. The component product rule gives $u_i\partial_{x_j}\sigma_{ij}=\partial_{x_j}(\sigma_{ij}u_i)-\sigma_{ij}\partial_{x_j}u_i$, while $D_t(|u|^2/2)=u\cdot D_tu$. Since $\rho_0$ is constant and $\operatorname{div}u=0$, this yields
$$ \partial_t\left(\frac{\rho_0|u|^2}{2}\right) +\operatorname{div}\left(\frac{\rho_0|u|^2}{2}u-\sigma^Tu\right) =-\sigma:\nabla u. $$
[A1, A2, L1, algebra]

2.1 Integrate over the fixed domain or one periodic cell. On a no-slip boundary both flux terms vanish because $u=0$. On a periodic cell the fluxes on opposite faces cancel because their outward normals are opposite and the fields are periodic. Therefore $\frac{d}{dt}E_k(t)=-\int_\Omega\sigma:\nabla u\,dx$. [A2, step 1.1, algebra]

3.1 Write $\nabla u=D+W$, where $W=(\nabla u-\nabla u^T)/2$ is skew-symmetric. A symmetric matrix is Frobenius-orthogonal to a skew-symmetric matrix, so $D:W=0$. The stress law gives $\sigma:\nabla u=(-pI_3+2\mu D):(D+W)=-p\,\operatorname{div}u+2\mu|D|^2=2\mu|D|^2$. Thus $\frac{d}{dt}E_k=-2\mu\int_\Omega|D|^2\,dx$. Integrating this identity from $t_1$ to $t_2$ proves the stated energy equality and nonincrease because $\mu\ge0$. [A1, step 2.1, algebra] ∎

