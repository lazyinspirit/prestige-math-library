---
id: thm-function-field-arithmetic-hodge-index-with-trace
kind: theorem
title: "Arithmetic Hodge index and trace kernel over a function curve"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-adelic-metrized-line-bundle-over-function-curve
  - thm-function-field-adelic-intersection-product-exists
  - thm-lang-neron-finite-generation-modulo-the-trace
  - thm-k-k-trace-existence-and-uniqueness
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§3.1–§3.4, Theorems 3.1–3.3"
---

## Statement

Let $k$ be algebraically closed, let $K=k(B)$ for a smooth projective curve $B/k$, and let $X/K$ be geometrically normal, geometrically integral, projective, and of dimension $n\ge1$. A line-bundle class is numerically trivial if its degree on every curve is zero; let $\operatorname{Pic}^{\tau}(X)$ be the subgroup of such classes, and let $L_1,\ldots,L_{n-1}$ be ample line bundles on $X$. Give the numerically trivial line bundles their canonical flat adelic metrics, meaning that at every place the metric pulls back to a zero first-Chern measure on every projective curve mapping to $X_{K_v}$. The intersection form
$$
(M,N)\longmapsto M\cdot N\cdot L_1\cdots L_{n-1}
$$
extends to a negative-semidefinite symmetric real bilinear form on $\operatorname{Pic}^{\tau}(X)\otimes_{\mathbb Z}\mathbb R$, and its kernel is exactly $\operatorname{Tr}_{K/k}(\operatorname{Pic}^0(X))\otimes_{\mathbb Z}\mathbb R$.

## Statement references

[[def-adelic-metrized-line-bundle-over-function-curve]]

[[thm-k-k-trace-existence-and-uniqueness]]

## Facts & Assumptions

**Given:** The one-variable function-field and projective-variety hypotheses in the statement, integrable adelic metrized line bundles, and the $K/k$-trace.

[F1] The adelic intersection product and numerical-equivalence convention are those of the function-field arithmetic intersection theory. ([[def-adelic-metrized-line-bundle-over-function-curve]])

[F2] The trace is the universal constant abelian subvariety, and the Lang–Néron quotient is finitely generated under its hypotheses. ([[thm-k-k-trace-existence-and-uniqueness]], [[thm-lang-neron-finite-generation-modulo-the-trace]])

## Remaining local proof obligations

The source proof is a dimension induction reducing to the curve case, using decomposition into flat and vertical metrics, the local Hodge index theorem, the Néron–Tate pairing on Jacobians, a Bertini theorem, and compatibility of trace/image functors with restriction. None of the required function-field adelic intersection and trace-kernel arguments is supplied by the number-field arithmetic Chow product in the page prerequisites. The actual arithmetic-Chow item `thm-arithmetic-chow-intersection-product` is also unproved and has a different base and theory. The theorem remains escalated.
