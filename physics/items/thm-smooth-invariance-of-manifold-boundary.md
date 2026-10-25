---
id: thm-smooth-invariance-of-manifold-boundary
kind: theorem
title: "Smooth invariance of the manifold boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interior-point-boundary-point-interior-and-boundary-of-a-manifold, lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions, prop-chain-rule-for-smooth-half-space-maps, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

A smooth diffeomorphism between relatively open half-space sets carries face points to face points and relative-interior points to relative-interior points; consequently $\partial M$ and $\operatorname{Int}M$ are intrinsic.

## Facts & Assumptions

**Given:** Relatively open sets $U,V\subseteq\mathbb H^n$ and a smooth diffeomorphism $f:U\to V$.

[L1] In dimension zero the model face is empty and every point of $\mathbb H^0$ is a relative-interior point ([[def-interior-point-boundary-point-interior-and-boundary-of-a-manifold]]).

[L2] Smooth half-space maps satisfy the intrinsic chain-rule formula ([[prop-chain-rule-for-smooth-half-space-maps]]).

## Proof

**Proof technique:** direct.

1.1 If $n=0$, [L1] makes the claim immediate. Assume $n\ge1$. At any $p\in U$, choose Euclidean extensions of $f$ and $f^{-1}$ near $p$ and $f(p)$. Since both half-space composites are the identity, [L2] gives $D(f^{-1})_{f(p)}Df_p=I$ and $Df_pD(f^{-1})_{f(p)}=I$. [given, L1, L2, cases]

2.1 For $n\ge1$, if a face point $p$ mapped to the relative interior, then on a Euclidean neighbourhood of $f(p)$ contained in $V$, the last coordinate of an extension of $f^{-1}$ would be nonnegative and would vanish at the interior point $f(p)$. Its differential there would therefore be zero, contradicting the invertibility from step 1.1. Applying the same argument to $f^{-1}$ proves the converse. Hence face and relative-interior points are preserved in every dimension, making the manifold boundary and interior intrinsic. [given, step 1.1, algebra] ∎
