---
id: lem-hp-corner-uniform-degree-dof-count
kind: lemma
title: Uniform-degree polygon corner spaces have cubic degree-of-freedom growth
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
justified_by: []
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
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler, Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§4.1, equations (29)–(31), PDF pp. 10–11: at most O(k) triangles, uniform degree p_k proportional to k, and dimension O(k^3)."
    - title: Leszek F. Demkowicz, Mathematical Theory of Finite Elements
      url: https://users.oden.utexas.edu/~leszek/classes/EM394F/book.pdf
      locator: "§3.1.4, printed pp. 64–68: local polynomial degree and dimension-layer conventions; the global count is proved here."
---

## Statement

For $k\ge1$, let a matching triangulation $\mathcal T_k$ of a polygon have at most $C_0k$ triangles. Assign a uniform total polynomial degree $p_k\ge1$ with $p_k\le C_1k$. The algebraic space of continuous piecewise $\mathbb P_{p_k}$ functions has dimension
$$
N_k\le C_2k^3,
$$
where $C_2$ depends only on $C_0$ and $C_1$. The same upper bound holds for any subspace imposing homogeneous boundary traces. This is an upper count only; it asserts no hp approximation rate.

## Facts & Assumptions

**Given:** Integer $k\ge1$, a matching triangulation $\mathcal T_k$ with $\#\mathcal T_k\le C_0k$, and uniform degree $1\le p_k\le C_1k$.

[F1] [[def-hp-variable-degree-spaces-on-matching-meshes]]: the continuous polynomial space is a linear subspace of the broken product of its cell polynomial spaces.

## Proof

1.1 On a triangle, monomials $x^iy^j$ with $i,j\ge0$ and $i+j\le p_k$ form a basis of $\mathbb P_{p_k}$. Counting by total degree gives $\dim\mathbb P_{p_k}=\sum_{r=0}^{p_k}(r+1)=(p_k+1)(p_k+2)/2$. [F1, given, algebra]

2.1 The broken product over $\mathcal T_k$ therefore has dimension $\#\mathcal T_k(p_k+1)(p_k+2)/2$. By [F1], trace matching and any zero-boundary conditions define a linear subspace, whose dimension cannot exceed the broken dimension. Using $\#\mathcal T_k\le C_0k$ and $p_k\le C_1k$, and $k\ge1$, gives $N_k\le C_0k(C_1k+1)(C_1k+2)/2\le C_2k^3$ for an explicit finite $C_2$ depending only on $C_0,C_1$. [F1, step 1.1, given, algebra] ∎
