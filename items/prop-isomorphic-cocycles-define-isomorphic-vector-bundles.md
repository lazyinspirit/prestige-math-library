---
id: prop-isomorphic-cocycles-define-isomorphic-vector-bundles
kind: proposition
title: "Isomorphic cocycles define isomorphic vector bundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-bundle-chart-and-transition-function, thm-vector-bundle-construction-from-a-smooth-cocycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

Suppose two smooth rank-$r$ cocycles on the same open cover satisfy

$$g'_{\beta\alpha}(p)=h_\beta(p)g_{\beta\alpha}(p)h_\alpha(p)^{-1}$$

for smooth maps $h_\alpha:U_\alpha\to GL(r,\mathbb R)$. Then the two cocycles
define isomorphic smooth vector bundles.

## Facts & Assumptions

**Given:** Two smooth cocycles $(g_{\beta\alpha})$ and $(g'_{\beta\alpha})$ on the
same cover, together with a gauge family $(h_\alpha)$ satisfying the displayed
relation.

[L1] A smooth cocycle on a countable cover determines a smooth vector bundle by
the quotient construction ([[thm-vector-bundle-construction-from-a-smooth-cocycle]]).

## Proof

**Proof technique:** direct.

1.1 On the $\alpha$-th trivializing piece define $H_\alpha(p,v)=(p,h_\alpha(p)v)$. If $(p,v)_\alpha\sim(p,g_{\beta\alpha}(p)v)_\beta$, then the gauge relation gives $H_\beta(p,g_{\beta\alpha}(p)v)=(p,g'_{\beta\alpha}(p)h_\alpha(p)v)=H_\alpha(p,v)$, so the local maps descend to a well-defined bundle map $H:E\to E'$. [L1, given, construct]
2.1 In the quotient charts of [L1], the descended map is $(p,v)\mapsto(p,h_\alpha(p)v)$, hence smooth and fibrewise linear. Replacing $h_\alpha$ by $h_\alpha^{-1}$ gives the inverse construction, so $H$ is a smooth bundle isomorphism. [L1, step 1.1, algebra] ∎