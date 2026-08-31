---
id: prop-the-total-space-of-a-rank-r-bundle-has-dimension-dim-m-plus-r
kind: proposition
title: "The total space of a rank-r bundle has dimension dim M + r"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-vector-bundle-chart-and-transition-function, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
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

If $\pi:E\to M$ is a smooth vector bundle of rank $r$ and $\dim M=n$, then
$\dim E=n+r$.

## Facts & Assumptions

**Given:** A rank-$r$ smooth vector bundle $\pi:E\to M$ with $\dim M=n$.

[L1] Every point of $E$ lies in a vector bundle chart identified with
$U\times\mathbb R^r$ over an open set $U\subseteq M$
([[def-vector-bundle-chart-and-transition-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix $e\in E$ with base point $p=\pi(e)$. Choose a chart of $M$ sending a neighborhood of $p$ diffeomorphically onto an open subset of $\mathbb R^n$, and combine it with a vector bundle chart from [L1]. This identifies a neighborhood of $e$ in $E$ with an open subset of $\mathbb R^n\times\mathbb R^r$. [L1, given]

2.1 Since $\mathbb R^n\times\mathbb R^r\cong\mathbb R^{n+r}$, every point of $E$ has a chart of dimension $n+r$. Therefore the total space $E$ is an $(n+r)$-manifold. [step 1.1, algebra] ∎