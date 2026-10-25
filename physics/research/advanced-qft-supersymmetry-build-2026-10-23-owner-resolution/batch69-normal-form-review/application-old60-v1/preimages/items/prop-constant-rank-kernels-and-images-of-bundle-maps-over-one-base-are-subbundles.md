---
id: prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles
kind: proposition
title: "Constant-rank kernels and images of bundle maps over one base are subbundles"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-subbundle, prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices, lem-matrix-inversion-preserves-ck-regularity, lem-kernel-basis-extension-gives-image-basis]
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

Let $\Phi:E\to F$ be a smooth vector bundle map over $\operatorname{id}_M$, and
assume that the fibre rank of $\Phi_p:E_p\to F_p$ is the same integer $k$ for
every $p\in M$. Then $\ker\Phi$ is a smooth vector subbundle of $E$ and
$\operatorname{im}\Phi$ is a smooth vector subbundle of $F$.

## Facts & Assumptions

**Given:** A smooth bundle map $\Phi:E\to F$ over $\operatorname{id}_M$ with constant fibre rank $k$.

[L1] In local frames, $\Phi$ is represented by a smooth matrix-valued function ([[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]]).

[L2] A smooth matrix-valued map has smooth inverse matrix entries wherever its determinant never vanishes ([[lem-matrix-inversion-preserves-ck-regularity]]).

## Proof

**Proof technique:** direct.

1.1 If $k=0$, then every fibre map is zero, so $\ker\Phi=E$ and $\operatorname{im}\Phi$ is the zero subbundle of $F$. Assume now that $k\ge1$, fix $p\in M$, and write $\Phi$ in local frames near $p$ as a smooth matrix $A(x)$. Because $\operatorname{rank}A(p)=k$, after reordering coordinates some $k\times k$ minor $B(x)$ is nonzero at $p$, hence nonzero on a smaller neighborhood. [L1, given]

2.1 Writing source coordinates as $(u,w)$ for that split, the kernel equation becomes $B(x)u+C(x)w=0$, so [L2] makes $B(x)^{-1}$ smooth and gives $u=-B(x)^{-1}C(x)w$. Therefore the kernel fibres are spanned by smooth local sections depending on the free variables $w$. [L2, step 1.1, algebra]

3.1 The same chosen $k$ columns of $A(x)$ remain linearly independent nearby, so they form a smooth local frame of the image bundle. Thus in the positive-rank case both the kernel and the image are locally spanned by part of a frame, and step 1.1 already handled $k=0$. Therefore $\ker\Phi$ and $\operatorname{im}\Phi$ are smooth vector subbundles. [L1, step 1.1, step 2.1, algebra] ∎
