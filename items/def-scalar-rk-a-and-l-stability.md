---
id: def-scalar-rk-a-and-l-stability
title: "Scalar stability function, A-stability, and L-stability for Runge–Kutta methods"
kind: definition
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-implicit-runge-kutta-stage-equations
  - def-complex-numbers-and-arithmetic
  - def-complex-conjugate-real-imaginary-part-and-modulus
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Ernst Hairer and Gerhard Wanner, Introduction à l’Analyse Numérique, Chapter III: Équations Différentielles Ordinaires"
      url: "https://www.unige.ch/~hairer/poly/poly.pdf"
      locator: "§III.9, PDF pp. 79–83 / printed pp. 77–81: scalar test equation, stability regions, and Radau IIA stability."
    - title: "John C. Butcher, Implicit Runge–Kutta Methods, tutorial accompanying Numerical Methods for Ordinary Differential Equations"
      url: "https://www.math.auckland.ac.nz/~butcher/ODE-book-2008/Tutorials/IRK.pdf"
      locator: "PDF §§9 and 18–21: A-stability of Radau IIA and L-stable diagonally implicit methods."
---

## Definition

For a Runge–Kutta tableau $(A,b,c)$, apply its stage equations to the scalar test equation $y'=\lambda y$, with $z=h\lambda$. Whenever $I-zA$ is invertible, the stages satisfy $Y=(I-zA)^{-1}\mathbf 1\,y$, and the **scalar stability function** is

$$R(z)=1+z\,b^\mathsf T(I-zA)^{-1}\mathbf 1.$$

The **scalar stability region** is the set of $z\in\mathbb C$ for which the scalar update has $|R(z)|\le1$. The method is **A-stable** when its rational stability function has no pole in $\{\operatorname{Re}z\le0\}$ and $|R(z)|\le1$ throughout that closed half-plane. It is **L-stable** when it is A-stable and $R(z)\to0$ as $|z|\to\infty$ with $\operatorname{Re}z\le0$.

These are properties of the scalar linear test equation and the tableau's rational function. They do not assert nonlinear contractivity or control of nonnormal matrix growth.
