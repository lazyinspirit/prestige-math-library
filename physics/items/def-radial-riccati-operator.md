---
id: def-radial-riccati-operator
kind: definition
title: Radial riccati operator
status: published
origin: pipeline
deps:
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - thm-existence-and-uniqueness-of-parallel-sections
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§26.1–26.2, pp.191–197: the Riccati operator S=A'A^{-1}"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§2–4, pp.6–16: the matrix Riccati calculus"
---

## Definition

Let $(M,g)$ be a Riemannian manifold of dimension $n\ge2$, let
$\gamma:I\to M$ be a unit-speed geodesic on an interval with nonempty interior
and $0\in I$, let $A(t):N_0\to N_t$ be the radial Jacobi tensor of
[[def-radial-jacobi-tensor]] in the notation fixed there, and let $P_t$ be
parallel transport along $\gamma$, so that
$\bar A(t)=P_t^{-1}\circ A(t):N_0\to N_0$ is the matrix family of $A$. By
[[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]]
the map $\bar A(t)$ is invertible for every $t\in I$ with $0<t<\tau$, where
$\tau$ is the first conjugate instant of $\gamma(0)$ along $\gamma$.

On that interval the **radial Riccati operator** is defined by
$$S(t):=\bar A'(t)\,\bar A(t)^{-1}\in\operatorname{End}(N_0),$$
and, equivalently, as the endomorphism $D_tA(t)\circ A(t)^{-1}$ of $N_t$
transported back to $N_0$ by $P_t$. Its **domain** is precisely the set of
$t\in I$ with $0<t<\tau$; the operator is smooth there because $\bar A$ is
smooth and inversion is smooth on invertible endomorphisms.

The definition is independent of the choices made. The parallel identification
uses the unique parallel transport of
[[thm-existence-and-uniqueness-of-parallel-sections]], and for a change of
basis of $N_0$ with matrix $C$ the matrix $\bar A$ is replaced by
$C^{-1}\bar AC$, so $\bar A'\bar A^{-1}$ is replaced by
$C^{-1}(\bar A'\bar A^{-1})C$; the operator $S(t)$ is therefore a well-defined
endomorphism of the abstract normal space, and in an orthonormal parallel frame
it is represented by the matrix $M'(t)M(t)^{-1}$ for the matrix $M$ of $A$. No
symmetry of $S(t)$, no differential equation and no relation to the curvature
is asserted by this definition; those are separate results. For $n=2$ the
normal space is one-dimensional and $S(t)$ is multiplication by the scalar
$\bar A'(t)/\bar A(t)$.
