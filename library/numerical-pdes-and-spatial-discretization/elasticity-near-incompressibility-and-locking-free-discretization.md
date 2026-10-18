---
page: elasticity-near-incompressibility-and-locking-free-discretization
title: "Linear elasticity, nearly incompressible limits and locking"
status: published
items:
  - alg-linear-elasticity-rigid-body-nullspace-gauge
  - lem-linear-elasticity-rigid-body-gauge-system-is-nonsingular
  - def-linear-elasticity-displacement-formulation-and-data
  - lem-linear-elasticity-mixed-pressure-gauge-is-well-defined
  - thm-linear-elasticity-displacement-wellposedness-and-galerkin-bound
  - def-linear-elasticity-near-incompressible-mixed-mini-pair
  - thm-nearly-incompressible-elasticity-mini-uniform-stability-and-error
examples: []
---

For bounded connected Lipschitz domains in dimensions two and three, this page defines the homogeneous-Dirichlet small-strain isotropic elasticity model with measurable shear modulus $0<\mu_0\le\mu\le\mu_1$ and finite Lamé parameter $\lambda\ge0$. Korn coercivity and Lax–Milgram give a unique displacement and a uniform energy bound. Céa gives a conforming Galerkin estimate with its explicit $\lambda$-dependent factor.

For the nearly incompressible regime the pressure is normalized in $L^2_0(D)$, with sign chosen to match the stated divergence pairing. The P1-bubble/P1 mini-element pair is treated on conforming shape-regular affine simplicial meshes. Its mixed stability and best-approximation error remain uniform through $\lambda=\infty$, where the constraint becomes $\operatorname{div}u=0$. The result is not a nonlinear existence theorem and does not assert coefficient-contrast robustness.

The algebraic gauge and its nonsingularity lemma address a separately identified free-body rigid-motion nullspace under exact kernel assumptions. This algebraic case is distinct from the full-boundary Dirichlet model, where rigid motions are already removed.
