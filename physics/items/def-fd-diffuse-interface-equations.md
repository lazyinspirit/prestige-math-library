---
id: def-fd-diffuse-interface-equations
kind: definition
title: Periodic Cahn–Hilliard incompressible flow system
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-periodic-torus-domain
dependency_roles:
  def-fd-periodic-torus-domain: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "J. Tinsley Oden, Lecture Notes, Fall 2016, Chapter 11: Phase-Field Models"
      url: "https://www.oden.utexas.edu/media/reports/2017/1701.pdf"
      locator: "§§11.2 and 11.4, printed pp. 209–212, equations (11.1)–(11.10) and (11.16)–(11.21)."
    - title: "Stefanos Georgiadis, Energy identity for the incompressible Cahn–Hilliard/Navier–Stokes system with non-degenerate mobility"
      url: "https://d-nb.info/1352416549/34"
      locator: "§1, p. 1, equations (1.1)–(1.5), for the periodic coupled-system convention and source formulation."
---

## Definition

Fix an integer $d\ge1$, a time interval $[0,T]$ with $T>0$, constants $\varepsilon,M,\nu>0$, and a potential $W\in C^2(\mathbb R)$ that is bounded below. Use the torus, integral, periodic-lift, and time-regularity conventions of periodic torus calculus, with all spatial derivatives taken on the lifts. For vectors $a,b\in\mathbb R^d$, write $a\cdot b=\sum_{j=1}^d a_jb_j$ and $|a|^2=a\cdot a$; set $(\Delta u)_i=\sum_{j=1}^d\partial_j^2u_i$, $(\nabla u)_{ij}=\partial_j u_i$, and $(u\cdot\nabla)f=\sum_{j=1}^du_j\partial_jf$, componentwise when $f$ is vector-valued. Write $\nabla\cdot u=\operatorname{div}u$. A classical tuple consists of periodic fields $u:[0,T]\times\mathbb T^d\to\mathbb R^d$, $\phi:[0,T]\times\mathbb T^d\to\mathbb R$, and $\pi:[0,T]\times\mathbb T^d\to\mathbb R$, with $u\in C^1([0,T];C^2_{\rm per})$, $\phi\in C^1([0,T];C^1_{\rm per})\cap C([0,T];C^2_{\rm per})$, and $\pi\in C([0,T];C^1_{\rm per})$. Define the chemical-potential field, which is not an independent unknown, by

$$\mu_c:=\varepsilon^{-1}W'(\phi)-\varepsilon\Delta\phi,$$

and require $\mu_c\in C([0,T];C^2_{\rm per})$ so that its Laplacian is pointwise defined. The dimensionless periodic incompressible phase-flow system is

$$\partial_t\phi+u\cdot\nabla\phi=M\Delta\mu_c,\qquad \partial_tu+(u\cdot\nabla)u+\nabla\pi=\nu\Delta u-\phi\nabla\mu_c,\qquad \nabla\cdot u=0.$$

Here $\phi$ is a scalar order parameter; “diffuse interface” refers only to representing interfacial structure through this field and its spatial-gradient energy. The scalar $\pi$ is the multiplier enforcing the divergence constraint. The associated total energy is

$$E(t):=\int_{\mathbb T^d}\left(\frac12|u(t,x)|^2+\frac{\varepsilon}{2}|\nabla\phi(t,x)|^2+\varepsilon^{-1}W(\phi(t,x))\right)\,dx.$$

All coefficients and fields in this definition are dimensionless mathematical quantities; no physical units, empirical calibration, sharp-interface limit, or claim that $\phi$ is a probability or positive density is asserted. A physical identification requires additional density, phase-scale, surface-energy, length/time-scale, and chemical-potential units.

## Definition references

[[def-fd-periodic-torus-domain|Torus, integral, and periodic-field conventions]]
