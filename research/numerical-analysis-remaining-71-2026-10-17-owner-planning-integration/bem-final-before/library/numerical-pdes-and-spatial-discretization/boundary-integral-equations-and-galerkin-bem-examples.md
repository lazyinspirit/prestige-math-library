---
page: boundary-integral-equations-and-galerkin-bem-examples
title: Boundary-integral equations and Galerkin BEM — Examples
status: draft
items: []
examples:
  - ex-bem-sphere-constant-density
  - ex-bem-polyhedral-reentrant-edge-singularity
  - ex-bem-sphere-jump-sign-orientation
  - ex-bem-logarithmic-capacity-and-scale-on-a-circle
  - ex-bem-inexact-assembly-error-ledger
---

## Worked examples

These examples check the kernel normalization, orientation, regularity limits, separate two-dimensional scaling convention, and the role of a certified matrix defect.

- [[ex-bem-sphere-constant-density]] evaluates the three-dimensional Newton single layer for constant density on a sphere. Its interior and exterior formulas are $R$ and $R^2/|x|$, so the trace is $R$ and the outward conormal jump is $1$.
- [[ex-bem-sphere-jump-sign-orientation]] evaluates both layers on the unit sphere. It checks the interior-minus-exterior conventions $\partial_n^-S-\partial_n^+S=1$ and $\gamma^-D-\gamma^+D=-1$, including the common double-layer conormal.
- [[ex-bem-polyhedral-reentrant-edge-singularity]] uses $u=r^{\pi/\omega}\sin(\pi\theta/\omega)$ in a reentrant wedge. The exponent lies between $1/2$ and $1$, giving finite $H^1$ energy but a non-square-integrable second derivative near the edge.
- [[ex-bem-logarithmic-capacity-and-scale-on-a-circle]] checks the separate two-dimensional logarithmic convention: scaling adds a constant-mode term proportional to total charge and scales capacity by the length factor.
- [[ex-bem-inexact-assembly-error-ledger]] solves a rational $2\times2$ system and compares its exact and perturbed solutions. It illustrates how an already certified matrix defect enters the transfer bound; it does not claim the example matrix came from a surface mesh.
