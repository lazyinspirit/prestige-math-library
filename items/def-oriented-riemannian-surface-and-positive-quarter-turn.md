---
id: def-oriented-riemannian-surface-and-positive-quarter-turn
kind: definition
title: Oriented Riemannian surface and positive quarter-turn
status: draft
origin: pipeline
deps:
  - def-oriented-smooth-manifold-and-oriented-chart
  - def-riemannian-metric-and-riemannian-manifold
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature, Chapter 9"
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 9, printed pp. 156–172; the oriented orthonormal frame and rotation convention used in the local Gauss–Bonnet formula.
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lectures 1–2, printed pp. 3–15; the oriented orthonormal-frame convention in the local Gauss–Bonnet proof.
---

## Definition

An **oriented Riemannian surface** is an oriented smooth two-manifold $M$
equipped with a Riemannian metric $g$. Its **positive quarter-turn** is the
bundle map $J:TM\to TM$ specified locally by
$$J E_1=E_2,\qquad J E_2=-E_1$$
for any positively oriented $g$-orthonormal frame $(E_1,E_2)$. Equivalently,
at each $p\in M$, $J_p$ is the unique $g_p$-isometry satisfying $J_p^2=-I$
and making $(v,J_pv)$ positively oriented for every nonzero $v\in T_pM$.

Reversing the surface orientation replaces $J$ by $-J$.

## Facts & Assumptions

**Given:** An oriented smooth two-manifold and a supplied Riemannian metric.

[F1] An orientation is a smooth choice of a ray in each determinant line for every point ([[def-oriented-smooth-manifold-and-oriented-chart]]).

[F2] A Riemannian metric is smooth and positive definite on each tangent space ([[def-riemannian-metric-and-riemannian-manifold]]).

## Proof

1.1 By [F1], choose a smooth local positive frame. Gram–Schmidt using the supplied positive-definite metric [F2] gives a smooth positive orthonormal frame $(E_1,E_2)$ on that neighborhood. [F1, F2]

2.1 Set $J E_1=E_2$ and $J E_2=-E_1$. Any other positive orthonormal frame is $(E'_1,E'_2)=(E_1,E_2)R$ for $R\in SO(2)$; every such planar rotation commutes with the standard quarter-turn matrix, so the local definitions agree on overlaps and define one smooth bundle map $J$. [step 1.1]

3.1 The defining matrix is orthogonal and squares to $-I$. For $v=aE_1+bE_2\ne0$, the oriented determinant of $(v,Jv)$ is $a^2+b^2>0$. Thus $J$ is an isometry, $J^2=-I$, and each $(v,Jv)$ is positive. [step 2.1]

4.1 If $A$ is another isometry with $A^2=-I$ and the same orientation property, then $AE_1$ has unit length and $g(AE_1,E_1)=g(AE_1,A(-AE_1))=g(E_1,-AE_1)$, so this inner product is zero. Therefore $AE_1=\pm E_2$; positivity forces $AE_1=E_2$, and $A^2E_1=-E_1$ gives $AE_2=-E_1$. Thus $A=J$. Reversing orientation changes the positive determinant condition's sign and gives $-J$. [step 2.1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, § “The Gauss–Bonnet Formula,” printed pp. 162–165, sets up the formula using a positively oriented orthonormal frame. Datar, *Lectures on Riemannian Geometry*, Lectures 1–2, printed pp. 3–15, uses the same positive-frame convention. The construction and its uniqueness are checked directly above; Lee’s later connection-form sign convention is recorded separately on the connection-form item.
