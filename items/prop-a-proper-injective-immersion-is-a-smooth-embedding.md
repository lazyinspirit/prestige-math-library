---
id: prop-a-proper-injective-immersion-is-a-smooth-embedding
kind: proposition
title: "A proper injective immersion is a smooth embedding"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-embedding,
       cor-every-immersion-is-locally-an-embedding,
       prop-smooth-maps-are-continuous,
       thm-locally-compact-hausdorff-basics]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Embeddings"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

Let $F:M\to N$ be a proper injective immersion of smooth manifolds. Then $F$ is
a smooth embedding.

## Facts & Assumptions

**Given:** A proper injective immersion $F:M\to N$.

[F1] A smooth embedding is an injective immersion that is a homeomorphism onto
its image with the subspace topology ([[def-smooth-embedding]]).

[L1] Every immersion is locally an embedding
([[cor-every-immersion-is-locally-an-embedding]]).

[L2] Smooth maps are continuous, and manifolds are locally compact Hausdorff
spaces ([[prop-smooth-maps-are-continuous]],
[[thm-locally-compact-hausdorff-basics]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], each point $p\in M$ has a neighbourhood $U_p$ such that $F|_{U_p}$ is an embedding onto an embedded submanifold of $N$. In particular, the image of a closed subset of $U_p$ is closed in $F(U_p)$. [L1, given]

1.2 By [L2], $F$ is continuous and $M$ is locally compact while $N$ is Hausdorff. A proper continuous map from a locally compact Hausdorff space to a Hausdorff space is closed, so $F$ sends closed sets in $M$ to closed sets in $N$. Therefore the corestriction $F:M\to F(M)$ is a closed continuous bijection. [L2, given]

2.1 A closed continuous bijection onto a subspace is a homeomorphism. Thus the corestriction $F:M\to F(M)$ is a homeomorphism, while step 1.1 already gives the local embedded-submanifold model coming from the immersion. By [F1], $F$ is a smooth embedding. [F1, step 1.1, step 1.2] ∎
