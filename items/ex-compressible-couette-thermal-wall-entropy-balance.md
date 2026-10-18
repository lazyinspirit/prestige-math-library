---
id: ex-compressible-couette-thermal-wall-entropy-balance
kind: example
title: Couette flow with the thermal wall entropy balance
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-viscous-smooth-entropy-identity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 2.2–2.3, PDF pp. 3–4. This explicit Couette field is verified locally."
---

## Example

Let $x$ be periodic, $0<y<L$, and fix $p_0>0$, $T_w>0$, $a\ne0$, $\mu>0$, and $\kappa>0$. Define

$$u(x,y)=(ay,0),\qquad T(y)=T_w+\frac{\mu a^2}{2\kappa}y(L-y),\qquad \rho(y)=\frac{p_0}{RT(y)},$$

and $m=\rho u$, $E=p_0/(\gamma-1)+\rho a^2y^2/2$. This is a smooth positive steady solution with constant pressure $p_0$, no-slip wall velocities $u(x,0)=(0,0)$ and $u(x,L)=(aL,0)$, and wall temperature $T_w$ at both walls. Per unit periodic length, the outward physical-entropy flux through the two thermal walls equals

$$\left[-\kappa\frac{T'}{T}\right]_{0}^{L} =\int_0^L\left(\frac{\mu a^2}{T}+\frac{\kappa(T')^2}{T^2}\right)dy>0.$$

This is a continuous wall-balance example; it specifies no discrete wall flux.

## Verification


**Given:** The two-dimensional ideal-gas Navier–Stokes–Fourier model, $\Omega$ periodic in $x$ and equal to $(0,L)$ in $y$, and the displayed fields.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $p=(\gamma-1)(E-|m|^2/(2\rho))$, $\tau=2\mu D^0+\zeta(\operatorname{tr}D)I$, and $F_j^{\mathrm{visc}}=(0,\tau_{j\cdot},u\cdot\tau_{j\cdot}+\kappa\partial_jT)$.

[F2] [[lem-compressible-viscous-smooth-entropy-identity]]: physical entropy $\rho s=-\eta$ satisfies $\partial_t(\rho s)+\nabla\cdot(\rho s u-\kappa\nabla T/T)=\tau:\nabla u/T+\kappa|\nabla T|^2/T^2$.

1.1 The profile has $T(y)\ge T_w>0$, so $\rho>0$. Its internal-energy density is $E-|m|^2/(2\rho)=p_0/(\gamma-1)$, hence [F1] gives $p=p_0$. The velocity gradient has only $\partial_yu_1=a$, so $\nabla\cdot u=0$, $\tau_{12}=\tau_{21}=\mu a$, and all entries of $\tau$ are constant. [F1, given, algebra]

2.1 The mass divergence is zero because the field is independent of $x$ and $u_2=0$. The momentum divergence is zero because $p$ is constant, $\tau$ is constant, and every $y$-velocity is zero. For total energy, the Euler flux has zero divergence; the only nonzero viscous energy flux is $F_{2,E}^{\mathrm{visc}}=u\cdot\tau_{2\cdot}+\kappa T'=\mu a^2y+\kappa T'$. Since $T''=-\mu a^2/\kappa$, its derivative is zero. Thus all conservative equations hold. [F1, step 1.1, algebra]

3.1 The stress production is $\tau:\nabla u=\mu a^2$. The physical entropy law [F2], no normal velocity at either wall, and periodicity in $x$ give the boundary-flux identity after integration in $y$. Directly, $(\kappa T'/T)'=\kappa T''/T-\kappa(T')^2/T^2=-\mu a^2/T-\kappa(T')^2/T^2$, so integrating its negative proves the equality. The integrand is strictly positive because $a\ne0$, $\mu>0$, and $T>0$. [F1, F2, step 1.1, step 2.1, algebra] ∎
