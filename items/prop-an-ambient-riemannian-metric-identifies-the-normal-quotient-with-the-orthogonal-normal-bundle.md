---
id: prop-an-ambient-riemannian-metric-identifies-the-normal-quotient-with-the-orthogonal-normal-bundle
kind: proposition
title: "Assuming countable choice, an ambient metric identifies the two normal bundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map, prop-orthogonal-complements-of-subbundles-are-smooth-subbundles, def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-vector-subbundle, def-smooth-vector-bundle-rank-fibre-and-trivial-bundle, def-smooth-bundle-metric, def-embedded-submanifold-and-slice-chart, prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding, def-induced-tangent-bundle-chart, thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]
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

Assume $\mathrm{AC}_\omega$. Let $S\subseteq M$ be an embedded submanifold and let $g$ be a Riemannian metric
on $M$. If $q:TM|_S\to\nu(S)=TM|_S/TS$ is the quotient map, then

$$q|_{TS^\perp}:TS^\perp\longrightarrow\nu(S)$$

is a smooth vector-bundle isomorphism. Thus the fixed metric $g$ canonically
identifies the quotient normal bundle with its $g$-orthogonal realization.

## Facts & Assumptions

**Given:** The axiom $\mathrm{AC}_\omega$, an embedded submanifold $S\subseteq M$, and an ambient Riemannian metric $g$ on $M$.

[L0] Under $\mathrm{AC}_\omega$, $TM$ has a smooth manifold structure for which the induced tangent-bundle charts form a smooth atlas ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]]).

[L4] An induced tangent-bundle chart sends $v=\sum_i v^i\partial_{x^i}|_p$ to $(x(p),(v^1,\dots,v^n))$ ([[def-induced-tangent-bundle-chart]]).

[L5] A smooth vector bundle is locally trivialized by fibrewise linear charts ([[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[L6] The inclusion $i:S\hookrightarrow M$ is smooth ([[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]]).

[L7] Pullback along a smooth map carries a smooth vector bundle to a smooth vector bundle ([[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]]).

[L8] In a slice chart, $S$ is a coordinate slice ([[def-embedded-submanifold-and-slice-chart]]).

[L9] A smooth subbundle is locally spanned by part of a smooth ambient frame ([[def-vector-subbundle]]).

[F0] A smooth bundle metric is a fibrewise inner product whose pairing of any
two smooth local sections is smooth ([[def-smooth-bundle-metric]]).

[L1] The orthogonal complement of a smooth subbundle is a smooth subbundle
([[prop-orthogonal-complements-of-subbundles-are-smooth-subbundles]]).

[L2] The quotient map $TM|_S\to\nu(S)$ is a smooth bundle map
([[prop-the-canonical-map-to-a-quotient-bundle-is-a-smooth-bundle-map]]).

[L3] A fibrewise bijective smooth bundle map over the identity is a bundle
isomorphism ([[prop-a-fibrewise-bijective-smooth-bundle-map-over-a-diffeomorphism-is-a-bundle-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L0], [L4], and [L5], the induced charts make $TM\to M$ a smooth vector bundle. By [L6] and [L7], its pullback along $i$ is the smooth vector bundle $TM|_S\to S$. In a slice chart from [L8], its coordinate frame is $\partial_{x_1},\dots,\partial_{x_k},\partial_{y_1},\dots,\partial_{y_c}$ and $TS$ is spanned by the first $k$ vectors, so [L9] makes $TS$ a smooth subbundle. In that pulled-back frame, the coefficients of $g|_S$ are the smooth coefficient functions of $g$ composed with the smooth inclusion $i$; hence [F0] makes $g|_S$ a smooth bundle metric on $TM|_S$. Applying [L1], the orthogonal complements $TS_p^\perp$ form a smooth subbundle and fibrewise $T_pM=T_pS\oplus T_pS^\perp$. [F0, L0, L1, L4, L5, L6, L7, L8, L9, given]
2.1 Restrict the quotient map of [L2] to $TS^\perp$. On each fibre this is the usual linear isomorphism from a chosen complement onto the quotient by $T_pS$. Hence the restricted map $TS^\perp\to\nu(S)$ is fibrewise bijective, so [L3] shows that it is a smooth bundle isomorphism. [L2, L3, step 1.1, algebra] ∎
