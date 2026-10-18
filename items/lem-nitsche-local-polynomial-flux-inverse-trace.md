---
id: lem-nitsche-local-polynomial-flux-inverse-trace
kind: lemma
title: Local inverse trace bound for a polynomial normal flux
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-matching-affine-simplicial-meshes,
    thm-polynomial-inverse-and-discrete-trace-estimates,
    lem-shape-regular-affine-simplex-scaling,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Fix $d\ge2$, a degree $k\ge1$, and a shape-regular matching affine simplicial mesh family as in [[def-matching-affine-simplicial-meshes]]. There is a selected constant $1\le C_{\mathrm{tr}}<\infty$, depending only on $d,k$ and the shape-regularity bound, such that for every cell $K$, every facet $F\subset\partial K$, and every scalar $v_h|_K\in\mathbb P_k(K)$,
$$h_F\|\partial_{n_{K,F}}v_h\|_{L^2(F)}^2\le C_{\mathrm{tr}}^2\|\nabla v_h\|_{L^2(K)}^2,$$
where $h_F=|K|/|F|$ and $n_{K,F}$ is the outward unit normal of $K$ on $F$.

## Facts & Assumptions

**Given:** Countable Choice; a shape-regular matching affine simplicial mesh; $k\ge1$; a cell polynomial $v_h$; a facet $F$; and $h_F=|K|/|F|$.

[F1] For every cell polynomial $q$ of degree at most $k-1$, the polynomial facet trace satisfies $\|q\|_{L^2(F)}\le C h_K^{-1/2}\|q\|_{L^2(K)}$ ([[thm-polynomial-inverse-and-discrete-trace-estimates]]).

[F2] Shape regularity gives $h_F\le C h_K$ for each facet ([[lem-shape-regular-affine-simplex-scaling]]).

[F3] The gradient of a degree-$k$ polynomial has components in $\mathbb P_{k-1}(K)$, and $|\nabla v_h\cdot n_{K,F}|\le |\nabla v_h|$ pointwise.

[F4] The polynomial inverse-trace theorem and the affine simplex scaling results used in [F1]–[F2] assume Countable Choice ([[def-countable-choice]]).

## Proof

**Given:** Countable Choice, $K,F,v_h$, and the bounds in [F1]–[F4].

1.1 Apply [F1] to each component $\partial_jv_h$, which has degree at most $k-1$. Summing the $d$ squared inequalities and using [F3] gives $\|\partial_{n_{K,F}}v_h\|_{L^2(F)}^2\le \|\nabla v_h\|_{L^2(F)}^2\le C_0^2h_K^{-1}\|\nabla v_h\|_{L^2(K)}^2$ for a finite $C_0$ depending only on $d,k$ and the shape bound. [F1, F3, F4, given]

2.1 Multiply step 1.1 by $h_F$ and use $h_F/h_K\le C$ from [F2]. Choose $C_{\mathrm{tr}}:=\max\{1,C_0\sqrt C\}$; this is positive, finite, uniform over the family, and proves the required bound. [F2, step 1.1, algebra, choose]

3.1 If the family contains a cell, fix one of its facets and test the inequality with the affine polynomial $p(x):=n_{K,F}\cdot x$, which belongs to $\mathbb P_k(K)$ because $k\ge1$. Then $\nabla p=n_{K,F}$ and $\partial_{n_{K,F}}p=1$, so $h_F\|\partial_{n_{K,F}}p\|_F^2=(|K|/|F|)|F|=|K|=\|\nabla p\|_K^2>0$. Thus, for a family containing a cell, every admissible positive constant satisfies $C_{\mathrm{tr}}^2\ge1$. For an empty family the bound is vacuous; in either case step 2.1 selects $C_{\mathrm{tr}}\ge1$. [given, step 2.1, algebra] ∎
