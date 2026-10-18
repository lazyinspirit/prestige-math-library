---
id: ex-inverted-isoparametric-map-detection
kind: example
title: "An orientation-reversing cell fails the Jacobian certificate"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-isoparametric-curved-cell-map
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Take the reference triangle with vertices $(0,0),(1,0),(0,1)$ and the affine map $F(x,y)=(y,x)$. Its Jacobian determinant is $-1$, so it cannot satisfy the admissibility condition $J_F\ge j_0>0$.

## Facts & Assumptions

**Given:** The unit reference triangle and the map $F(x,y)=(y,x)$.

[F1] [[def-isoparametric-curved-cell-map]]: admissibility requires an orientation-preserving diffeomorphism with determinant bounded below by a positive constant.

## Verification

1.1 The derivative matrix is $DF=\begin{pmatrix}0&1\\1&0\end{pmatrix}$, whose determinant is $-1$. [given, algebra]

2.1 Since $-1$ is not bounded below by any positive $j_0$, this map is rejected by the admissibility certificate. [F1, step 1.1] ∎
