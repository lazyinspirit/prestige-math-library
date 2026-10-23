---
id: pthm-fd-conditional-positive-euler-update
kind: physics-theorem
title: "Positive first-order compressible model update"
status: draft
origin: pipeline
pipeline_run: fluid-dynamics-all-47-2026-10-23
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-ideal-gas-numerical-model
  - def-fd-compressible-numerical-contract
  - prop-fd-euler-llf-admissibility-interface
dependency_roles:
  post-fd-ideal-gas-numerical-model: physical-assumption
  def-fd-compressible-numerical-contract: mathematical-premise
  prop-fd-euler-llf-admissibility-interface: mathematical-premise
physical_scope: "One one-dimensional periodic first-order symmetric HLL/LLF step for calorically perfect ideal-gas Euler states. Under the face-speed and CFL hypotheses, every updated density and thermodynamic pressure is positive. No fully discrete entropy inequality, convergence result, exact wave-speed enclosure, or empirical claim follows."
empirical_premises: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Xiangxiong Zhang and Chi-Wang Shu, On Positivity-Preserving High Order Discontinuous Galerkin Schemes for Compressible Euler Equations on Rectangular Meshes"
      url: "https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf"
      locator: "Complete 34-page article; §2, PDF pp. 5–9: ideal-gas admissible states, Lax–Friedrichs split states, and positivity-preserving conditions."
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions, Euler approximate-solver chapter"
      url: "https://www.clawpack.org/riemann_book/html/Euler_approximate.html"
      locator: "Complete online chapter; HLLE solver and Euler positivity sections, approximately lines 229–324."
verification:
  precheck: pass
---

## Statement

Use the adopted one-dimensional calorically perfect ideal-gas Euler model with dimensionless constant $\gamma>1$ and thermodynamic closure $p_i=(\gamma-1)\rho_i e_i$. Its admissible state set is
$$\mathcal G_\gamma=\left\{(\rho,m,E)\in\mathbb R^3:\rho>0,\quad E-\frac{m^2}{2\rho}>0\right\}.$$
On a periodic uniform mesh of $N\ge2$ cells, each of width $\Delta x>0$ metres, let the cell state be $U_i=(\rho_i,m_i,E_i)\in\mathcal G_\gamma$ for $i\in\mathbb Z/N\mathbb Z$, where $\rho_i$ is mass density in kilograms per cubic metre, $m_i=\rho_i u_i$ is momentum density in kilograms per square metre second, and $E_i=\rho_i(e_i+u_i^2/2)$ is total energy density in joules per cubic metre. Here $u_i$ is velocity in metres per second and $e_i>0$ is specific internal energy in joules per kilogram. Define
$$p_i=(\gamma-1)\left(E_i-\frac{m_i^2}{2\rho_i}\right),\qquad c_i=\sqrt{\frac{\gamma p_i}{\rho_i}}.$$
Thus $p_i$ is thermodynamic pressure in pascals, and $c_i$ is the positive isentropic sound speed, defined by $c_i^2=\left.\partial_\rho p\right|_{s,i}=\gamma p_i/\rho_i$ with the derivative taken at fixed specific entropy. The flux is $F_i=(m_i,m_i^2/\rho_i+p_i,u_i(E_i+p_i))$, whose components have units of kilograms per square metre second, pascals, and watts per square metre. For a time step $\Delta t\ge0$ seconds, put $\lambda=\Delta t/\Delta x$ in seconds per metre. At every periodic face choose a supplied speed $a_{i+1/2}>0$ in metres per second satisfying
$$a_{i+1/2}\ge\max\left(|u_i|+c_i,\ |u_{i+1}|+c_{i+1}\right),\qquad 2\lambda a_{i+1/2}\le1.$$
Use the symmetric HLL, or local Lax–Friedrichs, face flux and the shared-face update
$$\widehat F_{i+1/2}=\frac12(F_i+F_{i+1})-\frac{a_{i+1/2}}2(U_{i+1}-U_i),\qquad U_i^+=U_i-\lambda\left(\widehat F_{i+1/2}-\widehat F_{i-1/2}\right).$$
Then $U_i^+\in\mathcal G_\gamma$ for every cell $i$, so each updated density and thermodynamic pressure is strictly positive. The speed bounds are algorithmic hypotheses on supplied numerical speeds; this result does not establish that they enclose the waves of an exact nonlinear Riemann solution. It is a conditional deduction about computed states in the adopted model and asserts no fully discrete entropy inequality, convergence, or agreement with physical measurements.

## Statement references

[[post-fd-ideal-gas-numerical-model]] — adopts the calorically perfect ideal-gas Euler branch and identifies the numerical state pressure with thermodynamic pressure.

[[def-fd-compressible-numerical-contract]] — defines $\mathcal G_\gamma$, the Euler flux, shared-face update, supplied HLL speeds, and $\lambda$.

[[prop-fd-euler-llf-admissibility-interface]] — proves the exact one-step symmetric-branch positivity implication used here.

[Zhang and Shu, §2](https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf) — full article treatment of positive Euler states and Lax–Friedrichs positivity conditions.

[Ketcheson, LeVeque, and del Razo, Euler approximate-solver chapter](https://www.clawpack.org/riemann_book/html/Euler_approximate.html) — full chapter treatment of the HLL intermediate-state model and supplied-speed convention.

## Facts & Assumptions

**Given:** The adopted calorically perfect ideal-gas Euler model, $\gamma>1$, a periodic uniform mesh with $N\ge2$, states $U_i\in\mathcal G_\gamma$, and the stated face speeds, CFL bounds, symmetric HLL flux, and one-step update.

[A1] [[post-fd-ideal-gas-numerical-model]]: $m=\rho u$, $E=\rho(e+u^2/2)$, and the thermodynamic pressure is $p=(\gamma-1)\rho e$ for $\rho>0$, $e>0$, and $\gamma>1$.

[F1] [[def-fd-compressible-numerical-contract]]: $\mathcal G_\gamma$ is given by $\rho>0$ and $E-m^2/(2\rho)>0$; $p=(\gamma-1)(E-m^2/(2\rho))$, $u=m/\rho$, $c=\sqrt{\gamma p/\rho}$, and the periodic shared-face update uses $\lambda=\Delta t/\Delta x$. Its supplied speeds do not by themselves certify exact nonlinear wave enclosure.

[F2] [[prop-fd-euler-llf-admissibility-interface]]: for positive ideal-gas Euler cell states, the symmetric speeds $S_L=-a_{i+1/2}$ and $S_R=a_{i+1/2}$, $a_{i+1/2}\ge\max(|u_i|+c_i,|u_{i+1}|+c_{i+1})$, and $2\lambda a_{i+1/2}\le1$ at every face, one periodic first-order update gives $U_i^+\in\mathcal G_\gamma$ and hence positive density and pressure. It asserts no fully discrete entropy inequality.

## Proof

1.1 By [A1], $E_i-m_i^2/(2\rho_i)=\rho_i e_i$. Substituting this identity into [F1] shows that the mathematical pressure $p_i=(\gamma-1)(E_i-m_i^2/(2\rho_i))$ is exactly the thermodynamic pressure $(\gamma-1)\rho_i e_i$ in the adopted model. Since $\rho_i>0$, $e_i>0$, and $\gamma>1$, this pressure and $c_i=\sqrt{\gamma p_i/\rho_i}$ are positive. [given, A1, F1, algebra]

2.1 The stated states, periodic indexing, symmetric HLL flux, facewise speed bounds, and CFL inequalities are exactly the hypotheses of [F2]. Applying [F2] gives $U_i^+\in\mathcal G_\gamma$ for every cell. The definition of $\mathcal G_\gamma$ and $\gamma>1$ then give $\rho_i^+>0$ and $p_i^+=(\gamma-1)(E_i^+-(m_i^+)^2/(2\rho_i^+))>0$. This is a model deduction about one numerical step, not an empirical observation or a discrete entropy result. [given, F1, F2, step 1.1] ∎
