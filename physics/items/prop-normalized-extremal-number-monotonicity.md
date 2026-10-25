---
id: prop-normalized-extremal-number-monotonicity
kind: proposition
title: "$\\operatorname{ex}(n,H)/\\binom n2$ is nonincreasing for $n\\ge2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-asymptotic-extremal-notation-and-edge-density, thm-double-counting, def-subgraph-induced-subgraph-and-spanning-subgraph]
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

Let $H$ be a finite graph with at least one edge. For every $n\ge3$,

$$\frac{\operatorname{ex}(n,H)}{\binom n2}\le\frac{\operatorname{ex}(n-1,H)}{\binom{n-1}{2}}.$$

Hence the sequence indexed by $n\ge2$ is nonincreasing.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] For $n\ge2$, the normalized extremal number is $\operatorname{ex}(n,H)/\binom n2$ ([[def-asymptotic-extremal-notation-and-edge-density]]).

[F2] The induced subgraph $G[W]$ retains exactly the edges of $G$ with both endpoints in $W$ ([[def-subgraph-induced-subgraph-and-spanning-subgraph]]).

[F3] For a finite incidence relation, the sum of its row-fibre sizes equals the sum of its column-fibre sizes ([[thm-double-counting]]).

## Proof

**Proof technique:** double-count an edge and a deleted vertex.

1.1 Let $G$ be an $n$-vertex $H$-free graph with $e(G)=\operatorname{ex}(n,H)$. Every induced graph $G-v$ is still $H$-free, so $e(G-v)\le\operatorname{ex}(n-1,H)$. [given, F2]

2.1 Count pairs $(e,v)$ with $e\in E(G)$ and $v$ not incident with $e$. Each edge has $n-2$ choices of $v$, while for fixed $v$ there are $e(G-v)$ choices. Double counting gives $(n-2)e(G)=\sum_v e(G-v)\le n\operatorname{ex}(n-1,H)$. [step 1.1, given, F3]

3.1 Substituting $e(G)=\operatorname{ex}(n,H)$ and using $\binom n2=n(n-1)/2$ and $\binom{n-1}{2}=(n-1)(n-2)/2$ turns step 2.1 into the displayed inequality. There is no comparison before $n=3$, so the sequence begins at $n=2$. [step 2.1, algebra, F1] ∎
