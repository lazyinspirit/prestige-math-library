---
id: prop-fd-euler-llf-admissibility-interface
kind: proposition
title: "Ideal-gas LLF admissibility specialization"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-compressible-numerical-contract
  - thm-pe03-ideal-gas-llf-branch-preserves-positivity
dependency_roles:
  def-fd-compressible-numerical-contract: mathematical-premise
  thm-pe03-ideal-gas-llf-branch-preserves-positivity: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Xiangxiong Zhang and Chi-Wang Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "Complete 34-page article; §2, PDF pp. 5–9: positive Euler states, Lax–Friedrichs split states, and convex-combination argument."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Complete Euler approximate-solver chapter; HLLE middle-state formula and Euler positivity discussion."
verification:
  precheck: pass
---

## Statement

Fix $\gamma>1$, an integer $N\ge2$, a width $\Delta x>0$, a time step
$\Delta t\ge0$, and a periodic array of one-dimensional ideal-gas Euler states
$U_i=(\rho_i,m_i,E_i)\in\mathcal G_\gamma\subset\mathbb R^3$, indexed by
$i\in\mathbb Z/N\mathbb Z$. For each state set
$$p_i=(\gamma-1)\left(E_i-\frac{m_i^2}{2\rho_i}\right),\qquad u_i=\frac{m_i}{\rho_i},\qquad c_i=\sqrt{\frac{\gamma p_i}{\rho_i}},\qquad F_i=\left(m_i,\frac{m_i^2}{\rho_i}+p_i,u_i(E_i+p_i)\right),$$
where
$$\mathcal G_\gamma=\left\{(\rho,m,E):\rho>0,\quad E-\frac{m^2}{2\rho}>0\right\}.$$
At every face choose a supplied speed $a_{i+1/2}$ satisfying
$$a_{i+1/2}\ge\max\bigl(|u_i|+c_i,\ |u_{i+1}|+c_{i+1}\bigr),\qquad 2\lambda a_{i+1/2}\le1,\qquad \lambda=\frac{\Delta t}{\Delta x}.$$
Use the symmetric HLL speeds $S_L=-a_{i+1/2}$ and $S_R=a_{i+1/2}$, so that
$$\widehat F_{i+1/2}=\frac12(F_i+F_{i+1})-\frac{a_{i+1/2}}2(U_{i+1}-U_i),\qquad U_i^+=U_i-\lambda\left(\widehat F_{i+1/2}-\widehat F_{i-1/2}\right).$$
Then $U_i^+\in\mathcal G_\gamma$ for every cell $i$; in particular, each
updated density and pressure is strictly positive. This conclusion is for the
specified one-step symmetric branch and does not assert positivity for other
HLL speed pairs or a fully discrete entropy inequality.

## Statement references

[[def-fd-compressible-numerical-contract]] — fixes the Euler flux, state domain, periodic update convention, and supplied-speed HLL branch.

[[thm-pe03-ideal-gas-llf-branch-preserves-positivity]] — proves positivity for the symmetric HLL branch under the stated endpoint speed and CFL bounds.

[Zhang and Shu, §2](https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf) — full article treatment of positivity-preserving Euler updates and convex combinations.

[Ketcheson, LeVeque, and del Razo, Euler approximate-solver chapter](https://www.clawpack.org/riemann_book/html/Euler_approximate.html) — full chapter treatment of the HLL middle state and Euler solver context.

## Facts & Assumptions

**Given:** $\gamma>1$, periodic states $U_i\in\mathcal G_\gamma$, face speeds $a_{i+1/2}$ satisfying the displayed endpoint bound and CFL condition, and the symmetric HLL update.

[A1] The input states satisfy $\rho_i>0$ and $E_i-m_i^2/(2\rho_i)>0$, and the chosen speeds obey $a_{i+1/2}\ge\max(|u_i|+c_i,|u_{i+1}|+c_{i+1})$ and $2\lambda a_{i+1/2}\le1$.

[F1] [[def-fd-compressible-numerical-contract]]: the Euler state domain is $\mathcal G_\gamma$, the update uses $\lambda=\Delta t/\Delta x$, and the symmetric HLL middle flux uses $S_L=-a$, $S_R=a$.

[F2] [[thm-pe03-ideal-gas-llf-branch-preserves-positivity]]: for positive ideal-gas Euler cell states, symmetric speeds with $a$ at least the adjacent endpoint values $|u|+c$, and $2\nu a\le1$, one first-order HLL update preserves $\mathcal G_\gamma$.

## Proof

1.1 Since every input state belongs to $\mathcal G_\gamma$ and $\gamma>1$, each $p_i>0$ and $c_i>0$. Hence every $a_{i+1/2}>0$, so $S_L=-a_{i+1/2}<0<S_R=a_{i+1/2}$ is the HLL middle branch. The local update has $h=\Delta x$, so the supplier's ratio $\nu=\Delta t/h$ equals $\lambda$ and the local CFL condition gives $2\nu a_{i+1/2}=2\lambda a_{i+1/2}\le1$ at every face. [given, A1, F1, algebra]

2.1 The remaining hypotheses of [F2] are exactly the stated input-state and endpoint-speed bounds, and step 1.1 matches its symmetric branch and CFL convention. Applying [F2] to the periodic array yields $U_i^+\in\mathcal G_\gamma$ for each $i$. By the displayed definition of $\mathcal G_\gamma$, $\rho_i^+>0$ and $E_i^+-(m_i^+)^2/(2\rho_i^+)>0$; multiplication by $\gamma-1>0$ gives $p(U_i^+)>0$. [given, A1, F2, step 1.1] ∎
