---
id: fs-every-tree-action-is-without-edge-inversions
kind: false-statement
title: "FALSE: every tree action is without edge inversions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-edge-inversion-and-action-without-inversions, lem-barycentric-subdivision-removes-edge-inversions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yuriy Tumarkin, Groups Acting on Trees"
      url: "https://www.scribd.com/document/825918235/trees"
---

## Statement

Every group action on a simplicial tree is automatically without edge
inversions.

## Facts & Assumptions

**Given:** The definitions of edge inversion and barycentric subdivision.

[L1] An action is without inversions exactly when no element sends an oriented edge to its reverse. ([[def-edge-inversion-and-action-without-inversions]])

[L2] Barycentric subdivision is used precisely to remove inversions when they are present. ([[lem-barycentric-subdivision-removes-edge-inversions]])

## Refutation

**Proof technique:** direct.

1.1 Let $T$ be a single geometric edge with endpoints $u,v$, and let the nontrivial element of $C_2$ swap $u$ and $v$. It sends one oriented edge $e:u\to v$ to its reverse $\bar e:v\to u$, so the action has an inversion in the sense of [L1]. [L1, given]

2.1 Since [L2] would be unnecessary if every action were already inversion-free, the example in step 1.1 disproves the statement. [L1, L2, step 1.1, algebra] ∎
