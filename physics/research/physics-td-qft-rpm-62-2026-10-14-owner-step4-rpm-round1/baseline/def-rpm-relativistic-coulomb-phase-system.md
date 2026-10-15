---
id: def-rpm-relativistic-coulomb-phase-system
kind: definition
title: "Repulsive relativistic Coulomb Hamiltonian phase system"
status: draft
origin: session
domain: mathematics
library: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: not-applicable
deps:
  - def-euclidean-inner-product
  - def-cross-product-in-r3
  - def-first-order-ode-initial-value-problem-and-solution
dependency_roles:
  def-euclidean-inner-product: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
physical_scope: "Pure mathematical definition of a smooth relativistic phase-space ODE with repulsive inverse-radius potential. It does not identify parameters with measured quantities or assert an electromagnetic model."
sources:
  references:
    - title: "L. D. Landau and E. M. Lifshitz, The Classical Theory of Fields, 3rd revised English edition, §39 and Problem 1"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/Landau_Lifshitz_T2.pdf"
    - title: "Timothy H. Boyer, “Unfamiliar trajectories for a relativistic particle in a Kepler or Coulomb potential,” Am. J. Phys. 72 (2004), arXiv:physics/0405090v1, complete paper"
      url: "https://arxiv.org/html/physics/0405090v1"
verification: {}
---

## Definition

Let $m,c,\kappa>0$, let $x,p\in\mathbb R^3$, and set

$$D:=(\mathbb R^3\setminus\{0\})\times\mathbb R^3,\qquad r:=|x|,\qquad \mathcal E(p):=\sqrt{m^2c^4+c^2|p|^2}.$$

The **repulsive relativistic Coulomb Hamiltonian** is

$$H(x,p):=\mathcal E(p)+\frac{\kappa}{r},$$

and its **phase system** is the autonomous ODE on the open set $D$

$$\dot x=\nabla_pH=\frac{c^2p}{\mathcal E(p)},\qquad \dot p=-\nabla_xH=\frac{\kappa x}{r^3}.$$

Here the system parameter $t$ is time in seconds and dot denotes $d/dt$; $m$ is a positive mass parameter (kilograms in the SI interpretation), $c$ a positive speed parameter (metres per second), and $\kappa$ a positive energy-times-length parameter (joule-metres). Define the radial momentum $p_r:=x\cdot p/r$ and angular-momentum vector $J:=x\times p$. A trajectory is a $C^1$ solution of this ODE on an interval; maximality is in the sense of [[def-first-order-ode-initial-value-problem-and-solution]].

This is only a mathematical phase system. Its physical interpretation as a charged particle in an externally prescribed Coulomb field requires separate model assumptions.
