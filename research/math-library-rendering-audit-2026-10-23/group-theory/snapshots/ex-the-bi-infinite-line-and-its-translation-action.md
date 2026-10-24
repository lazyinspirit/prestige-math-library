---
id: ex-the-bi-infinite-line-and-its-translation-action
kind: example
title: "The bi-infinite line and its translation action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-translation-length-of-a-tree-automorphism-without-inversions, thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Example

Let $L$ have vertex set $\mathbb Z$ and one geometric edge between $n$ and
$n+1$ for each $n\in\mathbb Z$. Then $L$ is a simplicial tree, and translation
$\tau(n)=n+1$ is a hyperbolic automorphism with axis $L$ itself and translation
length $1$.

## Facts & Assumptions

**Given:** The bi-infinite line $L$ and the translation $\tau$.

[L1] Translation length is the minimum displacement on the vertex set. ([[def-translation-length-of-a-tree-automorphism-without-inversions]])

[L2] A hyperbolic automorphism preserves a unique axis and translates along it by its translation length. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Verification

**Proof technique:** direct.

1.1 Every two integers are joined in $L$ by the obvious consecutive edge path, and no reduced closed path exists, so $L$ is a simplicial tree. The map $\tau(n)=n+1$ preserves adjacency and has no fixed vertex. [L2, given]

2.1 Every vertex moves distance $1$, so [L1] gives $\ell(\tau)=1$. Therefore [L2] places $\tau$ in the hyperbolic case, with axis equal to the whole line $L$. [L1, L2, step 1.1, algebra] ∎
