---
id: cor-bipartite-extremal-density-zero
kind: corollary
title: "Every bipartite graph with at least one edge has Turán density zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-kovari-sos-turan-bound, thm-turan-density-exists, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

If $H$ is a finite bipartite graph with at least one edge, then

$$\pi(H)=0.$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] The complete bipartite graph $K_{A,B}$ has exactly all edges joining a vertex of $A$ to a vertex of $B$ ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[F2] For $s,t\ge1$, the Kővári–Sós–Turán theorem gives $\operatorname{ex}(N,K_{s,t})=O_{s,t}(N^{2-1/s})$ ([[thm-kovari-sos-turan-bound]]).

[F3] For every finite graph $H$ with an edge, the normalized extremal numbers converge to $\pi(H)$, their infimum over $n\ge2$ ([[thm-turan-density-exists]]).

## Proof

**Proof technique:** embed the forbidden graph in a complete bipartite graph.

1.1 Choose a bipartition of $H$ and enlarge its two sides, including any isolated vertices, to positive sizes $s,t$ such that $H$ is an ordinary subgraph of $K_{s,t}$. Every $H$-free graph is then $K_{s,t}$-free. [given, F1]

2.1 Hence $0\le\operatorname{ex}(n,H)\le\operatorname{ex}(n,K_{s,t})=O_{s,t}(n^{2-1/s})$. Dividing by $\binom n2$ makes the right side tend to $0$. The existing limit $\pi(H)$ is therefore $0$. [step 1.1, given, F2, F3]

3.1 The at-least-one-edge hypothesis ensures both bipartition sides can be chosen positive and is exactly the scope in which the extremal density was defined. [step 1.1, step 2.1] ∎
