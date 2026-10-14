---
id: def-b-spline-space-and-basis
kind: definition
title: B-spline spaces and knot conventions
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: []
justified_by: [thm-spline-polynomial-reproduction]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Tom Lyche, Carla Manni, and Hendrik Speleers, B-Splines and Spline Approximation, §§1.1–1.2
      url: https://www.mat.uniroma2.it/~speleers/cime2017/material/notes_lyche.pdf
---

## Definition

Let $p\in\mathbb N_0$, $n\ge p+1$, and $a<b$. A clamped knot vector is a nondecreasing finite sequence
$$\xi_1=\cdots=\xi_{p+1}=a<\xi_{p+2}\le\cdots\le\xi_n<\xi_{n+1}=\cdots=\xi_{n+p+1}=b,$$
with $\xi_j<\xi_{j+p+1}$ for every $1\le j\le n$. Empty interior ranges are omitted. The multiplicity $\mu(\eta)$ of an interior knot $\eta$ is its number of occurrences among $\xi_{p+2},\ldots,\xi_n$.

Write $\mathcal P_p$ for the real polynomials of degree at most $p$. The degree-$p$ spline space $S_{p,\xi}$ consists of functions that restrict to a member of $\mathcal P_p$ on each nonempty knot interval and whose derivatives through order $p-\mu(\eta)$ agree across each interior knot $\eta$. The convention $C^{-1}$ means that no matching condition is imposed. For this piecewise definition, take knot cells left-closed and right-open; at a knot with no matching condition, the value is the one from the cell on its right, and at $b$ use the left limit. Thus the function value at a discontinuous knot is specified.

For each degree $d\in\{0,\ldots,p\}$, the functions $B_{j,d,\xi}$ are indexed by $1\le j\le n+p-d$. Set
$$B_{j,0,\xi}(x)=\mathbf 1_{[\xi_j,\xi_{j+1})}(x),\qquad 1\le j\le n+p.$$
For $1\le d\le p$ and $1\le j\le n+p-d$, define recursively
$$B_{j,d,\xi}(x)=\frac{x-\xi_j}{\xi_{j+d}-\xi_j}B_{j,d-1,\xi}(x)+\frac{\xi_{j+d+1}-x}{\xi_{j+d+1}-\xi_{j+1}}B_{j+1,d-1,\xi}(x),$$
where a term with zero denominator is defined to be zero. For every degree $d$ and every allowed index $j$, set $B_{j,d,\xi}(b)$ equal to its left limit. In particular, the degree-$p$ family has indices $1\le j\le n$. Its basis and regularity properties are proved in [[thm-spline-polynomial-reproduction]].
