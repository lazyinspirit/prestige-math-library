---
id: ex-elliptic-and-hyperbolic-automorphisms
kind: example
title: "Elliptic and hyperbolic automorphisms on the line"
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
sources:
  scraped: []
  references:
    - title: "Jean-Pierre Serre, Trees"
      url: "https://www.scribd.com/document/551505445/Jean-Pierre-Serre-Trees-Springer-Verlag-1980"
---

## Example

On the bi-infinite line, reflection $r(n)=-n$ is elliptic and translation
$\tau_2(n)=n+2$ is hyperbolic.

## Facts & Assumptions

**Given:** The reflection $r$ and translation $\tau_2$ of the bi-infinite line.

[L1] Tree automorphisms without inversions are elliptic exactly when they fix a vertex, and hyperbolic exactly when they preserve a translation axis with positive translation length. ([[thm-elliptic-hyperbolic-dichotomy-for-tree-automorphisms]])

## Verification

**Proof technique:** direct.

1.1 The reflection $r$ fixes the vertex $0$, so [L1] places it in the elliptic case. [L1, given]

2.1 The translation $\tau_2$ has no fixed vertex and preserves the whole line while moving every vertex two steps, so [L1] places it in the hyperbolic case. [L1, step 1.1, algebra] ∎
