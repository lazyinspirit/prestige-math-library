---
id: ex-fd-compressible-constant-state
kind: example
title: "Constant Euler state preserved by consistent shared flux"
status: published
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-compressible-numerical-contract
  - rem-fd-compressible-stability-distinctions
dependency_roles:
  def-fd-compressible-numerical-contract: mathematical-premise
  rem-fd-compressible-stability-distinctions: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "H. De Sterck and P. Ullrich, Introduction to Computational PDEs, Chapter 3"
      url: "https://climate.ucdavis.edu/AM452.pdf"
      locator: "Complete 143-page course notes; §§3.4.1 and 3.4.3, PDF pp. 94–98: cell averages and the shared-flux update."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Complete Euler approximate-solver chapter; consistent Euler flux and finite-volume context."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Fix $\gamma>1$, $N\ge2$, $\Delta x>0$, and $\Delta t\ge0$ on a periodic uniform
grid. Let
$$\mathcal G_\gamma=\left\{(\rho,m,E)\in\mathbb R^3:\rho>0,\quad E-\frac{m^2}{2\rho}>0\right\}$$
and choose a constant state $U=(\rho,m,E)\in\mathcal G_\gamma$. Its ideal-gas
Euler flux is
$$F(U)=\left(m,\frac{m^2}{\rho}+(\gamma-1)\left(E-\frac{m^2}{2\rho}\right),\frac m\rho\left(E+(\gamma-1)\left(E-\frac{m^2}{2\rho}\right)\right)\right).$$
Set $U_i=U$ in every cell and use one consistent shared face flux at each
interface, meaning $\widehat F_{i+1/2}(U,U)=F(U)$. For the update
$$U_i^+=U_i-\lambda\left(\widehat F_{i+1/2}-\widehat F_{i-1/2}\right),\qquad \lambda=\frac{\Delta t}{\Delta x},$$
every cell remains exactly $U_i^+=U$. This is a one-step constant-state
fixed-point calculation; it does not assert any other stability or convergence
property.

## Example references

[[def-fd-compressible-numerical-contract]] — supplies the shared-face update and consistency convention.

[[rem-fd-compressible-stability-distinctions]] — separates this fixed-point identity from admissibility, entropy, and weak-limit claims.

[De Sterck and Ullrich, §§3.4.1 and 3.4.3](https://climate.ucdavis.edu/AM452.pdf) — full course notes treatment of finite-volume cell averages and shared face fluxes.

[Ketcheson, LeVeque, and del Razo, Euler approximate-solver chapter](https://www.clawpack.org/riemann_book/html/Euler_approximate.html) — full chapter treatment of the Euler flux and approximate finite-volume solvers.

## Facts & Assumptions

**Given:** $\gamma>1$, a periodic grid with $N\ge2$, $\Delta x>0$, $\Delta t\ge0$,
a constant admissible Euler state $U$, and consistent shared fluxes.

[F1] [[def-fd-compressible-numerical-contract]]: a two-state flux is consistent when
$\widehat F(U,U)=F(U)$ for every $U\in\mathcal G_\gamma$.

[F2] [[def-fd-compressible-numerical-contract]]: the update is
$U_i^+=U_i-\lambda(\widehat F_{i+1/2}-\widehat F_{i-1/2})$.

[F3] [[rem-fd-compressible-stability-distinctions]]: shared-face conservation,
admissibility, entropy stability, and convergence are distinct properties with
separate hypotheses; the algebraic flux cancellation alone proves none of the
latter three.

## Verification

1.1 At every face the adjacent states are $(U,U)$. By consistency in [F1], each face flux equals $F(U)$, so the right and left fluxes in a cell update are equal. [given, F1, construct]

2.1 Substitute this equality in [F2]: $U_i^+=U-\lambda(F(U)-F(U))=U$. Since the supplied state lies in $\mathcal G_\gamma$, the update preserves this constant state. This exact identity supplies no separate entropy or weak-limit conclusion, as [F3] states. [given, F2, F3, step 1.1, algebra] ∎
