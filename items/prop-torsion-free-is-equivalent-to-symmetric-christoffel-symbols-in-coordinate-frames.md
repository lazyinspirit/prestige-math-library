---
id: prop-torsion-free-is-equivalent-to-symmetric-christoffel-symbols-in-coordinate-frames
kind: proposition
title: "Torsion free is equivalent to symmetric christoffel symbols in coordinate frames"
status: published
origin: pipeline
deps: ["lem-torsion-is-c-infinity-bilinear-and-skew-symmetric","def-christoffel-symbols-of-an-affine-connection","prop-coordinate-formula-for-the-lie-bracket"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
---

## Statement

An affine connection is torsion free if and only if in every coordinate chart $\Gamma^k{}_{ij}=\Gamma^k{}_{ji}$ for all indices. It suffices to check this on a coordinate-chart cover. This criterion concerns coordinate frames.

## Facts & Assumptions

**Given:** An affine connection with coordinate symbols.

[F1] Torsion is a smooth bilinear tensor ([[lem-torsion-is-c-infinity-bilinear-and-skew-symmetric]]).

[F2] Symbols give the derivatives of coordinate vector fields ([[def-christoffel-symbols-of-an-affine-connection]]).

[F3] Coordinate vector fields commute by the bracket formula ([[prop-coordinate-formula-for-the-lie-bracket]]).

## Proof

1.1 Evaluating the torsion expression on $\partial_i,\partial_j$ gives $T(\partial_i,\partial_j)=\sum_k(\Gamma^k{}_{ij}-\Gamma^k{}_{ji})\partial_k$, because their bracket is zero. If $T=0$, basis independence forces each difference to vanish in every chart. [F1, F2, F3]

2.1 Conversely, symmetry of the coefficients on a chart makes every displayed basis value zero. Tensor bilinearity then gives $T(X,Y)=0$ there for arbitrary fields. A chart cover proves this globally. With no indices in dimension zero the condition is vacuous; in dimension one the only lower-index pair is already symmetric. A noncoordinate frame may have nonzero brackets, so dropping that hypothesis would invalidate the computation. [F1, step 1.1] ∎
