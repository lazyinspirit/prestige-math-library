---
id: lem-collocation-quadrature-matrix-well-defined
kind: lemma
title: Collocation quadrature data are well defined
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-collocation-quadrature-tableau
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-continuous-implies-integrable
  - thm-algebra-of-continuous-functions
  - thm-extreme-value-r
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Statement

For the distinct nodes and cardinal polynomials in [[def-collocation-quadrature-tableau]], every entry of $Q$, every component of $b$, and the Lebesgue constant $\Lambda_M$ is a finite real number.

## Facts & Assumptions

**Given:** An integer $M\ge1$ and distinct nodes $0\le c_1<\cdots<c_M\le1$ as in [[def-collocation-quadrature-tableau]].

[F1] [[def-cardinal-polynomial-interpolation]] and [[lem-cardinal-basis-degree-and-values]]: each cardinal function $\ell_j$ is a polynomial of degree at most $M-1$.

[F2] [[thm-algebra-of-continuous-functions]]: polynomial functions, absolute values of continuous functions, and finite sums of continuous functions are continuous.

[F3] [[thm-continuous-implies-integrable]]: a continuous real function on a nondegenerate compact interval is Riemann integrable; the integral over a degenerate interval is zero.

[F4] [[thm-extreme-value-r]]: a continuous real function on $[0,1]$ has a finite maximum there.

## Proof

1.1 By [F1], each $\ell_j$ is a polynomial, hence continuous by [F2]. For every $i,j$, its restriction to $[0,c_i]$ is Riemann integrable by [F3] when $c_i>0$, and its integral is $0$ when $c_i=0$. Its integral on $[0,1]$ is also finite by [F3]. Thus all defining entries $Q_{ij}$ and $b_j$ are finite. [F1, F2, F3, construct]

2.1 The function $s\mapsto\sum_{j=1}^M|\ell_j(s)|$ is continuous by [F2]; [F4] supplies its finite maximum on $[0,1]$. This is exactly $\Lambda_M$ from the definition. The matrices $Q$ and the vector $b$ have finitely many finite entries, so their displayed finite sums and row norms are finite as well. [F2, F4, algebra] ∎
