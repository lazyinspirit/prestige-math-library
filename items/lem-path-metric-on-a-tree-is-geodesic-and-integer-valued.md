---
id: lem-path-metric-on-a-tree-is-geodesic-and-integer-valued
kind: lemma
title: "The path metric on a simplicial tree is geodesic and integer-valued"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simplicial-path-metric, thm-unique-reduced-path-characterisation-of-simplicial-trees]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

For a simplicial tree $T$, the path metric $d_T$ takes values in
$\mathbb N$, and for every two vertices $v,w$ the unique reduced path from $v$
to $w$ has length exactly $d_T(v,w)$.

## Facts & Assumptions

**Given:** A simplicial tree $T$.

[L1] The simplicial path metric is defined to be the length of the unique reduced path joining two vertices. ([[def-simplicial-path-metric]])

[L2] Every two vertices of a simplicial tree are joined by a unique reduced path. ([[thm-unique-reduced-path-characterisation-of-simplicial-trees]])

## Proof

**Proof technique:** direct.

1.1 By [L2], the reduced path from $v$ to $w$ exists and is unique. Its length is an integer, and [L1] defines $d_T(v,w)$ to be exactly that integer. So $d_T$ is integer-valued. [L1, L2, given]

2.1 Let $v=v_0,e_1,\dots,e_n,v_n=w$ be the unique reduced path. Every subpath is again reduced, so [L1] gives $d_T(v_i,v_j)=j-i$ for $i\le j$. Hence the path realizes distance on each of its segments, which is the geodesic property claimed in the statement. [L1, L2, step 1.1, algebra] ∎
