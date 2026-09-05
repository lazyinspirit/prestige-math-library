---
id: cor-maximal-integral-manifolds-partition-the-manifold
kind: corollary
title: "Maximal integral manifolds partition the manifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

If $\mathcal D$ is an integrable distribution on $M$, then its maximal
connected integral manifolds form a partition of $M$.

## Facts & Assumptions

**Given:** An integrable distribution $\mathcal D$ on $M$.

[A1] Maximal leaves are the equivalence classes of the leaf relation.

## Proof

**Proof technique:** direct.

1.1 Every point of $M$ lies in its own equivalence class, so the union of the [given]
maximal leaves is all of $M$. [given]

1.2 Distinct equivalence classes are disjoint. Therefore distinct maximal [given]
connected integral manifolds are disjoint. [given]

2.1 Hence the maximal connected integral manifolds partition $M$. [given] ∎ [given]
