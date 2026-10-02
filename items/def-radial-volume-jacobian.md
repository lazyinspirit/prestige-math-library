---
id: def-radial-volume-jacobian
kind: definition
title: Radial volume jacobian
status: published
origin: pipeline
deps:
  - def-radial-jacobi-tensor
  - lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point
  - def-cut-time-in-a-unit-tangent-direction
  - prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume
  - def-countable-choice
  - cor-polar-integration-may-discard-the-cut-locus
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
      locator: "§§27.2 and 28.1, pp.200–209: the radial Jacobi determinant as the polar density"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: the radial volume density and its normalisation"
---

## Definition

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$ once and
for all through the cut-time and polar-coordinate interfaces named below. Let
$(M,g)$ be a complete connected boundaryless Riemannian manifold of dimension
$n\ge2$, let $p\in M$, let $v\in S_pM$ be a unit tangent vector and let
$\gamma_v(t):=\exp_p(tv)$ be the radial geodesic, with cut time $c_p(v)$
([[def-cut-time-in-a-unit-tangent-direction]]). Let $A_v(t):N_0\to N_t$ be
the radial Jacobi tensor of $\gamma_v$
([[def-radial-jacobi-tensor]]) and let
$\bar A_v(t)=P_t^{-1}\circ A_v(t)$ be its parallel-frame matrix.

The **radial volume Jacobian** is
$$J_p(t,v):=\det\bar A_v(t)>0,\qquad 0<t<c_p(v),$$
the determinant of $A_v$ computed in any oriented orthonormal basis of $N_0$
and its parallel transport, whose orientations are declared compatible at
$t=0$. The value does not depend on the choice of oriented orthonormal basis:
a change of basis with orthogonal matrix $C$ replaces $\bar A_v$ by
$C^{-1}\bar A_vC$, whose determinant is unchanged
([[prop-levi-civita-parallel-transport-preserves-lengths-angles-and-volume]]).

The defining properties recorded here are:

1. **Positivity.** $J_p(t,v)>0$ for $0<t<c_p(v)$. Indeed, as $t\downarrow0$,
   $\bar A_v(t)=t\,\mathrm{id}+O(t^2)$, so $\det\bar A_v(t)=t^{n-1}(1+O(t))>0$
   for small $t$; the determinant is continuous and cannot vanish on
   $(0,c_p(v))$, because the cut time does not exceed the first conjugate time
   and the radial Jacobi tensor is invertible before the first conjugate
   instant ([[lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point]]).
2. **Normalisation.** $J_p(t,v)/t^{n-1}\to1$ as $t\downarrow0$, by the same
   expansion.
3. **Geometric role.** On the polar chart before the cut time, Riemannian
   volume is the pushforward of $J_p(t,v)\,dt\,d\sigma_p(v)$, where $\sigma_p$
   is the surface measure on $S_pM$; this is the polar integration formula
   ([[cor-polar-integration-may-discard-the-cut-locus]]). Relative to Euclidean
   polar measure $t^{n-1}\,dt\,d\sigma_p(v)$, the density ratio is
   $J_p(t,v)/t^{n-1}$.

No sign or estimate beyond positivity is asserted here, and the value at
$t\ge c_p(v)$ is not defined. The integer $n\ge2$ keeps the normal space
nonempty; for $n=1$ the normal space is zero-dimensional and $J_p(t,v)=1$ by
the empty-determinant convention, which is the convention used by the polar
integration formula.
