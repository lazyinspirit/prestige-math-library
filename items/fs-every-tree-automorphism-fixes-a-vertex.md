---
id: fs-every-tree-automorphism-fixes-a-vertex
kind: false-statement
title: "FALSE: every tree automorphism fixes a vertex"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Statement

Every automorphism of a simplicial tree fixes a vertex.

## Facts & Assumptions

**Given:** The elliptic/hyperbolic dichotomy.

[L1] A tree automorphism without inversions is either elliptic with a fixed vertex or hyperbolic with a translation axis and positive translation length. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Refutation

**Proof technique:** direct.

1.1 Translation by $n\mapsto n+1$ on the bi-infinite line is hyperbolic: it preserves the whole line and moves every vertex a positive distance. This is the second case of [L1]. [L1, given]

2.1 A hyperbolic automorphism has no fixed vertex, so the translation from step 1.1 is a counterexample. Hence the statement is false. [L1, step 1.1, algebra] ∎
