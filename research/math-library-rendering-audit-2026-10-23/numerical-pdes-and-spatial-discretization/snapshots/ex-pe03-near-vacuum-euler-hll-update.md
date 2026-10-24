---
id: ex-pe03-near-vacuum-euler-hll-update
kind: example
title: A near-vacuum Euler state remains positive under symmetric HLL speeds
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps:
  - def-ideal-gas-euler-state-and-pressure
  - def-hll-two-wave-flux
  - def-pe03-first-order-hll-finite-volume-update
  - prop-pe03-euler-state-and-margin-domains-are-convex-and-closed
  - lem-pe03-euler-llf-split-state-positive
  - lem-pe03-hll-half-cell-riemann-averages
  - thm-pe03-ideal-gas-llf-branch-preserves-positivity
proof_strategy: direct
justified_by: []
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
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Part II, ideal-gas Euler and HLLE solver, complete chapter inspected"
    - title: "X. Zhang and C.-W. Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "§2, positivity of density and pressure, PDF pp. 5–9; full article read"
---

## Example

Take $\gamma=7/5$, density $\rho=10^{-8}$, pressure $p=10^{-12}$, and
velocities $u_L=-1/100$, $u_R=1/100$. The conserved states have
$m_{L,R}=\mp10^{-10}$ and $E_{L,R}=3\times10^{-12}$. Choose the symmetric HLL
speed $a=11/500$ at every face and Courant ratio $\nu=\Delta t/h=125/11$.
For the four-cell periodic data $(U_L,U_L,U_R,U_R)$, one HLL forward-Euler
update preserves positive density and pressure despite the very small initial
values. The calculation illustrates a first-order positivity branch; it does
not claim accuracy of the shock profile.

## Facts & Assumptions

**Given:** The ideal-gas Euler flux and HLL update, with the parameters above. Verify the states, speed branch, CFL condition, and positivity after one update.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $p=(\gamma-1)(E-m^2/(2\rho))$ and $c^2=\gamma p/\rho$.

[F2] [[lem-pe03-euler-llf-split-state-positive]]: if $a\ge|u|+c$, then $U\pm F(U)/a\in\mathcal G_\gamma$.

[F3] [[prop-pe03-euler-state-and-margin-domains-are-convex-and-closed]]: $\mathcal G_\gamma$ is convex.

[F4] [[lem-pe03-hll-half-cell-riemann-averages]]: under $2\nu a\le1$, the HLL update is the mean of adjacent half-cell fan averages.

[F5] [[thm-pe03-ideal-gas-llf-branch-preserves-positivity]]: the symmetric HLL branch with $a\ge|u|+c$ and $2\nu a\le1$ preserves $\mathcal G_\gamma$.

[F6] [[def-pe03-first-order-hll-finite-volume-update]]: $U_i^+=U_i-\nu(\widehat F_{i+1/2}-\widehat F_{i-1/2})$.

[F7] [[def-hll-two-wave-flux]]: the symmetric middle-branch HLL flux is used at every interface, with equal-state data substituted into its displayed formula.

## Verification

1.1 The kinetic energy density is $\rho u^2/2=5\times10^{-13}$ and $p/(\gamma-1)=5/2\times10^{-12}$, so $E=3\times10^{-12}$. Hence [F1] gives the specified pressure and positive internal energy, so both states lie in $\mathcal G_\gamma$. [given, F1, algebra]

2.1 Their sound speed satisfies $c^2=7/50000<(3/250)^2$, hence $|u|+c<1/100+3/250=11/500=a$. Also $\nu a=1/4$, so $2\nu a=1/2\le1$. The symmetric-speed hypotheses in [F2]–[F5] hold, with the positive admissibility verified in step 1.1. [given, F1, F2, F5, step 1.1, algebra]

3.1 At the discontinuity, substitution of $S_L=-a,S_R=a$ into [F7] and the HLL intermediate-state formula of [F4] gives $U_*=(U_L+F_L/a+U_R-F_R/a)/2$. Both split states are in $\mathcal G_\gamma$ by [F2], so $U_*\in\mathcal G_\gamma$ by [F3]. At equal-state faces, the same middle-state formula gives $U_*=U_L$ or $U_R$. Substituting the shared face fluxes in [F6], or equivalently using [F4], yields $U_i^+=(3/4)U_L+(1/4)U_*$ and $U_{i+1}^+=(3/4)U_R+(1/4)U_*$. Convexity keeps both states in $\mathcal G_\gamma$, and [F1] gives positive density and pressure, using the CFL verification in step 2.1. [given, F1, F2, F3, F4, F6, F7, step 2.1, algebra] ∎

