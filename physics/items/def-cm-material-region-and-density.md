---
id: def-cm-material-region-and-density
kind: definition
title: "Material regions, densities and their mass"
status: published
origin: pipeline
domain: mathematics
dependency_level: 0
deps:
  - def-integrable-real-and-complex-functions-and-their-integrals
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-euclidean-inner-product
  - def-countable-choice
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-borel-sets-are-lebesgue-measurable
  - def-sigma-algebra
  - def-measure
  - def-measurable-space
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
dependency_roles:
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
  def-sigma-algebra: mathematical-premise
  def-measure: mathematical-premise
  def-measurable-space: mathematical-premise
  def-measurable-function-between-measurable-spaces: mathematical-premise
  def-borel-sigma-algebra: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the
        Mechanics of Solids (MIT, 1988, revised 2020), Section 1.8 (extensive
        properties and their densities) and Section 4.2 (conservation of mass),
        printed pages 12-14 and 104"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, 2015), Section 5
        (the motion of deformable bodies)"
      url: "https://www.damtp.cam.ac.uk/user/tong/dynamics/clas.pdf"
verification:
  precheck: pass
---

## Definition

A **material region** is a nonempty, bounded, open subset $B\subseteq\mathbb R^3$. This region predicate is choice-free and does not assume a density or measure.

For the following **Lebesgue density and mass construction**, assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]): [[thm-lebesgue-measure-is-a-complete-measure]] supplies the measure $\lambda_3$ on its Lebesgue sigma-algebra ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-measure]]). Since $B$ is open, it is Lebesgue measurable by the Borel-measurability theorem ([[thm-borel-sets-are-lebesgue-measurable]]). Put $\mathcal L_B:=\{E\cap B:E\in\mathcal L(\mathbb R^3)\}$ and $\lambda_B(C):=\lambda_3(C)$ for $C\in\mathcal L_B$. The trace family $\mathcal L_B$ is a sigma-algebra on $B$ ([[def-sigma-algebra]]); countable additivity of $\lambda_B$ follows by applying that of $\lambda_3$ to disjoint trace-measurable sets, so $(B,\mathcal L_B,\lambda_B)$ is a measure space ([[def-measure]]). In the displays below, $\int_B\rho\,d\lambda_3$ means the Lebesgue integral of $\rho$ on this measure space ([[def-integrable-real-and-complex-functions-and-their-integrals]]). A **density** on $B$ is a measurable function

$$\rho:B\longrightarrow[0,\infty)$$

measurable as a map from $(B,\mathcal L_B)$ to $(\mathbb R,\mathcal B(\mathbb R))$ ([[def-measurable-space]], [[def-measurable-function-between-measurable-spaces]], [[def-borel-sigma-algebra]]) and integrable on $(B,\mathcal L_B,\lambda_B)$; the **mass** of the pair $(B,\rho)$ is

$$\operatorname{mass}(B,\rho):=\int_B\rho\,d\lambda_3\ \in[0,\infty).$$

For this scalar function, **bounded** means that some $M<\infty$ satisfies $0\le\rho(X)\le M$ for every $X\in B$. **Continuous** means that for every $X\in B$ and every $\varepsilon>0$ there is $\delta>0$ such that $Y\in B$ and $\|X-Y\|_2<\delta$ imply $|\rho(X)-\rho(Y)|<\varepsilon$. For $k\ge1$, **of class $C^k$ on $B$** means that every iterated coordinate partial derivative of order at most $k$ exists on $B$ and is continuous there; no extension to $\partial B$ is required unless a consuming statement says so. A **measured material region** is a triple $(B,\rho,m)$ with $m=\operatorname{mass}(B,\rho)$ recorded.

## Remarks

- Only measurability and integrability on the restricted Lebesgue measure space $(B,\mathcal L_B,\lambda_B)$, together with the displayed nonnegative codomain, are part of the density definition. A density is not required to be positive, bounded, continuous, or supported away from $\partial B$, and the definition asserts no conservation law: the mass is a number attached to $(B,\rho)$.

- Boundary regularity is a **declared hypothesis**, not part of the word "region": when a statement needs it, it says that the boundary $\partial B$ is a $C^1$ embedded surface (or a smooth/rectifiable hypersurface) and states the surface-measure conventions used. The local transport and balance items of this collection state their own boundary hypotheses; none is inherited from this definition.

- The unit of $\rho$ is mass per unit volume only after a unit system is fixed. The mathematical object here is a function and a number; no physical identification of the number $m$ with a measured mass is made, and no empirical claim is attached.

- The statement "$\rho$ is mass per volume" is the interpretation convention $m=\int_B\rho\,d\lambda_3$ recorded above; it is a definition of the interpretation, not a physical law. In particular, if $\rho$ is a summable function with a discontinuity across a surface, the integral above is still the Lebesgue integral and no interfacial mass is implied unless it is separately declared.
