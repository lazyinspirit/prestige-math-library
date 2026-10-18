---
id: ex-parabolic-curved-domain-linear-geometry-approximation
kind: example
title: "A parabolic shear has certified linear geometry approximations"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-curved-domain-geometry-approximation
  - lem-parabolic-domain-map-approximation
  - lem-isoparametric-laplace-tensor-defect
  - def-countable-choice
  - thm-continuous-bijection-from-a-compact-space-has-continuous-inverse
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
---

## Example

Assume Countable Choice. On $[-1,1]^2$, the exact shear $\Phi(x,y)=(x,y+x^2/4)$ maps each straight reference edge to a straight or parabolic arc. Its determinant is $1$. On any shape-regular affine mesh, the nodal P1 geometry map satisfies $e_0\le Ch^2$, $e_1\le Ch$, and $J_h\ge1/2$ for small enough $h$. Consequently its Laplace tensor differs from the exact pulled-back tensor by at most $Ch$ in $L^\infty$.

## Facts & Assumptions

**Given:** Countable Choice; a matching shape-regular affine triangulation of the square and the map $\Phi(x,y)=(x,y+x^2/4)$.

[F1] [[def-curved-domain-geometry-approximation]]: admissible cellwise geometry maps have matching traces, positive Jacobians and common image topology; $e_0,e_1$ measure their uniform value and derivative errors, and boundary-trace compatibility must be stated separately.

[F2] [[lem-parabolic-domain-map-approximation]]: under Countable Choice, the vertexwise P1 map $\Phi_h=(x,y+I_h(x^2/4))$ has $e_0\le Ch^2$, $e_1\le Ch$, $\det D\Phi_h\ge1/2$ for small $h$, and is globally injective.

[F3] [[lem-isoparametric-laplace-tensor-defect]]: with both Jacobians bounded below by $j_*>0$ and both map derivatives uniformly bounded, derivative error $e_1$ bounds the Laplace tensor gap by $Ce_1$.

[F4] [[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]]: a continuous bijection from a compact metric space to a metric space has continuous inverse.

[A1] Countable Choice is the explicit hypothesis of [F2] ([[def-countable-choice]]).

## Verification

1.1 Differentiate $\Phi$ to obtain $D\Phi=\begin{pmatrix}1&0\\x/2&1\end{pmatrix}$ and $\det D\Phi=1$. The quadratic term makes the image of a nonvertical straight edge a parabolic arc, while vertical edges remain vertical. [given, algebra]

1.2 Apply [F2] on the shape-regular mesh to get the stated value error, derivative error, and positive-Jacobian certificate. [F1, F2, A1, given]

2.1 On each shared reference edge, the two affine traces of $I_h(x^2/4)$ agree at its endpoints and therefore agree everywhere on that edge. Thus $\Phi_h$ has matching traces; the exact map is globally smooth and has matching traces as well. On each boundary edge, $\Phi_h$ is the straight segment joining the exact images of its vertices. The vertical boundary traces agree exactly with $\Phi$; on each horizontal boundary segment, $\Phi_h(x,\pm1)=(x,\pm1+I_h(x^2/4))$, so the boundary discrepancy is bounded by $Ch^2$ from step 1.2. Compatibility here does not assert equality of the exact parabolic arcs and their straight approximations. By [F2], $\Phi_h$ is continuous and injective on the compact square, hence by [F4] is a homeomorphism onto its image, as is $\Phi$. Its cell restrictions are invertible affine maps extending to neighborhood diffeomorphisms; the exact restrictions extend by the global shear. These facts verify matching and boundary-trace compatibility and common image topology in [F1]. [F1, F2, F4, A1, given, step 1.1, step 1.2, algebra]

3.1 Step 1.1 bounds $D\Phi$ uniformly, and step 1.2 gives $\|D\Phi_h\|_\infty\le\|D\Phi\|_\infty+Ch$ and determinant lower bounds $J=1$, $J_h\ge1/2$. Apply [F3] cellwise, with the compatible maps from step 2.1, and substitute $e_1\le Ch$ from step 1.2. This yields $\|B-B_h\|_\infty\le Ch$ with constants uniform over the mesh family. [F3, A1, step 1.1, step 1.2, step 2.1, algebra] ∎
