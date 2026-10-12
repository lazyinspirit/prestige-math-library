---
id: def-cm-material-region-and-density
kind: definition
title: "Material regions, densities and their mass"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-integral-over-a-measurable-set, def-integrable-real-and-complex-functions-and-their-integrals, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-euclidean-inner-product]
dependency_roles:
  def-integral-over-a-measurable-set: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Section 1.8 (extensive properties and their densities) and Section 4.2 (conservation of mass), printed pages 12-14 and 104"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 5 (the motion of deformable bodies)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

Let $\lambda_3$ be Lebesgue measure on $\mathbb R^3$ ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]) and let integrals be Lebesgue integrals ([[def-integral-over-a-measurable-set]], [[def-integrable-real-and-complex-functions-and-their-integrals]]).

A **material region** is a nonempty, bounded, open subset $B\subseteq\mathbb R^3$. A **density** on $B$ is a function

$$\rho:B\longrightarrow[0,\infty)$$

that is integrable on $B$ with respect to $\lambda_3$; the **mass** of the pair $(B,\rho)$ is

$$\operatorname{mass}(B,\rho):=\int_B\rho\,d\lambda_3\ \in[0,\infty).$$

The density is **bounded**, **continuous**, or **of class $C^k$** when $\rho$ has that property on $B$ (for $C^k$ with $k\ge1$ the derivatives are taken in the interior and required to extend continuously to $B$ only where stated). A **measured material region** is a triple $(B,\rho,m)$ with $m=\operatorname{mass}(B,\rho)$ recorded.

## Remarks

- Only integrability of $\rho$ is part of the definition of a density; measurability and nonnegativity are those of the cited integral and of the codomain $[0,\infty)$. A density is not required to be positive, bounded, continuous, or supported away from $\partial B$, and the definition asserts no conservation law: the mass is a number attached to the pair $(B,\rho)$, computed with respect to Lebesgue measure.

- Boundary regularity is a **declared hypothesis**, not part of the word "region": when a statement needs it, it says that the boundary $\partial B$ is a $C^1$ embedded surface (or a smooth/rectifiable hypersurface) and states the surface-measure conventions used. The local transport and balance items of this collection state their own boundary hypotheses; none is inherited from this definition.

- The unit of $\rho$ is mass per unit volume only after a unit system is fixed. The mathematical object here is a function and a number; no physical identification of the number $m$ with a measured mass is made, and no empirical claim is attached.

- The statement "$\rho$ is mass per volume" is the interpretation convention $m=\int_B\rho\,d\lambda_3$ recorded above; it is a definition of the interpretation, not a physical law. In particular, if $\rho$ is a summable function with a discontinuity across a surface, the integral above is still the Lebesgue integral and no interfacial mass is implied unless it is separately declared.
