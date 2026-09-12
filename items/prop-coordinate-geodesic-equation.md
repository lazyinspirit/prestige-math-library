---
id: "prop-coordinate-geodesic-equation"
kind: "proposition"
title: "Coordinate geodesic equation"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-geodesic-of-an-affine-connection","def-christoffel-symbols-of-an-affine-connection"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Definition 15.1.1, p.113
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

In coordinates $x^1,\ldots,x^n$, a smooth curve $\gamma$ is a geodesic if and only if, throughout every parameter subinterval lying in the chart,
$$\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0\qquad(1\le k\le n),$$
with summation over repeated indices.

## Facts & Assumptions

**Given:** A coordinate chart containing the relevant curve segment.

[F1] [[def-geodesic-of-an-affine-connection]] says that $\gamma$ is geodesic exactly when $D_t\gamma'=0$.

[F2] [[def-christoffel-symbols-of-an-affine-connection]] gives $\nabla_{\partial_i}\partial_j=\Gamma^k{}_{ij}\partial_k$ and fixes the order of the two lower indices.

## Proof

1.1 Along the chart segment, $\gamma'=\dot x^j\partial_j$. The connection product rule and [F2] give $$D_t\gamma'=\ddot x^k\partial_k+\dot x^j\dot x^i\nabla_{\partial_i}\partial_j=\left(\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j\right)\partial_k.$$ [F2, given, algebra]

2.1 The coordinate vectors are a basis at every point, so the vector in step 1.1 vanishes if and only if every displayed coefficient vanishes. By [F1], these two conditions are respectively equivalent to the intrinsic geodesic equation, proving both directions. For a constant curve all first and second derivatives vanish. In dimension zero both lists of equations are empty and both conditions hold; in dimension one the formula is $\ddot x+\Gamma^1{}_{11}(x)\dot x^2=0$. Included endpoints use one-sided derivatives, chart seams are handled on overlapping subintervals by the intrinsic equation, and no choices are made. [F1, F2, step 1.1] ∎
