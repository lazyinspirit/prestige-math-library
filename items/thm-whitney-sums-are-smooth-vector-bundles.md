---
id: thm-whitney-sums-are-smooth-vector-bundles
kind: theorem
title: "Whitney sums are smooth vector bundles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-whitney-sum-of-vector-bundles, def-vector-bundle-chart-and-transition-function, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

If $E\to M$ and $F\to M$ are smooth vector bundles of ranks $r$ and $s$, then
$E\oplus F\to M$ is a smooth vector bundle of rank $r+s$.

## Facts & Assumptions

**Given:** Smooth vector bundles $E\to M$ and $F\to M$.

[L1] On a common trivializing neighborhood, vector bundle charts identify $E$
and $F$ with $U\times\mathbb R^r$ and $U\times\mathbb R^s$
([[def-vector-bundle-chart-and-transition-function]]).

## Proof

**Proof technique:** direct.

1.1 On a common trivializing neighborhood $U$, use [L1] to identify $E|_U\oplus F|_U$ with $U\times(\mathbb R^r\oplus\mathbb R^s)\cong U\times\mathbb R^{r+s}$. This gives a local trivialization of the Whitney sum. [L1, given, construct]

2.1 If the transition matrices for $E$ and $F$ are $g_{\beta\alpha}$ and $h_{\beta\alpha}$, then the transition matrix for $E\oplus F$ is the block diagonal matrix $\operatorname{diag}(g_{\beta\alpha},h_{\beta\alpha})$, which is smooth on overlaps. Therefore these local trivializations define a smooth rank-$(r+s)$ bundle. [L1, step 1.1, algebra] ∎