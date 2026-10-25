---
id: ex-the-euclidean-levi-civita-connection
kind: example
title: "The euclidean levi civita connection"
status: published
origin: pipeline
deps: ["prop-christoffel-formula-for-the-levi-civita-connection","prop-local-frame-formula-for-covariant-differentiation-along-a-curve","def-parallel-transport-along-a-piecewise-smooth-curve","def-affine-connection-on-a-smooth-manifold"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Example

The Euclidean metric on $\mathbb R^n$ has Levi–Civita derivative $\nabla_XY=\sum_jX(Y^j)\partial_j$ in Cartesian coordinates. Its Christoffel symbols vanish, and parallel transport along every piecewise smooth curve on a compact interval preserves the Cartesian components.

## Facts & Assumptions

**Given:** The standard metric $g_{ij}=\delta_{ij}$ and Cartesian tangent frame on $\mathbb R^n$.

[F1] Levi–Civita symbols are the half-inverse-metric contraction of metric first derivatives ([[prop-christoffel-formula-for-the-levi-civita-connection]]).

[F2] Along a curve, $D_tV$ has coefficients $v'+\omega(\dot\gamma)v$ ([[prop-local-frame-formula-for-covariant-differentiation-along-a-curve]]).

[F3] Parallel transport is the endpoint map of the unique continuous piecewise parallel section ([[def-parallel-transport-along-a-piecewise-smooth-curve]]).

[F4] An affine connection obeys the Leibniz rule in its second argument ([[def-affine-connection-on-a-smooth-manifold]]).

## Verification

1.1 Every $\partial_kg_{ij}$ is zero, so [F1] gives $\Gamma^k{}_{ij}=0$ for every index. Expanding $Y=\sum_jY^j\partial_j$ by [F4] gives the claimed derivative. For example in two dimensions, $X=x\partial_x+y\partial_y$ and $Y=x^2\partial_x+xy\partial_y$ give $\nabla_XY=2x^2\partial_x+2xy\partial_y$. [F1, F4, given]

2.1 By [F2] the parallel equation is $v'=0$. The section with constant Cartesian coefficients solves that equation on every smooth segment and is continuous across the finitely many corners. Uniqueness in [F3] identifies it as the transported section, so transport sends $\sum_jv^j\partial_j|_p$ to $\sum_jv^j\partial_j|_q$, including constant curves and singleton intervals. Zero components stay zero. For $n=0$ this is the unique map of zero tangent spaces, and $n=1$ is the ordinary scalar derivative. [F2, F3, step 1.1] ∎
