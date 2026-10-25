---
id: ex-a-coleaf-is-a-leaf-in-the-complement-of-the-five-vertex-path
kind: example
title: "A co-leaf of $\\overline{P_5}$ is exactly a leaf of $P_5$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-coleaf-of-a-graph, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
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
    date: 2026-08-27
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $P_5$ have vertices $1,2,3,4,5$ in path order. In $\overline{P_5}$ the
vertices $1$ and $5$ are co-leaves, and no other vertex is.

## Facts & Assumptions

**Given:** The five-vertex path $P_5$ with edges $12,23,34,45$.

[L1] A co-leaf of a graph is a vertex that is a leaf in the complement, equivalently a vertex of degree $|V(G)|-2$ ([[def-coleaf-of-a-graph]]).

[L2] The complement contains exactly the nonedges of the original graph ([[def-graph-isomorphism-and-complement]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], the complement $\overline{P_5}$ has edges $13,14,15,24,25,35$. So vertices $1$ and $5$ each have degree $3=5-2$ in $\overline{P_5}$, while vertices $2,3,4$ each have degree $2$. [given, L2, algebra]

2.1 Step 1.1 and [L1] show that $1$ and $5$ are co-leaves of $\overline{P_5}$, and that $2,3,4$ are not. Since $1$ and $5$ are exactly the leaves of the path $P_5$, the co-leaves of $\overline{P_5}$ are precisely the leaves of $P_5$. [step 1.1, L1] ∎
