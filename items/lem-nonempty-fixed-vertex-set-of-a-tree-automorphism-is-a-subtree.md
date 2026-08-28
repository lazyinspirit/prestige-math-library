---
id: lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree
kind: lemma
title: "The nonempty fixed-vertex set of a tree automorphism is a subtree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fixed-subtree-and-minimal-invariant-subtree, thm-unique-reduced-path-characterisation-of-simplicial-trees]
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

Let $g$ be an automorphism of a simplicial tree $T$. If $g$ fixes at least one
vertex, then the set of fixed vertices of $g$ is a subtree of $T$.

## Facts & Assumptions

**Given:** An automorphism $g$ of a simplicial tree $T$ with a fixed vertex.

[L1] The fixed subtree of a subgroup is the subtree spanned by its fixed vertices, when those fixed vertices are nonempty. ([[def-fixed-subtree-and-minimal-invariant-subtree]])

[L2] Between any two vertices of a simplicial tree there is a unique reduced path. ([[thm-unique-reduced-path-characterisation-of-simplicial-trees]])

## Proof

**Proof technique:** direct.

1.1 Let $u$ and $v$ be fixed vertices of $g$. By [L2] there is a unique reduced path $P$ from $u$ to $v$. Applying $g$ to $P$ gives another reduced path from $u$ to $v$, so uniqueness in [L2] forces $g(P)=P$. [L2, given]

2.1 Every vertex on $P$ is therefore fixed by $g$, because $g$ preserves the ordered path and fixes its endpoints. Hence the fixed vertices are closed under the unique geodesic between any two of them, which is exactly the subtree condition described in [L1]. [L1, L2, step 1.1, algebra] ∎
