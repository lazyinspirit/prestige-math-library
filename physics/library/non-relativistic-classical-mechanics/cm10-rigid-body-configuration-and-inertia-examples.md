---
page: cm10-rigid-body-configuration-and-inertia-examples
title: "Rigid-body configuration and inertia — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm10-equilateral-triangle-rotational-inertia
  - cex-cm10-degenerate-line-mass-singular-inertia
  - ex-cm10-euler-angle-pole-and-orientation
  - ex-cm10-parallel-axis-shift-check
requires:
  - cm10-rigid-body-configuration-and-inertia
  - cm-math-rigid
  - cm01-framework-quantities-and-geometry
  - cm-math-geometry
  - cm-math-verification
  - sine-cosine-and-the-definition-of-pi
  - pi-the-equivalent-characterizations
---

These examples and counterexamples exercise the definitions and theorems of
[[cm10-rigid-body-configuration-and-inertia]] on explicit model data. The
equilateral-triangle model
([[ex-cm10-equilateral-triangle-rotational-inertia]]) has three equal point
masses at the vertices of a triangle in reference coordinates centred at its
centre; the body inertia matrix, the principal axes and moments, the
rotational term of the kinetic splitting for a general motion and the
invariance of the inertia matrix under the threefold symmetry rotation are
computed exactly, and the model is verified to be nondegenerate.

The degenerate counterexample
([[cex-cm10-degenerate-line-mass-singular-inertia]]) takes two equal point
masses at opposite points of a line through the reference origin. Its inertia
matrix is singular, the rotation of the model about the line moves no
material point and contributes neither rotational kinetic energy nor angular
momentum, and the relation between the body angular velocity and the angular
momentum about the centre of mass loses injectivity; the example refutes the
claim that every positive-mass rigid-material model has positive definite
inertia and illustrates the exact vanishing criterion of
[[pthm-cm10-principal-axes]] clause (d).

The Euler-angle example
([[ex-cm10-euler-angle-pole-and-orientation]]) exhibits the pole
$\beta=0$ of the parametrization
$(\alpha,\beta,\gamma)\mapsto R_z(\alpha)R_y(\beta)R_z(\gamma)$: the
parametrization is non-injective on every neighbourhood of a pole point, its
derivative there has rank at most two and admits no differentiable local
inverse, and the Euler-angle rates determine the body angular velocity only
through the sum $\alpha'+\gamma'$ and the rate $\beta'$; meanwhile the
orientation path $R(t)=R_y(t)$ passes through the pole orientation with
constant angular velocity $e_2$, so the singularity is a property of the
coordinates and not of the orientation. The parallel-axis example
([[ex-cm10-parallel-axis-shift-check]]) computes the inertia tensor of the
triangle about a vertex both from the shifted-point supplier
[[thm-cm-parallel-axis-theorem]] and directly from the finite sum, checks the
axis moments against the central ones, and identifies the mass-times-squared-
distance shift between them.
