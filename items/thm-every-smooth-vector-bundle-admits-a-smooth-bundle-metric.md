---
id: thm-every-smooth-vector-bundle-admits-a-smooth-bundle-metric
kind: theorem
title: "Every smooth vector bundle admits a smooth bundle metric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-bundle-metric, def-local-frame-and-global-frame-of-a-vector-bundle, prop-local-frames-and-local-trivializations-are-equivalent-data, def-euclidean-inner-product, thm-smooth-partitions-of-unity-exist-on-manifolds]
justified_by: []
aliases: []
landmark: true
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

Every smooth vector bundle admits a smooth bundle metric.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$.

[L1] The base manifold admits smooth partitions of unity subordinate to open
covers ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[L2] Local frames are equivalent to local trivializations
([[prop-local-frames-and-local-trivializations-are-equivalent-data]]).

## Proof

**Proof technique:** direct.

1.1 Choose a trivializing open cover $(U_\alpha)$ of $M$ and, by [L2], a local frame on each $U_\alpha$. Pull back the Euclidean inner product on $\mathbb R^r$ through that trivialization to obtain a smooth local bundle metric $h_\alpha$ on $E|_{U_\alpha}$. [L2, given, choose]

2.1 By [L1], choose a smooth partition of unity $(\rho_\alpha)$ subordinate to $(U_\alpha)$ and define $h:=\sum_\alpha \rho_\alpha h_\alpha.$ The sum is locally finite, so $h$ is smooth. At each point $p$, some $\rho_\alpha(p)>0$, all weights are nonnegative, and $\sum_\alpha\rho_\alpha(p)=1$, so $h_p$ is a positive-definite inner product on $E_p$. Therefore $h$ is a smooth bundle metric on $E$. [L1, step 1.1, construct, algebra] ∎