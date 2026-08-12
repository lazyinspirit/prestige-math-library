---
id: thm-mantel-exact-and-unique
kind: theorem
title: "Mantel's theorem: $\\operatorname{ex}(n,K_3)=\\lfloor n^2/4\\rfloor$, uniquely attained by $T_{n,2}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extremal-number-turan-graph-and-blowup, def-graph-adjacency-incidence-neighbourhood-and-degree, lem-turan-graph-edge-count-and-balance]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb N$,

$$\operatorname{ex}(n,K_3)=\left\lfloor\frac{n^2}{4}\right\rfloor=e(T_{n,2}).$$

Every triangle-free graph on $n$ vertices has at most this many edges, and equality holds exactly for a graph isomorphic to the balanced complete bipartite graph $T_{n,2}$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] $\operatorname{ex}(n,H)$ is the maximum edge count of an $n$-vertex graph with no ordinary copy of $H$ ([[def-extremal-number-turan-graph-and-blowup]]).

[F2] The open neighbourhood is $N_G(v)=\{u:\{u,v\}\in E\}$ and $\deg_G(v)=|N_G(v)|$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

[F3] Among complete $r$-partite graphs on $n$ vertices, $T_{n,r}$ has maximum edge count, with equality exactly for balanced part sizes ([[lem-turan-graph-edge-count-and-balance]]).

## Proof

**Proof technique:** induction after deleting the ends of an edge.

1.1 The assertion is immediate for $n=0,1,2$. Assume it, including uniqueness, for $n-2$, and let $G$ be a triangle-free $n$-vertex graph. If $G$ has no edge its bound is immediate. Otherwise choose an edge $uv$. No vertex other than $u,v$ is adjacent to both ends, so $d(u)+d(v)\le n$. [given, F1, F2]

2.1 Delete $u,v$ to obtain a triangle-free graph $G'$. The removed edges number $d(u)+d(v)-1$, so $e(G)\le\lfloor(n-2)^2/4\rfloor+n-1=\lfloor n^2/4\rfloor$. The graph $T_{n,2}$ is triangle-free and has the last edge count, proving the exact maximum. [step 1.1, given, F1, F3]

3.1 Suppose equality holds. Then $G'\cong T_{n-2,2}$, $d(u)+d(v)=n$, and every other vertex is adjacent to exactly one of $u,v$. In each part of $G'$, triangle-freeness forces all vertices to choose the same endpoint: two vertices in opposite parts choosing the same endpoint would form a triangle with their cross edge. Hence adjoining $u$ to one part and $v$ to the other makes $G$ complete bipartite. [step 1.1, step 2.1]

4.1 Its two part sizes sum to $n$ and its product is $\lfloor n^2/4\rfloor$; the balancing equality in the preceding lemma forces them to differ by at most $1$. Thus $G\cong T_{n,2}$. Conversely that graph has equality, completing the induction and the uniqueness proof. [step 3.1, given, F3]

5.1 Steps 1.1-4.1 prove Mantel's theorem independently of Turán's theorem, for all $n$ and with equality fully characterized. [step 1.1, step 2.1, step 3.1, step 4.1] ∎
