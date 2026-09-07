---
id: ex-co-bird-path-plus-isolate-adjacency-witness
title: "The second co-Bird witness by adjacency"
kind: example
status: published
origin: pipeline
deps: ["lem-co-bird-free-path-plus-isolate-witness-obstruction", "def-bird-graph-and-co-bird-graph"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "Finite adjacency analysis and structural deduction"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Huang–Ju–Zhou, Erdős–Hajnal beyond the five-vertex path, §6.2, Figure 9, second witness"
      url: https://arxiv.org/html/2606.06258v2
---

## Example

On six distinct vertices $(y,u,a,b,c,d)$ take exactly the edges $ya,yb,yc,yd,ub,uc,ud,ab,bc$. This graph is co-Bird and is the six-vertex witness for the path-plus-isolate obstruction.

## Facts & Assumptions

[F1] [[lem-co-bird-free-path-plus-isolate-witness-obstruction]] supplies the following statement: Let $G$ be a finite simple co-Bird-free graph. Let $x,y,u$ be distinct vertices outside the indicated induced subgraph, with $xy\notin E(G)$, $ux\in E(G)$ and $uy\notin E(G)$, and with $x,y$ complete to that subgraph. If $H=\{a,b,c,d\}$ induces the path $a-b-c$ and isolated vertex $d$, then $u$ cannot be adjacent to $d$ and two consecutive vertices of the path and nonadjacent to the remaining endpoint.

[F2] [[def-bird-graph-and-co-bird-graph]] supplies the following definition: The **Bird graph** is the graph on vertices $\{x_1,x_2,x_3,y,z,w\}$ with edge set $\{x_1x_2,x_2x_3,x_1x_3,x_1y,x_2z,yw\}.$ So $\{x_1,x_2,x_3,y,z\}$ spans the bull, and $w$ is a new leaf attached to the horn vertex $y$. The **co-Bird graph** is the complement of the Bird graph.

## Verification

**Given:** The graph, vertices, sets and hypotheses in the example.

1.1 The complement consists exactly of the six pairs $yu,ua,ac,ad,bd,cd$. The other nine of the fifteen pairs are the stated edges. The bijection $(y,u,a,b,c,d)\mapsto(w,y,x_1,z,x_3,x_2)$ sends these six pairs to $wy,yx_1,x_1x_3,x_1x_2,zx_2,x_3x_2$, precisely the Bird edges, and sends the other pairs to co-Bird edges. [F2, given]

2.1 Here $a-b-c$ is induced, $d$ is isolated from that path, $y$ is complete to all four vertices and misses $u$, while $u$ sees exactly $b,c,d$ among them. These are the six vertices of the co-Bird witness underlying the second obstruction. The obstruction's full hypothesis also requires a seventh vertex $x$: add $x$ adjacent to $u,a,b,c,d$ and nonadjacent to $y$; the displayed induced co-Bird persists. [F1] ∎
