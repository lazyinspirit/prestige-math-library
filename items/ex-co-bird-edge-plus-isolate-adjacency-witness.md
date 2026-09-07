---
id: ex-co-bird-edge-plus-isolate-adjacency-witness
title: "The first co-Bird witness by adjacency"
kind: example
status: draft
origin: pipeline
deps: ["lem-co-bird-free-edge-plus-isolate-witness-obstruction", "def-bird-graph-and-co-bird-graph"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Figure 9, first witness"
      url: https://arxiv.org/html/2606.06258v2
---

## Example

On six distinct vertices $(x,y,u,a,b,c)$ take exactly the edges $xa,xb,xc,ya,yb,yc,xu,ua,ab$. This graph is co-Bird and realizes the edge-plus-isolate obstruction configuration.

## Facts & Assumptions

[F1] [[lem-co-bird-free-edge-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c\}$ induces just the edge $ab$, then $u$ cannot be mixed on $\{a,b\}$ and nonadjacent to $c$.

[F2] [[def-bird-graph-and-co-bird-graph]] supplies the following definition: The **Bird graph** is the graph on vertices $\{x_1,x_2,x_3,y,z,w\}$ with edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}.$ So $\{x_1,x_2,x_3,y,z\}$ spans the bull, and $w$ is a new leaf attached to the horn vertex $y$. The **co-Bird graph** is the complement of the Bird graph.

## Verification

**Given:** The graph, vertices, sets and hypotheses in the example.

1.1 The fifteen unordered pairs split into nine edges $xa,xb,xc,ya,yb,yc,xu,ua,ab$ and six nonedges $xy,yu,ub,uc,ac,bc$. Under $(x,y,u,a,b,c)\mapsto(w,y,x_1,z,x_3,x_2)$ the latter become precisely $wy,yx_1,x_1x_3,x_1x_2,zx_2,x_3x_2$, the Bird edges. The map is bijective and hence verifies both edges and nonedges of co-Bird. [F2, given]

2.1 The induced set $\{a,b,c\}$ has just edge $ab$, the nonadjacent pair $x,y$ is complete to it, and $u$ sees $x,a$ but misses $y,b,c$. These are exactly the prohibited data of the first obstruction; the example itself contains co-Bird and therefore does not satisfy that lemma’s freeness assumption. [F1] ∎
