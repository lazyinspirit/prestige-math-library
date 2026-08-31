---
id: fs-the-orthogonal-normal-bundle-of-a-submanifold-is-defined-without-a-metric
kind: false-statement
title: "The orthogonal normal bundle of a submanifold is defined without a metric"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-normal-and-conormal-bundles-of-an-embedded-submanifold, prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

The orthogonal normal bundle of an embedded submanifold is defined without a
metric.

## Facts & Assumptions

**Given:** The displayed claim.

[L1] The quotient normal bundle is intrinsic, but the orthogonal normal bundle is
obtained only after choosing an ambient metric
([[def-normal-and-conormal-bundles-of-an-embedded-submanifold]],
[[prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle]]).

## Refutation

**Proof technique:** direct.

1.1 Let $S=\mathbb R\times\{0\}\subseteq\mathbb R^2$. For the Euclidean metric, the orthogonal complement of $TS$ is spanned by $\partial_y$. [L1, given]
2.1 For the metric $g=dx^2+2dx\,dy+2dy^2$, a vector $a\partial_x+b\partial_y$ is orthogonal to $\partial_x$ exactly when $a+b=0$, so the orthogonal complement is spanned by $\partial_y-\partial_x$. The orthogonal normal line therefore depends on the chosen metric, and only the quotient normal bundle is intrinsic. [L1, step 1.1, algebra] ∎