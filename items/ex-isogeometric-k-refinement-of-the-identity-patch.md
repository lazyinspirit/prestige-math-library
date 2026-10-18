---
id: ex-isogeometric-k-refinement-of-the-identity-patch
kind: example
title: Degree elevation and simple-knot insertion preserve the identity patch
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-isogeometric-galerkin-patch-space-and-refinement
  - thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry
  - thm-single-new-knot-insertion-preserves-b-spline-curve
  - thm-spline-polynomial-reproduction
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Carl de Boor, A Practical Guide to Splines, revised edition, Chapter IX and Chapter XI"
      url: "https://www.stat.cmu.edu/~brian/valerie/617-2022/week07/spline%20references/pdfcookie.com_a-practical-guide-to-splines.pdf"
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
---

## Statement

Start with the degree-one identity map $F(\xi,\eta)=(\xi,\eta)$ on $[0,1]^2$, represented by its four tensor control points and unit weights. Elevate both coordinate degrees to two using control net $P_{ij}=(i/2,j/2)$ for $i,j\in\{0,1,2\}$ and retain unit weights. Inserting a simple knot at $1/2$ in both coordinate directions leaves the geometry exactly the identity and gives degree-two analysis splines with $C^1$ continuity at the new interior knots.

## Facts & Assumptions

**Given:** The initial identity patch, the degree-two tensor Bernstein basis, and midpoint-knot insertion in each coordinate.

[F1] [[def-isogeometric-galerkin-patch-space-and-refinement]]: h-refinement inserts knots at fixed degree; k-refinement combines degree elevation and knot insertion, and exact geometry is claimed only after verifying the homogeneous representation.

[F2] [[thm-spline-polynomial-reproduction]]: degree-two splines with an interior knot of multiplicity one are $C^{2-1}=C^1$ there.

[F3] [[thm-homogeneous-nurbs-knot-insertion-preserves-patch-geometry]]: insertion of a new knot strictly inside a nonempty span, with homogeneous control updates, leaves the NURBS patch map unchanged and all weights positive.

## Proof

1.1 The degree-two Bernstein functions are $B_0^2(t)=(1-t)^2$, $B_1^2(t)=2t(1-t)$, and $B_2^2(t)=t^2$. Thus $\sum_{i=0}^2B_i^2(t)=1$ and $\sum_{i=0}^2(i/2)B_i^2(t)=t$. For $P_{ij}=(i/2,j/2)$, unit weights make the tensor denominator one; summing the first and second control coordinates yields $\xi$ and $\eta$. Hence the elevated representation is still exactly the identity map, with positive weights. [given, algebra]

2.1 The midpoint $1/2$ is new and lies strictly inside the single nonempty span of the clamped degree-two Bernstein knot vector. Apply [F3] to each fixed-coordinate control-net slice first in $\xi$, then in $\eta$. Each insertion preserves the entire homogeneous geometry and positive weights, so the final patch is exactly $F(\xi,\eta)=(\xi,\eta)$. The resulting degree-two univariate knot vectors have a simple interior knot; [F2] gives $C^1$ continuity in both coordinate directions. This is the stated k-refinement, and no general p/k geometry-preservation claim is needed. [F1, F2, F3, step 1.1, given] ∎