---
id: ex-ideal-gas-contact-discontinuity
kind: example
title: "A contact discontinuity with equal velocity and pressure"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-ideal-gas-euler-state-and-pressure
  - thm-one-dimensional-ideal-gas-euler-eigenstructure
  - def-rankine-hugoniot-and-lax-shocks
generation:
  role: example
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Ch. 9 §9.1, printed pp. 89–91: contact discontinuities in Euler flow"
---

## Example

Fix $\gamma>1$, pressure $p_0>0$, velocity $u_0\in\mathbb R$, and distinct
positive densities $\rho_L,\rho_R$. Set
$E_K=p_0/(\gamma-1)+\rho_Ku_0^2/2$ and
$U_K=(\rho_K,\rho_Ku_0,E_K)$ for $K=L,R$.

## Facts & Assumptions

**Given:** Two admissible ideal-gas states with common pressure and velocity but different densities.

[F1] [[def-ideal-gas-euler-state-and-pressure]]: $F(U)=(\rho u,\rho u^2+p,u(E+p))$ and $E=p/(\gamma-1)+\rho u^2/2$.

[F2] [[thm-one-dimensional-ideal-gas-euler-eigenstructure]]: the middle eigenvalue is $\lambda_0=u$ and its field is linearly degenerate.

[F3] [[def-rankine-hugoniot-and-lax-shocks]]: a linearly-degenerate contact has equal family speeds on its two sides and is not a strict Lax shock.

## Verification

1.1 Both states are admissible because $\rho_K>0$ and their internal energy is $p_0/(\gamma-1)>0$. For either state, $F(U_K)-u_0U_K=(0,p_0,u_0p_0)$; subtracting the two identities gives $F(U_R)-F(U_L)=u_0(U_R-U_L)$, the Rankine–Hugoniot equality at speed $u_0$. [given, F1, algebra]

2.1 By [F2] the speed $u_0$ is the middle characteristic speed on both sides, so the Rankine–Hugoniot jump from step 1.1 is a linearly-degenerate contact. Density, energy, and momentum may jump while pressure and velocity remain continuous; [F3] says this contact is not a strict Lax shock because its two middle characteristic speeds are equal. [step 1.1, F2, F3, algebra] ∎
