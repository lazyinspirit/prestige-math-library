---
id: def-cm-fluid-constitutive-models
kind: definition
title: "Incompressible Newtonian and barotropic inviscid fluid constitutive models"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-cm-euclidean-spatial-calculus, def-matrix-space, def-matrix-product-and-identity-matrix, def-trace-of-a-square-matrix, def-ck-euclidean-maps-and-diffeomorphisms, def-the-integral-function, thm-ftc-first-part, def-vector-valued-derivative-and-integral, def-derivative]
dependency_roles:
  def-cm-euclidean-spatial-calculus: mathematical-premise
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-trace-of-a-square-matrix: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-the-integral-function: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-derivative: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "R. Abeyaratne, Continuum Mechanics, Volume II of Lecture Notes on the Mechanics of Solids (MIT, 1988, revised 2020), Sections 12.1–12.3 (compressible inviscid fluids; incompressible viscous fluids with the Newtonian example; incompressible inviscid fluids)"
      url: "https://web.mit.edu/abeyaratne/Volumes/RCA_Vol_II.pdf"
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (September 1, 2026 complete volume), Sections 8.4–8.5 (ideal and viscous fluid models)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"

  precheck: pass
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open interval, let $O\subseteq\mathbb R^3$ be open, and let $u:I\times O\to\mathbb R^3$ be a $C^1$ spatial velocity field with the conventions of [[def-cm-euclidean-spatial-calculus]]. Write $Du(t,x)$ for the total derivative in the spatial variable and $\operatorname{div}u=\operatorname{tr}(Du)$ ([[def-trace-of-a-square-matrix]]).

**(a) Incompressible Newtonian fluid.** Model data are a $C^1$ scalar field $p:I\times O\to\mathbb R$ (**pressure**) and a real number $\eta>0$ (**dynamic viscosity**; a dimensionless mathematical parameter until a unit system is fixed). The model consists of the **incompressibility constraint**

$$\operatorname{div}u(t,x)=0\qquad\bigl((t,x)\in I\times O\bigr)$$

and the **Newtonian stress field**

$$\sigma(t,x):=-p(t,x)I_3+\eta\bigl(Du(t,x)+Du(t,x)^{\mathsf T}\bigr)\in M_3(\mathbb R),$$

with $Du^{\mathsf T}$ the transpose and $I_3$ the identity ([[def-matrix-product-and-identity-matrix]], [[def-matrix-space]]). The second term is symmetric, so $\sigma$ is symmetric for every $(t,x)$.

**(b) Barotropic inviscid fluid.** Model data are a $C^1$ function $p:(0,\infty)\to\mathbb R$ (**pressure law**) and a $C^1$ **potential** $V:I\times O\to\mathbb R$. The **enthalpy** of the pressure law is the $C^1$ function

$$h(\rho):=\int_1^\rho\frac{p'(s)}{s}\,ds\qquad(\rho>0),$$

which is characterised by $h(1)=0$ and $h'(\rho)=p'(\rho)/\rho$ for every $\rho>0$ ([[def-the-integral-function]], [[thm-ftc-first-part]]). For a $C^1$ positive density field $\rho:I\times O\to(0,\infty)$ the branch's stress field is

$$\sigma(t,x):=-p\bigl(\rho(t,x)\bigr)I_3 ,$$

and the branch is **inviscid** (no velocity-gradient term) and **barotropic** (the stress depends on position and time only through the density).

## Remarks

- Both branches are **adopted constitutive models**. The presence or absence of a viscosity term, the value of $\eta$ ([[def-derivative]] conventions do not enter), the pressure law and the incompressibility constraint are model structure, not consequences of the momentum balance or of the transport theorem. In particular, incompressibility is an additional scalar equation imposed by the model, and no material is asserted to obey it.

- The sign convention is that of [[def-cm-traction-and-stress]]: the traction across a surface with unit normal $n$ is $\sigma n$, so the isotropic term $-pI_3$ produces the compressive traction $-pn$; positive $p$ is a pressure in this convention. A viscous stress proportional to $Du+Du^{\mathsf T}$ is the classical Newtonian form, asserted here for the stated $C^1$ field class only.

- In (b) the pressure law is defined on the positive reals only; any statement using this branch must supply a positive density field, and no continuation of $p$ to $\rho\le0$ or through a vacuum is part of this definition. The enthalpy is an integral of a continuous integrand on the compact interval $[1,\rho]$ ([[def-vector-valued-derivative-and-integral]]); no path or choice issue arises.

- Units are interpretive: after a unit system is fixed the values of $p$ and the parameter $\eta$ acquire units, and $h$ acquires energy-per-mass units. The mathematical items of this collection use the fields themselves and attach no unit names; a physical reading belongs to a consuming model.
