---
id: def-ideal-gas-euler-state-and-pressure
kind: definition
title: "Admissible states and pressure for one-dimensional ideal-gas Euler"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-hyperbolic-system-and-characteristic-families]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Randall J. LeVeque, Numerical Methods for Conservation Laws"
      url: "https://tevza.org/home/course/modelling-II_2016/books/Leveque%20-%20Numerical%20Methods%20for%20Conservation%20Laws.pdf"
      locator: "Chs. 5 and 9, printed pp. 48–53 and 89–93: polytropic Euler variables and Riemann problem"
---

## Definition

Fix $\gamma>1$. In one space dimension the conserved state is
$U=(\rho,m,E)\in\mathbb R^3$, where $\rho$ is density, $m$ momentum, and
$E$ total energy per unit volume. The **admissible-state set** is the open set
$$\mathcal G_\gamma=\{(\rho,m,E):\rho>0,\ E>m^2/(2\rho)\}.$$
The ideal-gas pressure on this set is
$$p(U)=(\gamma-1)\left(E-\frac{m^2}{2\rho}\right)>0,$$
the velocity is $u=m/\rho$, and the flux is
$$F(U)=\left(m,\frac{m^2}{\rho}+p,\frac{m}{\rho}(E+p)\right).$$
The sound speed is $c=\sqrt{\gamma p/\rho}$. These definitions apply only
on $\mathcal G_\gamma$; a state with nonpositive density or nonpositive
internal energy is inadmissible. The set is open because $\rho$ and
$E-m^2/(2\rho)$ are continuous on $\rho>0$ and the inequalities are strict;
all displayed flux functions are smooth on this domain.
