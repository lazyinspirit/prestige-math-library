---
id: thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
kind: theorem
title: Topological well-definedness of the surface Euler characteristic
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - lem-curvilinear-triangulation-induces-a-finite-cw-structure
  - thm-euler-poincare-formula-for-finite-cw-complexes
  - def-euler-characteristic-of-a-finitely-triangulated-compact-surface
  - def-curvilinear-triangulation-of-a-compact-surface
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, printed pp. 167-172 (PDF pp. 183-188): the Euler count V-E+F of a geodesic triangulation is identified with the integral in the global Gauss-Bonnet theorem, so the count cannot depend on the triangulation or the metric."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Section 2.2, printed pp. 13-15 (PDF pp. 20-22), where the count of a finite triangulation is written as the Euler characteristic appearing in the global theorem."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $M$ be a compact smooth surface, possibly with smooth boundary, and let
$\mathcal T=(V,E,F,\phi)$ be a finite face-to-face piecewise $C^2$ curvilinear
triangulation of $M$ in the sense of
[[def-curvilinear-triangulation-of-a-compact-surface]]. Then there is a number
$\chi(M)$, the **Euler characteristic of the smooth surface** $M$, independent
of the triangulation and of any Riemannian metric used to compute it, with
$$V-E+F=\chi(M).$$
More precisely: any two finite face-to-face piecewise $C^2$ curvilinear
triangulations of $M$ have the same $V-E+F$, and in particular triangulations
that are geodesic with respect to possibly different smooth Riemannian metrics
on $M$ have the same $V-E+F$. The same intrinsic number is defined for surfaces with boundary, including
nonorientable ones, by the finite CW homology of $M$.

## Facts & Assumptions

**Given:** A compact smooth surface $M$ and a finite face-to-face curvilinear triangulation $\mathcal T$ as in the Statement.

[F1] Such a triangulation gives a finite regular CW structure on $M$ with $V$, $E$, and $F$ cells in dimensions $0$, $1$, and $2$ ([[lem-curvilinear-triangulation-induces-a-finite-cw-structure]]).

[F2] For any finite CW complex $X$, the alternating cell count equals $\sum_n(-1)^n\operatorname{rank}H_n(X;\mathbb Z)$ ([[thm-euler-poincare-formula-for-finite-cw-complexes]]).

[F3] The count attached to a supplied triangulation is $\chi(M;\mathcal T)=V-E+F$ ([[def-euler-characteristic-of-a-finitely-triangulated-compact-surface]]).

## Proof

**Proof technique:** compare the count of each triangulation with the singular-homology Euler characteristic of the same space.

1.1 By [F1], the supplied $\mathcal T$ gives a finite regular CW structure on $M$ with exactly $V$ zero-cells, $E$ one-cells, and $F$ two-cells. Applying [F2] to this CW structure gives $V-E+F=\sum_n(-1)^n\operatorname{rank}H_n(M;\mathbb Z)$. The right side depends only on the underlying topological space $M$. [F1, F2, given]

2.1 Apply step 1.1 to any second finite curvilinear triangulation $\mathcal T'$. Its alternating count equals the same homology sum, so $\chi(M;\mathcal T)=\chi(M;\mathcal T')$ by [F3]. This argument uses no orientation or metric; it covers nonorientable surfaces with boundary as well as closed and orientable surfaces. A geodesic triangulation, whenever supplied, is a curvilinear one, so it has this same count. Define $\chi(M)$ to be the common value. [F1, F2, F3, step 1.1] ∎

## Source locator
Hatcher, *Algebraic Topology*, Theorem 2.44, identifies the finite CW alternating cell count with the alternating rank of homology. The curvilinear-to-CW construction is supplied by [[lem-curvilinear-triangulation-induces-a-finite-cw-structure]]. This proves metric and triangulation independence directly, including the nonorientable boundary case.
