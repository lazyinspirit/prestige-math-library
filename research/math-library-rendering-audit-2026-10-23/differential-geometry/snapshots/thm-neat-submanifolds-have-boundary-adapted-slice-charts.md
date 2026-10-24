---
id: thm-neat-submanifolds-have-boundary-adapted-slice-charts
kind: theorem
title: "Neat submanifolds have boundary-adapted slice charts"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-neat-submanifold-of-a-manifold-with-boundary, thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts, thm-transverse-preimage-theorem, thm-euclidean-inverse-function-theorem]
justified_by: []
aliases: []
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

A neat $k$-submanifold $S$ of an $n$-manifold with boundary has boundary charts simultaneously straightening $S$ and $\partial M$; in particular its induced boundary is $S\cap\partial M$.

## Facts & Assumptions

**Given:** A neat embedded $k$-submanifold $S$ of an $n$-manifold $M$ with boundary and a point $p\in S$.

[L1] Neatness means $S\cap\partial M=\partial S$ and transversality of $S$ to $\partial M$ ([[def-neat-submanifold-of-a-manifold-with-boundary]]).

[L2] A boundary submanifold of a boundaryless manifold has ordinary slice charts at its interior points ([[thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts]]).

[L3] A $C^1$ Euclidean map with invertible derivative is a local diffeomorphism ([[thm-euclidean-inverse-function-theorem]]).

## Proof

**Proof technique:** direct.

1.1 If $p\in\operatorname{Int}S$, then [L1] puts $p$ in $\operatorname{Int}M$, and [L2] applies inside $\operatorname{Int}M$. Now let $p\in\partial S=S\cap\partial M$. Choose boundary coordinates $(u,s)$ on $S$ and $(z,t)$ on $M$, and write the inclusion as $F(u,s)=(G(u,s),h(u,s))$. By [L1], $h(u,0)=0$ and transversality gives $d(h|_S)_p\ne0$. Its derivatives in the $u$-directions vanish on the face, so $\partial_sh(p)\ne0$; it is positive because $h(u,s)\ge0$ for $s\ge0$. [given, L1, L2]

2.1 By [L3], replacing the source normal coordinate $s$ by $h(u,s)$ is a half-space-preserving local coordinate change. Thus assume $F(u,s)=(G(u,s),s)$. The restriction of $F$ to the face is an embedding, so $D_uG(u,0)$ has rank $k-1$. If $k>1$, choose an invertible $(k-1)\times(k-1)$ minor and use [L3] again in a coordinate change preserving $s$; if $k=1$, this change is empty. In either case $F(u,s)=(u,H(u,s),s)$, where $H$ has $n-k$ components. [L3, step 1.1]

3.1 The target coordinate change $$(z',z'',t)\longmapsto (z',z''-H(z',t),t)$$ is a half-space-preserving local diffeomorphism, with inverse obtained by adding $H(z',t)$. It sends $S$ to the coordinate half-slice $\{z''=0,\ t\ge0\}$ and sends $S\cap\partial M$ to its face $\{z''=0,\ t=0\}$. This proves the simultaneous straightening and the asserted equality of induced boundary structures. [step 2.1] ∎
