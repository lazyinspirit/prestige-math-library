---
id: prop-smoothness-of-a-map-on-an-embedded-submanifold-is-local-in-the-ambient-space
kind: proposition
title: "Smoothness of a map on an embedded submanifold is local in the ambient space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-embedded-submanifold-and-slice-chart, prop-smoothness-into-an-embedded-submanifold-is-an-initial-property, prop-smooth-maps-are-continuous]
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
    - title: "John M. Lee, Introduction to Smooth Manifolds, Restricting Maps to Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $S\subseteq M$ be an embedded submanifold and let $f:S\to N$ be a map to a
smooth manifold $N$. Then $f$ is smooth if and only if every point $p\in S$ has
an open neighbourhood $U\subseteq M$ and a smooth map $\widetilde f:U\to N$
such that $\widetilde f|_{U\cap S}=f|_{U\cap S}$.

## Facts & Assumptions

**Given:** An embedded submanifold $S\subseteq M$ and a map $f:S\to N$.

[F1] Embedded submanifolds have slice charts
([[def-embedded-submanifold-and-slice-chart]]).

[L1] A map into an embedded submanifold is smooth exactly when its ambient
composite is smooth
([[prop-smoothness-into-an-embedded-submanifold-is-an-initial-property]]).

[L2] Smooth maps are continuous ([[prop-smooth-maps-are-continuous]]).

## Proof
**Proof technique:** direct.

1.1 Assume $f$ is smooth. Fix $p\in S$ and choose a slice chart $\varphi:U\to\Omega\subseteq\mathbb R^m$ with $\varphi(S\cap U)=\Omega\cap(\mathbb R^k\times\{0\})$. In these coordinates, the representative of $f|_{S\cap U}$ depends only on the first $k$ variables. Extend it to all of $\Omega$ by ignoring the last $m-k$ coordinates. Transporting this extension back gives a smooth $\widetilde f:U\to N$ with $\widetilde f|_{U\cap S}=f|_{U\cap S}$. [F1, L2, given, construct]

2.1 Conversely, suppose every point has such an ambient extension. On each $U\cap S$, the restriction of $\widetilde f$ to the embedded submanifold $U\cap S$ is smooth by [L1], so $f$ is smooth near every point of $S$. Smooth maps being local on the source, $f$ is smooth on all of $S$. [L1, step 1.1, given]

3.1 Therefore the ambient-extension criterion is equivalent to smoothness of $f$. [step 1.1, step 2.1] ∎