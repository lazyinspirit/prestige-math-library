---
id: lem-co-e-free-mixed-vertices-on-an-induced-path-avoid-two-nonneighbours-and-three-neighbours
kind: lemma
title: "Relative to a complete nonedge pair in a co-$E$-free graph, a one-sided vertex mixed on an induced path avoids two consecutive nonneighbours and three consecutive neighbours"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-e-graph-and-co-e-graph, def-graph-walk-trail-path-and-cycle, def-induced-embedding-and-induced-copy, def-graph-adjacency-incidence-neighbourhood-and-degree, def-edges-between-sets-and-pure-mixed-pairs]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Huang, Ju, and Zhou, Erdős-Hajnal beyond the five-vertex path, Claim 6.4.1"
      url: "https://arxiv.org/html/2606.06258v2"
---

## Statement

Let $G$ be co-$E$-free, let $P$ be an induced path, and let distinct vertices $x,y\notin V(P)$ be nonadjacent and complete to $P$. If $u\in N(x)\setminus N(y)$ is mixed on $P$, then $u$ has neither two consecutive nonneighbours nor three consecutive neighbours on $P$.

## Facts & Assumptions
**Given:** $G,P,x,y,u$ as in the Statement.

[F1] In co-$E$, adjacency is the complement of the five-path-with-middle-leaf edge set defining $E$ ([[def-e-graph-and-co-e-graph]]).

[F2] A path has distinct vertices and its listed consecutive edges, while an induced copy preserves both adjacency and nonadjacency. Hence an induced path has precisely its consecutive path edges among its own vertices ([[def-graph-walk-trail-path-and-cycle]], [[def-induced-embedding-and-induced-copy]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose two consecutive vertices of $P$ are nonneighbours of $u$. Travelling from a neighbour of $u$ on $P$ to the first such consecutive pair and taking the first change gives an induced subpath $a-b-c$ with $ua$ an edge and $ub,uc$ nonedges. [given, F2, assume-contra]

1.2 If instead $u$ has three consecutive neighbours, reverse $P$ if needed and take the last such run before an adjacency change. There is an induced subpath $a-b-c-d$ with $ua,ub,uc$ edges and $ud$ a nonedge. [given, F2, construct]

2.1 On $\{x,y,u,a,b,c\}$ the nonedges are exactly the $E$-edges under $(p_1,p_2,p_3,p_4,p_5,q)=(x,y,u,c,a,b)$: they are $xy,yu,uc,ca,ub$. Thus this induced subgraph is co-$E$, contrary to [F1]. [step 1.1, F1, F2, contradiction]

2.2 On $\{y,u,a,b,c,d\}$ the nonedges are exactly the $E$-edges under $(p_1,p_2,p_3,p_4,p_5,q)=(c,a,d,u,y,b)$: they are $ca,ad,du,uy,db$. This is an induced co-$E$, again a contradiction. [step 1.2, F1, F2, contradiction]

3.1 Both assumed runs are impossible, proving the two assertions. [step 2.1, step 2.2, discharge-contradiction] ∎
