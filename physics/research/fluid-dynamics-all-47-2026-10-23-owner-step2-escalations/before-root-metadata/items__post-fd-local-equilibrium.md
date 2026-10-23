---
id: post-fd-local-equilibrium
kind: postulate
title: "Local simple-fluid equilibrium and Gibbs closure"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 2
deps:
  - def-fd-simple-fluid-state
  - def-fd-quantity-and-frame-conventions
dependency_roles:
  def-fd-simple-fluid-state: formulation-prerequisite
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
justified_by: []
aliases: []
physical_scope: >-
  An adopted local-equilibrium state relation for a smooth single-component
  simple-fluid branch with positive density and temperature. No global
  equilibrium, global thermodynamic chart, universal material validity or
  empirical measurement is asserted.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Part III lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf"
      locator: "§§4.4.2–4.4.3, printed pp. 146–149"
    - title: "An Introduction to Continuum Mechanics, Second Edition, Chapter 6"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
      locator: "§§6.1.1 and 6.1.4, printed pp. 221–226"
verification:
  precheck: pending
---

## Postulate

Use a smooth single-component, nonpolar fluid branch in a Cartesian inertial frame. Let $\mathcal U\subset(0,\infty)\times\mathbb R$ be an open state domain with coordinates $v$ and $s$, where $v$ is specific volume and $s$ is specific entropy. Adopt a specific internal-energy function $e:\mathcal U\to\mathbb R$ of class $C^2$, meaning that its coordinate partial derivatives through total order two exist and are continuous. At a state $(v,s)$, define the temperature and thermodynamic pressure by
$$ T(v,s)=\frac{\partial e}{\partial s}(v,s),\qquad p(v,s)=-\frac{\partial e}{\partial v}(v,s),\qquad \rho=\frac1v, $$
where each partial derivative holds the other state coordinate fixed. Assume the local material states lie in $\mathcal U$ and $T>0$. Local equilibrium here means that the fields $e,T,p$ at each event are assigned by these state functions of the local $v,s$.

In the physical SI interpretation, $v$ is in $\mathrm{m^3\,kg^{-1}}$, $s$ in $\mathrm{J\,kg^{-1}\,K^{-1}}$, $e$ in $\mathrm{J\,kg^{-1}}$, $T$ in $\mathrm K$, $p$ in $\mathrm{Pa}$, and $\rho$ in $\mathrm{kg\,m^{-3}}$. Positivity of $e_{ss}$, global invertibility of $s\mapsto T$, convexity, and the dynamical entropy inequality are separate assumptions or postulates; none follows from this local equilibrium adoption. This closure is an additional physical model choice, not a consequence of global equilibrium thermodynamics.

## Postulate references

[David Tong, *Fluid Mechanics*, Part III lecture notes, §§4.4.2–4.4.3, printed pp. 146–149](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf)

[An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.1.1 and 6.1.4, printed pp. 221–226](https://courses.washington.edu/mengr503/Chapter_6.pdf)

## Facts & Assumptions

**Given:** A local state $(v,s)\in\mathcal U$, positive density $\rho=1/v$, and the $C^2$ state function in the Postulate.

[L1] [[def-fd-simple-fluid-state]]: on an open $\mathcal U\subset(0,\infty)\times\mathbb R$, $e\in C^2(\mathcal U)$, $T=e_s$, $p=-e_v$, and $\rho=1/v$; each partial derivative holds the other state coordinate fixed. That mathematical definition imposes no constitutive claim about an actual fluid. Its current batch-10 carrier and complete definition were inspected, and step1Decision currently reports ready; this records authoring readiness only, not independent proof acceptance.

[L2] [[def-fd-quantity-and-frame-conventions]]: the current density $\rho$, temperature $T$, specific energy $e$, specific entropy $s$, and pressure $p$ have the SI types and units stated above. Its current batch-3 carrier was inspected, and step1Decision currently reports ready.

[A1] The pointwise use of the mathematical state relation as local material response is an adopted physical premise. No global inversion or empirical validity is included.
