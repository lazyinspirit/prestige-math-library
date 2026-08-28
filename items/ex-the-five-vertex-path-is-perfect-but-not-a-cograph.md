---
id: ex-the-five-vertex-path-is-perfect-but-not-a-cograph
kind: example
title: "The five-vertex path is perfect but not a cograph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-perfect-graph,
       thm-cographs-are-exactly-the-p-four-free-graphs,
       def-standard-complete-bipartite-path-and-cycle-graphs]
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
    - title: "Maria Chudnovsky, The Erdos-Hajnal Conjecture - A Survey, Introduction"
      url: "https://arxiv.org/pdf/1606.08827"
    - title: "Tero Harju, Lecture Notes on Combinatorial Structures in Graph Theory, Exercise 5.3"
      url: "https://users.utu.fi/harju/Structures/Structure2018.pdf"
pipeline_run: null
---

## Example

The path $P_5$ is perfect but not a cograph.

## Facts & Assumptions

**Given:** The path $P_5$ on vertices $0,1,2,3,4$.

[L1] A graph is perfect when every induced subgraph $H$ satisfies
$\chi(H)=\omega(H)$ ([[def-perfect-graph]]).

[L2] The path $P_5$ has edges exactly $01,12,23,34$, so its first four
vertices induce $P_4$
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] A graph is a cograph if and only if it is $P_4$-free
([[thm-cographs-are-exactly-the-p-four-free-graphs]]).

[F1] Every induced subgraph of a path is a disjoint union of shorter paths,
obtained by deleting vertices and keeping the remaining consecutive segments.

## Verification

**Proof technique:** direct finite check.

1.1 Let $H$ be an induced subgraph of $P_5$. By [F1], each connected component of $H$ is a path. Colour each component alternately along the path. This gives a proper colouring with $0$ colours when $H$ is empty, with $1$ colour when $H$ is nonempty and edgeless, and with $2$ colours when $H$ has an edge. [F1, L2]

1.2 By [L2], the vertices $\{0,1,2,3\}$ induce $P_4$. Therefore $P_5$ is not $P_4$-free, and [L3] shows that $P_5$ is not a cograph. [L2, L3]

2.1 The same trichotomy gives the clique number of $H$: it is $0$ when $H$ is empty, $1$ when $H$ is nonempty and edgeless, and $2$ when $H$ has an edge, because no path contains a triangle and disjoint union adds no new edges. Hence $\chi(H)=\omega(H)$ for every induced subgraph $H$, so [L1] shows that $P_5$ is perfect. [step 1.1, F1, L1]

3.1 Therefore $P_5$ is perfect but not a cograph. [step 2.1, step 1.2] ∎
