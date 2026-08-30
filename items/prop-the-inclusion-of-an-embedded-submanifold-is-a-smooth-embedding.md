---
id: prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding
kind: proposition
title: "The inclusion of an embedded submanifold is a smooth embedding"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-embedding, lem-slice-chart-restrictions-form-a-smooth-atlas]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Embedded Submanifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

If $S\subseteq M$ is an embedded submanifold equipped with the smooth structure
from its restricted slice charts, then the inclusion $i:S\hookrightarrow M$ is
a smooth embedding.

## Facts & Assumptions

**Given:** An embedded submanifold $S\subseteq M$ with its slice-chart smooth
structure.

[F1] A smooth embedding is an injective immersion and a homeomorphism onto its
image with the subspace topology ([[def-smooth-embedding]]).

[L1] The restricted slice charts form a smooth atlas on $S$ with the subspace
topology ([[lem-slice-chart-restrictions-form-a-smooth-atlas]]).

## Proof
**Proof technique:** direct.

1.1 The inclusion $i:S\hookrightarrow M$ is injective and, by [L1], a homeomorphism of $S$ onto its image because the domain topology of $S$ is exactly the subspace topology. [L1, given]

1.2 In a restricted slice chart on $S$ and the ambient slice chart on $M$, the coordinate representative of $i$ is $u\mapsto(u,0)$. Its differential is the coordinate inclusion, hence injective, so $i$ is an immersion. [L1]

2.1 Steps 1.1 and 1.2 verify the clauses in [F1], so $i$ is a smooth embedding. [F1, step 1.1, step 1.2] ∎
