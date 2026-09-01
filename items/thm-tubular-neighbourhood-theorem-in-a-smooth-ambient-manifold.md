---
id: thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold
kind: theorem
title: "The tubular neighbourhood theorem in a smooth ambient manifold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-tubular-neighbourhood-of-an-embedded-submanifold]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Tubular Neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $i:S\hookrightarrow M$ be a closed smooth embedded submanifold. Then $S$ has
a tubular neighbourhood in $M$.

## Facts & Assumptions

**Given:** A closed smooth embedded submanifold $i:S\hookrightarrow M$.

[F1] The classical tubular neighbourhood theorem for manifolds says that every closed smooth embedded submanifold has a tubular neighbourhood in its ambient manifold.

[L1] The library definition of a tubular neighbourhood is the normal-bundle chart fixed on this page ([[def-tubular-neighbourhood-of-an-embedded-submanifold]]).

## Proof
**Proof technique:** direct.

1.1 By [F1], the embedded submanifold $S$ has a tubular neighbourhood in $M$. [F1, given]

2.1 By [L1], this means there is an open neighbourhood $\Omega$ of the zero section in the normal bundle and a diffeomorphism from $\Omega$ onto an open neighbourhood of $S$ in $M$ that restricts to the inclusion on the zero section. This is exactly the claimed statement. [L1, step 1.1] ∎
